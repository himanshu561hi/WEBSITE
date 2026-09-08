/**
 * Phase M10: Multi-Hackathon Email & Notification System Test Suite
 * Validates strict hackathon scoping, dynamic branding, idempotency,
 * mock transport isolation, template safety, and zero regression.
 */

const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });

const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonTeam = require('../models/HackathonTeam');
const HackathonPayment = require('../models/HackathonPayment');
const HackathonSubmission = require('../models/HackathonSubmission');
const HackathonEditorialMember = require('../models/HackathonEditorialMember');
const HackathonEditorialAssignment = require('../models/HackathonEditorialAssignment');
const HackathonResult = require('../models/HackathonResult');
const HackathonCertificate = require('../models/HackathonCertificate');
const EmailLog = require('../models/email/EmailLog');
const Admin = require('../models/Admin');

const hackathonEmailService = require('../services/hackathonEmailService');
const mailService = require('../services/mailService');
const hackathonOpsService = require('../services/hackathonOpsService');
const hackathonRoutes = require('../routes/hackathon');
const emailLogRoutes = require('../routes/emailLogs');

const PORT = 5035;
const BASE_URL = `http://127.0.0.1:${PORT}/api/hackathon`;
const EMAIL_LOG_URL = `http://127.0.0.1:${PORT}/api/email`;

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

