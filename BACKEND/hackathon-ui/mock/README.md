# Hackathon UI Backend Architecture Mock & Specification

This folder outlines the data contracts and architectural specifications for the **Code-A-Nova Hackathon Home Page UI ("Code From The Other Side")**.

## Isolation Guarantee
- **NO production backend code has been altered or created.**
- Existing hackathon routes (`/api/hackathon/*`, `/api/admin/hackathon/*`, editorial workflows, Unstop imports, and Razorpay integrations) remain untouched.

## Future Endpoint Specification

### `GET /api/hackathon/home` (Optional Future Integration)
- **Scope**: Public, read-only cached payload.
- **Cache Strategy**: In-memory Redis/lru-cache TTL 5 minutes with Stale-While-Revalidate.
- **Response Format**: See [`mockHackathonHome.json`](./mockHackathonHome.json).

## Database Alignment
When moving from isolated UI preview to full production integration:
1. Active hackathon record (`Hackathon` model) can populate `branding`, `dates`, and `status`.
2. Static configuration (`hackathonConfig.js`) will serve as high-performance, zero-latency fallback defaults.
