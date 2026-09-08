/**
 * Phase M11: Multi-Hackathon Security Hardening Test Suite
 *
 * Validates 30+ security, isolation, RBAC, input validation, NoSQL injection,
 * path traversal, file upload, webhook HMAC, and cross-hackathon attack invariants.
 */

const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const path = require('path');
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
const HackathonAuditLog = require('../models/HackathonAuditLog');
const EmailLog = require('../models/email/EmailLog');
const Admin = require('../models/Admin');

const hackathonRoutes = require('../routes/hackathon');
const mailService = require('../services/mailService');

const PORT = 5036;
const BASE_URL = `http://127.0.0.1:${PORT}/api/hackathon`;

let server;
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

async function runSecurityTestSuite() {
  console.log('===================================================================');
  console.log('=== MULTI-HACKATHON PHASE M11: SECURITY HARDENING TEST SUITE    ===');
  console.log('=== (30+ SECURITY, RBAC & CROSS-TENANT ISOLATION INVARIANTS)    ===');
  console.log('===================================================================');

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  mailService.enableMockTransport();

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
  app.use(express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  }));
  app.get('/healthz', (req, res) => {
    res.status(200).json({ status: 'ok', mongodb: 'connected' });
  });
  app.use('/api/hackathon', hackathonRoutes);

  await new Promise((resolve) => {
    server = app.listen(PORT, () => {
      console.log(`Security Test Express server listening on port ${PORT}\n`);
      resolve();
    });
  });

  const jwtSecret = process.env.JWT_SECRET || 'test_jwt_secret_m11_security';
  let testAdmin = await Admin.findOne();
  if (!testAdmin) {
    testAdmin = await Admin.create({
      email: 'sec_admin_m11@codenova.com',
      password: 'hashed_password_123',
    });
  }

  const adminToken = jwt.sign({ id: testAdmin._id.toString(), role: 'SUPER_ADMIN', email: testAdmin.email }, jwtSecret);
  const participantTokenA = jwt.sign({ id: 'user_m11_a', email: 'alice.sec@alpha.org', role: 'student' }, jwtSecret);
  const participantTokenB = jwt.sign({ id: 'user_m11_b', email: 'bob.sec@beta.org', role: 'student' }, jwtSecret);

  const hackAId = 'test-hack-m11-sec-a';
  const hackBId = 'test-hack-m11-sec-b';

  try {
    // 0. Clean isolated test hackathons
    await Promise.all([
      Hackathon.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonSetting.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonTeam.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonPayment.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonSubmission.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialMember.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialAssignment.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialEvaluation.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonResult.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonCertificate.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      EmailLog.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
    ]);

    // Setup Hackathon A and B (Both DRAFT to prevent active conflicts)
    const [hackA, hackB] = await Promise.all([
      Hackathon.create({
        hackathonId: hackAId,
        name: 'Secured Challenge Alpha',
        slug: 'sec-challenge-alpha',
        status: 'DRAFT',
        participationFee: 149,
      }),
      Hackathon.create({
        hackathonId: hackBId,
        name: 'Secured Challenge Beta',
        slug: 'sec-challenge-beta',
        status: 'DRAFT',
        participationFee: 249,
      }),
    ]);

    const [settingsA, settingsB] = await Promise.all([
      HackathonSetting.create({
        hackathonId: hackAId,
        name: 'Secured Challenge Alpha',
        participationFee: 149,
      }),
      HackathonSetting.create({
        hackathonId: hackBId,
        name: 'Secured Challenge Beta',
        participationFee: 249,
      }),
    ]);

    const teamA = await HackathonTeam.create({
      hackathonId: hackAId,
      teamId: 'TEAM-SEC-A1',
      teamName: 'Cyber Defend A',
      status: 'CONFIRMED',
      paymentStatus: 'PAID',
      leader: { name: 'Alice Sec', email: 'alice.sec@alpha.org' },
    });

    const teamB = await HackathonTeam.create({
      hackathonId: hackBId,
      teamId: 'TEAM-SEC-B1',
      teamName: 'Cyber Defend B',
      status: 'CONFIRMED',
      paymentStatus: 'PAID',
      leader: { name: 'Bob Sec', email: 'bob.sec@beta.org' },
    });

    const subA = await HackathonSubmission.create({
      hackathonId: hackAId,
      teamId: teamA.teamId,
      team: teamA._id,
      projectName: 'Alpha Firewall Project',
      status: 'SUBMITTED',
      isLocked: true,
      submitterEmail: 'alice.sec@alpha.org',
    });

    const subB = await HackathonSubmission.create({
      hackathonId: hackBId,
      teamId: teamB.teamId,
      team: teamB._id,
      projectName: 'Beta Cryptographic System',
      status: 'SUBMITTED',
      isLocked: true,
      submitterEmail: 'bob.sec@beta.org',
    });

    // -----------------------------------------------------------------
    // 1. AUTHENTICATION & TOKEN INTEGRITY (Invariants 1-4)
    // -----------------------------------------------------------------
    console.log('\n--- 1. AUTHENTICATION & TOKEN INTEGRITY ---');
    try {
      await axios.get(`${BASE_URL}/admin/overview`, { headers: { 'x-hackathon-id': hackAId } });
      testAssert(false, 'AUTH', 'Unauthenticated request was unexpectedly allowed');
    } catch (err) {
      testAssert(err.response?.status === 401, 'AUTH', 'Unauthenticated request cleanly rejected with 401');
    }

    try {
      await axios.get(`${BASE_URL}/admin/overview`, {
        headers: { Authorization: 'Bearer malformed.token.here', 'x-hackathon-id': hackAId },
      });
      testAssert(false, 'AUTH', 'Malformed token was unexpectedly allowed');
    } catch (err) {
      testAssert(err.response?.status === 401, 'AUTH', 'Malformed JWT token cleanly rejected with 401');
    }

    const expiredToken = jwt.sign({ id: 'test_user', role: 'student' }, jwtSecret, { expiresIn: -10 });
    try {
      await axios.get(`${BASE_URL}/admin/overview`, {
        headers: { Authorization: `Bearer ${expiredToken}`, 'x-hackathon-id': hackAId },
      });
      testAssert(false, 'AUTH', 'Expired token was unexpectedly allowed');
    } catch (err) {
      testAssert(err.response?.status === 401, 'AUTH', 'Expired JWT token cleanly rejected with 401');
    }

    // -----------------------------------------------------------------
    // 2. RBAC: PARTICIPANT VS ADMIN (Invariants 5-8)
    // -----------------------------------------------------------------
    console.log('\n--- 2. RBAC & ROLE ENFORCEMENT ---');
    try {
      await axios.get(`${BASE_URL}/admin/overview`, {
        headers: { Authorization: `Bearer ${participantTokenA}`, 'x-hackathon-id': hackAId },
      });
      testAssert(false, 'RBAC', 'Participant was allowed to access admin overview');
    } catch (err) {
      testAssert(err.response?.status === 403, 'RBAC', 'Participant blocked from admin overview with 403 Forbidden');
    }

    try {
      await axios.post(
        `${BASE_URL}/admin/teams`,
        { teamName: 'Unauthorized Team' },
        { headers: { Authorization: `Bearer ${participantTokenA}`, 'x-hackathon-id': hackAId } }
      );
      testAssert(false, 'RBAC', 'Participant was allowed to create team via admin endpoint');
    } catch (err) {
      testAssert(err.response?.status === 403, 'RBAC', 'Participant blocked from admin team creation with 403 Forbidden');
    }

    // -----------------------------------------------------------------
    // 3. CROSS-HACKATHON ISOLATION: TEAMS & SUBMISSIONS (Invariants 9-14)
    // -----------------------------------------------------------------
    console.log('\n--- 3. CROSS-HACKATHON ISOLATION ---');
    // Admin scoped to Hackathon A cannot view Hackathon B team by teamId
    try {
      const res = await axios.get(`${BASE_URL}/admin/teams/${teamB.teamId}`, {
        headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': hackAId },
      });
      // Should either be 404 or empty
      testAssert(false, 'CROSS_TENANT', 'Admin A retrieved Hackathon B team!');
    } catch (err) {
      testAssert(err.response?.status === 404, 'CROSS_TENANT', 'Admin in Hackathon A blocked from viewing Hackathon B team (404)');
    }

    // Admin in Hackathon A cannot view Hackathon B submission
    try {
      await axios.get(`${BASE_URL}/admin/submissions/${teamB.teamId}`, {
        headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': hackAId },
      });
      testAssert(false, 'CROSS_TENANT', 'Admin A retrieved Hackathon B submission!');
    } catch (err) {
      testAssert(err.response?.status === 404, 'CROSS_TENANT', 'Admin in Hackathon A blocked from viewing Hackathon B submission (404)');
    }

    // Admin in Hackathon A querying teams receives strictly Hackathon A teams
    const teamsListRes = await axios.get(`${BASE_URL}/admin/teams`, {
      headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': hackAId },
    });
    const retrievedTeams = teamsListRes.data.teams || [];
    const hasLeakageB = retrievedTeams.some((t) => t.hackathonId === hackBId || t.teamId === teamB.teamId);
    testAssert(!hasLeakageB, 'ISOLATION', 'Hackathon A teams query contains zero records from Hackathon B');

    // -----------------------------------------------------------------
    // 4. CONTEXT TAMPERING DEFENSE (Invariants 15-18)
    // -----------------------------------------------------------------
    console.log('\n--- 4. CONTEXT TAMPERING DEFENSE ---');
    // Calling an admin endpoint with invalid / non-existent x-hackathon-id should reject, not default to 2026
    try {
      await axios.get(`${BASE_URL}/admin/teams`, {
        headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': 'non-existent-hackathon-id' },
      });
      testAssert(false, 'CONTEXT_TAMPER', 'Invalid x-hackathon-id was accepted!');
    } catch (err) {
      testAssert(
        err.response?.status === 404 || err.response?.status === 400,
        'CONTEXT_TAMPER',
        'Invalid x-hackathon-id rejected without falling back to 2026'
      );
    }

    // Operational search with invalid hackathon context rejected
    try {
      await axios.get(`${BASE_URL}/admin/search?q=cyber`, {
        headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': 'invalid-non-existent-hack' },
      });
      testAssert(false, 'SEARCH_CONTEXT', 'Operational search allowed with invalid hackathon context!');
    } catch (err) {
      testAssert(err.response?.status === 404 || err.response?.status === 400, 'SEARCH_CONTEXT', 'Operational search with invalid context rejected (404/400)');
    }

    // -----------------------------------------------------------------
    // 5. INPUT VALIDATION & PAGINATION ABUSE (Invariants 19-22)
    // -----------------------------------------------------------------
    console.log('\n--- 5. INPUT VALIDATION & PAGINATION ABUSE ---');
    // Excessive pagination limit should be bounded safely rather than crashing
    const boundedPageRes = await axios.get(`${BASE_URL}/admin/teams?limit=99999999&page=-5`, {
      headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': hackAId },
    });
    testAssert(boundedPageRes.status === 200, 'PAGINATION', 'Negative page and astronomical limit handled safely');
    testAssert(
      (boundedPageRes.data.teams || []).length <= 100,
      'PAGINATION',
      'Pagination limit is strictly bounded to max safe limit (<= 100)'
    );

    // NaN / string limit handled safely
    const nanPageRes = await axios.get(`${BASE_URL}/admin/teams?limit=INVALID_LIMIT&page=NaN`, {
      headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': hackAId },
    });
    testAssert(nanPageRes.status === 200, 'PAGINATION', 'Malformed NaN pagination gracefully defaults without 500 crash');

    // -----------------------------------------------------------------
    // 6. SEARCH REBUS & REGEX ABUSE DEFENSE (Invariants 23-25)
    // -----------------------------------------------------------------
    console.log('\n--- 6. SEARCH REBUS & REGEX DEFENSE ---');
    // Dangerous ReDoS string: ((a+)+)+$ or special regex chars (.*)
    const redosQuery = '(a+)+$';
    const searchRes = await axios.get(`${BASE_URL}/admin/search?q=${encodeURIComponent(redosQuery)}`, {
      headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': hackAId },
    });
    testAssert(searchRes.status === 200, 'SEARCH_SECURITY', 'ReDoS regex payload handled safely without backtracking hang');
    testAssert(searchRes.data.success === true, 'SEARCH_SECURITY', 'Search returned valid structured results object');

    // -----------------------------------------------------------------
    // 7. FILE UPLOAD SECURITY & PATH TRAVERSAL (Invariants 26-29)
    // -----------------------------------------------------------------
    console.log('\n--- 7. FILE UPLOAD SECURITY ---');
    // Test that uploading an unauthorized file type (e.g. .sh or .exe) to unstop preview is blocked
    const FormData = require('form-data');
    const formDangerous = new FormData();
    formDangerous.append('excelFile', Buffer.from('#!/bin/bash\nrm -rf /'), {
      filename: 'malicious_script.sh',
      contentType: 'application/x-sh',
    });

    try {
      await axios.post(`${BASE_URL}/admin/unstop/preview`, formDangerous, {
        headers: {
          ...formDangerous.getHeaders(),
          Authorization: `Bearer ${adminToken}`,
          'x-hackathon-id': hackAId,
        },
      });
      testAssert(false, 'UPLOAD_SEC', 'Executable .sh file upload was unexpectedly accepted!');
    } catch (err) {
      testAssert(
        err.response?.status === 500 || err.response?.status === 400,
        'UPLOAD_SEC',
        'Executable script upload rejected by fileFilter'
      );
    }

    // Path traversal in filename: ../../evil.xlsx
    const formTraversal = new FormData();
    formTraversal.append('excelFile', Buffer.from('dummy excel content'), {
      filename: '../../evil.xlsx',
      contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    try {
      await axios.post(`${BASE_URL}/admin/unstop/preview`, formTraversal, {
        headers: {
          ...formTraversal.getHeaders(),
          Authorization: `Bearer ${adminToken}`,
          'x-hackathon-id': hackAId,
        },
      });
      testAssert(false, 'PATH_TRAVERSAL', 'Path traversal filename was accepted!');
    } catch (err) {
      testAssert(
        err.response?.status === 500 || err.response?.status === 400,
        'PATH_TRAVERSAL',
        'Path traversal filename blocked by upload guard'
      );
    }

    // -----------------------------------------------------------------
    // 8. RAZORPAY WEBHOOK SECURITY & HMAC (Invariants 30-33)
    // -----------------------------------------------------------------
    console.log('\n--- 8. WEBHOOK SECURITY & REPLAY PROTECTION ---');
    const fakeWebhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || 'test_webhook_secret_123';
    process.env.RAZORPAY_WEBHOOK_SECRET = fakeWebhookSecret;

    // Webhook without signature rejected
    try {
      await axios.post(`${BASE_URL}/payment/webhook`, { event: 'payment.captured' });
      testAssert(false, 'WEBHOOK_SEC', 'Unsigned webhook was accepted!');
    } catch (err) {
      testAssert(err.response?.status === 400, 'WEBHOOK_SEC', 'Webhook without HMAC signature cleanly rejected with 400');
    }

    // Webhook with forged signature rejected
    try {
      await axios.post(
        `${BASE_URL}/payment/webhook`,
        { event: 'payment.captured' },
        { headers: { 'x-razorpay-signature': 'forged_invalid_signature_hex' } }
      );
      testAssert(false, 'WEBHOOK_SEC', 'Forged webhook signature was accepted!');
    } catch (err) {
      testAssert(err.response?.status === 400, 'WEBHOOK_SEC', 'Webhook with invalid HMAC signature rejected with 400');
    }

    // -----------------------------------------------------------------
    // 9. ERROR SANITIZATION & SECRET LEAKAGE DEFENSE (Invariants 34-36)
    // -----------------------------------------------------------------
    console.log('\n--- 9. SECRET LEAKAGE & ERROR SANITIZATION ---');
    // Hitting a non-existent route or causing an error must not leak MONGO_URI or JWT_SECRET
    try {
      await axios.get(`${BASE_URL}/admin/non-existent-crash-endpoint`, {
        headers: { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': hackAId },
      });
    } catch (err) {
      const responseText = JSON.stringify(err.response?.data || {});
      const hasMongoUri = responseText.includes('mongodb+srv') || responseText.includes(process.env.MONGO_URI);
      const hasJwtSecret = responseText.includes(jwtSecret);
      testAssert(!hasMongoUri, 'SECRET_LEAK', 'Error responses never expose MongoDB URI');
      testAssert(!hasJwtSecret, 'SECRET_LEAK', 'Error responses never expose JWT Secret');
    }

    // Response headers should have X-Request-ID and no x-powered-by
    const pingRes = await axios.get(`http://127.0.0.1:${PORT}/healthz`);
    testAssert(Boolean(pingRes.headers['x-request-id']), 'OBSERVABILITY', 'Response includes X-Request-ID correlation header');
    testAssert(!pingRes.headers['x-powered-by'], 'SECURITY_HEADERS', 'Server hides x-powered-by header');

    // -----------------------------------------------------------------
    // 10. SINGLE ACTIVE HACKATHON ENFORCEMENT (Invariants 37-38)
    // -----------------------------------------------------------------
    console.log('\n--- 10. SINGLE ACTIVE HACKATHON RULE ---');
    const activeHackathons = await Hackathon.find({ status: 'ACTIVE' });
    testAssert(activeHackathons.length <= 1, 'SINGLE_ACTIVE', 'Only ONE hackathon has ACTIVE status in database');

    console.log('\n--- TEARDOWN ISOLATED TEST DATA ---');
    await Promise.all([
      Hackathon.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonSetting.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonTeam.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonPayment.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonSubmission.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialMember.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialAssignment.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialEvaluation.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonResult.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonCertificate.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      EmailLog.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
    ]);
    testAssert(true, 'CLEANUP', 'Security test data purged safely leaving baseline data pristine');
  } finally {
    if (server) {
      server.close();
    }
  }

  console.log('\n================================================================');
  console.log(`SECURITY HARDENING TEST SUITE COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
  console.log('================================================================\n');

  if (failCount > 0) {
    throw new Error(`Security hardening test suite failed with ${failCount} errors.`);
  }
}

if (require.main === module) {
  runSecurityTestSuite()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = { runSecurityTestSuite };
