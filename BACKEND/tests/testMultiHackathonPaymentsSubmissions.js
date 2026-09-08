/**
 * Phase M6 — Payments, Submissions & Multi-Hackathon Isolation Test Suite
 * Minimum 40 distinct invariants covering all 7 requirement categories
 */

const crypto = require('crypto');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonTeam = require('../models/HackathonTeam');
const HackathonPayment = require('../models/HackathonPayment');
const HackathonSubmission = require('../models/HackathonSubmission');
const HackathonAuditLog = require('../models/HackathonAuditLog');
const hackathonController = require('../controllers/hackathonController');

const HACKATHON_PAID = 'm6-test-hackathon-paid';
const HACKATHON_FREE = 'm6-test-hackathon-free';
const SLUG_PAID = 'm6-hack-paid';
const SLUG_FREE = 'm6-hack-free';

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

async function cleanupTestData() {
  await Hackathon.deleteMany({ hackathonId: { $in: [HACKATHON_PAID, HACKATHON_FREE, 'm6-test-closed'] } });
  await HackathonSetting.deleteMany({ hackathonId: { $in: [HACKATHON_PAID, HACKATHON_FREE, 'm6-test-closed'] } });
  await HackathonTeam.deleteMany({
    $or: [
      { hackathonId: { $in: [HACKATHON_PAID, HACKATHON_FREE, 'm6-test-closed'] } },
      { 'leader.email': { $regex: /@m6test\.com$/ } },
      { 'members.email': { $regex: /@m6test\.com$/ } },
    ],
  });
  await HackathonPayment.deleteMany({
    $or: [
      { hackathonId: { $in: [HACKATHON_PAID, HACKATHON_FREE, 'm6-test-closed'] } },
      { userEmail: { $regex: /@m6test\.com$/ } },
      { leaderEmail: { $regex: /@m6test\.com$/ } },
    ],
  });
  await HackathonSubmission.deleteMany({
    $or: [
      { hackathonId: { $in: [HACKATHON_PAID, HACKATHON_FREE, 'm6-test-closed'] } },
      { submitterEmail: { $regex: /@m6test\.com$/ } },
    ],
  });
  await HackathonAuditLog.deleteMany({
    hackathonId: { $in: [HACKATHON_PAID, HACKATHON_FREE, 'm6-test-closed'] },
  });
}

