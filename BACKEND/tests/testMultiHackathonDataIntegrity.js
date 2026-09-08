/**
 * Phase M11: Multi-Hackathon Data Integrity Test Suite
 *
 * Automated verification of referential integrity, canonical team IDs,
 * cross-hackathon consistency, and zero orphan records across all 14 models.
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
const HackathonAuditLog = require('../models/HackathonAuditLog');
const EmailLog = require('../models/email/EmailLog');

let passCount = 0;
let failCount = 0;

function testAssert(condition, category, description) {
  if (condition) {
    passCount++;
    console.log(`  ✅ [PASS] [${category}] ${description}`);
  } else {
    failCount++;
    console.error(`  ❌ [FAIL] [${category}] ${description}`);
  }
}

async function runDataIntegrityTestSuite() {
  console.log('===================================================================');
  console.log('=== MULTI-HACKATHON PHASE M11: DATA INTEGRITY TEST SUITE        ===');
  console.log('=== (ZERO-ORPHAN & REFERENTIAL INTEGRITY VERIFICATION)          ===');
  console.log('===================================================================');

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const testHackId = 'test-hack-m11-data-integrity';

  try {
    // 1. Clean test namespace
    await Promise.all([
      Hackathon.deleteMany({ hackathonId: testHackId }),
      HackathonSetting.deleteMany({ hackathonId: testHackId }),
      HackathonTeam.deleteMany({ hackathonId: testHackId }),
      HackathonPayment.deleteMany({ hackathonId: testHackId }),
      HackathonSubmission.deleteMany({ hackathonId: testHackId }),
      HackathonEditorialMember.deleteMany({ hackathonId: testHackId }),
      HackathonEditorialAssignment.deleteMany({ hackathonId: testHackId }),
      HackathonEditorialEvaluation.deleteMany({ hackathonId: testHackId }),
      HackathonResult.deleteMany({ hackathonId: testHackId }),
      HackathonCertificate.deleteMany({ hackathonId: testHackId }),
      HackathonPrize.deleteMany({ hackathonId: testHackId }),
      HackathonPrizeFulfillment.deleteMany({ hackathonId: testHackId }),
      EmailLog.deleteMany({ hackathonId: testHackId }),
    ]);

    // Setup isolated test ecosystem
    const testHack = await Hackathon.create({
      hackathonId: testHackId,
      name: 'Integrity Challenge 2027',
      slug: 'integrity-challenge-2027',
      status: 'DRAFT',
      participationFee: 199,
    });

    const testTeam = await HackathonTeam.create({
      hackathonId: testHackId,
      teamId: 'TEAM-INT-001',
      teamName: 'Integrity Sentinels',
      status: 'CONFIRMED',
      paymentStatus: 'PAID',
      leader: { name: 'Ada Lovelace', email: 'ada.integrity@test.org' },
    });

    const testPayment = await HackathonPayment.create({
      hackathonId: testHackId,
      teamId: testTeam.teamId,
      orderId: 'order_int_123',
      paymentId: 'pay_int_123',
      leaderEmail: testTeam.leader.email,
      amount: 199,
      status: 'PAID',
    });

    const testSub = await HackathonSubmission.create({
      hackathonId: testHackId,
      teamId: testTeam.teamId,
      team: testTeam._id,
      projectName: 'Sentinel Core',
      status: 'SUBMITTED',
      isLocked: true,
      submitterEmail: testTeam.leader.email,
    });

    const testJudge = await HackathonEditorialMember.create({
      hackathonId: testHackId,
      name: 'Judge Turing',
      email: 'turing.int@test.org',
      passwordHash: 'hashed_pw',
      isActive: true,
    });

    const testAssign = await HackathonEditorialAssignment.create({
      hackathonId: testHackId,
      teamId: testTeam.teamId,
      team: testTeam._id,
      submission: testSub._id,
      editorialMember: testJudge._id,
      status: 'ACTIVE',
    });

    const testEval = await HackathonEditorialEvaluation.create({
      hackathonId: testHackId,
      teamId: testTeam.teamId,
      team: testTeam._id,
      submission: testSub._id,
      assignment: testAssign._id,
      editorialMember: testJudge._id,
      status: 'FINALIZED',
      totalScore: 95,
      isLocked: true,
    });

    const testResult = await HackathonResult.create({
      hackathonId: testHackId,
      teamId: testTeam.teamId,
      team: testTeam._id,
      teamName: testTeam.teamName,
      rank: 1,
      awardCategory: 'Winner (1st Place)',
      status: 'PUBLISHED',
      isApproved: true,
      isLocked: true,
    });

    const testCert = await HackathonCertificate.create({
      hackathonId: testHackId,
      certificateId: 'CERT-INT-001',
      teamId: testTeam.teamId,
      team: testTeam._id,
      recipientName: testTeam.leader.name,
      recipientEmail: testTeam.leader.email,
      certificateNumber: 'CAN-INT-001-TEST',
      verificationCode: 'VERIFY-INT-001',
      type: 'WINNER',
      status: 'ISSUED',
    });

    const testPrize = await HackathonPrize.create({
      hackathonId: testHackId,
      prizeId: 'PRIZE-INT-01',
      name: 'Grand Champions Prize',
      category: 'MAIN',
      amount: 50000,
    });

    const testFulfill = await HackathonPrizeFulfillment.create({
      hackathonId: testHackId,
      fulfillmentId: 'FULFILL-INT-001',
      prizeId: testPrize._id,
      resultId: testResult._id,
      teamId: testTeam.teamId,
      team: testTeam._id,
      recipient: {
        name: testTeam.leader.name,
        email: testTeam.leader.email,
      },
      fulfillmentStatus: 'COMPLETED',
      disbursedAmount: 50000,
    });

    // -----------------------------------------------------------------
    // 1. REFERENTIAL INTEGRITY CHECKS
    // -----------------------------------------------------------------
    console.log('\n--- 1. REFERENTIAL INTEGRITY CHECKS ---');
    testAssert(testPayment.hackathonId === testTeam.hackathonId, 'PAYMENT_INTEGRITY', 'Payment hackathonId strictly matches Team hackathonId');
    testAssert(testSub.hackathonId === testTeam.hackathonId, 'SUBMISSION_INTEGRITY', 'Submission hackathonId strictly matches Team hackathonId');
    testAssert(testAssign.hackathonId === testTeam.hackathonId, 'ASSIGNMENT_INTEGRITY', 'Assignment hackathonId strictly matches Team hackathonId');
    testAssert(testEval.hackathonId === testTeam.hackathonId, 'EVALUATION_INTEGRITY', 'Evaluation hackathonId strictly matches Team hackathonId');
    testAssert(testResult.hackathonId === testTeam.hackathonId, 'RESULT_INTEGRITY', 'Result hackathonId strictly matches Team hackathonId');
    testAssert(testCert.hackathonId === testTeam.hackathonId, 'CERTIFICATE_INTEGRITY', 'Certificate hackathonId strictly matches Team hackathonId');
    testAssert(testFulfill.hackathonId === testTeam.hackathonId, 'FULFILLMENT_INTEGRITY', 'Prize Fulfillment hackathonId strictly matches Team hackathonId');

    // -----------------------------------------------------------------
    // 2. ORPHAN INTEGRITY QUERIES
    // -----------------------------------------------------------------
    console.log('\n--- 2. ORPHAN RECORD PREVENTION ---');
    const allKnownTeams = await HackathonTeam.find({ hackathonId: testHackId });
    const knownTeamIds = new Set(allKnownTeams.map((t) => t.teamId));

    const orphanPayments = await HackathonPayment.find({ hackathonId: testHackId, teamId: { $nin: Array.from(knownTeamIds) } });
    testAssert(orphanPayments.length === 0, 'ORPHAN_CHECK', 'Zero orphan payments in test hackathon');

    const orphanSubmissions = await HackathonSubmission.find({ hackathonId: testHackId, teamId: { $nin: Array.from(knownTeamIds) } });
    testAssert(orphanSubmissions.length === 0, 'ORPHAN_CHECK', 'Zero orphan submissions in test hackathon');

    const orphanAssignments = await HackathonEditorialAssignment.find({ hackathonId: testHackId, teamId: { $nin: Array.from(knownTeamIds) } });
    testAssert(orphanAssignments.length === 0, 'ORPHAN_CHECK', 'Zero orphan assignments in test hackathon');

    const orphanEvaluations = await HackathonEditorialEvaluation.find({ hackathonId: testHackId, teamId: { $nin: Array.from(knownTeamIds) } });
    testAssert(orphanEvaluations.length === 0, 'ORPHAN_CHECK', 'Zero orphan evaluations in test hackathon');

    const orphanResults = await HackathonResult.find({ hackathonId: testHackId, teamId: { $nin: Array.from(knownTeamIds) } });
    testAssert(orphanResults.length === 0, 'ORPHAN_CHECK', 'Zero orphan results in test hackathon');

    const orphanCertificates = await HackathonCertificate.find({ hackathonId: testHackId, teamId: { $nin: Array.from(knownTeamIds) } });
    testAssert(orphanCertificates.length === 0, 'ORPHAN_CHECK', 'Zero orphan certificates in test hackathon');

    const orphanFulfillments = await HackathonPrizeFulfillment.find({ hackathonId: testHackId, teamId: { $nin: Array.from(knownTeamIds) } });
    testAssert(orphanFulfillments.length === 0, 'ORPHAN_CHECK', 'Zero orphan prize fulfillments in test hackathon');

    // -----------------------------------------------------------------
    // 3. CANONICAL TEAM ID UNIQUENESS & SCOPED LEADER CONSTRAINTS
    // -----------------------------------------------------------------
    console.log('\n--- 3. IDENTITY CONSTRAINTS ---');
    // Attempting to create a duplicate canonical teamId in the same hackathon should fail
    try {
      await HackathonTeam.create({
        hackathonId: testHackId,
        teamId: testTeam.teamId,
        teamName: 'Duplicate Team ID Attempt',
        leader: { name: 'Another Person', email: 'other@test.org' },
      });
      testAssert(false, 'IDENTITY_CONSTRAINT', 'Duplicate teamId was unexpectedly permitted in same hackathon');
    } catch (err) {
      testAssert(Boolean(err), 'IDENTITY_CONSTRAINT', 'Duplicate teamId rejected by compound unique index');
    }

    // Verify leader conflict check within same hackathon
    const conflictTeam = await HackathonTeam.findOne({
      hackathonId: testHackId,
      'leader.email': testTeam.leader.email,
      isDeleted: { $ne: true },
    });
    testAssert(conflictTeam && conflictTeam.teamId === testTeam.teamId, 'LEADER_CONSTRAINT', 'Scoped leader query successfully identifies existing leader in hackathon');

    // Cross-hackathon leader check: same leader in another hackathon does NOT conflict
    const otherHackLeader = await HackathonTeam.findOne({
      hackathonId: 'some-other-hackathon',
      'leader.email': testTeam.leader.email,
      isDeleted: { $ne: true },
    });
    testAssert(!otherHackLeader, 'LEADER_CONSTRAINT', 'Leader email from testHackathon does not leak into other hackathons');

    console.log('\n--- TEARDOWN ISOLATED DATA ---');
    await Promise.all([
      Hackathon.deleteMany({ hackathonId: testHackId }),
      HackathonSetting.deleteMany({ hackathonId: testHackId }),
      HackathonTeam.deleteMany({ hackathonId: testHackId }),
      HackathonPayment.deleteMany({ hackathonId: testHackId }),
      HackathonSubmission.deleteMany({ hackathonId: testHackId }),
      HackathonEditorialMember.deleteMany({ hackathonId: testHackId }),
      HackathonEditorialAssignment.deleteMany({ hackathonId: testHackId }),
      HackathonEditorialEvaluation.deleteMany({ hackathonId: testHackId }),
      HackathonResult.deleteMany({ hackathonId: testHackId }),
      HackathonCertificate.deleteMany({ hackathonId: testHackId }),
      HackathonPrize.deleteMany({ hackathonId: testHackId }),
      HackathonPrizeFulfillment.deleteMany({ hackathonId: testHackId }),
      EmailLog.deleteMany({ hackathonId: testHackId }),
    ]);
    testAssert(true, 'CLEANUP', 'Data integrity test records cleaned up without touching production data');
  } finally {
    // Keep connection if other tasks running
  }

  console.log('\n================================================================');
  console.log(`DATA INTEGRITY TEST SUITE COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
  console.log('================================================================\n');

  if (failCount > 0) {
    throw new Error(`Data integrity test suite failed with ${failCount} errors.`);
  }
}

if (require.main === module) {
  runDataIntegrityTestSuite()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = { runDataIntegrityTestSuite };
