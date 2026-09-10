/**
 * timelineConfig.js
 * BUILDX — 36-Hour Hackathon Investigation Schedule
 * Configurable milestones: Easily edit timestamps, titles, and descriptions.
 */
export const timelineConfig = {
  tag: "04 // THE 36-HOUR RUN",
  title: "THE OPERATIONAL TIMELINE",
  subtitle:
    "An unbroken 36-hour sprint from initial signal acquisition to final evidence seal and council verdict.",

  milestones: [
    {
      id: "t1",
      hour: "00:00",
      phase: "PHASE 01",
      title: "CASE DECLASSIFIED",
      description:
        "Opening keynote transmission streams nationwide. Problem statements, baseline APIs, and code repositories are unsealed.",
      status: "COMPLETED",
    },
    {
      id: "t2",
      hour: "06:00",
      phase: "PHASE 02",
      title: "EVIDENCE & ARCHITECTURE",
      description:
        "Teams finalize their technical hypotheses, system architecture diagrams, and push initial commits to verified GitHub repos.",
      status: "CURRENT",
    },
    {
      id: "t3",
      hour: "12:00",
      phase: "PHASE 03",
      title: "MIDPOINT CHECKPOINT",
      description:
        "Mentor triage session opens. Senior engineers and industry architects review progress and provide forensic guidance.",
      status: "UPCOMING",
    },
    {
      id: "t4",
      hour: "24:00",
      phase: "PHASE 04",
      title: "THE MIDNIGHT SPRINT",
      description:
        "Core feature completion. Intensive integration testing, model inference tuning, database caching, and UI polish.",
      status: "UPCOMING",
    },
    {
      id: "t5",
      hour: "30:00",
      phase: "PHASE 05",
      title: "EVIDENCE FREEZE",
      description:
        "GitHub repositories frozen. Teams deploy functional live web instances, record demo walkthroughs, and seal submissions.",
      status: "UPCOMING",
    },
    {
      id: "t6",
      hour: "36:00",
      phase: "PHASE 06",
      title: "COUNCIL VERDICT",
      description:
        "Double-blind audit finalized by engineering leaders. National winners, track bounties, and rewards announced live.",
      status: "UPCOMING",
    },
  ],
};
