import React, { useState, useEffect, memo } from "react";
import GhostEntity from "./GhostEntity";
import FogLayer from "./FogLayer";
import FloatingParticles from "./FloatingParticles";

/**
 * ParanormalScene
 * Interactive 2.5D abandoned investigation facility environment.
 * Features:
 * - Distant dark hallway with doorway
 * - Faint original supernatural silhouette that appears & vanishes
 * - Intermittent analog light flicker
 * - Desk lamp beam with floating dust particles
 * - Responsive mouse parallax damping
 */
const ParanormalScene = memo(function ParanormalScene({
  mousePos = { x: 0, y: 0 },
  className = "",
}) {
  const [flicker, setFlicker] = useState(false);

  // Occasional natural electrical flicker
  useEffect(() => {
    const triggerFlicker = () => {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 120);
      setTimeout(() => setFlicker(true), 240);
      setTimeout(() => setFlicker(false), 380);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.3) {
        triggerFlicker();
      }
    }, 11000);

    return () => clearInterval(interval);
  }, []);

  // Parallax calculations (bounded to subtle range)
  const offsetX = mousePos.x * 14;
  const offsetY = mousePos.y * 10;

  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-[#070707] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Deepest Layer: Distant Corridors & Far Doorway */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${offsetX * 0.3}px, ${offsetY * 0.3}px, 0)`,
        }}
      >
        {/* Distant Hallway Vanishing Perspective */}
        <div className="absolute top-1/4 right-[28%] md:right-[32%] w-44 sm:w-56 h-80 sm:h-96 border border-stone-900 bg-black shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]">
          {/* Faint Red Horizon Glow Behind Door */}
          <div className="absolute inset-x-4 bottom-0 top-12 bg-gradient-to-t from-[#B3131B]/15 via-transparent to-transparent blur-md" />

          {/* The Paranormal Silhouette inside the far doorway */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center">
            <GhostEntity flicker={flicker} />
          </div>

          {/* Door Frame Highlight */}
          <div className="absolute inset-0 border-t-2 border-r border-stone-800/40" />
        </div>
      </div>

      {/* 2. Midground: Atmospheric Fog */}
      <FogLayer opacity={0.4} />

      {/* 3. Desk Lamp Beam & Environmental Lighting */}
      <div
        className={`absolute top-0 left-1/4 md:left-1/3 w-[500px] h-[650px] transition-opacity duration-75 pointer-events-none ${
          flicker ? "opacity-35" : "opacity-75"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at 50% 15%, rgba(240, 215, 180, 0.08) 0%, rgba(200, 160, 120, 0.03) 45%, transparent 70%)",
          transform: `translate3d(${offsetX * 0.6}px, ${offsetY * 0.6}px, 0)`,
        }}
      />

      {/* 4. Concrete / Aged Wall Shadow Layers */}
      <div
        className="absolute inset-0 bg-radial from-transparent via-[#080808]/60 to-[#060606] transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${offsetX * 0.5}px, ${offsetY * 0.5}px, 0)`,
        }}
      />

      {/* 5. Dust Motes in Lamp Beam */}
      <FloatingParticles count={25} color="rgba(225, 210, 190, 0.35)" />

      {/* 6. Foreground Desk Gradient & Shadows */}
      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-gradient-to-t from-[#050505] via-[#080808]/90 to-transparent" />
    </div>
  );
});

export default ParanormalScene;
