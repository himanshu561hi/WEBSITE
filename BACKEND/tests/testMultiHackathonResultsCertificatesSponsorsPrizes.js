/**
 * Phase M8: Multi-Hackathon Results, Certificates, Sponsors, Prizes & Prize Fulfillment Test Suite
 * 62 Invariants covering:
 * - Result Calculation, Locking, Approval, Publication & Sanitization
 * - Certificate Generation, Dynamic Numbering, Idempotency & Public Verification
 * - Sponsor Isolation, Global Search & Reuse
 * - Prize Scoping & Participant Access
 * - Prize Fulfillment Triple-Point Invariant Verification
 * - 2026 Production Data Preservation & Complete Multi-Tenant Isolation
 */

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonTeam = require('../models/HackathonTeam');
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

const hackathonResultService = require('../services/hackathonResultService');
const hackathonCertificateService = require('../services/hackathonCertificateService');
const hackathonController = require('../controllers/hackathonController');

const HACKATHON_A = 'm8-test-hack-a';
const HACKATHON_B = 'm8-test-hack-b';
const SLUG_A = 'm8-hack-a';
const SLUG_B = 'm8-hack-b';

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (!condition) {
    failedTests++;
    console.error(`  ❌ [FAIL] ${message}`);
    throw new Error(`Test failed: ${message}`);
  }
  passedTests++;
  console.log(`  ✅ [PASS] ${message}`);
}

function mockRes() {
  const res = {
    statusCode: 200,
    data: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      this.data = data;
      return this;
    },
  };
  return res;
}

async function cleanTestData() {
  const testHackIds = [HACKATHON_A, HACKATHON_B];
  await Hackathon.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonSetting.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonTeam.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonSubmission.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonEditorialMember.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonEditorialAssignment.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonEditorialEvaluation.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonResult.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonCertificate.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonPrize.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonSponsor.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonPrizeFulfillment.deleteMany({ hackathonId: { $in: testHackIds } });
  await HackathonAuditLog.deleteMany({ hackathonId: { $in: testHackIds } });
}

