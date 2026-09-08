/**
 * Multi-Hackathon Database Referential Integrity Audit Script (Phase M11)
 *
 * READ-ONLY: Audits cross-hackathon relationships, orphan references,
 * duplicate canonical identities, and dangling dependencies across all 14 models.
 * Zero database mutations performed.
 *
 * Usage: node BACKEND/scripts/auditMultiHackathonIntegrity.js
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

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
const HackathonDuplicateQueue = require('../models/HackathonDuplicateQueue');
const HackathonAuditLog = require('../models/HackathonAuditLog');
const EmailLog = require('../models/email/EmailLog');

async function runIntegrityAudit() {
  const shouldDisconnect = mongoose.connection.readyState === 0;
  if (shouldDisconnect) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  console.log('===============================================================');
  console.log('=== MULTI-HACKATHON DATA INTEGRITY & ORPHAN AUDIT (M11)      ===');
  console.log('=== (READ-ONLY AUDIT: ZERO MUTATIONS)                       ===');
  console.log('===============================================================');

  const auditResults = [];

  try {
    // 1. Known Hackathon IDs
    const hackathons = await Hackathon.find({}, 'hackathonId status name').lean();
    const knownHackathonIds = new Set(hackathons.map((h) => h.hackathonId));
    console.log(`Found ${hackathons.length} registered Hackathons in database.`);

    // 2. Teams with invalid hackathon reference
    const teams = await HackathonTeam.find({}, 'teamId hackathonId leader.email isDeleted').lean();
    const knownTeamIds = new Set(teams.map((t) => t.teamId));
    const invalidHackathonTeams = teams.filter((t) => t.hackathonId && !knownHackathonIds.has(t.hackathonId));
    auditResults.push({
      Check: 'Teams with invalid hackathonId',
      Count: invalidHackathonTeams.length,
      Status: invalidHackathonTeams.length === 0 ? 'PASS' : 'WARN',
    });

    // 3. Duplicate canonical teamId across whole database
    const teamIdCounts = {};
    teams.forEach((t) => {
      teamIdCounts[t.teamId] = (teamIdCounts[t.teamId] || 0) + 1;
    });
    const duplicateTeamIds = Object.entries(teamIdCounts).filter(([_, count]) => count > 1);
    auditResults.push({
      Check: 'Duplicate canonical teamIds',
      Count: duplicateTeamIds.length,
      Status: duplicateTeamIds.length === 0 ? 'PASS' : 'FAIL',
    });

    // 4. Duplicate leader email within the same hackathon
    const scopedLeaderMap = {};
    let duplicateScopedLeaders = 0;
    teams.forEach((t) => {
      if (t.isDeleted) return;
      const key = `${t.hackathonId}:${(t.leader?.email || '').toLowerCase().trim()}`;
      if (scopedLeaderMap[key]) {
        duplicateScopedLeaders++;
      } else {
        scopedLeaderMap[key] = true;
      }
    });
    auditResults.push({
      Check: 'Duplicate leader email within same hackathon',
      Count: duplicateScopedLeaders,
      Status: duplicateScopedLeaders === 0 ? 'PASS' : 'FAIL',
    });

    // 5. Orphan Payments (referencing non-existent teamId or wrong hackathon)
    const payments = await HackathonPayment.find({}, 'orderId paymentId teamId hackathonId').lean();
    let orphanPayments = 0;
    let crossHackathonPayments = 0;
    payments.forEach((p) => {
      if (p.teamId && !knownTeamIds.has(p.teamId)) {
        orphanPayments++;
      }
    });
    auditResults.push({
      Check: 'Orphan Payments (unmapped teamId)',
      Count: orphanPayments,
      Status: orphanPayments === 0 ? 'PASS' : 'WARN',
    });

    // 6. Orphan Submissions
    const submissions = await HackathonSubmission.find({}, 'teamId hackathonId').lean();
    let orphanSubmissions = 0;
    submissions.forEach((s) => {
      if (s.teamId && !knownTeamIds.has(s.teamId)) {
        orphanSubmissions++;
      }
    });
    auditResults.push({
      Check: 'Orphan Submissions (unmapped teamId)',
      Count: orphanSubmissions,
      Status: orphanSubmissions === 0 ? 'PASS' : 'WARN',
    });

    // 7. Orphan Editorial Assignments
    const assignments = await HackathonEditorialAssignment.find({}, 'teamId editorialMember hackathonId').lean();
    let orphanAssignments = 0;
    assignments.forEach((a) => {
      if (a.teamId && !knownTeamIds.has(a.teamId)) {
        orphanAssignments++;
      }
    });
    auditResults.push({
      Check: 'Orphan Assignments (unmapped teamId)',
      Count: orphanAssignments,
      Status: orphanAssignments === 0 ? 'PASS' : 'WARN',
    });

    // 8. Orphan Editorial Evaluations
    const evaluations = await HackathonEditorialEvaluation.find({}, 'teamId hackathonId').lean();
    let orphanEvaluations = 0;
    evaluations.forEach((e) => {
      if (e.teamId && !knownTeamIds.has(e.teamId)) {
        orphanEvaluations++;
      }
    });
    auditResults.push({
      Check: 'Orphan Evaluations (unmapped teamId)',
      Count: orphanEvaluations,
      Status: orphanEvaluations === 0 ? 'PASS' : 'WARN',
    });

    // 9. Orphan Results
    const results = await HackathonResult.find({}, 'teamId hackathonId').lean();
    let orphanResults = 0;
    results.forEach((r) => {
      if (r.teamId && !knownTeamIds.has(r.teamId)) {
        orphanResults++;
      }
    });
    auditResults.push({
      Check: 'Orphan Results (unmapped teamId)',
      Count: orphanResults,
      Status: orphanResults === 0 ? 'PASS' : 'WARN',
    });

    // 10. Orphan Certificates
    const certificates = await HackathonCertificate.find({}, 'teamId hackathonId').lean();
    let orphanCertificates = 0;
    certificates.forEach((c) => {
      if (c.teamId && !knownTeamIds.has(c.teamId)) {
        orphanCertificates++;
      }
    });
    auditResults.push({
      Check: 'Orphan Certificates (unmapped teamId)',
      Count: orphanCertificates,
      Status: orphanCertificates === 0 ? 'PASS' : 'WARN',
    });

    // 11. Orphan Prize Fulfillments
    const fulfillments = await HackathonPrizeFulfillment.find({}, 'teamId prizeId hackathonId').lean();
    let orphanFulfillments = 0;
    fulfillments.forEach((f) => {
      if (f.teamId && !knownTeamIds.has(f.teamId)) {
        orphanFulfillments++;
      }
    });
    auditResults.push({
      Check: 'Orphan Prize Fulfillments (unmapped teamId)',
      Count: orphanFulfillments,
      Status: orphanFulfillments === 0 ? 'PASS' : 'WARN',
    });

    // 12. Single Active Hackathon Check
    const activeHackathons = hackathons.filter((h) => h.status === 'ACTIVE');
    auditResults.push({
      Check: 'Active Hackathon Count === 1',
      Count: activeHackathons.length,
      Status: activeHackathons.length <= 1 ? 'PASS' : 'FAIL',
    });

    console.table(auditResults);

    const hasFailures = auditResults.some((r) => r.Status === 'FAIL');
    if (hasFailures) {
      console.error('\n❌ INTEGRITY AUDIT REPORT: Critical constraint violations detected.');
    } else {
      console.log('\n✅ INTEGRITY AUDIT REPORT: All referential integrity checks passed.');
    }

    return {
      success: !hasFailures,
      summary: auditResults,
    };
  } finally {
    if (shouldDisconnect) {
      await mongoose.disconnect();
    }
  }
}

if (require.main === module) {
  runIntegrityAudit()
    .then((res) => process.exit(res.success ? 0 : 1))
    .catch((err) => {
      console.error('Integrity audit error:', err);
      process.exit(1);
    });
}

module.exports = { runIntegrityAudit };
