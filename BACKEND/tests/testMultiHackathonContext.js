/**
 * Phase M3 — Multi-Hackathon Context Resolution & Dynamic Routing Test Suite
 * Minimum 25 Tests covering all requirements from Phase M3 Specification
 */

const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonManagementService = require('../services/hackathonManagementService');
const {
  ERROR_CODES,
  formatPublicHackathonData,
  findActiveHackathon,
  findBySlug,
  findById,
  resolveHackathonContext,
  resolveActiveHackathon,
  resolveHackathonBySlug,
  resolveHackathonById,
} = require('../middleware/resolveHackathon');
const { getPublicHackathonInfo } = require('../controllers/hackathonController');

const createdHackathonIds = [];
const createdSettingsIds = [];

const TEST_ADMIN = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Test Super Admin',
  email: 'm3_test_admin@code-a-nova.online',
  role: 'admin',
};

let originalActiveHackathon = null;

async function setup() {
  const uri = process.env.MONGO_URI || process.env.DATABASE_URL;
  if (!uri) {
    throw new Error('MONGO_URI is not defined in .env');
  }
  await mongoose.connect(uri);
  await Hackathon.init();
  await HackathonSetting.init();

  // If there is already an active hackathon (e.g. can-hackathon-2026 in production),
  // temporarily pause it so the test suite can test context transitions cleanly.
  originalActiveHackathon = await Hackathon.findOne({ status: 'ACTIVE', isDeleted: { $ne: true } });
  if (originalActiveHackathon) {
    await Hackathon.updateOne({ _id: originalActiveHackathon._id }, { $set: { status: 'UPCOMING' } });
  }
}

async function teardown() {
  if (createdHackathonIds.length > 0) {
    await Hackathon.deleteMany({ hackathonId: { $in: createdHackathonIds } });
    await HackathonSetting.deleteMany({ hackathonId: { $in: createdHackathonIds } });
  }

  // Restore original active hackathon if one was paused
  if (originalActiveHackathon) {
    await Hackathon.updateOne({ _id: originalActiveHackathon._id }, { $set: { status: originalActiveHackathon.status } });
  }

  await mongoose.disconnect();
}

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

function createMockReqRes(options = {}) {
  const req = {
    params: options.params || {},
    headers: options.headers || {},
    query: options.query || {},
    user: options.user || null,
  };
  let statusCode = 200;
  let responseData = null;
  let nextCalled = false;

  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(data) {
      responseData = data;
      return this;
    },
  };

  const next = () => {
    nextCalled = true;
  };

  return {
    req,
    res,
    next,
    getStatusCode: () => statusCode,
    getResponseData: () => responseData,
    wasNextCalled: () => nextCalled,
  };
}

