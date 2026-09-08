# Code-A-Nova Platform — Full Website Performance Audit
**Document**: `docs/Website_Performance_Audit.md`  
**Scope**: Entire Website (Frontend, Backend, APIs, Bundles, Assets, DB, Security & Auth)  
**Status**: Comprehensive Baseline Pre-Optimization Audit  
**Date**: September 2026

---

## 1. Executive Summary & Critical Findings

A complete repository-wide audit of Code-A-Nova was conducted covering:
- **515 Frontend API Invocations** across 92 React components and pages.
- **512 Backend Route Handlers** across 22 route modules in Express.
- **50 MongoDB Collections & Models**.
- **JavaScript & Asset Bundling** in Vite / Rollup.
- **Initial Page Load Behavior & Global Contexts**.

### Top Bottlenecks Identified:

1. **Monolithic Bundle (Zero Route Splitting)**:
   - `App.jsx` statically imports **every page in the website** (`AdminDashboard`, `HackathonAdminWorkspace` [7,853 lines], `EditorialDashboard`, `ResumeBuilder`, `AssessmentTerminal`, etc.).
   - Initial production JS bundle is **3,924 kB (3.92 MB)** (`dist/assets/index-*.js`).
   - A visitor simply loading the Homepage `/` or About page is forced to download the entire Admin panel, Hackathon system, PDF generators, and Excel parsers!

2. **Uncached & Duplicated Global Settings Calls on Initial Load**:
   - On the homepage `/`, `Navbar.jsx` simultaneously fires 5 requests:
     - `/api/admin/settings/leaderboard`
     - `/api/admin/settings/job-portal`
     - `/api/admin/interview-settings`
     - `/api/admin/resume-settings`
     - `/api/admin/assessment-settings`
   - Child components on the homepage (`Home.jsx`, `JobPortalCTA.jsx`, `MockInterviewCTA.jsx`, `ResumeBuilderCTA.jsx`) simultaneously fire the **exact same 4 endpoints** a second time without caching or request deduplication.
   - Total wasted duplicate HTTP requests on homepage mount: **8 redundant calls**.

3. **Global Provider Invocation (`InterviewConfigProvider`)**:
   - `<InterviewConfigProvider>` wraps the entire root in `App.jsx`, executing `GET /api/interview-config` on startup for all 100% of website visitors, even though only 3 interview-specific subpages use it.

4. **Synchronous Third-Party Scripts**:
   - Razorpay Checkout (`https://checkout.razorpay.com/v1/checkout.js`) is synchronously loaded in `FRONTEND/index.html` blocking parsing on all non-checkout pages.

5. **Oversized Static Assets**:
   - `founder-sign.png`: **2.17 MB**
   - `aptimaster.png`: **1.67 MB**
   - `about.png`: **1.54 MB**
   - Combined image payload for static assets is over **5.3 MB**.

6. **Missing Client-Side Query Layer**:
   - `@tanstack/react-query` is present in `package.json` but was never configured. Components directly make raw `axios` calls with `useState` and `useEffect`, resulting in zero caching and zero request deduplication on route navigation.

---

## 2. Complete Frontend API Inventory (515 Invocations)

