# Code-A-Nova Multi-Hackathon Incident Response Matrix (M11)

**Classification:** Internal Operational Security Standard  
**Document Version:** 1.0 (Phase M11 Readiness)  
**Applicability:** Production Multi-Hackathon Infrastructure  

---

## 1. Incident Severity Classification Matrix

| Severity Level | Response SLA | Escalation | Examples |
| :--- | :--- | :--- | :--- |
| **P0 (Critical Emergency)** | Immediate (< 15 mins) | All Leads + Executive | Cross-hackathon data leakage, payment integrity breach, live secret leak, database corruption |
| **P1 (High Operational Impact)** | < 1 Hour | Engineering + Support Leads | User authentication down, Razorpay checkout down, total email failure, submission portal locked unexpectedly |
| **P2 (Medium / Non-Blocking)** | < 6 Hours | On-Duty Developer | Analytics dashboard discrepancy, non-critical UI rendering bug, slow query warnings |

---

## 2. Standard Operating Procedures (SOP) by Severity

### 2.1 P0 Incidents

#### Incident Type 1: Cross-Hackathon Data Leakage
- **Detection:** Alerts from `operationalSearch`, reports of participants seeing another hackathon's submissions or results, or cross-tenant query logs in `HackathonAuditLog`.
- **Immediate Containment:**
  1. Restrict public endpoints or toggle the affected hackathon from `ACTIVE` to `DRAFT` or maintenance status.
  2. Invalidate all active editorial and admin sessions if scope was compromised.
- **Investigation:**
  1. Inspect `req.hackathonId` vs `entity.hackathonId` in the offending controller.
  2. Search recent commits for un-scoped `Model.find()` or missing `$match: { hackathonId }` aggregations.
- **Recovery:**
  1. Deploy hotfix ensuring strict `resolveHackathonContext` enforcement.
  2. Purge any shared frontend caches.
- **Verification:** Execute `testMultiHackathonSecurityHardening.js` to prove zero cross-tenant query access.
- **Post-Incident Audit:** File Root Cause Analysis (RCA), audit all access logs, notify affected organizers.

#### Incident Type 2: Payment Integrity Breach / Discrepancy
- **Detection:** Discrepancy between Razorpay settlement ledger and `HackathonPayment` records; unauthorized team status change to `CONFIRMED`.
- **Immediate Containment:**
  1. Freeze manual payment status overrides.
  2. Reject any payments lacking verified Razorpay HMAC signatures.
- **Investigation:**
  1. Verify `orderId`, `paymentId`, and `amount` against Razorpay API.
  2. Check for missing `currency` checks or webhook replay anomalies.
- **Recovery:** Reconcile database records with the authoritative Razorpay dashboard export.
- **Verification:** Run `testMultiHackathonPaymentsSubmissions.js` payment suite.
- **Post-Incident Audit:** Review HMAC signing keys and verify webhook endpoint rate limiting.

#### Incident Type 3: Live Credential or Secret Exposure
- **Detection:** Secret detected in public Git commit, log file, or client bundle.
- **Immediate Containment:**
  1. Immediately rotate the compromised secret (JWT secret, Mongo credentials, Razorpay keys, SMTP password).
  2. Invalidate existing JWT tokens.
- **Investigation:** Audit git history and API responses using automated scanner.
- **Recovery:** Update environment variables in Vercel and restart application.
- **Verification:** Run `validateProductionConfig.js` to ensure all new secrets are active and functional.
- **Post-Incident Audit:** Scrub git history via git filter-repo or BFG if committed to VCS.

---

### 2.2 P1 Incidents

#### Incident Type 1: Authentication / Login Service Outage
- **Detection:** Spike in 401/500 errors on `/api/auth/login` or `/api/hackathon/editorial/login`.
- **Containment:** Verify database connectivity and JWT signing module.
- **Investigation:** Check if Mongo connection pool is saturated or clock skew is invalidating tokens.
- **Recovery:** Recycle serverless instances; verify JWT secret configuration.
- **Verification:** Run authentication smoke tests.

#### Incident Type 2: Total Email Delivery Failure
- **Detection:** `EmailLog` shows consecutive failures on both SMTP and Resend.
- **Containment:** Check Hostinger SMTP account status and Resend account quota.
- **Investigation:** Review diagnostics output from `safeMailSender.js`.
- **Recovery:** Update credentials or switch primary transport to Resend API.
- **Verification:** Dispatch an admin test email via `POST /api/hackathon/admin/emails/test-send`.

#### Incident Type 3: Project Submission Portal Lockout
- **Detection:** Confirmed participants unable to save drafts or submit projects before official deadline.
- **Containment:** Verify `submissionDeadline` in `HackathonSetting` for target hackathon.
- **Investigation:** Check server UTC timestamp vs local hackathon timezone.
- **Recovery:** Adjust deadline timestamp in Admin Workspace if an unexpected early lock occurred.
- **Verification:** Test draft save and final submit for test team in draft hackathon.

---

### 2.3 P2 Incidents

#### Incident Type 1: Analytics or Leaderboard Discrepancy
- **Detection:** Leaderboard counts or KPI metrics do not match database totals.
- **Investigation:** Check for stale caching or missing `$match` stages in aggregation pipelines.
- **Recovery:** Invalidate analytics cache; verify division-by-zero guards.
- **Verification:** Run `testMultiHackathonAnalyticsLeaderboards.js`.

---

## 3. Post-Incident Review Requirements
Every P0 and P1 incident requires a documented Post-Mortem within 48 hours covering:
1. Incident Summary & Timeline
2. Root Cause Analysis (5 Whys methodology)
3. Immediate Actions Taken
4. Preventive Measures & Architectural Safeguards Added
5. Regression Tests Implemented to prevent recurrence
