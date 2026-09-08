# Code-A-Nova Dynamic Multi-Hackathon Platform
## Product Requirements Document

Version: 1.0
Status: Implementation Ready
Project: Code-A-Nova Hackathon Platform

============================================================
0. OBJECTIVE
============================================================

Convert the existing Code-A-Nova Hackathon platform from a
single-hardcoded-hackathon architecture into a fully dynamic,
configuration-driven Multi-Hackathon Platform.

The platform must allow an Admin to:

1. Create a new Hackathon from the Admin Panel.
2. Configure all Hackathon settings without changing code.
3. Manage multiple past/upcoming hackathons.
4. Run only ONE hackathon as ACTIVE at a time.
5. Complete one hackathon and then activate another.
6. Keep every hackathon's data completely isolated.
7. Reuse the same student or judge across different hackathons
   only through explicit Admin action.
8. Keep the user's dashboard unified through "My Hackathons".
9. Show only the currently ACTIVE hackathon on the main dashboard
   promotional/action card.
10. Preserve all existing Code-A-Nova Phase 1–9 functionality.

Future workflow:

CREATE HACKATHON
→ CONFIGURE
→ OPEN
→ RUN
→ COMPLETE
→ ARCHIVE

No source-code modification should be required to conduct the
second, third, fourth, or future hackathons.

============================================================
1. NON-NEGOTIABLE ARCHITECTURE INVARIANTS
============================================================

### 1.1 One Real-World Team = One Internal Team ID

Every real-world team has exactly one permanent Internal Team ID:

CAN-TEAM-000001

Website Team ID and Unstop Team ID are SOURCE IDs ONLY.

Example:

Internal Team ID:
CAN-TEAM-000001

Website Registration ID:
CN-12121

Unstop Team ID:
CN-232323

Both may point to the same Internal Team.

Never use Website/Unstop IDs as the canonical internal Team identity.

Existing Team Identity Architecture must remain intact.

------------------------------------------------------------

### 1.2 Every Hackathon Has Its Own Immutable Identity

Every Hackathon must have:

hackathonId
name
slug
status
configuration
timestamps

Example:

CAN-HACK-2026-001

The hackathonId must be immutable.

------------------------------------------------------------

### 1.3 Hackathon Data Isolation

Every hackathon-specific entity MUST be scoped by hackathonId.

Examples:

Team
Participant Membership
Registration
PPT Submission
Payment
Final Submission
Judge Membership
Judge Assignment
Evaluation
Result
Winner
Certificate
Prize Fulfillment
Audit
Duplicate Queue
Notifications where applicable

No record from Hackathon A may automatically appear in Hackathon B.

------------------------------------------------------------

### 1.4 One ACTIVE Hackathon Maximum

The system may contain unlimited hackathons.

But:

MAXIMUM ACTIVE HACKATHONS = 1

Example:

Hackathon A = ACTIVE
Hackathon B = DRAFT

Admin cannot activate B.

After A becomes COMPLETED/CLOSED/ARCHIVED:

Admin may activate B.

Activation must be enforced SERVER-SIDE, not only in UI.

Database-level/transaction-safe protection should be considered.

------------------------------------------------------------

### 1.5 Global Identity vs Hackathon Participation

A student may participate in multiple hackathons.

A judge may judge multiple hackathons.

Global identity may be reused.

Hackathon-specific participation must remain separate.

Example:

Global User:
USER-001
student@gmail.com

Hackathon A:
Participation A
Team A
Submission A
Result A

Hackathon B:
Participation B
Team B
Submission B
Result B

Do NOT copy A's hackathon data into B.

------------------------------------------------------------

### 1.6 Explicit Reuse Only

Existing students/judges must NOT automatically appear inside a
new hackathon.

If Admin wants to reuse an existing participant/judge:

Admin explicitly searches and adds them to the new hackathon.

Only then should a new hackathon-specific membership/participation
record be created.

============================================================
2. HACKATHON LIFECYCLE
============================================================

Supported lifecycle:

DRAFT
→ UPCOMING
→ ACTIVE
→ COMPLETED
→ ARCHIVED

Optional:
CANCELLED

Definitions:

