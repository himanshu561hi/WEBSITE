import { sceneConfig } from "../data/sceneConfig";

/**
 * SceneManager
 * Centralized scene state coordinator for BUILDX WebGL experience.
 * 
 * In accordance with Master Prompt Section 6:
 * - Reads sceneConfig.js
 * - Determines active scene based on scroll progress
 * - Provides active scene ID and normalized progress
 */
export function createSceneManager() {
  const sections = sceneConfig.pageSections.filter((s) => s.enabled);
  let activeSceneId = sections[0] ? sections[0].id : "hero";

  return {
    getActiveScene: () => activeSceneId,
    update: (scrollProgress) => {
      // Calculate which section is active
      const total = sections.length;
      if (total === 0) return;

      const index = Math.min(
        Math.floor(scrollProgress * total),
        total - 1
      );
      if (sections[index]) {
        activeSceneId = sections[index].id;
      }
    },
  };
}
