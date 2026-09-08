const mongoose = require('mongoose');
const HackathonResult = require('../models/HackathonResult');
const HackathonTeam = require('../models/HackathonTeam');
const HackathonSubmission = require('../models/HackathonSubmission');
const HackathonEditorialAssignment = require('../models/HackathonEditorialAssignment');
const HackathonEditorialEvaluation = require('../models/HackathonEditorialEvaluation');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonAuditLog = require('../models/HackathonAuditLog');

/**
 * Deterministic Result Calculation Service for Code-A-Nova Hackathon
 */
class HackathonResultService {
  /**
   * Run server-side score aggregation and ranking
   */
  static async calculateResults({ hackathonId, actorId, actorName, actorEmail, req }) {
    const targetHackathonId = hackathonId || req?.hackathonId || 'can-hackathon-2026';

    // 1. Verify hackathon settings & lock status
    const setting = await HackathonSetting.getOrCreateSettings(targetHackathonId);
    if (setting?.resultsLocked) {
      throw new Error('Official results are locked and cannot be recalculated without explicit administrative reopening.');
    }

    // 2. Fetch all teams strictly belonging to the target hackathon
    const teamFilter = {
      hackathonId: targetHackathonId,
      isDeleted: { $ne: true },
    };
    const teams = await HackathonTeam.find(teamFilter).lean();

    if (!teams || teams.length === 0) {
      return {
        success: true,
        message: 'No teams found for result calculation.',
        consideredCount: 0,
        eligibleCount: 0,
        pendingCount: 0,
        ineligibleCount: 0,
        rankings: [],
        ties: [],
      };
    }

    // 3. Batch fetch all submissions, assignments, and finalized evaluations
    const teamIds = teams.map((t) => t._id);
    const teamStringIds = teams.map((t) => t.teamId);

    const [submissions, assignments, finalizedEvaluations] = await Promise.all([
      HackathonSubmission.find({ hackathonId: targetHackathonId }).lean(),
      HackathonEditorialAssignment.find({
        hackathonId: targetHackathonId,
        status: 'ACTIVE',
      })
        .populate('editorialMember', 'name email role isActive')
        .lean(),
      HackathonEditorialEvaluation.find({
        hackathonId: targetHackathonId,
        status: 'FINALIZED',
        isLocked: true,
      })
        .populate('editorialMember', 'name email role isActive')
        .lean(),
    ]);

    // Build lookup maps for efficient zero-N+1 access
    const submissionMap = {};
    submissions.forEach((sub) => {
      submissionMap[String(sub.team)] = sub;
      submissionMap[sub.teamId] = sub;
    });

    const assignmentMap = {};
    assignments.forEach((as) => {
      const tKey = String(as.team);
      if (!assignmentMap[tKey]) assignmentMap[tKey] = [];
      assignmentMap[tKey].push(as);
    });

    const evalMap = {};
    finalizedEvaluations.forEach((ev) => {
      const tKey = String(ev.team);
      if (!evalMap[tKey]) evalMap[tKey] = [];
      evalMap[tKey].push(ev);
    });

    // 4. Process each team and evaluate eligibility
    const processedResults = [];
    const ties = [];

    teams.forEach((team) => {
      const tKey = String(team._id);
      const teamSubmission = submissionMap[tKey] || submissionMap[team.teamId];
      const teamAssignments = assignmentMap[tKey] || [];
      const teamEvals = evalMap[tKey] || [];

      const judgeCount = teamAssignments.length;
      const finalizedJudgeCount = teamEvals.length;
      const pendingJudgeCount = Math.max(0, judgeCount - finalizedJudgeCount);

      let rankingStatus = 'READY';
      let statusReason = '';

      // Check Eligibility conditions
      if (team.status === 'REJECTED') {
        rankingStatus = 'INELIGIBLE';
        statusReason = 'Team was rejected in admin review.';
      } else if (!teamSubmission || teamSubmission.status !== 'SUBMITTED') {
        rankingStatus = 'INELIGIBLE';
        statusReason = 'Final project submission missing or not completed.';
      } else if (judgeCount === 0) {
        rankingStatus = 'INELIGIBLE';
        statusReason = 'No judges assigned to evaluate project.';
      } else if (pendingJudgeCount > 0) {
        rankingStatus = 'PENDING_EVALUATIONS';
        statusReason = `${pendingJudgeCount} assigned judge evaluation(s) pending completion.`;
      }

      // Compute score if READY
      let finalScore = 0;
      let averageScore = 0;
      if (rankingStatus === 'READY' && finalizedJudgeCount > 0) {
        const totalSum = teamEvals.reduce((sum, ev) => sum + (ev.totalScore || 0), 0);
        averageScore = Number((totalSum / finalizedJudgeCount).toFixed(2));
        finalScore = averageScore;
      }

      // Build score snapshot
      const scoreSnapshot = teamEvals.map((ev) => ({
        judgeId: ev.editorialMember?._id,
        judgeName: ev.editorialMember?.name || 'Unknown Judge',
        judgeEmail: ev.editorialMember?.email || '',
        criteriaScores: (ev.criteriaScores || []).map((c) => ({
          criterionId: c.criterionId || '',
          criterionName: c.criterionName || '',
          score: c.score || 0,
          maxScore: c.maxScore || 25,
        })),
        totalScore: ev.totalScore || 0,
        comments: ev.comments || '',
        finalizedAt: ev.finalizedAt || ev.updatedAt || new Date(),
      }));

      processedResults.push({
        teamObjectId: team._id,
        teamId: team.teamId,
        teamName: team.teamName,
        track: team.track || 'General Track',
        submissionId: teamSubmission?._id || null,
        judgeCount,
        finalizedJudgeCount,
        pendingJudgeCount,
        rankingStatus,
        statusReason,
        finalScore,
        averageScore,
        scoreSnapshot,
      });
    });

    // 5. Separate eligible READY teams for deterministic sorting & tie detection
    const eligibleTeams = processedResults.filter((r) => r.rankingStatus === 'READY');
    const ineligibleTeams = processedResults.filter((r) => r.rankingStatus !== 'READY');

    // Deterministic Sort: Primary: finalScore DESC, Secondary: teamId ASC (stable ordering)
    eligibleTeams.sort((a, b) => {
      if (b.finalScore !== a.finalScore) {
        return b.finalScore - a.finalScore;
      }
      return a.teamId.localeCompare(b.teamId);
    });

    // 6. Assign Ranks and Detect Ties
    // Detect ties among adjacent teams with identical final scores
    const scoreFrequency = {};
    eligibleTeams.forEach((t) => {
      scoreFrequency[t.finalScore] = (scoreFrequency[t.finalScore] || 0) + 1;
    });

    let currentRank = 1;
    eligibleTeams.forEach((team, idx) => {
      if (idx > 0 && team.finalScore < eligibleTeams[idx - 1].finalScore) {
        currentRank = idx + 1;
      }
      team.rank = currentRank;

      // If multiple teams share the same score, flag tie
      if (scoreFrequency[team.finalScore] > 1) {
        team.rankingStatus = 'TIE';
        team.statusReason = `Tie detected with score ${team.finalScore}.`;
        const tiedPeerIds = eligibleTeams
          .filter((peer) => peer.finalScore === team.finalScore && peer.teamId !== team.teamId)
          .map((peer) => peer.teamId);
        team.tieDetails = {
          isTie: true,
          tiedWithTeamIds: tiedPeerIds,
        };

        if (!ties.find((tie) => tie.score === team.finalScore)) {
          ties.push({
            score: team.finalScore,
            teams: eligibleTeams
              .filter((p) => p.finalScore === team.finalScore)
              .map((p) => ({ teamId: p.teamId, teamName: p.teamName, rank: p.rank })),
          });
        }
      } else {
        team.tieDetails = {
          isTie: false,
          tiedWithTeamIds: [],
        };
      }
    });

    // Ineligible teams get null rank
    ineligibleTeams.forEach((team) => {
      team.rank = null;
      team.tieDetails = {
        isTie: false,
        tiedWithTeamIds: [],
      };
    });

    const allRanked = [...eligibleTeams, ...ineligibleTeams];

    // 7. Persist or Update into HackathonResult collection
    // Automatically purge stale result records for teams that were deleted or no longer exist in this hackathon
    if (teamStringIds.length > 0) {
      await HackathonResult.deleteMany({
        hackathonId: targetHackathonId,
        teamId: { $nin: teamStringIds },
      });
    }

    const existingResults = await HackathonResult.find({ hackathonId: targetHackathonId }).lean();
    const existingMap = {};
    existingResults.forEach((ex) => {
      existingMap[ex.teamId] = ex;
    });

    const isRecalculation = existingResults.length > 0;
    const now = new Date();

    for (const item of allRanked) {
      const existing = existingMap[item.teamId];

      // If already locked, skip modifying
      if (existing?.isLocked) {
        continue;
      }

      const updateData = {
        hackathonId: targetHackathonId,
        team: item.teamObjectId,
        teamId: item.teamId,
        teamName: item.teamName,
        track: item.track,
        submissionId: item.submissionId,
        rank: item.rank,
        finalScore: item.finalScore,
        averageScore: item.averageScore,
        judgeCount: item.judgeCount,
        finalizedJudgeCount: item.finalizedJudgeCount,
        pendingJudgeCount: item.pendingJudgeCount,
        rankingStatus: item.rankingStatus,
        statusReason: item.statusReason,
        isTie: item.tieDetails?.isTie || false,
        resultStatus: existing?.resultStatus === 'APPROVED' ? 'APPROVED' : 'CALCULATED',
        scoreSnapshot: item.scoreSnapshot,
        tieDetails: item.tieDetails,
      };

      // Preserve existing category / winner / prize if previously assigned
      if (existing) {
        updateData.category = existing.category;
        updateData.prize = existing.prize;
        updateData.isWinner = existing.isWinner;
        updateData.isRunnerUp = existing.isRunnerUp;
        updateData.isPublished = existing.isPublished;
        updateData.approvedBy = existing.approvedBy;
        updateData.approvedAt = existing.approvedAt;
        updateData.rankingSnapshot = existing.rankingSnapshot;
      }

      await HackathonResult.findOneAndUpdate(
        { hackathonId: targetHackathonId, teamId: item.teamId },
        {
          $set: updateData,
          $push: {
            history: {
              action: isRecalculation ? 'RESULTS_RECALCULATED' : 'RESULTS_CALCULATED',
              actor: actorName || 'admin',
              timestamp: now,
              newState: {
                rank: item.rank,
                finalScore: item.finalScore,
                rankingStatus: item.rankingStatus,
              },
            },
          },
        },
        { upsert: true, new: true }
      );
    }

    // 8. Log Audit Event
    await HackathonAuditLog.log({
      hackathonId: targetHackathonId,
      actorId: actorId || 'admin',
      actorName: actorName || 'Administrator',
      actorEmail: actorEmail || '',
      role: 'admin',
      action: isRecalculation ? 'RESULTS_RECALCULATED' : 'RESULTS_CALCULATED',
      targetEntity: 'HackathonResult',
      targetId: targetHackathonId,
      newState: {
        totalConsidered: teams.length,
        eligibleCount: eligibleTeams.length,
        pendingCount: ineligibleTeams.filter((t) => t.rankingStatus === 'PENDING_EVALUATIONS').length,
        ineligibleCount: ineligibleTeams.filter((t) => t.rankingStatus === 'INELIGIBLE').length,
        tiesCount: ties.length,
      },
      req,
    });

    return {
      success: true,
      message: isRecalculation ? 'Results recalculated successfully.' : 'Results calculated successfully.',
      consideredCount: teams.length,
      eligibleCount: eligibleTeams.length,
      pendingCount: ineligibleTeams.filter((t) => t.rankingStatus === 'PENDING_EVALUATIONS').length,
      ineligibleCount: ineligibleTeams.filter((t) => t.rankingStatus === 'INELIGIBLE').length,
      tiesCount: ties.length,
      ties,
      rankings: eligibleTeams,
      ineligible: ineligibleTeams,
    };
  }