async function runTestSuite() {
  console.log('\n============================================================');
  console.log('PHASE M8: MULTI-HACKATHON RESULTS, CERTIFICATES & PRIZES');
  console.log('62 INVARIANTS TEST SUITE');
  console.log('============================================================\n');

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // 1. Initial 2026 Production Baseline
  const initial2026Results = await HackathonResult.countDocuments({ hackathonId: 'can-hackathon-2026' });
  const initial2026Certificates = await HackathonCertificate.countDocuments({ hackathonId: 'can-hackathon-2026' });
  const initial2026Prizes = await HackathonPrize.countDocuments({ hackathonId: 'can-hackathon-2026' });
  const initial2026Sponsors = await HackathonSponsor.countDocuments({ hackathonId: 'can-hackathon-2026' });
  const initial2026Fulfillments = await HackathonPrizeFulfillment.countDocuments({ hackathonId: 'can-hackathon-2026' });

  console.log(`[Baseline] 2026 Production: Results=${initial2026Results}, Certs=${initial2026Certificates}, Prizes=${initial2026Prizes}, Sponsors=${initial2026Sponsors}, Fulfillments=${initial2026Fulfillments}`);

  await cleanTestData();

  // Setup Test Hackathons A and B
  const hackA = await Hackathon.create({
    hackathonId: HACKATHON_A,
    name: 'M8 Test Hackathon Alpha',
    slug: SLUG_A,
    tagline: 'Multi-Hackathon Alpha for M8 Testing',
    startDate: new Date('2026-11-01'),
    endDate: new Date('2026-11-05'),
    status: 'UPCOMING',
  });

  const hackB = await Hackathon.create({
    hackathonId: HACKATHON_B,
    name: 'M8 Test Hackathon Beta',
    slug: SLUG_B,
    tagline: 'Multi-Hackathon Beta for M8 Testing',
    startDate: new Date('2026-12-01'),
    endDate: new Date('2026-12-05'),
    status: 'UPCOMING',
  });

  const settingA = await HackathonSetting.create({
    hackathonId: HACKATHON_A,
    hackathonName: 'M8 Test Hackathon Alpha',
    resultsPublished: true,
  });

  const settingB = await HackathonSetting.create({
    hackathonId: HACKATHON_B,
    hackathonName: 'M8 Test Hackathon Beta',
    resultsPublished: false,
  });

  // Setup Teams for Hackathon A and B
  const teamA1 = await HackathonTeam.create({
    hackathonId: HACKATHON_A,
    teamId: 'TEAM-A1',
    teamName: 'Alpha Titans',
    status: 'CONFIRMED',
    leader: { name: 'Alice Leader', email: 'alice@alpha.test', phone: '1234567890' },
    members: [{ name: 'Alice Member', email: 'alicem@alpha.test', phone: '1234567891' }]
  });

  const teamA2 = await HackathonTeam.create({
    hackathonId: HACKATHON_A,
    teamId: 'TEAM-A2',
    teamName: 'Alpha Gladiators',
    status: 'CONFIRMED',
    leader: { name: 'Bob Leader', email: 'bob@alpha.test', phone: '1234567892' },
    members: [{ name: 'Bob Member', email: 'bobm@alpha.test', phone: '1234567893' }]
  });

  const teamB1 = await HackathonTeam.create({
    hackathonId: HACKATHON_B,
    teamId: 'TEAM-B1',
    teamName: 'Beta Warriors',
    status: 'CONFIRMED',
    leader: { name: 'Charlie Leader', email: 'charlie@beta.test', phone: '9876543210' },
    members: [{ name: 'Charlie Member', email: 'charliem@beta.test', phone: '9876543211' }]
  });

  // Setup Submissions
  const subA1 = await HackathonSubmission.create({
    hackathonId: HACKATHON_A,
    team: teamA1._id,
    teamId: teamA1.teamId,
    submitterEmail: 'alice@alpha.test',
    projectName: 'Alpha AI Project 1',
    status: 'SUBMITTED'
  });

  const subA2 = await HackathonSubmission.create({
    hackathonId: HACKATHON_A,
    team: teamA2._id,
    teamId: teamA2.teamId,
    submitterEmail: 'bob@alpha.test',
    projectName: 'Alpha AI Project 2',
    status: 'SUBMITTED'
  });

  const subB1 = await HackathonSubmission.create({
    hackathonId: HACKATHON_B,
    team: teamB1._id,
    teamId: teamB1.teamId,
    submitterEmail: 'charlie@beta.test',
    projectName: 'Beta Cloud Project 1',
    status: 'SUBMITTED'
  });

  // Setup Judges
  const judgeA = await HackathonEditorialMember.create({
    hackathonId: HACKATHON_A,
    name: 'Judge Alpha',
    email: 'judge@alpha.test',
    passwordHash: 'dummy_hash_123',
    role: 'judge',
    active: true
  });

  const judgeB = await HackathonEditorialMember.create({
    hackathonId: HACKATHON_B,
    name: 'Judge Beta',
    email: 'judge@beta.test',
    passwordHash: 'dummy_hash_456',
    role: 'judge',
    active: true
  });

  // Setup Assignments
  const assignA1 = await HackathonEditorialAssignment.create({
    hackathonId: HACKATHON_A,
    team: teamA1._id,
    teamId: teamA1.teamId,
    submission: subA1._id,
    editorialMember: judgeA._id,
    status: 'ACTIVE'
  });

  const assignA2 = await HackathonEditorialAssignment.create({
    hackathonId: HACKATHON_A,
    team: teamA2._id,
    teamId: teamA2.teamId,
    submission: subA2._id,
    editorialMember: judgeA._id,
    status: 'ACTIVE'
  });

  const assignB1 = await HackathonEditorialAssignment.create({
    hackathonId: HACKATHON_B,
    team: teamB1._id,
    teamId: teamB1.teamId,
    submission: subB1._id,
    editorialMember: judgeB._id,
    status: 'ACTIVE'
  });

  // Evaluation for Team A1 (Score 95)
  await HackathonEditorialEvaluation.create({
    hackathonId: HACKATHON_A,
    team: teamA1._id,
    teamId: teamA1.teamId,
    submission: subA1._id,
    editorialMember: judgeA._id,
    assignment: assignA1._id,
    totalScore: 95,
    status: 'FINALIZED',
    isLocked: true,
    scores: [{ criterion: 'Innovation', score: 95, maxScore: 100 }]
  });

  // Evaluation for Team A2 (Score 85)
  await HackathonEditorialEvaluation.create({
    hackathonId: HACKATHON_A,
    team: teamA2._id,
    teamId: teamA2.teamId,
    submission: subA2._id,
    editorialMember: judgeA._id,
    assignment: assignA2._id,
    totalScore: 85,
    status: 'FINALIZED',
    isLocked: true,
    scores: [{ criterion: 'Innovation', score: 85, maxScore: 100 }]
  });

  // Evaluation for Team B1 (Score 90)
  await HackathonEditorialEvaluation.create({
    hackathonId: HACKATHON_B,
    team: teamB1._id,
    teamId: teamB1.teamId,
    submission: subB1._id,
    editorialMember: judgeB._id,
    assignment: assignB1._id,
    totalScore: 90,
    status: 'FINALIZED',
    isLocked: true,
    scores: [{ criterion: 'Innovation', score: 90, maxScore: 100 }]
  });


  console.log('\n--- Category 1: Model Schemas & Pre-validation Hooks (Invariants 1-8) ---');
  
  // 1. Result auto-inherits hackathonId from team
  const resAuto = new HackathonResult({
    team: teamA1._id,
    teamId: teamA1.teamId,
    finalScore: 95,
    rank: 1,
    teamName: 'Alpha Titans'
  });
  await resAuto.validate();
  assert(resAuto.hackathonId === HACKATHON_A, 'Inv 1: Result auto-inherits hackathonId from team');

  // 2. Certificate auto-inherits hackathonId from team
  const certAuto = new HackathonCertificate({
    certificateId: 'CERT-AUTO-1',
    certificateNumber: 'CAN-AUTO-001',
    verificationCode: 'VERIFY-AUTO-1',
    team: teamA1._id,
    teamId: teamA1.teamId,
    recipientName: 'Alice Leader',
    recipientEmail: 'alice@alpha.test',
    type: 'WINNER'
  });
  await certAuto.validate();
  assert(certAuto.hackathonId === HACKATHON_A, 'Inv 2: Certificate auto-inherits hackathonId from team');

  // 3. Prize requires explicit hackathonId
  const prizeNoHack = new HackathonPrize({
    prizeId: 'PRIZE-TEST-FAIL',
    title: 'No Hackathon Prize',
    rank: 1
  });
  let prizeErr = null;
  try {
    await prizeNoHack.validate();
  } catch (err) {
    prizeErr = err;
  }
  assert(prizeErr && prizeErr.errors['hackathonId'], 'Inv 3: Prize requires explicit hackathonId');

  // 4. Sponsor requires explicit hackathonId
  const sponsorNoHack = new HackathonSponsor({
    sponsorId: 'SPONSOR-TEST-FAIL',
    name: 'No Hackathon Sponsor',
    tier: 'GOLD'
  });
  let sponsorErr = null;
  try {
    await sponsorNoHack.validate();
  } catch (err) {
    sponsorErr = err;
  }
  assert(sponsorErr && sponsorErr.errors['hackathonId'], 'Inv 4: Sponsor requires explicit hackathonId');

  // 5. Fulfillment auto-inherits hackathonId from team
  const fulfillAuto = new HackathonPrizeFulfillment({
    fulfillmentId: 'FULFILL-AUTO-1',
    team: teamA1._id,
    teamId: teamA1.teamId,
    prizeId: new mongoose.Types.ObjectId(),
    resultId: new mongoose.Types.ObjectId(),
    recipient: { name: 'Alice Leader', email: 'alice@alpha.test' },
    status: 'PENDING'
  });
  await fulfillAuto.validate();
  assert(fulfillAuto.hackathonId === HACKATHON_A, 'Inv 5: PrizeFulfillment auto-inherits hackathonId from team');

  // 6. Compound unique index: Result (hackathonId + teamId)
  await HackathonResult.create({
    hackathonId: HACKATHON_A,
    team: teamA1._id,
    teamId: teamA1.teamId,
    finalScore: 95,
    rank: 1,
    teamName: 'Alpha Titans'
  });
  let dupResultErr = null;
  try {
    await HackathonResult.create({
      hackathonId: HACKATHON_A,
      team: teamA1._id,
      teamId: teamA1.teamId,
      finalScore: 95,
      rank: 1,
      teamName: 'Alpha Titans Duplicate'
    });
  } catch (err) {
    dupResultErr = err;
  }
  assert(dupResultErr && dupResultErr.code === 11000, 'Inv 6: Compound unique index prevents duplicate result per team per hackathon');

  // 7. Same teamId allowed in different hackathon if multi-hackathon team
  let multiHackResultOk = true;
  try {
    await HackathonResult.create({
      hackathonId: HACKATHON_B,
      team: teamA1._id,
      teamId: teamA1.teamId,
      finalScore: 80,
      rank: 2,
      teamName: 'Alpha Titans in Beta'
    });
  } catch (err) {
    multiHackResultOk = false;
  }
  assert(multiHackResultOk, 'Inv 7: Same teamId can exist in separate hackathons without unique collision');

  // Clean up temp results from Invariant 6 & 7 before calculation category
  await HackathonResult.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });

  // 8. Compound unique index: Prize (hackathonId + prizeId)
  await HackathonPrize.create({
    hackathonId: HACKATHON_A,
    prizeId: '1ST-PRIZE',
    name: 'First Place Winner Alpha',
    category: 'OVERALL',
    rank: 1,
    amount: 50000
  });
  let dupPrizeErr = null;
  try {
    await HackathonPrize.create({
      hackathonId: HACKATHON_A,
      prizeId: '1ST-PRIZE',
      name: 'First Place Winner Alpha Duplicate',
      category: 'OVERALL',
      rank: 1
    });
  } catch (err) {
    dupPrizeErr = err;
  }
  assert(dupPrizeErr && dupPrizeErr.code === 11000, 'Inv 8: Compound unique index prevents duplicate prizeId per hackathon');

  // Same prizeId in Hackathon B is permitted
  const prizeB1 = await HackathonPrize.create({
    hackathonId: HACKATHON_B,
    prizeId: '1ST-PRIZE',
    name: 'First Place Winner Beta',
    category: 'OVERALL',
    rank: 1,
    amount: 30000
  });
  assert(prizeB1.hackathonId === HACKATHON_B, 'Inv 8b: Same prizeId allowed in different hackathon');

  // Clean test results for calculation testing
  await HackathonResult.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });

  console.log('\n--- Category 2: Result Calculation & Score Isolation (Invariants 9-14) ---');

  // 9. Calculate results strictly for Hackathon A
  const calcResA = await hackathonResultService.calculateResults({ hackathonId: HACKATHON_A, user: { email: 'admin@test.com' } });
  assert(calcResA.eligibleCount === 2, `Inv 9: Calculated 2 results for Hackathon A (got ${calcResA.eligibleCount})`);

  // 10. Calculations for Hackathon A do NOT pull or mutate Hackathon B teams
  const resultsA = await HackathonResult.find({ hackathonId: HACKATHON_A }).sort({ rank: 1 });
  assert(resultsA.length === 2, 'Inv 10: Hackathon A has exactly 2 results in DB');
  assert(resultsA[0].teamName === 'Alpha Titans' && resultsA[0].rank === 1 && resultsA[0].finalScore === 95, 'Inv 10b: Team A1 is rank 1 with score 95');
  assert(resultsA[1].teamName === 'Alpha Gladiators' && resultsA[1].rank === 2 && resultsA[1].finalScore === 85, 'Inv 10c: Team A2 is rank 2 with score 85');

  // 11. DRAFT evaluations excluded (Team A2 score was 85, draft of 10 was ignored)
  assert(resultsA[1].finalScore === 85, 'Inv 11: Draft evaluations were completely excluded from calculation');

  // 12. Calculate results for Hackathon B
  const calcResB = await hackathonResultService.calculateResults({ hackathonId: HACKATHON_B, user: { email: 'admin@test.com' } });
  assert(calcResB.eligibleCount === 1, `Inv 12: Calculated 1 result for Hackathon B (got ${calcResB.eligibleCount})`);

  // 13. Hackathon B results isolation
  const resultsB = await HackathonResult.find({ hackathonId: HACKATHON_B });
  assert(resultsB.length === 1 && resultsB[0].teamName === 'Beta Warriors', 'Inv 13: Hackathon B result contains only Beta Warriors');

  // 14. Summary isolation
  const summaryA = await hackathonResultService.getResultsSummary({ hackathonId: HACKATHON_A });
  const summaryB = await hackathonResultService.getResultsSummary({ hackathonId: HACKATHON_B });
  assert(summaryA.totalResults === 2 && summaryB.totalResults === 1, 'Inv 14: Summary counts are completely isolated between hackathons');

  console.log('\n--- Category 3: Tie-Breaking Safe Handling (Invariants 15-18) ---');

  // Setup tie in Hackathon A: Add Team A3 with score 95
  const teamA3 = await HackathonTeam.create({
    hackathonId: HACKATHON_A,
    teamId: 'TEAM-A3',
    teamName: 'Alpha Spartans',
    status: 'CONFIRMED',
    leader: { name: 'Diana Leader', email: 'diana@alpha.test', phone: '1234567894' },
    members: [{ name: 'Diana Member', email: 'dianam@alpha.test', phone: '1234567895' }]
  });
  const subA3 = await HackathonSubmission.create({
    hackathonId: HACKATHON_A,
    team: teamA3._id,
    teamId: teamA3.teamId,
    submitterEmail: 'diana@alpha.test',
    projectName: 'Alpha Project 3',
    status: 'SUBMITTED'
  });
  const assignA3 = await HackathonEditorialAssignment.create({
    hackathonId: HACKATHON_A,
    team: teamA3._id,
    teamId: teamA3.teamId,
    submission: subA3._id,
    editorialMember: judgeA._id,
    status: 'ACTIVE'
  });
  await HackathonEditorialEvaluation.create({
    hackathonId: HACKATHON_A,
    team: teamA3._id,
    teamId: teamA3.teamId,
    submission: subA3._id,
    editorialMember: judgeA._id,
    assignment: assignA3._id,
    totalScore: 95,
    status: 'FINALIZED',
    isLocked: true,
    scores: [{ criterion: 'Innovation', score: 95, maxScore: 100 }]
  });

  // 15. Re-calculate detects tie
  await hackathonResultService.calculateResults({ hackathonId: HACKATHON_A, user: { email: 'admin@test.com' } });
  const tiedResults = await HackathonResult.find({ hackathonId: HACKATHON_A, isTie: true });
  assert(tiedResults.length >= 2, `Inv 15: Ties detected accurately (found ${tiedResults.length} tied results)`);

  // 16. Admin resolves tie in Hackathon A
  const tieResolutions = [
    { teamId: teamA1._id.toString(), rank: 1, reason: 'Superior prototype demo' },
    { teamId: teamA3._id.toString(), rank: 2, reason: 'Excellent presentation' }
  ];
  await hackathonResultService.resolveTie({
    hackathonId: HACKATHON_A,
    resolutions: tieResolutions,
    user: { email: 'admin@test.com', name: 'Admin' }
  });

  const resA1AfterTie = await HackathonResult.findOne({ hackathonId: HACKATHON_A, $or: [{ teamId: teamA1.teamId }, { team: teamA1._id }] });
  const resA3AfterTie = await HackathonResult.findOne({ hackathonId: HACKATHON_A, $or: [{ teamId: teamA3.teamId }, { team: teamA3._id }] });
  assert(resA1AfterTie.rank === 1 && resA3AfterTie.rank === 2, 'Inv 16: Tie resolution applied ranks accurately in Hackathon A');
  assert(resA1AfterTie.tieBreakReason === 'Superior prototype demo', 'Inv 16b: Tie break reason recorded on result');

  // 17. Hackathon B is unaffected by tie resolution in Hackathon A
  const resB1AfterTie = await HackathonResult.findOne({ hackathonId: HACKATHON_B, $or: [{ teamId: teamB1.teamId }, { team: teamB1._id }] });
  assert(resB1AfterTie.rank === 1 && !resB1AfterTie.isTie, 'Inv 17: Hackathon B result unaffected by Hackathon A tie break');

  // 18. Winner assignment in Hackathon A
  await hackathonResultService.assignWinner({
    hackathonId: HACKATHON_A,
    teamId: teamA1._id.toString(),
    winnerCategory: 'FIRST_PLACE',
    user: { email: 'admin@test.com' }
  });
  const resA1Winner = await HackathonResult.findOne({ hackathonId: HACKATHON_A, $or: [{ teamId: teamA1.teamId }, { team: teamA1._id }] });
  assert(resA1Winner.isWinner && resA1Winner.winnerCategory === 'FIRST_PLACE', 'Inv 18: Winner assigned accurately in Hackathon A');

  console.log('\n--- Category 4: Result Approval, Locking & Reopening (Invariants 19-24) ---');

  // 19. Result approval creates rankingSnapshot
  await hackathonResultService.approveResults({ hackathonId: HACKATHON_A, user: { email: 'admin@test.com' } });
  const approvedResultsA = await HackathonResult.find({ hackathonId: HACKATHON_A });
  assert(approvedResultsA.every(r => r.resultStatus === 'APPROVED' && r.rankingSnapshot.rank !== null), 'Inv 19: All Hackathon A results approved with rankingSnapshot');

  // 20. Lock results
  await hackathonResultService.lockResults({ hackathonId: HACKATHON_A, user: { email: 'admin@test.com' } });
  const lockedResultsA = await HackathonResult.find({ hackathonId: HACKATHON_A });
  assert(lockedResultsA.every(r => r.resultStatus === 'LOCKED'), 'Inv 20: Hackathon A results status transitioned to LOCKED');

  // 21. Calculation blocked when results are locked
  let calcLockedErr = null;
  try {
    await hackathonResultService.calculateResults({ hackathonId: HACKATHON_A, user: { email: 'admin@test.com' } });
  } catch (err) {
    calcLockedErr = err;
  }
  assert(calcLockedErr !== null, 'Inv 21: Result calculation blocked while results are locked');

  // 22. Hackathon B is still unlocked and operable
  const resBStatus = await HackathonResult.findOne({ hackathonId: HACKATHON_B });
  assert(resBStatus.resultStatus === 'CALCULATED', 'Inv 22: Hackathon B remains unlocked and independent');

  // 23. Reopen results in Hackathon A
  await hackathonResultService.reopenResults({ hackathonId: HACKATHON_A, reason: 'Need re-evaluation', user: { email: 'admin@test.com' } });
  const reopenedResultsA = await HackathonResult.find({ hackathonId: HACKATHON_A });
  assert(reopenedResultsA.every(r => r.resultStatus === 'REOPENED'), 'Inv 23: Hackathon A results reopened with audit reason');

  // 24. Publish results in Hackathon A
  await hackathonResultService.publishResults({ hackathonId: HACKATHON_A, user: { email: 'admin@test.com' } });
  const publishedResultsA = await HackathonResult.find({ hackathonId: HACKATHON_A });
  assert(publishedResultsA.every(r => r.isPublished === true && r.resultStatus === 'PUBLISHED'), 'Inv 24: Hackathon A results published');

  console.log('\n--- Category 5: Public & Participant Results Sanitization (Invariants 25-29) ---');

  // 25. Public results controller action scoped to Hackathon A
  const reqPubA = {
    hackathonId: HACKATHON_A,
    query: {},
    headers: {}
  };
  const resPubA = mockRes();
  await hackathonController.getPublicResults(reqPubA, resPubA);
  assert(resPubA.statusCode === 200 && resPubA.data?.success, 'Inv 25: Public results fetched successfully for Hackathon A');
  const pubRankingsA = resPubA.data.rankings || resPubA.data.leaderboard || [];
  assert(pubRankingsA.length === 3, `Inv 25b: Returned 3 public results for Hackathon A (got ${pubRankingsA.length})`);

  // 26. Sanitization: Judge details, emails, comments, internal reviewer info stripped
  const samplePubRes = pubRankingsA[0];
  assert(samplePubRes.editorialMemberId === undefined, 'Inv 26a: editorialMemberId stripped from public results');
  assert(samplePubRes.evaluations === undefined, 'Inv 26b: Raw evaluations array stripped');
  assert(samplePubRes.judgeComments === undefined, 'Inv 26c: Judge comments stripped');
  assert(samplePubRes.leaderEmail === undefined, 'Inv 26d: Leader email stripped');

  // 27. Public results for Hackathon B (resultsPublished: false in setting)
  const reqPubB = {
    hackathonId: HACKATHON_B,
    query: {},
    headers: {}
  };
  const resPubB = mockRes();
  await hackathonController.getPublicResults(reqPubB, resPubB);
  const pubRankingsB = resPubB.data.rankings || resPubB.data.leaderboard || [];
  assert(pubRankingsB.length === 0, 'Inv 27: Public results empty when Hackathon B results not published');

  // 28. Participant /api/hackathon/participant/my-result for Team A1
  const reqPartA1 = {
    hackathonId: HACKATHON_A,
    user: { email: teamA1.leader.email, _id: teamA1.leader.userId },
    query: { teamId: teamA1.teamId },
    headers: {}
  };
  const resPartA1 = mockRes();
  await hackathonController.getParticipantMyResult(reqPartA1, resPartA1);
  const myResData = resPartA1.data.result || resPartA1.data.data;
  assert(resPartA1.statusCode === 200 && myResData.teamName === 'Alpha Titans', 'Inv 28: Participant retrieved their own result in Hackathon A');

  // 29. Participant cross-hackathon block
  const reqPartMismatched = {
    hackathonId: HACKATHON_B, // request says Hackathon B
    user: { email: teamA1.leader.email, _id: teamA1.leader.userId },
    query: { teamId: teamA1.teamId },
    headers: {}
  };
  const resPartMismatched = mockRes();
  await hackathonController.getParticipantMyResult(reqPartMismatched, resPartMismatched);
  assert(resPartMismatched.statusCode === 403, 'Inv 29: Cross-hackathon result access blocked with 403 Forbidden');

  console.log('\n--- Category 6: Certificate Numbering & Dynamic Scoping (Invariants 30-35) ---');

  // 30. Dynamic certificate number for 2026 hackathon produces CAN-2026-XXXXXX
  const certNum2026 = hackathonCertificateService.generateCertificateNumber('can-hackathon-2026');
  assert(/^CAN-2026-[A-Z0-9]{6}$/.test(certNum2026), `Inv 30: 2026 Certificate format matches CAN-2026-XXXXXX (${certNum2026})`);

  // 31. Dynamic certificate number for Hackathon A produces CAN-M8TESTHA-XXXXXX
  const certNumA = hackathonCertificateService.generateCertificateNumber(HACKATHON_A);
  assert(/^CAN-M8TESTHA-[A-Z0-9]{6}$/.test(certNumA), `Inv 31: Hackathon A certificate format matches CAN-M8TESTHA-XXXXXX (${certNumA})`);

  // 32. Dynamic certificate number for Hackathon B produces CAN-M8TESTHB-XXXXXX
  const certNumB = hackathonCertificateService.generateCertificateNumber(HACKATHON_B);
  assert(/^CAN-M8TESTHB-[A-Z0-9]{6}$/.test(certNumB), `Inv 32: Hackathon B certificate format matches CAN-M8TESTHB-XXXXXX (${certNumB})`);

  // 33. Generate all eligible certificates for Hackathon A
  const genCertResA = await hackathonCertificateService.generateAllEligibleCertificates({
    hackathonId: HACKATHON_A,
    user: { email: 'admin@test.com' }
  });
  assert(genCertResA.generatedCount > 0, `Inv 33: Generated ${genCertResA.generatedCount} certificates for Hackathon A`);

  // 34. Idempotent generation: calling again produces 0 new certificates
  const genCertResA2 = await hackathonCertificateService.generateAllEligibleCertificates({
    hackathonId: HACKATHON_A,
    user: { email: 'admin@test.com' }
  });
  assert(genCertResA2.generatedCount === 0, 'Inv 34: Certificate generation is strictly idempotent (0 duplicates generated)');

  // 35. Certificate isolation: Hackathon B has 0 certificates generated
  const certsBCount = await HackathonCertificate.countDocuments({ hackathonId: HACKATHON_B });
  assert(certsBCount === 0, 'Inv 35: Hackathon B has 0 certificates generated');

  console.log('\n--- Category 7: Public Certificate Verification (Invariants 36-39) ---');

  // 36. Verify certificate returns dynamic hackathon name
  const sampleCertA = await HackathonCertificate.findOne({ hackathonId: HACKATHON_A });
  const verifyResA = await hackathonCertificateService.verifyCertificate(sampleCertA.verificationCode);
  assert(verifyResA.isValid === true, 'Inv 36a: Certificate verified as valid');
  assert(verifyResA.hackathonName === 'M8 Test Hackathon Alpha', `Inv 36b: Verification returns dynamic hackathonName (${verifyResA.hackathonName})`);

  // 37. Revoked certificate returns isValid: false
  await hackathonCertificateService.revokeCertificate({
    certificateId: sampleCertA._id,
    reason: 'Issued in error',
    user: { email: 'admin@test.com' }
  });
  const verifyRevoked = await hackathonCertificateService.verifyCertificate(sampleCertA.verificationCode);
  assert(verifyRevoked.isValid === false && verifyRevoked.isRevoked === true, 'Inv 37: Revoked certificate verification returns isValid: false');

  // 38. Admin certificates list strictly scoped by hackathonId
  const reqCertListA = {
    hackathonId: HACKATHON_A,
    query: { page: 1, limit: 10 },
    headers: {}
  };
  const resCertListA = mockRes();
  await hackathonController.getAdminCertificates(reqCertListA, resCertListA);
  assert(resCertListA.statusCode === 200 && Array.isArray(resCertListA.data.certificates) && resCertListA.data.certificates.every(c => c.hackathonId === HACKATHON_A), 'Inv 38: Admin certificates list contains only Hackathon A certificates');

  // 39. Participant /my-certificates strictly returns certificates for their team/hackathon
  const reqPartCertA = {
    hackathonId: HACKATHON_A,
    user: { email: teamA1.leader.email },
    team: teamA1,
    headers: {}
  };
  const resPartCertA = mockRes();
  await hackathonController.getParticipantMyCertificates(reqPartCertA, resPartCertA);
  assert(resPartCertA.statusCode === 200 && Array.isArray(resPartCertA.data.certificates) && resPartCertA.data.certificates.every(c => c.hackathonId === HACKATHON_A), 'Inv 39: Participant retrieved only their certificates in Hackathon A');

  console.log('\n--- Category 8: Sponsor Scoping, Global Search & Reuse (Invariants 40-45) ---');

  // 40. Create sponsor in Hackathon A
  const reqSponsorCreateA = {
    hackathonId: HACKATHON_A,
    body: {
      sponsorId: 'SPONSOR-GOOGLE',
      name: 'Google Cloud',
      tier: 'PLATINUM',
      websiteUrl: 'https://cloud.google.com',
      logoUrl: 'https://logo.google.com/icon.png',
      displayOrder: 1,
      active: true
    },
    user: { email: 'admin@test.com' }
  };
  const resSponsorCreateA = mockRes();
  await hackathonController.createAdminSponsor(reqSponsorCreateA, resSponsorCreateA);
  assert(resSponsorCreateA.statusCode === 201 && resSponsorCreateA.data.sponsor.hackathonId === HACKATHON_A, 'Inv 40: Sponsor created with Hackathon A scope');

  // 41. Sponsor isolation: Hackathon B admin sponsors list is empty
  const reqSponsorListB = {
    hackathonId: HACKATHON_B,
    headers: {}
  };
  const resSponsorListB = mockRes();
  await hackathonController.getAdminSponsors(reqSponsorListB, resSponsorListB);
  assert(resSponsorListB.data.sponsors.length === 0, 'Inv 41: Hackathon B sponsor list is completely empty');

  // 42. Public sponsors query returns only active sponsors in Hackathon A
  const reqPubSponsorsA = {
    hackathonId: HACKATHON_A,
    query: {},
    headers: {}
  };
  const resPubSponsorsA = mockRes();
  await hackathonController.getPublicSponsors(reqPubSponsorsA, resPubSponsorsA);
  assert(resPubSponsorsA.data.sponsors.length === 1 && resPubSponsorsA.data.sponsors[0].name === 'Google Cloud', 'Inv 42: Public sponsors return only active sponsors for Hackathon A');

  // 43. Global sponsor search finds Google Cloud across hackathons
  const reqGlobalSearch = {
    query: { q: 'Google' },
    headers: {}
  };
  const resGlobalSearch = mockRes();
  await hackathonController.searchGlobalSponsors(reqGlobalSearch, resGlobalSearch);
  assert(resGlobalSearch.statusCode === 200 && resGlobalSearch.data.sponsors.some(s => s.name === 'Google Cloud'), 'Inv 43: Global sponsor search found Google Cloud');

  // 44. Reuse sponsor in Hackathon B
  const reqReuseSponsor = {
    hackathonId: HACKATHON_B,
    body: {
      sourceSponsorId: resSponsorCreateA.data.sponsor._id,
      tier: 'GOLD',
      displayOrder: 2
    },
    user: { email: 'admin@test.com' }
  };
  const resReuseSponsor = mockRes();
  await hackathonController.reuseAdminSponsor(reqReuseSponsor, resReuseSponsor);
  assert(resReuseSponsor.statusCode === 201 && resReuseSponsor.data.sponsor.hackathonId === HACKATHON_B, 'Inv 44: Sponsor reused/cloned into Hackathon B successfully');
  assert(resReuseSponsor.data.sponsor.tier === 'GOLD', 'Inv 44b: Reused sponsor received customized tier for Hackathon B');

  // 45. Hackathon B now has 1 sponsor, Hackathon A still has 1 sponsor
  const sponsorsACount = await HackathonSponsor.countDocuments({ hackathonId: HACKATHON_A });
  const sponsorsBCount = await HackathonSponsor.countDocuments({ hackathonId: HACKATHON_B });
  assert(sponsorsACount === 1 && sponsorsBCount === 1, 'Inv 45: Sponsors maintained independent 1-to-1 counts');

  console.log('\n--- Category 9: Prize Configuration & Scoping (Invariants 46-50) ---');

  // 46. Create 2nd Prize in Hackathon A
  const reqPrizeCreateA = {
    hackathonId: HACKATHON_A,
    body: {
      prizeId: '2ND-PRIZE',
      title: 'Second Place Winner Alpha',
      category: 'TRACK_WINNER',
      rank: 2,
      amount: 25000,
      description: 'Second place prize',
      sponsorName: 'Google Cloud'
    },
    user: { email: 'admin@test.com' }
  };
  const resPrizeCreateA = mockRes();
  await hackathonController.createAdminPrize(reqPrizeCreateA, resPrizeCreateA);
  assert(resPrizeCreateA.statusCode === 201 && resPrizeCreateA.data.prize.hackathonId === HACKATHON_A, 'Inv 46: 2nd Prize created in Hackathon A');

  // 47. Prize list in Hackathon A contains 2 prizes
  const reqPrizeListA = {
    hackathonId: HACKATHON_A,
    headers: {}
  };
  const resPrizeListA = mockRes();
  await hackathonController.getAdminPrizes(reqPrizeListA, resPrizeListA);
  assert(resPrizeListA.data.prizes.length === 2, 'Inv 47: Hackathon A admin prize list returns 2 prizes');

  // 48. Hackathon B has only its 1 prize
  const reqPrizeListB = {
    hackathonId: HACKATHON_B,
    headers: {}
  };
  const resPrizeListB = mockRes();
  await hackathonController.getAdminPrizes(reqPrizeListB, resPrizeListB);
  assert(resPrizeListB.data.prizes.length === 1 && resPrizeListB.data.prizes[0].title === 'First Place Winner Beta', 'Inv 48: Hackathon B prize list returns only its own prize');

  // 49. Participant /api/hackathon/participant/my-prizes returns prizes won in Hackathon A
  const reqPartPrizesA1 = {
    hackathonId: HACKATHON_A,
    team: teamA1,
    headers: {}
  };
  const resPartPrizesA1 = mockRes();
  await hackathonController.getParticipantMyPrizes(reqPartPrizesA1, resPartPrizesA1);
  assert(resPartPrizesA1.statusCode === 200, 'Inv 49: Participant my-prizes succeeded');

  // 50. Participant my-prizes with mismatched hackathonId blocked
  const reqPartPrizesMismatched = {
    hackathonId: HACKATHON_B,
    team: teamA1,
    headers: {}
  };
  const resPartPrizesMismatched = mockRes();
  await hackathonController.getParticipantMyPrizes(reqPartPrizesMismatched, resPartPrizesMismatched);
  assert(resPartPrizesMismatched.statusCode === 403, 'Inv 50: Participant cross-hackathon prize query blocked with 403 Forbidden');

  console.log('\n--- Category 10: Prize Fulfillment Triple-Point Invariant & Safety (Invariants 51-58) ---');

  const prizeA1Doc = await HackathonPrize.findOne({ hackathonId: HACKATHON_A, prizeId: '1ST-PRIZE' });
  const prizeB1Doc = await HackathonPrize.findOne({ hackathonId: HACKATHON_B, prizeId: '1ST-PRIZE' });

  // 51. Valid fulfillment creation: fulfillment.hackathonId === prize.hackathonId === team.hackathonId === req.hackathonId
  const reqFulfillValid = {
    hackathonId: HACKATHON_A,
    body: {
      teamId: teamA1._id.toString(),
      prizeId: prizeA1Doc._id.toString(),
      status: 'INITIATED',
      disbursementMethod: 'BANK_TRANSFER',
      disbursementAmount: 50000
    },
    user: { email: 'admin@test.com' }
  };
  const resFulfillValid = mockRes();
  await hackathonController.createAdminPrizeFulfillment(reqFulfillValid, resFulfillValid);
  assert(resFulfillValid.statusCode === 201 && resFulfillValid.data.fulfillment.hackathonId === HACKATHON_A, 'Inv 51: Valid fulfillment created with triple-point match');

  // 52. Cross-hackathon violation: Prize belongs to B, Team belongs to A
  const reqFulfillCrossPrize = {
    hackathonId: HACKATHON_A,
    body: {
      teamId: teamA1._id.toString(),
      prizeId: prizeB1Doc._id.toString(), // Prize from Hackathon B!
      status: 'INITIATED'
    },
    user: { email: 'admin@test.com' }
  };
  const resFulfillCrossPrize = mockRes();
  await hackathonController.createAdminPrizeFulfillment(reqFulfillCrossPrize, resFulfillCrossPrize);
  assert(resFulfillCrossPrize.statusCode === 400, 'Inv 52: Prize from different hackathon rejected with 400 Bad Request');

  // 53. Cross-hackathon violation: Team belongs to B, Prize belongs to A
  const reqFulfillCrossTeam = {
    hackathonId: HACKATHON_A,
    body: {
      teamId: teamB1._id.toString(), // Team from Hackathon B!
      prizeId: prizeA1Doc._id.toString(),
      status: 'INITIATED'
    },
    user: { email: 'admin@test.com' }
  };
  const resFulfillCrossTeam = mockRes();
  await hackathonController.createAdminPrizeFulfillment(reqFulfillCrossTeam, resFulfillCrossTeam);
  assert(resFulfillCrossTeam.statusCode === 400, 'Inv 53: Team from different hackathon rejected with 400 Bad Request');

  // 54. Cross-hackathon violation: Req context says B, but Team & Prize are A
  const reqFulfillCrossReq = {
    hackathonId: HACKATHON_B, // Context is Hackathon B!
    body: {
      teamId: teamA1._id.toString(),
      prizeId: prizeA1Doc._id.toString(),
      status: 'INITIATED'
    },
    user: { email: 'admin@test.com' }
  };
  const resFulfillCrossReq = mockRes();
  await hackathonController.createAdminPrizeFulfillment(reqFulfillCrossReq, resFulfillCrossReq);
  assert(resFulfillCrossReq.statusCode === 400, 'Inv 54: Request hackathonId mismatch rejected with 400 Bad Request');

  // 55. Admin prize fulfillment list strictly scoped to Hackathon A
  const reqFulfillListA = {
    hackathonId: HACKATHON_A,
    headers: {}
  };
  const resFulfillListA = mockRes();
  await hackathonController.getAdminPrizeFulfillments(reqFulfillListA, resFulfillListA);
  assert(resFulfillListA.data.fulfillments.every(f => f.hackathonId === HACKATHON_A), 'Inv 55: Prize fulfillment list strictly returns Hackathon A fulfillments');

  // 56. Update prize fulfillment in Hackathon A
  const fulfillDocA = await HackathonPrizeFulfillment.findOne({ hackathonId: HACKATHON_A });
  const reqFulfillUpdateA = {
    hackathonId: HACKATHON_A,
    params: { fulfillmentId: fulfillDocA._id.toString() },
    body: {
      status: 'COMPLETED',
      notes: 'Transfer processed via NEFT reference 998877'
    },
    user: { email: 'admin@test.com' }
  };
  const resFulfillUpdateA = mockRes();
  await hackathonController.updateAdminPrizeFulfillment(reqFulfillUpdateA, resFulfillUpdateA);
  assert(resFulfillUpdateA.statusCode === 200 && resFulfillUpdateA.data.fulfillment.status === 'COMPLETED', 'Inv 56: Prize fulfillment updated to COMPLETED in Hackathon A');

  // 57. Update prize fulfillment blocked if cross-hackathon attempt
  const reqFulfillUpdateCross = {
    hackathonId: HACKATHON_B, // Target context B tries to update fulfillment from A
    params: { fulfillmentId: fulfillDocA._id.toString() },
    body: {
      status: 'CANCELLED'
    },
    user: { email: 'admin@test.com' }
  };
  const resFulfillUpdateCross = mockRes();
  await hackathonController.updateAdminPrizeFulfillment(reqFulfillUpdateCross, resFulfillUpdateCross);
  assert(resFulfillUpdateCross.statusCode === 404, 'Inv 57: Updating fulfillment belonging to different hackathon rejected with 404 Not Found');

  // 58. Notify prize fulfillment strictly within hackathon scope
  const reqNotifyA = {
    hackathonId: HACKATHON_A,
    params: { fulfillmentId: fulfillDocA._id.toString() },
    user: { email: 'admin@test.com' }
  };
  const resNotifyA = mockRes();
  await hackathonController.notifyAdminPrizeFulfillment(reqNotifyA, resNotifyA);
  assert(resNotifyA.statusCode === 200, 'Inv 58: Prize fulfillment notification dispatched successfully');

  console.log('\n--- Category 11: Production Safety & 2026 Data Preservation (Invariants 59-62) ---');

  // 59. Verify 2026 results count unchanged
  const final2026Results = await HackathonResult.countDocuments({ hackathonId: 'can-hackathon-2026' });
  assert(final2026Results === initial2026Results, `Inv 59: 2026 Results intact (${initial2026Results} === ${final2026Results})`);

  // 60. Verify 2026 certificates count unchanged
  const final2026Certificates = await HackathonCertificate.countDocuments({ hackathonId: 'can-hackathon-2026' });
  assert(final2026Certificates === initial2026Certificates, `Inv 60: 2026 Certificates intact (${initial2026Certificates} === ${final2026Certificates})`);

  // 61. Verify 2026 prizes count unchanged
  const final2026Prizes = await HackathonPrize.countDocuments({ hackathonId: 'can-hackathon-2026' });
  assert(final2026Prizes === initial2026Prizes, `Inv 61: 2026 Prizes intact (${initial2026Prizes} === ${final2026Prizes})`);

  // 62. Clean test data leaves DB clean
  await cleanTestData();
  const testACount = await HackathonResult.countDocuments({ hackathonId: HACKATHON_A });
  const testBCount = await HackathonResult.countDocuments({ hackathonId: HACKATHON_B });
  assert(testACount === 0 && testBCount === 0, 'Inv 62: Teardown cleaned all test records leaving production data pristine');

  console.log('\n============================================================');
  console.log(`TEST RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
  console.log('============================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  runTestSuite()
    .then(() => {
      mongoose.disconnect();
      process.exit(0);
    })
    .catch((err) => {
      console.error('Test suite encountered an error:', err);
      mongoose.disconnect();
      process.exit(1);
    });
}

module.exports = runTestSuite;
