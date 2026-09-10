/**
 * audioConfig.js
 * Intelligent Scene-Aware Audio Configuration for BUILDX Hackathon.
 *
 * User request:
 * "tum apne according scene analyze kro and voice ko bhi analyze krke apne according
 * jo jha lge wha best set kro like gate open pe whi sound aaye and step pe hi step ka sound aaye"
 *
 * Acoustic Analysis of "step and gate.mp3" (74.02s duration):
 * - 0.0s -> 2.5s: Initial gate presence & unlatch (Scene 02: Open Iron Gate Vault)
 * - 2.5s -> 8.0s: Authentic corridor walking footsteps (Scene 01: The Abandoned Corridor)
 * - 8.0s -> 10.5s: Metallic vault bar tension (Scene 09: Gripping Vault Gate bars)
 * - 16.5s -> 20.0s: Echoing room footsteps (Scene 03: Investigation Chamber walk)
 * - 22.0s -> 28.0s: Floor walkway footsteps (Scene 07: Subterranean Trapdoor Hatch approach)
 * - 38.0s -> 44.0s: Subterranean hollow stone stairs footsteps (Scene 08: Subterranean Staircase)
 * - 59.5s -> 74.0s: Solemn reverberant carpet footsteps (Scene 10: Crypt Cathedral walk)
 * - 64.0s -> 74.0s: Prize vault terminal walk (Scenes 11-14)
 * - Scene 06 (Blackboard Manifest): Muted for dedicated "black board chalk.mp3" writing audio
 * - Scene 09 (Tehkhaana Vault Gate): Exclusively plays "gate open.mp3" (0.45 vol) on gate breach
 */

export const sceneAudioConfig = {
  global: {
    file: "/hackathon-audio/step and gate.mp3",
    clip: { start: 2.5, end: 8.0 },
    volume: 0.50,
    trigger: "scroll",
    fadeIn: 0.35,
    fadeOut: 0.40,
    loop: true,
  },

  // ── Scene 01: The Abandoned Corridor (0.00 -> 0.10) ──
  // Walking approach towards presence: Footsteps from step and gate.mp3 (2.5s -> 8.0s)
  "scene-01": {
    file: "/hackathon-audio/step and gate.mp3",
    clip: { start: 2.5, end: 8.0 },
    volume: 0.50,
    loop: true,
  },

  // ── Scene 02: The Open Gate Vault (0.09 -> 0.20) ──
  // Approaching the corridor open iron gate
  "scene-02": {
    file: "/hackathon-audio/step and gate.mp3",
    clip: { start: 0.0, end: 2.5 },
    volume: 0.48,
    loop: false,
  },

  // ── Scene 03: The Investigation Chamber Walk (0.20 -> 0.36) ──
  // User: "ye page ke content aane ka and also voice jo yha pe h wo match nhi kr rha to kuch foog effect ya kuch voice me manage kro taki feel ho is content ke sath se wo feel generate hue hai"
  // Eerie low-key muffled room footsteps allowing the holographic classified incident reveal & chamber fog to breathe
  "scene-03": {
    file: "/hackathon-audio/step and gate.mp3",
    clip: { start: 16.5, end: 20.0 },
    volume: 0.18, // Subtly lowered so sound effect.mp3 and chamber fog define the atmosphere
    loop: true,
  },

  // ── Scene 06: The Blackboard Manifest (0.36 -> 0.60) ──
  // Dedicated "black board chalk.mp3" writes on the chalkboard; ambient voice muted
  "scene-06": {
    file: null,
  },

  // ── Scene 07: Subterranean Trapdoor Hatch Approach (0.60 -> 0.77) ──
  // Approaching the open floor trapdoor hatch: Walkway steps (22.0s -> 28.0s)
  "scene-07": {
    file: "/hackathon-audio/step and gate.mp3",
    clip: { start: 22.0, end: 28.0 },
    volume: 0.48,
    loop: true,
  },

  // ── Scene 08: Subterranean Staircase // The Ghost at the Gate (0.77 -> 0.86) ──
  // User: "rone wali aawaj scroll pe mt krakho and jo ghost gate ke pas h and jo eye view h dono pe rakho"
  // Continuous sorrowful weeping echoing down the stone stairs (does NOT stop on scroll pause).
  "scene-08": {
    file: "/hackathon-audio/women-crying.mp3",
    clip: { start: 0.0, end: 14.5 },
    volume: 0.16, // Haunting 16% volume
    loop: true,
    fadeIn: 0.50,
    fadeOut: 0.50,
    continuous: true, // Scroll stop pe pause nahi hoga!
  },

  // ── Scene 09: Ghost First-Person Eye View // Gripping the Vault Gate (0.86 -> 0.922) ──
  // First-person view through the ghost's eyes, gripping the metal bars.
  // Weeping continues seamlessly uninterrupted across Scene 08 and Scene 09!
  "scene-09": {
    file: "/hackathon-audio/women-crying.mp3",
    clip: { start: 0.0, end: 14.5 },
    volume: 0.18, // Intimate weeping at the gate bars
    loop: true,
    continuous: true, // Continuous playback across the eye view!
    fadeIn: 0.30,
    fadeOut: 0.60,
  },

  // ── Scene 10: The Open Vault Sanctum // Candled Crypt & Altar (0.922 -> 0.938) ──
  // User: "gate open ho jane ke bad bhi crying women ka voice aaye taki dr lge and wo scroll pe na ho"
  // Gate breach shoved open at 0.912! The eerie weeping echoes continuously inside the open crypt.
  "scene-10": {
    file: "/hackathon-audio/women-crying.mp3",
    clip: { start: 0.0, end: 14.5 },
    volume: 0.16, // Haunting echoing weeping continues inside the open vault crypt
    loop: true,
    continuous: true, // Scroll stop pe pause nahi hoga!
    fadeIn: 0.40,
  },

  "scene-10-map": {
    file: "/hackathon-audio/women-crying.mp3",
    clip: { start: 0.0, end: 14.5 },
    volume: 0.15,
    loop: true,
    continuous: true,
  },

  "scene-11": {
    file: "/hackathon-audio/women-crying.mp3",
    clip: { start: 0.0, end: 14.5 },
    volume: 0.14,
    loop: true,
    continuous: true,
  },

  "scene-12": {
    file: "/hackathon-audio/women-crying.mp3",
    clip: { start: 0.0, end: 14.5 },
    volume: 0.13,
    loop: true,
    continuous: true,
  },

  "scene-13": {
    file: "/hackathon-audio/women-crying.mp3",
    clip: { start: 0.0, end: 14.5 },
    volume: 0.11,
    loop: true,
    continuous: true,
  },

  "scene-14": {
    file: "/hackathon-audio/women-crying.mp3",
    clip: { start: 0.0, end: 14.5 },
    volume: 0.09,
    loop: true,
    continuous: true,
  },

  // ── Scene 15: The Crypt Sanctorum // Cathedral of the Occult Rules (0.988 -> 1.00) ──
  "scene-15": {
    file: "/hackathon-audio/women-crying.mp3",
    clip: { start: 0.0, end: 14.5 },
    volume: 0.08, // Haunting ambient weeping reverberating softly in the cathedral
    loop: true,
    continuous: true,
  },
};