async function runTests() {
  console.log('===============================================================');
  console.log('=== MULTI-HACKATHON PHASE M3 TEST SUITE (25+ INVARIANTS)    ===');
  console.log('===============================================================');

  const timestamp = Date.now();

  console.log('\n--- GROUP 1: BASE ROUTE & ACTIVE RESOLUTION ---');

  // Test 1: Base /hackathon resolves ACTIVE hackathon
  const activeCreated = await HackathonManagementService.createHackathon(
    {
      name: `M3 Active Hackathon ${timestamp}`,
      slug: `m3-active-${timestamp}`,
      tagline: 'Active Edition for M3 Testing',
      description: 'Publicly active hackathon',
    },
    TEST_ADMIN
  );
  const activeHackathon = activeCreated.hackathon;
  createdHackathonIds.push(activeHackathon.hackathonId);
  await HackathonManagementService.activateHackathon(activeHackathon.hackathonId, TEST_ADMIN);

  const mockActive = createMockReqRes();
  const activeMiddleware = resolveActiveHackathon({ required: true });
  await activeMiddleware(mockActive.req, mockActive.res, mockActive.next);

  assert(
    mockActive.wasNextCalled() &&
      mockActive.req.hackathon &&
      mockActive.req.hackathonId === activeHackathon.hackathonId,
    '1. Base /hackathon resolves ACTIVE hackathon'
  );

  // Test 2: Base /hackathon does not resolve a DRAFT hackathon
  // First temporarily deactivate the active one to test isolation
  await Hackathon.updateOne({ hackathonId: activeHackathon.hackathonId }, { status: 'COMPLETED' });

  const draftCreated = await HackathonManagementService.createHackathon(
    {
      name: `M3 Draft Hackathon ${timestamp}`,
      slug: `m3-draft-${timestamp}`,
    },
    TEST_ADMIN
  );
  const draftHackathon = draftCreated.hackathon;
  createdHackathonIds.push(draftHackathon.hackathonId);

  const mockDraft = createMockReqRes();
  await activeMiddleware(mockDraft.req, mockDraft.res, mockDraft.next);

  assert(
    mockDraft.getStatusCode() === 404 &&
      mockDraft.getResponseData()?.code === ERROR_CODES.NO_ACTIVE_HACKATHON &&
      !mockDraft.wasNextCalled(),
    '2. Base /hackathon does not resolve a DRAFT hackathon'
  );

  // Test 3: Base /hackathon does not resolve an UPCOMING hackathon
  const upcomingCreated = await HackathonManagementService.createHackathon(
    {
      name: `M3 Upcoming Hackathon ${timestamp}`,
      slug: `m3-upcoming-${timestamp}`,
    },
    TEST_ADMIN
  );
  const upcomingHackathon = upcomingCreated.hackathon;
  createdHackathonIds.push(upcomingHackathon.hackathonId);
  await HackathonManagementService.markUpcoming(upcomingHackathon.hackathonId, TEST_ADMIN);

  const mockUpcoming = createMockReqRes();
  await activeMiddleware(mockUpcoming.req, mockUpcoming.res, mockUpcoming.next);

  assert(
    mockUpcoming.getStatusCode() === 404 &&
      mockUpcoming.getResponseData()?.code === ERROR_CODES.NO_ACTIVE_HACKATHON &&
      !mockUpcoming.wasNextCalled(),
    '3. Base /hackathon does not resolve an UPCOMING hackathon'
  );

  // Test 4: Base /hackathon returns controlled no-active state if no ACTIVE exists
  const mockNoActive = createMockReqRes();
  await activeMiddleware(mockNoActive.req, mockNoActive.res, mockNoActive.next);

  assert(
    mockNoActive.getStatusCode() === 404 &&
      mockNoActive.getResponseData()?.code === ERROR_CODES.NO_ACTIVE_HACKATHON &&
      mockNoActive.getResponseData()?.message === 'No active hackathon is currently available.',
    '4. Base /hackathon returns controlled no-active state if no ACTIVE exists'
  );

  // Restore activeHackathon to ACTIVE state for subsequent tests
  await Hackathon.updateOne({ hackathonId: activeHackathon.hackathonId }, { status: 'ACTIVE' });

  console.log('\n--- GROUP 2: SLUG ROUTE & HISTORICAL RESOLUTION ---');

  // Test 5: Slug resolves correct hackathon
  const mockSlug = createMockReqRes({ params: { slug: upcomingHackathon.slug } });
  const slugMiddleware = resolveHackathonBySlug({ required: true });
  await slugMiddleware(mockSlug.req, mockSlug.res, mockSlug.next);

  assert(
    mockSlug.wasNextCalled() &&
      mockSlug.req.hackathon &&
      mockSlug.req.hackathon.hackathonId === upcomingHackathon.hackathonId,
    '5. Slug resolves correct hackathon'
  );

  // Test 6: Slug resolution works independently of active hackathon
  // Active is activeHackathon, but requesting upcomingHackathon by slug resolves upcomingHackathon
  assert(
    mockSlug.req.hackathon.hackathonId !== activeHackathon.hackathonId &&
      mockSlug.req.hackathon.status === 'UPCOMING',
    '6. Slug resolution works independently of active hackathon'
  );

  // Test 7: Historical COMPLETED hackathon can be resolved by slug
  const completedCreated = await HackathonManagementService.createHackathon(
    {
      name: `M3 Completed Hackathon ${timestamp}`,
      slug: `m3-completed-${timestamp}`,
    },
    TEST_ADMIN
  );
  const completedHackathon = completedCreated.hackathon;
  createdHackathonIds.push(completedHackathon.hackathonId);
  await Hackathon.updateOne({ hackathonId: completedHackathon.hackathonId }, { status: 'COMPLETED' });

  const mockCompleted = createMockReqRes({ params: { slug: completedHackathon.slug } });
  await slugMiddleware(mockCompleted.req, mockCompleted.res, mockCompleted.next);

  assert(
    mockCompleted.wasNextCalled() &&
      mockCompleted.req.hackathon &&
      mockCompleted.req.hackathon.status === 'COMPLETED',
    '7. Historical COMPLETED hackathon can be resolved by slug'
  );

  // Test 8: ARCHIVED hackathon can be resolved by slug for read-only context
  const archivedCreated = await HackathonManagementService.createHackathon(
    {
      name: `M3 Archived Hackathon ${timestamp}`,
      slug: `m3-archived-${timestamp}`,
    },
    TEST_ADMIN
  );
  const archivedHackathon = archivedCreated.hackathon;
  createdHackathonIds.push(archivedHackathon.hackathonId);
  await Hackathon.updateOne({ hackathonId: archivedHackathon.hackathonId }, { status: 'ARCHIVED' });

  const mockArchived = createMockReqRes({ params: { slug: archivedHackathon.slug } });
  await slugMiddleware(mockArchived.req, mockArchived.res, mockArchived.next);

  assert(
    mockArchived.wasNextCalled() &&
      mockArchived.req.hackathon &&
      mockArchived.req.hackathon.status === 'ARCHIVED',
    '8. ARCHIVED hackathon can be resolved by slug for read-only context'
  );

  // Test 9: Invalid slug returns 404
  const mockInvalidSlug = createMockReqRes({ params: { slug: 'totally-nonexistent-slug-xyz' } });
  await slugMiddleware(mockInvalidSlug.req, mockInvalidSlug.res, mockInvalidSlug.next);

  assert(
    mockInvalidSlug.getStatusCode() === 404 &&
      mockInvalidSlug.getResponseData()?.code === ERROR_CODES.HACKATHON_NOT_FOUND &&
      !mockInvalidSlug.wasNextCalled(),
    '9. Invalid slug returns 404'
  );

  console.log('\n--- GROUP 3: HEADER & EXPLICIT API CONTEXT ---');

  // Test 10: x-hackathon-id resolves correct hackathon
  const mockHeader = createMockReqRes({
    headers: { 'x-hackathon-id': upcomingHackathon.hackathonId },
  });
  const contextMiddleware = resolveHackathonContext({ required: true });
  await contextMiddleware(mockHeader.req, mockHeader.res, mockHeader.next);

  assert(
    mockHeader.wasNextCalled() &&
      mockHeader.req.hackathon &&
      mockHeader.req.hackathonId === upcomingHackathon.hackathonId,
    '10. x-hackathon-id resolves correct hackathon'
  );

  // Test 11: Invalid x-hackathon-id does not fall back to 2026
  const mockInvalidHeader = createMockReqRes({
    headers: { 'x-hackathon-id': 'CAN-INVALID-999999' },
  });
  await contextMiddleware(mockInvalidHeader.req, mockInvalidHeader.res, mockInvalidHeader.next);

  assert(
    mockInvalidHeader.getStatusCode() === 404 &&
      mockInvalidHeader.getResponseData()?.code === ERROR_CODES.HACKATHON_NOT_FOUND &&
      mockInvalidHeader.req.hackathonId !== 'can-hackathon-2026' &&
      !mockInvalidHeader.wasNextCalled(),
    '11. Invalid x-hackathon-id does not fall back to 2026'
  );

  // Test 12: Missing context is handled correctly where context is required
  const mockMissing = createMockReqRes();
  const strictMiddleware = resolveHackathonContext({ required: true, defaultToActive: false });
  await strictMiddleware(mockMissing.req, mockMissing.res, mockMissing.next);

  assert(
    mockMissing.getStatusCode() === 400 &&
      mockMissing.getResponseData()?.code === ERROR_CODES.HACKATHON_CONTEXT_REQUIRED &&
      !mockMissing.wasNextCalled(),
    '12. Missing context is handled correctly where context is required'
  );

  console.log('\n--- GROUP 4: REQUEST POPULATION & ISOLATION ---');

  // Test 13: req.hackathon is populated
  assert(
    mockHeader.req.hackathon !== null && typeof mockHeader.req.hackathon === 'object',
    '13. req.hackathon is populated'
  );

  // Test 14: req.hackathonId is populated
  assert(
    mockHeader.req.hackathonId === upcomingHackathon.hackathonId,
    '14. req.hackathonId is populated'
  );

  // Test 15: req.hackathonSlug is populated when applicable
  assert(
    mockHeader.req.hackathonSlug === upcomingHackathon.slug,
    '15. req.hackathonSlug is populated when applicable'
  );

  // Test 16: Deleted hackathon cannot be resolved
  const deletedCreated = await HackathonManagementService.createHackathon(
    {
      name: `M3 Deleted Hackathon ${timestamp}`,
      slug: `m3-deleted-${timestamp}`,
    },
    TEST_ADMIN
  );
  const deletedHackathon = deletedCreated.hackathon;
  createdHackathonIds.push(deletedHackathon.hackathonId);
  await Hackathon.updateOne({ hackathonId: deletedHackathon.hackathonId }, { isDeleted: true });

  const mockDeletedSlug = createMockReqRes({ params: { slug: deletedHackathon.slug } });
  await slugMiddleware(mockDeletedSlug.req, mockDeletedSlug.res, mockDeletedSlug.next);

  const mockDeletedHeader = createMockReqRes({
    headers: { 'x-hackathon-id': deletedHackathon.hackathonId },
  });
  await contextMiddleware(mockDeletedHeader.req, mockDeletedHeader.res, mockDeletedHeader.next);

  assert(
    mockDeletedSlug.getStatusCode() === 404 &&
      mockDeletedHeader.getStatusCode() === 404 &&
      !mockDeletedSlug.wasNextCalled() &&
      !mockDeletedHeader.wasNextCalled(),
    '16. Deleted hackathon cannot be resolved'
  );

  // Test 17: Case/normalization behavior is correct
  const mockCaseSlug = createMockReqRes({
    params: { slug: upcomingHackathon.slug.toUpperCase() },
  });
  await slugMiddleware(mockCaseSlug.req, mockCaseSlug.res, mockCaseSlug.next);

  const mockCaseHeader = createMockReqRes({
    headers: { 'x-hackathon-id': upcomingHackathon.hackathonId.toLowerCase() },
  });
  await contextMiddleware(mockCaseHeader.req, mockCaseHeader.res, mockCaseHeader.next);

  assert(
    mockCaseSlug.wasNextCalled() &&
      mockCaseSlug.req.hackathonId === upcomingHackathon.hackathonId &&
      mockCaseHeader.wasNextCalled() &&
      mockCaseHeader.req.hackathonId === upcomingHackathon.hackathonId,
    '17. Case/normalization behavior is correct'
  );

  console.log('\n--- GROUP 5: INTEGRITY, PRECEDENCE & SECURITY ---');

  // Test 18: Multiple ACTIVE records cannot normally exist because of M2 index
  const indexes = await Hackathon.collection.indexes();
  const activeIdx = indexes.find((idx) => idx.name === 'unique_active_hackathon_idx');
  assert(
    activeIdx &&
      activeIdx.key.status === 1 &&
      activeIdx.unique === true &&
      activeIdx.partialFilterExpression?.status === 'ACTIVE',
    '18. Multiple ACTIVE records cannot normally exist because of M2 index'
  );

  // Test 19: Integrity violation is handled safely if simulated
  const originalFind = Hackathon.find;
  try {
    // Simulate corrupted DB state returning 2 active hackathons
    Hackathon.find = function (query) {
      if (query?.status === 'ACTIVE') {
        return {
          populate: async () => [
            { hackathonId: 'CAN-HACK-000001', status: 'ACTIVE' },
            { hackathonId: 'CAN-HACK-000002', status: 'ACTIVE' },
          ],
        };
      }
      return originalFind.apply(this, arguments);
    };

    const mockCorrupt = createMockReqRes();
    await activeMiddleware(mockCorrupt.req, mockCorrupt.res, mockCorrupt.next);

    assert(
      mockCorrupt.getStatusCode() === 500 &&
        mockCorrupt.getResponseData()?.code === ERROR_CODES.HACKATHON_CONTEXT_INTEGRITY_ERROR &&
        !mockCorrupt.wasNextCalled(),
      '19. Integrity violation is handled safely if simulated'
    );
  } finally {
    Hackathon.find = originalFind;
  }

  // Test 20: User identity is not treated as global hackathon context
  const mockUserReq = createMockReqRes({
    user: {
      _id: new mongoose.Types.ObjectId(),
      email: 'arbitrary_user@example.com',
      role: 'student',
    },
    // No slug, header, or query provided
  });
  const defaultMiddleware = resolveHackathonContext({ required: false, defaultToActive: false });
  await defaultMiddleware(mockUserReq.req, mockUserReq.res, mockUserReq.next);

  assert(
    mockUserReq.wasNextCalled() &&
      mockUserReq.req.hackathon === null &&
      mockUserReq.req.hackathonId === null,
    '20. User identity is not treated as global hackathon context'
  );

  // Test 21: Context from hackathon slug takes precedence over active fallback
  const mockPrecedence = createMockReqRes({
    params: { slug: upcomingHackathon.slug }, // Specific slug
  });
  // Middleware with defaultToActive = true
  const precedenceMiddleware = resolveHackathonContext({
    required: true,
    defaultToActive: true,
  });
  await precedenceMiddleware(mockPrecedence.req, mockPrecedence.res, mockPrecedence.next);

  assert(
    mockPrecedence.wasNextCalled() &&
      mockPrecedence.req.hackathonId === upcomingHackathon.hackathonId &&
      mockPrecedence.req.hackathonId !== activeHackathon.hackathonId,
    '21. Context from hackathon slug takes precedence over active fallback'
  );

  // Test 22: Existing 2026 route compatibility remains intact
  const mockLegacyInfo = createMockReqRes();
  await getPublicHackathonInfo(mockLegacyInfo.req, mockLegacyInfo.res);

  assert(
    mockLegacyInfo.getStatusCode() === 200 &&
      mockLegacyInfo.getResponseData()?.success === true &&
      Boolean(mockLegacyInfo.getResponseData()?.data?.name),
    '22. Existing 2026 route compatibility remains intact'
  );

  // Test 23: Public endpoint does not expose secrets
  const publicData = formatPublicHackathonData(activeHackathon, {
    participationFee: 100,
    currency: 'INR',
    tracks: ['AI'],
  });
  const forbiddenKeys = [
    '_id',
    'id',
    'razorpay',
    'key_id',
    'key_secret',
    'secret',
    'smtp',
    'password',
    'jwtSecret',
    'editorialAssignments',
    'judgeId',
  ];
  const keysFound = forbiddenKeys.filter(
    (k) => publicData[k] !== undefined || (publicData.settings && publicData.settings[k] !== undefined)
  );

  assert(
    keysFound.length === 0 &&
      publicData.hackathonId === activeHackathon.hackathonId &&
      publicData.slug === activeHackathon.slug,
    '23. Public endpoint does not expose secrets'
  );

  // Test 24: Admin context does not allow arbitrary cross-hackathon fallback
  const mockAdminId = createMockReqRes({
    params: { hackathonId: 'CAN-NONEXISTENT-TARGET' },
  });
  const adminIdMiddleware = resolveHackathonById({ required: true });
  await adminIdMiddleware(mockAdminId.req, mockAdminId.res, mockAdminId.next);

  assert(
    mockAdminId.getStatusCode() === 404 &&
      mockAdminId.getResponseData()?.code === ERROR_CODES.HACKATHON_NOT_FOUND &&
      !mockAdminId.wasNextCalled(),
    '24. Admin context does not allow arbitrary cross-hackathon fallback'
  );

  // Test 25: No arbitrary Hackathon.findOne() fallback exists inside the new context layer
  const middlewareFile = fs.readFileSync(
    path.join(__dirname, '../middleware/resolveHackathon.js'),
    'utf-8'
  );
  // Match Hackathon.findOne() without an argument or without a filter
  const hasArbitraryFindOne =
    /Hackathon\.findOne\(\s*\)/.test(middlewareFile) ||
    /HackathonSetting\.findOne\(\s*\)/.test(middlewareFile);

  assert(
    !hasArbitraryFindOne,
    '25. No arbitrary Hackathon.findOne() fallback exists inside the new context layer'
  );

  console.log('\n===============================================================');
  console.log(`=== ALL ${passedTests} OF ${totalTests} MULTI-HACKATHON CONTEXT TESTS PASSED! ===`);
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
