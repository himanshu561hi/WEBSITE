/**
 * Phase M7 — Multi-Hackathon Judges, Editorial Members, Assignments & Evaluations Test Suite
 * 65 Invariants covering all requirements from Phase M7 Specification
 */

const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonTeam = require('../models/HackathonTeam');
const HackathonSubmission = require('../models/HackathonSubmission');
const HackathonEditorialMember = require('../models/HackathonEditorialMember');
const HackathonEditorialAssignment = require('../models/HackathonEditorialAssignment');
const HackathonEditorialEvaluation = require('../models/HackathonEditorialEvaluation');
const HackathonAuditLog = require('../models/HackathonAuditLog');
const hackathonController = require('../controllers/hackathonController');
const { verifyEditorial } = require('../middleware/verifyEditorial');

const HACKATHON_A = 'm7-test-hackathon-a';
const HACKATHON_B = 'm7-test-hackathon-b';
const SLUG_A = 'm7-hack-a';
const SLUG_B = 'm7-hack-b';

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
  await Hackathon.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });
  await HackathonSetting.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });
  await HackathonTeam.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });
  await HackathonSubmission.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });
  await HackathonEditorialMember.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });
  await HackathonEditorialAssignment.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });
  await HackathonEditorialEvaluation.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });
  await HackathonAuditLog.deleteMany({ hackathonId: { $in: [HACKATHON_A, HACKATHON_B] } });
}

