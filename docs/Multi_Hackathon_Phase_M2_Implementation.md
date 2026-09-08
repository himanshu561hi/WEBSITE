# Multi-Hackathon Phase M2 Implementation Report — Hackathon Core Model

> **Status**: Completed Successfully  
> **Phase**: M2 — Hackathon Core Model, Lifecycle, Configuration Relationship & Admin Management  
> **Scope**: Master Hackathon Model, Lifecycle Transitions, One-Active Enforcement, Isolated Settings, Admin UI, Regression Safety  
> **Migration Performed**: NO (Existing 2026 operational data untouched)

---

## 1. Executive Summary

In Phase M2, we transitioned the Code-A-Nova platform from a singleton hackathon architecture toward a hierarchical multi-hackathon foundation:
```
PLATFORM
  ↓
HACKATHON (Master Entity: Hackathon.js)
  ↓
HACKATHON-SCOPED CONFIGURATION (HackathonSetting.js)
  ↓
HACKATHON-SCOPED OPERATIONAL DATA (Teams, Submissions, Judges, Certificates)
```

The top-level `Hackathon` entity has been introduced with canonical, system-generated identifiers (`CAN-HACK-000001`), unique URL slugs, formal lifecycle status transitions, and a strict database and transactional invariant: **at most ONE hackathon may have `status: 'ACTIVE'` at any point in time**.

---

## 2. What Was Implemented

1. **Top-Level Hackathon Master Model** (`BACKEND/models/Hackathon.js`):
   - Represents the canonical identity, URL routing slug, timeline, and lifecycle status of each hackathon.
   - Enforces unique, immutable `hackathonId` (`CAN-HACK-XXXXXX`).
   - Enforces unique, lowercase, URL-safe `slug`.
   - Lifecycle enum: `['DRAFT', 'UPCOMING', 'ACTIVE', 'COMPLETED', 'ARCHIVED', 'CANCELLED']`.
   - Links 1:1 to its scoped `HackathonSetting` document via `settingsRef`.

2. **One Active Hackathon Rule (Database & Service Guard)**:
   - Partial unique compound index on `{ status: 1 }` with `{ status: 'ACTIVE', isDeleted: false }` ensures database-engine enforcement.
   - Service-level conflict detection: If Hackathon A is `ACTIVE` and an Admin attempts to activate Hackathon B, the system blocks the request with a clean, user-friendly error:
     `"Another hackathon is currently active. Complete or archive the current hackathon before activating this one."`
   - Zero silent status overrides. Existing active hackathons remain untouched.

3. **Safe Settings Isolation & Fallback Remediation**:
   - Updated `HackathonSetting.getOrCreateSettings` in `BACKEND/models/HackathonSetting.js` to eliminate arbitrary `findOne()` first-document fallbacks for new hackathons.
   - Preserved legacy fallback strictly for `'can-hackathon-2026'` to ensure 100% backward compatibility with existing Phase 1–9 features and regression test suites.
   - When a new Hackathon is created, a **fresh, isolated** `HackathonSetting` document is provisioned with sensible defaults. No existing operational data or settings are copied or reused.

4. **Centralized Management Service** (`BACKEND/services/hackathonManagementService.js`):
   - `createHackathon`: Generates canonical ID, validates slug, creates settings, persists master record in `DRAFT` status.
   - `getHackathons`: Lists hackathons with status counts, search, and pagination.
   - `getHackathonByIdOrSlug`: Flexible retrieval by canonical ID or URL slug.
   - `updateHackathon`: Updates editable metadata; locks immutable `hackathonId` and restricts slug modifications after publication.
   - `transitionStatus`: Enforces lifecycle transition rules (`DRAFT` $\to$ `UPCOMING` $\to$ `ACTIVE` $\to$ `COMPLETED` $\to$ `ARCHIVED`) and rejects invalid backwards steps (`COMPLETED` $\to$ `ACTIVE` or `ARCHIVED` $\to$ `ACTIVE`).

