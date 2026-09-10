import React, { memo } from "react";

/**
 * FogLayer
 * Multi-layer procedural drifting mist and environmental atmospheric fog.
 * Lightweight CSS translation with SVG noise.
 */
const FogLayer = memo(function FogLayer({ opacity = 0.35, className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Fog Layer 1: Drifting left to right slowly */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-400/[0.04] to-transparent animate-fog-drift w-[200%] h-full filter blur-3xl" />

      {/* Fog Layer 2: Deep low ground roll */}
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-[#080808] via-stone-800/[0.05] to-transparent filter blur-2xl" />

      {/* Ambient Red Tint Leak (Subtle supernatural warmth deep in the scene) */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#B3131B]/[0.03] filter blur-[100px]" />
    </div>
  );
});

export default FogLayer;