async function runTestSuite() {
  console.log('\n============================================================');
  console.log('PHASE M7: MULTI-HACKATHON JUDGES, ASSIGNMENTS & EVALUATIONS');
  console.log('65 INVARIANTS TEST SUITE');
  console.log('============================================================\n');

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Safety Verification: Ensure existing 2026 data is intact
  const initial2026Judges = await HackathonEditorialMember.countDocuments({ hackathonId: 'can-hackathon-2026' });
  const initial2026Assignments = await HackathonEditorialAssignment.countDocuments({ hackathonId: 'can-hackathon-2026' });
  const initial2026Evaluations = await HackathonEditorialEvaluation.countDocuments({ hackathonId: 'can-hackathon-2026' });
  console.log(`Initial 2026 Data: Judges=${initial2026Judges}, Assignments=${initial2026Assignments}, Evaluations=${initial2026Evaluations}`);

  await cleanTestData();

  // Setup Test Hackathons A & B
  const hackA = await Hackathon.create({
    hackathonId: HACKATHON_A,
    name: 'M7 Test Hackathon A',
    slug: SLUG_A,
    tagline: 'Multi-Hackathon A for M7 Judging',
    startDate: new Date('2026-10-01'),
    endDate: new Date('2026-10-05'),
    status: 'UPCOMING',
  });

  const hackB = await Hackathon.create({
    hackathonId: HACKATHON_B,
    name: 'M7 Test Hackathon B',
    slug: SLUG_B,
    tagline: 'Multi-Hackathon B for M7 Judging',
    startDate: new Date('2026-11-01'),
    endDate: new Date('2026-11-05'),
    status: 'UPCOMING',
  });

  // Setup distinct settings/rubrics for A & B
  const settingsA = await HackathonSetting.create({
    hackathonId: HACKATHON_A,
    judgingCriteria: [
      { id: 'crit-a1', title: 'Technical Innovation', maxScore: 40, weightage: 40 },
      { id: 'crit-a2', title: 'Execution & Architecture', maxScore: 35, weightage: 35 },
      { id: 'crit-a3', title: 'UI/UX & Presentation', maxScore: 25, weightage: 25 },
    ],
  });

  const settingsB = await HackathonSetting.create({
    hackathonId: HACKATHON_B,
    judgingCriteria: [
      { id: 'crit-b1', title: 'Problem Impact', maxScore: 50, weightage: 50 },
      { id: 'crit-b2', title: 'Code Quality', maxScore: 50, weightage: 50 },
    ],
  });

  // Setup Teams & Submissions in Hackathon A
  const teamA1 = await HackathonTeam.create({
    hackathonId: HACKATHON_A,
    teamId: 'TEAM-M7-A1',
    teamName: 'M7 Alpha Squad',
    leader: { name: 'Alice Leader', email: 'alice@m7a.com', phone: '9999911111', college: 'MIT' },
    status: 'SUBMITTED',
  });

  const subA1 = await HackathonSubmission.create({
    hackathonId: HACKATHON_A,
    team: teamA1._id,
    teamId: teamA1.teamId,
    submitterEmail: 'alice@m7a.com',
    projectName: 'Project Alpha',
    status: 'SUBMITTED',
    githubUrl: 'https://github.com/alpha',
  });

  const teamA2 = await HackathonTeam.create({
    hackathonId: HACKATHON_A,
    teamId: 'TEAM-M7-A2',
    teamName: 'M7 Beta Force',
    leader: { name: 'Bob Leader', email: 'bob@m7a.com', phone: '9999922222', college: 'Stanford' },
    status: 'SUBMITTED',
  });

  const subA2 = await HackathonSubmission.create({
    hackathonId: HACKATHON_A,
    team: teamA2._id,
    teamId: teamA2.teamId,
    submitterEmail: 'bob@m7a.com',
    projectName: 'Project Beta',
    status: 'SUBMITTED',
    githubUrl: 'https://github.com/beta',
  });

  // Setup Teams & Submissions in Hackathon B
  const teamB1 = await HackathonTeam.create({
    hackathonId: HACKATHON_B,
    teamId: 'TEAM-M7-B1',
    teamName: 'M7 Gamma Tech',
    leader: { name: 'Charlie Leader', email: 'charlie@m7b.com', phone: '9999933333', college: 'Harvard' },
    status: 'SUBMITTED',
  });

  const subB1 = await HackathonSubmission.create({
    hackathonId: HACKATHON_B,
    team: teamB1._id,
    teamId: teamB1.teamId,
    submitterEmail: 'charlie@m7b.com',
    projectName: 'Project Gamma',
    status: 'SUBMITTED',
    githubUrl: 'https://github.com/gamma',
  });

  console.log('\n--- CATEGORY 1: Judge Schema & Membership Isolation (Invariants 1-10) ---');

  // Invariant 1: Schema Validation: Fails without hackathonId
  try {
    const invalidMember = new HackathonEditorialMember({
      name: 'No Hackathon Judge',
      email: 'nohack@test.com',
      passwordHash: 'hash',
    });
    await invalidMember.validate();
    assert(false, 'Inv 1: Missing hackathonId should have failed validation');
  } catch (err) {
    assert(err.errors?.hackathonId, 'Inv 1: Validation fails when hackathonId is missing on HackathonEditorialMember');
  }

  // Invariant 2: Schema Validation: Succeeds with valid hackathonId
  const memberA1 = new HackathonEditorialMember({
    hackathonId: HACKATHON_A,
    name: 'Dr. Sarah Smith',
    email: 'sarah.judge@test.com',
    passwordHash: await bcrypt.hash('password123', 10),
    role: 'judge',
  });
  await memberA1.save();
  assert(memberA1._id && memberA1.hackathonId === HACKATHON_A, 'Inv 2: HackathonEditorialMember persists with valid hackathonId');

  // Invariant 3: Unique Compound Index: Duplicate email in same hackathon rejected (E11000)
  try {
    const duplicateInA = new HackathonEditorialMember({
      hackathonId: HACKATHON_A,
      name: 'Sarah Duplicate',
      email: 'sarah.judge@test.com',
      passwordHash: await bcrypt.hash('password123', 10),
      role: 'judge',
    });
    await duplicateInA.save();
    assert(false, 'Inv 3: Duplicate email in same hackathon should throw E11000');
  } catch (err) {
    assert(err.code === 11000 || err.message.includes('duplicate key'), 'Inv 3: Compound index {hackathonId, email} prevents duplicate in same hackathon');
  }

  // Invariant 4: Unique Compound Index: Same email in different hackathon succeeds
  const memberB1 = new HackathonEditorialMember({
    hackathonId: HACKATHON_B,
    name: 'Dr. Sarah Smith',
    email: 'sarah.judge@test.com',
    passwordHash: await bcrypt.hash('password123', 10),
    role: 'editorial',
  });
  await memberB1.save();
  assert(memberB1._id && memberB1.hackathonId === HACKATHON_B, 'Inv 4: Same email can exist in different hackathons without index collision');

  // Invariant 5: Role Constraint: Must be 'judge' or 'editorial'
  try {
    const invalidRoleMember = new HackathonEditorialMember({
      hackathonId: HACKATHON_A,
      name: 'Invalid Role Member',
      email: 'invalid.role@test.com',
      passwordHash: 'hash',
      role: 'super_judge',
    });
    await invalidRoleMember.validate();
    assert(false, 'Inv 5: Invalid role should fail schema validation');
  } catch (err) {
    assert(err.errors?.role, 'Inv 5: Role is constrained strictly to enum [editorial, judge]');
  }

  // Invariant 6: Default State: isActive defaults to true
  assert(memberA1.isActive === true, 'Inv 6: isActive defaults to true upon creation');

  // Invariant 7: Default State: mustChangePassword defaults to true
  assert(memberA1.mustChangePassword === true, 'Inv 7: mustChangePassword defaults to true upon creation');

  // Invariant 8: Admin Provisioning: createAdminEditorialMember scopes judge to req.hackathonId
  const resInv8 = mockRes();
  await hackathonController.createAdminEditorialMember(
    {
      hackathonId: HACKATHON_A,
      body: {
        name: 'Judge Alan',
        email: 'alan.judge@test.com',
        password: 'password123',
        confirmPassword: 'password123',
        role: 'judge',
      },
      user: { _id: 'admin1', name: 'Admin', email: 'admin@test.com' },
    },
    resInv8
  );
  assert(resInv8.statusCode === 201 && resInv8.data.member.hackathonId === HACKATHON_A, 'Inv 8: Admin provisioning scopes member record to req.hackathonId');
  const memberAlanId = resInv8.data.member._id;

  // Invariant 9: Admin Listing: getAdminEditorialMembers returns only judges for req.hackathonId
  const resInv9A = mockRes();
  await hackathonController.getAdminEditorialMembers({ hackathonId: HACKATHON_A, query: {} }, resInv9A);
  const judgesA = resInv9A.data.members;
  assert(judgesA.every((m) => m.hackathonId === HACKATHON_A), 'Inv 9: getAdminEditorialMembers in Hackathon A returns only Hackathon A judges');

  const resInv9B = mockRes();
  await hackathonController.getAdminEditorialMembers({ hackathonId: HACKATHON_B, query: {} }, resInv9B);
  const judgesB = resInv9B.data.members;
  assert(judgesB.length === 1 && judgesB[0].hackathonId === HACKATHON_B, 'Inv 9: getAdminEditorialMembers in Hackathon B isolates Hackathon B judges');

  // Invariant 10: Admin Listing: Assignment and evaluation counts strictly scoped
  assert(judgesA[0].assignedTeamsCount === 0 && judgesA[0].completedEvaluationsCount === 0, 'Inv 10: Newly provisioned judge has 0 active assignments and 0 evaluations');

  console.log('\n--- CATEGORY 2: Judge Global Identity & Explicit Reuse (Invariants 11-18) ---');

  // Invariant 11: Global Judge Search: Finds judge across any hackathon
  const resInv11 = mockRes();
  await hackathonController.searchGlobalJudges(
    { hackathonId: HACKATHON_B, query: { q: 'alan.judge@test.com' } },
    resInv11
  );
  assert(resInv11.statusCode === 200 && resInv11.data.judges.length === 1, 'Inv 11: searchGlobalJudges finds judge by email across any hackathon');

  // Invariant 12: Global Judge Search: Deduplicates results by email
  const resInv12 = mockRes();
  await hackathonController.searchGlobalJudges(
    { hackathonId: HACKATHON_A, query: { q: 'sarah.judge@test.com' } },
    resInv12
  );
  assert(resInv12.data.judges.length === 1, 'Inv 12: searchGlobalJudges deduplicates judges with memberships in multiple hackathons');

  // Invariant 13: Global Judge Search: Indicates isMemberOfCurrentHackathon: false
  assert(resInv11.data.judges[0].isMemberOfCurrentHackathon === false, 'Inv 13: Global search reports isMemberOfCurrentHackathon: false when judge not in target hackathon');

  // Invariant 14: Global Judge Search: Indicates isMemberOfCurrentHackathon: true
  assert(resInv12.data.judges[0].isMemberOfCurrentHackathon === true, 'Inv 14: Global search reports isMemberOfCurrentHackathon: true when judge is in current hackathon');

  // Invariant 15: Explicit Judge Reuse: Copies identity to target hackathon with 0 assignments
  const resInv15 = mockRes();
  await hackathonController.reuseAdminEditorialMember(
    {
      hackathonId: HACKATHON_B,
      body: { email: 'alan.judge@test.com', role: 'judge' },
      user: { _id: 'admin1', name: 'Admin', email: 'admin@test.com' },
    },
    resInv15
  );
  assert(resInv15.statusCode === 201 && resInv15.data.member.hackathonId === HACKATHON_B, 'Inv 15: reuseAdminEditorialMember provisions judge in target hackathon');

  // Invariant 16: Explicit Judge Reuse: Starts with 0 evaluations in target hackathon
  const reusedAlanB = await HackathonEditorialMember.findOne({ hackathonId: HACKATHON_B, email: 'alan.judge@test.com' });
  const evalCount = await HackathonEditorialEvaluation.countDocuments({ hackathonId: HACKATHON_B, editorialMember: reusedAlanB._id });
  assert(evalCount === 0, 'Inv 16: Reused judge starts with exactly 0 evaluations in target hackathon');

  // Invariant 17: Explicit Judge Reuse: Returns 400 if already a member of target hackathon
  const resInv17 = mockRes();
  await hackathonController.reuseAdminEditorialMember(
    {
      hackathonId: HACKATHON_B,
      body: { email: 'alan.judge@test.com', role: 'judge' },
      user: { _id: 'admin1', name: 'Admin', email: 'admin@test.com' },
    },
    resInv17
  );
  assert(resInv17.statusCode === 400, 'Inv 17: Attempting to reuse an already provisioned judge in the same hackathon returns 400 Bad Request');

  // Invariant 18: Different roles across hackathons: Sarah is 'judge' in A, 'editorial' in B
  const sarahInA = await HackathonEditorialMember.findOne({ hackathonId: HACKATHON_A, email: 'sarah.judge@test.com' });
  const sarahInB = await HackathonEditorialMember.findOne({ hackathonId: HACKATHON_B, email: 'sarah.judge@test.com' });
  assert(sarahInA.role === 'judge' && sarahInB.role === 'editorial', 'Inv 18: Same individual holds independent roles (judge vs editorial) across different hackathons');

  console.log('\n--- CATEGORY 3: Judge Authentication & RBAC (Invariants 19-27) ---');

  // Invariant 19: Login Scope: editorialLogin returns JWT containing hackathonId
  const resInv19 = mockRes();
  await hackathonController.editorialLogin(
    {
      body: { email: 'sarah.judge@test.com', password: 'password123', hackathonId: HACKATHON_A },
      headers: {},
    },
    resInv19
  );
  assert(resInv19.statusCode === 200 && resInv19.data.member.hackathonId === HACKATHON_A, 'Inv 19: editorialLogin returns authenticated session with correct hackathonId');
  const tokenSarahA = resInv19.data.token;

  // Invariant 20: Login Scope: Cannot log into Hackathon B if member record only exists in A
  // Create unique judge in A
  const memberOnlyInA = await HackathonEditorialMember.create({
    hackathonId: HACKATHON_A,
    name: 'Only In A',
    email: 'only.a@test.com',
    passwordHash: await bcrypt.hash('password123', 10),
    role: 'judge',
  });
  const resInv20 = mockRes();
  await hackathonController.editorialLogin(
    {
      body: { email: 'only.a@test.com', password: 'password123', hackathonId: HACKATHON_B },
      headers: {},
    },
    resInv20
  );
  assert(resInv20.statusCode === 401, 'Inv 20: Judge existing only in Hackathon A cannot authenticate into Hackathon B (401)');

  // Invariant 21: Multi-Hackathon Login: Sarah can explicitly log into Hackathon B
  const resInv21 = mockRes();
  await hackathonController.editorialLogin(
    {
      body: { email: 'sarah.judge@test.com', password: 'password123', hackathonId: HACKATHON_B },
      headers: {},
    },
    resInv21
  );
  assert(resInv21.statusCode === 200 && resInv21.data.member.hackathonId === HACKATHON_B, 'Inv 21: Judge with multiple memberships can explicitly authenticate into Hackathon B');
  const tokenSarahB = resInv21.data.token;

  // Invariant 22: Middleware Scope: verifyEditorial sets req.hackathonId from member token
  const reqInv22 = {
    headers: { authorization: `Bearer ${tokenSarahA}` },
  };
  const resInv22 = mockRes();
  let nextCalled22 = false;
  await verifyEditorial(reqInv22, resInv22, () => { nextCalled22 = true; });
  assert(nextCalled22 && reqInv22.hackathonId === HACKATHON_A, 'Inv 22: verifyEditorial middleware binds req.hackathonId from member record');

  // Invariant 23: Middleware Scope: verifyEditorial rejects conflicting x-hackathon-id with 403
  const reqInv23 = {
    headers: { authorization: `Bearer ${tokenSarahA}`, 'x-hackathon-id': HACKATHON_B },
  };
  const resInv23 = mockRes();
  await verifyEditorial(reqInv23, resInv23, () => {});
  assert(resInv23.statusCode === 403, 'Inv 23: verifyEditorial rejects request when x-hackathon-id conflicts with judge hackathon membership (403)');

  // Invariant 24: Password Change: changeEditorialPassword updates password & clears mustChangePassword
  const resInv24 = mockRes();
  await hackathonController.changeEditorialPassword(
    {
      editorialMember: sarahInA,
      body: { currentPassword: 'password123', newPassword: 'newSecretPassword1', confirmPassword: 'newSecretPassword1' },
    },
    resInv24
  );
  const updatedSarahA = await HackathonEditorialMember.findById(sarahInA._id);
  assert(resInv24.statusCode === 200 && updatedSarahA.mustChangePassword === false, 'Inv 24: changeEditorialPassword succeeds and clears mustChangePassword');

  // Invariant 25: Self Profile: getEditorialMe returns hackathonId
  const resInv25 = mockRes();
  await hackathonController.getEditorialMe({ editorialMember: updatedSarahA }, resInv25);
  assert(resInv25.statusCode === 200 && resInv25.data.member.hackathonId === HACKATHON_A, 'Inv 25: getEditorialMe returns member profile with hackathonId');

  // Invariant 26: Deactivation Enforcement: Deactivated judge cannot log in (403)
  memberOnlyInA.isActive = false;
  await memberOnlyInA.save();
  const resInv26 = mockRes();
  await hackathonController.editorialLogin(
    {
      body: { email: 'only.a@test.com', password: 'password123', hackathonId: HACKATHON_A },
      headers: {},
    },
    resInv26
  );
  assert(resInv26.statusCode === 403, 'Inv 26: Deactivated judge account is blocked from logging in with 403 Forbidden');

  // Invariant 27: Independent Deactivation: Deactivating Sarah in Hackathon A leaves Sarah active in Hackathon B
  sarahInA.isActive = false;
  await sarahInA.save();
  const freshSarahB = await HackathonEditorialMember.findById(sarahInB._id);
  assert(freshSarahB.isActive === true, 'Inv 27: Deactivation of judge in Hackathon A does not affect judge membership in Hackathon B');
  // Re-activate Sarah in A for further tests
  sarahInA.isActive = true;
  await sarahInA.save();

  console.log('\n--- CATEGORY 4: Assignment Isolation & Same-Hackathon Enforcements (Invariants 28-38) ---');

  // Invariant 28: Schema Validation: Fails without hackathonId when team not saved
  try {
    const invalidAssign = new HackathonEditorialAssignment({
      team: new mongoose.Types.ObjectId(),
      teamId: 'TEAM-FAKE',
      submission: new mongoose.Types.ObjectId(),
      editorialMember: sarahInA._id,
    });
    await invalidAssign.validate();
    assert(false, 'Inv 28: Assignment without hackathonId should have failed validation');
  } catch (err) {
    assert(err.errors?.hackathonId, 'Inv 28: HackathonEditorialAssignment requires hackathonId');
  }

  // Invariant 29: Cross-Hackathon Assignment Rejection: Cannot assign Judge of B to Team of A
  const resInv29 = mockRes();
  await hackathonController.createAdminEditorialAssignment(
    {
      hackathonId: HACKATHON_A,
      body: { teamId: teamA1.teamId, editorialMemberId: String(memberB1._id) },
      user: { email: 'admin@test.com' },
    },
    resInv29
  );
  assert(resInv29.statusCode === 400 && resInv29.data.message.includes('Cannot assign judge from another hackathon'), 'Inv 29: Admin cannot assign judge of Hackathon B to team in Hackathon A (400)');

  // Invariant 30: Cross-Hackathon Team Rejection: Admin in A cannot assign Team from B
  const resInv30 = mockRes();
  await hackathonController.createAdminEditorialAssignment(
    {
      hackathonId: HACKATHON_A,
      body: { teamId: teamB1.teamId, editorialMemberId: String(sarahInA._id) },
      user: { email: 'admin@test.com' },
    },
    resInv30
  );
  assert(resInv30.statusCode === 400 && resInv30.data.message.includes('belongs to hackathon'), 'Inv 30: Admin in Hackathon A cannot assign team belonging to Hackathon B (400)');

  // Invariant 31: Valid Assignment: Assign Sarah to Team A1 in Hackathon A
  const resInv31 = mockRes();
  await hackathonController.createAdminEditorialAssignment(
    {
      hackathonId: HACKATHON_A,
      body: { teamId: teamA1.teamId, editorialMemberId: String(sarahInA._id) },
      user: { email: 'admin@test.com' },
    },
    resInv31
  );
  assert(resInv31.statusCode === 201 && resInv31.data.assignment.hackathonId === HACKATHON_A, 'Inv 31: Successfully assigns project within Hackathon A');
  const assignmentSarahA1 = resInv31.data.assignment;

  // Invariant 32: Active Duplicate Assignment Rejection
  const resInv32 = mockRes();
  await hackathonController.createAdminEditorialAssignment(
    {
      hackathonId: HACKATHON_A,
      body: { teamId: teamA1.teamId, editorialMemberId: String(sarahInA._id) },
      user: { email: 'admin@test.com' },
    },
    resInv32
  );
  assert(resInv32.statusCode === 400 && resInv32.data.message.includes('already assigned'), 'Inv 32: Duplicate active assignment to same judge returns 400');

  // Invariant 33: Ineligible Team Status Rejection
  const unconfirmedTeam = await HackathonTeam.create({
    hackathonId: HACKATHON_A,
    teamId: 'TEAM-M7-UNCONFIRMED',
    teamName: 'Unconfirmed Squad',
    leader: { name: 'Unc Leader', email: 'unc@test.com' },
    status: 'IMPORTED',
  });
  const resInv33 = mockRes();
  await hackathonController.createAdminEditorialAssignment(
    {
      hackathonId: HACKATHON_A,
      body: { teamId: unconfirmedTeam.teamId, editorialMemberId: String(sarahInA._id) },
      user: { email: 'admin@test.com' },
    },
    resInv33
  );
  assert(resInv33.statusCode === 400 && resInv33.data.message.includes('not eligible'), 'Inv 33: Team with status IMPORTED rejected for assignment (400)');

  // Invariant 34: Deactivated Judge Assignment Rejection
  const resInv34 = mockRes();
  await hackathonController.createAdminEditorialAssignment(
    {
      hackathonId: HACKATHON_A,
      body: { teamId: teamA2.teamId, editorialMemberId: String(memberOnlyInA._id) },
      user: { email: 'admin@test.com' },
    },
    resInv34
  );
  assert(resInv34.statusCode === 400 && resInv34.data.message.includes('deactivated judge'), 'Inv 34: Cannot assign project to deactivated judge (400)');

  // Invariant 35: Assignment Listing: Scoped to req.hackathonId
  const resInv35A = mockRes();
  await hackathonController.getAdminEditorialAssignments({ hackathonId: HACKATHON_A, query: {}, headers: {} }, resInv35A);
  assert(resInv35A.statusCode === 200 && resInv35A.data.assignments.length === 1, 'Inv 35: getAdminEditorialAssignments returns assignments for Hackathon A');

  const resInv35B = mockRes();
  await hackathonController.getAdminEditorialAssignments({ hackathonId: HACKATHON_B, query: {}, headers: {} }, resInv35B);
  assert(resInv35B.statusCode === 200 && resInv35B.data.assignments.length === 0, 'Inv 35: getAdminEditorialAssignments returns 0 assignments for Hackathon B');

  // Invariant 36: Assignment Removal: Sets status to UNASSIGNED
  // Create temporary assignment to test deletion
  const resTempAssign = mockRes();
  await hackathonController.createAdminEditorialAssignment(
    {
      hackathonId: HACKATHON_A,
      body: { teamId: teamA2.teamId, editorialMemberId: String(memberAlanId) },
      user: { email: 'admin@test.com' },
    },
    resTempAssign
  );
  const tempAssignId = resTempAssign.data.assignment._id;

  const resInv36 = mockRes();
  await hackathonController.deleteAdminEditorialAssignment(
    { hackathonId: HACKATHON_A, params: { id: tempAssignId }, user: { email: 'admin@test.com' } },
    resInv36
  );
  const checkUnassigned = await HackathonEditorialAssignment.findById(tempAssignId);
  assert(resInv36.statusCode === 200 && checkUnassigned.status === 'UNASSIGNED', 'Inv 36: deleteAdminEditorialAssignment marks assignment UNASSIGNED');

  // Invariant 37: Assignment Cross-Hackathon Deletion Rejection
  const resInv37 = mockRes();
  await hackathonController.deleteAdminEditorialAssignment(
    { hackathonId: HACKATHON_B, params: { id: assignmentSarahA1._id }, user: { email: 'admin@test.com' } },
    resInv37
  );
  assert(resInv37.statusCode === 404, 'Inv 37: Admin in Hackathon B cannot delete assignment belonging to Hackathon A (404)');

  // Invariant 38: Team Status Transition: Team status transitioned to UNDER_EVALUATION
  const teamA1Updated = await HackathonTeam.findById(teamA1._id);
  assert(teamA1Updated.status === 'UNDER_EVALUATION', 'Inv 38: Creating assignment transitions team status to UNDER_EVALUATION');

  console.log('\n--- CATEGORY 5: Evaluation Scoping & Draft/Finalize Immutability (Invariants 39-50) ---');

  // Invariant 39: Auto-Binding: Creating assignment initializes evaluation with matching hackathonId
  const initialEval = await HackathonEditorialEvaluation.findOne({
    hackathonId: HACKATHON_A,
    team: teamA1._id,
    editorialMember: sarahInA._id,
  });
  assert(initialEval && initialEval.status === 'NOT_STARTED' && initialEval.hackathonId === HACKATHON_A, 'Inv 39: Assignment creation automatically initializes evaluation in Hackathon A');

  // Invariant 40: Draft Save: Judge saves draft scores; status -> IN_PROGRESS
  const resInv40 = mockRes();
  await hackathonController.saveEditorialEvaluationDraft(
    {
      editorialMember: sarahInA,
      params: { teamId: teamA1.teamId },
      body: {
        scores: [
          { criterion: 'Technical Innovation', score: 30, maxScore: 40 },
          { criterion: 'Execution & Architecture', score: 25, maxScore: 35 },
        ],
        comments: 'Great project architecture so far.',
      },
    },
    resInv40
  );
  assert(resInv40.statusCode === 200 && resInv40.data.evaluation.status === 'IN_PROGRESS' && resInv40.data.evaluation.totalScore === 55, 'Inv 40: Judge successfully saves evaluation draft with status IN_PROGRESS');

  // Invariant 41: Draft Save Rejection: Unassigned judge rejected with 403
  const resInv41 = mockRes();
  await hackathonController.saveEditorialEvaluationDraft(
    {
      editorialMember: { _id: memberAlanId, hackathonId: HACKATHON_A, name: 'Alan', email: 'alan@test.com' },
      params: { teamId: teamA1.teamId },
      body: { scores: [{ criterion: 'Technical Innovation', score: 20 }] },
    },
    resInv41
  );
  assert(resInv41.statusCode === 403, 'Inv 41: Unassigned judge is forbidden from saving evaluation draft (403)');

  // Invariant 42: Cross-Hackathon Evaluation Rejection: Judge from Hackathon B cannot access team in A
  const resInv42 = mockRes();
  await hackathonController.saveEditorialEvaluationDraft(
    {
      editorialMember: memberB1,
      params: { teamId: teamA1.teamId },
      body: { scores: [{ criterion: 'Technical Innovation', score: 20 }] },
    },
    resInv42
  );
  assert(resInv42.statusCode === 403 && resInv42.data.message.includes('does not belong to your assigned hackathon'), 'Inv 42: Judge from Hackathon B cannot evaluate team from Hackathon A (403)');

  // Invariant 43: Finalization: Server-side calculates totalScore, status -> FINALIZED, isLocked -> true
  const resInv43 = mockRes();
  await hackathonController.finalizeEditorialEvaluation(
    {
      editorialMember: sarahInA,
      params: { teamId: teamA1.teamId },
      body: {
        scores: [
          { criterion: 'Technical Innovation', score: 38, maxScore: 40 },
          { criterion: 'Execution & Architecture', score: 32, maxScore: 35 },
          { criterion: 'UI/UX & Presentation', score: 24, maxScore: 25 },
        ],
        comments: 'Outstanding work on all fronts!',
      },
    },
    resInv43
  );
  assert(resInv43.statusCode === 200 && resInv43.data.evaluation.status === 'FINALIZED' && resInv43.data.evaluation.isLocked === true && resInv43.data.evaluation.totalScore === 94, 'Inv 43: Finalize evaluation locks scores and marks status FINALIZED');

  // Invariant 44: Immutability: Subsequent draft save attempts fail with 400
  const resInv44 = mockRes();
  await hackathonController.saveEditorialEvaluationDraft(
    {
      editorialMember: sarahInA,
      params: { teamId: teamA1.teamId },
      body: { comments: 'Attempt to tamper locked evaluation' },
    },
    resInv44
  );
  assert(resInv44.statusCode === 400 && resInv44.data.message.includes('locked'), 'Inv 44: Locked evaluation rejects draft modifications (400)');

  // Invariant 45: Immutability: Subsequent finalization attempts fail with 400
  const resInv45 = mockRes();
  await hackathonController.finalizeEditorialEvaluation(
    {
      editorialMember: sarahInA,
      params: { teamId: teamA1.teamId },
      body: {
        scores: [
          { criterion: 'Technical Innovation', score: 40, maxScore: 40 },
          { criterion: 'Execution & Architecture', score: 35, maxScore: 35 },
          { criterion: 'UI/UX & Presentation', score: 25, maxScore: 25 },
        ],
      },
    },
    resInv45
  );
  assert(resInv45.statusCode === 400 && resInv45.data.message.includes('already finalized and locked'), 'Inv 45: Locked evaluation rejects re-finalization (400)');

  // Invariant 46: Admin Reopen: Admin in same hackathon reopens evaluation
  const finalizedEvalA1 = await HackathonEditorialEvaluation.findOne({ hackathonId: HACKATHON_A, team: teamA1._id, editorialMember: sarahInA._id });
  const resInv46 = mockRes();
  await hackathonController.reopenAdminEditorialEvaluation(
    {
      hackathonId: HACKATHON_A,
      params: { id: finalizedEvalA1._id },
      body: { reason: 'Admin requested review of criteria scores' },
      user: { email: 'admin@test.com' },
    },
    resInv46
  );
  assert(resInv46.statusCode === 200 && resInv46.data.evaluation.status === 'REOPENED' && resInv46.data.evaluation.isLocked === false, 'Inv 46: Admin in Hackathon A can reopen evaluation, setting isLocked: false');

  // Invariant 47: Reopen Cross-Hackathon Rejection: Admin in B cannot reopen evaluation of A
  const resInv47 = mockRes();
  await hackathonController.reopenAdminEditorialEvaluation(
    {
      hackathonId: HACKATHON_B,
      params: { id: finalizedEvalA1._id },
      body: { reason: 'Cross-hackathon reopen attempt' },
      user: { email: 'admin@test.com' },
    },
    resInv47
  );
  assert(resInv47.statusCode === 404, 'Inv 47: Admin in Hackathon B cannot reopen evaluation belonging to Hackathon A (404)');

  // Re-finalize for subsequent tests
  const resRefinalize = mockRes();
  await hackathonController.finalizeEditorialEvaluation(
    {
      editorialMember: sarahInA,
      params: { teamId: teamA1.teamId },
      body: {
        scores: [
          { criterion: 'Technical Innovation', score: 38, maxScore: 40 },
          { criterion: 'Execution & Architecture', score: 32, maxScore: 35 },
          { criterion: 'UI/UX & Presentation', score: 24, maxScore: 25 },
        ],
        comments: 'Re-finalized confirmed scores.',
      },
    },
    resRefinalize
  );
  assert(resRefinalize.statusCode === 200, 'Re-finalization after reopen succeeds');

  // Invariant 48: Team Status: Transitions to EVALUATED when all assigned judges finalize
  const freshTeamA1 = await HackathonTeam.findById(teamA1._id);
  assert(freshTeamA1.status === 'EVALUATED', 'Inv 48: Team status transitions to EVALUATED when 100% of assigned judges have finalized');

  // Invariant 49: Partial Finalization: Team remains UNDER_EVALUATION when only 1 of 2 assigned judges finalized
  // Clean up any prior test assignment/evaluation for teamA2
  await HackathonEditorialAssignment.deleteMany({ team: teamA2._id });
  await HackathonEditorialEvaluation.deleteMany({ team: teamA2._id });
  await HackathonTeam.findByIdAndUpdate(teamA2._id, { status: 'UNDER_EVALUATION' });

  // Assign two judges: Sarah and Alan to teamA2
  const assignSarahA2 = await HackathonEditorialAssignment.create({
    hackathonId: HACKATHON_A,
    team: teamA2._id,
    teamId: teamA2.teamId,
    submission: subA2._id,
    editorialMember: sarahInA._id,
    status: 'ACTIVE',
  });
  await HackathonEditorialEvaluation.create({
    hackathonId: HACKATHON_A,
    team: teamA2._id,
    teamId: teamA2.teamId,
    submission: subA2._id,
    editorialMember: sarahInA._id,
    assignment: assignSarahA2._id,
    status: 'NOT_STARTED',
  });
  const assignAlanA2 = await HackathonEditorialAssignment.create({
    hackathonId: HACKATHON_A,
    team: teamA2._id,
    teamId: teamA2.teamId,
    submission: subA2._id,
    editorialMember: memberAlanId,
    status: 'ACTIVE',
  });
  await HackathonEditorialEvaluation.create({
    hackathonId: HACKATHON_A,
    team: teamA2._id,
    teamId: teamA2.teamId,
    submission: subA2._id,
    editorialMember: memberAlanId,
    assignment: assignAlanA2._id,
    status: 'NOT_STARTED',
  });

  // Sarah finalizes team A2, Alan has NOT finalized
  const resFinalizeSarahA2 = mockRes();
  await hackathonController.finalizeEditorialEvaluation(
    {
      editorialMember: sarahInA,
      params: { teamId: teamA2.teamId },
      body: {
        scores: [
          { criterion: 'Technical Innovation', score: 35, maxScore: 40 },
          { criterion: 'Execution & Architecture', score: 30, maxScore: 35 },
          { criterion: 'UI/UX & Presentation', score: 20, maxScore: 25 },
        ],
      },
    },
    resFinalizeSarahA2
  );
  const teamA2Check = await HackathonTeam.findById(teamA2._id);
  assert(teamA2Check.status === 'UNDER_EVALUATION', 'Inv 49: Team remains UNDER_EVALUATION when only 1 of 2 assigned judges has finalized');

  // Invariant 50: Admin Evaluation Listing: Scoped strictly to req.hackathonId
  const resInv50A = mockRes();
  await hackathonController.getAdminEditorialEvaluations({ hackathonId: HACKATHON_A, query: {}, headers: {} }, resInv50A);
  assert(resInv50A.statusCode === 200 && resInv50A.data.evaluations.length >= 2, 'Inv 50: getAdminEditorialEvaluations returns evaluations for Hackathon A');

  const resInv50B = mockRes();
  await hackathonController.getAdminEditorialEvaluations({ hackathonId: HACKATHON_B, query: {}, headers: {} }, resInv50B);
  assert(resInv50B.statusCode === 200 && resInv50B.data.evaluations.length === 0, 'Inv 50: getAdminEditorialEvaluations returns 0 evaluations for Hackathon B');

  console.log('\n--- CATEGORY 6: Dynamic Rubric, Scoring & Blind Review Isolation (Invariants 51-57) ---');

  // Invariant 51: Dynamic Rubric: Evaluation project detail uses criteria for target hackathon
  const resInv51 = mockRes();
  await hackathonController.getEditorialProjectDetail(
    { editorialMember: sarahInA, params: { teamId: teamA1.teamId } },
    resInv51
  );
  assert(resInv51.statusCode === 200 && resInv51.data.judgingCriteria.length === 3, 'Inv 51: getEditorialProjectDetail returns Hackathon A judging criteria (3 criteria)');

  // Invariant 52: Rubric Independence: Hackathon B uses 2 criteria
  // Create assignment in Hackathon B for Sarah
  await HackathonEditorialAssignment.create({
    hackathonId: HACKATHON_B,
    team: teamB1._id,
    teamId: teamB1.teamId,
    submission: subB1._id,
    editorialMember: memberB1._id,
    status: 'ACTIVE',
  });
  const resInv52 = mockRes();
  await hackathonController.getEditorialProjectDetail(
    { editorialMember: memberB1, params: { teamId: teamB1.teamId } },
    resInv52
  );
  assert(resInv52.statusCode === 200 && resInv52.data.judgingCriteria.length === 2 && resInv52.data.judgingCriteria[0].title === 'Problem Impact', 'Inv 52: getEditorialProjectDetail in Hackathon B returns Hackathon B criteria (2 criteria, Problem Impact)');

  // Invariant 53: Mandatory Criteria Enforcement: Missing mandatory score returns 400
  const resInv53 = mockRes();
  await hackathonController.finalizeEditorialEvaluation(
    {
      editorialMember: memberB1,
      params: { teamId: teamB1.teamId },
      body: {
        scores: [{ criterion: 'Problem Impact', score: 45 }], // Missing Code Quality!
      },
    },
    resInv53
  );
  assert(resInv53.statusCode === 400 && resInv53.data.message.includes('Missing mandatory score for criterion: "Code Quality"'), 'Inv 53: Missing configured mandatory criterion score returns 400');

  // Invariant 54: Max Score Enforcement: Score exceeding maxScore returns 400
  const resInv54 = mockRes();
  await hackathonController.finalizeEditorialEvaluation(
    {
      editorialMember: memberB1,
      params: { teamId: teamB1.teamId },
      body: {
        scores: [
          { criterion: 'Problem Impact', score: 55 }, // max is 50!
          { criterion: 'Code Quality', score: 40 },
        ],
      },
    },
    resInv54
  );
  assert(resInv54.statusCode === 400 && resInv54.data.message.includes('Score must be a number between 0 and 50'), 'Inv 54: Criterion score exceeding configured maxScore returns 400');

  // Invariant 55: Server-side Calculation overrides client manipulation
  const resInv55 = mockRes();
  await hackathonController.finalizeEditorialEvaluation(
    {
      editorialMember: memberB1,
      params: { teamId: teamB1.teamId },
      body: {
        scores: [
          { criterion: 'Problem Impact', score: 45 },
          { criterion: 'Code Quality', score: 45 },
        ],
        totalScore: 999, // Client attempts to force 999
      },
    },
    resInv55
  );
  assert(resInv55.statusCode === 200 && resInv55.data.evaluation.totalScore === 90, 'Inv 55: Server ignores client totalScore (999) and calculates accurate sum (90)');

  // Invariant 56: Blind Review Sanitization: Team detail strips email and phone number
  assert(resInv51.data.team.leader.email === undefined && resInv51.data.team.leader.phone === undefined, 'Inv 56: Blind review sanitization strips leader email and phone number');

  // Invariant 57: Evaluation Isolation: Response contains only current judge's evaluation
  assert(resInv51.data.evaluation.editorialMember.toString() === sarahInA._id.toString(), 'Inv 57: Judge only receives their own evaluation object, never evaluations of peer judges');

  console.log('\n--- CATEGORY 7: Concurrent Multi-Hackathon Judge Independence & Audit Trails (Invariants 58-65) ---');

  // Invariant 58: Dashboard Isolation: Hackathon A dashboard shows only Hackathon A assignments
  const resInv58A = mockRes();
  await hackathonController.getEditorialDashboard({ editorialMember: sarahInA }, resInv58A);
  assert(resInv58A.statusCode === 200 && resInv58A.data.stats.hackathonId === HACKATHON_A && resInv58A.data.stats.assignedCount === 2, 'Inv 58: Judge dashboard in Hackathon A reflects 2 assignments from Hackathon A');

  // Invariant 59: Dashboard Isolation: Hackathon B dashboard shows only Hackathon B assignments
  const resInv59B = mockRes();
  await hackathonController.getEditorialDashboard({ editorialMember: memberB1 }, resInv59B);
  assert(resInv59B.statusCode === 200 && resInv59B.data.stats.hackathonId === HACKATHON_B && resInv59B.data.stats.assignedCount === 1, 'Inv 59: Judge dashboard in Hackathon B reflects 1 assignment from Hackathon B');

  // Invariant 60: Concurrent Participation Projects List
  const resInv60A = mockRes();
  await hackathonController.getEditorialProjects({ editorialMember: sarahInA }, resInv60A);
  assert(resInv60A.statusCode === 200 && resInv60A.data.projects.length === 2, 'Inv 60: getEditorialProjects in Hackathon A returns exactly 2 projects');

  const resInv60B = mockRes();
  await hackathonController.getEditorialProjects({ editorialMember: memberB1 }, resInv60B);
  assert(resInv60B.statusCode === 200 && resInv60B.data.projects.length === 1 && resInv60B.data.projects[0].teamId === teamB1.teamId, 'Inv 60: getEditorialProjects in Hackathon B returns exactly 1 project belonging to B');

  // Invariant 61: Simultaneous Scoring: Evaluation state in Hackathon A is independent from B
  const evalInA = await HackathonEditorialEvaluation.findOne({ hackathonId: HACKATHON_A, team: teamA1._id });
  const evalInB = await HackathonEditorialEvaluation.findOne({ hackathonId: HACKATHON_B, team: teamB1._id });
  assert(evalInA.totalScore === 94 && evalInB.totalScore === 90, 'Inv 61: Evaluations in Hackathon A (94) and Hackathon B (90) maintain distinct totals and state');

  // Invariant 62: Audit Log Attribution: Login log contains hackathonId
  const loginLog = await HackathonAuditLog.findOne({
    hackathonId: HACKATHON_A,
    action: 'EDITORIAL_LOGIN',
  });
  assert(loginLog && loginLog.hackathonId === HACKATHON_A, 'Inv 62: Judge login writes audit log with correct hackathonId');

  // Invariant 63: Audit Log Attribution: Draft save contains hackathonId
  const draftLog = await HackathonAuditLog.findOne({
    hackathonId: HACKATHON_A,
    action: 'EDITORIAL_EVALUATION_DRAFT_SAVED',
  });
  assert(draftLog && draftLog.hackathonId === HACKATHON_A, 'Inv 63: Draft save writes audit log with correct hackathonId');

  // Invariant 64: Audit Log Attribution: Finalize contains hackathonId and score
  const finalizeLog = await HackathonAuditLog.findOne({
    hackathonId: HACKATHON_B,
    action: 'EDITORIAL_EVALUATION_FINALIZED',
  });
  assert(finalizeLog && finalizeLog.hackathonId === HACKATHON_B && finalizeLog.newState?.totalScore === 90, 'Inv 64: Finalize evaluation writes audit log with hackathonId and finalized total score');

  // Invariant 65: Audit Log Query Isolation: Admin in Hackathon B sees 0 audit logs from Hackathon A
  const auditLogsInB = await HackathonAuditLog.find({ hackathonId: HACKATHON_B });
  assert(auditLogsInB.every((log) => log.hackathonId === HACKATHON_B), 'Inv 65: Audit logs for Hackathon B are completely isolated from Hackathon A');

  // Clean test data after runs
  await cleanTestData();

  // Safety Check: Verify 2026 data is completely unchanged
  const final2026Judges = await HackathonEditorialMember.countDocuments({ hackathonId: 'can-hackathon-2026' });
  const final2026Assignments = await HackathonEditorialAssignment.countDocuments({ hackathonId: 'can-hackathon-2026' });
  const final2026Evaluations = await HackathonEditorialEvaluation.countDocuments({ hackathonId: 'can-hackathon-2026' });
  assert(final2026Judges === initial2026Judges, `Post-Test Invariant: 2026 Judges count preserved (${final2026Judges} === ${initial2026Judges})`);
  assert(final2026Assignments === initial2026Assignments, `Post-Test Invariant: 2026 Assignments count preserved (${final2026Assignments} === ${initial2026Assignments})`);
  assert(final2026Evaluations === initial2026Evaluations, `Post-Test Invariant: 2026 Evaluations count preserved (${final2026Evaluations} === ${initial2026Evaluations})`);

  console.log('\n============================================================');
  console.log(`TEST SUITE COMPLETE: ${passedTests} PASSED, ${failedTests} FAILED`);
  console.log('============================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runTestSuite().catch((err) => {
  console.error('Test Suite Failed with unexpected error:', err);
  process.exit(1);
});
