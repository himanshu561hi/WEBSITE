/**
 * narrativeConfig.js
 * Classified investigation narrative, hackathon dossier, and anomaly logs.
 * All marketing copy is refactored into authentic paranormal case evidence.
 */
export const narrativeConfig = {
  caseId: "CASE FILE // ARCH-2026-BUILDX",
  classification: "TOP SECRET // LEVEL 4 ANOMALY CLEARANCE",
  facility: "FACILITY 13 // SECTOR B-CORRIDOR",
  timestamp: "2026-10-18T03:17:00Z",

  status: {
    badge: "ANOMALOUS SIGNAL DETECTED",
    subtext: "INVESTIGATION COMMENCING — 36 HOURS TO CONTAIN",
  },

  briefing: {
    preamble: "AN INCIDENT HAS OCCURRED IN SECTOR 4.",
    detail:
      "All automated telemetry stopped responding at 03:17 AM. Visual sweeps confirmed physical barriers locked from within. Deploy code, inspect anomalies, and breach the deeper vault before containment fails.",
  },

  cta: {
    primary: "ENTER THE CASE",
    secondary: "EXAMINE EVIDENCE",
    statusText: "TRANSMISSION OPEN // FREE REGISTRATION",
  },

  hackathonDetails: {
    duration: "36 HOURS",
    durationNarrative: "36 HOURS REMAIN TO BREACH",
    format: "NATIONAL LEVEL INVESTIGATION // ONLINE",
    prizePool: "₹50,000+",
    prizePoolNarrative: "CLASSIFIED RECOVERY BOUNTY",
    dates: "OCTOBER 24 - 26, 2026",
    registrationStatus: "ACCESS AUTHORIZED",
  },

  anomalies: [
    {
      id: "TRACK-01",
      code: "ANOMALY // AI-90",
      title: "SYNTHETIC INTELLIGENCE & SENTIENCE",
      risk: "CLASS A",
      description: "Agents and reasoning systems exhibiting unverified cognitive divergence.",
      bounty: "₹18,000",
    },
    {
      id: "TRACK-02",
      code: "ANOMALY // WEB3-44",
      title: "DECENTRALIZED VAULT PROTOCOLS",
      risk: "CLASS S",
      description: "Cryptographic consensus models designed to withstand hostile anomalous intrusion.",
      bounty: "₹15,000",
    },
    {
      id: "TRACK-03",
      code: "ANOMALY // SYS-07",
      title: "AUTONOMOUS INFRASTRUCTURE DEFENSE",
      risk: "CLASS B",
      description: "Self-healing low-latency telemetry pipelines monitoring breach frontiers.",
      bounty: "₹12,000",
    },
    {
      id: "TRACK-04",
      code: "ANOMALY // OPEN-X",
      title: "OPEN ANOMALY INVESTIGATION",
      risk: "UNSPECIFIED",
      description: "Cross-disciplinary breakthroughs tackling unprecedented technical anomalies.",
      bounty: "₹5,000+",
    },
  ],

  investigationTimeline: [
    { time: "00:00 HR", title: "BREACH INITIATED", desc: "Access keys dispatched to all registered investigators." },
    { time: "12:00 HR", title: "CHECKPOINT 01 // SIGNAL LOCK", desc: "First telemetry review and anomaly validation." },
    { time: "24:00 HR", title: "SECTOR DEEPENING", desc: "Secondary challenges unlocked. Code audit begins." },
    { time: "36:00 HR", title: "CONTAINMENT SEAL // SUBMISSION", desc: "All terminals locked. Council adjudication begins." },
  ],
};
