/**
 * tracksConfig.js
 * BUILDX — Dynamic Challenge Tracks Configuration
 * Supports 3, 5, 6, 8 or any number of tracks without altering components.
 */
export const tracksConfig = {
  tag: "02 // THE EVIDENCE",
  title: "CLASSIFIED PROBLEM TRACKS",
  subtitle:
    "Select your field of investigation. Each track represents a critical real-world technical anomaly awaiting your solution.",

  tracks: [
    {
      id: "ai_intelligence",
      trackNo: "TRACK // 01",
      title: "AGENTIC INTELLIGENCE & ML",
      category: "Artificial Intelligence",
      description:
        "Architect autonomous multi-agent networks, reasoning pipelines, multimodal vision models, or self-healing software agents.",
      bounty: "₹50,000",
      tags: ["LLMs", "Autonomous Agents", "RAG", "Model Distillation"],
      badge: "ACTIVE ANOMALY",
    },
    {
      id: "cybersecurity_systems",
      trackNo: "TRACK // 02",
      title: "ZERO-TRUST & CYBERSECURITY",
      category: "Security & Systems",
      description:
        "Defend distributed infrastructure against zero-day vulnerabilities, build real-time intrusion forensics, and quantum-safe cryptography.",
      bounty: "₹45,000",
      tags: ["Forensics", "Zero-Trust", "eBPF", "Cryptography"],
      badge: "HIGH CLEARANCE",
    },
    {
      id: "fintech_infrastructure",
      trackNo: "TRACK // 03",
      title: "FINANCIAL INFRASTRUCTURE",
      category: "Fintech & Web3",
      description:
        "Engineer high-frequency settlement rails, AI fraud detection engines, verifiable compliance ledgers, and next-generation payments.",
      bounty: "₹45,000",
      tags: ["Payments", "Fraud Graph", "Micro-Services", "Settlements"],
      badge: "CLASSIFIED",
    },
    {
      id: "developer_tools",
      trackNo: "TRACK // 04",
      title: "DEVELOPER TOOLS & COMPILERS",
      category: "DevTools & Infra",
      description:
        "Build blazing-fast bundlers, runtime diagnostics, telemetry monitors, automated test synthesizers, or distributed cloud tools.",
      bounty: "₹40,000",
      tags: ["Compilers", "Observability", "WASM", "CI/CD"],
      badge: "CORE ENGINE",
    },
    {
      id: "health_biotech",
      trackNo: "TRACK // 05",
      title: "HEALTHCARE INTELLIGENCE",
      category: "HealthTech & Bio",
      description:
        "Develop diagnostic computer vision pipelines, clinical workflow assistants, federated health datasets, or accessible patient interfaces.",
      bounty: "₹40,000",
      tags: ["Med-Vision", "Privacy", "FHIR", "Diagnostics"],
      badge: "VITAL SIGN",
    },
    {
      id: "open_innovation",
      trackNo: "TRACK // 06",
      title: "OPEN INVESTIGATION",
      category: "Wildcard Engineering",
      description:
        "Have an audacious, unconventional idea that defies standard categories? Build whatever pushes the envelope of technology.",
      bounty: "₹35,000",
      tags: ["Wildcard", "Hardware", "Spatial", "Creative Tech"],
      badge: "UNRESTRICTED",
    },
  ],
};