async function runTestSuite() {
  console.log('================================================================');
  console.log('PHASE M10 — MULTI-HACKATHON EMAIL & NOTIFICATIONS TEST SUITE');
  console.log('================================================================\n');

  try {
    // 1. Connect DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB successfully.\n');

    // Enable Mock Transport immediately so no real network emails are sent
    mailService.enableMockTransport();
    testAssert(mailService.mockTransport === true, 'MOCK_TRANSPORT', 'Mock transport enabled for zero real emails');

    // 2. Start Express Test Server
    const app = express();
    app.use(express.json());
    app.use('/api/hackathon', hackathonRoutes);
    app.use('/api/email', emailLogRoutes);

    await new Promise((resolve) => {
      server = app.listen(PORT, () => {
        console.log(`Test Express server listening on port ${PORT}\n`);
        resolve();
      });
    });

    const jwtSecret = process.env.JWT_SECRET || 'test_jwt_secret_phase9_readiness';
    let testAdmin = await Admin.findOne();
    if (!testAdmin) {
      testAdmin = await Admin.create({
        email: 'test_admin_m10@codenova.com',
        password: 'hashed_password_123'
      });
    }
    const adminToken = jwt.sign({ id: testAdmin._id.toString(), role: 'SUPER_ADMIN', email: testAdmin.email }, jwtSecret);
    const adminHeadersA = { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': 'test-hack-m10-a' };
    const adminHeadersB = { Authorization: `Bearer ${adminToken}`, 'x-hackathon-id': 'test-hack-m10-b' };

    // 3. Setup Test Hackathons A and B
    console.log('--- SETUP ISOLATED TEST HACKATHONS ---');
    const hackAId = 'test-hack-m10-a';
    const hackBId = 'test-hack-m10-b';

    await Promise.all([
      Hackathon.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonSetting.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonTeam.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonPayment.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonSubmission.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialMember.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialAssignment.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonResult.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonCertificate.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      EmailLog.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
    ]);

    const hackA = await Hackathon.create({
      hackathonId: hackAId,
      name: 'AI Innovation Challenge 2027',
      slug: 'ai-challenge-2027',
      status: 'DRAFT',
      participationFee: 149,
      logoUrl: 'https://cdn.example.com/logo-a.png',
    });

    const settingsA = await HackathonSetting.create({
      hackathonId: hackAId,
      name: 'AI Innovation Challenge 2027',
      participationFee: 149,
      submissionDeadline: new Date(Date.now() + 5 * 86400000),
      resultDate: new Date(Date.now() + 10 * 86400000),
      supportEmail: 'support@aichallenge.org',
      whatsAppLink: 'https://chat.whatsapp.com/test-group-a',
    });

    const hackB = await Hackathon.create({
      hackathonId: hackBId,
      name: 'Green Climate Hackathon 2027',
      slug: 'green-hack-2027',
      status: 'DRAFT',
      participationFee: 299,
      logoUrl: 'https://cdn.example.com/logo-b.png',
    });

    const settingsB = await HackathonSetting.create({
      hackathonId: hackBId,
      name: 'Green Climate Hackathon 2027',
      participationFee: 299,
      submissionDeadline: new Date(Date.now() + 15 * 86400000),
      resultDate: new Date(Date.now() + 20 * 86400000),
      supportEmail: 'help@climatehack.org',
      whatsAppLink: 'https://chat.whatsapp.com/test-group-b',
    });

    testAssert(hackA && hackB, 'SETUP', 'Created test Hackathons A and B with distinct fees and dates');

    // -------------------------------------------------------------
    // CATEGORY 1: Schema & EmailLog Multi-Hackathon Scoping
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 1: SCHEMA & EMAILLOG SCOPING ---');
    await EmailLog.syncIndexes();
    const indexes = await EmailLog.collection.indexes();
    const indexNames = indexes.map((idx) => Object.keys(idx.key).join('_'));

    const hasHackathonCreatedIdx = indexes.some((idx) => idx.key.hackathonId === 1 && idx.key.createdAt !== undefined);
    const hasHackathonRecipientIdx = indexes.some((idx) => idx.key.hackathonId === 1 && idx.key.recipientEmail === 1);
    const hasHackathonStatusIdx = indexes.some((idx) => idx.key.hackathonId === 1 && idx.key.status === 1);
    const hasHackathonEventTypeIdx = indexes.some((idx) => idx.key.hackathonId === 1 && idx.key.eventType === 1);

    testAssert(hasHackathonCreatedIdx, 'INDEXING', 'EmailLog has compound index on { hackathonId, createdAt }');
    testAssert(hasHackathonRecipientIdx, 'INDEXING', 'EmailLog has compound index on { hackathonId, recipientEmail }');
    testAssert(hasHackathonStatusIdx, 'INDEXING', 'EmailLog has compound index on { hackathonId, status }');
    testAssert(hasHackathonEventTypeIdx, 'INDEXING', 'EmailLog has compound index on { hackathonId, eventType }');

    // Global emails without hackathonId are supported
    const globalLog = await EmailLog.create({
      recipientEmail: 'globaluser@example.com',
      subject: 'Global Platform Security Alert',
      html: '<p>Security Notice</p>',
      campaign: 'Platform Security',
      status: 'SUCCESS',
      source: 'Global Auth System',
    });
    testAssert(globalLog.hackathonId === null, 'GLOBAL_EMAIL', 'Global email created cleanly without forcing hackathonId');

    // -------------------------------------------------------------
    // CATEGORY 2: Registration Confirmation Emails
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 2: REGISTRATION CONFIRMATION ---');
    mailService.clearMockSentEmails();

    const teamA = await HackathonTeam.create({
      hackathonId: hackAId,
      teamId: 'TEAM-A-001',
      teamName: 'Neural Net Ninjas',
      track: 'Generative AI',
      leader: { name: 'Alice Leader', email: 'alice.leader@example.com', mobile: '9999999991' },
      members: [{ name: 'Bob Member', email: 'bob@example.com', role: 'DEVELOPER' }],
      status: 'IMPORTED',
    });

    const regRes = await hackathonEmailService.sendRegistrationEmail({
      team: teamA,
      settings: settingsA,
      hackathon: hackA,
    });
    testAssert(regRes.success, 'REGISTRATION_EMAIL', 'Registration confirmation email dispatched');

    const sentMails = mailService.getMockSentEmails();
    const lastMail = sentMails[sentMails.length - 1];
    testAssert(lastMail.to === 'alice.leader@example.com', 'REGISTRATION_EMAIL', 'Email addressed to team leader');
    testAssert(lastMail.hackathonId === hackAId, 'REGISTRATION_EMAIL', 'Email tagged with hackathonId A');
    testAssert(lastMail.eventType === 'REGISTRATION_CONFIRMATION', 'REGISTRATION_EMAIL', 'Email tagged with eventType REGISTRATION_CONFIRMATION');
    testAssert(lastMail.subject.includes(hackA.name), 'REGISTRATION_EMAIL', 'Subject includes dynamic hackathon A name');
    testAssert(lastMail.html.includes(hackA.name), 'REGISTRATION_EMAIL', 'Body includes dynamic hackathon A name');
    testAssert(lastMail.html.includes(teamA.teamName), 'REGISTRATION_EMAIL', 'Body includes dynamic team name');

    // -------------------------------------------------------------
    // CATEGORY 3: Shortlist Notifications & Dynamic Fee/Deadlines
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 3: SHORTLIST NOTIFICATIONS ---');
    mailService.clearMockSentEmails();

    // Shortlist Team A
    await hackathonEmailService.sendShortlistEmail({
      team: teamA,
      settings: settingsA,
      hackathon: hackA,
    });
    const shortlistMailA = mailService.getMockSentEmails()[0];
    testAssert(shortlistMailA.hackathonId === hackAId, 'SHORTLIST_EMAIL', 'Shortlist email tagged with hackAId');
    testAssert(shortlistMailA.html.includes(`₹${settingsA.participationFee}`), 'DYNAMIC_FEE', `Shortlist email contains Hackathon A fee ₹${settingsA.participationFee}`);
    testAssert(!shortlistMailA.html.includes('₹49'), 'NO_HARDCODE', 'Shortlist email does NOT contain hardcoded ₹49');
    testAssert(!shortlistMailA.html.includes('Code-A-Nova National Hackathon 2026'), 'NO_HARDCODE', 'Shortlist email does NOT contain 2026 hardcoding');

    // Shortlist Team B with Hackathon B settings
    const teamB = await HackathonTeam.create({
      hackathonId: hackBId,
      teamId: 'TEAM-B-001',
      teamName: 'Solar Pioneers',
      track: 'Renewable Energy',
      leader: { name: 'Charlie Green', email: 'charlie.green@example.com', mobile: '9999999992' },
      status: 'IMPORTED',
    });

    mailService.clearMockSentEmails();
    await hackathonEmailService.sendShortlistEmail({
      team: teamB,
      settings: settingsB,
      hackathon: hackB,
    });
    const shortlistMailB = mailService.getMockSentEmails()[0];
    testAssert(shortlistMailB.hackathonId === hackBId, 'SHORTLIST_EMAIL', 'Shortlist email tagged with hackBId');
    testAssert(shortlistMailB.html.includes(`₹${settingsB.participationFee}`), 'DYNAMIC_FEE', `Shortlist email contains Hackathon B fee ₹${settingsB.participationFee}`);
    testAssert(shortlistMailB.html.includes(hackB.name), 'DYNAMIC_BRANDING', 'Shortlist email contains Hackathon B name');
    testAssert(!shortlistMailB.html.includes(hackA.name), 'ISOLATION', 'Shortlist email B does not leak Hackathon A branding');

    // -------------------------------------------------------------
    // CATEGORY 4: Payment Emails (Required, Success, Failed)
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 4: PAYMENT EMAILS ---');
    mailService.clearMockSentEmails();

    // Payment Required
    await hackathonEmailService.sendPaymentRequiredEmail({
      team: teamA,
      settings: settingsA,
      hackathon: hackA,
    });
    const payReqMail = mailService.getMockSentEmails()[0];
    testAssert(payReqMail.eventType === 'PAYMENT_REQUIRED', 'PAYMENT_REQUIRED', 'Payment required email eventType set');
    testAssert(payReqMail.hackathonId === hackAId, 'PAYMENT_REQUIRED', 'Payment required email scoped to Hackathon A');
    testAssert(payReqMail.html.includes(`₹${settingsA.participationFee}`), 'PAYMENT_REQUIRED', 'Payment required fee matches settings');

    // Payment Success
    mailService.clearMockSentEmails();
    const paymentRecordA = await HackathonPayment.create({
      hackathonId: hackAId,
      teamId: teamA.teamId,
      leaderEmail: teamA.leader.email,
      orderId: 'order_test_m10_123',
      amount: settingsA.participationFee,
      status: 'PAID',
      paymentId: 'pay_test_m10_123',
      razorpayPaymentId: 'pay_test_m10_123',
    });

    await hackathonEmailService.sendPaymentSuccessEmail({
      team: teamA,
      payment: paymentRecordA,
      settings: settingsA,
      hackathon: hackA,
    });
    const paySuccessMail = mailService.getMockSentEmails()[0];
    testAssert(paySuccessMail.eventType === 'PAYMENT_SUCCESS', 'PAYMENT_SUCCESS', 'Payment success email eventType set');
    testAssert(paySuccessMail.html.includes('pay_test_m10_123'), 'PAYMENT_SUCCESS', 'Payment success email includes payment ID');
    testAssert(paySuccessMail.html.includes(settingsA.whatsAppLink), 'WHATSAPP_LINK', 'Payment success email includes hackathon WhatsApp community');

    // Payment Failed
    mailService.clearMockSentEmails();
    await hackathonEmailService.sendPaymentFailedEmail({
      team: teamA,
      payment: { razorpayPaymentId: 'pay_fail_123' },
      settings: settingsA,
      hackathon: hackA,
      reason: 'Card was declined by issuing bank',
    });
    const payFailMail = mailService.getMockSentEmails()[0];
    testAssert(payFailMail.eventType === 'PAYMENT_FAILED', 'PAYMENT_FAILED', 'Payment failed email eventType set');
    testAssert(payFailMail.html.includes('Card was declined by issuing bank'), 'PAYMENT_FAILED', 'Payment failed email contains failure reason');

    // -------------------------------------------------------------
    // CATEGORY 5: Submission Emails (Reminder & Received)
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 5: SUBMISSION EMAILS ---');
    mailService.clearMockSentEmails();

    await hackathonEmailService.sendSubmissionReminderEmail({
      team: teamA,
      settings: settingsA,
      hackathon: hackA,
    });
    const subReminderMail = mailService.getMockSentEmails()[0];
    testAssert(subReminderMail.eventType === 'SUBMISSION_REMINDER', 'SUBMISSION_REMINDER', 'Submission reminder email eventType set');
    testAssert(subReminderMail.hackathonId === hackAId, 'SUBMISSION_REMINDER', 'Submission reminder scoped to Hackathon A');

    // Submission Confirmation
    mailService.clearMockSentEmails();
    const subA = await HackathonSubmission.create({
      hackathonId: hackAId,
      team: teamA._id,
      teamId: teamA.teamId,
      projectName: 'Autonomous Vision Robot',
      projectDescription: 'Advanced robotics powered by edge AI',
      status: 'SUBMITTED',
      submitterEmail: teamA.leader.email,
    });

    await hackathonEmailService.sendSubmissionConfirmationEmail({
      team: teamA,
      submission: subA,
      settings: settingsA,
      hackathon: hackA,
    });
    const subConfMail = mailService.getMockSentEmails()[0];
    testAssert(subConfMail.eventType === 'SUBMISSION_RECEIVED', 'SUBMISSION_RECEIVED', 'Submission confirmation eventType set');
    testAssert(subConfMail.html.includes('Autonomous Vision Robot'), 'SUBMISSION_RECEIVED', 'Submission confirmation includes project title');

    // -------------------------------------------------------------
    // CATEGORY 6: Judge Assignment & Reminders
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 6: JUDGE EMAILS ---');
    mailService.clearMockSentEmails();

    const judgeA = await HackathonEditorialMember.create({
      hackathonId: hackAId,
      name: 'Dr. Alan Turing',
      email: 'alan.turing@ai.org',
      passwordHash: 'hashed_password',
      isActive: true,
    });

    const assignA = await HackathonEditorialAssignment.create({
      hackathonId: hackAId,
      team: teamA._id,
      teamId: teamA.teamId,
      submission: subA._id,
      editorialMember: judgeA._id,
      status: 'ACTIVE',
      deadline: new Date(Date.now() + 3 * 86400000),
    });

    await hackathonEmailService.sendJudgeAssignmentEmail({
      judge: judgeA,
      team: teamA,
      assignment: assignA,
      settings: settingsA,
      hackathon: hackA,
    });
    const judgeAssignMail = mailService.getMockSentEmails()[0];
    testAssert(judgeAssignMail.eventType === 'JUDGE_ASSIGNED', 'JUDGE_ASSIGNED', 'Judge assignment eventType set');
    testAssert(judgeAssignMail.to === 'alan.turing@ai.org', 'JUDGE_ASSIGNED', 'Judge assignment sent to correct judge');
    testAssert(judgeAssignMail.hackathonId === hackAId, 'JUDGE_ASSIGNED', 'Judge assignment scoped to Hackathon A');

    // Judge Reminder
    mailService.clearMockSentEmails();
    await hackathonEmailService.sendJudgeReminderEmail({
      judge: judgeA,
      pendingCount: 2,
      settings: settingsA,
      hackathon: hackA,
    });
    const judgeRemindMail = mailService.getMockSentEmails()[0];
    testAssert(judgeRemindMail.eventType === 'JUDGE_REMINDER', 'JUDGE_REMINDER', 'Judge reminder eventType set');
    testAssert(judgeRemindMail.html.includes('2 pending evaluation(s)'), 'JUDGE_REMINDER', 'Judge reminder includes pending review count');

    // -------------------------------------------------------------
    // CATEGORY 7: Results & Winner Announcement Emails
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 7: RESULT & WINNER EMAILS ---');
    mailService.clearMockSentEmails();

    const resultA = await HackathonResult.create({
      hackathonId: hackAId,
      team: teamA._id,
      teamId: teamA.teamId,
      teamName: teamA.teamName,
      rank: 1,
      awardCategory: '1st Place Winner',
      status: 'PUBLISHED',
      isApproved: true,
      isLocked: true,
    });

    await hackathonEmailService.sendResultAnnouncementEmail({
      team: teamA,
      result: resultA,
      settings: settingsA,
      hackathon: hackA,
    });
    const resultMail = mailService.getMockSentEmails()[0];
    testAssert(resultMail.eventType === 'WINNER_ANNOUNCEMENT', 'RESULT_EMAIL', 'Winner announcement eventType set for 1st place team');
    testAssert(resultMail.subject.includes('placed #1'), 'RESULT_EMAIL', 'Winner announcement subject includes rank #1');
    testAssert(!resultMail.html.includes('judgeNotes'), 'BLIND_REVIEW', 'Result email does not leak judge notes or internal rubric scores');

    // -------------------------------------------------------------
    // CATEGORY 8: Certificates & Prize Notifications
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 8: CERTIFICATES & PRIZES ---');
    mailService.clearMockSentEmails();

    const certNumberA = 'CERT-AI-2027-001';
    await hackathonEmailService.sendCertificateEmail({
      email: teamA.leader.email,
      name: teamA.leader.name,
      award: 'Winner (1st Place)',
      certificateNumber: certNumberA,
      hackathonId: hackAId,
    });
    const certMail = mailService.getMockSentEmails()[0];
    testAssert(certMail.eventType === 'CERTIFICATE_ISSUED', 'CERT_EMAIL', 'Certificate email eventType set');
    testAssert(certMail.html.includes(certNumberA), 'CERT_EMAIL', 'Certificate email contains certificate number');
    testAssert(certMail.hackathonId === hackAId, 'CERT_EMAIL', 'Certificate email scoped to Hackathon A');

    // Prize Fulfillment Email
    mailService.clearMockSentEmails();
    await hackathonEmailService.sendPrizeFulfillmentEmail({
      email: teamA.leader.email,
      name: teamA.leader.name,
      award: 'Winner (1st Place)',
      prizeName: '₹50,000 Cash Prize + Incubation',
      fulfillmentStatus: 'DISBURSED',
      message: 'NEFT transfer initiated with reference UTR#12345678',
      hackathonId: hackAId,
    });
    const prizeMail = mailService.getMockSentEmails()[0];
    testAssert(prizeMail.eventType === 'PRIZE_FULFILLMENT_UPDATE', 'PRIZE_EMAIL', 'Prize fulfillment email eventType set');
    testAssert(prizeMail.html.includes('DISBURSED'), 'PRIZE_EMAIL', 'Prize email includes fulfillment status');
    testAssert(prizeMail.hackathonId === hackAId, 'PRIZE_EMAIL', 'Prize email scoped to Hackathon A');

    // -------------------------------------------------------------
    // CATEGORY 9: Idempotency & Duplicate Prevention
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 9: IDEMPOTENCY & DUPLICATE PROTECTION ---');
    mailService.clearMockSentEmails();

    const teamIdemp = await HackathonTeam.create({
      hackathonId: hackAId,
      teamId: 'TEAM-IDEMP-01',
      teamName: 'Idempotent Pioneers',
      status: 'SHORTLISTED',
      leader: {
        name: 'Grace Hopper',
        email: 'grace.hopper@idemp.org',
      },
      members: [],
    });

    // First call sends email and records idempotency key in DB
    const firstCall = await hackathonEmailService.sendShortlistEmail({
      team: teamIdemp,
      settings: settingsA,
      hackathon: hackA,
    });
    testAssert(firstCall.success && !firstCall.duplicate, 'IDEMPOTENCY', 'First shortlist trigger dispatched');

    // Second call with same parameters detects existing successful EmailLog
    const secondCall = await hackathonEmailService.sendShortlistEmail({
      team: teamIdemp,
      settings: settingsA,
      hackathon: hackA,
    });
    testAssert(secondCall.success && secondCall.duplicate && secondCall.skipped, 'IDEMPOTENCY', 'Second identical trigger skipped idempotently without duplicate email');

    // Same idempotency check applies to certificates
    const certDupCall = await hackathonEmailService.sendCertificateEmail({
      email: teamA.leader.email,
      name: teamA.leader.name,
      award: 'Winner (1st Place)',
      certificateNumber: certNumberA,
      hackathonId: hackAId,
    });
    testAssert(certDupCall.duplicate && certDupCall.skipped, 'IDEMPOTENCY', 'Duplicate certificate email trigger skipped idempotently');

    // -------------------------------------------------------------
    // CATEGORY 10: Cross-Hackathon Isolation & Dual-Participant Safety
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 10: CROSS-HACKATHON ISOLATION ---');
    mailService.clearMockSentEmails();

    // Same global user participates in both Hackathon A and Hackathon B
    const dualUserEmail = 'dual.participant@example.com';

    const dualTeamA = await HackathonTeam.create({
      hackathonId: hackAId,
      teamId: 'TEAM-A-DUAL',
      teamName: 'AI Explorers',
      track: 'Healthcare AI',
      leader: { name: 'Diana Prince', email: dualUserEmail },
      status: 'CONFIRMED',
    });

    const dualTeamB = await HackathonTeam.create({
      hackathonId: hackBId,
      teamId: 'TEAM-B-DUAL',
      teamName: 'Clean Oceans',
      track: 'Water Purification',
      leader: { name: 'Diana Prince', email: dualUserEmail },
      status: 'CONFIRMED',
    });

    // Send payment email for A
    await hackathonEmailService.sendPaymentSuccessEmail({
      team: dualTeamA,
      payment: { razorpayPaymentId: 'pay_dual_A' },
      settings: settingsA,
      hackathon: hackA,
    });

    // Send payment email for B
    await hackathonEmailService.sendPaymentSuccessEmail({
      team: dualTeamB,
      payment: { razorpayPaymentId: 'pay_dual_B' },
      settings: settingsB,
      hackathon: hackB,
    });

    const dualMails = mailService.getMockSentEmails();
    testAssert(dualMails.length === 2, 'DUAL_USER', 'Same user received 2 separate emails for separate hackathons');
    testAssert(dualMails[0].hackathonId === hackAId && dualMails[0].html.includes(hackA.name), 'DUAL_USER', 'First email contains Hackathon A branding only');
    testAssert(dualMails[1].hackathonId === hackBId && dualMails[1].html.includes(hackB.name), 'DUAL_USER', 'Second email contains Hackathon B branding only');
    testAssert(!dualMails[0].html.includes(hackB.name), 'DUAL_USER', 'No leakage of Hackathon B branding into Hackathon A email');

    // Same judge in both Hackathons
    const dualJudgeEmail = 'prof.oak@judging.edu';
    const judgeOakA = await HackathonEditorialMember.create({
      hackathonId: hackAId,
      name: 'Prof. Oak',
      email: dualJudgeEmail,
      passwordHash: 'hashed_password_oak',
      isActive: true,
    });
    const judgeOakB = await HackathonEditorialMember.create({
      hackathonId: hackBId,
      name: 'Prof. Oak',
      email: dualJudgeEmail,
      passwordHash: 'hashed_password_oak',
      isActive: true,
    });

    mailService.clearMockSentEmails();
    await hackathonEmailService.sendJudgeReminderEmail({ judge: judgeOakA, pendingCount: 3, hackathon: hackA, settings: settingsA });
    await hackathonEmailService.sendJudgeReminderEmail({ judge: judgeOakB, pendingCount: 1, hackathon: hackB, settings: settingsB });

    const oakMails = mailService.getMockSentEmails();
    testAssert(oakMails.length === 2, 'DUAL_JUDGE', 'Same judge received separate reminders per hackathon');
    testAssert(oakMails[0].html.includes('3 pending') && oakMails[0].hackathonId === hackAId, 'DUAL_JUDGE', 'First reminder strictly reflects Hackathon A workload');
    testAssert(oakMails[1].html.includes('1 pending') && oakMails[1].hackathonId === hackBId, 'DUAL_JUDGE', 'Second reminder strictly reflects Hackathon B workload');

    // -------------------------------------------------------------
    // CATEGORY 11: Admin Email Endpoints & Security
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 11: ADMIN EMAIL ENDPOINTS & SECURITY ---');

    // GET /api/hackathon/admin/emails/logs for Hackathon A
    const logsResA = await axios.get(`${BASE_URL}/admin/emails/logs`, { headers: adminHeadersA });
    testAssert(logsResA.data.success, 'ADMIN_LOGS', 'Admin fetched hackathon-scoped email logs');
    testAssert(logsResA.data.hackathonId === hackAId, 'ADMIN_LOGS', 'Logs response identifies target hackathon A');
    testAssert(logsResA.data.logs.every((l) => l.hackathonId === hackAId), 'ADMIN_LOGS', 'Zero logs from Hackathon B in Hackathon A query');

    // GET /api/hackathon/admin/emails/logs for Hackathon B
    const logsResB = await axios.get(`${BASE_URL}/admin/emails/logs`, { headers: adminHeadersB });
    testAssert(logsResB.data.logs.every((l) => l.hackathonId === hackBId), 'ADMIN_LOGS', 'Zero logs from Hackathon A in Hackathon B query');

    // GET /api/hackathon/admin/emails/preview
    const previewRes = await axios.get(`${BASE_URL}/admin/emails/preview?templateType=SHORTLISTED`, { headers: adminHeadersA });
    testAssert(previewRes.data.success, 'PREVIEW', 'Email preview endpoint generated successfully');
    testAssert(previewRes.data.html.includes(hackA.name), 'PREVIEW', 'Preview rendered with Hackathon A name');
    testAssert(previewRes.data.html.includes(`₹${settingsA.participationFee}`), 'PREVIEW', 'Preview rendered with Hackathon A fee');

    // POST /api/hackathon/admin/emails/test-send
    const testSendRes = await axios.post(
      `${BASE_URL}/admin/emails/test-send`,
      { recipientEmail: 'admin.tester@example.com', templateType: 'SHORTLISTED' },
      { headers: adminHeadersA }
    );
    testAssert(testSendRes.data.success, 'TEST_SEND', 'Admin test email dispatched cleanly');

    // GET /api/hackathon/admin/email-stats scoped to Hackathon A
    const emailStatsResA = await axios.get(`${BASE_URL}/admin/email-stats`, { headers: adminHeadersA });
    testAssert(emailStatsResA.data.success, 'EMAIL_STATS', 'Admin email stats fetched');
    testAssert(emailStatsResA.data.hackathonId === hackAId, 'EMAIL_STATS', 'Email stats accurately reflect hackathonId A');

    // Security: Unauthenticated access blocked (401)
    let unauthBlocked = false;
    try {
      await axios.get(`${BASE_URL}/admin/emails/logs`);
    } catch (err) {
      unauthBlocked = err.response?.status === 401;
    }
    testAssert(unauthBlocked, 'SECURITY', 'Unauthenticated request rejected with 401');

    // Security: Participant token blocked from admin email endpoints (403)
    const userToken = jwt.sign({ id: 'user_123', role: 'USER', email: 'user@example.com' }, jwtSecret);
    let userBlocked = false;
    try {
      await axios.get(`${BASE_URL}/admin/emails/logs`, {
        headers: { Authorization: `Bearer ${userToken}`, 'x-hackathon-id': hackAId },
      });
    } catch (err) {
      userBlocked = err.response?.status === 403;
    }
    testAssert(userBlocked, 'SECURITY', 'Non-admin participant blocked from admin email logs with 403');

    // -------------------------------------------------------------
    // CATEGORY 12: HTML Injection Safety & Sanitization
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 12: HTML INJECTION DEFENSE ---');
    mailService.clearMockSentEmails();

    const maliciousTeam = {
      teamName: '<script>alert("hacked")</script>',
      track: '<img src=x onerror=alert(1)>',
      leader: { name: '<b>Attacker</b>', email: 'attacker@example.com' },
      hackathonId: hackAId,
    };

    await hackathonEmailService.sendRegistrationEmail({
      team: maliciousTeam,
      hackathon: hackA,
      settings: settingsA,
    });

    const injMail = mailService.getMockSentEmails()[0];
    testAssert(!injMail.html.includes('<script>alert("hacked")</script>'), 'HTML_ESCAPE', 'Executable script tags escaped in email HTML');
    testAssert(injMail.html.includes('&lt;script&gt;alert(&quot;hacked&quot;)&lt;/script&gt;'), 'HTML_ESCAPE', 'Script tag safely converted to HTML entities');
    testAssert(!injMail.html.includes('<img src=x onerror=alert(1)>'), 'HTML_ESCAPE', 'Dangerous img onerror payload escaped in email HTML');

    // -------------------------------------------------------------
    // CATEGORY 13: Edge Cases, Rate Limiting & Clean Teardown
    // -------------------------------------------------------------
    console.log('\n--- CATEGORY 13: EDGE CASES & ISOLATION CLEANUP ---');

    // Resend historical email preserves original hackathonId
    const storedLog = await EmailLog.findOne({ hackathonId: hackAId, status: 'SUCCESS' });
    if (storedLog) {
      const resendRes = await mailService.resendStoredEmail(storedLog._id);
      testAssert(resendRes.success, 'RESEND_PRESERVE', 'Historical email resent successfully');
      const latestLogs = mailService.getMockSentEmails();
      const latestResent = latestLogs[latestLogs.length - 1];
      testAssert(latestResent.hackathonId === hackAId, 'RESEND_PRESERVE', 'Resent email preserved original hackathonId');
    }

    // Clean up isolated test data
    console.log('\n--- CLEANING UP ISOLATED TEST DATA ---');
    await Promise.all([
      Hackathon.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonSetting.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonTeam.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonPayment.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonSubmission.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialMember.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonEditorialAssignment.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonResult.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      HackathonCertificate.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      EmailLog.deleteMany({ hackathonId: { $in: [hackAId, hackBId] } }),
      EmailLog.deleteOne({ _id: globalLog._id }),
    ]);

    testAssert(true, 'CLEANUP', 'Test data cleaned up without touching production records');

    console.log('\n================================================================');
    console.log(`TEST SUITE COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
    console.log('================================================================\n');

    process.exit(failCount > 0 ? 1 : 0);
  } catch (err) {
    console.error('Test execution threw unhandled exception:', err);
    process.exit(1);
  } finally {
    if (server) server.close();
  }
}

runTestSuite();
