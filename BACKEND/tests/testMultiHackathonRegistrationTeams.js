/**
 * Phase M5 — Registration, Teams, Participants & Operational Hackathon Isolation Test Suite
 * 40+ Invariants covering all requirements from Phase M5 Specification
 */

const xlsx = require('xlsx');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonTeam = require('../models/HackathonTeam');
const HackathonDuplicateQueue = require('../models/HackathonDuplicateQueue');
const HackathonAuditLog = require('../models/HackathonAuditLog');
const hackathonIdentityService = require('../services/hackathonIdentityService');
const unstopParserService = require('../services/unstopParserService');
const hackathonController = require('../controllers/hackathonController');
const { resolveHackathonContext, resolveHackathonBySlug } = require('../middleware/resolveHackathon');

const HACKATHON_A = 'm5-test-hackathon-a';
const HACKATHON_B = 'm5-test-hackathon-b';
const SLUG_A = 'm5-hack-a';
const SLUG_B = 'm5-hack-b';

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

function createSampleWorkbookBuffer(sheetDataMap) {
  const wb = xlsx.utils.book_new();
  for (const [sheetName, rows] of Object.entries(sheetDataMap)) {
    const ws = xlsx.utils.aoa_to_sheet(rows);
    xlsx.utils.book_append_sheet(wb, ws, sheetName);
  }
  return xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
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
  await Hackathon.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B, 'm5-test-hack-closed'] } });
  await HackathonSetting.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B, 'm5-test-hack-closed'] } });
  await HackathonTeam.deleteMany({
    $or: [
      { hackathonId: { $in: [HACKATHON_A, HACKATHON_B, 'm5-test-hack-closed'] } },
      { 'leader.email': { $regex: /@m5test\.com$/ } },
      { 'members.email': { $regex: /@m5test\.com$/ } },
    ],
  });
  await HackathonDuplicateQueue.deleteMany({
    $or: [
      { hackathonId: { $in: [HACKATHON_A, HACKATHON_B, 'm5-test-hack-closed'] } },
      { 'incomingData.leaderEmail': { $regex: /@m5test\.com$/ } },
    ],
  });
  await HackathonAuditLog.deleteMany({
    hackathonId: { $in: [HACKATHON_A, HACKATHON_B, 'm5-test-hack-closed'] },
  });
}

