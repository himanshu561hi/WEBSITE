const mongoose = require('mongoose');
const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonTeam = require('../models/HackathonTeam');
const HackathonPayment = require('../models/HackathonPayment');
const HackathonSubmission = require('../models/HackathonSubmission');
const HackathonEditorialMember = require('../models/HackathonEditorialMember');
const HackathonEditorialAssignment = require('../models/HackathonEditorialAssignment');
const HackathonEditorialEvaluation = require('../models/HackathonEditorialEvaluation');
const HackathonResult = require('../models/HackathonResult');
const HackathonCertificate = require('../models/HackathonCertificate');
const HackathonPrize = require('../models/HackathonPrize');
const HackathonSponsor = require('../models/HackathonSponsor');
const HackathonPrizeFulfillment = require('../models/HackathonPrizeFulfillment');

/**
 * Normalizes email address for matching
 */
function normalizeEmail(email) {
  if (!email || typeof email !== 'string') return '';
  return email.trim().toLowerCase();
}

/**
 * Service: Hackathon Analytics & Leaderboards Engine (Phase M9)
 * Strict server-side scoping enforced via hackathonId.
 */
class HackathonAnalyticsService {
  /**
   * 1. Get comprehensive Admin Analytics for a specific hackathon
   * @param {string} hackathonId
   */
  static async getHackathonAdminAnalytics(hackathonId) {
    if (!hackathonId || typeof hackathonId !== 'string') {
      const err = new Error('hackathonId is required to generate hackathon analytics');
      err.statusCode = 400;
      throw err;
    }

    const cleanHackathonId = hackathonId.trim();

    // Verify hackathon existence
    const hackathon = await Hackathon.findOne({
      hackathonId: cleanHackathonId,
      isDeleted: { $ne: true },
    }).lean();

    if (!hackathon) {
      const err = new Error(`Hackathon "${cleanHackathonId}" not found`);
      err.statusCode = 404;
      throw err;
    }

    const settings = (await HackathonSetting.findOne({ hackathonId: cleanHackathonId }).lean()) || {};

    const baseTeamFilter = { hackathonId: cleanHackathonId, isDeleted: { $ne: true } };

    // Parallel aggregate queries using indexed $match: { hackathonId }
    const [
      teamStatsAgg,
      teamsByStatusAgg,
      teamsBySourceAgg,
      teamsByTrackAgg,
      uniqueParticipantsAgg,
      paymentStatsAgg,
      submissionStatsAgg,
      evaluationStatsAgg,
      judgeWorkloadAgg,
      resultStatsAgg,
      certificateStatsAgg,
      sponsorStatsAgg,
      prizeStatsAgg,
      fulfillmentStatsAgg,
    ] = await Promise.all([
      // A. Total Teams and Member count
      HackathonTeam.aggregate([
        { $match: baseTeamFilter },
        {
          $project: {
            memberCount: {
              $add: [
                1, // team leader
                { $size: { $ifNull: ['$members', []] } },
              ],
            },
            status: 1,
            paymentStatus: 1,
            hasPpt: {
              $cond: [
                {
                  $and: [
                    { $ne: ['$initialIdea.pptUrl', ''] },
                    { $ne: ['$initialIdea.pptUrl', null] },
                  ],
                },
                1,
                0,
              ],
            },
          },
        },
        {
          $group: {
            _id: null,
            totalTeams: { $sum: 1 },
            totalMembers: { $sum: '$memberCount' },
            totalPptSubmitted: { $sum: '$hasPpt' },
          },
        },
      ]),

      // B. Teams by Status
      HackathonTeam.aggregate([
        { $match: baseTeamFilter },
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),

      // C. Teams by Source (WEBSITE, UNSTOP, etc.)
      HackathonTeam.aggregate([
        { $match: baseTeamFilter },
        { $unwind: { path: '$sources', preserveNullAndEmptyArrays: true } },
        {
          $group: {
            _id: { $ifNull: ['$sources', 'WEBSITE'] },
            count: { $sum: 1 },
          },
        },
      ]),

      // D. Teams by Track
      HackathonTeam.aggregate([
        { $match: baseTeamFilter },
        {
          $group: {
            _id: { $ifNull: ['$track', 'General'] },
            count: { $sum: 1 },
          },
        },
      ]),

      // E. Unique Participants in current hackathon
      HackathonTeam.aggregate([
        { $match: baseTeamFilter },
        {
          $project: {
            allEmails: {
              $concatArrays: [
                [{ $toLower: { $trim: { input: '$leader.email' } } }],
                {
                  $map: {
                    input: { $ifNull: ['$members', []] },
                    as: 'm',
                    in: { $toLower: { $trim: { input: '$$m.email' } } },
                  },
                },
              ],
            },
          },
        },
        { $unwind: '$allEmails' },
        { $match: { allEmails: { $ne: '', $ne: null } } },
        { $group: { _id: '$allEmails' } },
        { $group: { _id: null, uniqueParticipantsCount: { $sum: 1 } } },
      ]),

      // F. Payments Analytics
      HackathonPayment.aggregate([
        { $match: { hackathonId: cleanHackathonId } },
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 },
            totalAmount: { $sum: '$amount' },
          },
        },
      ]),

      // G. Submissions Analytics
      HackathonSubmission.aggregate([
        { $match: { hackathonId: cleanHackathonId } },
        {
          $group: {
            _id: null,
            totalSubmissions: { $sum: 1 },
            drafts: { $sum: { $cond: [{ $eq: ['$status', 'DRAFT'] }, 1, 0] } },
            finalSubmissions: { $sum: { $cond: [{ $eq: ['$status', 'SUBMITTED'] }, 1, 0] } },
            lockedSubmissions: { $sum: { $cond: [{ $eq: ['$isLocked', true] }, 1, 0] } },
          },
        },
      ]),

      // H. Evaluations Analytics
      HackathonEditorialEvaluation.aggregate([
        { $match: { hackathonId: cleanHackathonId } },
        {
          $group: {
            _id: null,
            totalEvaluations: { $sum: 1 },
            finalizedEvaluations: { $sum: { $cond: [{ $eq: ['$status', 'FINALIZED'] }, 1, 0] } },
            pendingEvaluations: { $sum: { $cond: [{ $ne: ['$status', 'FINALIZED'] }, 1, 0] } },
            avgScore: { $avg: { $cond: [{ $eq: ['$status', 'FINALIZED'] }, '$totalScore', null] } },
          },
        },
      ]),

      // I. Judge Workload Analytics (Admin only)
      HackathonEditorialMember.aggregate([
        { $match: { hackathonId: cleanHackathonId, role: { $in: ['judge', 'editorial'] } } },
        {
          $lookup: {
            from: 'hackathoneditorialassignments',
            let: { memberId: '$_id', hid: '$hackathonId' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$editorialMember', '$$memberId'] },
                      { $eq: ['$hackathonId', '$$hid'] },
                      { $ne: ['$status', 'UNASSIGNED'] },
                    ],
                  },
                },
              },
            ],
            as: 'assignments',
          },
        },
        {
          $lookup: {
            from: 'hackathoneditorialevaluations',
            let: { memberId: '$_id', hid: '$hackathonId' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$editorialMember', '$$memberId'] },
                      { $eq: ['$hackathonId', '$$hid'] },
                    ],
                  },
                },
              },
            ],
            as: 'evaluations',
          },
        },
        {
          $project: {
            name: 1,
            email: 1,
            role: 1,
            isActive: 1,
            assignedCount: { $size: '$assignments' },
            evaluatedCount: {
              $size: {
                $filter: {
                  input: '$evaluations',
                  as: 'ev',
                  cond: { $eq: ['$$ev.status', 'FINALIZED'] },
                },
              },
            },
          },
        },
      ]),

      // J. Results Analytics
      HackathonResult.aggregate([
        { $match: { hackathonId: cleanHackathonId } },
        {
          $group: {
            _id: null,
            totalResults: { $sum: 1 },
            approvedResults: { $sum: { $cond: [{ $eq: ['$resultStatus', 'APPROVED'] }, 1, 0] } },
            publishedResults: { $sum: { $cond: [{ $eq: ['$isPublished', true] }, 1, 0] } },
            lockedResults: { $sum: { $cond: [{ $eq: ['$isLocked', true] }, 1, 0] } },
            winners: { $sum: { $cond: [{ $eq: ['$isWinner', true] }, 1, 0] } },
            runnerUps: { $sum: { $cond: [{ $eq: ['$isRunnerUp', true] }, 1, 0] } },
            avgFinalScore: { $avg: '$finalScore' },
            maxFinalScore: { $max: '$finalScore' },
            minFinalScore: { $min: '$finalScore' },
          },
        },
      ]),

      // K. Certificates Analytics
      HackathonCertificate.aggregate([
        { $match: { hackathonId: cleanHackathonId } },
        {
          $group: {
            _id: null,
            totalCertificates: { $sum: 1 },
            issuedCertificates: { $sum: { $cond: [{ $eq: ['$status', 'ISSUED'] }, 1, 0] } },
            revokedCertificates: { $sum: { $cond: [{ $eq: ['$isRevoked', true] }, 1, 0] } },
          },
        },
      ]),

      // L. Sponsors Analytics
      HackathonSponsor.aggregate([
        { $match: { hackathonId: cleanHackathonId } },
        {
          $group: {
            _id: { $ifNull: ['$tier', 'COMMUNITY'] },
            count: { $sum: 1 },
            activeCount: { $sum: { $cond: [{ $eq: ['$active', true] }, 1, 0] } },
          },
        },
      ]),

      // M. Prizes Analytics
      HackathonPrize.aggregate([
        { $match: { hackathonId: cleanHackathonId } },
        {
          $group: {
            _id: null,
            totalPrizes: { $sum: 1 },
            totalPrizePool: { $sum: '$amount' },
            activePrizes: { $sum: { $cond: [{ $eq: ['$status', 'ACTIVE'] }, 1, 0] } },
          },
        },
      ]),

      // N. Prize Fulfillment Analytics
      HackathonPrizeFulfillment.aggregate([
        { $match: { hackathonId: cleanHackathonId } },
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 },
            totalDisbursed: { $sum: '$amount' },
          },
        },
      ]),
    ]);

    // Parse Team & Registration Aggregations
    const teamSummary = teamStatsAgg[0] || { totalTeams: 0, totalMembers: 0, totalPptSubmitted: 0 };
    const totalTeams = teamSummary.totalTeams || 0;
    const totalMembers = teamSummary.totalMembers || 0;
    const avgMembersPerTeam = totalTeams > 0 ? Number((totalMembers / totalTeams).toFixed(2)) : 0;

    const statusCounts = {
      IMPORTED: 0,
      UNDER_REVIEW: 0,
      SHORTLISTED: 0,
      PAYMENT_PENDING: 0,
      CONFIRMED: 0,
      SUBMITTED: 0,
      UNDER_EVALUATION: 0,
      EVALUATED: 0,
      REJECTED: 0,
    };
    for (const s of teamsByStatusAgg) {
      if (s._id && statusCounts[s._id] !== undefined) {
        statusCounts[s._id] = s.count;
      }
    }

    const sources = {};
    for (const s of teamsBySourceAgg) {
      if (s._id) sources[s._id] = s.count;
    }

    const tracks = {};
    for (const t of teamsByTrackAgg) {
      if (t._id) tracks[t._id] = t.count;
    }

    const uniqueParticipants = uniqueParticipantsAgg[0]?.uniqueParticipantsCount || 0;

    // Parse Payments Aggregations
    let totalPayments = 0;
    let successfulPayments = 0;
    let pendingPayments = 0;
    let failedPayments = 0;
    let totalRevenue = 0;

    for (const p of paymentStatsAgg) {
      totalPayments += p.count;
      if (p._id === 'SUCCESS' || p._id === 'PAID') {
        successfulPayments += p.count;
        totalRevenue += p.totalAmount;
      } else if (p._id === 'PENDING') {
        pendingPayments += p.count;
      } else if (p._id === 'FAILED') {
        failedPayments += p.count;
      }
    }
    const avgPaymentAmount = successfulPayments > 0 ? Number((totalRevenue / successfulPayments).toFixed(2)) : 0;

    // Parse Submissions Aggregations
    const subSummary = submissionStatsAgg[0] || {
      totalSubmissions: 0,
      drafts: 0,
      finalSubmissions: 0,
      lockedSubmissions: 0,
    };
    const confirmedCount = statusCounts.CONFIRMED + statusCounts.SUBMITTED + statusCounts.UNDER_EVALUATION + statusCounts.EVALUATED;
    const submissionCompletionRate = confirmedCount > 0
      ? Number(((subSummary.finalSubmissions / confirmedCount) * 100).toFixed(1))
      : 0;

    // Parse Evaluations Aggregations
    const evalSummary = evaluationStatsAgg[0] || {
      totalEvaluations: 0,
      finalizedEvaluations: 0,
      pendingEvaluations: 0,
      avgScore: 0,
    };
    const evaluationCompletionRate = evalSummary.totalEvaluations > 0
      ? Number(((evalSummary.finalizedEvaluations / evalSummary.totalEvaluations) * 100).toFixed(1))
      : 0;

    // Parse Judges Workload
    const judgesWorkload = (judgeWorkloadAgg || []).map((j) => {
      const completionRate = j.assignedCount > 0 ? Number(((j.evaluatedCount / j.assignedCount) * 100).toFixed(1)) : 0;
      return {
        judgeId: j._id,
        name: j.name,
        email: j.email,
        role: j.role,
        isActive: j.isActive,
        assignedCount: j.assignedCount,
        evaluatedCount: j.evaluatedCount,
        pendingCount: Math.max(0, j.assignedCount - j.evaluatedCount),
        completionRate,
      };
    });

    // Parse Results Aggregations
    const resSummary = resultStatsAgg[0] || {
      totalResults: 0,
      approvedResults: 0,
      publishedResults: 0,
      lockedResults: 0,
      winners: 0,
      runnerUps: 0,
      avgFinalScore: 0,
      maxFinalScore: 0,
      minFinalScore: 0,
    };

    // Parse Certificates Aggregations
    const certSummary = certificateStatsAgg[0] || {
      totalCertificates: 0,
      issuedCertificates: 0,
      revokedCertificates: 0,
    };

    // Parse Sponsors Aggregations
    let totalSponsors = 0;
    let activeSponsors = 0;
    const sponsorTiers = {};
    for (const sp of sponsorStatsAgg) {
      totalSponsors += sp.count;
      activeSponsors += sp.activeCount;
      sponsorTiers[sp._id] = sp.count;
    }

    // Parse Prizes & Fulfillment Aggregations
    const prizeSummary = prizeStatsAgg[0] || { totalPrizes: 0, totalPrizePool: 0, activePrizes: 0 };

    const fulfillmentStatusCounts = {
      INITIATED: 0,
      PENDING: 0,
      PROCESSING: 0,
      DISBURSED: 0,
      COMPLETED: 0,
      FAILED: 0,
    };
    let totalDisbursedAmount = 0;
    let totalFulfillments = 0;

    for (const f of fulfillmentStatsAgg) {
      totalFulfillments += f.count;
      if (f._id && fulfillmentStatusCounts[f._id] !== undefined) {
        fulfillmentStatusCounts[f._id] = f.count;
      }
      if (f._id === 'DISBURSED' || f._id === 'COMPLETED') {
        totalDisbursedAmount += f.totalDisbursed || 0;
      }
    }

    return {
      success: true,
      hackathonId: cleanHackathonId,
      hackathon: {
        name: hackathon.name,
        slug: hackathon.slug,
        status: hackathon.status,
        startDate: hackathon.startDate,
        endDate: hackathon.endDate,
        registrationDeadline: hackathon.registrationDeadline,
        submissionDeadline: hackathon.submissionDeadline || settings.submissionDeadline,
        resultDate: hackathon.resultDate || settings.resultDate,
        participationFee: settings.participationFee ?? 0,
        currency: settings.currency || 'INR',
        isRegistrationOpen: Boolean(settings.isRegistrationOpen),
        isSubmissionOpen: Boolean(settings.isSubmissionOpen),
        isResultsPublished: Boolean(settings.isResultsPublished),
        isResultsLocked: Boolean(settings.isResultsLocked),
      },
      overview: {
        totalTeams,
        totalMembers,
        uniqueParticipants,
        confirmedTeams: statusCounts.CONFIRMED + statusCounts.SUBMITTED + statusCounts.UNDER_EVALUATION + statusCounts.EVALUATED,
        submittedTeams: subSummary.finalSubmissions,
        evaluatedTeams: statusCounts.EVALUATED,
        shortlistedTeams: statusCounts.SHORTLISTED,
        paymentPendingTeams: statusCounts.PAYMENT_PENDING,
        rejectedTeams: statusCounts.REJECTED,
      },
      registration: {
        totalTeams,
        totalMembers,
        avgMembersPerTeam,
        pptSubmitted: teamSummary.totalPptSubmitted || 0,
        statusCounts,
        sources,
        tracks,
      },
      participants: {
        totalUniqueParticipants: uniqueParticipants,
        averageTeamSize: avgMembersPerTeam,
      },
      payments: {
        paymentRequired: (settings.participationFee ?? 0) > 0,
        feePerTeam: settings.participationFee ?? 0,
        currency: settings.currency || 'INR',
        totalPaymentRecords: totalPayments,
        successfulPayments,
        pendingPayments,
        failedPayments,
        totalRevenue,
        avgPaymentAmount,
      },
      submissions: {
        totalSubmissions: subSummary.totalSubmissions,
        drafts: subSummary.drafts,
        finalSubmissions: subSummary.finalSubmissions,
        lockedSubmissions: subSummary.lockedSubmissions,
        completionRate: submissionCompletionRate,
      },
      evaluations: {
        totalEvaluations: evalSummary.totalEvaluations,
        finalizedEvaluations: evalSummary.finalizedEvaluations,
        pendingEvaluations: evalSummary.pendingEvaluations,
        completionRate: evaluationCompletionRate,
        avgScore: evalSummary.avgScore ? Number(evalSummary.avgScore.toFixed(2)) : 0,
      },
      judgeWorkload: {
        totalJudges: judgesWorkload.length,
        judges: judgesWorkload,
      },
      results: {
        totalResults: resSummary.totalResults,
        approvedResults: resSummary.approvedResults,
        publishedResults: resSummary.publishedResults,
        lockedResults: resSummary.lockedResults,
        winnersCount: resSummary.winners,
        runnerUpsCount: resSummary.runnerUps,
        scoreStats: {
          avg: resSummary.avgFinalScore ? Number(resSummary.avgFinalScore.toFixed(2)) : 0,
          max: resSummary.maxFinalScore || 0,
          min: resSummary.minFinalScore || 0,
        },
      },
      certificates: {
        totalCertificates: certSummary.totalCertificates,
        issuedCertificates: certSummary.issuedCertificates,
        revokedCertificates: certSummary.revokedCertificates,
      },
      sponsors: {
        totalSponsors,
        activeSponsors,
        tierBreakdown: sponsorTiers,
      },
      prizes: {
        totalPrizes: prizeSummary.totalPrizes,
        totalPrizePool: prizeSummary.totalPrizePool,
        activePrizes: prizeSummary.activePrizes,
        fulfillments: {
          totalFulfillments,
          byStatus: fulfillmentStatusCounts,
          totalDisbursedAmount,
        },
      },
    };
  }

  /**
   * 2. Global Platform Analytics (Platform Admin Only)
   * Explicitly labeled as GLOBAL platform overview aggregating across hackathons.
   */
  static async getGlobalAdminAnalytics() {
    const hackathons = await Hackathon.find({ isDeleted: { $ne: true } })
      .sort({ createdAt: -1 })
      .lean();

    const hackathonIds = hackathons.map((h) => h.hackathonId);

    const [
      teamsAgg,
      paymentsAgg,
      submissionsAgg,
      evaluationsAgg,
      certificatesAgg,
    ] = await Promise.all([
      HackathonTeam.aggregate([
        { $match: { isDeleted: { $ne: true }, hackathonId: { $in: hackathonIds } } },
        {
          $group: {
            _id: '$hackathonId',
            totalTeams: { $sum: 1 },
            confirmedTeams: {
              $sum: {
                $cond: [
                  { $in: ['$status', ['CONFIRMED', 'SUBMITTED', 'UNDER_EVALUATION', 'EVALUATED']] },
                  1,
                  0,
                ],
              },
            },
          },
        },
      ]),

      HackathonPayment.aggregate([
        {
          $match: {
            hackathonId: { $in: hackathonIds },
            status: { $in: ['SUCCESS', 'PAID'] },
          },
        },
        {
          $group: {
            _id: '$hackathonId',
            totalAmount: { $sum: '$amount' },
            paymentCount: { $sum: 1 },
          },
        },
      ]),

      HackathonSubmission.aggregate([
        { $match: { hackathonId: { $in: hackathonIds } } },
        {
          $group: {
            _id: '$hackathonId',
            totalSubmissions: { $sum: 1 },
            finalSubmissions: { $sum: { $cond: [{ $eq: ['$status', 'SUBMITTED'] }, 1, 0] } },
          },
        },
      ]),

      HackathonEditorialEvaluation.aggregate([
        { $match: { hackathonId: { $in: hackathonIds } } },
        {
          $group: {
            _id: '$hackathonId',
            finalizedEvaluations: { $sum: { $cond: [{ $eq: ['$status', 'FINALIZED'] }, 1, 0] } },
          },
        },
      ]),

      HackathonCertificate.aggregate([
        { $match: { hackathonId: { $in: hackathonIds }, status: 'ISSUED' } },
        {
          $group: {
            _id: '$hackathonId',
            issuedCount: { $sum: 1 },
          },
        },
      ]),
    ]);

    const teamMap = new Map(teamsAgg.map((t) => [t._id, t]));
    const paymentMap = new Map(paymentsAgg.map((p) => [p._id, p]));
    const subMap = new Map(submissionsAgg.map((s) => [s._id, s]));
    const evalMap = new Map(evaluationsAgg.map((e) => [e._id, e]));
    const certMap = new Map(certificatesAgg.map((c) => [c._id, c]));

    const statusCounts = {
      ACTIVE: 0,
      UPCOMING: 0,
      COMPLETED: 0,
      DRAFT: 0,
      ARCHIVED: 0,
    };

    let grandTotalTeams = 0;
    let grandTotalConfirmedTeams = 0;
    let grandTotalRevenue = 0;
    let grandTotalSubmissions = 0;
    let grandTotalCertificates = 0;

    const breakdown = hackathons.map((h) => {
      const hid = h.hackathonId;
      const t = teamMap.get(hid) || { totalTeams: 0, confirmedTeams: 0 };
      const p = paymentMap.get(hid) || { totalAmount: 0, paymentCount: 0 };
      const s = subMap.get(hid) || { totalSubmissions: 0, finalSubmissions: 0 };
      const e = evalMap.get(hid) || { finalizedEvaluations: 0 };
      const c = certMap.get(hid) || { issuedCount: 0 };

      if (statusCounts[h.status] !== undefined) {
        statusCounts[h.status]++;
      }

      grandTotalTeams += t.totalTeams;
      grandTotalConfirmedTeams += t.confirmedTeams;
      grandTotalRevenue += p.totalAmount;
      grandTotalSubmissions += s.finalSubmissions;
      grandTotalCertificates += c.issuedCount;

      return {
        hackathonId: hid,
        name: h.name,
        slug: h.slug,
        status: h.status,
        startDate: h.startDate,
        endDate: h.endDate,
        totalTeams: t.totalTeams,
        confirmedTeams: t.confirmedTeams,
        finalSubmissions: s.finalSubmissions,
        finalizedEvaluations: e.finalizedEvaluations,
        issuedCertificates: c.issuedCount,
        revenue: p.totalAmount,
      };
    });

    return {
      success: true,
      scope: 'GLOBAL',
      title: 'Global Platform Multi-Hackathon Analytics',
      generatedAt: new Date().toISOString(),
      hackathonsCount: hackathons.length,
      hackathonsByStatus: statusCounts,
      platformTotals: {
        totalTeams: grandTotalTeams,
        totalConfirmedTeams: grandTotalConfirmedTeams,
        totalRevenue: grandTotalRevenue,
        totalSubmissions: grandTotalSubmissions,
        totalCertificatesIssued: grandTotalCertificates,
      },
      hackathons: breakdown,
    };
  }

  /**
   * 3. Compare multiple hackathons side-by-side
   * @param {string[]} hackathonIds
   */
  static async compareHackathons(hackathonIds = []) {
    if (!Array.isArray(hackathonIds) || hackathonIds.length === 0) {
      const err = new Error('At least one hackathonId is required for comparison');
      err.statusCode = 400;
      throw err;
    }

    const comparisons = await Promise.all(
      hackathonIds.map(async (hid) => {
        try {
          return await HackathonAnalyticsService.getHackathonAdminAnalytics(hid);
        } catch (err) {
          return {
            success: false,
            hackathonId: hid,
            error: err.message,
          };
        }
      })
    );

    return {
      success: true,
      scope: 'COMPARISON',
      comparisons,
    };
  }

  /**
   * 4. Participant personal statistics in current hackathon
   * @param {string} hackathonId
   * @param {string} userEmail
   */
  static async getParticipantHackathonStats(hackathonId, userEmail) {
    if (!hackathonId || !userEmail) {
      const err = new Error('hackathonId and userEmail are required');
      err.statusCode = 400;
      throw err;
    }

    const cleanHackathonId = hackathonId.trim();
    const cleanEmail = normalizeEmail(userEmail);

    // Find team where participant is leader or member in THIS hackathon
    const team = await HackathonTeam.findOne({
      hackathonId: cleanHackathonId,
      isDeleted: { $ne: true },
      $or: [{ 'leader.email': cleanEmail }, { 'members.email': cleanEmail }],
    }).lean();

    if (!team) {
      return {
        success: true,
        hackathonId: cleanHackathonId,
        isRegistered: false,
        message: 'No team registration found for this hackathon.',
        team: null,
        payment: null,
        submission: null,
        result: null,
        certificate: null,
      };
    }

    const isLeader = normalizeEmail(team.leader?.email) === cleanEmail;

    // Parallel fetch team details in THIS hackathon
    const [setting, payment, submission, result, certificate] = await Promise.all([
      HackathonSetting.findOne({ hackathonId: cleanHackathonId }).lean(),
      HackathonPayment.findOne({ hackathonId: cleanHackathonId, teamId: team.teamId }).lean(),
      HackathonSubmission.findOne({ hackathonId: cleanHackathonId, teamId: team.teamId }).lean(),
      HackathonResult.findOne({
        hackathonId: cleanHackathonId,
        teamId: team.teamId,
        isPublished: true,
      }).lean(),
      HackathonCertificate.findOne({
        hackathonId: cleanHackathonId,
        teamId: team.teamId,
        recipientEmail: cleanEmail,
        status: 'ISSUED',
        isRevoked: { $ne: true },
      }).lean(),
    ]);

    return {
      success: true,
      hackathonId: cleanHackathonId,
      isRegistered: true,
      isLeader,
      team: {
        teamId: team.teamId,
        teamName: team.teamName,
        status: team.status,
        track: team.track,
        paymentStatus: team.paymentStatus,
        memberCount: 1 + (team.members?.length || 0),
        whatsAppLink:
          team.status === 'CONFIRMED' || team.status === 'SUBMITTED' || team.status === 'EVALUATED'
            ? setting?.whatsAppLink || ''
            : null,
      },
      payment: {
        required: (setting?.participationFee ?? 0) > 0,
        status: team.paymentStatus,
        amount: payment?.amount || (setting?.participationFee ?? 0),
        paidAt: payment?.paidAt || team.confirmedAt || null,
      },
      submission: {
        isSubmitted: Boolean(submission && submission.status === 'SUBMITTED'),
        isLocked: Boolean(submission?.isLocked),
        status: submission?.status || 'NOT_STARTED',
        projectName: submission?.projectName || team.finalSubmission?.projectTitle || null,
        submittedAt: submission?.submittedAt || team.finalSubmission?.submittedAt || null,
      },
      result: result
        ? {
            rank: result.rank,
            category: result.category,
            isWinner: result.isWinner,
            isRunnerUp: result.isRunnerUp,
            prize: result.prize,
            finalScore: result.finalScore,
          }
        : null,
      certificate: certificate
        ? {
            certificateNumber: certificate.certificateNumber,
            verificationCode: certificate.verificationCode,
            type: certificate.type,
            issuedAt: certificate.createdAt,
          }
        : null,
    };
  }

  /**
   * 5. Judge personal workload statistics in current hackathon
   * @param {string} hackathonId
   * @param {string} judgeEmail
   */
  static async getJudgeHackathonStats(hackathonId, judgeEmail) {
    if (!hackathonId || !judgeEmail) {
      const err = new Error('hackathonId and judgeEmail are required');
      err.statusCode = 400;
      throw err;
    }

    const cleanHackathonId = hackathonId.trim();
    const cleanEmail = normalizeEmail(judgeEmail);

    const member = await HackathonEditorialMember.findOne({
      hackathonId: cleanHackathonId,
      email: cleanEmail,
      isActive: true,
    }).lean();

    if (!member) {
      const err = new Error('Editorial member not registered or active in this hackathon');
      err.statusCode = 403;
      throw err;
    }

    const [assignments, evaluations] = await Promise.all([
      HackathonEditorialAssignment.find({
        hackathonId: cleanHackathonId,
        editorialMember: member._id,
        status: { $ne: 'UNASSIGNED' },
      }).lean(),
      HackathonEditorialEvaluation.find({
        hackathonId: cleanHackathonId,
        editorialMember: member._id,
      }).lean(),
    ]);

    const assignedCount = assignments.length;
    const completedEvaluations = evaluations.filter((e) => e.status === 'FINALIZED');
    const completedCount = completedEvaluations.length;
    const pendingCount = Math.max(0, assignedCount - completedCount);
    const completionRate = assignedCount > 0 ? Number(((completedCount / assignedCount) * 100).toFixed(1)) : 0;

    return {
      success: true,
      hackathonId: cleanHackathonId,
      judge: {
        name: member.name,
        email: member.email,
        role: member.role,
      },
      workload: {
        assignedCount,
        completedCount,
        pendingCount,
        completionRate,
      },
    };
  }

  /**
   * 6. Authoritative Public Leaderboard
   * Scoped to hackathonId, approved & published results only.
   * Completely sanitizes private judge details, emails, phones, payments, and audit data.
   * @param {string} hackathonId
   */
  static async getPublicLeaderboard(hackathonId) {
    if (!hackathonId) {
      return {
        success: true,
        isPublished: false,
        message: 'No hackathon context provided',
        leaderboard: [],
        winners: [],
      };
    }

    const cleanHackathonId = hackathonId.trim();

    const [hackathon, setting] = await Promise.all([
      Hackathon.findOne({ hackathonId: cleanHackathonId, isDeleted: { $ne: true } }).lean(),
      HackathonSetting.findOne({ hackathonId: cleanHackathonId }).lean(),
    ]);

    if (!hackathon) {
      const err = new Error(`Hackathon "${cleanHackathonId}" not found`);
      err.statusCode = 404;
      throw err;
    }

    if (!setting?.isResultsPublished) {
      return {
        success: true,
        isPublished: false,
        hackathonId: cleanHackathonId,
        hackathonName: hackathon.name,
        message: 'Official results have not been published yet.',
        resultDate: setting?.resultDate || null,
        leaderboard: [],
        winners: [],
      };
    }

    const [resultsRaw, fulfillments] = await Promise.all([
      HackathonResult.find({ hackathonId: cleanHackathonId, isPublished: true })
        .populate('submissionId', 'projectName')
        .populate('team', 'teamName teamId track finalSubmission initialIdea isDeleted')
        .sort({ rank: 1, finalScore: -1 })
        .lean(),
      HackathonPrizeFulfillment.find({ hackathonId: cleanHackathonId, status: { $ne: 'CANCELLED' } })
        .populate('prizeId', 'name amount currency')
        .lean(),
    ]);

    const activeResults = resultsRaw.filter((r) => r.team && !r.team.isDeleted);

    const fulfillmentMap = new Map();
    for (const f of fulfillments) {
      if (f.teamId) fulfillmentMap.set(f.teamId, f);
    }

    const formatPublicRow = (r) => {
      const ful = fulfillmentMap.get(r.teamId);
      let prizeStr = r.prize || '';
      if (ful) {
        const pAmt = ful.amount || ful.prizeId?.amount;
        const pCurr = ful.currency === 'INR' || !ful.currency ? '₹' : ful.currency;
        if (pAmt) {
          prizeStr = `${pCurr}${Number(pAmt).toLocaleString()} + Certificate + Trophy`;
        } else if (ful.prizeId?.name) {
          prizeStr = `${ful.prizeId.name} + Certificate + Trophy`;
        }
      }

      return {
        rank: r.rank,
        teamName: r.teamName || r.team?.teamName || 'Team',
        teamId: r.teamId || r.team?.teamId,
        projectName:
          r.submissionId?.projectName ||
          r.team?.finalSubmission?.projectTitle ||
          r.team?.initialIdea?.title ||
          'Project Submission',
        track: r.track || r.team?.track || 'General Track',
        category:
          r.category ||
          (r.rank === 1 ? 'Winner' : r.rank === 2 ? '1st Runner Up' : r.rank === 3 ? '2nd Runner Up' : ''),
        prize: prizeStr,
        finalScore: r.finalScore,
        isWinner: Boolean(r.isWinner),
        isRunnerUp: Boolean(r.isRunnerUp),
      };
    };

    const leaderboard = activeResults.map(formatPublicRow);
    const winners = leaderboard.filter((r) => r.isWinner || r.category || (r.rank && r.rank <= 3));

    return {
      success: true,
      isPublished: true,
      hackathonId: cleanHackathonId,
      hackathonName: hackathon.name,
      publishedAt: setting.resultsPublishedAt || null,
      resultDate: setting.resultDate || null,
      winners,
      leaderboard,
      rankings: leaderboard,
    };
  }
}

module.exports = HackathonAnalyticsService;
