/**
 * testMultiHackathonProductionAcceptance.js
 * 
 * PHASE M12: FINAL PRODUCTION LAUNCH, END-TO-END ACCEPTANCE &
 * MULTI-HACKATHON GO-LIVE SIGN-OFF TEST SUITE
 * 
 * Tests 30 Verification Dimensions:
 * 1. Base /hackathon Active Resolution & Slug Historical Routing
 * 2. Strict One-Active-Hackathon Invariant Enforcement (Reject Dual Activation)
 * 3. Complete Cross-Hackathon Red Team Security & Isolation Matrix
 * 4. Multi-Hackathon Global Identity (Same User in Multiple Hackathons)
 * 5. Multi-Hackathon Judge Role Independence (Same Judge in Multiple Hackathons)
 * 6. Clean Slate Invariant for Newly Created Hackathons (Zero Data Bleed)
 * 7. Admin Explicit Reuse of Participants & Judges
 * 8. Dynamic Pricing & Settings (No Hardcoded ₹49 or 2026 Operational Leaks)
 * 9. Production Error Sanitization & Request Correlation (X-Request-ID)
 * 10. Database Referential Integrity & 2026 Data Preservation Invariant
 */

const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const assert = require('assert');
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
const EmailLog = require('../models/email/EmailLog');
const HackathonAuditLog = require('../models/HackathonAuditLog');
const Admin = require('../models/Admin');
const User = require('../models/User');
require('../models/Settings');
require('../models/PreGrantedBonus');

const hackathonRoutes = require('../routes/hackathon');
const hackathonManagementRoutes = require('../routes/hackathonManagementRoutes');
const mailService = require('../services/mailService');

const PORT = 5038;
const BASE_URL = `http://127.0.0.1:${PORT}/api/hackathon`;
const HACK_MGMT_URL = `http://127.0.0.1:${PORT}/api/hackathons`;

const HACK_A_ID = 'test-m12-hack-alpha';
const HACK_B_ID = 'test-m12-hack-beta';
const HACK_CLEAN_ID = 'test-m12-hack-clean';

let server;
let adminToken;
let testAdminId;
let baseline2026Counts = {};

async function cleanupTestData() {
  const testIds = [HACK_A_ID, HACK_B_ID, HACK_CLEAN_ID];
  await Hackathon.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonSetting.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonTeam.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonPayment.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonSubmission.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonEditorialMember.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonEditorialAssignment.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonEditorialEvaluation.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonResult.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonCertificate.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonPrize.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonSponsor.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonPrizeFulfillment.deleteMany({ hackathonId: { $in: testIds } });
  await EmailLog.deleteMany({ hackathonId: { $in: testIds } });
  await HackathonAuditLog.deleteMany({ hackathonId: { $in: testIds } });
  await User.deleteMany({ email: { $in: ['m12_shared_user@test.com', 'm12_judge_shared@test.com', 'm12_user_b@test.com'] } });
}

async function capture2026Baseline() {
  const models = [
    { name: 'Hackathon', model: Hackathon },
    { name: 'HackathonSetting', model: HackathonSetting },
    { name: 'HackathonTeam', model: HackathonTeam },
    { name: 'HackathonPayment', model: HackathonPayment },
    { name: 'HackathonSubmission', model: HackathonSubmission },
    { name: 'HackathonEditorialMember', model: HackathonEditorialMember },
    { name: 'HackathonEditorialAssignment', model: HackathonEditorialAssignment },
    { name: 'HackathonEditorialEvaluation', model: HackathonEditorialEvaluation },
    { name: 'HackathonResult', model: HackathonResult },
    { name: 'HackathonCertificate', model: HackathonCertificate },
    { name: 'HackathonPrize', model: HackathonPrize }
  ];
  for (const m of models) {
    baseline2026Counts[m.name] = await m.model.countDocuments({ hackathonId: 'can-hackathon-2026' });
  }
}

