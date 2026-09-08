# Code-A-Nova Platform — MongoDB Performance & Indexing Optimization Guide

## Executive Summary

This engineering document outlines specific, high-impact MongoDB optimization strategies for the Code-A-Nova multi-module platform (Public Services, AI Mock Interviews, Resume Builder, Job Portal, Assessments, Admin Consoles, and Multi-Hackathon Engine).

Adhering to these recommendations ensures low latencies (<50ms p95), minimal CPU/RAM utilization on Atlas clusters, optimal disk I/O, and seamless scalability under concurrent participant surges.

---

## 1. Index Strategy & Recommended Compound Indexes

MongoDB queries perform full collection scans (`COLLSCAN`) without appropriate indexes. For maximum efficiency, indexes should follow the **ESR Rule** (Equality, Sort, Range).

### A. Hackathon Ecosystem

| Collection | Target Query Patterns | Recommended Index | Type / Note |
| :--- | :--- | :--- | :--- |
| `hackathons` | Active Hackathon Lookup | `{ status: 1, isDeleted: 1 }` | Compound, sparse/filtered |
| `hackathons` | Slug Lookup | `{ slug: 1, isDeleted: 1 }` | Unique index on slug |
| `hackathons` | Canonical ID Lookup | `{ hackathonId: 1, isDeleted: 1 }` | Unique index |
| `hackathonteams` | Team Search by Hackathon & Status | `{ hackathonId: 1, status: 1, createdAt: -1 }` | Compound index (ESR) |
| `hackathonteams` | Team Search by Code | `{ hackathonId: 1, teamCode: 1 }` | Unique compound |
| `hackathonteams` | Leader Lookup | `{ 'leader.email': 1, hackathonId: 1 }` | Fast login & dashboard lookup |
| `hackathonteams` | Member Email Lookup | `{ 'members.email': 1, hackathonId: 1 }` | Member access control |
| `hackathonsubmissions` | Team Submission | `{ hackathonId: 1, teamId: 1 }` | Unique compound |
| `hackathonsubmissions` | Submissions by Status | `{ hackathonId: 1, status: 1, submittedAt: -1 }` | Admin filtration & review |
| `hackathoneditorialevaluations` | Judge Evaluations | `{ hackathonId: 1, judgeId: 1, status: 1 }` | Judge workspace listing |
| `hackathoneditorialevaluations` | Team Evaluation Score | `{ hackathonId: 1, teamId: 1, status: 1 }` | Aggregation & leaderboard |
| `hackathonresults` | Official Results | `{ hackathonId: 1, rank: 1 }` | Fast leaderboard retrieval |
| `hackathoncertificates` | Verification by Code | `{ verificationCode: 1 }` | Unique public lookup |
| `hackathoncertificates` | Participant Certificates | `{ hackathonId: 1, recipientEmail: 1 }` | Fast user portal retrieval |
| `hackathonauditlogs` | Audit Trail by Context | `{ hackathonId: 1, timestamp: -1 }` | Paginated audit timeline |

### B. Core Website & User Platform

| Collection | Target Query Patterns | Recommended Index | Type / Note |
| :--- | :--- | :--- | :--- |
| `users` | Auth Login & Lookup | `{ email: 1 }` | Unique (collation: `{ locale: 'en', strength: 2 }`) |
| `users` | Active Session Verification | `{ _id: 1, isActive: 1 }` | Primary lookup |
| `jobs` | Public Job Listings | `{ status: 1, category: 1, createdAt: -1 }` | Job portal filtered list |
| `interviews` | User Interview History | `{ userId: 1, createdAt: -1 }` | Dashboard history retrieval |
| `resumes` | User Resumes | `{ userId: 1, updatedAt: -1 }` | Fast resume workspace list |
| `emaillogs` | Email Delivery Verification | `{ hackathonId: 1, recipientEmail: 1, campaign: 1 }` | Deduplication & idempotency |
| `emaillogs` | Recent System Dispatch Logs | `{ createdAt: -1 }` | TTL index or admin timeline |

---

## 2. Query Optimization Guidelines

### 1. Always Use `.lean()` for Read-Only Queries
Mongoose documents come with extensive overhead (virtuals, getters, change-tracking, setters, internal state). By appending `.lean()`, Mongoose returns lightweight plain JavaScript objects, reducing CPU overhead by up to 70% and memory usage by over 60%.

```javascript
// Before: Heavy Mongoose Hydration
const teams = await HackathonTeam.find({ hackathonId, status: 'SHORTLISTED' });

// After: High-Performance Plain JSON
const teams = await HackathonTeam.find({ hackathonId, status: 'SHORTLISTED' }).lean();
```

### 2. Strict Field Projection (`.select()`)
Never fetch entire documents with unbounded payload sizes (such as base64 images, large text blobs, embedded arrays, or internal audit logs) when the UI only displays a card or table row.

```javascript
// Before: Returns all fields including large rawUnstopData and logs
const teams = await HackathonTeam.find({ hackathonId });

// After: Only load the columns needed by the table
const teams = await HackathonTeam.find({ hackathonId })
  .select('teamName teamCode leader status paymentStatus createdAt')
  .lean();
```

### 3. Server-Side Pagination with Bounded Limits
All list endpoints must enforce a hard upper limit (e.g. `limit <= 100`) to prevent denial-of-service memory exhaustion:

```javascript
const page = Math.max(1, parseInt(req.query.page) || 1);
const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
const skip = (page - 1) * limit;

const [items, total] = await Promise.all([
  HackathonTeam.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .select('teamName leader status paymentStatus')
    .lean(),
  HackathonTeam.countDocuments(filter),
]);
```

---

## 3. Aggregation Pipeline Best Practices

When computing leaderboards, statistics, and admin overviews:
1. **`$match` First**: Always position `$match` as the first stage in the pipeline to utilize indexes before documents enter memory.
2. **`$project` Early**: Drop unnecessary fields immediately after matching to minimize aggregation memory usage.
3. **Index-Covered Queries**: Ensure `$match` and `$sort` utilize a matching compound index.
4. **Avoid `$unwind` on Unbounded Arrays**: Where possible, use array operators (`$filter`, `$map`, `$reduce`) instead of exploding arrays into individual documents.

---

## 4. Connection Pooling & Resource Management

In production serverless or clustered Node.js environments:
- Set `maxPoolSize`: 50 to 100 for dedicated server instances; 10 for serverless Lambdas/Vercel functions.
- Set `minPoolSize`: 5 to avoid cold socket connection delays.
- Set `socketTimeoutMS`: 30000ms.
- Set `serverSelectionTimeoutMS`: 5000ms to fail fast and prevent thread starvation during network partitions.

Example configuration in `BACKEND/config/db.js`:
```javascript
await mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: process.env.NODE_ENV === 'production' ? 50 : 10,
  minPoolSize: 5,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 30000,
});
```

---

## 5. Security & Isolation Invariants

1. **Multi-Hackathon Isolation**: Every operational query on teams, submissions, evaluations, and results MUST include `{ hackathonId }` in the predicate to guarantee zero data leakage between hackathons.
2. **Soft Deletes**: Always include `{ isDeleted: { $ne: true } }` in lookups to ensure deleted entities are never exposed or processed.
3. **No Unindexed Regular Expressions**: Avoid prefix wildcards (`/^.*foo.*/i`) on non-indexed text fields. Utilize `$text` search or compound string indexes with exact prefix anchors.