5. **Admin Management APIs** (`BACKEND/routes/hackathonManagementRoutes.js`):
   - `POST /api/hackathons`: Create new Hackathon (Admin only)
   - `GET /api/hackathons`: List Hackathons with status filter & pagination (Admin only)
   - `GET /api/hackathons/:hackathonId`: Retrieve details (Admin only)
   - `PATCH /api/hackathons/:hackathonId`: Update metadata (Admin only)
   - `POST /api/hackathons/:hackathonId/upcoming`: Move to UPCOMING (Admin only)
   - `POST /api/hackathons/:hackathonId/activate`: Activate (Admin only, 409 conflict if another is active)
   - `POST /api/hackathons/:hackathonId/complete`: Mark COMPLETED (Admin only)
   - `POST /api/hackathons/:hackathonId/archive`: Mark ARCHIVED (Admin only)
   - `GET /api/hackathons/check-slug/:slug`: Live slug availability check (Admin only)

6. **Admin Frontend UI** (`FRONTEND/src/Components/Hackathon/HackathonListManager.jsx`):
   - Prominent **ACTIVE NOW** banner identifying the currently active hackathon.
   - Filter bar: All, Draft, Upcoming, Active, Completed, Archived with live count badges.
   - Create Hackathon modal with real-time slug generator and availability checker.
   - Edit Hackathon modal with locked slug after publication.
   - Lifecycle transition buttons customized by status.
   - Active Hackathon Conflict Alert modal displaying the exact conflict message when activation is rejected.
   - Seamlessly integrated into `HackathonAdminWorkspace.jsx` and `AdminDashboard.jsx`.

---

## 3. Files Created & Modified

### New Files Created
1. `BACKEND/models/Hackathon.js` — Top-level master Hackathon schema, lifecycle validators, and partial unique index.
2. `BACKEND/services/hackathonManagementService.js` — Central business logic for multi-hackathon creation, ID generation, slug validation, and lifecycle guards.
3. `BACKEND/controllers/hackathonManagementController.js` — HTTP controllers for multi-hackathon admin operations.
4. `BACKEND/routes/hackathonManagementRoutes.js` — Admin-only Express router protected by `auth` and `verifyAdmin`.
5. `FRONTEND/src/Components/Hackathon/HackathonListManager.jsx` — Frontend management UI with directory, filters, create/edit modals, and conflict dialogs.
6. `BACKEND/tests/testMultiHackathonCore.js` — 30 comprehensive unit & integration tests.
7. `docs/Multi_Hackathon_Phase_M2_Implementation.md` — This technical documentation.

### Existing Files Modified
1. `BACKEND/models/HackathonSetting.js` — Added `hackathonRef` field; updated `getOrCreateSettings` static to prevent dangerous fallback for new hackathons.
2. `BACKEND/models/HackathonAuditLog.js` — Added `'Hackathon'` to `targetEntity` enum.
3. `BACKEND/index.js` — Mounted `/api/hackathons` router.
4. `BACKEND/routes/hackathon.js` — Mounted `/admin/hackathons` for dual-route backward compatibility.
5. `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx` — Imported `HackathonListManager`, added "Hackathons" tab, and added quick-navigation banner in Overview tab.

---

## 4. Database Indexes

### `Hackathon` Collection (`hackathons`)
- `{ hackathonId: 1 }` (Unique, required, system-generated canonical key)
- `{ slug: 1 }` (Unique, required, lowercase URL slug)
- `{ status: 1 }` with `{ name: 'unique_active_hackathon_idx', unique: true, partialFilterExpression: { status: 'ACTIVE', isDeleted: false } }` (Enforces maximum 1 active hackathon across entire platform)
- `{ startDate: 1 }` (Timeline sorting)
- `{ endDate: 1 }` (Timeline sorting)
- `{ createdAt: -1 }` (Administrative listing)

### `HackathonSetting` Collection (`hackathonsettings`)
- `{ hackathonId: 1 }` (Unique key)
- `{ hackathonRef: 1 }` (Reference back to master `Hackathon._id`)

---

## 5. Lifecycle Transition Matrix