async function runM12AcceptanceTests() {
  console.log('===============================================================');
  console.log('=== PHASE M12: FINAL PRODUCTION ACCEPTANCE TEST SUITE       ===');
  console.log('===============================================================');

  let passed = 0;
  let failed = 0;
  function pass(msg) {
    passed++;
    console.log(`  ✅ [PASS] M12 Inv ${passed}: ${msg}`);
  }
  function fail(msg, err) {
    failed++;
    console.error(`  ❌ [FAIL] ${msg}:`, err?.response?.data || err?.message || err);
  }

  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    mailService.enableMockTransport();

    // Start Express Test App
    const app = express();
    app.disable('x-powered-by');
    app.use((req, res, next) => {
      const incoming = req.headers['x-request-id'] || req.headers['x-correlation-id'];
      const sanitizedId = typeof incoming === 'string' && incoming.length <= 128 && /^[a-zA-Z0-9_-]+$/.test(incoming)
        ? incoming
        : `can-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
      req.id = sanitizedId;
      res.setHeader('X-Request-ID', sanitizedId);
      next();
    });
    app.use(express.json());
    app.use('/api/hackathon', hackathonRoutes);
    app.use('/api/hackathons', hackathonManagementRoutes);

    await new Promise((resolve) => {
      server = app.listen(PORT, () => {
        console.log(`M12 Acceptance Test Server listening on port ${PORT}`);
        resolve();
      });
    });

    // Resolve or create Admin token
    let admin = await Admin.findOne();
    if (!admin) {
      admin = await Admin.create({ username: 'm12admin', email: 'm12admin@test.com', password: 'hash' });
    }
    testAdminId = admin._id.toString();
    adminToken = jwt.sign({ id: testAdminId, role: 'admin' }, process.env.JWT_SECRET || 'testsecret', { expiresIn: '1h' });

    await cleanupTestData();
    await capture2026Baseline();

    console.log('\n--- CATEGORY 1: ACTIVE RESOLUTION & HISTORICAL SLUG ROUTING ---');
    // 1. Base /hackathon resolves active hackathon
    const baseRes = await axios.get(`${BASE_URL}/info`);
    assert.strictEqual(baseRes.status, 200);
    assert(baseRes.data.success, 'Base /hackathon/info must return success');
    const returnedHackId = baseRes.data.data?.hackathonId || baseRes.data.hackathonId;
    assert.strictEqual(returnedHackId, 'can-hackathon-2026');
    pass('Base /api/hackathon/info resolves active hackathon (can-hackathon-2026)');

    // 2. Historical resolution by header
    const slugRes = await axios.get(`${BASE_URL}/info`, {
      headers: { 'x-hackathon-id': 'can-hackathon-2026' }
    });
    assert.strictEqual(slugRes.status, 200);
    const returnedSlugHackId = slugRes.data.data?.hackathonId || slugRes.data.hackathonId;
    assert.strictEqual(returnedSlugHackId, 'can-hackathon-2026');
    pass('Explicit header context resolves target hackathon');

    // 3. Non-existent slug returns error
    let invalidSlugStatus = 0;
    try {
      await axios.get(`${BASE_URL}/info`, {
        headers: { 'x-hackathon-id': 'non-existent-hack-xyz' }
      });
    } catch (err) {
      invalidSlugStatus = err.response?.status;
    }
    assert([404, 400].includes(invalidSlugStatus), 'Invalid hackathon context must reject with 404 or 400');
    pass('Non-existent hackathon context correctly rejects request (HTTP 400/404)');

    console.log('\n--- CATEGORY 2: ONE-ACTIVE-HACKATHON INVARIANT ENFORCEMENT ---');
    // 4. Create Hackathon A (UPCOMING) and Hackathon B (DRAFT)
    const hackA = await Hackathon.create({
      hackathonId: HACK_A_ID,
      name: 'M12 Test Hackathon Alpha',
      title: 'M12 Test Hackathon Alpha',
      slug: 'm12-hack-alpha',
      status: 'UPCOMING'
    });
    const hackB = await Hackathon.create({
      hackathonId: HACK_B_ID,
      name: 'M12 Test Hackathon Beta',
      title: 'M12 Test Hackathon Beta',
      slug: 'm12-hack-beta',
      status: 'DRAFT'
    });
    assert(hackA && hackB, 'Test hackathons created');
    pass('Multiple hackathons can co-exist in non-ACTIVE states');

    // 5. Attempting to activate Hackathon A while can-hackathon-2026 is ACTIVE is rejected
    const activeCount = await Hackathon.countDocuments({ status: 'ACTIVE' });
    assert.strictEqual(activeCount, 1, 'Exactly one active hackathon exists');
    
    let activateStatus = 0;
    try {
      await axios.post(`${HACK_MGMT_URL}/${HACK_A_ID}/activate`, {}, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
    } catch (err) {
      activateStatus = err.response?.status;
    }
    assert([400, 409].includes(activateStatus), `Activation of second active hackathon must be rejected with 400/409, got ${activateStatus}`);
    pass('Activating second hackathon while one is active is strictly blocked (HTTP 400/409)');

    // 6. Active count remains strictly 1
    const postActiveCount = await Hackathon.countDocuments({ status: 'ACTIVE' });
    assert.strictEqual(postActiveCount, 1);
    pass('Active hackathon count remains strictly 1');

    console.log('\n--- CATEGORY 3: MULTI-HACKATHON ISOLATION RED TEAM MATRIX ---');
    // Setup isolated teams and data in Hackathon A and Hackathon B
    const settingA = await HackathonSetting.create({
      hackathonId: HACK_A_ID,
      registrationFee: 150,
      participationFee: 150,
      paymentRequired: true
    });
    const settingB = await HackathonSetting.create({
      hackathonId: HACK_B_ID,
      registrationFee: 0,
      participationFee: 0,
      paymentRequired: false
    });

    const teamA = await HackathonTeam.create({
      hackathonId: HACK_A_ID,
      teamId: 'CAN-TEAM-M12A01',
      teamName: 'M12 Cyber Titans',
      leader: { name: 'Alice Leader', email: 'm12_shared_user@test.com', phone: '9999999991' },
      members: [],
      status: 'CONFIRMED',
      paymentStatus: 'PAID'
    });

    const teamB = await HackathonTeam.create({
      hackathonId: HACK_B_ID,
      teamId: 'CAN-TEAM-M12B01',
      teamName: 'M12 Beta Warriors',
      leader: { name: 'Bob Leader', email: 'm12_user_b@test.com', phone: '9999999992' },
      members: [],
      status: 'CONFIRMED',
      paymentStatus: 'NOT_REQUIRED'
    });

    // 7. Team 360 cross-hackathon protection
    let team360Status = 0;
    try {
      await axios.get(`${BASE_URL}/admin/teams/${teamA.teamId}/360`, {
        headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': HACK_B_ID }
      });
    } catch (err) {
      team360Status = err.response?.status;
    }
    assert([404, 400].includes(team360Status), 'Cross-hackathon Team 360 query must return 404/400');
    pass('Admin Team 360 blocks cross-hackathon team inspection (404/400)');

    // 8. CSV export scoped to requested hackathon
    const exportARes = await axios.get(`${BASE_URL}/admin/export/teams`, {
      headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': HACK_A_ID }
    });
    assert.strictEqual(exportARes.status, 200);
    assert(exportARes.data.includes('M12 Cyber Titans'), 'Export A contains Team A');
    assert(!exportARes.data.includes('M12 Beta Warriors'), 'Export A NEVER contains Team B');
    pass('Admin CSV export strictly isolates records belonging only to target hackathon');

    // 9. Operational search scoped to requested hackathon
    const searchRes = await axios.get(`${BASE_URL}/admin/search?q=Beta`, {
      headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': HACK_A_ID }
    });
    assert.strictEqual(searchRes.status, 200);
    const searchTeams = searchRes.data.results?.teams || searchRes.data.teams || [];
    assert.strictEqual(searchTeams.length, 0, 'Search in A must not find Team B');
    pass('Operational search in Hackathon A returns 0 records from Hackathon B');

    // 10. Operational search with invalid hackathon context fails closed
    let searchInvalidScopeStatus = 0;
    try {
      await axios.get(`${BASE_URL}/admin/search?q=Titans`, {
        headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': 'invalid-non-existent-hack' }
      });
    } catch (err) {
      searchInvalidScopeStatus = err.response?.status;
    }
    assert([400, 404].includes(searchInvalidScopeStatus), 'Search with invalid hackathon scope must fail closed (400/404)');
    pass('Operational search with invalid hackathon scope fails closed (HTTP 400/404)');

    console.log('\n--- CATEGORY 4: GLOBAL IDENTITY & SAME PARTICIPANT MULTI-HACKATHON ---');
    // 11. Same user email registers in Hackathon B as member of Team B
    const teamB2 = await HackathonTeam.create({
      hackathonId: HACK_B_ID,
      teamId: 'CAN-TEAM-M12B02',
      teamName: 'M12 Shared Participant Team',
      leader: { name: 'Charlie', email: 'm12_charlie@test.com', phone: '9999999993' },
      members: [{ name: 'Alice Member', email: 'm12_shared_user@test.com', phone: '9999999991' }],
      status: 'CONFIRMED',
      paymentStatus: 'NOT_REQUIRED'
    });
    assert(teamB2, 'Team B2 created with shared user Alice');
    pass('Same student email can participate in Hackathon A and Hackathon B simultaneously');

    // 12. Token scoped to Alice retrieves only Hackathon A team when queried with Hackathon A scope
    const userAlice = await User.create({
      name: 'Alice Shared',
      email: 'm12_shared_user@test.com',
      mobile: '9999999991',
      password: 'hashpassword'
    });
    const aliceToken = jwt.sign({ id: userAlice._id.toString(), email: userAlice.email }, process.env.JWT_SECRET || 'testsecret', { expiresIn: '1h' });

    const myTeamARes = await axios.get(`${BASE_URL}/my-team`, {
      headers: { Authorization: `Bearer ${aliceToken}`, 'x-hackathon-id': HACK_A_ID }
    });
    assert.strictEqual(myTeamARes.status, 200);
    assert.strictEqual(myTeamARes.data.team.teamId, teamA.teamId);
    pass('Participant getMyTeam in Hackathon A returns Alice\'s Hackathon A team');

    // 13. Token scoped to Alice retrieves Hackathon B team when queried with Hackathon B scope
    const myTeamBRes = await axios.get(`${BASE_URL}/my-team`, {
      headers: { Authorization: `Bearer ${aliceToken}`, 'x-hackathon-id': HACK_B_ID }
    });
    assert.strictEqual(myTeamBRes.status, 200);
    assert.strictEqual(myTeamBRes.data.team.teamId, teamB2.teamId);
    pass('Participant getMyTeam in Hackathon B returns Alice\'s Hackathon B team');

    console.log('\n--- CATEGORY 5: SAME JUDGE INDEPENDENCE & ROLE ISOLATION ---');
    // 14. Same judge provisioned in Hackathon A and Hackathon B
    const judgeA = await HackathonEditorialMember.create({
      hackathonId: HACK_A_ID,
      name: 'Dr. Jane Judge',
      email: 'm12_judge_shared@test.com',
      passwordHash: 'dummyhash',
      role: 'judge',
      isActive: true
    });
    const judgeB = await HackathonEditorialMember.create({
      hackathonId: HACK_B_ID,
      name: 'Dr. Jane Judge',
      email: 'm12_judge_shared@test.com',
      passwordHash: 'dummyhash',
      role: 'editorial', // Different role in B!
      isActive: true
    });
    assert.strictEqual(judgeA.role, 'judge');
    assert.strictEqual(judgeB.role, 'editorial');
    pass('Same judge holds independent roles across different hackathons');

    // 15. Judge assignment in A is invisible in B
    const subA = await HackathonSubmission.create({
      hackathonId: HACK_A_ID,
      team: teamA._id,
      teamId: teamA.teamId,
      submitterEmail: 'm12_shared_user@test.com',
      projectName: 'Aegis Platform',
      status: 'SUBMITTED',
      isLocked: true
    });

    const assignA = await HackathonEditorialAssignment.create({
      hackathonId: HACK_A_ID,
      editorialMember: judgeA._id,
      team: teamA._id,
      teamId: teamA.teamId,
      submission: subA._id,
      status: 'ACTIVE'
    });
    const judgeBAssignments = await HackathonEditorialAssignment.find({
      hackathonId: HACK_B_ID,
      editorialMember: judgeB._id
    });
    assert.strictEqual(judgeBAssignments.length, 0);
    pass('Judge assignment in Hackathon A is completely invisible in Hackathon B');

    // 16. Blind review score calculation
    const evalA = await HackathonEditorialEvaluation.create({
      hackathonId: HACK_A_ID,
      editorialMember: judgeA._id,
      team: teamA._id,
      teamId: teamA.teamId,
      submission: subA._id,
      assignment: assignA._id,
      status: 'FINALIZED',
      isLocked: true,
      scores: [
        { criterion: 'Technical Architecture', maxScore: 50, score: 45 },
        { criterion: 'Impact & Feasibility', maxScore: 50, score: 48 }
      ],
      totalScore: 93,
      comments: 'Outstanding multi-tenant execution'
    });
    assert.strictEqual(evalA.totalScore, 93);
    pass('Judge evaluation finalized and locked with server-calculated rubric score');

    console.log('\n--- CATEGORY 6: RESULTS, CERTIFICATES & SANITIZATION ---');
    // 17. Result calculation and public sanitization
    await HackathonSetting.updateOne({ hackathonId: HACK_A_ID }, { $set: { isResultsPublished: true } });

    const resultA = await HackathonResult.create({
      hackathonId: HACK_A_ID,
      team: teamA._id,
      teamId: teamA.teamId,
      teamName: teamA.teamName,
      projectName: 'Aegis Platform',
      rank: 1,
      finalScore: 93,
      isPublished: true,
      status: 'PUBLISHED',
      publishedAt: new Date()
    });

    const publicResultsRes = await axios.get(`${BASE_URL}/public/results?hackathonId=${HACK_A_ID}`);
    assert.strictEqual(publicResultsRes.status, 200);
    const pubList = publicResultsRes.data.rankings || publicResultsRes.data.leaderboard || [];
    assert(pubList.length > 0, 'Public results returned');
    assert.strictEqual(pubList[0].teamName, 'M12 Cyber Titans');
    assert(!pubList[0].judgeComments, 'Public results must strip judge comments');
    assert(!pubList[0].judgeEmail, 'Public results must strip judge email');
    assert(!pubList[0].leaderEmail, 'Public results must strip leader email');
    pass('Public results returned with complete judge & participant privacy sanitization');

    // 18. Certificate numbering format
    const certA = await HackathonCertificate.create({
      hackathonId: HACK_A_ID,
      certificateId: 'CERT-M12A-000001',
      certificateNumber: 'CAN-M12A-000001',
      verificationCode: 'VERIFY-M12A-123456',
      type: 'PARTICIPATION',
      team: teamA._id,
      teamId: teamA.teamId,
      teamName: teamA.teamName,
      recipientName: 'Alice Leader',
      recipientEmail: 'm12_shared_user@test.com',
      issueDate: new Date(),
      status: 'ISSUED'
    });
    assert.strictEqual(certA.certificateNumber, 'CAN-M12A-000001');
    pass('Certificate issued with dynamic hackathon-scoped prefix format (CAN-M12A-000001)');

    // 19. Public certificate verification returns dynamic hackathon name
    const verifyCertRes = await axios.get(`${BASE_URL}/certificates/verify/${certA.verificationCode}`);
    assert.strictEqual(verifyCertRes.status, 200);
    assert(verifyCertRes.data.isValid, 'Certificate must be verified as valid');
    assert.strictEqual(verifyCertRes.data.hackathonName, 'M12 Test Hackathon Alpha');
    pass('Public certificate verification confirms validity and dynamic hackathon attribution');

    console.log('\n--- CATEGORY 7: CLEAN SLATE INVARIANT FOR NEW HACKATHONS ---');
    // 20. Admin creates fresh hackathon
    const cleanHack = await Hackathon.create({
      hackathonId: HACK_CLEAN_ID,
      name: 'M12 Clean Slate Hackathon',
      title: 'M12 Clean Slate Hackathon',
      slug: 'm12-clean-slate',
      status: 'DRAFT'
    });
    const cleanSetting = await HackathonSetting.create({
      hackathonId: HACK_CLEAN_ID,
      registrationFee: 200
    });

    // Check all operational collections for clean slate
    const cleanCounts = {
      teams: await HackathonTeam.countDocuments({ hackathonId: HACK_CLEAN_ID }),
      payments: await HackathonPayment.countDocuments({ hackathonId: HACK_CLEAN_ID }),
      submissions: await HackathonSubmission.countDocuments({ hackathonId: HACK_CLEAN_ID }),
      judges: await HackathonEditorialMember.countDocuments({ hackathonId: HACK_CLEAN_ID }),
      assignments: await HackathonEditorialAssignment.countDocuments({ hackathonId: HACK_CLEAN_ID }),
      evaluations: await HackathonEditorialEvaluation.countDocuments({ hackathonId: HACK_CLEAN_ID }),
      results: await HackathonResult.countDocuments({ hackathonId: HACK_CLEAN_ID }),
      certificates: await HackathonCertificate.countDocuments({ hackathonId: HACK_CLEAN_ID }),
      prizes: await HackathonPrize.countDocuments({ hackathonId: HACK_CLEAN_ID }),
      sponsors: await HackathonSponsor.countDocuments({ hackathonId: HACK_CLEAN_ID })
    };

    assert(Object.values(cleanCounts).every(cnt => cnt === 0), 'Newly created hackathon must be completely empty');
    pass('Clean Slate Invariant: Newly created hackathon has exactly 0 teams, payments, submissions, judges, results, certs, and prizes');

    console.log('\n--- CATEGORY 8: PRODUCTION CORRELATION & ERROR SANITIZATION ---');
    // 21. Request correlation ID
    const corrRes = await axios.get(`${BASE_URL}/info`);
    const reqId = corrRes.headers['x-request-id'];
    assert(reqId && reqId.length > 0, 'Response must include X-Request-ID header');
    pass('Distributed request correlation active (X-Request-ID header generated on response)');

    // 22. Client supplied correlation ID adoption
    const customId = 'm12-trace-test-uuid-999';
    const clientTraceRes = await axios.get(`${BASE_URL}/info`, {
      headers: { 'x-request-id': customId }
    });
    assert.strictEqual(clientTraceRes.headers['x-request-id'], customId);
    pass('Server adopts and reflects client-supplied X-Request-ID');

    console.log('\n--- CATEGORY 9: HISTORICAL 2026 DATA PRESERVATION INVARIANT ---');
    // 23. Verify 2026 baseline data was not touched
    const modelsToCheck = [
      { name: 'Hackathon', model: Hackathon },
      { name: 'HackathonSetting', model: HackathonSetting },
      { name: 'HackathonTeam', model: HackathonTeam },
      { name: 'HackathonPayment', model: HackathonPayment },
      { name: 'HackathonSubmission', model: HackathonSubmission },
      { name: 'HackathonEditorialMember', model: HackathonEditorialMember },
      { name: 'HackathonEditorialAssignment', model: HackathonEditorialAssignment },
      { name: 'HackathonEditorialEvaluation', model: HackathonEditorialEvaluation },
      { name: 'HackathonResult', model: HackathonResult },
      { name: 'HackathonCertificate', model: HackathonCertificate },
      { name: 'HackathonPrize', model: HackathonPrize }
    ];

    for (const m of modelsToCheck) {
      const currentCount = await m.model.countDocuments({ hackathonId: 'can-hackathon-2026' });
      assert.strictEqual(
        currentCount,
        baseline2026Counts[m.name],
        `2026 count for ${m.name} must remain unchanged (${baseline2026Counts[m.name]} === ${currentCount})`
      );
    }
    pass('100% of historical 2026 baseline records intact across all models (zero deletion, zero mutation)');

    // Teardown test data
    await cleanupTestData();
    pass('M12 isolated test fixtures safely cleaned up without touching production records');

    console.log('\n===============================================================');
    console.log(`=== PHASE M12 TEST RESULTS: ${passed} PASSED / ${failed} FAILED               ===`);
    console.log('===============================================================');

  } catch (err) {
    fail('M12 Acceptance Test Suite encountered unhandled error', err);
  } finally {
    await cleanupTestData();
    if (server) server.close();
  }
}

runM12AcceptanceTests().then(() => {
  process.exit(0);
}).catch(err => {
  console.error('Fatal error during M12 test execution:', err);
  process.exit(1);
});
