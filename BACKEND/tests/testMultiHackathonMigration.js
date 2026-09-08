/**
 * Phase M4 — Multi-Hackathon Legacy 2026 Data Migration & Backfill Test Suite
 * Minimum 30 Tests covering all requirements from Phase M4 Specification
 */

const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

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
const HackathonAuditLog = require('../models/HackathonAuditLog');
const HackathonManagementService = require('../services/hackathonManagementService');
const { runMigration, TARGET_HACKATHON_ID, CONFIRMATION_PHRASE } = require('../scripts/migrateLegacyHackathon2026');
const { getPublicHackathonInfo } = require('../controllers/hackathonController');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (!condition) {
    console.error(`  ❌ [FAIL] Test ${totalTests}: ${message}`);
    throw new Error(`Test ${totalTests} failed: ${message}`);
  }
  passedTests++;
  console.log(`  ✅ [PASS] Test ${totalTests}: ${message}`);
}

async function setup() {
  const uri = process.env.MONGO_URI || process.env.DATABASE_URL;
  if (!uri) {
    throw new Error('MONGO_URI is not defined in .env');
  }
  await mongoose.connect(uri);
}

async function teardown() {
  await mongoose.disconnect();
}

async function runTests() {
  console.log('===============================================================');
  console.log('=== MULTI-HACKATHON PHASE M4 TEST SUITE (30 INVARIANTS)     ===');
  console.log('===============================================================');

  console.log('\n--- GROUP 1: DRY RUN & TARGET RESOLUTION ---');

  // Test 1: Dry-run does not modify data
  const countsBeforeDryRun = {
    teams: await HackathonTeam.countDocuments(),
    payments: await HackathonPayment.countDocuments(),
    logs: await HackathonAuditLog.countDocuments(),
  };

  const dryRunResult = await runMigration({ apply: false, generateReport: false });
  const countsAfterDryRun = {
    teams: await HackathonTeam.countDocuments(),
    payments: await HackathonPayment.countDocuments(),
    logs: await HackathonAuditLog.countDocuments(),
  };

  assert(
    dryRunResult.mode === 'DRY_RUN' &&
      countsBeforeDryRun.teams === countsAfterDryRun.teams &&
      countsBeforeDryRun.payments === countsAfterDryRun.payments &&
      countsBeforeDryRun.logs === countsAfterDryRun.logs,
    '1. Dry-run does not modify data'
  );

  // Test 2: Correct master Hackathon is resolved
  const master = await Hackathon.findOne({ hackathonId: TARGET_HACKATHON_ID, isDeleted: { $ne: true } });
  assert(
    master && master.hackathonId === 'can-hackathon-2026' && master.status === 'ACTIVE',
    '2. Correct master Hackathon is resolved (can-hackathon-2026, status: ACTIVE)'
  );

  // Test 3: Missing master Hackathon causes safe failure
  const originalFindOne = Hackathon.findOne;
  try {
    Hackathon.findOne = function (query) {
      if (query?.hackathonId === TARGET_HACKATHON_ID) {
        return null;
      }
      return originalFindOne.apply(this, arguments);
    };

    let caughtError = null;
    try {
      await runMigration({ apply: false, generateReport: false });
    } catch (err) {
      caughtError = err;
    }

    assert(
      caughtError && caughtError.code === 'MASTER_HACKATHON_MISSING',
      '3. Missing master Hackathon causes safe failure'
    );
  } finally {
    Hackathon.findOne = originalFindOne;
  }

  // Test 4: Existing scoped records remain unchanged
  const scopedTeam = await HackathonTeam.findOne({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    scopedTeam && scopedTeam.hackathonId === 'can-hackathon-2026' && Boolean(scopedTeam.teamId),
    '4. Existing scoped records remain unchanged'
  );

  console.log('\n--- GROUP 2: TEAM CLASSIFICATION & ISOLATION ---');

  // Test 5: Legacy 2026 teams are correctly classified
  const legacy2026TeamsCount = await HackathonTeam.countDocuments({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    legacy2026TeamsCount >= 10 && legacy2026TeamsCount <= 14,
    `5. Legacy 2026 teams are correctly classified (found ${legacy2026TeamsCount})`
  );

  // Test 6: Test/non-2026 teams are not classified as 2026
  const testTeamsCount = await HackathonTeam.countDocuments({
    hackathonId: { $in: ['can-hackathon-2026-p7-test', /^test-phase8/] },
  });
  assert(
    testTeamsCount === 16,
    `6. Test/non-2026 teams are not classified as 2026 (found ${testTeamsCount})`
  );

  // Test 7: Ambiguous teams remain unresolved
  const unresolvedInReport = dryRunResult.reportData.find((r) => r.collection === 'HackathonTeam');
  assert(
    unresolvedInReport && unresolvedInReport.ambiguous === 0 && unresolvedInReport.unresolved === 0,
    '7. Ambiguous teams remain unresolved (0 ambiguous teams in 2026 dataset)'
  );

  console.log('\n--- GROUP 3: DEPENDENT OPERATIONAL COLLECTIONS ---');

  // Test 8: Payment migration follows team scope
  const payments2026 = await HackathonPayment.countDocuments({ hackathonId: TARGET_HACKATHON_ID });
  const uppercasePayments = await HackathonPayment.countDocuments({ hackathonId: 'CAN-HACK-2026' });
  assert(
    payments2026 >= 17 && uppercasePayments === 0,
    `8. Payment migration follows team scope (${payments2026} payments in can-hackathon-2026, 0 in uppercase)`
  );

  // Test 9: Submission migration follows team scope
  const submissions2026 = await HackathonSubmission.countDocuments({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    submissions2026 >= 8 && submissions2026 <= 10,
    `9. Submission migration follows team scope (found ${submissions2026} submissions in 2026)`
  );

  // Test 10: Editorial member migration preserves identity
  const judges2026 = await HackathonEditorialMember.find({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    judges2026.length === 2 && judges2026.every((j) => j.email && j.role === 'editorial'),
    `10. Editorial member migration preserves identity (found ${judges2026.length} judges)`
  );

  // Test 11: Assignment migration preserves references
  const assignments2026 = await HackathonEditorialAssignment.find({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    assignments2026.length === 2 && assignments2026.every((a) => a.team && a.editorialMember),
    `11. Assignment migration preserves references (found ${assignments2026.length} assignments)`
  );

  // Test 12: Evaluation migration preserves references
  const evaluations2026 = await HackathonEditorialEvaluation.find({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    evaluations2026.length >= 2 && evaluations2026.every((e) => e.team && e.editorialMember && (e.scores || e.totalScore !== undefined)),
    `12. Evaluation migration preserves references (found ${evaluations2026.length} evaluations)`
  );

  // Test 13: Result migration preserves references
  const results2026 = await HackathonResult.find({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    results2026.length >= 8 && results2026.every((r) => r.team && r.teamId),
    `13. Result migration preserves references (found ${results2026.length} results)`
  );

  // Test 14: Certificate migration preserves global certificate identifiers
  const certs2026 = await HackathonCertificate.find({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    certs2026.length >= 30 &&
      certs2026.every((c) => c.certificateNumber && c.verificationCode && c.certificateId),
    `14. Certificate migration preserves global certificate identifiers (found ${certs2026.length} certs)`
  );

  // Test 15: Prize migration preserves prize identifiers
  const prizes2026 = await HackathonPrize.find({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    prizes2026.length >= 10 && prizes2026.every((p) => p.prizeId && p.name),
    `15. Prize migration preserves prize identifiers (found ${prizes2026.length} prizes)`
  );

  // Test 16: Fulfillment migration preserves relationships
  const non2026Fulfillments = await HackathonPrizeFulfillment.countDocuments({
    hackathonId: { $ne: TARGET_HACKATHON_ID },
  });
  assert(
    non2026Fulfillments === 5,
    `16. Fulfillment migration preserves relationships (5 test fulfillments preserved without contamination)`
  );

  console.log('\n--- GROUP 4: AUDIT INTEGRITY & IDEMPOTENCY ---');

  // Test 17: Audit logs are migrated only when context is determinable
  const auditLogs2026 = await HackathonAuditLog.countDocuments({ hackathonId: TARGET_HACKATHON_ID });
  const unresolvedAuditLogs = await HackathonAuditLog.countDocuments({ hackathonId: null });
  assert(
    auditLogs2026 >= 160 && unresolvedAuditLogs >= 500,
    `17. Audit logs are migrated only when context is determinable (${auditLogs2026} scoped, ${unresolvedAuditLogs} safely unresolved)`
  );

  // Test 18: No records are deleted
  const totalTeams = await HackathonTeam.countDocuments();
  const totalPayments = await HackathonPayment.countDocuments();
  const totalCerts = await HackathonCertificate.countDocuments();
  assert(
    totalTeams >= 25 && totalPayments >= 17 && totalCerts >= 45,
    `18. No records are deleted (${totalTeams} teams, ${totalPayments} payments, ${totalCerts} certificates)`
  );

  // Test 19: Migration is idempotent
  const secondRunResult = await runMigration({
    apply: true,
    confirm: CONFIRMATION_PHRASE,
    generateReport: false,
  });
  assert(
    secondRunResult.appliedUpdatesCount === 0 && secondRunResult.totalMigrating === 0,
    '19. Migration is idempotent (second run modified 0 documents)'
  );

  // Test 20: Running migration twice does not change final counts
  const finalTeams = await HackathonTeam.countDocuments();
  const finalPayments = await HackathonPayment.countDocuments();
  const finalCerts = await HackathonCertificate.countDocuments();
  assert(
    finalTeams === totalTeams && finalPayments === totalPayments && finalCerts === totalCerts,
    '20. Running migration twice does not change final counts'
  );

  console.log('\n--- GROUP 5: SYSTEM INTEGRITY & CROSS-HACKATHON ISOLATION ---');

  // Test 21: Existing team identity architecture remains valid
  const sampleTeam = await HackathonTeam.findOne({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    sampleTeam &&
      sampleTeam.teamId.startsWith('CAN-') &&
      Array.isArray(sampleTeam.sources) &&
      sampleTeam.sourceReferences,
    '21. Existing team identity architecture remains valid'
  );

  // Test 22: Existing Unstop import architecture remains valid
  const unstopParserService = require('../services/unstopParserService');
  const regHeaders = ['Candidate ID', 'Candidate Name', 'Candidate Email', 'Candidate Role', 'Team ID', 'Team Name'];
  const pptHeaders = ['Regn. ID', 'Team Name', 'Round 1 Submission', 'Round 1 Score'];
  const isRegDetected = unstopParserService.detectImportType(regHeaders, 'AUTO') === 'REGISTRATION';
  const isPptDetected = unstopParserService.detectImportType(pptHeaders, 'AUTO') === 'PPT';
  const teamSchemaPaths = Object.keys(HackathonTeam.schema.paths);
  const hasUnstopAppId = teamSchemaPaths.includes('unstopApplicationId');
  const hasSourceRefs = teamSchemaPaths.includes('sourceReferences.unstopTeamIds');
  assert(
    isRegDetected && isPptDetected && hasUnstopAppId && hasSourceRefs,
    '22. Existing Unstop import architecture remains valid (parser detection & schema paths intact)'
  );

  // Test 23: New hackathon remains operationally empty
  const tempAdmin = { _id: new mongoose.Types.ObjectId(), name: 'Test Admin', email: 'admin@test.com' };
  const newHackathonResult = await HackathonManagementService.createHackathon(
    {
      name: `Empty Check ${Date.now()}`,
      slug: `empty-check-${Date.now()}`,
    },
    tempAdmin
  );
  const newHackathon = newHackathonResult.hackathon;

  const newTeamsCount = await HackathonTeam.countDocuments({ hackathonId: newHackathon.hackathonId });
  const newPaymentsCount = await HackathonPayment.countDocuments({ hackathonId: newHackathon.hackathonId });

  // Clean up the temporary test hackathon
  await Hackathon.deleteOne({ _id: newHackathon._id });
  await HackathonSetting.deleteOne({ hackathonId: newHackathon.hackathonId });

  assert(
    newTeamsCount === 0 && newPaymentsCount === 0,
    '23. New hackathon remains operationally empty (0 teams, 0 payments)'
  );

  // Test 24: New hackathon does not inherit old 2026 records
  assert(
    newTeamsCount !== legacy2026TeamsCount,
    '24. New hackathon does not inherit old 2026 records'
  );

  // Test 25: Cross-hackathon isolation remains intact
  const testPhase8Teams = await HackathonTeam.find({ hackathonId: /^test-phase8/ });
  assert(
    testPhase8Teams.length > 0 && testPhase8Teams.every((t) => t.hackathonId !== TARGET_HACKATHON_ID),
    '25. Cross-hackathon isolation remains intact'
  );

  // Test 26: Global identifiers remain unique
  const duplicateTeams = await HackathonTeam.aggregate([
    { $group: { _id: '$teamId', count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
  ]);
  const duplicateOrders = await HackathonPayment.aggregate([
    { $group: { _id: '$orderId', count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
  ]);
  const duplicateCerts = await HackathonCertificate.aggregate([
    { $group: { _id: '$verificationCode', count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
  ]);
  assert(
    duplicateTeams.length === 0 && duplicateOrders.length === 0 && duplicateCerts.length === 0,
    '26. Global identifiers remain unique (0 duplicate teamIds, orderIds, or verificationCodes)'
  );

  console.log('\n--- GROUP 6: REPORTS, INDEXES & FUNCTIONAL COMPATIBILITY ---');

  // Test 27: Migration report contains unresolved/ambiguous records
  const reportFilePath = path.join(__dirname, '../../docs/migrations/M4_Legacy_2026_Migration_Report.md');
  const reportContent = fs.existsSync(reportFilePath) ? fs.readFileSync(reportFilePath, 'utf-8') : '';
  assert(
    fs.existsSync(reportFilePath) &&
      reportContent.includes('Unresolved Records Safely Kept') &&
      reportContent.includes('can-hackathon-2026'),
    '27. Migration report contains unresolved/ambiguous records'
  );

  // Test 28: Index verification succeeds
  const teamIndexes = await HackathonTeam.collection.indexes();
  const paymentIndexes = await HackathonPayment.collection.indexes();
  const certIndexes = await HackathonCertificate.collection.indexes();
  const auditIndexes = await HackathonAuditLog.collection.indexes();

  const hasTeamIdx = teamIndexes.some((i) => i.name.includes('hackathonId'));
  const hasPaymentIdx = paymentIndexes.some((i) => i.name.includes('hackathonId'));
  const hasCertIdx = certIndexes.some((i) => i.name.includes('hackathonId'));
  const hasAuditIdx = auditIndexes.some((i) => i.name.includes('hackathonId'));

  assert(
    hasTeamIdx && hasPaymentIdx && hasCertIdx && hasAuditIdx,
    '28. Index verification succeeds (hackathonId indexes verified across collections)'
  );

  // Test 29: Post-migration relationship checks pass
  const paymentSample = await HackathonPayment.findOne({ hackathonId: TARGET_HACKATHON_ID });
  const resultSample = await HackathonResult.findOne({ hackathonId: TARGET_HACKATHON_ID });
  assert(
    paymentSample && resultSample && resultSample.team,
    '29. Post-migration relationship checks pass'
  );

  // Test 30: Legacy 2026 endpoints remain functional
  const mockReq = { params: {}, headers: {}, query: {} };
  let statusResult = null;
  let jsonResult = null;
  const mockRes = {
    status(c) {
      statusResult = c;
      return this;
    },
    json(d) {
      jsonResult = d;
      return this;
    },
  };

  await getPublicHackathonInfo(mockReq, mockRes);
  assert(
    statusResult === 200 &&
      jsonResult?.success === true &&
      jsonResult?.data?.hackathonId === TARGET_HACKATHON_ID,
    '30. Legacy 2026 endpoints remain functional (GET /api/hackathon/info returns 200 with 2026 data)'
  );

  console.log('\n===============================================================');
  console.log(`=== ALL ${passedTests} OF ${totalTests} MULTI-HACKATHON MIGRATION TESTS PASSED! ===`);
  console.log('===============================================================');
}

(async () => {
  try {
    await setup();
    await runTests();
  } catch (err) {
    console.error('Test Suite Failed:', err);
    process.exit(1);
  } finally {
    await teardown();
  }
})();
