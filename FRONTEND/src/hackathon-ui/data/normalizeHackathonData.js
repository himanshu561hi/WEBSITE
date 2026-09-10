/**
 * normalizeHackathonData.js
 * BUILDX — Backend Data Normalizer
 * Transforms future backend API responses into the shape expected by UI components.
 * This guarantees that components never couple directly to raw database schemas.
 */
import { hackathonConfig } from "./hackathonConfig";
import { tracksConfig } from "./tracksConfig";
import { rewardsConfig } from "./rewardsConfig";
import { timelineConfig } from "./timelineConfig";
import { faqConfig } from "./faqConfig";
import { sponsorConfig } from "./sponsorConfig";
import { judgeConfig } from "./judgeConfig";

export function normalizeHackathonData(rawApiData) {
  if (!rawApiData) {
    return {
      hackathon: hackathonConfig,
      tracks: tracksConfig.tracks,
      rewards: rewardsConfig,
      timeline: timelineConfig.milestones,
      faqs: faqConfig.faqs,
      sponsors: sponsorConfig.tiers,
      judges: judgeConfig.judges,
      criteria: judgeConfig.criteria,
    };
  }

  return {
    hackathon: {
      ...hackathonConfig,
      branding: {
        ...hackathonConfig.branding,
        name: rawApiData.title || hackathonConfig.branding.name,
        tagline: rawApiData.tagline || hackathonConfig.branding.tagline,
      },
      dates: {
        ...hackathonConfig.dates,
        start: rawApiData.startDate || hackathonConfig.dates.start,
        end: rawApiData.endDate || hackathonConfig.dates.end,
      },
    },
    tracks: Array.isArray(rawApiData.tracks) && rawApiData.tracks.length > 0
      ? rawApiData.tracks.map((t, idx) => ({
          id: t._id || t.id || `track_${idx}`,
          trackNo: `TRACK // ${String(idx + 1).padStart(2, "0")}`,
          title: t.title || t.name,
          category: t.category || "General",
          description: t.description || "",
          bounty: t.prize ? `₹${t.prize.toLocaleString()}` : "CLASSIFIED",
          tags: t.tags || [],
          badge: t.badge || "ACTIVE",
        }))
      : tracksConfig.tracks,
    rewards: rawApiData.rewards || rewardsConfig,
    timeline: rawApiData.timeline || timelineConfig.milestones,
    faqs: rawApiData.faqs || faqConfig.faqs,
    sponsors: rawApiData.sponsors || sponsorConfig.tiers,
    judges: rawApiData.judges || judgeConfig.judges,
    criteria: rawApiData.criteria || judgeConfig.criteria,
  };
}
