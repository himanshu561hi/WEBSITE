import React, { memo, useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { contentConfig } from "../../data/contentConfig";
import { narrativeConfig } from "../../config/narrativeConfig";
import MagneticButton from "../MagneticButton";
import buildxLogoDanger from "../../assets/buildx-logo-danger.png";

/**
 * CinematicHeroData
 * Clean, modern, high-impact homepage layout on the left dark wall.
 * Combines minimalist typography with a unique, striking BUILDX wordmark.
 */
const CinematicHeroData = memo(function CinematicHeroData({
  scrollProgress = 0,
  revealed = false,
}) {
  const { hero } = contentConfig;
  const { hackathonDetails } = narrativeConfig;

  // Internal visible state starts false so the "THE SIGNAL IS STILL ACTIVE" scanning intro plays first
  const [internalVisible, setInternalVisible] = useState(false);

  useEffect(() => {
    if (revealed || scrollProgress > 0.02) {
      setInternalVisible(true);
    }
  }, [revealed, scrollProgress]);

  // Zoom out / paas me aana as user scrolls past 3%
  let scrollScale = 1.0;
  let scrollOpacity = 1.0;
  let scrollTranslateX = 0;

  if (scrollProgress > 0.03) {
    const t = Math.min(Math.max((scrollProgress - 0.03) / 0.16, 0), 1);
    scrollScale = 1.0 + t * 0.20; // Clean zoom forward (1.0 -> 1.20)
    scrollOpacity = Math.max(1.0 - t * 1.35, 0); // Fades out completely to 0 by ~0.15
    scrollTranslateX = -t * 22;   // Drift past user's shoulder
  }

  // Realistic Cameraman walking footstep physics (synchronized with scene):
  const stepCycle = scrollProgress * Math.PI * 46;
  const isWalking = scrollProgress > 0.005;
  const footDrop = Math.abs(Math.sin(stepCycle));
  const textWalkBobY = isWalking ? (footDrop * 6 - 3) : 0;
  const textWalkSwayX = isWalking ? Math.sin(stepCycle * 0.5) * 5 : 0;
  const textWalkTilt = isWalking ? Math.sin(stepCycle * 0.5) * 0.45 : 0;

  const currentOpacity = internalVisible ? scrollOpacity : 0;
  if (currentOpacity <= 0.005 && (scrollProgress > 0.12 || internalVisible)) return null;

  return (
    <div
      className="absolute inset-y-0 left-0 z-25 flex flex-col justify-center pl-4 sm:pl-8 lg:pl-12 xl:pl-14 pr-4 max-w-md sm:max-w-lg lg:max-w-xl select-none will-change-transform transform-gpu origin-left"
      style={{
        opacity: currentOpacity,
        transform: `translate3d(${scrollTranslateX + textWalkSwayX}px, ${textWalkBobY}px, 0) scale(${scrollScale}) rotate(${textWalkTilt}deg)`,
        pointerEvents: currentOpacity > 0.4 ? "auto" : "none",
      }}
    >
      <div className="space-y-4 sm:space-y-5 pt-12 sm:pt-14">
        {/* 1. Sleek High-Contrast Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-black/90 backdrop-blur-md border border-white/20 font-mono text-xs text-stone-200 tracking-wider uppercase shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#D01820] animate-pulse shadow-[0_0_8px_#D01820]" />
          <span className="text-stone-400 font-semibold">CASE //</span>
          <span className="text-white font-black tracking-wide">BUILDX-001</span>
          <span className="text-stone-600 font-bold">•</span>
          <span className="text-stone-200 font-bold">A CODE-A-NOVA HACKATHON</span>
        </div>

        {/* 2. Dripping Horror BUILDX Logo (Vibrant & punchy on left wall) */}
        <div className="space-y-1.5 select-none">
          <div className="relative max-w-[260px] sm:max-w-[340px] lg:max-w-[400px] py-1 filter drop-shadow-[0_6px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_0_30px_rgba(208,24,32,0.55)] brightness-[1.12] contrast-[1.15]">
            <img
              src={buildxLogoDanger}
              alt="BUILDX"
              className="w-full h-auto object-contain select-none pointer-events-none"
              loading="eager"
            />
          </div>

          <p className="font-mono text-xs sm:text-sm md:text-base font-black text-white tracking-wider uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] pt-1">
            {hero.taglinePrimary}{" "}
            <span className="text-red-500 font-black drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]">
              {hero.taglineSecondary}
            </span>
          </p>
        </div>

        {/* 3. Crisp High-Contrast Narrative Briefing */}
        <p className="font-sans text-stone-100 text-xs sm:text-[13.5px] leading-relaxed max-w-md drop-shadow-md bg-black/85 backdrop-blur-md p-4 rounded-xs border-l-4 border-l-[#D01820] border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.85)] font-medium">
          {hero.description}
        </p>

        {/* 4. Quick Specs Strip: Bright, sharp, and easy to read */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs">
          <div className="px-3.5 py-1.5 rounded-xs bg-black/90 border border-white/20 backdrop-blur-md shadow-lg flex items-center gap-1.5">
            <span className="text-stone-400 font-semibold">DURATION:</span>
            <span className="text-white font-bold tracking-wide">{hackathonDetails.duration}</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xs bg-black/90 border border-emerald-900/60 backdrop-blur-md shadow-lg flex items-center gap-1.5">
            <span className="text-stone-400 font-semibold">BOUNTY:</span>
            <span className="text-emerald-300 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(110,231,183,0.4)]">
              {hackathonDetails.prizePool}
            </span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xs bg-black/90 border border-cyan-900/60 backdrop-blur-md shadow-lg flex items-center gap-1.5">
            <span className="text-stone-400 font-semibold">SECTOR:</span>
            <span className="text-cyan-300 font-bold tracking-wide drop-shadow-[0_0_10px_rgba(103,232,249,0.4)]">
              ONLINE NATIONAL
            </span>
          </div>
        </div>

        {/* 5. Primary Action Triggers */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <MagneticButton
            href="#register-modal"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => {
              const regBtn = document.querySelector("[data-register-trigger]");
              if (regBtn) regBtn.click();
            }}
          >
            ENTER THE CASE // REGISTER
          </MagneticButton>

          <button
            type="button"
            onClick={() => {
              const h = document.documentElement.scrollHeight - window.innerHeight;
              window.scrollTo({ top: h * 0.85, behavior: "smooth" });
            }}
            className="px-4 py-2.5 rounded-xs border border-white/20 hover:border-[#D01820] bg-black/85 hover:bg-black backdrop-blur-md font-mono text-xs text-stone-100 hover:text-white font-bold tracking-wider uppercase transition-all shadow-xl"
          >
            EXPLORE EVIDENCE ↓
          </button>
        </div>

        {/* 6. Subtle Scroll Prompt */}
        <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-stone-300 uppercase tracking-widest font-semibold drop-shadow-md">
          <ChevronDown className="w-3.5 h-3.5 text-[#D01820] animate-bounce" />
          <span>SCROLL TO ENTER THE INVESTIGATION</span>
        </div>
      </div>
    </div>
  );
});

export default CinematicHeroData;
