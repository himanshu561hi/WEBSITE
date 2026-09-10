/**
 * storyConfig.js
 * Master scroll-driven cinematic timeline configuration for BUILDX.
 * All timing points, camera paths, impact triggers, and transitions are parameterized here.
 */
export const storyConfig = {
  // Total virtual scroll height multiplier (e.g. 5 = 500vh of scroll track)
  scrollDistanceMultiplier: 5.5,

  // Initial loading sequence
  initialLoad: {
    badge: "CASE FILE // 001",
    signalText: "THE SIGNAL IS STILL ACTIVE.",
    exposureRevealDurationMs: 1400,
  },

  // Narrative Text Sequence (locked to left negative space, avoiding the ghost)
  textEvents: [
    {
      id: "log_timestamp",
      start: 0.15,
      end: 0.27,
      fadeDuration: 0.03,
      tag: "INVESTIGATION LOG // CLASSIFIED",
      heading: "03:17 AM",
      body: "THE LAST SIGNAL CAME FROM HERE.",
      position: { x: "8%", y: "32%" },
    },
    {
      id: "log_silence",
      start: 0.28,
      end: 0.42,
      fadeDuration: 0.03,
      tag: "AUDIO SURVEILLANCE // 00.00DB",
      heading: "NO ONE ANSWERED.",
      body: "BUT SOMETHING WAS STILL MOVING.",
      position: { x: "8%", y: "35%" },
    },
    {
      id: "log_locked_door",
      start: 0.68,
      end: 0.77,
      fadeDuration: 0.03,
      tag: "ANOMALOUS BARRIER // SECTOR 4",
      heading: "THE DOOR WAS LOCKED.",
      body: "FROM THE INSIDE.",
      position: { x: "8%", y: "40%" },
    },
  ],

  // Camera Motion Choreography (0.0 to 1.0)
  // X: 0 (center) -> +0.22 (right toward gate)
  // Scale: 1.0 -> 1.26
  cameraEvents: [
    {
      start: 0.0,
      end: 0.35,
      from: { x: 0, y: 0, scale: 1.0, rotateZ: 0 },
      to: { x: 0, y: 0, scale: 1.03, rotateZ: 0 },
      target: "ghost-center",
      easing: "easeOutCubic",
    },
    {
      start: 0.35,
      end: 0.78,
      from: { x: 0, y: 0, scale: 1.03, rotateZ: 0 },
      to: { x: -0.16, y: -0.02, scale: 1.25, rotateZ: -0.4 }, // moving camera to right means scene transforms left (-X) or camera translates right
      target: "metal-gate",
      easing: "easeInOutQuad",
    },
    {
      start: 0.78,
      end: 0.82,
      // Pause / tension before impact
      from: { x: -0.16, y: -0.02, scale: 1.25, rotateZ: -0.4 },
      to: { x: -0.18, y: -0.02, scale: 1.27, rotateZ: -0.5 },
      target: "metal-gate-threshold",
      easing: "linear",
    },
  ],

  // Paranormal Shove / Impact Event at ~80%
  impactEvent: {
    triggerProgress: 0.80,
    endProgress: 0.825,
    durationMs: 480,
    type: "paranormal-shove",
    shakeIntensity: 18,     // px displacement
    rotationJerk: 2.8,      // degrees
    exposureBoost: 1.6,     // exposure multiplier flash
    chromaticSplit: 14,     // px rgb separation
    audioCue: "shove_sub_bass",
  },

  // Directional Gate Transition into Scene 02 (82% to 94%)
  transition: {
    start: 0.82,
    climax: 0.88,
    end: 0.94,
    type: "directional-gate-transition",
    direction: "right", // Camera pushed through gate to the right
    throwDisplacementX: -65, // % of screen
    redFogPeakOpacity: 0.85,
  },

  // Hackathon Content Reveal (94% to 1.0)
  evidenceReveal: {
    start: 0.93,
    end: 1.0,
  },
};
