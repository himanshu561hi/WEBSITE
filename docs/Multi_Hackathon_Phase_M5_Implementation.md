# Multi-Hackathon Phase M5: Registration, Teams, Participants & Operational Isolation

## 1. Executive Summary

Phase M5 establishes strict hackathon scoping, isolation, and identity boundaries across the operational core of the platform:
- **Registration & Team Creation**
- **Team Identity Resolution & Duplicate Handling**
- **Unstop Two-Stage Imports (Stage 1 Registration & Stage 2 PPT)**
- **Participant Team Lookup (`getMyTeam`)**
- **Admin Workspace Team Management & Duplicate Queue Resolution**

Every operational `HackathonTeam` and `HackathonDuplicateQueue` record is strictly bound to exactly one `hackathonId`. Cross-hackathon leakage, cross-hackathon duplicate merging, cross-hackathon PPT enrichment, and global email collisions have been systematically eliminated while multi-hackathon participation is supported.

---

## 2. Schema Enhancements & Compound Indexes

### 2.1 `HackathonTeam` Schema (`BACKEND/models/HackathonTeam.js`)
- **`hackathonId` Requirement**: Changed from having an implicit default `'can-hackathon-2026'` to `required: true, trim: true, index: true`.
- **Compound Indexes Added**:
  1. `{ hackathonId: 1, 'leader.email': 1 }`: Supports fast intra-hackathon leader email checks and queries.
  2. `{ hackathonId: 1, createdAt: -1 }`: Optimizes scoped pagination and admin team list ordering.
  3. `{ hackathonId: 1, 'members.email': 1 }`: Enables scoped membership overlap queries.

### 2.2 `HackathonDuplicateQueue` Schema (`BACKEND/models/HackathonDuplicateQueue.js`)
- **`hackathonId` Requirement**: Changed from implicit default `'can-hackathon-2026'` to `required: true, trim: true, index: true`.
- **Compound Indexes Added**:
  1. `{ hackathonId: 1, status: 1 }`: Speeds up retrieval of pending/resolved queue items for a selected hackathon.
  2. `{ hackathonId: 1, createdAt: -1 }`: Optimizes chronological queue review.

---

## 3. Operational Invariants & Business Logic

### 3.1 Team Creation & Registration Context
1. **Fails Closed on Missing Context**: Public registration routes require hackathon context (`resolveHackathonContext({ required: true, defaultToActive: false })`). If neither slug nor `x-hackathon-id` is provided, requests return `400 HACKATHON_CONTEXT_REQUIRED`.
2. **Slug-Based Resolution**: Registration via `/:slug/register` dynamically resolves the target hackathon via `resolveHackathonBySlug({ required: true })`. An invalid or inactive/archived hackathon returns `404 HACKATHON_NOT_FOUND` or `400 HACKATHON_REGISTRATION_CLOSED`.
3. **Explicit Hackathon Assignment**: Newly created teams explicitly store the resolved `hackathonId`.

### 3.2 Intra-Hackathon Uniqueness vs. Multi-Hackathon Participation
1. **Leader Email Uniqueness**: Enforced strictly *per hackathon*. A leader cannot register or lead two teams in the same hackathon (`400 LEADER_ALREADY_EXISTS_IN_HACKATHON`).
2. **Multi-Hackathon Participation**: The same individual (by email) is permitted to lead or join a team in Hackathon A, and simultaneously lead or join a team in Hackathon B.
3. **Team Name Scoping**: Teams in different hackathons may share the same team name without collision. Ambiguous team names within the same hackathon are safely routed to the `HackathonDuplicateQueue`.

### 3.3 Two-Stage Unstop Import Isolation
1. **Stage 1 (Registrations)**:
   - Requires `hackathonId` context (throws validation error if empty).
   - Batch lookup of existing teams is scoped by `{ hackathonId, unstopApplicationId }` or `{ hackathonId, unstopTeamId }`.
   - Teams are created/updated strictly inside the specified hackathon.
