/**
 * judgeConfig.js
 * BUILDX — The Council & Evaluation Criteria Configuration
 * Criteria must be dynamic. Never fabricate real identities.
 */
export const judgeConfig = {
  tag: "05 // THE COUNCIL",
  title: "DOUBLE-BLIND FORENSIC EVALUATION",
  subtitle:
    "Every build is independently evaluated by engineering leaders under strict double-blind audit protocols.",

  criteria: [
    {
      rubric: "TECHNICAL COMPLEXITY",
      weight: "30%",
      description:
        "Depth of architecture, efficient data structures, code hygiene, performance benchmarks, and scalable backend design.",
    },
    {
      rubric: "ORIGINALITY & INNOVATION",
      weight: "25%",
      description:
        "Novelty of the solution, creative problem formulation, and boldness in defying conventional tropes.",
    },
    {
      rubric: "REAL-WORLD IMPACT",
      weight: "20%",
      description:
        "Practical utility, target demographic value, commercial viability, and readiness for real-world deployment.",
    },
    {
      rubric: "UI / UX POLISH",
      weight: "15%",
      description:
        "Craft, accessibility, responsive ergonomics, micro-interactions, and coherent design systems.",
    },
    {
      rubric: "DEMO & PRESENTATION",
      weight: "10%",
      description:
        "Clarity of the technical walkthrough dossier, live demonstration stability, and concise communication.",
    },
  ],

  // Real or confirmed judges (or elegant placeholder state if pending confirmation)
  judges: [],
  judgesPendingText: "COUNCIL INVESTIGATOR DOSSIERS TO BE DECLASSIFIED SOON",
};
