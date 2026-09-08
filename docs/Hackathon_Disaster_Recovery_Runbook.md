# Code-A-Nova Multi-Hackathon Disaster Recovery Runbook (M11)

**Document Version:** 1.0 (Phase M11 Readiness)  
**Author:** Antigravity Engineering Team  
**Scope:** Multi-Hackathon Platform Infrastructure & Disaster Recovery  
**Target RPO (Recovery Point Objective):** < 1 Hour  
**Target RTO (Recovery Time Objective):** < 30 Minutes  

---

## 1. Emergency Escalation Contacts & Roles

| Role | Responsibility | Escalation Target |
| :--- | :--- | :--- |
| **Incident Commander** | Oversees recovery, coordinates actions, logs timeline | Engineering Lead |
| **Database Custodian** | Atlas restoration, point-in-time recovery, index checks | Platform SRE |
| **Payment Lead** | Razorpay reconciliation, webhook replay, ledger verification | Finance / Ops Admin |
| **Communications Lead**| Organizers / participants notification, status updates | Product Manager |

---

## 2. Infrastructure Backup Status & Verification

> [!CAUTION]
> **Honest Infrastructure State Declaration (Step 36/59 Requirement):**
> - **Application Source & Migrations:** `VERIFIED`. Code, schemas, migration scripts, and index definitions are fully tracked and versioned in Git.
> - **Database Backups (MongoDB Atlas):** `NOT VERIFIED (EXTERNAL)`. The platform connects to MongoDB Atlas via `MONGO_URI`. Automated snapshot frequency, continuous Cloud Backup (PITR), and retention schedules are managed inside the external MongoDB Atlas Cloud Console and cannot be programmatically verified without Atlas Administrative API credentials.
> - **Action Required:** Administrators must verify in the Atlas Console that Continuous Cloud Backups with at least 7-day retention are active on the production cluster.

---

## 3. Disaster Recovery Scenarios & Procedures

### Scenario A: MongoDB Database Outage or Data Corruption

#### Detection
- `/healthz` returns `mongodb: "disconnected"` or HTTP 500.
- Application logs show `MongoServerSelectionError` or connection timeouts.

#### Containment & Immediate Action
1. Set emergency maintenance mode on the frontend to prevent incoming submissions or registrations during recovery.
2. In Atlas Console: Select cluster -> **Backup** tab -> Choose latest healthy snapshot or Point-In-Time Restore (PITR) timestamp prior to corruption.
3. Restore to a dedicated recovery cluster or restore in-place according to incident severity.
4. If restoring to a new cluster URI, update `MONGO_URI` in Vercel environment variables and trigger an immediate redeployment.

#### Verification Post-Restore
Run the automated integrity audit script immediately:
```bash
node BACKEND/scripts/auditMultiHackathonIntegrity.js
```
Verify:
- `can-hackathon-2026` baseline data is intact (11 teams, 25 payments, 34 certificates).
- No duplicate canonical team IDs exist.
- Active hackathon count === 1.

---

### Scenario B: Application Deployment Failure / Regression (Rollback)

#### Vercel Backend Rollback
1. Open Vercel Dashboard -> Project -> **Deployments**.
2. Identify the last known good deployment SHA.
3. Click the three dots `...` -> **Instant Rollback**.
4. Test `/healthz` and `/api/hackathon/info` to confirm healthy response.

#### Netlify Frontend Rollback
1. Open Netlify Dashboard -> Site -> **Deploys**.
2. Select the previous successful production deploy.
3. Click **Publish deploy**.
4. Verify landing page and registration views load without console errors.

---

### Scenario C: Razorpay Payment Gateway & Webhook Failure

#### Detection
- Participants report payment deducted but team status remains `PAYMENT_PENDING`.
- Spikes in webhook 400/500 errors in backend logs.

#### Reconciliation & Replay Workflow
1. In Razorpay Dashboard -> **Webhooks** -> Review failed delivery log.
2. If failure was caused by application downtime, select failed events and click **Retry Delivery**.
3. The platform's idempotent webhook handler (`handlePaymentWebhook`) safely processes replayed events:
   - Derives `hackathonId` strictly from stored `HackathonPayment`.
   - Prevents duplicate confirmations via `{ paymentStatus: { $ne: 'PAID' } }` atomic conditional updates.
   - Preserves WhatsApp community unlock idempotently.
4. For manual reconciliation of isolated payments:
   - Identify payment via Razorpay Payment ID (`pay_XXXXXX`).
   - Query `HackathonPayment.findOne({ orderId })`.
   - Use admin payment verification to confirm team and record audit trail.

---

### Scenario D: Primary SMTP Failure & Email Failover

#### Architecture
The platform features an automated, multi-tiered email failover:
1. **Primary Transport:** Hostinger SMTP (`SMTP_HOST:465/587`).
2. **Secondary Fallback:** Resend REST API (`RESEND_API_KEY`).
3. **Database Logging:** `EmailLog` records the exact status (`SUCCESS` / `FAILED`), provider (`SMTP` / `RESEND`), and `idempotencyKey`.

#### Failover Recovery
1. If Hostinger SMTP encounters delivery blocks (e.g. rate limit, auth failure), `mailService.js` automatically routes the message through Resend without dropping the transaction.
2. If both fail, `EmailLog` logs `status: "FAILED"`.
3. To resend failed emails once SMTP/Resend is restored:
   - Open Admin Workspace -> Deliverability Widget.
   - Filter logs by `status: "FAILED"` and target `hackathonId`.
   - Trigger scoped batch resend via `POST /api/hackathon/admin/emails/bulk` or individual resend.

---

### Scenario E: Unstop Spreadsheet Import Interruption

#### Safeguards
1. **Stage 1 (Registrations):** Master upsert is idempotent. Re-running import updates existing records and appends missing members without duplicating teams.
2. **Stage 2 (PPTs):** Enrichment only. Unmatched PPT rows are flagged as `UNMATCHED` and **NEVER** create rogue teams.
3. If an import fails halfway:
   - Review `HackathonAuditLog` for the last committed batch.
   - Re-upload the original Excel file via `POST /api/hackathon/admin/unstop/preview`.
   - Re-commit with confidence: The identity resolver links existing canonical teams without duplicate ID generation.

---

## 4. Post-Recovery Multi-Hackathon Verification Checklist

Before reopening production traffic following any recovery event, execute:

1. **Configuration Validation:**
   ```bash
   node BACKEND/scripts/validateProductionConfig.js
   ```
2. **Integrity Audit:**
   ```bash
   node BACKEND/scripts/auditMultiHackathonIntegrity.js
   ```
3. **Multi-Hackathon Isolation Smoke Check:**
   - Verify Hackathon A dashboard shows only Hackathon A data.
   - Verify Hackathon B operational data is completely segregated.
   - Verify exactly one active hackathon is running.
