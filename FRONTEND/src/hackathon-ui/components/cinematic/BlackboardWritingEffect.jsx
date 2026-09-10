import React, { memo, useEffect } from "react";
import { ArrowRight, Trophy, Clock, ShieldCheck } from "lucide-react";
import { chalkAudio } from "../../utils/chalkAudio";

/**
 * ChalkWordStream
 * Renders text word-by-word tied directly to scroll progression.
 * Non-visible words have opacity 0 so layout and line-wraps remain rock-solid without layout shift.
 */
const ChalkWordStream = memo(function ChalkWordStream({
  words,
  progress = 0,
  className = "",
  cursorColor = "bg-stone-200",
}) {
  const total = words.length;
  const visibleCount = Math.min(Math.floor(progress * (total + 1)), total);

  return (
    <span className={className}>
      {words.map((item, idx) => {
        const text = typeof item === "string" ? item : item.text;
        const customClass = typeof item === "object" ? item.className || "" : "";
        const isVisible = idx < visibleCount;
        const isCurrent = idx === visibleCount - 1 && progress < 0.98 && progress > 0.02;

        return (
          <span
            key={idx}
            className={`inline-block select-none transition-opacity duration-100 ${customClass}`}
            style={{
              opacity: isVisible ? 1 : 0,
              marginRight: "0.26em",
            }}
          >
            {text}
            {isCurrent && (
              <span
                className={`inline-block w-1.5 h-3.5 ${cursorColor} ml-0.5 rounded-2xs opacity-90 shadow-[0_0_6px_rgba(255,255,255,0.8)] animate-pulse`}
              />
            )}
          </span>
        );
      })}
    </span>
  );
});

// Pre-tokenized word arrays for zero garbage collection overhead
const HEADER_TITLE = ["★", "CASE", "FILE", "//", "BUILDX-2026", ":", "TOP", "SECRET"];
const HEADER_SUBTITLE = ["•", "Sector", "4", "Crime", "Manifest", "•"];
const HEADER_STAMP = ["EVIDENCE", "RECORDED"];

const MISSION_WORDS = [
  { text: '"An' },
  { text: "unknown" },
  { text: "anomaly" },
  { text: "breached" },
  { text: "our" },
  { text: "core" },
  { text: "vault" },
  { text: "at" },
  {
    text: "03:17",
    className: "chalk-red font-bold underline decoration-wavy decoration-red-400/80",
  },
  { text: "AM." },
  { text: "Assemble" },
  { text: "your" },
  { text: "squad," },
  { text: "decipher" },
  { text: "the" },
  { text: "evidence" },
  { text: "on" },
  { text: "this" },
  { text: "board," },
  { text: "and" },
  { text: "engineer" },
  { text: "the" },
  { text: "containment" },
  { text: "breach" },
  { text: "solution" },
  { text: "before" },
  { text: "time" },
  { text: 'expires."' },
];

const TRACK_1_TITLE = ["✦", "TRACK", "01", "//", "PARANORMAL", "AI"];
const TRACK_1_DESC = [
  "Deep-learning",
  "anomaly",
  "detection,",
  "neural",
  "forensics,",
  "and",
  "autonomous",
  "agents.",
];
const TRACK_1_TAG = ["[", "BOUNTY", "ELIGIBLE", "•", "MULTI-MODAL", "]"];

const TRACK_2_TITLE = ["✦", "TRACK", "02", "//", "ZERO-TRUST", "DEFENSE"];
const TRACK_2_DESC = [
  "Vault",
  "infrastructure",
  "security,",
  "authentication",
  "recovery,",
  "and",
  "hardened",
  "systems.",
];
const TRACK_2_TAG = ["[", "BOUNTY", "ELIGIBLE", "•", "CYBERSEC", "]"];

const TRACK_3_TITLE = ["✦", "TRACK", "03", "//", "OPEN", "INNOVATION"];
const TRACK_3_DESC = [
  "Wildcard",
  "engineering:",
  "AI",
  "tools,",
  "Web3,",
  "cloud",
  "infrastructure,",
  "and",
  "impactful",
  "apps.",
];
const TRACK_3_TAG = ["[", "ALL", "DOMAINS", "OPEN", "•", "VIRTUAL", "]"];

const STAT_1_WORDS = ["⏱", "36", "Hours", "Hackathon"];
const STAT_2_WORDS = ["🏆", "₹50,000+", "Prize", "Pool"];
const STAT_3_WORDS = ["🛡", "Free", "Registration"];

const CTA_WORDS = ["⚡", "BREACH", "THE", "VAULT", "//", "REGISTER", "➔"];

/**
 * BlackboardWritingEffect
 * Scroll-driven word-by-word chalkboard writing simulation.
 * As user scrolls, chalk writes out across the board in real time.
 * Supports:
 * - variant="front": full-screen interactive writing on Scene 06 (0.50 -> 0.75)
 * - variant="mini-angled": 3D perspective anchored to the blackboard in Scene 07
 */