DRAFT:
Admin is configuring the hackathon.

UPCOMING:
Configured and scheduled, but not currently running.

ACTIVE:
Currently running hackathon.

COMPLETED:
Hackathon finished. Historical data remains accessible.

ARCHIVED:
Historical hackathon retained but no longer operational.

Rules:

- Only one ACTIVE hackathon.
- DRAFT/UPCOMING/COMPLETED/ARCHIVED can coexist.
- Completing one hackathon allows another to become ACTIVE.
- Do not automatically delete or modify completed hackathons.

============================================================
3. ADMIN HACKATHONS MODULE
============================================================

Add top-level Admin Panel section:

HACKATHONS

It must show all hackathons.

Tabs/filters:

All
Draft
Upcoming
Active
Completed
Archived

Each card/table row:

Hackathon Name
Status
Registration Start
Registration Deadline
Hackathon Start
Hackathon End
Participant Count
Team Count
Judge Count
Created Date
Actions

Actions:

Open Workspace
Edit
Duplicate Configuration (optional)
Activate
Complete
Archive
View

IMPORTANT:

"Duplicate Configuration" must copy configuration only,
NOT teams, participants, payments, submissions, judges,
evaluations, results, certificates, or any operational data.

============================================================
4. CREATE HACKATHON WIZARD
============================================================

Admin clicks:

+ CREATE NEW HACKATHON

Use a multi-step wizard.

------------------------------------------------------------
STEP 1 — BASIC INFORMATION
------------------------------------------------------------

Fields:

Hackathon Name
Slug
Short Description
Full Description
Logo
Banner
Organizer Name
Organizer Contact
Website URL if applicable

Slug must be unique.

------------------------------------------------------------
STEP 2 — SCHEDULE
------------------------------------------------------------

Fields:

Registration Start
Registration Deadline
Hackathon Start
Hackathon End
PPT Deadline
Final Submission Deadline
Evaluation Start
Evaluation End
Results Publication Date
Certificate Availability Date

All dates must be stored server-side.

All deadline enforcement must be server-side.

Timezone must be configurable, default:

Asia/Kolkata

------------------------------------------------------------
STEP 3 — REGISTRATION SETTINGS
------------------------------------------------------------

Fields:

Registration Enabled
Team Registration Enabled
Minimum Team Size
Maximum Team Size
Allowed Domains
Eligibility Rules
Required Profile Fields
Required Declarations

Website registration configuration must be dynamic.

------------------------------------------------------------
STEP 4 — PAYMENT SETTINGS
------------------------------------------------------------

Fields:

Payment Required
Fee
Currency
Payment Provider
Payment Deadline
Leader-only payment
Refund policy text if applicable

Never hardcode ₹49.

Payment amount must come from the selected hackathon configuration.

Existing Razorpay integration must remain functional.

------------------------------------------------------------
STEP 5 — UNSTOP IMPORT SETTINGS
------------------------------------------------------------

Configuration for:

Registration Import Enabled
PPT Import Enabled
Matching Rules
Allowed Import Stages
Ignored Columns
Duplicate Handling

Existing Unstop two-stage architecture must remain.

Registration:
Master Team/Member source.

PPT:
Enrichment only.

PPT must never create a new Team.

------------------------------------------------------------
STEP 6 — SUBMISSION SETTINGS
------------------------------------------------------------

Configure:

PPT submission
GitHub
Hosted URL
Demo
LinkedIn
Other links
Final submission deadline
Draft allowed
Final lock
Admin unlock

Existing Phase 5 behavior must remain configurable.

------------------------------------------------------------
STEP 7 — JUDGE & EVALUATION SETTINGS
------------------------------------------------------------

Fields:

Judging Enabled
Blind Review
Evaluation Rubric
Score ranges
Criteria
Weights
Number of judges per team
Assignment rules
Conflict rules
Evaluation deadline

Existing Phase 6 behavior must remain.

------------------------------------------------------------
STEP 8 — RESULTS SETTINGS
------------------------------------------------------------

Fields:

Results Enabled
Winner Categories
Tie-breaking rules
Results publication
Participant result visibility
Public result visibility

Existing Phase 7 behavior must remain.