  /**
   * Resolve a tie administratively
   */
  static async resolveTie({ hackathonId, teamOrders, resolutions, tieBreakReason, actorId, actorName, actorEmail, user, req }) {
    const targetHackathonId = hackathonId || req?.hackathonId || 'can-hackathon-2026';
    const orders = teamOrders || resolutions;

    // orders is an array of { teamId, rank, reason? }
    if (!Array.isArray(orders) || orders.length === 0) {
      throw new Error('Valid team ranking order is required to resolve tie.');
    }
    const finalReason = tieBreakReason || orders.find((o) => o.reason)?.reason;
    if (!finalReason || !finalReason.trim()) {
      throw new Error('Administrative tie-break reason is mandatory.');
    }

    const setting =
      (await HackathonSetting.findOne({ hackathonId: targetHackathonId })) ||
      (await HackathonSetting.getOrCreateSettings(targetHackathonId));
    if (setting?.resultsLocked) {
      throw new Error('Results are locked and tie cannot be modified.');
    }

    const now = new Date();
    const resolvedTeams = [];
    const name = actorName || user?.name || user?.email || 'admin';
    const email = actorEmail || user?.email || '';

    for (const item of orders) {
      const isObjectId = mongoose.isValidObjectId(item.teamId);
      const resultDoc = await HackathonResult.findOne({
        hackathonId: targetHackathonId,
        $or: [{ teamId: item.teamId }, { team: isObjectId ? item.teamId : null }],
      });
      if (!resultDoc) {
        throw new Error(`Result record for team ${item.teamId} not found in hackathon ${targetHackathonId}.`);
      }
      if (resultDoc.isLocked) {
        throw new Error(`Result for team ${item.teamId} is locked.`);
      }

      const specificReason = item.reason || finalReason.trim();
      const previousRank = resultDoc.rank;
      resultDoc.rank = item.rank;
      resultDoc.rankingStatus = 'READY';
      resultDoc.isTie = false;
      resultDoc.tieBreakReason = specificReason;
      resultDoc.statusReason = `Tie resolved by admin: ${specificReason}`;
      resultDoc.tieDetails = {
        isTie: false,
        tiedWithTeamIds: [],
        resolvedBy: name,
        resolvedAt: now,
        tieBreakReason: specificReason,
        tieMethod: 'ADMIN_DECISION',
      };

      resultDoc.history.push({
        action: 'RESULT_TIE_RESOLVED',
        actor: name,
        timestamp: now,
        previousState: { rank: previousRank, rankingStatus: 'TIE' },
        newState: { rank: item.rank, rankingStatus: 'READY' },
        reason: specificReason,
      });

      await resultDoc.save();
      resolvedTeams.push({ teamId: item.teamId, rank: item.rank });
    }

    await HackathonAuditLog.log({
      hackathonId: targetHackathonId,
      actorId: actorId || String(user?._id || user?.id || 'admin'),
      actorName: name,
      actorEmail: email,
      role: 'admin',
      action: 'RESULT_TIE_RESOLVED',
      targetEntity: 'HackathonResult',
      targetId: targetHackathonId,
      newState: { resolvedTeams, tieBreakReason: finalReason.trim() },
      req,
    });

    return {
      success: true,
      message: 'Tie successfully resolved.',
      resolvedTeams,
    };
  }

