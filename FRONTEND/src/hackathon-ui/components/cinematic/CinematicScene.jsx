import React, { memo, useState, useEffect } from "react";
import { storyConfig } from "../../config/storyConfig";

/**
 * CinematicScene
 * Renders the primary scene image (Home.png) in a fixed/sticky viewport.
 * Features:
 * - Starts with a pitch black screen and classified scanning signal.
 * - Smoothly emerges out of black with a deep cinematic blur-to-sharp exposure reveal (2.2s).
 * - Preserves aspect ratio with object-fit: cover and zero distortion.
 * - Coordinates with CinematicHeroData to show the homepage dossier on the left dark wall.
 */
const CinematicScene = memo(function CinematicScene({
  imageSrc,
  sceneId = "scene-01",
  scrollProgress = 0,
  cameraTransform = {},
  onRevealComplete,
}) {
  // Reveal Stages:
  // 0: Pitch Black + "THE SIGNAL IS STILL ACTIVE" classified radar telemetry (top-of-page only)
  // 1: Scanning overlay fades out & scene image emerges
  // 2: Complete clarity, hero data revealed
  const isScrolled = scrollProgress > 0.005;
  const [revealStage, setRevealStage] = useState(() => (isScrolled ? 2 : 0));

  useEffect(() => {
    // If user starts scrolled down or scrolls at all, immediately clear intro
    if (scrollProgress > 0.005) {
      setRevealStage(2);
      if (onRevealComplete) onRevealComplete();
      return;
    }

    // Top-of-page intro sequence
    const t1 = setTimeout(() => {
      setRevealStage(1);
    }, 850);

    const t2 = setTimeout(() => {
      setRevealStage(2);
      if (onRevealComplete) onRevealComplete();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [scrollProgress > 0.005, onRevealComplete]);

  // If user scrolls even 1px at any speed, instantly dismiss the scanning screen
  useEffect(() => {
    if (scrollProgress > 0.005 && revealStage < 2) {
      setRevealStage(2);
      if (onRevealComplete) onRevealComplete();
    }
  }, [scrollProgress, revealStage, onRevealComplete]);

  const { x = 0, y = 0, scale = 1, rotateZ = 0 } = cameraTransform;

  // Additional subtle ghost focus tension between 0.35 and 0.65
  const ghostFocusTension =
    scrollProgress >= 0.35 && scrollProgress <= 0.65
      ? Math.sin(((scrollProgress - 0.35) / 0.30) * Math.PI) * 0.08
      : 0;

  const showScanningOverlay = !isScrolled && revealStage < 2;
  const curtainOpacity = isScrolled ? 0 : revealStage === 0 ? 1 : revealStage === 1 ? 0.35 : 0;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none bg-black">
      {/* 1. Base Cinematic Scene Image Container with GPU Transform */}
      {/* User: "home screen ke bhoot ko thda sa right me krna h" */}
      {/* User: "koi effect create kro jisse lge ki home page pe light on and off ka effect lge" */}
      <div
        className="absolute -inset-x-[6%] -inset-y-[4%] w-[112%] h-[108%] will-change-transform transform-gpu"
        style={{
          transform: `translate3d(calc(${x}px + 4.2vw), ${y}px, 0) scale(${scale}) rotate(${rotateZ}deg)`,
          transformOrigin: "54% 18%", // Anchored from upper side / ghost eye-level perspective
        }}
      >
        <img
          src={imageSrc}
          alt="Paranormal Investigation Scene"
          className="w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.05] contrast-[1.06]"
          loading="eager"
          decoding="async"
        />

        {/* Hanging Ceiling Lamp Flare: Pure GPU opacity, zero CPU blend overhead */}
        {sceneId === "scene-01" && scrollProgress < 0.10 && (
          <div
            className="absolute inset-0 pointer-events-none corridor-bulb-flare transform-gpu will-change-opacity"
            style={{
              background: "radial-gradient(circle at calc(54% + 4.2vw) 26%, rgba(255, 195, 80, 0.32) 0%, rgba(220, 130, 40, 0.15) 26%, transparent 60%)",
            }}
          />
        )}

        {/* Hardware-Accelerated Industrial Light Cutout / Blackout Shadow (pure GPU opacity, 120fps smooth) */}
        {sceneId === "scene-01" && scrollProgress < 0.10 && (
          <div
            className="absolute inset-0 pointer-events-none bg-black corridor-blackout-shadow transform-gpu will-change-opacity"
          />
        )}
      </div>

      {/* 2. Pitch-Black Atmosphere Reveal Curtain (Instant 0 when scrolling) */}
      <div
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-out"
        style={{
          opacity: curtainOpacity,
        }}
      />

      {/* 3. Initial Classified Scanning Telemetry (Never rendered once user scrolls) */}
      {showScanningOverlay && (
        <div
          className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/95 text-center pointer-events-none transition-opacity duration-500 ${
            revealStage === 1 ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="space-y-3 font-mono">
            <div className="text-xs text-[#D01820] tracking-widest uppercase animate-pulse flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D01820] animate-ping" />
              <span>{storyConfig.initialLoad.badge}</span>
            </div>

            <div className="text-sm sm:text-base text-stone-200 tracking-widest uppercase font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              {storyConfig.initialLoad.signalText}
            </div>

            <div className="text-[11px] text-stone-500 tracking-widest uppercase pt-2 animate-pulse">
              INITIALIZING RECONNAISSANCE TELEMETRY...
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default CinematicScene;