| # | Method | Endpoint | Calling Component | Calling File:Line | Trigger | Initial Load? | Repeated? | Duplicate? | Cacheable? | Public / Private | Payload Size | Can Lazy Load? | Can Deduplicate? |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `GET` | `/api/admin/assessment/blueprints` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:119` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 2 | `GET` | `/api/admin/assessment/blueprints` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:139` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 3 | `GET` | `/api/admin/assessment/subcategories` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:148` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 4 | `GET` | `/api/admin/assessment/runtime/libraries` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:154` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 5 | `POST` | `/api/admin/assessment/blueprints` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:290` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 6 | `PUT` | `/api/admin/assessment/blueprints/` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:292` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 7 | `POST` | `Unknown` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:315` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 8 | `GET` | `/api/admin/assessment/blueprints//compare` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:338` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 9 | `POST` | `Unknown` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:358` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 10 | `POST` | `/api/admin/assessment/blueprints/import` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:381` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 11 | `GET` | `/api/admin/assessment/blueprints//export` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:403` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 12 | `POST` | `Unknown` | **AIBlueprintManager** | `FRONTEND/src/Admin/Assessment/AIBlueprintManager.jsx:427` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 13 | `GET` | `/api/admin/assessment/runtime-engine/health` | **AIRuntimeMonitor** | `FRONTEND/src/Admin/Assessment/AIRuntimeMonitor.jsx:48` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 14 | `GET` | `/api/admin/assessment/runtime-engine/logs` | **AIRuntimeMonitor** | `FRONTEND/src/Admin/Assessment/AIRuntimeMonitor.jsx:49` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 15 | `POST` | `Unknown` | **AIRuntimeMonitor** | `FRONTEND/src/Admin/Assessment/AIRuntimeMonitor.jsx:76` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 16 | `POST` | `/api/admin/assessment/runtime-engine/cooldown-reset` | **AIRuntimeMonitor** | `FRONTEND/src/Admin/Assessment/AIRuntimeMonitor.jsx:105` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 17 | `GET` | `/api/admin/assessment/analytics/overview` | **AnalyticsDashboard** | `FRONTEND/src/Admin/Assessment/AnalyticsDashboard.jsx:31` | Component Mount (useEffect) | Yes | No | No | Yes | Private (Auth Required) | Large (>50KB) | Yes | Yes |
| 18 | `GET` | `Unknown` | **AnalyticsDashboard** | `FRONTEND/src/Admin/Assessment/AnalyticsDashboard.jsx:58` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 19 | `GET` | `Unknown` | **AnalyticsDashboard** | `FRONTEND/src/Admin/Assessment/AnalyticsDashboard.jsx:71` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 20 | `GET` | `/api/admin/assessment/analytics/assessments` | **AssessmentAnalytics** | `FRONTEND/src/Admin/Assessment/AssessmentAnalytics.jsx:20` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 21 | `GET` | `/api/admin/assessment-settings` | **AssessmentDashboard** | `FRONTEND/src/Admin/Assessment/AssessmentDashboard.jsx:45` | Component Mount (useEffect) | Yes | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 22 | `POST` | `/api/admin/assessment-settings/toggle` | **AssessmentDashboard** | `FRONTEND/src/Admin/Assessment/AssessmentDashboard.jsx:58` | Component Mount (useEffect) | Yes | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 23 | `GET` | `/api/admin/assessment/dashboard/stats` | **AssessmentOverview** | `FRONTEND/src/Admin/Assessment/AssessmentOverview.jsx:34` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 24 | `POST` | `Unknown` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:119` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 25 | `GET` | `/api/admin/assessment/sessions` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:148` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 26 | `POST` | `Unknown` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:166` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 27 | `POST` | `Unknown` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:217` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 28 | `POST` | `Unknown` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:296` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 29 | `POST` | `Unknown` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:314` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 30 | `POST` | `Unknown` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:331` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 31 | `GET` | `Unknown` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:344` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 32 | `POST` | `Unknown` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:368` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 33 | `POST` | `Unknown` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:388` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 34 | `GET` | `/api/admin/assessment/sessions/` | **AssessmentSessionManager** | `FRONTEND/src/Admin/Assessment/AssessmentSessionManager.jsx:403` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 35 | `GET` | `/api/admin/assessment/recruiter/candidate/` | **CandidateVerification** | `FRONTEND/src/Admin/Assessment/CandidateVerification.jsx:25` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 36 | `GET` | `/api/admin/assessment/analytics/categories` | **CategoryAnalytics** | `FRONTEND/src/Admin/Assessment/CategoryAnalytics.jsx:19` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 37 | `GET` | `/api/admin/assessment/categories/` | **CategoryDetail** | `FRONTEND/src/Admin/Assessment/CategoryDetail.jsx:31` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 38 | `GET` | `/api/admin/assessment/categories` | **CategoryManager** | `FRONTEND/src/Admin/Assessment/CategoryManager.jsx:47` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 39 | `PATCH` | `/api/admin/assessment/categories//status` | **CategoryManager** | `FRONTEND/src/Admin/Assessment/CategoryManager.jsx:101` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 40 | `POST` | `/api/admin/assessment/categories//copy` | **CategoryManager** | `FRONTEND/src/Admin/Assessment/CategoryManager.jsx:114` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 41 | `DELETE` | `/api/admin/assessment/categories/` | **CategoryManager** | `FRONTEND/src/Admin/Assessment/CategoryManager.jsx:127` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 42 | `POST` | `/api/admin/assessment/categories/bulk-status` | **CategoryManager** | `FRONTEND/src/Admin/Assessment/CategoryManager.jsx:142` | User Action | No | No | No | No | Private (Auth Required) | Large (>50KB) | Yes | No |
| 43 | `POST` | `/api/admin/assessment/categories//generate-ai-questions` | **CategoryManager** | `FRONTEND/src/Admin/Assessment/CategoryManager.jsx:157` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 44 | `POST` | `/api/admin/assessment/categories/bulk-delete` | **CategoryManager** | `FRONTEND/src/Admin/Assessment/CategoryManager.jsx:177` | User Action | No | No | No | No | Private (Auth Required) | Large (>50KB) | Yes | No |
| 45 | `PUT` | `/api/admin/assessment/categories/` | **CategoryManager** | `FRONTEND/src/Admin/Assessment/CategoryManager.jsx:193` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 46 | `POST` | `/api/admin/assessment/categories/wizard` | **CategoryWizard** | `FRONTEND/src/Admin/Assessment/CategoryWizard.jsx:107` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 47 | `GET` | `/api/admin/assessment/analytics/certificates` | **CertificateAnalytics** | `FRONTEND/src/Admin/Assessment/CertificateAnalytics.jsx:20` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 48 | `GET` | `/api/admin/assessment/recruiter/certificate/` | **CertificateVerification** | `FRONTEND/src/Admin/Assessment/CertificateVerification.jsx:24` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 49 | `GET` | `/api/admin/assessment/categories` | **ConfigManager** | `FRONTEND/src/Admin/Assessment/ConfigManager.jsx:130` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 50 | `GET` | `/api/admin/assessment/configs/global` | **ConfigManager** | `FRONTEND/src/Admin/Assessment/ConfigManager.jsx:139` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 51 | `GET` | `/api/admin/assessment/configs` | **ConfigManager** | `FRONTEND/src/Admin/Assessment/ConfigManager.jsx:151` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 52 | `PUT` | `Unknown` | **ConfigManager** | `FRONTEND/src/Admin/Assessment/ConfigManager.jsx:223` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 53 | `PUT` | `/api/admin/assessment/configs/global` | **ConfigManager** | `FRONTEND/src/Admin/Assessment/ConfigManager.jsx:245` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 54 | `POST` | `/api/admin/assessment/configs//reset` | **ConfigManager** | `FRONTEND/src/Admin/Assessment/ConfigManager.jsx:248` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 55 | `POST` | `/api/admin/assessment/configs//clone` | **ConfigManager** | `FRONTEND/src/Admin/Assessment/ConfigManager.jsx:276` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 56 | `POST` | `/api/admin/assessment/configs/bulk-update` | **ConfigManager** | `FRONTEND/src/Admin/Assessment/ConfigManager.jsx:311` | User Action | No | No | No | No | Private (Auth Required) | Large (>50KB) | Yes | No |
| 57 | `GET` | `/api/admin/assessment/certificates` | **CredentialConsole** | `FRONTEND/src/Admin/Assessment/CredentialConsole.jsx:99` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 58 | `POST` | `/api/admin/assessment/certificates/generate/` | **CredentialConsole** | `FRONTEND/src/Admin/Assessment/CredentialConsole.jsx:137` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 59 | `POST` | `Unknown` | **CredentialConsole** | `FRONTEND/src/Admin/Assessment/CredentialConsole.jsx:164` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 60 | `POST` | `/api/admin/assessment/certificates/bulk-generate` | **CredentialConsole** | `FRONTEND/src/Admin/Assessment/CredentialConsole.jsx:185` | User Action | No | No | No | No | Private (Auth Required) | Large (>50KB) | Yes | No |
| 61 | `GET` | `/api/admin/assessment/evaluations/queue` | **EvaluationConsole** | `FRONTEND/src/Admin/Assessment/EvaluationConsole.jsx:123` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 62 | `POST` | `/api/admin/assessment/evaluate/` | **EvaluationConsole** | `FRONTEND/src/Admin/Assessment/EvaluationConsole.jsx:167` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 63 | `POST` | `/api/admin/assessment/evaluations/bulk` | **EvaluationConsole** | `FRONTEND/src/Admin/Assessment/EvaluationConsole.jsx:184` | User Action | No | No | No | No | Private (Auth Required) | Large (>50KB) | Yes | No |
| 64 | `GET` | `/api/admin/assessment/orchestration/workers` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:80` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 65 | `GET` | `/api/admin/assessment/orchestration/jobs` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:81` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 66 | `GET` | `/api/admin/assessment/orchestration/inventory` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:82` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 67 | `GET` | `/api/admin/assessment/orchestration/dlq` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:83` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 68 | `GET` | `/api/admin/assessment/orchestration/optimization-reports` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:84` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 69 | `GET` | `/api/admin/assessment/orchestration/events` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:85` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 70 | `GET` | `/api/admin/assessment/orchestration/scheduler` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:86` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 71 | `POST` | `/api/admin/assessment/orchestration/workers//state` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:110` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 72 | `POST` | `/api/admin/assessment/orchestration/inventory/trigger-recovery` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:125` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 73 | `POST` | `/api/admin/assessment/orchestration/optimization-scan` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:140` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 74 | `POST` | `/api/admin/assessment/orchestration/jobs//retry` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:154` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 75 | `POST` | `/api/admin/assessment/orchestration/jobs//cancel` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:169` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 76 | `POST` | `/api/admin/assessment/orchestration/dlq//restore` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:184` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 77 | `DELETE` | `/api/admin/assessment/orchestration/dlq/` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:196` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 78 | `POST` | `/api/admin/assessment/orchestration/jobs` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:209` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 79 | `POST` | `/api/admin/assessment/orchestration/scheduler/state` | **OrchestrationCenter** | `FRONTEND/src/Admin/Assessment/OrchestrationCenter.jsx:224` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 80 | `GET` | `/api/public/assessment/verify/` | **PublicVerification** | `FRONTEND/src/Admin/Assessment/PublicVerification.jsx:22` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 81 | `GET` | `/api/assessment/verify/` | **PublicVerificationPage** | `FRONTEND/src/Admin/Assessment/PublicVerificationPage.jsx:54` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 82 | `GET` | `/api/admin/assessment/subcategories` | **PublishControl** | `FRONTEND/src/Admin/Assessment/PublishControl.jsx:31` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 83 | `GET` | `/api/assessment/student/catalog` | **PublishControl** | `FRONTEND/src/Admin/Assessment/PublishControl.jsx:38` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 84 | `GET` | `/api/admin/assessment/analytics/questions` | **QuestionAnalytics** | `FRONTEND/src/Admin/Assessment/QuestionAnalytics.jsx:20` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 85 | `GET` | `/api/admin/assessment/categories` | **QuestionBankManager** | `FRONTEND/src/Admin/Assessment/QuestionBankManager.jsx:88` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 86 | `GET` | `/api/admin/assessment/subcategories` | **QuestionBankManager** | `FRONTEND/src/Admin/Assessment/QuestionBankManager.jsx:89` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 87 | `GET` | `/api/admin/assessment/knowledge-base/stats` | **QuestionBankManager** | `FRONTEND/src/Admin/Assessment/QuestionBankManager.jsx:108` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 88 | `GET` | `/api/admin/assessment/knowledge-base/questions` | **QuestionBankManager** | `FRONTEND/src/Admin/Assessment/QuestionBankManager.jsx:132` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 89 | `GET` | `/api/admin/assessment/knowledge-base/audits` | **QuestionBankManager** | `FRONTEND/src/Admin/Assessment/QuestionBankManager.jsx:148` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 90 | `POST` | `Unknown` | **QuestionBankManager** | `FRONTEND/src/Admin/Assessment/QuestionBankManager.jsx:187` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 91 | `PATCH` | `Unknown` | **QuestionBankManager** | `FRONTEND/src/Admin/Assessment/QuestionBankManager.jsx:207` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 92 | `GET` | `/api/admin/assessment/knowledge-base/questions/` | **QuestionBankManager** | `FRONTEND/src/Admin/Assessment/QuestionBankManager.jsx:230` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 93 | `POST` | `Unknown` | **QuestionBankManager** | `FRONTEND/src/Admin/Assessment/QuestionBankManager.jsx:270` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 94 | `GET/POST` | `/api/admin/assessment/intelligence/metrics` | **QuestionIntelligenceGate** | `FRONTEND/src/Admin/Assessment/QuestionIntelligenceGate.jsx:62` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 95 | `GET/POST` | `/api/admin/assessment/intelligence/validate-batch` | **QuestionIntelligenceGate** | `FRONTEND/src/Admin/Assessment/QuestionIntelligenceGate.jsx:97` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 96 | `GET/POST` | `/api/admin/assessment/intelligence/review-action` | **QuestionIntelligenceGate** | `FRONTEND/src/Admin/Assessment/QuestionIntelligenceGate.jsx:122` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 97 | `GET/POST` | `/api/admin/assessment/intelligence/reset` | **QuestionIntelligenceGate** | `FRONTEND/src/Admin/Assessment/QuestionIntelligenceGate.jsx:152` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 98 | `GET` | `/api/admin/assessment/recruiter/dashboard` | **RecruiterDashboard** | `FRONTEND/src/Admin/Assessment/RecruiterDashboard.jsx:26` | Component Mount (useEffect) | Yes | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 99 | `GET` | `/api/admin/assessment/analytics/runtime` | **RuntimeAnalytics** | `FRONTEND/src/Admin/Assessment/RuntimeAnalytics.jsx:19` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 100 | `GET` | `/api/admin/assessment/categories` | **SimpleConfigManager** | `FRONTEND/src/Admin/Assessment/SimpleConfigManager.jsx:36` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 101 | `GET` | `/api/admin/assessment/subcategories` | **SimpleConfigManager** | `FRONTEND/src/Admin/Assessment/SimpleConfigManager.jsx:40` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 102 | `GET` | `/api/admin/assessment/configs` | **SimpleConfigManager** | `FRONTEND/src/Admin/Assessment/SimpleConfigManager.jsx:44` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 103 | `GET` | `/api/admin/assessment/configs/` | **SimpleConfigManager** | `FRONTEND/src/Admin/Assessment/SimpleConfigManager.jsx:58` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 104 | `PUT` | `/api/admin/assessment/configs/` | **SimpleConfigManager** | `FRONTEND/src/Admin/Assessment/SimpleConfigManager.jsx:98` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 105 | `GET` | `/api/admin/assessment/configs` | **SimpleConfigManager** | `FRONTEND/src/Admin/Assessment/SimpleConfigManager.jsx:110` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 106 | `GET` | `/api/admin/assessment/categories` | **SimpleQuestionGenerator** | `FRONTEND/src/Admin/Assessment/SimpleQuestionGenerator.jsx:37` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 107 | `GET` | `/api/admin/assessment/subcategories` | **SimpleQuestionGenerator** | `FRONTEND/src/Admin/Assessment/SimpleQuestionGenerator.jsx:45` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 108 | `GET` | `/api/admin/assessment/generate-questions/count` | **SimpleQuestionGenerator** | `FRONTEND/src/Admin/Assessment/SimpleQuestionGenerator.jsx:62` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 109 | `POST` | `/api/admin/assessment/generate-questions` | **SimpleQuestionGenerator** | `FRONTEND/src/Admin/Assessment/SimpleQuestionGenerator.jsx:80` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 110 | `GET` | `/api/admin/assessment/analytics/students` | **StudentAnalytics** | `FRONTEND/src/Admin/Assessment/StudentAnalytics.jsx:20` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 111 | `GET` | `/api/admin/assessment/analytics/students/` | **StudentAnalytics** | `FRONTEND/src/Admin/Assessment/StudentAnalytics.jsx:37` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 112 | `GET` | `/api/assessment/results/` | **StudentResultView** | `FRONTEND/src/Admin/Assessment/StudentResultView.jsx:24` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 113 | `GET` | `/api/admin/assessment/categories` | **SubcategoryManager** | `FRONTEND/src/Admin/Assessment/SubcategoryManager.jsx:46` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 114 | `GET` | `/api/admin/assessment/subcategories` | **SubcategoryManager** | `FRONTEND/src/Admin/Assessment/SubcategoryManager.jsx:61` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 115 | `PUT` | `/api/admin/assessment/subcategories/` | **SubcategoryManager** | `FRONTEND/src/Admin/Assessment/SubcategoryManager.jsx:129` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 116 | `POST` | `/api/admin/assessment/subcategories` | **SubcategoryManager** | `FRONTEND/src/Admin/Assessment/SubcategoryManager.jsx:134` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 117 | `PATCH` | `/api/admin/assessment/subcategories//status` | **SubcategoryManager** | `FRONTEND/src/Admin/Assessment/SubcategoryManager.jsx:149` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 118 | `POST` | `/api/admin/assessment/subcategories//copy` | **SubcategoryManager** | `FRONTEND/src/Admin/Assessment/SubcategoryManager.jsx:162` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 119 | `DELETE` | `/api/admin/assessment/subcategories/` | **SubcategoryManager** | `FRONTEND/src/Admin/Assessment/SubcategoryManager.jsx:176` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 120 | `GET` | `/api/admin/assessment/analytics/trends` | **TrendAnalytics** | `FRONTEND/src/Admin/Assessment/TrendAnalytics.jsx:18` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 121 | `GET` | `/api/admin/assessment/recruiter/history` | **VerificationHistory** | `FRONTEND/src/Admin/Assessment/VerificationHistory.jsx:24` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 122 | `GET` | `Unknown` | **VerificationHistory** | `FRONTEND/src/Admin/Assessment/VerificationHistory.jsx:57` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 123 | `GET` | `Unknown` | **VerificationHistory** | `FRONTEND/src/Admin/Assessment/VerificationHistory.jsx:69` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 124 | `GET/POST` | `Unknown` | **ContactInquiriesTable** | `FRONTEND/src/Admin/Email/ContactInquiriesTable.jsx:121` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 125 | `GET/POST` | `/api/contact/inquiries//reply` | **ContactInquiriesTable** | `FRONTEND/src/Admin/Email/ContactInquiriesTable.jsx:190` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 126 | `GET/POST` | `/api/contact/inquiries//sync` | **ContactInquiriesTable** | `FRONTEND/src/Admin/Email/ContactInquiriesTable.jsx:225` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 127 | `GET/POST` | `/api/contact/inquiries//log-message` | **ContactInquiriesTable** | `FRONTEND/src/Admin/Email/ContactInquiriesTable.jsx:259` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 128 | `GET/POST` | `/api/contact/inquiries//status` | **ContactInquiriesTable** | `FRONTEND/src/Admin/Email/ContactInquiriesTable.jsx:290` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 129 | `GET/POST` | `/api/contact/inquiries/` | **ContactInquiriesTable** | `FRONTEND/src/Admin/Email/ContactInquiriesTable.jsx:325` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 130 | `GET/POST` | `/api/email/logs/analytics` | **EmailCenter** | `FRONTEND/src/Admin/Email/EmailCenter.jsx:19` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 131 | `GET/POST` | `/api/email/resend/` | **EmailCenter** | `FRONTEND/src/Admin/Email/EmailCenter.jsx:49` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 132 | `GET/POST` | `/api/email/logs` | **EmailLogsTable** | `FRONTEND/src/Admin/Email/EmailLogsTable.jsx:55` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 133 | `GET/POST` | `/api/email/logs/` | **ViewEmailModal** | `FRONTEND/src/Admin/Email/ViewEmailModal.jsx:25` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 134 | `GET/POST` | `/api/admin/audit-logs/track` | **App** | `FRONTEND/src/App.jsx:85` | Component Mount (useEffect) | Yes | No | No | No | Private (Auth Required) | Large (>50KB) | No | No |
| 135 | `GET` | `/api/resume` | **AIResumeCard** | `FRONTEND/src/Components/AIResumeCard.jsx:20` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 136 | `GET/POST` | `/api/contact/inquiries` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:138` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 137 | `GET` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:175` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 138 | `GET` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:219` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 139 | `GET` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:233` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 140 | `GET` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:247` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 141 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:259` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 142 | `GET` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:273` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 143 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:285` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 144 | `GET` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:299` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 145 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:311` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 146 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:342` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 147 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:369` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 148 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:385` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 149 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:488` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 150 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:518` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 151 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:574` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 152 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:720` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 153 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:766` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 154 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:782` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 155 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:806` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 156 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:821` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 157 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:836` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 158 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:851` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 159 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:867` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 160 | `GET/POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:906` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 161 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:951` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 162 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:985` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 163 | `POST` | `/api/admin/internship-resignation` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1012` | Component Mount (useEffect) | Yes | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 164 | `POST` | `/api/admin/internship-reject` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1037` | Component Mount (useEffect) | Yes | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 165 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1082` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 166 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1118` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 167 | `DELETE` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1148` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 168 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1169` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 169 | `GET` | `/api/admin/banner` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1827` | Component Mount (useEffect) | Yes | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 170 | `POST` | `Unknown` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1862` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 171 | `POST` | `/api/admin/banner` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1870` | Component Mount (useEffect) | Yes | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 172 | `DELETE` | `/api/admin/banner` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:1895` | Component Mount (useEffect) | Yes | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 173 | `POST` | `/api/admin/impersonate/invite` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:2074` | Component Mount (useEffect) | Yes | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 174 | `POST` | `/api/admin/impersonate` | **AdminDashboard** | `FRONTEND/src/Components/AdminDashboard.jsx:2094` | Component Mount (useEffect) | Yes | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 175 | `POST` | `/api/admin/login` | **AdminLogin** | `FRONTEND/src/Components/AdminLogin.jsx:26` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 176 | `GET` | `/api/admin/resume/analytics` | **AdminResumeView** | `FRONTEND/src/Components/AdminResumeView.jsx:44` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 177 | `GET` | `/api/admin/resume/all` | **AdminResumeView** | `FRONTEND/src/Components/AdminResumeView.jsx:45` | User Action | No | No | No | Yes | Private (Auth Required) | Large (>50KB) | Yes | Yes |
| 178 | `GET` | `/api/admin/resume-settings` | **AdminResumeView** | `FRONTEND/src/Components/AdminResumeView.jsx:46` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 179 | `GET` | `/api/admin/whitelisted-users` | **AdminResumeView** | `FRONTEND/src/Components/AdminResumeView.jsx:47` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 180 | `GET` | `/api/admin/resume-settings/granted-users` | **AdminResumeView** | `FRONTEND/src/Components/AdminResumeView.jsx:48` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 181 | `POST` | `/api/admin/resume-settings/toggle` | **AdminResumeView** | `FRONTEND/src/Components/AdminResumeView.jsx:73` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 182 | `POST` | `/api/admin/resume-settings/override-by-email` | **AdminResumeView** | `FRONTEND/src/Components/AdminResumeView.jsx:89` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 183 | `POST` | `/api/admin/resume-settings/grant-free` | **AdminResumeView** | `FRONTEND/src/Components/AdminResumeView.jsx:108` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 184 | `GET` | `/api/admin/users//details` | **AllUsersAdmin** | `FRONTEND/src/Components/AllUsersAdmin.jsx:44` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 185 | `GET` | `Unknown` | **AllUsersAdmin** | `FRONTEND/src/Components/AllUsersAdmin.jsx:69` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 186 | `POST` | `/api/student/ambassador-linkedin-post` | **AmbassadorIdCardModal** | `FRONTEND/src/Components/AmbassadorIdCardModal.jsx:25` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 187 | `GET` | `/api/student/ambassador-stats` | **AmbassadorTab** | `FRONTEND/src/Components/AmbassadorTab.jsx:53` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 188 | `GET/POST` | `Unknown` | **AuditLogsAdmin** | `FRONTEND/src/Components/AuditLogsAdmin.jsx:26` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 189 | `GET/POST` | `Unknown` | **AuditLogsAdmin** | `FRONTEND/src/Components/AuditLogsAdmin.jsx:52` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 190 | `GET/POST` | `/api/admin/audit-logs/summary` | **AuditLogsAdmin** | `FRONTEND/src/Components/AuditLogsAdmin.jsx:99` | User Action | No | No | No | No | Private (Auth Required) | Large (>50KB) | Yes | No |
| 191 | `GET` | `/api/admin/quiz-applicants/sponsor-details/` | **EditSponsorModal** | `FRONTEND/src/Components/EditSponsorModal.jsx:34` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 192 | `POST` | `Unknown` | **EditSponsorModal** | `FRONTEND/src/Components/EditSponsorModal.jsx:72` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 193 | `GET/POST` | `/api/admin/banner` | **FeatureBanner** | `FRONTEND/src/Components/FeatureBanner.jsx:30` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 194 | `GET` | `/api/admin/graphic-interns` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:96` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 195 | `GET` | `/api/admin/graphic-resources` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:110` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 196 | `GET` | `/api/admin/graphic-resource-requests` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:121` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 197 | `GET` | `/api/admin/graphic-tasks` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:132` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 198 | `POST` | `/api/admin/graphic-task` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:196` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 199 | `DELETE` | `/api/admin/graphic-task/` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:221` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 200 | `POST` | `/api/admin/graphic-resource` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:253` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 201 | `DELETE` | `/api/admin/graphic-resource/` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:276` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 202 | `PUT` | `/api/admin/graphic-resource-request/` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:290` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 203 | `POST` | `Unknown` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:305` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 204 | `POST` | `/api/admin/internship-resignation` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:327` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 205 | `POST` | `/api/admin/internship-reject` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:348` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 206 | `POST` | `Unknown` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:375` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 207 | `POST` | `Unknown` | **GraphicInternAdmin** | `FRONTEND/src/Components/GraphicInternAdmin.jsx:406` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 208 | `DELETE` | `Unknown` | **ConfirmDeleteModal** | `FRONTEND/src/Components/Hackathon/ConfirmDeleteModal.jsx:23` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 209 | `GET` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:157` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 210 | `GET` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:195` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 211 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:218` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 212 | `GET` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:261` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 213 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:286` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 214 | `PUT` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:306` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 215 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:332` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 216 | `GET` | `/api/hackathon/admin/editorial-assignments` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:363` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 217 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:384` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 218 | `DELETE` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:405` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 219 | `GET` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:441` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 220 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:460` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 221 | `GET` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:548` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 222 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:569` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 223 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:598` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 224 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:638` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 225 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:662` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 226 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:682` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 227 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:706` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 228 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:737` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 229 | `GET` | `/api/hackathon/admin/certificates/` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:781` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 230 | `GET` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:810` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 231 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:830` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 232 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:852` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 233 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:870` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 234 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:893` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 235 | `GET` | `/api/hackathon/admin/prizes` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:972` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 236 | `POST` | `/api/hackathon/admin/prizes` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:994` | User Action | No | Yes | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 237 | `PUT` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1003` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 238 | `DELETE` | `/api/hackathon/admin/prizes/` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1026` | User Action | No | Yes | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 239 | `GET` | `/api/hackathon/admin/sponsors` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1041` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 240 | `POST` | `/api/hackathon/admin/sponsors` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1063` | User Action | No | Yes | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 241 | `PUT` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1072` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 242 | `DELETE` | `/api/hackathon/admin/sponsors/` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1093` | User Action | No | Yes | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 243 | `GET` | `/api/hackathon/admin/prize-fulfillments` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1108` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 244 | `PATCH` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1126` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 245 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1151` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 246 | `GET` | `/api/hackathon/admin/health` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1198` | User Action | No | Yes | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 247 | `GET` | `/api/hackathon/admin/alerts` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1199` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 248 | `GET` | `/api/hackathon/admin/email-stats` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1200` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 249 | `GET` | `/api/hackathon/admin/security-summary` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1201` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 250 | `GET` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1229` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 251 | `GET` | `/api/hackathon/admin/export/` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1247` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 252 | `GET` | `/api/hackathon/admin/overview` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1298` | User Action | No | Yes | No | Yes | Private (Auth Required) | Large (>50KB) | Yes | Yes |
| 253 | `GET` | `/api/hackathon/admin/analytics` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1340` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 254 | `GET` | `/api/hackathon/admin/analytics/global` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1359` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 255 | `GET` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1386` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 256 | `GET` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1402` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 257 | `GET` | `/api/hackathons` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1422` | User Action | No | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 258 | `GET` | `/api/hackathon/admin/hackathons` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1426` | User Action | No | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 259 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1539` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 260 | `PUT` | `/api/hackathon/admin/settings` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1643` | User Action | No | Yes | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 261 | `POST` | `Unknown` | **HackathonAdminWorkspace** | `FRONTEND/src/Components/Hackathon/HackathonAdminWorkspace.jsx:1666` | User Action | No | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 262 | `GET` | `Unknown` | **HackathonListManager** | `FRONTEND/src/Components/Hackathon/HackathonListManager.jsx:123` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 263 | `GET` | `/api/hackathons/check-slug/` | **HackathonListManager** | `FRONTEND/src/Components/Hackathon/HackathonListManager.jsx:177` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 264 | `POST` | `/api/hackathons` | **HackathonListManager** | `FRONTEND/src/Components/Hackathon/HackathonListManager.jsx:199` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 265 | `PATCH` | `Unknown` | **HackathonListManager** | `FRONTEND/src/Components/Hackathon/HackathonListManager.jsx:224` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 266 | `POST` | `/api/hackathons//` | **HackathonListManager** | `FRONTEND/src/Components/Hackathon/HackathonListManager.jsx:273` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 267 | `DELETE` | `/api/hackathons/` | **HackathonListManager** | `FRONTEND/src/Components/Hackathon/HackathonListManager.jsx:310` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 268 | `GET` | `/api/hackathon/admin/teams/` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:111` | User Action | No | No | No | Yes | Private (Auth Required) | Large (>50KB) | Yes | Yes |
| 269 | `GET` | `/api/hackathon/admin/submissions/team/` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:133` | User Action | No | No | No | Yes | Private (Auth Required) | Large (>50KB) | Yes | Yes |
| 270 | `GET` | `/api/hackathon/admin/editorial-evaluations` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:145` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 271 | `GET` | `/api/hackathon/admin/team-360/` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:157` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 272 | `POST` | `Unknown` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:185` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 273 | `POST` | `Unknown` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:210` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 274 | `PUT` | `Unknown` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:274` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 275 | `PUT` | `Unknown` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:301` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 276 | `POST` | `Unknown` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:330` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 277 | `PUT` | `Unknown` | **TeamDetailDrawer** | `FRONTEND/src/Components/Hackathon/TeamDetailDrawer.jsx:356` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 278 | `PUT` | `Unknown` | **TeamFormModal** | `FRONTEND/src/Components/Hackathon/TeamFormModal.jsx:233` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 279 | `POST` | `/api/hackathon/admin/teams` | **TeamFormModal** | `FRONTEND/src/Components/Hackathon/TeamFormModal.jsx:244` | User Action | No | No | No | No | Private (Auth Required) | Large (>50KB) | Yes | No |
| 280 | `POST` | `/api/hackathon/admin/unstop/preview` | **UnstopImportModal** | `FRONTEND/src/Components/Hackathon/UnstopImportModal.jsx:127` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 281 | `POST` | `/api/hackathon/admin/unstop/commit` | **UnstopImportModal** | `FRONTEND/src/Components/Hackathon/UnstopImportModal.jsx:200` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 282 | `GET` | `/api/admin/quiz-applicants` | **ImportQuizModal** | `FRONTEND/src/Components/ImportQuizModal.jsx:22` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 283 | `POST` | `Unknown` | **ImportQuizModal** | `FRONTEND/src/Components/ImportQuizModal.jsx:99` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 284 | `POST` | `/api/admin/interview-settings/override/` | **InterviewAdminPage** | `FRONTEND/src/Components/InterviewAdminPage.jsx:231` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 285 | `POST` | `/api/admin/interview-settings/override-by-email` | **InterviewAdminPage** | `FRONTEND/src/Components/InterviewAdminPage.jsx:293` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 286 | `GET` | `/api/admin/interview-data` | **InterviewAdminPage** | `FRONTEND/src/Components/InterviewAdminPage.jsx:311` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 287 | `GET` | `/api/admin/interview-settings` | **InterviewAdminPage** | `FRONTEND/src/Components/InterviewAdminPage.jsx:312` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 288 | `GET` | `/api/admin/interview-settings/tokens` | **InterviewAdminPage** | `FRONTEND/src/Components/InterviewAdminPage.jsx:313` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 289 | `GET` | `/api/admin/whitelisted-users` | **InterviewAdminPage** | `FRONTEND/src/Components/InterviewAdminPage.jsx:314` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 290 | `POST` | `/api/admin/interview-settings/tokens` | **InterviewAdminPage** | `FRONTEND/src/Components/InterviewAdminPage.jsx:346` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 291 | `PUT` | `/api/interview-config/admin/` | **InterviewAdminPage** | `FRONTEND/src/Components/InterviewAdminPage.jsx:361` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 292 | `POST` | `/api/admin/interview-settings/toggle` | **InterviewAdminPage** | `FRONTEND/src/Components/InterviewAdminPage.jsx:382` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 293 | `GET` | `/api/jobs/admin/users` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:154` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 294 | `PUT` | `/api/jobs/admin/user-plan/` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:173` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 295 | `GET` | `/api/admin/job-settings/granted-users` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:195` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 296 | `POST` | `/api/admin/job-settings/grant-premium` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:217` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 297 | `GET` | `/api/jobs/admin/interactions` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:238` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 298 | `GET` | `/api/jobs/admin/audit-logs` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:255` | User Action | No | No | No | Yes | Private (Auth Required) | Large (>50KB) | Yes | Yes |
| 299 | `GET` | `/api/admin/settings/job-portal` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:282` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 300 | `POST` | `/api/admin/settings/job-portal` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:298` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 301 | `POST` | `/api/admin/settings/job-portal/free-mode` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:311` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 302 | `PUT` | `/api/admin/settings/job-portal/price` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:328` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 303 | `POST` | `/api/jobs/import-excel` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:354` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 304 | `GET` | `/api/jobs` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:371` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 305 | `POST` | `/api/jobs/sync` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:385` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 306 | `PATCH` | `/api/jobs//toggle` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:399` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 307 | `DELETE` | `/api/jobs/` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:413` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 308 | `PUT` | `/api/jobs/` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:442` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 309 | `POST` | `/api/jobs/create` | **JobAdminPage** | `FRONTEND/src/Components/JobAdminPage.jsx:456` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 310 | `POST` | `/api/jobs/audit-log` | **JobCard** | `FRONTEND/src/Components/JobCard.jsx:17` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 311 | `GET` | `/api/admin/settings/leaderboard` | **Leaderboard** | `FRONTEND/src/Components/Leaderboard.jsx:111` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 312 | `GET` | `/api/student/leaderboard` | **Leaderboard** | `FRONTEND/src/Components/Leaderboard.jsx:114` | User Action | No | No | YES (High) | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 313 | `GET` | `/api/admin/settings/leaderboard` | **Navbar** | `FRONTEND/src/Components/Navbar.jsx:30` | Component Mount (useEffect) | Yes | Yes | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | No | Yes |
| 314 | `GET` | `/api/admin/settings/job-portal` | **Navbar** | `FRONTEND/src/Components/Navbar.jsx:44` | Component Mount (useEffect) | Yes | Yes | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | No | Yes |
| 315 | `GET` | `/api/admin/interview-settings` | **Navbar** | `FRONTEND/src/Components/Navbar.jsx:45` | Component Mount (useEffect) | Yes | Yes | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | No | Yes |
| 316 | `GET` | `/api/admin/resume-settings` | **Navbar** | `FRONTEND/src/Components/Navbar.jsx:46` | Component Mount (useEffect) | Yes | Yes | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | No | Yes |
| 317 | `GET` | `/api/admin/assessment-settings` | **Navbar** | `FRONTEND/src/Components/Navbar.jsx:47` | Component Mount (useEffect) | Yes | Yes | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | No | Yes |
| 318 | `GET` | `/api/admin/normal-tasks` | **NormalTasksAdmin** | `FRONTEND/src/Components/NormalTasksAdmin.jsx:28` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 319 | `POST` | `/api/admin/normal-tasks` | **NormalTasksAdmin** | `FRONTEND/src/Components/NormalTasksAdmin.jsx:67` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 320 | `DELETE` | `/api/admin/normal-tasks/` | **NormalTasksAdmin** | `FRONTEND/src/Components/NormalTasksAdmin.jsx:95` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 321 | `GET` | `Unknown` | **NotificationsAdmin** | `FRONTEND/src/Components/NotificationsAdmin.jsx:16` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 322 | `POST` | `Unknown` | **NotificationsAdmin** | `FRONTEND/src/Components/NotificationsAdmin.jsx:38` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 323 | `DELETE` | `Unknown` | **NotificationsAdmin** | `FRONTEND/src/Components/NotificationsAdmin.jsx:57` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 324 | `POST` | `Unknown` | **ProfileSettingsModal** | `FRONTEND/src/Components/ProfileSettingsModal.jsx:41` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 325 | `POST` | `Unknown` | **ProfileSettingsModal** | `FRONTEND/src/Components/ProfileSettingsModal.jsx:61` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 326 | `GET` | `Unknown` | **Project** | `FRONTEND/src/Components/Project.jsx:61` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 327 | `POST` | `/api/project/submit` | **Project** | `FRONTEND/src/Components/Project.jsx:202` | User Interaction (Click/Submit) | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 328 | `POST` | `Unknown` | **Project** | `FRONTEND/src/Components/Project.jsx:213` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 329 | `POST` | `Unknown` | **ProtectedRoute** | `FRONTEND/src/Components/ProtectedRoute.jsx:42` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 330 | `GET` | `/api/admin/quiz-applicants` | **QuizUsersAdmin** | `FRONTEND/src/Components/QuizUsersAdmin.jsx:95` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 331 | `POST` | `Unknown` | **QuizUsersAdmin** | `FRONTEND/src/Components/QuizUsersAdmin.jsx:112` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 332 | `POST` | `Unknown` | **QuizUsersAdmin** | `FRONTEND/src/Components/QuizUsersAdmin.jsx:134` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 333 | `DELETE` | `Unknown` | **QuizUsersAdmin** | `FRONTEND/src/Components/QuizUsersAdmin.jsx:162` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 334 | `GET` | `/api/admin/quiz-applicants/sponsor-details/` | **QuizUsersAdmin** | `FRONTEND/src/Components/QuizUsersAdmin.jsx:204` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 335 | `POST` | `Unknown` | **QuizUsersAdmin** | `FRONTEND/src/Components/QuizUsersAdmin.jsx:271` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 336 | `POST` | `Unknown` | **QuizUsersAdmin** | `FRONTEND/src/Components/QuizUsersAdmin.jsx:335` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 337 | `POST` | `Unknown` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:85` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 338 | `POST` | `Unknown` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:119` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 339 | `GET` | `/api/admin/referrals` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:161` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 340 | `GET` | `/api/admin/referrals/conversions` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:162` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 341 | `GET` | `/api/admin/ambassadors` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:166` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 342 | `GET` | `/api/admin/ambassador-applications` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:167` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 343 | `GET` | `/api/admin/referrals/conversions` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:203` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 344 | `POST` | `Unknown` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:252` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 345 | `POST` | `Unknown` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:284` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 346 | `POST` | `Unknown` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:318` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 347 | `DELETE` | `/api/admin/referrals/` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:339` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 348 | `DELETE` | `/api/admin/ambassador/` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:365` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 349 | `POST` | `/api/admin/ambassador-applications/approve/` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:383` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 350 | `POST` | `/api/admin/ambassador-applications/reject/` | **ReferralAdmin** | `FRONTEND/src/Components/ReferralAdmin.jsx:401` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 351 | `POST` | `/api/admin/referrals/track-click` | **ReferralTracker** | `FRONTEND/src/Components/ReferralTracker.jsx:52` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 352 | `GET` | `/api/admin/settings/registration` | **Registration** | `FRONTEND/src/Components/Registration.jsx:69` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 353 | `GET` | `/api/admin/settings/payment` | **Registration** | `FRONTEND/src/Components/Registration.jsx:75` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 354 | `POST` | `Unknown` | **Registration** | `FRONTEND/src/Components/Registration.jsx:125` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 355 | `POST` | `Unknown` | **Registration** | `FRONTEND/src/Components/Registration.jsx:164` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 356 | `POST` | `Unknown` | **Registration** | `FRONTEND/src/Components/Registration.jsx:197` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 357 | `POST` | `/api/register/waitlist` | **Registration** | `FRONTEND/src/Components/Registration.jsx:270` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 358 | `POST` | `/api/register/send-otp` | **Registration** | `FRONTEND/src/Components/Registration.jsx:525` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 359 | `POST` | `/api/register/verify-otp` | **Registration** | `FRONTEND/src/Components/Registration.jsx:584` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 360 | `GET/POST` | `/api/admin/audit-logs/track` | **RouteTracker** | `FRONTEND/src/Components/RouteTracker.jsx:15` | User Action | No | Yes | No | No | Private (Auth Required) | Large (>50KB) | Yes | No |
| 361 | `POST` | `/api/auth/setup-password` | **SetupPassword** | `FRONTEND/src/Components/SetupPassword.jsx:42` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 362 | `POST` | `Unknown` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:185` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 363 | `POST` | `Unknown` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:222` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 364 | `POST` | `Unknown` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:790` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 365 | `POST` | `Unknown` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:820` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 366 | `POST` | `Unknown` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:851` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 367 | `POST` | `/api/student/request-graphic-resource` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:1368` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 368 | `POST` | `/api/student/submit-graphic` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:1414` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 369 | `DELETE` | `/api/student/graphic-submission/` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:1439` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 370 | `GET` | `Unknown` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:2015` | Component Mount (useEffect) | Yes | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 371 | `GET` | `/api/student/v2-projects` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:2024` | Component Mount (useEffect) | Yes | Yes | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 372 | `GET` | `/api/interview-session/my-credits` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:2083` | Component Mount (useEffect) | Yes | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 373 | `GET` | `/api/interview-session/my-sessions` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:2086` | Component Mount (useEffect) | Yes | Yes | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 374 | `POST` | `Unknown` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:2145` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 375 | `POST` | `Unknown` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:2163` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 376 | `POST` | `Unknown` | **StudentDashboard** | `FRONTEND/src/Components/StudentDashboard.jsx:2187` | Component Mount (useEffect) | Yes | Yes | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 377 | `GET` | `/api/admin/all-submissions` | **SubmissionsAdmin** | `FRONTEND/src/Components/SubmissionsAdmin.jsx:27` | User Action | No | No | No | Yes | Private (Auth Required) | Large (>50KB) | Yes | Yes |
| 378 | `POST` | `/api/admin/override-sp` | **SubmissionsAdmin** | `FRONTEND/src/Components/SubmissionsAdmin.jsx:107` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 379 | `POST` | `/api/admin/evaluate-pending-ai` | **SubmissionsAdmin** | `FRONTEND/src/Components/SubmissionsAdmin.jsx:133` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 380 | `POST` | `/api/admin/send-evaluation-emails` | **SubmissionsAdmin** | `FRONTEND/src/Components/SubmissionsAdmin.jsx:167` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 381 | `GET` | `/api/admin/summer-projects` | **SummerProjectsAdmin** | `FRONTEND/src/Components/SummerProjectsAdmin.jsx:44` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 382 | `POST` | `/api/admin/summer-projects` | **SummerProjectsAdmin** | `FRONTEND/src/Components/SummerProjectsAdmin.jsx:70` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 383 | `DELETE` | `/api/admin/summer-projects/` | **SummerProjectsAdmin** | `FRONTEND/src/Components/SummerProjectsAdmin.jsx:91` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 384 | `POST` | `/api/admin/update-assigned-repo` | **SummerProjectsAdmin** | `FRONTEND/src/Components/SummerProjectsAdmin.jsx:106` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 385 | `POST` | `/api/admin/review-summer-project` | **SummerProjectsAdmin** | `FRONTEND/src/Components/SummerProjectsAdmin.jsx:127` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 386 | `POST` | `/api/admin/interview-settings/tokens/adjust` | **TokenAdminPage** | `FRONTEND/src/Components/TokenAdminPage.jsx:106` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 387 | `GET` | `/api/admin/token-data` | **TokenAdminPage** | `FRONTEND/src/Components/TokenAdminPage.jsx:210` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 388 | `GET` | `/api/admin/interview-settings/tokens` | **TokenAdminPage** | `FRONTEND/src/Components/TokenAdminPage.jsx:211` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 389 | `POST` | `/api/admin/interview-settings/tokens` | **TokenAdminPage** | `FRONTEND/src/Components/TokenAdminPage.jsx:234` | User Action | No | No | YES (High) | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 390 | `GET` | `/api/admin/token-purchases` | **TokenAdminPage** | `FRONTEND/src/Components/TokenAdminPage.jsx:249` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 391 | `POST` | `/api/verify` | **Verify** | `FRONTEND/src/Components/Verify.jsx:30` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 392 | `POST` | `/api/assessment/sessions/start-smart` | **AssessmentCenterView** | `FRONTEND/src/Pages/AssessmentPortal/AssessmentCenterView.jsx:53` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 393 | `POST` | `/api/assessment/sessions//resume` | **AssessmentTerminal** | `FRONTEND/src/Pages/AssessmentPortal/AssessmentTerminal.jsx:103` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 394 | `GET` | `/api/assessment/sessions//batch/1` | **AssessmentTerminal** | `FRONTEND/src/Pages/AssessmentPortal/AssessmentTerminal.jsx:126` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 395 | `GET` | `/api/assessment/sessions//batch/1` | **AssessmentTerminal** | `FRONTEND/src/Pages/AssessmentPortal/AssessmentTerminal.jsx:147` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 396 | `POST` | `/api/assessment/sessions//autosave` | **AssessmentTerminal** | `FRONTEND/src/Pages/AssessmentPortal/AssessmentTerminal.jsx:174` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 397 | `POST` | `/api/assessment/sessions//submit` | **AssessmentTerminal** | `FRONTEND/src/Pages/AssessmentPortal/AssessmentTerminal.jsx:198` | User Interaction (Click/Submit) | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 398 | `POST` | `/api/assessment/evaluate/` | **AssessmentTerminal** | `FRONTEND/src/Pages/AssessmentPortal/AssessmentTerminal.jsx:204` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 399 | `POST` | `/api/assessment/certificates/generate/` | **AssessmentTerminal** | `FRONTEND/src/Pages/AssessmentPortal/AssessmentTerminal.jsx:208` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 400 | `GET` | `/api/assessment/sessions/` | **ResultCenterView** | `FRONTEND/src/Pages/AssessmentPortal/ResultCenterView.jsx:54` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 401 | `GET` | `/api/admin/assessment-settings` | **StudentExperiencePlatform** | `FRONTEND/src/Pages/AssessmentPortal/StudentExperiencePlatform.jsx:100` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 402 | `GET` | `/api/assessment/student/dashboard` | **StudentExperiencePlatform** | `FRONTEND/src/Pages/AssessmentPortal/StudentExperiencePlatform.jsx:115` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 403 | `GET` | `/api/assessment/student/catalog` | **StudentExperiencePlatform** | `FRONTEND/src/Pages/AssessmentPortal/StudentExperiencePlatform.jsx:116` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 404 | `GET` | `/api/assessment/student/active` | **StudentExperiencePlatform** | `FRONTEND/src/Pages/AssessmentPortal/StudentExperiencePlatform.jsx:117` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 405 | `GET` | `/api/assessment/student/results` | **StudentExperiencePlatform** | `FRONTEND/src/Pages/AssessmentPortal/StudentExperiencePlatform.jsx:118` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 406 | `GET` | `/api/assessment/student/credentials` | **StudentExperiencePlatform** | `FRONTEND/src/Pages/AssessmentPortal/StudentExperiencePlatform.jsx:119` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 407 | `GET` | `/api/assessment/student/timeline` | **StudentExperiencePlatform** | `FRONTEND/src/Pages/AssessmentPortal/StudentExperiencePlatform.jsx:120` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 408 | `GET` | `/api/assessment/student/profile` | **StudentExperiencePlatform** | `FRONTEND/src/Pages/AssessmentPortal/StudentExperiencePlatform.jsx:121` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 409 | `POST` | `Unknown` | **CampusAmbassadorApply** | `FRONTEND/src/Pages/CampusAmbassadorApply.jsx:77` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | No | No |
| 410 | `GET/POST` | `/api/contact/support` | **Contact** | `FRONTEND/src/Pages/Contact.jsx:142` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 411 | `POST` | `Unknown` | **EditorialDashboard** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialDashboard.jsx:71` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 412 | `GET` | `/api/hackathon/editorial/me` | **EditorialDashboard** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialDashboard.jsx:99` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 413 | `GET` | `/api/hackathon/editorial/dashboard` | **EditorialDashboard** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialDashboard.jsx:107` | Component Mount (useEffect) | Yes | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 414 | `GET` | `/api/hackathon/editorial/projects` | **EditorialDashboard** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialDashboard.jsx:115` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 415 | `GET` | `/api/hackathon/editorial/projects/` | **EditorialDashboard** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialDashboard.jsx:144` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 416 | `POST` | `Unknown` | **EditorialDashboard** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialDashboard.jsx:183` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 417 | `POST` | `Unknown` | **EditorialDashboard** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialDashboard.jsx:212` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 418 | `POST` | `Unknown` | **EditorialDashboard** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialDashboard.jsx:242` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 419 | `PUT` | `Unknown` | **EditorialDashboard** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialDashboard.jsx:282` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 420 | `POST` | `/api/hackathon/editorial/login` | **EditorialLogin** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialLogin.jsx:32` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 421 | `PUT` | `Unknown` | **EditorialLogin** | `FRONTEND/src/Pages/Hackathon/Editorial/EditorialLogin.jsx:72` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 422 | `GET` | `/api/hackathon/submission/my-submission` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:109` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 423 | `GET` | `/api/hackathon/results/my-result` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:148` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 424 | `GET` | `/api/hackathon/certificates/my-certificates` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:172` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 425 | `GET` | `/api/hackathon/prizes/my-prizes` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:190` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 426 | `GET` | `Unknown` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:219` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 427 | `GET` | `/api/hackathon/info` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:226` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 428 | `GET` | `/api/hackathon/my-team` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:237` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 429 | `POST` | `/api/hackathon/submission/save-draft` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:366` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 430 | `POST` | `/api/hackathon/submission/final-submit` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:415` | User Interaction (Click/Submit) | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 431 | `POST` | `Unknown` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:481` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 432 | `GET` | `/api/hackathon/my-team` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:499` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 433 | `POST` | `Unknown` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:544` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 434 | `GET` | `/api/hackathon/my-team` | **HackathonPortal** | `FRONTEND/src/Pages/Hackathon/HackathonPortal.jsx:562` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 435 | `GET` | `Unknown` | **PublicCertificateVerificationPage** | `FRONTEND/src/Pages/Hackathon/PublicCertificateVerificationPage.jsx:37` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 436 | `GET` | `/api/hackathon/public/results` | **PublicResultsPage** | `FRONTEND/src/Pages/Hackathon/PublicResultsPage.jsx:36` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 437 | `GET` | `/api/admin/settings/job-portal` | **Home** | `FRONTEND/src/Pages/Home.jsx:26` | Component Mount (useEffect) | Yes | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 438 | `POST` | `Unknown` | **InterviewDashboard** | `FRONTEND/src/Pages/InterviewPortal/InterviewDashboard.jsx:66` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 439 | `GET` | `Unknown` | **InterviewDashboard** | `FRONTEND/src/Pages/InterviewPortal/InterviewDashboard.jsx:76` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 440 | `GET` | `/api/interview-session/my-credits` | **InterviewDashboard** | `FRONTEND/src/Pages/InterviewPortal/InterviewDashboard.jsx:99` | Component Mount (useEffect) | Yes | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 441 | `GET` | `/api/interview-session/my-sessions` | **InterviewDashboard** | `FRONTEND/src/Pages/InterviewPortal/InterviewDashboard.jsx:102` | Component Mount (useEffect) | Yes | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 442 | `POST` | `Unknown` | **InterviewDashboard** | `FRONTEND/src/Pages/InterviewPortal/InterviewDashboard.jsx:162` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 443 | `POST` | `Unknown` | **InterviewDashboard** | `FRONTEND/src/Pages/InterviewPortal/InterviewDashboard.jsx:186` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 444 | `POST` | `/api/interview-auth/google` | **InterviewLogin** | `FRONTEND/src/Pages/InterviewPortal/InterviewLogin.jsx:45` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 445 | `GET` | `/api/interview-session/my-credits` | **InterviewSetup** | `FRONTEND/src/Pages/InterviewPortal/InterviewSetup.jsx:31` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 446 | `POST` | `Unknown` | **InterviewSetup** | `FRONTEND/src/Pages/InterviewPortal/InterviewSetup.jsx:41` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 447 | `POST` | `/api/interview-session/create` | **InterviewSetup** | `FRONTEND/src/Pages/InterviewPortal/InterviewSetup.jsx:121` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 448 | `GET` | `/api/interview-session/my-credits` | **DashboardTopSection** | `FRONTEND/src/Pages/InterviewPortal/components/DashboardTopSection.jsx:42` | Component Mount (useEffect) | Yes | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 449 | `POST` | `Unknown` | **DashboardTopSection** | `FRONTEND/src/Pages/InterviewPortal/components/DashboardTopSection.jsx:85` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 450 | `POST` | `Unknown` | **DashboardTopSection** | `FRONTEND/src/Pages/InterviewPortal/components/DashboardTopSection.jsx:109` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 451 | `POST` | `/api/interview-session/retry-evaluation/` | **InterviewDashboardContent** | `FRONTEND/src/Pages/InterviewPortal/components/InterviewDashboardContent.jsx:74` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 452 | `GET` | `/api/admin/settings/job-portal` | **InterviewDashboardContent** | `FRONTEND/src/Pages/InterviewPortal/components/InterviewDashboardContent.jsx:648` | Component Mount (useEffect) | Yes | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 453 | `GET` | `/api/hackathon/info` | **InterviewDashboardContent** | `FRONTEND/src/Pages/InterviewPortal/components/InterviewDashboardContent.jsx:658` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 454 | `POST` | `Unknown` | **InterviewDashboardContent** | `FRONTEND/src/Pages/InterviewPortal/components/InterviewDashboardContent.jsx:697` | Component Mount (useEffect) | Yes | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 455 | `POST` | `/api/jobs/audit-log` | **JobDetail** | `FRONTEND/src/Pages/JobDetail.jsx:20` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 456 | `GET` | `/api/jobs/user-status` | **JobDetail** | `FRONTEND/src/Pages/JobDetail.jsx:59` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 457 | `GET` | `/api/jobs/` | **JobDetail** | `FRONTEND/src/Pages/JobDetail.jsx:67` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 458 | `POST` | `/api/jobs/audit-log` | **JobDetail** | `FRONTEND/src/Pages/JobDetail.jsx:83` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 459 | `GET` | `/api/jobs/saved` | **JobDetail** | `FRONTEND/src/Pages/JobDetail.jsx:101` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 460 | `GET` | `/api/jobs/applied` | **JobDetail** | `FRONTEND/src/Pages/JobDetail.jsx:115` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 461 | `DELETE` | `/api/jobs/save/` | **JobDetail** | `FRONTEND/src/Pages/JobDetail.jsx:141` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 462 | `POST` | `/api/jobs/save/` | **JobDetail** | `FRONTEND/src/Pages/JobDetail.jsx:147` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 463 | `POST` | `/api/jobs/apply/` | **JobDetail** | `FRONTEND/src/Pages/JobDetail.jsx:167` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 464 | `POST` | `/api/jobs/audit-log` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:55` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 465 | `GET` | `/api/jobs/user-status` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:65` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 466 | `GET` | `/api/jobs` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:98` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 467 | `GET` | `/api/jobs/saved` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:118` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 468 | `GET` | `/api/jobs/applied` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:135` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 469 | `POST` | `Unknown` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:151` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 470 | `POST` | `/api/jobs/purchase-premium` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:190` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 471 | `POST` | `Unknown` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:231` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 472 | `POST` | `Unknown` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:255` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 473 | `DELETE` | `/api/jobs/save/` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:299` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 474 | `POST` | `/api/jobs/save/` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:306` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 475 | `POST` | `/api/jobs/apply/` | **Jobs** | `FRONTEND/src/Pages/Jobs.jsx:330` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 476 | `POST` | `Unknown` | **MyInterviews** | `FRONTEND/src/Pages/MyInterviews.jsx:56` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 477 | `GET` | `Unknown` | **MyInterviews** | `FRONTEND/src/Pages/MyInterviews.jsx:66` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 478 | `GET` | `/api/interview-session/my-credits` | **MyInterviews** | `FRONTEND/src/Pages/MyInterviews.jsx:92` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 479 | `GET` | `/api/interview-session/my-sessions` | **MyInterviews** | `FRONTEND/src/Pages/MyInterviews.jsx:95` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 480 | `POST` | `Unknown` | **MyInterviews** | `FRONTEND/src/Pages/MyInterviews.jsx:110` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 481 | `POST` | `Unknown` | **MyInterviews** | `FRONTEND/src/Pages/MyInterviews.jsx:148` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 482 | `POST` | `Unknown` | **MyInterviews** | `FRONTEND/src/Pages/MyInterviews.jsx:169` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 483 | `POST` | `Unknown` | **MyInterviews** | `FRONTEND/src/Pages/MyInterviews.jsx:202` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 484 | `GET` | `/api/student/dashboard` | **MyProfile** | `FRONTEND/src/Pages/MyProfile.jsx:43` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 485 | `POST` | `/api/student/profile` | **MyProfile** | `FRONTEND/src/Pages/MyProfile.jsx:143` | User Action | No | No | No | No | Private (Auth Required) | Small-Medium (<15KB) | Yes | No |
| 486 | `POST` | `/api/otp/send` | **MyProfile** | `FRONTEND/src/Pages/MyProfile.jsx:184` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 487 | `POST` | `/api/otp/verify` | **MyProfile** | `FRONTEND/src/Pages/MyProfile.jsx:202` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 488 | `GET` | `/api/resume` | **MyResumes** | `FRONTEND/src/Pages/MyResumes.jsx:36` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 489 | `GET` | `/api/interview-session/my-credits` | **MyResumes** | `FRONTEND/src/Pages/MyResumes.jsx:37` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 490 | `POST` | `Unknown` | **MyResumes** | `FRONTEND/src/Pages/MyResumes.jsx:52` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 491 | `POST` | `/api/resume/create` | **MyResumes** | `FRONTEND/src/Pages/MyResumes.jsx:86` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 492 | `DELETE` | `/api/resume/` | **MyResumes** | `FRONTEND/src/Pages/MyResumes.jsx:103` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 493 | `POST` | `/api/resume//duplicate` | **MyResumes** | `FRONTEND/src/Pages/MyResumes.jsx:122` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 494 | `POST` | `Unknown` | **MyResumes** | `FRONTEND/src/Pages/MyResumes.jsx:149` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 495 | `POST` | `Unknown` | **MyResumes** | `FRONTEND/src/Pages/MyResumes.jsx:173` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 496 | `POST` | `/api/resume//ats-score` | **ResumeBuilder** | `FRONTEND/src/Pages/ResumeBuilder/ResumeBuilder.jsx:42` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 497 | `GET` | `/api/resume/` | **ResumeBuilder** | `FRONTEND/src/Pages/ResumeBuilder/ResumeBuilder.jsx:67` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 498 | `PUT` | `/api/resume/` | **ResumeBuilder** | `FRONTEND/src/Pages/ResumeBuilder/ResumeBuilder.jsx:89` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 499 | `POST` | `/api/resume//download` | **ResumeBuilder** | `FRONTEND/src/Pages/ResumeBuilder/ResumeBuilder.jsx:134` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 500 | `POST` | `/api/resume//send-whatsapp` | **ResumeBuilder** | `FRONTEND/src/Pages/ResumeBuilder/ResumeBuilder.jsx:206` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 501 | `GET` | `/api/student/dashboard` | **ResumeForm** | `FRONTEND/src/Pages/ResumeBuilder/ResumeForm.jsx:59` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 502 | `GET` | `/api/jobs/saved` | **SavedJobs** | `FRONTEND/src/Pages/SavedJobs.jsx:27` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 503 | `DELETE` | `/api/jobs/save/` | **SavedJobs** | `FRONTEND/src/Pages/SavedJobs.jsx:50` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 504 | `GET` | `/api/student/my-certificates` | **StudentCertificatesPage** | `FRONTEND/src/Pages/StudentCertificatesPage.jsx:37` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 505 | `GET` | `/api/student/my-quizzes` | **StudentQuizzesPage** | `FRONTEND/src/Pages/StudentQuizzesPage.jsx:43` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 506 | `GET` | `/api/student/ambassador-stats` | **UnifiedDashboard** | `FRONTEND/src/Pages/UnifiedDashboard.jsx:73` | Component Mount (useEffect) | Yes | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 507 | `GET` | `Unknown` | **HackathonContext** | `FRONTEND/src/context/HackathonContext.jsx:43` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 508 | `GET` | `/api/interview-config` | **InterviewConfigContext** | `FRONTEND/src/context/InterviewConfigContext.jsx:36` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 509 | `GET` | `/api/interview-session/my-sessions` | **useInterviewSession** | `FRONTEND/src/hooks/useInterviewSession.js:15` | User Action | No | No | No | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 510 | `POST` | `Unknown` | **useInterviewSession** | `FRONTEND/src/hooks/useInterviewSession.js:52` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 511 | `POST` | `/api/interview-session/panel-router` | **usePanelVapi** | `FRONTEND/src/hooks/usePanelVapi.js:300` | User Action | No | No | No | No | Public | Small-Medium (<15KB) | Yes | No |
| 512 | `GET` | `/api/admin/settings/job-portal` | **JobPortalCTA** | `FRONTEND/src/sections/JobPortalCTA.jsx:15` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 513 | `GET` | `/api/admin/interview-settings` | **MockInterviewCTA** | `FRONTEND/src/sections/MockInterviewCTA.jsx:13` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |
| 514 | `GET` | `/api/jobs` | **RecentJobs** | `FRONTEND/src/sections/RecentJobs.jsx:17` | User Action | No | No | No | Yes | Public | Small-Medium (<15KB) | Yes | Yes |
| 515 | `GET` | `/api/admin/resume-settings` | **ResumeBuilderCTA** | `FRONTEND/src/sections/ResumeBuilderCTA.jsx:13` | User Action | No | No | YES (High) | Yes | Private (Auth Required) | Small-Medium (<15KB) | Yes | Yes |