2. **Stage 2 (PPT Submissions)**:
   - Requires `hackathonId` context (throws validation error if empty).
   - Queries only active teams scoped to target `hackathonId` (`{ hackathonId, isDeleted: { $ne: true } }`).
   - **Never creates new teams**: Unmatched PPT entries are logged as `UNMATCHED` and never inserted as new teams.
   - **Cross-Hackathon Isolation**: A PPT submission in Hackathon B will *never* match or enrich a team in Hackathon A, even if the team name or leader email matches identically.

### 3.4 Team Identity & Duplicate Resolution
1. **Scoped Identity Resolution (`hackathonIdentityService.js`)**:
   - Lookups by Unstop Team ID, Application ID, Website Registration ID, Leader Email, or Team Name are strictly bounded to `hackathonScope`.
   - Audit logs capture `hackathonId`.
2. **Cross-Hackathon Merge Prevention**:
   - `resolveAdminVerification` enforces that the queue item and target team share the exact same `hackathonId`. Attempting to merge a queue item into a team from a different hackathon throws `CROSS_HACKATHON_MERGE_FORBIDDEN`.
   - When resolving as `KEEP_SEPARATE`, the newly created team is assigned the queue item's `hackathonId`.

### 3.5 Participant Experience (`getMyTeam`)
- `getMyTeam` returns the user's team scoped to the active hackathon or the hackathon specified via `x-hackathon-id`.
- The response payload explicitly returns `hackathonId`.
- If a user is registered in Hackathon A but queries Hackathon B, `hasTeam: false` is returned.

### 3.6 Admin Workspace & Isolation
- The admin workspace (`HackathonAdminWorkspace.jsx`) includes a Hackathon Switcher dropdown.
- All requests (`getOverview`, `getTeams`, `getDuplicateQueue`, `handleResolveDuplicate`, Unstop Import) include the `x-hackathon-id` header.
- Switching hackathons clears team lists, statistics, and duplicate items before loading the newly selected hackathon.
- Orphan cleanup (`cleanupOrphanedHackathonRecords`) was fortified to only target records belonging to soft-deleted teams (`isDeleted: true`), guaranteeing that unorphaned payments or legacy test records are never deleted.

---

## 4. Verification & Invariants Checklist

The dedicated test suite `BACKEND/tests/testMultiHackathonRegistrationTeams.js` validates **40 distinct invariants** across 7 groups:

| Test Group | Invariants Covered | Result |
| :--- | :--- | :--- |
| **Group 1: Team Creation & Registration Context** | Invariants 1–8 | **8/8 PASSED** |
| **Group 2: Team Uniqueness & Cross-Hackathon Participation** | Invariants 9–14 | **6/6 PASSED** |
| **Group 3: Unstop Import Stage 1 (Registration)** | Invariants 15–19 | **5/5 PASSED** |
| **Group 4: Unstop Import Stage 2 (PPT Submissions)** | Invariants 20–25 | **6/6 PASSED** |
| **Group 5: Team Identity & Duplicate Resolution** | Invariants 26–30 | **5/5 PASSED** |
| **Group 6: Participant Experience** | Invariants 31–34 | **4/4 PASSED** |
| **Group 7: Admin Experience** | Invariants 35–40 | **6/6 PASSED** |
| **Total** | **40 Invariants** | **40/40 PASSED** |

### Regression Suite Verification
- `testMultiHackathonCore.js`: 30/30 PASSED
- `testMultiHackathonContext.js`: 25/25 PASSED
- `testMultiHackathonMigration.js`: 30/30 PASSED
- `testTeamIdentityArchitecture.js`: 25/25 PASSED
- `testUnstopTwoStageImport.js`: 10/10 PASSED
- Frontend Production Build (`npm run build`): Exit Code 0 (0 errors)

---

## 5. Non-Destructive Invariant & Next Phase
- **Zero Record Deletions**: No production or historical team/queue/payment records were deleted.
- **Migration Status**: No data migration was performed in Phase M5 (`MIGRATION PERFORMED: NO`).
- **Phase Boundary**: Phase M6 has **NOT** been started.