------------------------------------------------------------
STEP 9 — CERTIFICATE SETTINGS
------------------------------------------------------------

Fields:

Certificates Enabled
Certificate Template
Certificate Prefix
Numbering format
QR Verification
Participant certificate
Winner certificate
Judge certificate
Organizer certificate if applicable

Existing Phase 8 behavior must remain.

Certificate numbering must be scoped safely and must not collide
across hackathons.

Example:

CAN-2026-XXXXXX

or configurable:

CAN-AI-2027-XXXXXX

------------------------------------------------------------
STEP 10 — SPONSOR / PRIZE SETTINGS
------------------------------------------------------------

Fields:

Sponsors
Prize categories
Prize amounts
Prize descriptions
Fulfillment workflow

Existing Phase 8 functionality must remain.

------------------------------------------------------------
STEP 11 — EMAIL / NOTIFICATION SETTINGS
------------------------------------------------------------

Fields:

Sender display name
Reply-to
Email templates
Notification toggles

Do not expose SMTP secrets in UI.

Existing secure mail architecture must remain.

------------------------------------------------------------
STEP 12 — REVIEW & CREATE
------------------------------------------------------------

Show complete configuration summary.

Admin clicks:

CREATE HACKATHON

System creates:

Hackathon record
Configuration
Empty operational datasets

NO teams
NO participants
NO payments
NO submissions
NO evaluations
NO results
NO certificates
NO judges

unless Admin explicitly adds/imports them.

============================================================
5. EXISTING HACKATHON MIGRATION
============================================================

The current Code-A-Nova hackathon must become the first dynamic
Hackathon record.

DO NOT create a fresh replacement.

Existing data must remain intact.

Create:

Current Hackathon
→ assign immutable hackathonId

All existing Phase 1–9 records must receive/reference the correct
hackathonId.

Migration must preserve:

Teams
Members
Website IDs
Unstop IDs
PPT
Payments
Final submissions
Judges
Assignments
Evaluations
Results
Winners
Certificates
Prizes
Audit logs

Before migration:

Perform read-only audit.

Report:

- Models affected
- Collections affected
- Current references
- Records requiring migration
- Potential orphan records
- Potential duplicate references

Then implement safe migration.

NEVER perform destructive deletion automatically.

============================================================
6. TEAM IDENTITY + MULTI-HACKATHON
============================================================

The existing Team Identity Architecture remains mandatory.

Each team belongs to exactly one hackathon context.

Internal Team ID:

CAN-TEAM-XXXXXX

Source IDs:

Website Registration IDs
Unstop Team IDs

Source IDs must remain preserved.

IMPORTANT:

A team from Hackathon A must NOT automatically become a team
in Hackathon B.

If the same real-world student/team participates in B:

Admin/user creates a NEW Hackathon B participation/team context.

Do not copy Hackathon A's submissions/payment/result/etc.

============================================================
7. STUDENT / PARTICIPANT MODEL
============================================================

Separate:

GLOBAL USER IDENTITY

from

HACKATHON PARTICIPATION.

A global user may exist once.

Participation is hackathon-scoped.

Example:

User:
USER-001

Participation A:
hackathonId = A
teamId = TEAM-A

Participation B:
hackathonId = B
teamId = TEAM-B

Do not merge participation records.

------------------------------------------------------------
PARTICIPANT VISIBILITY RULE
------------------------------------------------------------

When Admin opens Hackathon B:

By default show ONLY:

Hackathon B participants.

Do NOT show students who participated in Hackathon A.

Admin can explicitly search:

"Existing Users"

and add an existing user to Hackathon B.

This creates a new Hackathon B membership/participation.

Existing Hackathon A data remains untouched.

============================================================
8. JUDGE MODEL
============================================================

Separate:

GLOBAL JUDGE IDENTITY

from

HACKATHON JUDGE MEMBERSHIP.

Same judge may participate in multiple hackathons.

Example:

Global Judge:
JUDGE-001

Hackathon A Judge Membership:
hackathonId=A

Hackathon B Judge Membership:
hackathonId=B

Assignments and evaluations are completely separate.

When opening Hackathon B:

ONLY Hackathon B judges are shown by default.