---

## 3. High-Priority Duplication & Global Load Hotspots

### Hotspot 1: Homepage & Navbar Settings Cascades
| Endpoint | Invoking Components | Redundancy Multiplier | Cache Recommendation |
|---|---|---|---|
| `/api/admin/settings/job-portal` | `Navbar.jsx`, `Home.jsx`, `JobPortalCTA.jsx` | 3x concurrent | Stale time: 10 mins (TanStack Query key `['settings', 'job-portal']`) |
| `/api/admin/interview-settings` | `Navbar.jsx`, `MockInterviewCTA.jsx` | 2x concurrent | Stale time: 10 mins (TanStack Query key `['settings', 'interview']`) |
| `/api/admin/resume-settings` | `Navbar.jsx`, `ResumeBuilderCTA.jsx` | 2x concurrent | Stale time: 10 mins (TanStack Query key `['settings', 'resume']`) |
| `/api/admin/assessment-settings` | `Navbar.jsx`, `StudentExperiencePlatform.jsx` | 2x concurrent | Stale time: 10 mins (TanStack Query key `['settings', 'assessment']`) |
| `/api/admin/settings/leaderboard` | `Navbar.jsx`, `Leaderboard.jsx` | 2x concurrent | Stale time: 5 mins (TanStack Query key `['settings', 'leaderboard']`) |

