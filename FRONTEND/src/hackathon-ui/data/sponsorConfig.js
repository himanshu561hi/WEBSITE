/**
 * sponsorConfig.js
 * BUILDX — Ecosystem Allies & Sponsor Configuration
 * Falls back to an elegant "SPONSORS TO BE ANNOUNCED" state if empty.
 */
export const sponsorConfig = {
  tag: "08 // THE ALLIES",
  title: "ECOSYSTEM PARTNERS & SPONSORS",
  subtitle:
    "Backed by leading technology organizations providing API infrastructure, cloud compute, and student mentorship.",

  tiers: [
    {
      tierName: "INFRASTRUCTURE PARTNERS",
      sponsors: [
        { name: "CLOUDFLARE", type: "Security & Edge Computing", logoText: "CLOUDFLARE" },
        { name: "GITHUB", type: "Developer Platform", logoText: "GITHUB" },
        { name: "RESEND", type: "Email Infrastructure", logoText: "RESEND" },
      ],
    },
    {
      tierName: "TOOLING & ECOSYSTEM ALLIES",
      sponsors: [
        { name: "VERCEL", type: "Frontend Cloud", logoText: "VERCEL" },
        { name: "POSTMAN", type: "API Platform", logoText: "POSTMAN" },
        { name: "SUPABASE", type: "Open Source Backend", logoText: "SUPABASE" },
      ],
    },
  ],

  // Fallback banner if sponsors array is empty
  emptyState: {
    message: "ADDITIONAL SPONSOR TRANSMISSIONS TO BE DECLASSIFIED",
    contactEmail: "sponsors@code-a-nova.com",
  },
};
