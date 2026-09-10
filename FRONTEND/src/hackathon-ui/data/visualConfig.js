/**
 * visualConfig.js
 * BUILDX — Centralized Visual System Tokens & WebGL Defaults
 * Colors, fog densities, particle limits, and lighting parameters.
 */
export const visualConfig = {
  colors: {
    bgDark: "#040507",
    bgCorridor: "#06080c",
    slateNavy: "#0b1220",
    accentRed: "#d01820",
    accentCrimson: "#b3131b",
    spectralCyan: "#38bdf8",
    phosphorGreen: "#22c55e",
    textPrimary: "#f1f5f9",
    textSecondary: "#94a3b8",
    textMuted: "#64748b",
  },

  fog: {
    color: 0x040507,
    densityDesktop: 0.026,
    densityMobile: 0.034,
  },

  lighting: {
    ambientIntensity: 0.85,
    ambientColor: 0x0c1322,
    moonlightIntensity: 2.1,
    moonlightColor: 0x38bdf8,
    emergencyBeaconIntensity: 2.8,
    emergencyBeaconColor: 0xd01820,
    doorwayLightIntensity: 4.5,
    doorwayHoverIntensity: 12.0,
    doorwayColor: 0xb3131b,
  },

  particles: {
    dustCountDesktop: 420,
    dustCountMobile: 150,
    dustColor: 0x94a3b8,
    emberCountDesktop: 600,
    emberCountMobile: 200,
  },

  performance: {
    maxPixelRatio: 1.5,
    enableShadows: true,
  },
};