$$\begin{array}{|l|l|l|}
\hline
\textbf{Current Status} & \textbf{Permitted Target Statuses} & \textbf{Blocked Transitions} \\
\hline
\text{DRAFT} & \text{UPCOMING, ACTIVE, CANCELLED} & \text{COMPLETED, ARCHIVED} \\
\text{UPCOMING} & \text{ACTIVE, DRAFT, CANCELLED} & \text{COMPLETED, ARCHIVED} \\
\text{ACTIVE} & \text{COMPLETED, CANCELLED} & \text{DRAFT, UPCOMING, ARCHIVED} \\
\text{COMPLETED} & \text{ARCHIVED} & \text{DRAFT, UPCOMING, ACTIVE} \\
\text{ARCHIVED} & \text{None (Terminal)} & \text{DRAFT, UPCOMING, ACTIVE, COMPLETED} \\
\hline
\end{array}$$

---

## 6. Active Hackathon Enforcement

### Requirement
$$\text{MAXIMUM ACTIVE HACKATHONS} = 1$$

### Implementation
1. **Server-Side Validation Guard**:
   ```javascript
   if (cleanTargetStatus === 'ACTIVE') {
     const existingActive = await Hackathon.findOne({
       status: 'ACTIVE',
       hackathonId: { $ne: hackathon.hackathonId },
       isDeleted: { $ne: true },
     }).lean();

     if (existingActive) {
       const error = new Error(
         `Another hackathon is currently active. Complete or archive the current hackathon before activating this one.`
       );
       error.code = 'ACTIVE_HACKATHON_CONFLICT';
       error.activeHackathon = {
         hackathonId: existingActive.hackathonId,
         name: existingActive.name,
         slug: existingActive.slug,
       };
       throw error;
     }
   }
   ```
2. **Atomic Transition & Partial Unique Index**:
   - State transition executes atomically via `findOneAndUpdate`.
   - Concurrency race conditions are trapped by the partial unique index `unique_active_hackathon_idx`.
   - If rejected, controller responds with HTTP `409 Conflict`.
   - Admin UI catches HTTP 409 and renders the conflict modal identifying which event is currently active.

---

## 7. Compatibility Notes

- **Existing 2026 Production System**: `can-hackathon-2026` remains the default for all existing Phase 1–9 endpoints.
- **Settings Fallback**: `HackathonSetting.getOrCreateSettings('can-hackathon-2026')` preserves legacy fallback behavior for existing test suites.
- **Operational Data Isolation**: Teams, payments, submissions, judge accounts, and certificates in the database were **NOT modified, deleted, or migrated**.

---

## 8. Test Results

### Phase M2 Test Suite (`testMultiHackathonCore.js`)
All **30 of 30** tests passed:
- `Test 1-6`: Creation, Canonical ID generation (`CAN-HACK-XXXXXX`), Immutability, Slug uniqueness, and Duplicate slug rejection.
- `Test 7-12`: Lifecycle transitions (`DRAFT` $\to$ `UPCOMING` $\to$ `ACTIVE` $\to$ `COMPLETED` $\to$ `ARCHIVED`) and rejection of invalid backwards transitions.
- `Test 13-20`: Fresh settings creation; verified 0 teams, 0 payments, 0 submissions, 0 judges, 0 evaluations, 0 results, 0 certificates copied into new hackathon.
- `Test 21-24`: One-active rule enforcement; rejection of activating B while A is active; active hackathon preservation; concurrency race safety.
- `Test 25-27`: Admin authorization guard (`verifyAdmin` rejects non-admin with HTTP 403).
- `Test 28-30`: Regression shield: 2026 data intact; 2026 settings readable; arbitrary `findOne()` fallback blocked for new hackathons.

### Existing Regression Test Suites
1. `testTeamIdentityArchitecture.js`: **25 / 25 PASSED**
2. `testUnstopTwoStageImport.js`: **10 / 10 PASSED**
3. `testGoLiveVerificationAudit.js`: **112 / 112 PASSED**
4. Frontend production build (`npm run build`): **SUCCESS (0 errors)**

---

## 9. What is Intentionally Deferred to M3+

Per Phase M2 instructions, the following items are intentionally deferred:
- **Phase M3**: Dynamic Hackathon Context middleware (`resolveHackathon.js`), header extraction (`x-hackathon-id`), and public routing `/hackathon/:slug`.
- **Phase M4**: Database migration & operational data backfill (tagging existing 2026 records and audit logs).
- **Phase M5+**: Dynamic controller scoping across teams, payments, submissions, editorial judges, results, and certificates.
