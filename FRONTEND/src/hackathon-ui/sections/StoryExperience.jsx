import React, { useState, useEffect, useRef, memo } from "react";
import CinematicStoryEngine from "../components/cinematic/CinematicStoryEngine";
import CinematicCaseEvidence from "./CinematicCaseEvidence";
import HackathonFooter from "./HackathonFooter";
import SocialCorner from "../components/cinematic/SocialCorner";

/**
 * StoryExperience
 * Seamless 2-phase journey:
 * 1. CHAPTER I (0.00 -> 1.00): Master 14-Scene Paranormal Story Engine pinned in a 2200vh track.
 *    At the climax, Save The Date proclamation reverse-rolls shut and dissolves into deep black.
 * 2. CHAPTER II (Natural page scroll): The visitor seamlessly continues scrolling down
 *    directly into the classified BUILDX Investigation Case Files, Anomaly Tracks, and Footer.
 */
const StoryExperience = memo(function StoryExperience() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    let currentProgress = 0;
    let targetProgress = 0;
    let rafId = null;

    const onScroll = () => {
      if (trackRef.current) {
        const top = trackRef.current.offsetTop || 0;
        const height = trackRef.current.offsetHeight || 1;
        const totalScrollable = height - window.innerHeight;
        if (totalScrollable > 0) {
          const scrolled = (window.scrollY || window.pageYOffset || 0) - top;
          targetProgress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
        }
      }
    };

    const updateLoop = () => {
      // 0.20 damping: immediate fluid response with zero lag or stutter (60/120fps)
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.00008) {
        currentProgress += diff * 0.20;
        setScrollProgress(currentProgress);
      } else if (currentProgress !== targetProgress) {
        currentProgress = targetProgress;
        setScrollProgress(currentProgress);
      }
      rafId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    currentProgress = targetProgress;
    setScrollProgress(currentProgress);
    rafId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative w-full bg-black text-[#e5e5e5]">
      {/* 1. Master Cinematic Paranormal Story Stage (Scene 01 -> Scene 17 Full Page Rules) */}
      <div ref={trackRef} className="relative w-full" style={{ height: "4600vh" }}>
        <div className="sticky top-0 w-full h-screen overflow-hidden z-10 bg-black">
          <CinematicStoryEngine scrollProgress={scrollProgress} />
        </div>
      </div>

      {/* 2. CHAPTER II: Investigation Case Dossiers, Breach Countdown & Anomaly Tracks */}
      <section id="case-evidence-section" className="relative z-20 w-full bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
        <div className="max-w-6xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xs bg-[#D01820]/10 border border-[#D01820]/40 text-[#D01820] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D01820] animate-ping" />
            <span>CHAPTER II // CLASSIFIED ANOMALY ARCHIVES</span>
          </div>
          <h2 className="font-serif font-black text-4xl sm:text-6xl text-stone-100 tracking-tight uppercase leading-none">
            INVESTIGATION CASE FILES
          </h2>
          <p className="font-mono text-xs sm:text-sm text-stone-400 max-w-xl mx-auto mt-3 tracking-wider uppercase leading-relaxed">
            The sanctum proclamation has been sealed. Explore the classified case briefs, anomaly challenge tracks, and lock in your registration below.
          </p>
        </div>

        <CinematicCaseEvidence isVisible={true} />
      </section>

      {/* 3. Official Hackathon Footer */}
      <HackathonFooter />

      {/* 4. Floating Bottom-Right Socials (Instagram, LinkedIn, WhatsApp) */}
      <SocialCorner />
    </div>
  );
});

export default StoryExperience;
