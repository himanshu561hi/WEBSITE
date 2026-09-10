import React, { memo } from "react";
import { storyConfig } from "../../config/storyConfig";

/**
 * SceneTransition
 * Directional environment gate transition:
 * After the ~80% shove, the camera is physically thrown rightward through the open metal gate.
 * Scene 01 translates leftwards and dissolves into red mist and iron shadows.
 * Scene 02 (inside the gate) enters from the right with atmospheric depth and no white flash.
 */
const SceneTransition = memo(function SceneTransition({
  scrollProgress = 0,
  scene2Src,
}) {
  const { transition } = storyConfig;
  const { start, climax, end } = transition;

  // Active during transition window 82% to 100%
  if (scrollProgress < start) return null;

  // Normalized transition progress from 0 (at 0.82) to 1.0 (at 0.94)
  const tProgress = Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1);

  // Scene 2 entrance displacement (starts at +30% right, slides to 0%)
  const scene2X = (1 - tProgress) * 35;
  const scene2Scale = 1.15 - tProgress * 0.15; // 1.15 down to 1.0
  const scene2Opacity = tProgress < 0.2 ? tProgress / 0.2 : 1;

  // Red mist & iron doorway wipe peak around climax (~88%)
  const fogOpacity =
    scrollProgress <= climax
      ? ((scrollProgress - start) / (climax - start)) * 0.85
      : (1 - (scrollProgress - climax) / (end - climax)) * 0.85;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-15">
      {/* 1. Scene 02 Image Layer */}
      <div
        className="w-full h-full will-change-transform transform-gpu"
        style={{
          opacity: Math.max(0, Math.min(1, scene2Opacity)),
          transform: `translate3d(${scene2X}%, 0, 0) scale(${scene2Scale})`,
          transition: "transform 80ms linear, opacity 100ms linear",
        }}
      >
        <img
          src={scene2Src}
          alt="Vault Beyond The Gate"
          className="w-full h-full object-cover object-center pointer-events-none select-none"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* 2. Red Atmospheric Mist & Darkness Wipe at Doorway Threshold */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-150"
        style={{
          opacity: Math.max(0, Math.min(0.9, fogOpacity)),
          background: `radial-gradient(ellipse at 75% 50%, rgba(208, 24, 32, 0.75) 0%, rgba(30, 4, 6, 0.95) 60%, rgba(0, 0, 0, 0.98) 100%)`,
          mixBlendMode: "hard-light",
        }}
      />
    </div>
  );
});

export default SceneTransition;
