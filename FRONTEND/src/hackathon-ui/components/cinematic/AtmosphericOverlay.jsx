import React, { memo } from "react";

/**
 * AtmosphericOverlay
 * Cinematic film grain, breathing vignette, low floor fog, and dynamic warm-red/cool-blue ambient filters.
 */
const AtmosphericOverlay = memo(function AtmosphericOverlay({
  scrollProgress = 0,
  isImpactActive = false,
  gateProximity = 0, // 0 to 1 as camera nears gate
}) {
  // In the room (0.68 -> 0.78), clear out heavy vignette & fog so room, desk, and crime board are crisp and clearly visible
  const roomEntrance = Math.min(Math.max((scrollProgress - 0.68) / 0.10, 0), 1);
  const redVignetteMultiplier = 1.0 - roomEntrance;

  // Start at 0 at initial state (no vignette). Slowly increases in corridor, then softens down in room so room image is bright & clear:
  const corridorVignette = Math.min(scrollProgress * 1.2, 0.55);
  const dynamicVignetteOpacity = corridorVignette * (1.0 - roomEntrance * 0.65);

  // Floor fog: very subtle, fades out in room so floor and chests in room are clear:
  const dynamicFloorFog = Math.min(0.10 + scrollProgress * 0.18, 0.28) * (1.0 - roomEntrance * 0.85);

  return (
    <div className="pointer-events-none absolute inset-0 z-19 overflow-hidden select-none">
      {/* 1. Dynamic Cinematic Vignette: 0 at start (no vignette), subtle in hallway, clears up in room */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(4,5,7,0.05) 35%, rgba(2,2,3,0.55) 75%, rgba(0,0,0,0.85) 100%)`,
          opacity: dynamicVignetteOpacity,
        }}
      />

      {/* 3. Volumetric Floor Fog Layer: smooth multi-stop gradient, pure GPU opacity */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none transition-opacity duration-300 will-change-opacity transform-gpu"
        style={{
          background: `linear-gradient(to top, rgba(10,14,20,0.7) 0%, rgba(10,14,20,0.5) 25%, rgba(12,18,24,0.25) 50%, rgba(12,18,24,0.08) 75%, transparent 100%)`,
          opacity: dynamicFloorFog,
        }}
      />

      {/* 4. Subtle Analog Film Grain */}
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.12) 1px, transparent 0)`,
          backgroundSize: "3px 3px",
        }}
      />

      {/* 5. Subtle Red Edge Shock Vignette on Impact (Dheere dheere fades out completely upon room entrance) */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
          isImpactActive ? "opacity-75" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(208,24,32,0.35) 85%, rgba(180,10,20,0.55) 100%)",
          mixBlendMode: "screen",
          opacity: isImpactActive ? 0.75 * redVignetteMultiplier : 0,
        }}
      />
    </div>
  );
});

export default AtmosphericOverlay;
