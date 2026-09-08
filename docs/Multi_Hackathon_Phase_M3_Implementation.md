# Multi-Hackathon Architecture — Phase M3 Implementation

## Hackathon Context Resolution, Dynamic Routing & Isolation Foundation

**Status:** Complete  
**Date:** September 2026  
**Module:** Multi-Hackathon Context & Dynamic Routing (Phase M3)  
**Migration Performed:** NO (Zero operational data touched)

---

## 1. Context Architecture

Phase M3 establishes the centralized, reliable Hackathon Context layer that enables all frontend routes and backend APIs to deterministically resolve WHICH hackathon a request belongs to.

### Architecture Invariants:
1. **Zero Global Fallback:** The application never performs arbitrary `Hackathon.findOne()` or `HackathonSetting.findOne()` without scoped criteria.
2. **Deterministic Context Binding:** The request lifecycle establishes canonical context properties:
   - `req.hackathon`: The fully resolved, populated Mongoose Hackathon document.
   - `req.hackathonId`: The canonical internal identifier (e.g., `CAN-HACK-000001` or legacy `can-hackathon-2026`).
   - `req.hackathonSlug`: The normalized URL slug (e.g., `code-arambh-2026`).
   - `req.hackathonContextSource`: The resolution mechanism used (`ROUTE_SLUG`, `ROUTE_ID`, `HEADER_ID`, `QUERY_SLUG`, `QUERY_ID`, or `ACTIVE_FALLBACK`).
3. **Decoupled User Identity:** A user's identity is strictly decoupled from hackathon context. Authenticating as a user does not assume or dictate the active hackathon.

---

## 2. Resolution Priority Order

Context resolution strictly enforces a four-tier priority hierarchy in `BACKEND/middleware/resolveHackathon.js`:

```
Incoming Request
      │
      ├──▶ [Priority A: Route Parameters]
      │      • req.params.slug -> findBySlug()
      │      • req.params.hackathonId -> findById()
      │
      ├──▶ [Priority B: Explicit API Header]
      │      • req.headers['x-hackathon-id'] -> findById()
      │        (Strict: 404 on invalid ID; never falls back to active/2026)
      │
      ├──▶ [Priority C: Explicit Query Parameters]
      │      • req.query.hackathonId -> findById()
      │      • req.query.slug -> findBySlug()
      │
      └──▶ [Priority D: Base Active Fallback]
             • findActiveHackathon() -> Hackathon.find({ status: 'ACTIVE', isDeleted: { $ne: true } })
             • Single active -> req.hackathon attached
             • 0 active -> 404 NO_ACTIVE_HACKATHON (or controlled state)
             • >1 active -> 500 HACKATHON_CONTEXT_INTEGRITY_ERROR
```

---

## 3. Base `/hackathon` Behavior

- **Dynamic Resolution:** Base `/hackathon` resolves to the single currently `ACTIVE` hackathon:
  ```js
  Hackathon.find({
    status: 'ACTIVE',
    isDeleted: { $ne: true }
  }).populate('settingsRef')
  ```
- **Draft & Upcoming Isolation:** A hackathon in `DRAFT` or `UPCOMING` status is NEVER resolved as the active hackathon.
- **Controlled No-Active State:** If no hackathon is currently `ACTIVE`, the endpoint returns a controlled `404 NO_ACTIVE_HACKATHON` response:
  ```json
  {
    "success": false,
    "code": "NO_ACTIVE_HACKATHON",
    "message": "No active hackathon is currently available."
  }
  ```
- **Integrity Violation Protection:** If database integrity somehow encounters more than one active hackathon, `findActiveHackathon()` traps the violation and responds with `500 HACKATHON_CONTEXT_INTEGRITY_ERROR` rather than silently picking an arbitrary one.

---

## 4. `/hackathon/:slug` Behavior

- **Explicit Slug Match:** Resolves hackathons by their normalized, lowercase URL slug (e.g. `/hackathon/code-arambh-2026`).
- **Independent Resolution:** Slug routing works completely independently of the active hackathon. For example, visiting an `UPCOMING`, `COMPLETED`, or `ARCHIVED` hackathon resolves that specific edition.
- **Historical Read-Only Access:** Historical `COMPLETED` and `ARCHIVED` hackathons can be resolved for public, read-only viewing without crashing or mutating state.
- **Non-Existent Slug:** If an invalid slug is requested, the system returns `404 HACKATHON_NOT_FOUND`. It NEVER falls back to the active hackathon or 2026.

---

## 5. `x-hackathon-id` Header Behavior

- **API Header Support:** Backend middleware supports `x-hackathon-id` for machine-to-machine, internal API calls, and administrative scoping.
- **Strict Canonical Validation:** Accepts internal IDs (e.g., `CAN-HACK-000001` or legacy `can-hackathon-2026`).
- **No Silent Fallback:** If `x-hackathon-id` contains an invalid or non-existent identifier, the request fails immediately with `404 HACKATHON_NOT_FOUND`. It is strictly forbidden from falling back to `can-hackathon-2026`.

---

## 6. Frontend Context Architecture