  /**
   * Assign official winner award to a team
   */
  static async assignWinner({ hackathonId, teamId, winnerCategory, category, prize, isWinner = true, isRunnerUp = false, user, actorName, actorEmail, req }) {
    const targetHackathonId = hackathonId || req?.hackathonId || 'can-hackathon-2026';
    const isObjectId = mongoose.isValidObjectId(teamId);
    const result = await HackathonResult.findOne({
      hackathonId: targetHackathonId,
      $or: [{ teamId }, { team: isObjectId ? teamId : null }],
    });

    if (!result) {
      throw new Error(`Result not found for team ${teamId} in hackathon ${targetHackathonId}`);
    }

    const assignedCategory = winnerCategory || category || result.category;
    result.category = assignedCategory;
    result.winnerCategory = assignedCategory;
    result.isWinner = isWinner;
    result.isRunnerUp = isRunnerUp;
    if (prize) result.prize = prize;

    const name = actorName || user?.name || user?.email || 'admin';
    result.history.push({
      action: 'WINNER_ASSIGNED',
      actor: name,
      timestamp: new Date(),
      newState: { category: assignedCategory, isWinner, isRunnerUp, prize },
    });

    await result.save();
    return result;
  }

  /**
   * Approve official results and create ranking snapshot
   */
  static async approveResults({ hackathonId, user, actorName, actorEmail, req }) {
    const targetHackathonId = hackathonId || req?.hackathonId || 'can-hackathon-2026';
    const results = await HackathonResult.find({ hackathonId: targetHackathonId });
    if (!results || results.length === 0) {
      throw new Error('No results found to approve.');
    }

    const now = new Date();
    const approvedByName = actorName || user?.name || user?.email || 'Administrator';

    for (const resDoc of results) {
      resDoc.resultStatus = 'APPROVED';
      resDoc.approvedBy = approvedByName;
      resDoc.approvedAt = now;
      resDoc.rankingSnapshot = {
        rank: resDoc.rank,
        finalScore: resDoc.finalScore,
        category: resDoc.category,
        prize: resDoc.prize,
        isWinner: resDoc.isWinner,
        isRunnerUp: resDoc.isRunnerUp,
        approvedAt: now,
        approvedBy: approvedByName,
      };
      await resDoc.save();
    }

    return { success: true, approvedCount: results.length };
  }