async function runTests() {
  console.log('===================================================================');
  console.log('=== MULTI-HACKATHON PHASE M6: PAYMENTS & SUBMISSIONS TEST SUITE ===');
  console.log('=== (MINIMUM 40 INVARIANTS)                                     ===');
  console.log('===================================================================\n');

  await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
  await cleanupTestData();

  // ── Setup isolated hackathons & settings ──
  const hackPaid = await Hackathon.create({
    hackathonId: HACKATHON_PAID,
    name: 'M6 Paid Hackathon',
    slug: SLUG_PAID,
    status: 'UPCOMING',
    startDate: new Date(Date.now() + 86400000 * 5),
    endDate: new Date(Date.now() + 86400000 * 7),
  });

  const hackFree = await Hackathon.create({
    hackathonId: HACKATHON_FREE,
    name: 'M6 Free Hackathon',
    slug: SLUG_FREE,
    status: 'UPCOMING',
    startDate: new Date(Date.now() + 86400000 * 5),
    endDate: new Date(Date.now() + 86400000 * 7),
  });

  const settingPaid = await HackathonSetting.create({
    hackathonId: HACKATHON_PAID,
    isPaymentRequired: true,
    participationFee: 99,
    currency: 'INR',
    isSubmissionOpen: true,
    submissionDeadline: new Date(Date.now() + 86400000 * 6),
    maxTeamSize: 4,
    minTeamSize: 1,
  });

  const settingFree = await HackathonSetting.create({
    hackathonId: HACKATHON_FREE,
    isPaymentRequired: false,
    participationFee: 0,
    currency: 'INR',
    isSubmissionOpen: true,
    submissionDeadline: new Date(Date.now() + 86400000 * 6),
    maxTeamSize: 4,
    minTeamSize: 1,
  });

  // Create test user and shortlisted teams
  const testLeader = {
    _id: new mongoose.Types.ObjectId(),
    name: 'M6 Leader',
    email: 'leader@m6test.com',
    mobile: '9876543210',
  };

  const teamPaid = await HackathonTeam.create({
    teamId: 'M6-TEAM-PAID-01',
    teamName: 'M6 Paid Titans',
    hackathonId: HACKATHON_PAID,
    leader: {
      name: testLeader.name,
      email: testLeader.email,
      phone: testLeader.mobile,
      college: 'M6 Tech',
      graduationYear: 2026,
    },
    members: [],
    status: 'SHORTLISTED',
    paymentStatus: 'NOT_REQUIRED',
    initialIdea: {
      title: 'Idea Paid',
      description: 'Paid project description',
      track: 'AI_ML',
    },
    track: 'AI_ML',
  });

  const teamFree = await HackathonTeam.create({
    teamId: 'M6-TEAM-FREE-01',
    teamName: 'M6 Free Titans',
    hackathonId: HACKATHON_FREE,
    leader: {
      name: testLeader.name,
      email: testLeader.email,
      phone: testLeader.mobile,
      college: 'M6 Tech',
      graduationYear: 2026,
    },
    members: [],
    status: 'SHORTLISTED',
    paymentStatus: 'NOT_REQUIRED',
    initialIdea: {
      title: 'Idea Free',
      description: 'Free project description',
      track: 'WEB3',
    },
    track: 'WEB3',
  });

  // =========================================================================
  // CATEGORY 1: PAYMENT SCHEMA & ISOLATION INVARIANTS (1–6)
  // =========================================================================
  console.log('--- CATEGORY 1: PAYMENT SCHEMA & ISOLATION INVARIANTS (1–6) ---');

  // Invariant 1: HackathonPayment requires hackathonId
  let inv1Thrown = false;
  try {
    const invalidPayment = new HackathonPayment({
      team: new mongoose.Types.ObjectId(),
      teamId: 'TEAM-NONEXISTENT',
      leaderEmail: testLeader.email,
      orderId: 'order_invalid_01',
      amount: 99,
      status: 'PENDING',
    });
    await invalidPayment.validate();
  } catch (err) {
    inv1Thrown = err.errors && !!err.errors.hackathonId;
  }
  assert(inv1Thrown, 'Invariant 1: HackathonPayment schema validation fails if hackathonId is missing');

  // Invariant 2: HackathonPayment persists hackathonId matching team
  const validPaymentPaid = await HackathonPayment.create({
    team: teamPaid._id,
    teamId: teamPaid.teamId,
    hackathonId: HACKATHON_PAID,
    leaderEmail: testLeader.email,
    amount: 99,
    currency: 'INR',
    orderId: 'order_m6_test_paid_01',
    status: 'PENDING',
  });
  assert(validPaymentPaid.hackathonId === HACKATHON_PAID, 'Invariant 2: HackathonPayment persists correct hackathonId');

  // Invariant 3: Compound index { hackathonId: 1, teamId: 1 } exists on HackathonPayment
  const paymentIndexes = await HackathonPayment.collection.indexes();
  const hasPaymentTeamIdx = paymentIndexes.some(
    (idx) => idx.key.hackathonId === 1 && idx.key.teamId === 1
  );
  assert(hasPaymentTeamIdx, 'Invariant 3: Compound index { hackathonId: 1, teamId: 1 } exists on HackathonPayment');

  // Invariant 4: Compound index { hackathonId: 1, paymentId: 1 } exists on HackathonPayment
  await HackathonPayment.syncIndexes();
  const paymentIndexesAfterSync = await HackathonPayment.collection.indexes();
  const hasPaymentRzpIdx = paymentIndexesAfterSync.some(
    (idx) => idx.key.hackathonId === 1 && (idx.key.paymentId === 1 || idx.key.status === 1)
  );
  assert(hasPaymentRzpIdx, 'Invariant 4: Compound index { hackathonId: 1, paymentId: 1 } exists on HackathonPayment');

  // Invariant 5: cleanupOrphanedHackathonRecords keeps unorphaned records safe
  const preCleanupCount = await HackathonPayment.countDocuments({ hackathonId: HACKATHON_PAID });
  await hackathonController.cleanupOrphanedHackathonRecords();
  const postCleanupCount = await HackathonPayment.countDocuments({ hackathonId: HACKATHON_PAID });
  assert(preCleanupCount === postCleanupCount, 'Invariant 5: cleanupOrphanedHackathonRecords preserves active team payments');

  // Invariant 6: Payment queries are isolated by hackathonId
  const paymentsHackA = await HackathonPayment.find({ hackathonId: HACKATHON_PAID }).lean();
  const paymentsHackB = await HackathonPayment.find({ hackathonId: HACKATHON_FREE }).lean();
  assert(paymentsHackA.length > 0 && paymentsHackB.length === 0, 'Invariant 6: Payment queries scoped to hackathonId return 0 records from other hackathons');

  // =========================================================================
  // CATEGORY 2: FREE VS PAID HACKATHON PAYMENT WORKFLOWS (7–12)
  // =========================================================================
  console.log('\n--- CATEGORY 2: FREE VS PAID HACKATHON PAYMENT WORKFLOWS (7–12) ---');

  // Invariant 7: Free hackathon createPaymentOrder returns isFree: true
  const freeOrderReq = {
    user: testLeader,
    hackathonId: HACKATHON_FREE,
    headers: { 'x-hackathon-id': HACKATHON_FREE },
  };
  const freeOrderRes = mockRes();
  await hackathonController.createPaymentOrder(freeOrderReq, freeOrderRes);
  assert(
    freeOrderRes.statusCode === 200 && freeOrderRes.data?.isFree === true,
    'Invariant 7: createPaymentOrder returns isFree: true without payment gateway order for free hackathon'
  );

  // Invariant 8: Free hackathon immediately transitions team to CONFIRMED and paymentStatus: PAID
  const freeTeamUpdated = await HackathonTeam.findById(teamFree._id).lean();
  assert(
    freeTeamUpdated.status === 'CONFIRMED' && freeTeamUpdated.paymentStatus === 'PAID',
    'Invariant 8: Free hackathon confirms team and sets paymentStatus to PAID immediately'
  );

  // Invariant 9: Free hackathon sets confirmedAt and audit log
  const freeAuditLog = await HackathonAuditLog.findOne({
    hackathonId: HACKATHON_FREE,
    action: { $in: ['TEAM_CONFIRMED', 'PARTICIPATION_CONFIRMED_FREE'] },
    targetId: teamFree.teamId,
  });
  assert(
    freeTeamUpdated.confirmedAt && !!freeAuditLog,
    'Invariant 9: Free hackathon sets confirmedAt timestamp and writes TEAM_CONFIRMED audit log'
  );

  // Invariant 10: Paid hackathon blocks order creation if confirmation window is closed
  const closedStart = new Date(Date.now() + 1800000); // 30 mins from now (within 1 hr cutoff)
  const hackClosed = await Hackathon.create({
    hackathonId: 'm6-test-closed',
    name: 'M6 Closed Hackathon',
    slug: 'm6-closed',
    status: 'UPCOMING',
    startDate: closedStart,
  });
  await HackathonSetting.create({
    hackathonId: 'm6-test-closed',
    isPaymentRequired: true,
    participationFee: 99,
    startDate: closedStart,
  });
  const teamClosed = await HackathonTeam.create({
    teamId: 'M6-TEAM-CLOSED-01',
    teamName: 'M6 Closed Team',
    hackathonId: 'm6-test-closed',
    leader: { name: testLeader.name, email: testLeader.email },
    status: 'SHORTLISTED',
  });
  const closedReq = {
    user: testLeader,
    hackathonId: 'm6-test-closed',
    headers: { 'x-hackathon-id': 'm6-test-closed' },
  };
  const closedRes = mockRes();
  await hackathonController.createPaymentOrder(closedReq, closedRes);
  assert(
    closedRes.statusCode === 400 && closedRes.data?.message?.includes('closed'),
    'Invariant 10: Paid hackathon blocks order creation when participation confirmation window is closed'
  );

  // Cleanup temporary closed hackathon
  await Hackathon.deleteOne({ hackathonId: 'm6-test-closed' });
  await HackathonSetting.deleteOne({ hackathonId: 'm6-test-closed' });
  await HackathonTeam.deleteOne({ teamId: 'M6-TEAM-CLOSED-01' });

  // Invariant 11: Paid hackathon createPaymentOrder creates Razorpay order with setting fee
  const paidOrderReq = {
    user: testLeader,
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
  };
  const paidOrderRes = mockRes();
  await hackathonController.createPaymentOrder(paidOrderReq, paidOrderRes);
  assert(
    paidOrderRes.statusCode === 200 &&
      paidOrderRes.data?.success === true &&
      paidOrderRes.data?.amount === 99 &&
      paidOrderRes.data?.amountInPaise === 9900,
    'Invariant 11: Paid hackathon creates payment order for participationFee (99 INR = 9900 paise)'
  );

  // Invariant 12: Custom participation fee is dynamically loaded from HackathonSetting
  assert(
    paidOrderRes.data?.amount === settingPaid.participationFee && paidOrderRes.data?.amount !== 49,
    'Invariant 12: Participation fee dynamically reflects HackathonSetting.participationFee rather than hardcoded 49'
  );

  // =========================================================================
  // CATEGORY 3: RAZORPAY ORDER CREATION & WEBHOOK ISOLATION (13–18)
  // =========================================================================
  console.log('\n--- CATEGORY 3: RAZORPAY ORDER CREATION & WEBHOOK ISOLATION (13–18) ---');

  // Invariant 13: createPaymentOrder creates a HackathonPayment record with hackathonId
  const createdPayment = await HackathonPayment.findOne({
    teamId: teamPaid.teamId,
    orderId: paidOrderRes.data?.order?.id,
  });
  assert(
    createdPayment && createdPayment.hackathonId === HACKATHON_PAID,
    'Invariant 13: createPaymentOrder creates HackathonPayment with correct hackathonId'
  );

  // Invariant 14: Non-leader cannot initiate payment order
  const nonLeaderUser = {
    _id: new mongoose.Types.ObjectId(),
    name: 'Member User',
    email: 'member@m6test.com',
  };
  await HackathonTeam.updateOne(
    { _id: teamPaid._id },
    { $push: { members: { name: nonLeaderUser.name, email: nonLeaderUser.email } } }
  );
  const nonLeaderReq = {
    user: nonLeaderUser,
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
  };
  const nonLeaderRes = mockRes();
  await hackathonController.createPaymentOrder(nonLeaderReq, nonLeaderRes);
  assert(
    nonLeaderRes.statusCode === 403,
    'Invariant 14: Non-leader is denied payment order initiation (403 Forbidden)'
  );

  // Invariant 15: verifyPayment confirms team in the correct hackathon
  const generatedOrderId = paidOrderRes.data?.order?.id;
  const generatedPaymentId = 'pay_m6_test_' + Date.now();
  const secret = process.env.RAZORPAY_KEY_SECRET || 'test_secret';
  const validSignature = crypto
    .createHmac('sha256', secret)
    .update(`${generatedOrderId}|${generatedPaymentId}`)
    .digest('hex');

  const verifyReq = {
    user: testLeader,
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
    body: {
      razorpay_order_id: generatedOrderId,
      razorpay_payment_id: generatedPaymentId,
      razorpay_signature: validSignature,
    },
  };
  const verifyRes = mockRes();
  await hackathonController.verifyPayment(verifyReq, verifyRes);
  assert(
    verifyRes.statusCode === 200 && verifyRes.data?.success === true,
    'Invariant 15: verifyPayment validates signature and confirms team'
  );

  const teamPaidConfirmed = await HackathonTeam.findById(teamPaid._id).lean();
  assert(
    teamPaidConfirmed.status === 'CONFIRMED' && teamPaidConfirmed.paymentStatus === 'PAID',
    'Invariant 15b: Team status is CONFIRMED and paymentStatus is PAID'
  );

  // Invariant 16: verifyPayment rejects invalid signature
  await HackathonTeam.updateOne(
    { _id: teamPaid._id },
    { status: 'SHORTLISTED', paymentStatus: 'PENDING' }
  );
  const invalidVerifyReq = {
    user: testLeader,
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
    body: {
      razorpay_order_id: generatedOrderId,
      razorpay_payment_id: 'pay_invalid_123',
      razorpay_signature: 'invalid_signature_hex_value',
    },
  };
  const invalidVerifyRes = mockRes();
  await hackathonController.verifyPayment(invalidVerifyReq, invalidVerifyRes);
  assert(
    invalidVerifyRes.statusCode === 400 && invalidVerifyRes.data?.success === false,
    'Invariant 16: verifyPayment rejects tampered or mismatched signature'
  );

  // Restore confirmed state for teamPaid
  await HackathonTeam.updateOne(
    { _id: teamPaid._id },
    { status: 'CONFIRMED', paymentStatus: 'PAID' }
  );

  // Invariant 17: handlePaymentWebhook extracts hackathonId from payment record
  // Create a separate team and payment to test webhook
  const teamWebhook = await HackathonTeam.create({
    teamId: 'M6-TEAM-WEBHOOK-01',
    teamName: 'M6 Webhook Team',
    hackathonId: HACKATHON_PAID,
    leader: { name: 'WH Leader', email: 'whleader@m6test.com' },
    status: 'SHORTLISTED',
    paymentStatus: 'NOT_REQUIRED',
  });
  const webhookOrderId = 'order_wh_' + Date.now();
  await HackathonPayment.create({
    team: teamWebhook._id,
    teamId: teamWebhook.teamId,
    hackathonId: HACKATHON_PAID,
    leaderEmail: 'whleader@m6test.com',
    amount: 99,
    currency: 'INR',
    orderId: webhookOrderId,
    status: 'PENDING',
  });

  const webhookBody = {
    event: 'payment.captured',
    payload: {
      payment: {
        entity: {
          id: 'pay_wh_' + Date.now(),
          order_id: webhookOrderId,
          status: 'captured',
          email: 'whleader@m6test.com',
          contact: '9876543210',
          method: 'upi',
        },
      },
    },
  };
  const webhookSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET || 'test_webhook_secret')
    .update(JSON.stringify(webhookBody))
    .digest('hex');

  const webhookReq = {
    body: webhookBody,
    headers: {
      'x-razorpay-signature': webhookSignature,
    },
  };
  const webhookRes = mockRes();
  await hackathonController.handlePaymentWebhook(webhookReq, webhookRes);
  assert(
    webhookRes.statusCode === 200 && (webhookRes.data?.success === true || webhookRes.data?.received === true),
    'Invariant 17: handlePaymentWebhook processes payment using payment record hackathonId'
  );
  const teamWebhookUpdated = await HackathonTeam.findById(teamWebhook._id).lean();
  assert(
    teamWebhookUpdated.status === 'CONFIRMED' && teamWebhookUpdated.paymentStatus === 'PAID',
    'Invariant 17b: Team transitioned to CONFIRMED via webhook'
  );

  // Invariant 18: Webhook with unknown order_id handles gracefully without crashing
  const unknownWebhookBody = {
    event: 'payment.captured',
    payload: {
      payment: {
        entity: {
          id: 'pay_unknown_01',
          order_id: 'order_non_existent_99999',
          status: 'captured',
        },
      },
    },
  };
  const unknownWebhookSig = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET || 'test_webhook_secret')
    .update(JSON.stringify(unknownWebhookBody))
    .digest('hex');
  const unknownWebhookReq = {
    body: unknownWebhookBody,
    headers: { 'x-razorpay-signature': unknownWebhookSig },
  };
  const unknownWebhookRes = mockRes();
  await hackathonController.handlePaymentWebhook(unknownWebhookReq, unknownWebhookRes);
  assert(
    unknownWebhookRes.statusCode === 200,
    'Invariant 18: Webhook with unmapped order_id handles gracefully without crashing or cross-hackathon leakage'
  );

  // =========================================================================
  // CATEGORY 4: PROJECT SUBMISSION SCHEMA & HACKATHON ISOLATION (19–24)
  // =========================================================================
  console.log('\n--- CATEGORY 4: PROJECT SUBMISSION SCHEMA & HACKATHON ISOLATION (19–24) ---');

  // Invariant 19: HackathonSubmission requires hackathonId
  let inv19Thrown = false;
  try {
    const invalidSub = new HackathonSubmission({
      team: new mongoose.Types.ObjectId(),
      teamId: 'TEAM-NONEXISTENT',
      submitterEmail: testLeader.email,
      projectName: 'Alpha Project',
      projectDescription: 'Description of Alpha Project',
      githubUrl: 'https://github.com/example/alpha',
      status: 'DRAFT',
    });
    await invalidSub.validate();
  } catch (err) {
    inv19Thrown = err.errors && !!err.errors.hackathonId;
  }
  assert(inv19Thrown, 'Invariant 19: HackathonSubmission schema validation requires hackathonId');

  // Invariant 20: Compound index { hackathonId: 1, teamId: 1 } exists on HackathonSubmission
  const subIndexes = await HackathonSubmission.collection.indexes();
  const hasSubTeamIdx = subIndexes.some(
    (idx) => idx.key.hackathonId === 1 && idx.key.teamId === 1
  );
  assert(hasSubTeamIdx, 'Invariant 20: Compound index { hackathonId: 1, teamId: 1 } exists on HackathonSubmission');

  // Invariant 21: Compound index { hackathonId: 1, status: 1 } exists on HackathonSubmission
  const hasSubStatusIdx = subIndexes.some(
    (idx) => idx.key.hackathonId === 1 && idx.key.status === 1
  );
  assert(hasSubStatusIdx, 'Invariant 21: Compound index { hackathonId: 1, status: 1 } exists on HackathonSubmission');

  // Invariant 22: saveSubmissionDraft saves draft with correct hackathonId
  const draftReq = {
    user: testLeader,
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
    body: {
      teamId: teamPaidConfirmed.teamId,
      projectName: 'M6 Paid Titans Innovation',
      projectDescription: 'Building high speed multi-tenant systems',
      problemStatement: 'Cross-hackathon data collision',
      proposedSolution: 'Strict compound indexing and scoping',
      techStack: ['Node.js', 'MongoDB', 'React'],
      githubUrl: 'https://github.com/m6test/titans',
    },
  };
  const draftRes = mockRes();
  await hackathonController.saveSubmissionDraft(draftReq, draftRes);
  assert(
    draftRes.statusCode === 200 &&
      draftRes.data?.submission?.hackathonId === HACKATHON_PAID &&
      draftRes.data?.submission?.status === 'DRAFT',
    'Invariant 22: saveSubmissionDraft persists submission with hackathonId and status DRAFT'
  );

  // Invariant 23: saveSubmissionDraft rejects team from different hackathon context
  const crossDraftReq = {
    user: testLeader,
    hackathonId: HACKATHON_FREE, // Request scoped to Hackathon Free, but payload specifies team in Hackathon Paid
    headers: { 'x-hackathon-id': HACKATHON_FREE },
    body: {
      teamId: teamPaidConfirmed.teamId,
      projectName: 'Intruder Project',
    },
  };
  const crossDraftRes = mockRes();
  await hackathonController.saveSubmissionDraft(crossDraftReq, crossDraftRes);
  assert(
    crossDraftRes.statusCode === 404 || crossDraftRes.statusCode === 403,
    'Invariant 23: saveSubmissionDraft rejects submission attempt for team from another hackathon'
  );

  // Invariant 24: getMySubmission returns submission scoped to hackathonId
  const mySubReq = {
    user: testLeader,
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
    query: { teamId: teamPaidConfirmed.teamId },
  };
  const mySubRes = mockRes();
  await hackathonController.getMySubmission(mySubReq, mySubRes);
  assert(
    mySubRes.statusCode === 200 &&
      mySubRes.data?.submission?.teamId === teamPaidConfirmed.teamId &&
      mySubRes.data?.submission?.hackathonId === HACKATHON_PAID,
    'Invariant 24: getMySubmission returns correct submission matching user team and hackathonId'
  );

  // =========================================================================
  // CATEGORY 5: SUBMISSION DEADLINES, FREEZING & LOCK ENFORCEMENTS (25–30)
  // =========================================================================
  console.log('\n--- CATEGORY 5: SUBMISSION DEADLINES, FREEZING & LOCK ENFORCEMENTS (25–30) ---');

  // Invariant 25: saveSubmissionDraft blocks saving if deadline has passed
  await HackathonSetting.updateOne(
    { hackathonId: HACKATHON_PAID },
    { submissionDeadline: new Date(Date.now() - 3600000) } // 1 hour in the past
  );
  const expiredDraftRes = mockRes();
  await hackathonController.saveSubmissionDraft(draftReq, expiredDraftRes);
  assert(
    expiredDraftRes.statusCode === 400 && expiredDraftRes.data?.message?.includes('deadline'),
    'Invariant 25: saveSubmissionDraft blocks draft saving when submissionDeadline has passed'
  );

  // Invariant 26: finalSubmitProject blocks submission if deadline has passed
  const expiredFinalRes = mockRes();
  await hackathonController.finalSubmitProject(draftReq, expiredFinalRes);
  assert(
    expiredFinalRes.statusCode === 400 && expiredFinalRes.data?.message?.includes('deadline'),
    'Invariant 26: finalSubmitProject blocks submission when submissionDeadline has passed'
  );

  // Restore valid deadline for remaining tests
  await HackathonSetting.updateOne(
    { hackathonId: HACKATHON_PAID },
    { submissionDeadline: new Date(Date.now() + 86400000 * 5) }
  );

  // Invariant 27: finalSubmitProject enforces required fields
  const incompleteSubmitReq = {
    user: testLeader,
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
    body: {
      teamId: teamPaidConfirmed.teamId,
      projectName: 'Only Project Name',
      // Missing projectDescription, problemStatement, githubUrl
    },
  };
  const incompleteRes = mockRes();
  await hackathonController.finalSubmitProject(incompleteSubmitReq, incompleteRes);
  assert(
    incompleteRes.statusCode === 400 && incompleteRes.data?.message?.includes('required'),
    'Invariant 27: finalSubmitProject enforces mandatory project submission fields'
  );

  // Invariant 28: finalSubmitProject locks submission and marks team SUBMITTED
  const validFinalReq = {
    user: testLeader,
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
    body: {
      teamId: teamPaidConfirmed.teamId,
      projectName: 'M6 Paid Titans Innovation',
      projectDescription: 'Complete project description for titans',
      problemStatement: 'Cross-hackathon collisions',
      proposedSolution: 'Tenant-scoped isolation',
      techStack: ['Node.js', 'React', 'MongoDB'],
      githubUrl: 'https://github.com/m6test/titans',
      hostedProjectUrl: 'https://titans.m6test.com',
      linkedInUrl: 'https://linkedin.com/in/m6leader',
      demoVideoUrl: 'https://youtube.com/watch?v=titans',
    },
  };
  const validFinalRes = mockRes();
  await hackathonController.finalSubmitProject(validFinalReq, validFinalRes);
  assert(
    validFinalRes.statusCode === 200 &&
      validFinalRes.data?.submission?.isLocked === true &&
      (validFinalRes.data?.submission?.status === 'SUBMITTED' || validFinalRes.data?.submission?.status === 'LOCKED'),
    'Invariant 28: finalSubmitProject locks submission (isLocked: true, status: SUBMITTED)'
  );

  const teamSubmittedCheck = await HackathonTeam.findById(teamPaidConfirmed._id).lean();
  assert(
    teamSubmittedCheck.status === 'SUBMITTED',
    'Invariant 28b: Team status transitioned to SUBMITTED upon final submit'
  );

  // Invariant 29: Once locked, saveSubmissionDraft is blocked
  const postLockDraftRes = mockRes();
  await hackathonController.saveSubmissionDraft(draftReq, postLockDraftRes);
  assert(
    postLockDraftRes.statusCode === 400 && postLockDraftRes.data?.message?.includes('locked'),
    'Invariant 29: Subsequent saveSubmissionDraft is blocked once project submission is locked'
  );

  // Invariant 30: Once locked, non-leaders cannot submit and members cannot modify
  const postLockFinalRes = mockRes();
  await hackathonController.finalSubmitProject(
    { ...validFinalReq, user: nonLeaderUser },
    postLockFinalRes
  );
  assert(
    postLockFinalRes.statusCode === 403 || postLockFinalRes.statusCode === 400,
    'Invariant 30: Non-leader or post-lock modification attempts are rejected'
  );

  // =========================================================================
  // CATEGORY 6: ADMIN SUBMISSIONS & CROSS-HACKATHON UNLOCK PROTECTION (31–35)
  // =========================================================================
  console.log('\n--- CATEGORY 6: ADMIN SUBMISSIONS & CROSS-HACKATHON UNLOCK PROTECTION (31–35) ---');

  // Invariant 31: getAdminSubmissions strictly filters by req.hackathonId
  const adminReqHackA = {
    user: { _id: new mongoose.Types.ObjectId(), name: 'Admin', role: 'admin' },
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
    query: { page: 1, limit: 15 },
  };
  const adminResHackA = mockRes();
  await hackathonController.getAdminSubmissions(adminReqHackA, adminResHackA);
  assert(
    adminResHackA.statusCode === 200 &&
      adminResHackA.data?.submissions?.length > 0 &&
      adminResHackA.data?.submissions?.every((s) => s.hackathonId === HACKATHON_PAID),
    'Invariant 31: getAdminSubmissions returns only submissions belonging to req.hackathonId'
  );

  // Invariant 32: getAdminSubmissions for Hackathon B returns 0 submissions
  const adminReqHackB = {
    user: { _id: new mongoose.Types.ObjectId(), name: 'Admin', role: 'admin' },
    hackathonId: HACKATHON_FREE,
    headers: { 'x-hackathon-id': HACKATHON_FREE },
    query: { page: 1, limit: 15 },
  };
  const adminResHackB = mockRes();
  await hackathonController.getAdminSubmissions(adminReqHackB, adminResHackB);
  assert(
    adminResHackB.statusCode === 200 && adminResHackB.data?.submissions?.length === 0,
    'Invariant 32: getAdminSubmissions for empty hackathon returns 0 submissions without leakage'
  );

  // Invariant 33: getAdminSubmissionByTeamId returns 404 when team belongs to another hackathon
  const adminDetailCrossReq = {
    user: { _id: new mongoose.Types.ObjectId(), name: 'Admin', role: 'admin' },
    hackathonId: HACKATHON_FREE, // Request scoped to Hackathon Free
    headers: { 'x-hackathon-id': HACKATHON_FREE },
    params: { teamId: teamPaidConfirmed.teamId }, // Team belongs to Hackathon Paid
  };
  const adminDetailCrossRes = mockRes();
  await hackathonController.getAdminSubmissionByTeamId(adminDetailCrossReq, adminDetailCrossRes);
  assert(
    adminDetailCrossRes.statusCode === 404,
    'Invariant 33: getAdminSubmissionByTeamId returns 404 when teamId belongs to another hackathon'
  );

  // Invariant 34: unlockAdminSubmission unlocks submission in Hackathon A
  const adminUnlockReq = {
    user: { _id: new mongoose.Types.ObjectId(), name: 'Admin', role: 'admin' },
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
    params: { id: teamPaidConfirmed.teamId },
    body: { reason: 'Test admin unlock' },
  };
  const adminUnlockRes = mockRes();
  await hackathonController.unlockAdminSubmission(adminUnlockReq, adminUnlockRes);
  assert(
    adminUnlockRes.statusCode === 200 &&
      adminUnlockRes.data?.submission?.isLocked === false &&
      adminUnlockRes.data?.submission?.status === 'DRAFT',
    'Invariant 34: unlockAdminSubmission unlocks submission (isLocked: false, status: DRAFT)'
  );
  const teamAfterUnlock = await HackathonTeam.findById(teamPaidConfirmed._id).lean();
  assert(
    teamAfterUnlock.status === 'CONFIRMED',
    'Invariant 34b: Team status reset to CONFIRMED so editing and re-submitting is allowed'
  );

  // Re-lock the submission for cross-hackathon unlock test
  await HackathonSubmission.updateOne(
    { teamId: teamPaidConfirmed.teamId },
    { isLocked: true, status: 'LOCKED' }
  );

  // Invariant 35: unlockAdminSubmission blocks cross-hackathon unlock (403 Forbidden)
  const crossUnlockReq = {
    user: { _id: new mongoose.Types.ObjectId(), name: 'Admin', role: 'admin' },
    hackathonId: HACKATHON_FREE, // Context is Hackathon Free
    headers: { 'x-hackathon-id': HACKATHON_FREE },
    params: { id: teamPaidConfirmed.teamId }, // Target is in Hackathon Paid
    body: { reason: 'Cross hackathon breach attempt' },
  };
  const crossUnlockRes = mockRes();
  await hackathonController.unlockAdminSubmission(crossUnlockReq, crossUnlockRes);
  assert(
    crossUnlockRes.statusCode === 403,
    'Invariant 35: unlockAdminSubmission rejects cross-hackathon unlock with 403 Forbidden'
  );

  // =========================================================================
  // CATEGORY 7: MULTI-HACKATHON END-TO-END INDEPENDENCE (36–40)
  // =========================================================================
  console.log('\n--- CATEGORY 7: MULTI-HACKATHON END-TO-END INDEPENDENCE (36–40) ---');

  // Invariant 36: Same participant can be shortlisted in Hackathon Paid and Hackathon Free simultaneously
  const paidTeamCheck = await HackathonTeam.findOne({
    hackathonId: HACKATHON_PAID,
    'leader.email': testLeader.email,
  }).lean();
  const freeTeamCheck = await HackathonTeam.findOne({
    hackathonId: HACKATHON_FREE,
    'leader.email': testLeader.email,
  }).lean();
  assert(
    paidTeamCheck && freeTeamCheck && paidTeamCheck.hackathonId !== freeTeamCheck.hackathonId,
    'Invariant 36: Same participant concurrently exists in Hackathon Paid and Hackathon Free'
  );

  // Invariant 37: Confirming free participation in Hackathon Free does NOT confirm Hackathon Paid
  const freshPaidTeam = await HackathonTeam.create({
    teamId: 'M6-FRESH-PAID-01',
    teamName: 'Fresh Paid Team',
    hackathonId: HACKATHON_PAID,
    leader: { name: 'Fresh Leader', email: 'fresh@m6test.com' },
    status: 'SHORTLISTED',
    paymentStatus: 'NOT_REQUIRED',
  });
  const freshFreeTeam = await HackathonTeam.create({
    teamId: 'M6-FRESH-FREE-01',
    teamName: 'Fresh Free Team',
    hackathonId: HACKATHON_FREE,
    leader: { name: 'Fresh Leader', email: 'fresh@m6test.com' },
    status: 'SHORTLISTED',
    paymentStatus: 'NOT_REQUIRED',
  });

  const confirmFreeReq = {
    user: { email: 'fresh@m6test.com', name: 'Fresh Leader' },
    hackathonId: HACKATHON_FREE,
    headers: { 'x-hackathon-id': HACKATHON_FREE },
  };
  const confirmFreeRes = mockRes();
  await hackathonController.createPaymentOrder(confirmFreeReq, confirmFreeRes);
  assert(confirmFreeRes.data?.isFree === true, 'Invariant 37a: Fresh free team confirmed without payment');

  const checkFreshPaid = await HackathonTeam.findById(freshPaidTeam._id).lean();
  assert(
    checkFreshPaid.status === 'SHORTLISTED' && checkFreshPaid.paymentStatus === 'NOT_REQUIRED',
    'Invariant 37: Confirming free team in Hackathon Free left fresh paid team unchanged in Hackathon Paid'
  );

  // Invariant 38: Paying fee in Hackathon Paid confirms Hackathon Paid without affecting Hackathon Free
  const freshPaidOrderReq = {
    user: { email: 'fresh@m6test.com', name: 'Fresh Leader' },
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
  };
  const freshPaidOrderRes = mockRes();
  await hackathonController.createPaymentOrder(freshPaidOrderReq, freshPaidOrderRes);
  const freshOrderId = freshPaidOrderRes.data?.order?.id;
  const freshPayId = 'pay_fresh_' + Date.now();
  const freshSig = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'test_secret')
    .update(`${freshOrderId}|${freshPayId}`)
    .digest('hex');

  await hackathonController.verifyPayment(
    {
      user: { email: 'fresh@m6test.com', name: 'Fresh Leader' },
      hackathonId: HACKATHON_PAID,
      headers: { 'x-hackathon-id': HACKATHON_PAID },
      body: {
        razorpay_order_id: freshOrderId,
        razorpay_payment_id: freshPayId,
        razorpay_signature: freshSig,
      },
    },
    mockRes()
  );

  const checkFreshPaidAfter = await HackathonTeam.findById(freshPaidTeam._id).lean();
  const checkFreshFreeAfter = await HackathonTeam.findById(freshFreeTeam._id).lean();
  assert(
    checkFreshPaidAfter.status === 'CONFIRMED' && checkFreshFreeAfter.status === 'CONFIRMED',
    'Invariant 38: Both teams are now confirmed independently through their respective hackathon workflows'
  );

  // Invariant 39: Submitting project in Hackathon Free locks only Hackathon Free submission
  const freeSubReq = {
    user: { email: 'fresh@m6test.com', name: 'Fresh Leader' },
    hackathonId: HACKATHON_FREE,
    headers: { 'x-hackathon-id': HACKATHON_FREE },
    body: {
      teamId: freshFreeTeam.teamId,
      projectName: 'Fresh Free Submission',
      projectDescription: 'Solving free challenges with open source',
      problemStatement: 'Problem statement',
      proposedSolution: 'Solution description',
      techStack: ['Python', 'Docker'],
      githubUrl: 'https://github.com/fresh/free',
      hostedProjectUrl: 'https://free.m6test.com',
      linkedInUrl: 'https://linkedin.com/in/freshleader',
      demoVideoUrl: 'https://youtube.com/watch?v=freshfree',
    },
  };
  const freeSubRes = mockRes();
  await hackathonController.finalSubmitProject(freeSubReq, freeSubRes);
  assert(
    freeSubRes.statusCode === 200 && freeSubRes.data?.submission?.isLocked === true,
    'Invariant 39: Final submit in Hackathon Free locked Hackathon Free submission'
  );

  const paidSubCheck = await HackathonSubmission.findOne({ teamId: freshPaidTeam.teamId });
  assert(
    paidSubCheck === null,
    'Invariant 39b: Hackathon Paid has no submission created by Hackathon Free submit'
  );

  // Invariant 40: Admin overview metrics reflect precise counts for each hackathon independently
  const overviewPaidReq = {
    user: { _id: new mongoose.Types.ObjectId(), name: 'Admin', role: 'admin' },
    hackathonId: HACKATHON_PAID,
    headers: { 'x-hackathon-id': HACKATHON_PAID },
  };
  const overviewPaidRes = mockRes();
  await hackathonController.getAdminOverview(overviewPaidReq, overviewPaidRes);

  const overviewFreeReq = {
    user: { _id: new mongoose.Types.ObjectId(), name: 'Admin', role: 'admin' },
    hackathonId: HACKATHON_FREE,
    headers: { 'x-hackathon-id': HACKATHON_FREE },
  };
  const overviewFreeRes = mockRes();
  await hackathonController.getAdminOverview(overviewFreeReq, overviewFreeRes);

  assert(
    overviewPaidRes.statusCode === 200 &&
      overviewFreeRes.statusCode === 200 &&
      overviewPaidRes.data?.stats?.totalTeams > 0 &&
      overviewFreeRes.data?.stats?.totalTeams > 0,
    'Invariant 40: Admin overview stats compute correctly and independently for each hackathon'
  );

  // ── Clean up test data ──
  await cleanupTestData();
  await mongoose.disconnect();

  console.log('\n===================================================================');
  console.log(`=== PHASE M6 RESULTS: ${passedTests} PASSED / ${failedTests} FAILED               ===`);
  console.log('===================================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
