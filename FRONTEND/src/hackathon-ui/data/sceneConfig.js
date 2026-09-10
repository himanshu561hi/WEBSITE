/**
 * sceneConfig.js
 * BUILDX — Scene Choreography, Camera Waypoints & Paranormal Ghost Events
 * Fully configurable: Camera coordinates, lighting transitions, and paranormal appearances.
 */
export const sceneConfig = {
  // Page sections order and enable flags
  pageSections: [
    { id: "hero", enabled: true },
    { id: "case", enabled: true },
    { id: "evidence", enabled: true },
    { id: "investigation", enabled: true },
    { id: "timeline", enabled: true },
    { id: "council", enabled: true },
    { id: "rewards", enabled: true },
    { id: "benefits", enabled: true },
    { id: "sponsors", enabled: true },
    { id: "faq", enabled: true },
    { id: "final", enabled: true },
  ],

  // Camera interpolation sequence based on scrollProgress (0.0 to 1.0)
  cameraStages: [
    {
      progressEnd: 0.15,
      name: "Arrival & Room Overview",
      camPos: { start: [-0.2, 1.85, 6.8], end: [-0.5, 1.7, 4.8] },
      lookAt: { start: [0, 1.8, 0], end: [-0.2, 1.7, -2.0] },
    },
    {
      progressEnd: 0.35,
      name: "The Evidence & Dossiers",
      camPos: { start: [-0.5, 1.7, 4.8], end: [1.2, 1.85, 1.6] },
      lookAt: { start: [-0.2, 1.7, -2.0], end: [-0.4, 1.9, -5.0] },
    },
    {
      progressEnd: 0.55,
      name: "The Monolithic Hallway",
      camPos: { start: [1.2, 1.85, 1.6], end: [-0.6, 1.8, -6.5] },
      lookAt: { start: [-0.4, 1.9, -5.0], end: [0, 1.8, -18.0] },
    },
    {
      progressEnd: 0.75,
      name: "The 36-Hour Deep Corridor",
      camPos: { start: [-0.6, 1.8, -6.5], end: [0.4, 1.8, -16.0] },
      lookAt: { start: [0, 1.8, -18.0], end: [0, 2.0, -26.0] },
    },
    {
      progressEnd: 1.0,
      name: "The Final Illuminated Doorway",
      camPos: { start: [0.4, 1.8, -16.0], end: [0, 2.1, -24.5] },
      lookAt: { start: [0, 2.0, -26.0], end: [0, 2.3, -28.5] },
    },
  ],

  // 4 Carefully-Choreographed Paranormal Ghost Events (Subtle, Atmospheric, Non-jump-scare)
  ghostEvents: [
    {
      id: "event_a_arrival_presence",
      label: "Distant Hallway Presence",
      sceneId: "hero",
      startProgress: 0.02,
      peakProgress: 0.08,
      endProgress: 0.16,
      position: [0.3, 1.4, -6.5],
      maxOpacity: 0.75,
      behavior: "subtle-dissolve",
      enabled: true,
    },
    {
      id: "event_b_pillar_shadow",
      label: "Silhouette Behind Arch Pillar",
      sceneId: "investigation",
      startProgress: 0.36,
      peakProgress: 0.44,
      endProgress: 0.52,
      position: [-2.8, 1.2, -12.0],
      maxOpacity: 0.68,
      behavior: "peek-fade",
      enabled: true,
    },
    {
      id: "event_c_corridor_crossing",
      label: "Figure Crossing Corridor Depth",
      sceneId: "timeline",
      startProgress: 0.62,
      peakProgress: 0.70,
      endProgress: 0.78,
      position: [1.8, 1.3, -20.5],
      maxOpacity: 0.72,
      behavior: "cross-mist",
      enabled: true,
    },
    {
      id: "event_d_final_portal_sentinel",
      label: "Distant Sentinel Near Doorway",
      sceneId: "final",
      startProgress: 0.88,
      peakProgress: 0.94,
      endProgress: 1.0,
      position: [-1.4, 1.5, -26.5],
      maxOpacity: 0.6,
      behavior: "threshold-fade",
      enabled: true,
    },
  ],
};