const BlackboardWritingEffect = memo(function BlackboardWritingEffect({
  scrollProgress = 0,
  variant = "front",
}) {
  const isMini = variant === "mini-angled";

  // Chalk writing audio controller:
  // User: "jb wo black board pe likhna start kre tb ye voice add krna h and khatam hote hi fade ke sath hta dena h"
  useEffect(() => {
    if (isMini) return;

    // Writing begins at 0.380 (pHeader starts) and finishes at 0.561 (pCTA completes)
    const isWriting = scrollProgress >= 0.38 && scrollProgress <= 0.562;

    if (isWriting) {
      chalkAudio.onWritingScrollActivity();
    } else {
      // Fade out smoothly when writing completes or user leaves writing zone
      chalkAudio.pauseWithFade(350);
    }
  }, [scrollProgress, isMini]);

  // Clean up chalk audio on component unmount
  useEffect(() => {
    return () => {
      if (!isMini) {
        chalkAudio.pauseWithFade(300);
      }
    };
  }, [isMini]);

  // When in front mode on Scene 06:
  // Starts at 0.36, writes crisply, finishes by 0.55, fades out smoothly by 0.59
  // Reduced duration by 1 sec as requested so it does not linger over Scene 07!
  if (!isMini) {
    if (scrollProgress < 0.36 || scrollProgress > 0.60) return null;
  }

  // ── Word-by-Word Scroll Timelines ──
  const pHeader = isMini ? 1 : Math.min(Math.max((scrollProgress - 0.38) / 0.03, 0), 1);
  const pMission = isMini ? 1 : Math.min(Math.max((scrollProgress - 0.41) / 0.055, 0), 1);
  const pTrack1 = isMini ? 1 : Math.min(Math.max((scrollProgress - 0.465) / 0.02, 0), 1);
  const pTrack2 = isMini ? 1 : Math.min(Math.max((scrollProgress - 0.485) / 0.02, 0), 1);
  const pTrack3 = isMini ? 1 : Math.min(Math.max((scrollProgress - 0.505) / 0.02, 0), 1);
  const pStats = isMini ? 1 : Math.min(Math.max((scrollProgress - 0.525) / 0.018, 0), 1);
  const pCTA = isMini ? 1 : Math.min(Math.max((scrollProgress - 0.543) / 0.018, 0), 1);

  // Smooth fadeout before camera pulls back into Scene 07
  const frontFade = isMini ? 0 : Math.min(Math.max((scrollProgress - 0.56) / 0.04, 0), 1);
  const frontOpacity = 1.0 - frontFade;

  const handleRegisterClick = () => {
    const regBtn = document.querySelector("[data-register-trigger]");
    if (regBtn) {
      regBtn.click();
    } else {
      window.location.hash = "register";
    }
  };

  if (isMini) {
    return (
      <div
        className="absolute z-25 pointer-events-none select-none overflow-hidden"
        style={{
          left: "3.2%",
          top: "12.8%",
          width: "40.5%",
          height: "30.0%",
          transform: "perspective(1200px) rotateY(3deg) rotateX(0.5deg)",
          transformOrigin: "left center",
          mixBlendMode: "screen",
        }}
      >
        <div className="w-full h-full px-2 py-1.5 flex flex-col justify-between opacity-95 text-stone-200">
          {/* Header */}
          <div className="border-b border-stone-400/35 pb-1 flex items-baseline justify-between">
            <span className="font-chalk-sketch-title text-xs sm:text-sm chalk-red tracking-wider">
              ★ CASE FILE // BUILDX-2026 : TOP SECRET
            </span>
            <span className="font-chalk-detective text-[10px] sm:text-xs chalk-yellow">
              • Sector 4 Manifest •
            </span>
          </div>

          {/* Mission Quote */}
          <p className="font-chalk-detective text-[11px] sm:text-xs lg:text-[13px] text-stone-200 leading-snug tracking-wide">
            "An unknown anomaly breached our core vault at <span className="chalk-red font-bold">03:17 AM</span>. Assemble your squad, decipher the evidence on this board, and engineer the containment breach solution."
          </p>

          {/* 3 Tracks — Authentic chalk notes without bulky web cards */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 text-[9px] sm:text-[10px]">
            <div>
              <div className="font-chalk-sketch-title text-[10px] sm:text-xs chalk-cyan tracking-wide">
                [ 01: AI ANOMALY ]
              </div>
              <div className="font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5">
                Deep neural forensics & agents
              </div>
            </div>
            <div>
              <div className="font-chalk-sketch-title text-[10px] sm:text-xs chalk-green tracking-wide">
                [ 02: ZERO-TRUST ]
              </div>
              <div className="font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5">
                Vault auth & hardened defense
              </div>
            </div>
            <div>
              <div className="font-chalk-sketch-title text-[10px] sm:text-xs chalk-yellow tracking-wide">
                [ 03: OPEN TRACK ]
              </div>
              <div className="font-chalk-sketch text-[8px] sm:text-[9.5px] text-stone-300/85 leading-tight mt-0.5">
                Wildcard engineering & apps
              </div>
            </div>
          </div>

          {/* Bottom Stats Line */}
          <div className="font-chalk-detective text-[9px] sm:text-[11px] flex items-center justify-between chalk-yellow pt-0.5 border-t border-stone-400/35">
            <span className="text-stone-300">⏱ 36 Hours</span>
            <span className="font-bold chalk-yellow">🏆 ₹50,000+ Pool</span>
            <span className="chalk-green">🛡 Free Registration</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 z-25 pointer-events-none select-none flex items-center justify-center overflow-hidden transition-opacity duration-150"
      style={{ opacity: frontOpacity }}
    >
      {/* Blackboard Slate Content Container — Wide layout comfortably lifted away from bottom chalk rail */}
      <div className="w-full max-w-5xl xl:max-w-[1180px] 2xl:max-w-[1240px] px-6 sm:px-10 lg:px-14 flex flex-col justify-center my-auto gap-3 sm:gap-4 -translate-y-3 sm:-translate-y-5">
        
        {/* ── TOP: Chalk Header Line (Word-by-Word Writing) ── */}
        <div className="relative pb-2.5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="flex items-center gap-2">
              <ChalkWordStream
                words={HEADER_TITLE}
                progress={pHeader}
                className="font-chalk-sketch-title text-xl sm:text-2xl md:text-[28px] chalk-red tracking-wider"
                cursorColor="bg-red-400"
              />
            </div>

            <div className="flex items-center gap-3">
              <ChalkWordStream
                words={HEADER_SUBTITLE}
                progress={pHeader}
                className="font-chalk-detective text-base sm:text-lg chalk-yellow tracking-wider"
                cursorColor="bg-yellow-300"
              />
              <span
                className="px-2 py-0.5 border border-dashed border-red-400/50 rounded-xs chalk-red font-chalk-sketch text-xs tracking-wider transition-opacity duration-200"
                style={{ opacity: pHeader >= 0.85 ? 1 : 0 }}
              >
                <ChalkWordStream
                  words={HEADER_STAMP}
                  progress={Math.min(pHeader * 1.2, 1)}
                  cursorColor="bg-red-400"
                />
              </span>
            </div>
          </div>

          {/* Underline drawn left-to-right as words write */}
          <div
            className="w-full h-0.5 border-b-2 border-dashed border-stone-400/35 transition-all duration-150 mt-2"
            style={{
              clipPath: `inset(0 ${(1 - pHeader) * 100}% 0 0)`,
            }}
          />
        </div>

        {/* ── MIDDLE: Chalk Handwritten Mission Statement (Word-by-Word Writing) ── */}
        <div className="min-h-[56px] sm:min-h-[64px] flex items-center">
          <p className="font-chalk-detective text-xl sm:text-2xl lg:text-[26px] chalk-white leading-relaxed tracking-wide">
            <ChalkWordStream
              words={MISSION_WORDS}
              progress={pMission}
              cursorColor="bg-stone-200"
            />
          </p>
        </div>

        {/* ── 3 Investigation Tracks Chalk Sketch Boxes (Word-by-Word Writing) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5">
          {/* Track 1 */}
          <div
            className="chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200"
            style={{
              opacity: pTrack1 > 0.05 ? 1 : 0,
              clipPath: `inset(0 ${(1 - Math.min(pTrack1 * 2, 1)) * 100}% 0 0)`,
            }}
          >
            <div className="font-chalk-sketch-title text-sm sm:text-base chalk-cyan mb-1 flex items-center gap-1.5">
              <ChalkWordStream
                words={TRACK_1_TITLE}
                progress={Math.min(pTrack1 * 1.5, 1)}
                cursorColor="bg-cyan-300"
              />
            </div>
            <p className="font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]">
              <ChalkWordStream
                words={TRACK_1_DESC}
                progress={Math.max((pTrack1 - 0.25) / 0.65, 0)}
                cursorColor="bg-stone-200"
              />
            </p>
            <div className="font-chalk-detective text-xs sm:text-sm chalk-cyan pt-1 font-bold tracking-wider">
              <ChalkWordStream
                words={TRACK_1_TAG}
                progress={Math.max((pTrack1 - 0.6) / 0.4, 0)}
                cursorColor="bg-cyan-300"
              />
            </div>
          </div>

          {/* Track 2 */}
          <div
            className="chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200"
            style={{
              opacity: pTrack2 > 0.05 ? 1 : 0,
              clipPath: `inset(0 ${(1 - Math.min(pTrack2 * 2, 1)) * 100}% 0 0)`,
            }}
          >
            <div className="font-chalk-sketch-title text-sm sm:text-base chalk-green mb-1 flex items-center gap-1.5">
              <ChalkWordStream
                words={TRACK_2_TITLE}
                progress={Math.min(pTrack2 * 1.5, 1)}
                cursorColor="bg-emerald-300"
              />
            </div>
            <p className="font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]">
              <ChalkWordStream
                words={TRACK_2_DESC}
                progress={Math.max((pTrack2 - 0.25) / 0.65, 0)}
                cursorColor="bg-stone-200"
              />
            </p>
            <div className="font-chalk-detective text-xs sm:text-sm chalk-green pt-1 font-bold tracking-wider">
              <ChalkWordStream
                words={TRACK_2_TAG}
                progress={Math.max((pTrack2 - 0.6) / 0.4, 0)}
                cursorColor="bg-emerald-300"
              />
            </div>
          </div>

          {/* Track 3 */}
          <div
            className="chalk-box-handdrawn p-3 sm:p-3.5 relative overflow-hidden transition-all duration-200"
            style={{
              opacity: pTrack3 > 0.05 ? 1 : 0,
              clipPath: `inset(0 ${(1 - Math.min(pTrack3 * 2, 1)) * 100}% 0 0)`,
            }}
          >
            <div className="font-chalk-sketch-title text-sm sm:text-base chalk-yellow mb-1 flex items-center gap-1.5">
              <ChalkWordStream
                words={TRACK_3_TITLE}
                progress={Math.min(pTrack3 * 1.5, 1)}
                cursorColor="bg-amber-300"
              />
            </div>
            <p className="font-chalk-sketch text-sm sm:text-[15px] chalk-white leading-snug min-h-[42px]">
              <ChalkWordStream
                words={TRACK_3_DESC}
                progress={Math.max((pTrack3 - 0.25) / 0.65, 0)}
                cursorColor="bg-stone-200"
              />
            </p>
            <div className="font-chalk-detective text-xs sm:text-sm chalk-yellow pt-1 font-bold tracking-wider">
              <ChalkWordStream
                words={TRACK_3_TAG}
                progress={Math.max((pTrack3 - 0.6) / 0.4, 0)}
                cursorColor="bg-amber-300"
              />
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Chalk Bounty Stamps & Breach Hand-Drawn Button (Word-by-Word Writing) ── */}
        <div
          className="pt-2 border-t border-dashed border-stone-400/35 transition-opacity duration-200"
          style={{
            opacity: pStats > 0.05 ? 1 : 0,
            clipPath: `inset(0 ${(1 - Math.min(pStats * 1.5, 1)) * 100}% 0 0)`,
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Handwritten Stats Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-chalk-detective text-base sm:text-lg md:text-xl">
              <div className="flex items-center gap-1.5 chalk-white">
                <Clock
                  className="w-4 h-4 text-stone-300 transition-opacity duration-150"
                  style={{ opacity: pStats > 0.08 ? 1 : 0 }}
                />
                <ChalkWordStream
                  words={STAT_1_WORDS}
                  progress={pStats}
                  cursorColor="bg-stone-200"
                />
              </div>
              <div className="flex items-center gap-1.5 chalk-yellow font-bold">
                <Trophy
                  className="w-4 h-4 text-amber-300 transition-opacity duration-150"
                  style={{ opacity: pStats > 0.35 ? 1 : 0 }}
                />
                <ChalkWordStream
                  words={STAT_2_WORDS}
                  progress={pStats}
                  cursorColor="bg-amber-300"
                />
              </div>
              <div className="flex items-center gap-1.5 chalk-green">
                <ShieldCheck
                  className="w-4 h-4 text-emerald-300 transition-opacity duration-150"
                  style={{ opacity: pStats > 0.65 ? 1 : 0 }}
                />
                <ChalkWordStream
                  words={STAT_3_WORDS}
                  progress={pStats}
                  cursorColor="bg-emerald-300"
                />
              </div>
            </div>

            {/* Hand-drawn Chalk Breach Register CTA Button */}
            <div
              className="transition-all duration-300"
              style={{
                opacity: pCTA > 0.05 ? 1 : 0,
                pointerEvents: pCTA > 0.4 ? "auto" : "none",
              }}
            >
              <button
                type="button"
                onClick={handleRegisterClick}
                className="chalk-btn-handdrawn font-chalk-sketch-title px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm chalk-red flex items-center gap-2 cursor-pointer select-none"
              >
                <ChalkWordStream
                  words={CTA_WORDS}
                  progress={pCTA}
                  cursorColor="bg-red-400"
                />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default BlackboardWritingEffect;