Admin may:

+ Add New Judge

or

+ Add Existing Judge

"Add Existing Judge" must require explicit Admin action.

No automatic inheritance.

============================================================
9. PUBLIC / USER ROUTING
============================================================

Main route:

/hackathon

must represent the currently ACTIVE hackathon.

Because only one hackathon can be ACTIVE, there is no ambiguity.

Example:

/hackathon
→ CodeArambh 2.0

After CodeArambh is completed and another hackathon becomes active:

/hackathon
→ AI Innovation Hackathon

No frontend code change required.

------------------------------------------------------------
OPTIONAL DIRECT SLUG ROUTE
------------------------------------------------------------

Support:

/hackathon/:slug

for viewing a specific hackathon where appropriate.

Example:

/hackathon/codearambh-2
/hackathon/ai-innovation-2027

This route is useful for historical/public pages.

But:

/hackathon

always resolves to the current ACTIVE hackathon.

============================================================
10. USER DASHBOARD
============================================================

The main user dashboard must NOT show every hackathon as the main
promotional/action card.

------------------------------------------------------------
ACTIVE HACKATHON CARD
------------------------------------------------------------

Show ONLY the currently ACTIVE hackathon.

Card contains:

Hackathon Name

Last Date to Register

Dynamic action button.

Example:

--------------------------------
🚀 CodeArambh 2.0

Last Date to Register:
20 September 2026

[ Register Now ]
--------------------------------

Button behavior:

Not registered:
Register Now

Pending:
Verification Pending

Registered:
Open Hackathon

Registration closed:
Registration Closed

IMPORTANT:

Name and deadline must come dynamically from the active Hackathon
configuration.

Never hardcode the active hackathon.

------------------------------------------------------------
MY HACKATHONS
------------------------------------------------------------

Below the active card:

MY HACKATHONS

Show hackathons in which the logged-in user actually participated.

Example:

CodeArambh 2.0
Completed
Team: Code Warriors
Result: Winner
Certificate: Available

AI Innovation Hackathon
Completed
Team: Tech Titans
Result: Participant
Certificate: Available

Future Hackathon
Active
Team: Nova
Status: Final Submission

Each card must clearly identify its hackathon.

Clicking opens that hackathon's scoped participant workspace.

============================================================
11. PARTICIPANT DATA ISOLATION
============================================================

A user may have:

Hackathon A:
Team A
PPT A
Payment A
Submission A
Result A

Hackathon B:
Team B
PPT B
Payment B
Submission B
Result B

Never mix:

Payment A with B
PPT A with B
Result A with B
Certificate A with B
Team A with B

============================================================
12. ADMIN WORKSPACE CONTEXT
============================================================

Admin selects:

Hackathon A

Then all workspace operations automatically operate within:

hackathonId = A

Example:

/admin/hackathons/:hackathonId

or equivalent existing routing architecture.

All APIs must enforce hackathon scope server-side.

Never rely only on frontend-selected IDs.

============================================================
13. API ARCHITECTURE
============================================================

All hackathon-specific APIs must resolve and validate hackathonId.

Example:

GET /api/hackathons
POST /api/hackathons
GET /api/hackathons/:id
PATCH /api/hackathons/:id

Workspace APIs must be scoped:

GET /api/hackathon/:hackathonId/teams
GET /api/hackathon/:hackathonId/judges
GET /api/hackathon/:hackathonId/submissions

Adapt existing route conventions rather than unnecessarily
creating duplicate APIs.

Existing APIs may use context middleware.

Recommended:

resolveHackathonContext

validateHackathonAccess

requireActiveHackathon where required

============================================================
14. ACTIVE HACKATHON RULE
============================================================

Activation algorithm:

Admin requests:

ACTIVATE Hackathon B

Server checks:

Is another Hackathon ACTIVE?

If YES:

Reject.

Return:

"Another hackathon is currently active. Complete/close it before
activating this hackathon."

If NO:

Activate B.

This must be atomic/race-safe.

Two simultaneous activation requests must never result in two
ACTIVE hackathons.

------------------------------------------------------------
OPTIONAL TRANSITION
------------------------------------------------------------

Admin may have:

Complete Current Hackathon

then:

Activate Next Hackathon

Do not automatically deactivate an active hackathon merely because
another activation request was made.

Explicit lifecycle transition is preferred.

============================================================
15. FRESH HACKATHON GUARANTEE
============================================================

When creating a new hackathon:

All operational data must start empty.

Fresh:

Teams = 0
Participants = 0
Judges = 0
Payments = 0
PPT = 0
Final Submissions = 0
Evaluations = 0
Results = 0
Certificates = 0
Prize Fulfillment = 0

Configuration may be copied only if Admin explicitly chooses
"Duplicate Configuration".

Even then:

COPY CONFIG ONLY.

Never copy operational records.

============================================================
16. SEARCH / EXISTING USER REUSE
============================================================

Admin may search globally for:

Existing Participant
Existing Judge

Search can include:

Email
Name
Phone where permitted

Results must show previous hackathon memberships for context.

Example:

student@gmail.com

Previously participated:
✓ CodeArambh 2.0

[ADD TO CURRENT HACKATHON]

This action creates only the new hackathon-specific membership.

============================================================
17. SECURITY
============================================================

Every request must enforce:

- authenticated user where required
- admin authorization for admin operations
- hackathon scope
- ownership
- source ID validation
- no cross-hackathon data access
- no IDOR through hackathonId
- no participant access to another team's data
- no judge access to another hackathon's assignments
- no result leakage across hackathons

Never trust:

hackathonId
teamId
judgeId
participantId

from the client without server-side authorization.

============================================================
18. DATABASE INDEXING
============================================================

Add appropriate indexes for:

hackathonId
hackathonId + status
hackathonId + teamId
hackathonId + userId
hackathonId + judgeId

Source identity indexes must remain correct.

Examples:

hackathonId + sourceReferences.websiteRegistrationIds

hackathonId + sourceReferences.unstopTeamIds

Avoid global uniqueness constraints where they would prevent
legitimate reuse across different hackathons.

============================================================
19. EXISTING PHASES MUST BECOME HACKATHON-SCOPED
============================================================

Phase 1:
Settings
Teams
Participant portal

Phase 2:
Unstop imports

Phase 3:
Team review/scoring

Phase 4:
Payments

Phase 5:
Final submissions

Phase 6:
Judges/evaluations

Phase 7:
Results

Phase 8:
Certificates/sponsors/prizes

Phase 9:
Operations/security/exports

ALL must operate using the current Hackathon context.

Do not remove existing functionality.

============================================================
20. EMAILS / NOTIFICATIONS
============================================================

Every hackathon-specific email should resolve:

hackathon name
hackathon branding
deadline
links
team information

dynamically from the relevant hackathon.

Never hardcode:

CodeArambh
₹49
old deadlines
old URLs
old certificate text

unless configured for that hackathon.

============================================================
21. CONFIGURATION-DRIVEN UI
============================================================

Frontend must render based on Hackathon configuration.

If:

paymentRequired = false

do not show payment step.

If:

judgingEnabled = false

do not show judge-related UI.

If:

certificatesEnabled = false

do not expose certificate workflow.

If:

registrationEnabled = false

registration must be blocked.

Configuration is the source of truth.

============================================================
22. ADMIN DASHBOARD COUNTS
============================================================

All counts must be scoped to selected hackathon.

Example:

Hackathon A:
Teams 120
Participants 480

Hackathon B:
Teams 35
Participants 120

Never combine counts inside an individual workspace.

Global Admin Hackathons list may show aggregate per-hackathon
counts.

============================================================
23. AUDIT LOGGING
============================================================

Audit:

Hackathon creation
Hackathon update
Activation
Completion
Archive
Configuration changes
Participant added
Existing participant reused
Judge added
Existing judge reused
Team identity merge
Duplicate resolution
Import
Payment configuration changes
Result publication
Certificate generation

Each audit event should include hackathon context.

============================================================
24. MIGRATION SAFETY
============================================================

Before production migration:

1. Backup database.
2. Run dry-run migration.
3. Report affected records.
4. Verify orphan count.
5. Verify duplicate count.
6. Verify Team references.
7. Verify payment references.
8. Verify submission references.
9. Verify judge/evaluation references.
10. Verify certificate references.

