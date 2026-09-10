/**
 * hackathonConfig.js
 * BUILDX — Core Event & Branding Configuration
 * Pure data: No JSX, no visual styling logic.
 */
export const hackathonConfig = {
  branding: {
    name: "BUILDX",
    wordmarkPrefix: "BUILD",
    wordmarkAccent: "X",
    organizer: "CODE-A-NOVA",
    subOrganizer: "A CODE-A-NOVA HACKATHON",
    caseNumber: "CASE FILE // 001",
    edition: "2026 NATIONAL INVESTIGATION",
    systemLabel: "RESTRICTED DOSSIER // LEVEL-4 CLEARANCE",
    tagline: "36 HOURS. ONE MYSTERY. INFINITE POSSIBILITIES.",
    supportingText: "An unknown challenge has been detected. You have 36 hours to investigate, build, and deploy an impactful solution.",
    missionDescription: "BUILDX is a 36-hour national-level online hackathon where developers, engineers, and designers investigate real challenges and engineer breakthrough software.",
  },

  event: {
    format: "Online / Virtual Dossier",
    duration: "36 Hours Non-Stop",
    level: "National Level",
    teamSize: "1 - 4 Investigators",
    eligibility: "Open to all students, developers & tech innovators nationwide",
    status: "INVESTIGATION ACTIVE",
    caseCode: "CASE-BX-2026",
  },

  dates: {
    registrationDeadline: null,
    start: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(),
    end: new Date(Date.now() + 37 * 24 * 60 * 60 * 1000).toISOString(),
    displayDateText: "DATES TO BE DECLASSIFIED SOON",
  },

  registration: {
    ctaText: "REGISTER NOW",
    targetUrl: "#registration",
    externalUrl: null,
    isOpen: true,
  },

  socials: {
    github: "https://github.com",
    discord: "https://discord.gg",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
};
