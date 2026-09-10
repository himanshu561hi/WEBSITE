# BUILDX Hackathon Homepage API Specification

## Overview
This document specifies the future backend contract for the **BUILDX** National Hackathon landing page.

> **IMPORTANT ARCHITECTURAL DIRECTIVE:**
> In this phase, production backend code is strictly preserved. No new production routes or controllers are registered. The UI currently consumes the centralized configuration file `FRONTEND/src/hackathon-ui/data/hackathonConfig.js` and can optionally hydrate from the mock document `BACKEND/hackathon-ui/mock/mockHackathonHome.json`.

---

## Future Proposed Endpoint

### `GET /api/hackathon/home`
Retrieves the complete landing page configuration, tracks, timeline, and prize structure for BUILDX.

#### Request Headers
- `Accept`: `application/json`

#### Response `200 OK`
```json
{
  "status": "success",
  "data": {
    "branding": {
      "name": "BUILDX",
      "organizer": "CODE-A-NOVA",
      "tagline": "36 HOURS. ONE MYSTERY. INFINITE POSSIBILITIES.",
      "shortTagline": "An unknown problem has been detected.",
      "description": "A 36-hour national-level engineering hackathon where developers, engineers, and designers investigate real-world challenges and build meaningful solutions."
    },
    "event": {
      "format": "Online / Virtual",
      "duration": "36 Hours",
      "level": "National Level",
      "teamSize": "1 - 4 Members",
      "eligibility": "Open to all enrolled students and recent graduates across India",
      "status": "INVESTIGATION ACTIVE"
    },
    "dates": {
      "registrationOpen": null,
      "registrationDeadline": null,
      "start": null,
      "end": null,
      "results": null,
      "displayDateText": "OFFICIAL TIMEFRAME ANNOUNCING SOON"
    },
    "tracks": [ ... ],
    "journey": [ ... ],
    "timeline": [ ... ],
    "rewards": { ... },
    "sponsors": { ... }
  }
}
```

---

## Future Implementation Plan
When authorized to deploy the production backend endpoint:
1. Create a read-only cached controller `BACKEND/controllers/hackathonHomeController.js`.
2. Connect to the existing MongoDB instance or serve cached configuration data.
3. Cache response headers with `Cache-Control: public, max-age=300, stale-while-revalidate=600`.
4. Ensure zero disruption to existing `/api/hackathons` and `/api/hackathon/:slug` endpoints.