Created `FRONTEND/src/context/HackathonContext.jsx`:
- **State Properties Provided:**
  - `currentHackathon`: Resolved public hackathon data object.
  - `hackathonId`: Canonical hackathon ID string.
  - `slug`: Active or route slug string.
  - `status`: Lifecycle status (`ACTIVE`, `UPCOMING`, `COMPLETED`, `ARCHIVED`, `DRAFT`).
  - `loading`: Boolean indicating resolution in flight.
  - `error`: Error message or error code string.
  - `isNoActive`: Boolean flag set to true when `NO_ACTIVE_HACKATHON` is returned.
  - `refresh()`: Callback to reload context on demand.
- **Dynamic Routing:**
  - `/hackathon` $\to$ `<HackathonProvider><HackathonPortal /></HackathonProvider>`
  - `/hackathon/:slug` $\to$ `<HackathonProvider><HackathonPortal /></HackathonProvider>`
- **Controlled UI States:**
  - **No Active Hackathon View:** Displays an informative, polished banner if no hackathons are live.
  - **Hackathon Not Found View:** Displays a 404 recovery state with a button directing users to the active edition.

---

## 7. Public API Endpoints

### 1. `GET /api/hackathon/active`
- **Description:** Returns the single live, active hackathon.
- **Status:** `200 OK` on success, `404 Not Found` with `code: 'NO_ACTIVE_HACKATHON'` if no hackathon is currently active.
- **Public-Safe Schema:**
  ```json
  {
    "success": true,
    "data": {
      "hackathonId": "CAN-HACK-000001",
      "slug": "code-arambh-2026",
      "name": "Code Arambh 2026",
      "title": "Code Arambh 2026",
      "tagline": "Code Arambh 2026",
      "shortDescription": "National innovation hackathon",
      "description": "Full description...",
      "status": "ACTIVE",
      "startDate": "2026-10-01T00:00:00.000Z",
      "endDate": "2026-10-03T00:00:00.000Z",
      "registrationStart": "2026-09-01T00:00:00.000Z",
      "registrationDeadline": "2026-09-25T00:00:00.000Z",
      "submissionDeadline": "2026-10-03T18:00:00.000Z",
      "resultDate": "2026-10-10T00:00:00.000Z",
      "participationFee": 0,
      "currency": "INR",
      "rules": [],
      "tracks": [],
      "judgingCriteria": [],
      "prizes": [],
      "announcements": [],
      "isRegistrationOpen": true,
      "isSubmissionOpen": false,
      "isResultsPublished": false,
      "isActive": true,
      "logoUrl": "",
      "bannerUrl": "",
      "organizerName": "Code-A-Nova",
      "tags": [],
      "settings": { ... }
    }
  }
  ```

### 2. `GET /api/hackathon/by-slug/:slug`
- **Description:** Resolves any public hackathon by slug (including historical editions).
- **Status:** `200 OK` on success, `404 Not Found` with `code: 'HACKATHON_NOT_FOUND'` if not found or deleted.

### 3. `GET /api/hackathon/info`
- **Description:** Preserved legacy info endpoint. Now context-aware via `resolveHackathonContext({ required: false, defaultToActive: true })`. If a hackathon is resolved, it formats that hackathon; if no hackathons exist, it cleanly uses the legacy `can-hackathon-2026` settings bridge.

---

## 8. Error Handling & Standard Error Codes

The context layer standardizes error codes in `BACKEND/middleware/resolveHackathon.js`:
- `HACKATHON_CONTEXT_REQUIRED` (400): Explicit context was mandated by caller, but none provided.
- `HACKATHON_NOT_FOUND` (404): Specified slug or ID does not match any non-deleted hackathon.
- `NO_ACTIVE_HACKATHON` (404): Base active resolution attempted, but 0 hackathons are currently `ACTIVE`.
- `HACKATHON_INACTIVE` (403): Attempted an active-only operation against an inactive hackathon.
- `HACKATHON_CONTEXT_INVALID` (400): Malformed ID or slug parameter.
- `HACKATHON_CONTEXT_INTEGRITY_ERROR` (500): Caught $>1$ hackathons simultaneously marked `ACTIVE`.

---

## 9. Security & Isolation Rules

1. **Zero Secret Leaks:** `formatPublicHackathonData` strips all MongoDB `_id` references, payment secrets, Razorpay keys, SMTP credentials, judge evaluations, and internal audit data.
2. **Server-Side Context Validation:** Never trusts arbitrary client-provided hackathon names or unverified Mongo ObjectIDs.
3. **Strict Soft-Delete Enforcement:** All context queries enforce `isDeleted: { $ne: true }`. Soft-deleted hackathons cannot be accessed via slug, ID, or active lookup.
4. **No Cross-Hackathon Fallback:** Admin requests for `/admin/hackathons/:hackathonId` and header `x-hackathon-id` return 404 on invalid IDs, never cross-contaminating with other hackathons.

---

## 10. Legacy 2026 Compatibility

- The existing `can-hackathon-2026` hackathon remains 100% operational.
- All existing 2026 settings, teams, submissions, payments, judges, and certificates remain completely untouched.
- The legacy compatibility bridge in `getPublicHackathonInfo` and `HackathonSetting.getOrCreateSettings('can-hackathon-2026')` is isolated and clearly documented.

