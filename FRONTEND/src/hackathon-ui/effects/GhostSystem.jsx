import { createGhostEntity } from "./GhostEntity";
import { sceneConfig } from "../data/sceneConfig";

/**
 * GhostSystem
 * Paranormal Event Coordinator for BUILDX.
 * 
 * In accordance with Master Prompt Section 79:
 * "The Ghost should NOT be everywhere. Use 3–5 carefully designed paranormal events.
 * The absence of the entity is part of the horror."
 * 
 * Smoothly calculates event activation, positions the ghost at the configured location,
 * and fades opacity up and down so it feels like a subtle, chilling glimpse.
 */
export function createGhostSystem(scene) {
  const entity = createGhostEntity(scene);
  const events = sceneConfig.ghostEvents.filter((e) => e.enabled);

  let currentOpacity = 0;

  return {
    update: (elapsedTime, mouse, scrollProgress) => {
      // Find active event based on current scroll progress
      let activeEvent = null;
      let targetOpacity = 0;

      for (const ev of events) {
        if (scrollProgress >= ev.startProgress && scrollProgress <= ev.endProgress) {
          activeEvent = ev;
          // Calculate bell curve opacity: 0 at start, max at peak, 0 at end
          if (scrollProgress < ev.peakProgress) {
            const t =
              (scrollProgress - ev.startProgress) /
              (ev.peakProgress - ev.startProgress);
            targetOpacity = t * ev.maxOpacity;
          } else {
            const t =
              (scrollProgress - ev.peakProgress) /
              (ev.endProgress - ev.peakProgress);
            targetOpacity = (1 - t) * ev.maxOpacity;
          }
          break;
        }
      }

      // Smooth opacity interpolation
      currentOpacity += (targetOpacity - currentOpacity) * 0.08;
      entity.setOpacity(currentOpacity);

      // If active or fading, position entity
      if (activeEvent && currentOpacity > 0.01) {
        entity.group.position.x = activeEvent.position[0];
        entity.group.position.z = activeEvent.position[2];
        entity.update(elapsedTime, mouse);
      } else if (currentOpacity > 0.01) {
        entity.update(elapsedTime, mouse);
      }
    },
    dispose: () => {
      entity.dispose();
    },
  };
}