  /**
   * Lock official results
   */
  static async lockResults({ hackathonId, reason, user, actorName, actorEmail, req }) {
    const targetHackathonId = hackathonId || req?.hackathonId || 'can-hackathon-2026';
    const setting =
      (await HackathonSetting.findOne({ hackathonId: targetHackathonId })) ||
      (await HackathonSetting.getOrCreateSettings(targetHackathonId));

    const now = new Date();
    const actor = actorName || user?.name || user?.email || 'Administrator';
    const lockReason = reason || 'Official results permanently finalized and locked.';

    setting.resultsLocked = true;
    setting.resultsLockedAt = now;
    setting.resultsLockedBy = actor;
    await setting.save();

    const results = await HackathonResult.find({ hackathonId: targetHackathonId });
    for (const resDoc of results) {
      resDoc.isLocked = true;
      resDoc.resultStatus = 'LOCKED';
      resDoc.lockedAt = now;
      resDoc.lockedBy = actor;
      resDoc.lockReason = lockReason;
      await resDoc.save();
    }

    return { success: true, lockedCount: results.length };
  }

  /**
   * Reopen official results
   */
  static async reopenResults({ hackathonId, reason, user, actorName, actorEmail, req }) {
    const targetHackathonId = hackathonId || req?.hackathonId || 'can-hackathon-2026';
    const setting =
      (await HackathonSetting.findOne({ hackathonId: targetHackathonId })) ||
      (await HackathonSetting.getOrCreateSettings(targetHackathonId));

    const now = new Date();
    const actor = actorName || user?.name || user?.email || 'Administrator';
    const reopenReason = (reason || 'Need re-evaluation').trim();

    setting.resultsLocked = false;
    await setting.save();

    const results = await HackathonResult.find({ hackathonId: targetHackathonId });
    for (const resDoc of results) {
      resDoc.isLocked = false;
      resDoc.resultStatus = 'REOPENED';
      resDoc.reopenedAt = now;
      resDoc.reopenedBy = actor;
      resDoc.reopenReason = reopenReason;
      await resDoc.save();
    }

    return { success: true, reopenedCount: results.length };
  }