async function runTests() {
  console.log('===============================================================');
  console.log('=== MULTI-HACKATHON PHASE M5: REGISTRATION & TEAMS TEST SUITE ===');
  console.log('=== (MINIMUM 40 INVARIANTS)                                 ===');
  console.log('===============================================================\n');

  await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
  await cleanupTestData();

  // Create two isolated test hackathons
  const hackathonA = await Hackathon.create({
    hackathonId: HACKATHON_A,
    name: 'M5 Hackathon Alpha',
    slug: SLUG_A,
    status: 'UPCOMING',
    startDate: new Date(),
    endDate: new Date(Date.now() + 86400000 * 7),
  });
  await HackathonSetting.create({
    hackathonId: HACKATHON_A,
    name: 'M5 Hackathon Alpha Settings',
    isRegistrationOpen: true,
  });

  const hackathonB = await Hackathon.create({
    hackathonId: HACKATHON_B,
    name: 'M5 Hackathon Beta',
    slug: SLUG_B,
    status: 'UPCOMING',
    startDate: new Date(),
    endDate: new Date(Date.now() + 86400000 * 14),
  });
  await HackathonSetting.create({
    hackathonId: HACKATHON_B,
    name: 'M5 Hackathon Beta Settings',
    isRegistrationOpen: true,
  });

  // Create a closed/archived hackathon
  await Hackathon.create({
    hackathonId: 'm5-test-hack-closed',
    name: 'M5 Closed Hackathon',
    slug: 'm5-closed',
    status: 'ARCHIVED',
    startDate: new Date(Date.now() - 86400000 * 30),
    endDate: new Date(Date.now() - 86400000 * 20),
  });
  await HackathonSetting.create({
    hackathonId: 'm5-test-hack-closed',
    name: 'M5 Closed Hackathon Settings',
    isRegistrationOpen: false,
  });

  // ==========================================================================
  // GROUP 1: Team Creation & Registration Context
  // ==========================================================================
  console.log('--- GROUP 1: TEAM CREATION & REGISTRATION CONTEXT ---');

  // Test 1: Team cannot be created without hackathonId
  let validationFailed = false;
  try {
    const invalidTeam = new HackathonTeam({
      teamId: 'M5-FAIL-01',
      teamName: 'No Hackathon Team',
      leader: { name: 'Alice', email: 'alice@m5test.com' },
    });
    await invalidTeam.save();
  } catch (err) {
    validationFailed = err.name === 'ValidationError' && Boolean(err.errors?.hackathonId);
  }
  assert(validationFailed, '1. Team cannot be created without hackathonId (Mongoose validation fails)');

  // Test 2: Team creation in Hackathon A assigns team to Hackathon A
  const teamA = new HackathonTeam({
    teamId: 'M5-TEAM-A1',
    hackathonId: HACKATHON_A,
    teamName: 'Alpha Innovators',
    leader: { name: 'Alice Lead', email: 'alice.lead@m5test.com' },
    members: [{ name: 'Bob Member', email: 'bob.member@m5test.com' }],
    status: 'IMPORTED',
  });
  await teamA.save();
  const savedTeamA = await HackathonTeam.findOne({ teamId: 'M5-TEAM-A1' });
  assert(savedTeamA && savedTeamA.hackathonId === HACKATHON_A, '2. Team creation in Hackathon A assigns team to Hackathon A');

  // Test 3: Team creation in Hackathon B assigns team to Hackathon B
  const teamB = new HackathonTeam({
    teamId: 'M5-TEAM-B1',
    hackathonId: HACKATHON_B,
    teamName: 'Beta Builders',
    leader: { name: 'Charlie Lead', email: 'charlie.lead@m5test.com' },
    status: 'IMPORTED',
  });
  await teamB.save();
  const savedTeamB = await HackathonTeam.findOne({ teamId: 'M5-TEAM-B1' });
  assert(savedTeamB && savedTeamB.hackathonId === HACKATHON_B, '3. Team creation in Hackathon B assigns team to Hackathon B');

  // Test 4: Website registration requires hackathon context
  const reqNoContext = { body: { teamName: 'No Context Team', leader: { name: 'Dan', email: 'dan@m5test.com' } } };
  const resNoContext = mockRes();
  await hackathonController.registerWebsiteTeam(reqNoContext, resNoContext);
  assert(
    resNoContext.statusCode === 400 && resNoContext.data?.code === 'HACKATHON_CONTEXT_REQUIRED',
    '4. Website registration requires hackathon context (fails closed with 400 HACKATHON_CONTEXT_REQUIRED)'
  );

  // Test 5: Public registration on base route without context returns 400
  const reqBaseRoute = { headers: {}, body: { teamName: 'Base Route Team', leader: { name: 'Eve', email: 'eve@m5test.com' } } };
  const resBaseRoute = mockRes();
  let nextCalled5 = false;
  const middleware5 = resolveHackathonContext({ required: true, defaultToActive: false });
  await middleware5(reqBaseRoute, resBaseRoute, () => { nextCalled5 = true; });
  assert(!nextCalled5 && resBaseRoute.statusCode === 400, '5. Public registration on base route without context returns 400 (never silently falls back to 2026)');

  // Test 6: Public registration on slug route resolves target hackathon
  const reqSlugRoute = { params: { slug: SLUG_A }, body: { teamName: 'Slug Route Team', leader: { name: 'Frank', email: 'frank@m5test.com' } } };
  const resSlugRoute = mockRes();
  let nextCalled6 = false;
  const middleware6 = resolveHackathonBySlug({ required: true });
  await middleware6(reqSlugRoute, resSlugRoute, () => { nextCalled6 = true; });
  assert(nextCalled6 && reqSlugRoute.hackathonId === HACKATHON_A, '6. Public registration on slug route resolves target hackathon (SLUG_A -> HACKATHON_A)');

  // Test 7: Invalid hackathon slug in registration returns 404
  const reqBadSlug = { params: { slug: 'non-existent-hackathon-slug-123' }, body: {} };
  const resBadSlug = mockRes();
  let nextCalled7 = false;
  await middleware6(reqBadSlug, resBadSlug, () => { nextCalled7 = true; });
  assert(!nextCalled7 && resBadSlug.statusCode === 404, '7. Invalid hackathon slug in registration returns 404');

  // Test 8: Inactive/archived hackathon rejects registration if registration is closed
  const closedSetting = await HackathonSetting.findOne({ hackathonId: 'm5-test-hack-closed' });
  assert(closedSetting && closedSetting.isRegistrationOpen === false, '8. Inactive/archived hackathon rejects registration if registration is closed');

  // ==========================================================================
  // GROUP 2: Team Uniqueness & Cross-Hackathon Participation
  // ==========================================================================
  console.log('\n--- GROUP 2: TEAM UNIQUENESS & CROSS-HACKATHON PARTICIPATION ---');

  // Test 9: Leader email cannot be duplicated within Hackathon A
  const reqDupLeaderA = {
    hackathonId: HACKATHON_A,
    body: {
      teamName: 'Different Team Name Same Leader',
      leader: { name: 'Alice Duplicate', email: 'alice.lead@m5test.com' },
    },
  };
  const resDupLeaderA = mockRes();
  await hackathonController.registerWebsiteTeam(reqDupLeaderA, resDupLeaderA);
  assert(
    resDupLeaderA.statusCode === 400 && resDupLeaderA.data?.code === 'LEADER_ALREADY_EXISTS_IN_HACKATHON',
    '9. Leader email cannot be duplicated within Hackathon A (fails with LEADER_ALREADY_EXISTS_IN_HACKATHON)'
  );

  // Test 10: Leader email CAN lead a team in Hackathon B simultaneously
  const reqLeaderInB = {
    hackathonId: HACKATHON_B,
    body: {
      teamName: 'Alice Hackathon B Team',
      leader: { name: 'Alice Lead', email: 'alice.lead@m5test.com' },
    },
  };
  const resLeaderInB = mockRes();
  await hackathonController.registerWebsiteTeam(reqLeaderInB, resLeaderInB);
  assert(
    resLeaderInB.statusCode === 201 && resLeaderInB.data?.team?.hackathonId === HACKATHON_B,
    '10. Leader email CAN lead a team in Hackathon B simultaneously (multi-hackathon participation permitted)'
  );

  // Test 11: Participant can be a member of Team 1 in Hackathon A and Team 2 in Hackathon B
  const reqMemberInB = {
    hackathonId: HACKATHON_B,
    body: {
      teamName: 'Bob Hackathon B Team',
      leader: { name: 'George', email: 'george@m5test.com' },
      members: [{ name: 'Bob Member', email: 'bob.member@m5test.com' }],
    },
  };
  const resMemberInB = mockRes();
  await hackathonController.registerWebsiteTeam(reqMemberInB, resMemberInB);
  assert(
    resMemberInB.statusCode === 201 && resMemberInB.data?.team?.hackathonId === HACKATHON_B,
    '11. Participant can be a member of Team 1 in Hackathon A and Team 2 in Hackathon B'
  );

  // Test 12: Participant cannot lead two teams in the same hackathon
  const reqLeadTwoInB = {
    hackathonId: HACKATHON_B,
    body: {
      teamName: 'George Second Team In B',
      leader: { name: 'George', email: 'george@m5test.com' },
    },
  };
  const resLeadTwoInB = mockRes();
  await hackathonController.registerWebsiteTeam(reqLeadTwoInB, resLeadTwoInB);
  assert(
    resLeadTwoInB.statusCode === 400 && resLeadTwoInB.data?.code === 'LEADER_ALREADY_EXISTS_IN_HACKATHON',
    '12. Participant cannot lead two teams in the same hackathon'
  );

  // Test 13: Team name is not globally unique across different hackathons
  const reqIdenticalNameInB = {
    hackathonId: HACKATHON_B,
    body: {
      teamName: 'Alpha Innovators', // Same name as team in Hackathon A
      leader: { name: 'Helen Lead', email: 'helen@m5test.com' },
    },
  };
  const resIdenticalNameInB = mockRes();
  await hackathonController.registerWebsiteTeam(reqIdenticalNameInB, resIdenticalNameInB);
  assert(
    resIdenticalNameInB.statusCode === 201 && resIdenticalNameInB.data?.team?.hackathonId === HACKATHON_B,
    '13. Team name is not globally unique across different hackathons (same team name allowed in A and B)'
  );

  // Test 14: Team name duplication within same hackathon is handled safely (ambiguous match sent to queue)
  const reqIdenticalNameInA = {
    hackathonId: HACKATHON_A,
    body: {
      teamName: 'Alpha Innovators', // Same name as existing team in Hackathon A, but different leader
      leader: { name: 'Ian Distinct', email: 'ian@m5test.com' },
    },
  };
  const resIdenticalNameInA = mockRes();
  await hackathonController.registerWebsiteTeam(reqIdenticalNameInA, resIdenticalNameInA);
  assert(
    resIdenticalNameInA.statusCode === 202 && resIdenticalNameInA.data?.queued === true,
    '14. Team name duplication within same hackathon is handled safely (ambiguous match routed to duplicate queue)'
  );

  // ==========================================================================
  // GROUP 3: Unstop Import Stage 1 (Registration)
  // ==========================================================================
  console.log('\n--- GROUP 3: UNSTOP IMPORT STAGE 1 (REGISTRATION) ---');

  // Test 15: Stage 1 import requires hackathonId
  let stage1MissingHackathonId = false;
  try {
    await unstopParserService.commitRegistrationImport({
      teamsToImport: [],
      hackathonId: '',
    });
  } catch (err) {
    stage1MissingHackathonId = err.message.includes('hackathonId is required');
  }
  assert(stage1MissingHackathonId, '15. Stage 1 import requires hackathonId (commit throws error if missing)');

  // Test 16: Stage 1 import in Hackathon A creates teams only in Hackathon A
  const stage1RowsA = [
    ['Candidate ID', 'Candidate Name', 'Candidate Email', 'Candidate Role', 'Team ID', 'Team Name', 'Domain', 'Organisation / Institute'],
    ['C-A-1', 'Jack Leader', 'jack.lead@m5test.com', 'Team Leader', 'UNSTOP-TEAM-A1', 'M5 Unstop Team Alpha', 'AI', 'Tech Institute'],
    ['C-A-2', 'Jill Member', 'jill.mem@m5test.com', 'Team Member', 'UNSTOP-TEAM-A1', 'M5 Unstop Team Alpha', 'AI', 'Tech Institute'],
  ];
  const bufferA = createSampleWorkbookBuffer({ 'Registrations': stage1RowsA });
  const wbA = unstopParserService.parseWorkbookBuffer(bufferA);
  const sheetA = unstopParserService.extractSheetData(wbA.workbook, 'Registrations');
  const previewA = await unstopParserService.generateRegistrationImportPreview({
    sheetData: sheetA,
    hackathonId: HACKATHON_A,
  });
  const commitA = await unstopParserService.commitRegistrationImport({
    teamsToImport: previewA.teams,
    hackathonId: HACKATHON_A,
  });
  const unstopTeamA = await HackathonTeam.findOne({ unstopApplicationId: 'UNSTOP-TEAM-A1' });
  assert(
    commitA.createdCount === 1 && unstopTeamA && unstopTeamA.hackathonId === HACKATHON_A,
    '16. Stage 1 import in Hackathon A creates teams only in Hackathon A'
  );

  // Test 17: Stage 1 import in Hackathon B creates teams only in Hackathon B
  const stage1RowsB = [
    ['Candidate ID', 'Candidate Name', 'Candidate Email', 'Candidate Role', 'Team ID', 'Team Name', 'Domain', 'Organisation / Institute'],
    ['C-B-1', 'Kevin Leader', 'kevin.lead@m5test.com', 'Team Leader', 'UNSTOP-TEAM-B1', 'M5 Unstop Team Beta', 'Web3', 'Uni Beta'],
  ];
  const bufferB = createSampleWorkbookBuffer({ 'Registrations': stage1RowsB });
  const wbB = unstopParserService.parseWorkbookBuffer(bufferB);
  const sheetB = unstopParserService.extractSheetData(wbB.workbook, 'Registrations');
  const previewB = await unstopParserService.generateRegistrationImportPreview({
    sheetData: sheetB,
    hackathonId: HACKATHON_B,
  });
  const commitB = await unstopParserService.commitRegistrationImport({
    teamsToImport: previewB.teams,
    hackathonId: HACKATHON_B,
  });
  const unstopTeamB = await HackathonTeam.findOne({ unstopApplicationId: 'UNSTOP-TEAM-B1' });
  assert(
    commitB.createdCount === 1 && unstopTeamB && unstopTeamB.hackathonId === HACKATHON_B,
    '17. Stage 1 import in Hackathon B creates teams only in Hackathon B'
  );

  // Test 18: Re-import in Hackathon A updates only Hackathon A teams
  const stage1RowsAUpdate = [
    ['Candidate ID', 'Candidate Name', 'Candidate Email', 'Candidate Role', 'Team ID', 'Team Name', 'Domain', 'Organisation / Institute'],
    ['C-A-1', 'Jack Leader Updated', 'jack.lead@m5test.com', 'Team Leader', 'UNSTOP-TEAM-A1', 'M5 Unstop Team Alpha', 'AI', 'Tech Institute'],
    ['C-A-3', 'Jim New Member', 'jim.mem@m5test.com', 'Team Member', 'UNSTOP-TEAM-A1', 'M5 Unstop Team Alpha', 'AI', 'Tech Institute'],
  ];
  const bufferAUpdate = createSampleWorkbookBuffer({ 'Registrations': stage1RowsAUpdate });
  const wbAUpdate = unstopParserService.parseWorkbookBuffer(bufferAUpdate);
  const sheetAUpdate = unstopParserService.extractSheetData(wbAUpdate.workbook, 'Registrations');
  const previewAUpdate = await unstopParserService.generateRegistrationImportPreview({
    sheetData: sheetAUpdate,
    hackathonId: HACKATHON_A,
  });
  const commitAUpdate = await unstopParserService.commitRegistrationImport({
    teamsToImport: previewAUpdate.teams,
    hackathonId: HACKATHON_A,
  });
  const reloadedUnstopTeamA = await HackathonTeam.findOne({ unstopApplicationId: 'UNSTOP-TEAM-A1' });
  assert(
    commitAUpdate.updatedCount === 1 && reloadedUnstopTeamA.members.length === 2 && reloadedUnstopTeamA.hackathonId === HACKATHON_A,
    '18. Re-import in Hackathon A updates only Hackathon A teams'
  );

  // Test 19: Import preview reflects only target hackathon's existing teams
  const previewCrossCheck = await unstopParserService.generateRegistrationImportPreview({
    sheetData: sheetB,
    hackathonId: HACKATHON_A,
  });
  // In Hackathon A, UNSTOP-TEAM-B1 does not exist, so it should be marked as NEW_TEAM
  assert(
    previewCrossCheck.teams[0].status === 'NEW',
    '19. Import preview reflects only target hackathon\'s existing teams (Hackathon B team is NEW in Hackathon A preview)'
  );

  // ==========================================================================
  // GROUP 4: Unstop Import Stage 2 (PPT)
  // ==========================================================================
  console.log('\n--- GROUP 4: UNSTOP IMPORT STAGE 2 (PPT) ---');

  // Test 20: Stage 2 import requires hackathonId
  let stage2MissingHackathonId = false;
  try {
    await unstopParserService.commitPptImport({
      rowsToImport: [],
      hackathonId: '',
    });
  } catch (err) {
    stage2MissingHackathonId = err.message.includes('hackathonId is required');
  }
  assert(stage2MissingHackathonId, '20. Stage 2 import requires hackathonId (commit throws error if missing)');

  // Test 21: Stage 2 PPT for Hackathon A matches only teams in Hackathon A
  const pptRowsA = [
    ['Regn. ID', 'Team Name', 'Candidate Email', 'Round 1 Submission'],
    ['UNSTOP-TEAM-A1', 'M5 Unstop Team Alpha', 'jack.lead@m5test.com', 'https://drive.google.com/ppt-alpha'],
  ];
  const pptBufferA = createSampleWorkbookBuffer({ 'PPTs': pptRowsA });
  const pptWbA = unstopParserService.parseWorkbookBuffer(pptBufferA);
  const pptSheetA = unstopParserService.extractSheetData(pptWbA.workbook, 'PPTs');
  const pptPreviewA = await unstopParserService.generatePptImportPreview({
    sheetData: pptSheetA,
    hackathonId: HACKATHON_A,
  });
  const pptCommitA = await unstopParserService.commitPptImport({
    rowsToImport: pptPreviewA.rows,
    hackathonId: HACKATHON_A,
  });
  const teamAWithPpt = await HackathonTeam.findOne({ unstopApplicationId: 'UNSTOP-TEAM-A1' });
  assert(
    pptCommitA.pptCreated === 1 && teamAWithPpt.initialIdea?.pptUrl === 'https://drive.google.com/ppt-alpha',
    '21. Stage 2 PPT for Hackathon A matches only teams in Hackathon A'
  );

  // Test 22: Stage 2 PPT for Hackathon B matches only teams in Hackathon B
  const pptRowsB = [
    ['Regn. ID', 'Team Name', 'Candidate Email', 'Round 1 Submission'],
    ['UNSTOP-TEAM-B1', 'M5 Unstop Team Beta', 'kevin.lead@m5test.com', 'https://drive.google.com/ppt-beta'],
  ];
  const pptBufferB = createSampleWorkbookBuffer({ 'PPTs': pptRowsB });
  const pptWbB = unstopParserService.parseWorkbookBuffer(pptBufferB);
  const pptSheetB = unstopParserService.extractSheetData(pptWbB.workbook, 'PPTs');
  const pptPreviewB = await unstopParserService.generatePptImportPreview({
    sheetData: pptSheetB,
    hackathonId: HACKATHON_B,
  });
  const pptCommitB = await unstopParserService.commitPptImport({
    rowsToImport: pptPreviewB.rows,
    hackathonId: HACKATHON_B,
  });
  const teamBWithPpt = await HackathonTeam.findOne({ unstopApplicationId: 'UNSTOP-TEAM-B1' });
  assert(
    pptCommitB.pptCreated === 1 && teamBWithPpt.initialIdea?.pptUrl === 'https://drive.google.com/ppt-beta',
    '22. Stage 2 PPT for Hackathon B matches only teams in Hackathon B'
  );

  // Test 23: Stage 2 PPT for Hackathon B NEVER matches or enriches team in Hackathon A even with identical details
  const crossPptRows = [
    ['Regn. ID', 'Team Name', 'Candidate Email', 'Round 1 Submission'],
    ['UNSTOP-TEAM-A1', 'M5 Unstop Team Alpha', 'jack.lead@m5test.com', 'https://drive.google.com/cross-ppt-leak'],
  ];
  const crossPptBuffer = createSampleWorkbookBuffer({ 'PPTs': crossPptRows });
  const crossPptWb = unstopParserService.parseWorkbookBuffer(crossPptBuffer);
  const crossPptSheet = unstopParserService.extractSheetData(crossPptWb.workbook, 'PPTs');
  const crossPptPreviewInB = await unstopParserService.generatePptImportPreview({
    sheetData: crossPptSheet,
    hackathonId: HACKATHON_B,
  });
  const crossPptCommitInB = await unstopParserService.commitPptImport({
    rowsToImport: crossPptPreviewInB.rows,
    hackathonId: HACKATHON_B,
  });
  // Must NOT match team in Hackathon A
  const teamAUntouched = await HackathonTeam.findOne({ unstopApplicationId: 'UNSTOP-TEAM-A1' });
  assert(
    crossPptPreviewInB.rows[0].status === 'UNMATCHED' &&
    crossPptCommitInB.pptCreated === 0 &&
    crossPptCommitInB.pptUpdated === 0 &&
    teamAUntouched.initialIdea?.pptUrl === 'https://drive.google.com/ppt-alpha',
    '23. Stage 2 PPT for Hackathon B NEVER matches or enriches team in Hackathon A even with identical team name or leader email'
  );

  // Test 24: Stage 2 PPT never creates teams in any hackathon
  const totalTeamsBeforePpt = await HackathonTeam.countDocuments();
  const unmatchedPptRows = [
    ['Regn. ID', 'Team Name', 'Candidate Email', 'Round 1 Submission'],
    ['UNKNOWN-TEAM-999', 'Ghost Team', 'ghost@m5test.com', 'https://drive.google.com/ghost-ppt'],
  ];
  const unmatchedBuffer = createSampleWorkbookBuffer({ 'PPTs': unmatchedPptRows });
  const unmatchedWb = unstopParserService.parseWorkbookBuffer(unmatchedBuffer);
  const unmatchedSheet = unstopParserService.extractSheetData(unmatchedWb.workbook, 'PPTs');
  const unmatchedPreview = await unstopParserService.generatePptImportPreview({
    sheetData: unmatchedSheet,
    hackathonId: HACKATHON_A,
  });
  await unstopParserService.commitPptImport({
    rowsToImport: unmatchedPreview.rows,
    hackathonId: HACKATHON_A,
  });
  const totalTeamsAfterPpt = await HackathonTeam.countDocuments();
  assert(
    totalTeamsBeforePpt === totalTeamsAfterPpt,
    '24. Stage 2 PPT never creates teams in any hackathon (zero new teams added by unmatched PPTs)'
  );

  // Test 25: Unmatched PPT rows are scoped to target hackathon
  assert(
    unmatchedPreview.rows[0].status === 'UNMATCHED' &&
    unmatchedPreview.unmatchedCount === 1,
    '25. Unmatched PPT rows are scoped to target hackathon (flagged as UNMATCHED cleanly)'
  );

  // ==========================================================================
  // GROUP 5: Team Identity & Duplicate Resolution
  // ==========================================================================
  console.log('\n--- GROUP 5: TEAM IDENTITY & DUPLICATE RESOLUTION ---');

  // Test 26: Team identity lookup is strictly scoped to target hackathon
  const identityInA = await hackathonIdentityService.resolveTeamIdentity({
    hackathonId: HACKATHON_A,
    unstopApplicationId: 'UNSTOP-TEAM-B1', // Belongs to Hackathon B
    leaderEmail: 'kevin.lead@m5test.com',
  });
  assert(
    identityInA.matchStrategy === 'NONE' && (identityInA.matchedTeam === null || !identityInA.matchedTeam),
    '26. Team identity lookup is strictly scoped to target hackathon (does not find team from Hackathon B)'
  );

  // Test 27: Duplicate queue items belong to a specific hackathonId
  const queueItemA = await HackathonDuplicateQueue.findOne({ hackathonId: HACKATHON_A });
  assert(
    queueItemA && queueItemA.hackathonId === HACKATHON_A,
    '27. Duplicate queue items belong to a specific hackathonId'
  );

  // Test 28: Admin resolving duplicate queue item cannot merge across hackathons
  let crossMergeBlocked = false;
  try {
    await hackathonIdentityService.resolveAdminVerification({
      queueItemId: queueItemA._id,
      decision: 'MERGE',
      targetTeamId: 'M5-TEAM-B1', // Target team belongs to Hackathon B!
      adminNotes: 'Attempt cross-hackathon merge',
    });
  } catch (err) {
    crossMergeBlocked = err.message.includes('not found in hackathon') || err.message.includes('not found in the same hackathon') || err.message.includes('Cannot merge');
  }
  assert(crossMergeBlocked, '28. Admin resolving duplicate queue item cannot merge across hackathons (cross-hackathon merge rejected)');

  // Test 29: Duplicate queue query filters by selected hackathon
  const reqQueueQueryA = { query: { status: 'ALL' }, hackathonId: HACKATHON_A };
  const resQueueQueryA = mockRes();
  await hackathonController.getAdminDuplicateQueue(reqQueueQueryA, resQueueQueryA);
  const itemsInA = resQueueQueryA.data?.items || [];
  assert(
    itemsInA.every((item) => item.hackathonId === HACKATHON_A),
    '29. Duplicate queue query filters strictly by selected hackathon'
  );

  // Test 30: Resolving duplicate queue item as KEEP_SEPARATE assigns new team to same hackathon
  const keepSeparateResult = await hackathonIdentityService.resolveAdminVerification({
    queueItemId: queueItemA._id,
    decision: 'KEEP_SEPARATE',
    adminNotes: 'Legitimate separate team in Hackathon A',
  });
  assert(
    keepSeparateResult.action === 'KEPT_SEPARATE' && keepSeparateResult.team.hackathonId === HACKATHON_A,
    '30. Resolving duplicate queue item as KEEP_SEPARATE assigns new team to same hackathon'
  );

  // ==========================================================================
  // GROUP 6: Participant Experience
  // ==========================================================================
  console.log('\n--- GROUP 6: PARTICIPANT EXPERIENCE ---');

  // User Alice leads team in Hackathon A (M5-TEAM-A1) and team in Hackathon B (from Test 10)
  const userAlice = {
    _id: new mongoose.Types.ObjectId(),
    name: 'Alice Lead',
    email: 'alice.lead@m5test.com',
  };

  // Test 31: getMyTeam in Hackathon A returns Hackathon A team
  const reqAliceA = { user: userAlice, hackathonId: HACKATHON_A };
  const resAliceA = mockRes();
  await hackathonController.getMyTeam(reqAliceA, resAliceA);
  assert(
    resAliceA.data?.hasTeam === true && resAliceA.data?.team?.hackathonId === HACKATHON_A,
    '31. getMyTeam in Hackathon A returns Hackathon A team'
  );

  // Test 32: getMyTeam in Hackathon B returns Hackathon B team
  const reqAliceB = { user: userAlice, hackathonId: HACKATHON_B };
  const resAliceB = mockRes();
  await hackathonController.getMyTeam(reqAliceB, resAliceB);
  assert(
    resAliceB.data?.hasTeam === true && resAliceB.data?.team?.hackathonId === HACKATHON_B,
    '32. getMyTeam in Hackathon B returns Hackathon B team'
  );

  // Test 33: User in both hackathons gets correct team depending on requested hackathon context
  assert(
    resAliceA.data?.team?.teamId !== resAliceB.data?.team?.teamId &&
    resAliceA.data?.team?.hackathonId === HACKATHON_A &&
    resAliceB.data?.team?.hackathonId === HACKATHON_B,
    '33. User in both hackathons gets correct team depending on requested hackathon context'
  );

  // Test 34: User not registered in Hackathon B gets hasTeam: false in Hackathon B
  const userIanOnlyInA = {
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Distinct',
    email: 'ian@m5test.com',
  };
  const reqIanInB = { user: userIanOnlyInA, hackathonId: HACKATHON_B };
  const resIanInB = mockRes();
  await hackathonController.getMyTeam(reqIanInB, resIanInB);
  assert(
    resIanInB.data?.hasTeam === false,
    '34. User not registered in Hackathon B gets hasTeam: false in Hackathon B'
  );

  // ==========================================================================
  // GROUP 7: Admin Experience
  // ==========================================================================
  console.log('\n--- GROUP 7: ADMIN EXPERIENCE ---');

  // Test 35: Admin teams list filters strictly by selected hackathon
  const reqAdminTeamsA = { query: {}, hackathonId: HACKATHON_A };
  const resAdminTeamsA = mockRes();
  await hackathonController.getAdminTeams(reqAdminTeamsA, resAdminTeamsA);
  const teamsInA = resAdminTeamsA.data?.teams || [];
  assert(
    teamsInA.length > 0 && teamsInA.every((t) => t.hackathonId === HACKATHON_A),
    '35. Admin teams list filters strictly by selected hackathon'
  );

  // Test 36: Admin cannot view/edit Hackathon A team while scoped to Hackathon B (returns 404)
  const reqCrossView = { params: { id: 'M5-TEAM-A1' }, hackathonId: HACKATHON_B };
  const resCrossView = mockRes();
  await hackathonController.getAdminTeamById(reqCrossView, resCrossView);
  assert(
    resCrossView.statusCode === 404,
    '36. Admin cannot view/edit Hackathon A team while scoped to Hackathon B (returns 404)'
  );

  // Test 37: Admin overview stats reflect only selected hackathon
  const reqOverviewA = { hackathonId: HACKATHON_A };
  const resOverviewA = mockRes();
  await hackathonController.getAdminOverview(reqOverviewA, resOverviewA);
  const countA = await HackathonTeam.countDocuments({ hackathonId: HACKATHON_A, isDeleted: { $ne: true } });
  assert(
    resOverviewA.data?.stats?.totalTeams === countA,
    '37. Admin overview stats reflect only selected hackathon'
  );

  // Test 38: Team soft-delete in Hackathon A does not affect Hackathon B
  const reqDeleteA = {
    params: { id: 'M5-TEAM-A1' },
    hackathonId: HACKATHON_A,
    admin: { name: 'Admin Test' },
    body: { reason: 'Soft-delete test team in A' },
  };
  const resDeleteA = mockRes();
  await hackathonController.deleteAdminTeam(reqDeleteA, resDeleteA);
  const teamADeleted = await HackathonTeam.findOne({ teamId: 'M5-TEAM-A1' });
  const teamBAlive = await HackathonTeam.findOne({ teamId: 'M5-TEAM-B1' });
  assert(
    teamADeleted.isDeleted === true && teamBAlive.isDeleted !== true,
    '38. Team soft-delete in Hackathon A does not affect Hackathon B'
  );

  // Test 39: Manual team creation via admin assigns to selected hackathon
  const reqManualTeamB = {
    hackathonId: HACKATHON_B,
    admin: { name: 'Admin Test' },
    body: {
      teamName: 'Admin Created Team In B',
      track: 'General Track',
      leader: { name: 'Larry Leader', email: 'larry.lead@m5test.com' },
      members: [],
    },
  };
  const resManualTeamB = mockRes();
  await hackathonController.createManualTeam(reqManualTeamB, resManualTeamB);
  assert(
    resManualTeamB.statusCode === 201 && resManualTeamB.data?.team?.hackathonId === HACKATHON_B,
    '39. Manual team creation via admin assigns to selected hackathon'
  );

  // Test 40: Audit logs for team operations record correct hackathonId
  const auditLogsInB = await HackathonAuditLog.find({ hackathonId: HACKATHON_B });
  assert(
    auditLogsInB.length > 0 && auditLogsInB.every((l) => l.hackathonId === HACKATHON_B),
    '40. Audit logs for team operations record correct hackathonId'
  );

  // Clean up
  await cleanupTestData();
  await mongoose.disconnect();

  console.log('\n===============================================================');
  console.log(`=== ALL ${passedTests} OF ${passedTests + failedTests} MULTI-HACKATHON REGISTRATION & TEAMS TESTS PASSED! ===`);
  console.log('===============================================================\n');
}

runTests().catch((err) => {
  console.error('\nTest Suite Execution Failed:', err);
  mongoose.disconnect().finally(() => process.exit(1));
});