---

## 11. Remaining Singleton Assumptions Identified (For Future M5+)

As audited during Phase M1 and isolated during M2/M3:
1. `HackathonTeam` operational queries in `hackathonController.js` (e.g. `getAdminTeams`, `getAdminOverview`) query teams without a mandatory `hackathonId` filter. (To be scoped in M5).
2. `HackathonSubmission`, `HackathonPayment`, `HackathonEditorialAssignment` in operational controller routes currently omit explicit `hackathonId` query clauses. (To be scoped in M5).
3. `HackathonAdminWorkspace.jsx` contains static references to `can-hackathon-2026` in calculation/reporting handlers. (To be made dynamic in M5).

---

## 12. Explicitly Deferred M4 / M5+ Work

- **DEFERRED TO M4:** Backfill data migration of existing teams, submissions, payments, judges, results, and certificates to have explicit `hackathonId = 'can-hackathon-2026'`.
- **DEFERRED TO M5:** Operational controller refactoring to bind all operational queries to `req.hackathonId`.
- **DEFERRED TO M5:** Frontend admin workspace multi-hackathon dashboard switching and scoped analytics.
- **DEFERRED TO M6+:** Duplicate configuration, template copying, and cross-hackathon participant reporting.

---

## 13. Tests & Results

### M3 Context Resolution Test Suite (`BACKEND/tests/testMultiHackathonContext.js`):
- **Pass Count:** 25 / 25 PASSED (100%)
  1. Base `/hackathon` resolves ACTIVE hackathon.
  2. Base `/hackathon` does not resolve a DRAFT hackathon.
  3. Base `/hackathon` does not resolve an UPCOMING hackathon.
  4. Base `/hackathon` returns controlled no-active state if no ACTIVE exists.
  5. Slug resolves correct hackathon.
  6. Slug resolution works independently of active hackathon.
  7. Historical COMPLETED hackathon can be resolved by slug.
  8. ARCHIVED hackathon can be resolved by slug for read-only context.
  9. Invalid slug returns 404.
  10. `x-hackathon-id` resolves correct hackathon.
  11. Invalid `x-hackathon-id` does not fall back to 2026.
  12. Missing context is handled correctly where context is required.
  13. `req.hackathon` is populated.
  14. `req.hackathonId` is populated.
  15. `req.hackathonSlug` is populated when applicable.
  16. Deleted hackathon cannot be resolved.
  17. Case/normalization behavior is correct.
  18. Multiple ACTIVE records cannot normally exist because of M2 index.
  19. Integrity violation is handled safely if simulated.
  20. User identity is not treated as global hackathon context.
  21. Context from hackathon slug takes precedence over active fallback.
  22. Existing 2026 route compatibility remains intact.
  23. Public endpoint does not expose secrets.
  24. Admin context does not allow arbitrary cross-hackathon fallback.
  25. No arbitrary Hackathon.findOne() fallback exists inside the new context layer.

### Regression Test Suites:
- `testMultiHackathonCore.js`: 30 / 30 PASSED (100%)
- `testTeamIdentityArchitecture.js`: 25 / 25 PASSED (100%)
- `testUnstopTwoStageImport.js`: 10 / 10 PASSED (100%)
- `testGoLiveVerificationAudit.js`: 112 / 112 PASSED (100%)
- Frontend Production Build (`npm run build`): SUCCESS (0 errors)

---

## 14. Files Created / Modified

### Created Files:
1. `BACKEND/middleware/resolveHackathon.js` — Centralized context resolution middleware, priority engine, error codes, and public data sanitizer.
2. `FRONTEND/src/context/HackathonContext.jsx` — Frontend React Context provider and `useHackathon` hook for dynamic context consumption.
3. `BACKEND/tests/testMultiHackathonContext.js` — 25 automated invariant tests for Phase M3.
4. `docs/Multi_Hackathon_Phase_M3_Implementation.md` — Implementation report and architecture documentation.

### Modified Files:
1. `BACKEND/routes/hackathon.js` — Mounted public `GET /active`, `GET /by-slug/:slug`, and context-aware `GET /info`.
2. `BACKEND/controllers/hackathonController.js` — Updated `getPublicHackathonInfo` to use `req.hackathon` when resolved while keeping legacy 2026 bridge.
3. `FRONTEND/src/App.jsx` — Wrapped `/hackathon` in `HackathonProvider` and added dynamic `/hackathon/:slug` route.
4. `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx` — Integrated `useHackathon`, dynamic SEO, and controlled empty/not-found UI states.

---

## 15. Database Changes

- **Schema Changes:** None (reused `Hackathon` and `HackathonSetting` schema foundations from Phase M2).
- **Index Changes:** Verified partial unique index `unique_active_hackathon_idx` on `{ status: 'ACTIVE' }` with `partialFilterExpression: { status: 'ACTIVE' }`.

---

## 16. Migration Status

**MIGRATION PERFORMED: NO**  
Zero operational database records (teams, payments, submissions, evaluations, results, certificates) were modified or backfilled during Phase M3.