  /**
   * Publish official results
   */
  static async publishResults({ hackathonId, publish = true, user, actorName, actorEmail, req }) {
    const targetHackathonId = hackathonId || req?.hackathonId || 'can-hackathon-2026';
    const setting =
      (await HackathonSetting.findOne({ hackathonId: targetHackathonId })) ||
      (await HackathonSetting.getOrCreateSettings(targetHackathonId));

    const now = new Date();
    const actor = actorName || user?.name || user?.email || 'Administrator';

    setting.isResultsPublished = publish;
    if (publish) setting.resultsPublishedAt = now;
    await setting.save();

    const results = await HackathonResult.find({ hackathonId: targetHackathonId });
    for (const resDoc of results) {
      resDoc.isPublished = publish;
      resDoc.resultStatus = publish ? 'PUBLISHED' : 'APPROVED';
      if (publish) {
        resDoc.publishedAt = now;
        resDoc.publishedBy = actor;
      }
      await resDoc.save();

      if (publish) {
        await HackathonTeam.updateOne(
          { _id: resDoc.team, status: { $ne: 'REJECTED' } },
          { $set: { status: 'RESULT_PUBLISHED' } }
        );
      }
    }

    return { success: true, publishedCount: results.length };
  }

  /**
   * Get isolated results summary counters for a hackathon
   */
  static async getResultsSummary({ hackathonId }) {
    const targetHackathonId = hackathonId || 'can-hackathon-2026';
    const allResults = await HackathonResult.find({ hackathonId: targetHackathonId })
      .populate('team', 'isDeleted')
      .lean();
    const validResults = allResults.filter((r) => r.team && !r.team.isDeleted);
    return {
      totalResults: validResults.length,
      total: validResults.length,
      eligible: validResults.filter((r) => r.rankingStatus === 'READY').length,
      pending: validResults.filter((r) => r.rankingStatus === 'PENDING_EVALUATIONS').length,
      ineligible: validResults.filter((r) => r.rankingStatus === 'INELIGIBLE').length,
      ties: validResults.filter((r) => r.rankingStatus === 'TIE').length,
      approved: validResults.filter((r) => ['APPROVED', 'PUBLISHED', 'LOCKED'].includes(r.resultStatus)).length,
      published: validResults.filter((r) => r.isPublished).length,
      locked: validResults.filter((r) => r.isLocked).length,
    };
  }
}

module.exports = HackathonResultService;