Only then perform migration.

Never silently discard data.

============================================================
25. TESTING REQUIREMENTS
============================================================

Create a dedicated:

testMultiHackathonArchitecture.js

Minimum required scenarios:

1. Create Hackathon A.
2. Create Hackathon B.
3. Both exist simultaneously.
4. Only one can be ACTIVE.
5. A ACTIVE prevents B activation.
6. Completing A allows B activation.
7. /hackathon resolves to active hackathon.
8. Old completed hackathon remains accessible.
9. New hackathon starts with zero operational records.
10. Team A cannot appear in B.
11. Participant A cannot automatically appear in B.
12. Judge A cannot automatically appear in B.
13. Admin can explicitly add existing participant to B.
14. Admin can explicitly add existing judge to B.
15. Same global student can participate in A and B.
16. Same judge can judge A and B.
17. A payment cannot appear in B.
18. A PPT cannot appear in B.
19. A submission cannot appear in B.
20. A evaluation cannot appear in B.
21. A result cannot appear in B.
22. A certificate cannot appear in B.
23. A Team ID remains isolated.
24. Website/Unstop source IDs remain correctly scoped.
25. Existing Team Identity Architecture remains functional.
26. Unstop PPT in B cannot attach to Team A.
27. Admin workspace A shows only A data.
28. Admin workspace B shows only B data.
29. User dashboard active card shows only current active hackathon.
30. My Hackathons shows only hackathons where user participated.
31. Active card displays dynamic registration deadline.
32. Changing active hackathon changes dashboard card without code change.
33. Creating new hackathon does not modify old hackathon.
34. Duplicating configuration does not duplicate operational data.
35. Concurrent activation requests cannot create two active hackathons.

============================================================
26. REGRESSION TESTING
============================================================

After every implementation phase run:

Existing Team Identity tests:
25/25

Existing Unstop tests:
10/10

Existing Go-Live:
112/112

Frontend build:

npm run build

All existing Phase 1–9 tests must continue passing.

Do not accept:

P0 issues
P1 issues
cross-hackathon data leakage
duplicate active hackathons
broken existing production data

============================================================
27. IMPLEMENTATION PHASES
============================================================

Implement strictly in phases.

------------------------------------------------------------
PHASE M1 — ARCHITECTURE AUDIT
------------------------------------------------------------

DO NOT modify code initially.

Inspect:

Team model
User model
Judge model
Hackathon settings
Registration
Unstop import
PPT
Payment
Submission
Evaluation
Results
Certificates
Audit
Routes
Frontend context
Admin workspace

Identify all hardcoded single-hackathon assumptions.

Produce:

docs/Multi_Hackathon_Phase_M1_Audit.md

STOP after audit.

------------------------------------------------------------
PHASE M2 — HACKATHON CORE MODEL
------------------------------------------------------------

Create dynamic Hackathon entity/configuration.

Implement:

Hackathon model
status lifecycle
slug
configuration
timestamps

Create Admin Hackathons listing.

Create basic Create Hackathon wizard.

Do NOT migrate existing operational data yet.

Tests required.

STOP after verification.

------------------------------------------------------------
PHASE M3 — HACKATHON CONTEXT & DATA ISOLATION
------------------------------------------------------------

Add hackathonId scoping to all relevant models.

Implement backend context.

Update APIs.

Ensure Admin workspace operates on selected hackathon.

Test cross-hackathon isolation.

STOP after verification.

------------------------------------------------------------
PHASE M4 — EXISTING HACKATHON MIGRATION
------------------------------------------------------------

Safely assign current hackathonId to existing data.

Run dry-run.

Verify references.

Perform migration.

Run full regression.

STOP.

------------------------------------------------------------
PHASE M5 — DYNAMIC REGISTRATION + TEAM SYSTEM
------------------------------------------------------------

Make Website registration configuration-driven.

Make Unstop import hackathon-aware.

Preserve Team Identity Architecture.

New hackathon must start fresh.

Test:

Website
Unstop
Both
duplicate identity
source mappings

STOP.