### Hotspot 2: Global `App.jsx` Initialization Overhead
- `InterviewConfigProvider` fetches `/api/interview-config` on initial application boot. Should be deferred to interview portal routes or lazily requested when `getConfig()` is evaluated.
- `FeatureBanner` fetches `/api/admin/banner` immediately. Fixed typo in `sessionStorage.setItem` to prevent repetitive fetches across refreshes once dismissed.
- `RouteTracker` triggers `/api/admin/audit-logs/track` on every micro-navigation. Should be debounced and batched to avoid flooding backend logs.

---

## 4. Bundle Optimization & Code-Splitting Strategy

### Current Chunk Profile (Vite Production Build)
- `index-*.js`: **3,924.14 kB** (Raw) / **973.21 kB** (Gzip)
- `html2canvas-*.js`: **201.04 kB**
- `index.es-*.js` (`jspdf`): **158.79 kB**
- Total initial load: **~4.3 MB JS**

### Proposed Code Splitting (Target < 200 kB Initial Bundle)
1. **Route-Level Splitting via `React.lazy()` & `Suspense`**:
   - `AdminDashboard`, `HackathonAdminWorkspace`, `AllUsersAdmin` -> `chunk-admin.js` (~1.8 MB deferred)
   - `EditorialDashboard`, `EditorialLogin` -> `chunk-editorial.js` (~200 KB deferred)
   - `ResumeBuilder`, `MyResumes` -> `chunk-resume.js` (~350 KB deferred)
   - `AssessmentTerminal`, `StudentExperiencePlatform` -> `chunk-assessment.js` (~450 KB deferred)
   - `InterviewActive`, `PanelInterviewActive` -> `chunk-interview.js` (~300 KB deferred)
   - `UnifiedDashboard`, `StudentDashboard` -> `chunk-student-dashboard.js` (~400 KB deferred)
2. **Vendor Manual Chunking in `vite.config.js`**:
   - `vendor-pdf-canvas`: `['jspdf', 'html2canvas', 'html2canvas-pro']` (Loaded ONLY when user exports certificate/resume)
   - `vendor-excel`: `['xlsx']` (Loaded ONLY when importing Excel)
   - `vendor-animation`: `['framer-motion']`
   - `vendor-icons`: `['lucide-react', 'react-icons']`

---

## 5. Next Steps
1. Create MongoDB Performance Recommendations: `docs/Website_MongoDB_Performance_Recommendations.md`.
2. Generate comprehensive Implementation Plan (`implementation_plan.md`) covering all 35 user directives.