------------------------------------------------------------
PHASE M6 — DYNAMIC PAYMENTS & SUBMISSIONS
------------------------------------------------------------

Make:

Payment
PPT
Final Submission

hackathon-scoped and configuration-driven.

No hardcoded:

fee
deadline
URLs
hackathon name

STOP.

------------------------------------------------------------
PHASE M7 — DYNAMIC JUDGES & EVALUATION
------------------------------------------------------------

Make judges/evaluations hackathon-scoped.

Implement:

Add New Judge
Add Existing Judge

Existing judges do not automatically appear.

Evaluation configuration per hackathon.

STOP.

------------------------------------------------------------
PHASE M8 — RESULTS, CERTIFICATES, SPONSORS, PRIZES
------------------------------------------------------------

Make Phase 7–8 functionality hackathon-scoped.

Certificates must identify correct hackathon.

Results must be isolated.

Prize fulfillment isolated.

STOP.

------------------------------------------------------------
PHASE M9 — ACTIVE HACKATHON & PUBLIC ROUTING
------------------------------------------------------------

Implement:

One ACTIVE hackathon invariant.

Dynamic:

/hackathon
/hackathon/:slug

Public pages use active hackathon.

Activation must be atomic.

STOP.

------------------------------------------------------------
PHASE M10 — USER DASHBOARD
------------------------------------------------------------

Implement:

Active Hackathon Card

ONLY active hackathon:

Name
Last Date to Register
Dynamic CTA

Then:

My Hackathons

Show user's actual participation history.

Do not mix data.

STOP.

------------------------------------------------------------
PHASE M11 — ADMIN REUSE WORKFLOWS
------------------------------------------------------------

Implement:

Add Existing Participant
Add Existing Judge

Explicit admin-only action.

Global identity reused.

Hackathon membership created fresh.

No operational data copied.

STOP.

------------------------------------------------------------
PHASE M12 — FULL QA & GO-LIVE
------------------------------------------------------------

Run:

Team Identity tests
Unstop tests
All Phase 1–9 tests
Multi-Hackathon tests
Security tests
Go-Live tests
Frontend build

Perform:

Cross-hackathon isolation audit
API audit
IDOR audit
Admin authorization audit
Data migration audit
Index audit
Production configuration audit

Generate:

docs/Multi_Hackathon_GoLive_Verification_Report.md

Final acceptance:

ALL TESTS PASS
NO P0
NO P1
NO CROSS-HACKATHON DATA LEAKAGE
ONE ACTIVE HACKATHON MAXIMUM
EXISTING DATA PRESERVED
NEW HACKATHON CREATION REQUIRES ZERO CODE CHANGES

============================================================
28. DEFINITION OF DONE
============================================================

The implementation is complete only when an Admin can do this:

1. Open Admin Panel.
2. Go to Hackathons.
3. Click Create New Hackathon.
4. Fill all settings.
5. Create it.
6. Configure it.
7. Activate it after the current hackathon is completed.
8. Open its workspace.
9. Register/import teams.
10. Add judges.
11. Run payments.
12. Run submissions.
13. Run evaluations.
14. Publish results.
15. Generate certificates.

WITHOUT modifying source code.

The previous hackathon must remain completely intact.

A student who participated in the previous hackathon must not
automatically appear in the new hackathon.

A judge who judged the previous hackathon must not automatically
appear in the new hackathon.

Admin may explicitly reuse them.

The user dashboard must show:

CURRENT ACTIVE HACKATHON CARD
+
MY HACKATHONS HISTORY

The main /hackathon route must always resolve to the currently
ACTIVE hackathon.

FINAL INVARIANTS:

ONE ACTIVE HACKATHON AT A TIME

ONE REAL-WORLD TEAM = ONE INTERNAL TEAM ID

ONE HACKATHON = ONE ISOLATED DATA CONTEXT

GLOBAL USER/JUDGE IDENTITY MAY BE REUSED

HACKATHON PARTICIPATION/JUDGE MEMBERSHIP IS ALWAYS NEW AND
HACKATHON-SCOPED

NO AUTOMATIC CROSS-HACKATHON DATA INHERITANCE

NO CODE CHANGE REQUIRED FOR FUTURE HACKATHONS