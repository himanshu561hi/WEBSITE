import React, { memo } from "react";
import {
  ArrowRight,
  Terminal,
  Clock,
  Trophy,
  ShieldAlert,
  FileText,
  Radio,
  Skull,
  Crosshair,
  AlertTriangle,
} from "lucide-react";
import MagneticButton from "../MagneticButton";
import { narrativeConfig } from "../../config/narrativeConfig";
import buildxLogoDanger from "../../assets/buildx-logo-danger.png";

/**
 * CinematicRoomDossier
 * Scattered, dangerous, classified horror evidence elements in Scene 3 (Investigation Chamber).
 * Not trapped in a single box: independent hazardous dossiers, police crime logs, and threat telemetry
 * that stagger into view progressively on scroll with eerie horror typography.
 */
const CinematicRoomDossier = memo(function CinematicRoomDossier({
  scrollProgress = 0,
}) {
  // Enter immediately upon crossing into Scene 03 (0.19 -> 0.22)
  const enterProgress = Math.min(Math.max((scrollProgress - 0.18) / 0.03, 0), 1);
  if (enterProgress <= 0.005) return null;

  // All text elements are fully visible and readable together
  const p1 = enterProgress; // Caution banner & threat status
  const p2 = enterProgress; // Main ominous Title & BUILDX
  const p3 = enterProgress; // Incident Report Dossier
  const p4 = enterProgress; // Key Intel Chips
  const p5 = enterProgress; // Action Buttons

  // Smooth exit when camera pivots right towards the blackboard (0.31 -> 0.355)
  const exitProgress = Math.min(Math.max((scrollProgress - 0.31) / 0.035, 0), 1);
  const exitEase = Math.pow(exitProgress, 1.4);
  
  const exitScale = 1.0 + exitEase * 0.45;
  const exitPanX = -exitEase * 90;
  const exitOpacity = enterProgress * Math.max(1.0 - Math.pow(exitProgress, 1.3), 0);

  if (exitOpacity <= 0.005) return null;

  // Walking sway sync:
  const stepCycle = scrollProgress * Math.PI * 46;
  const footDrop = Math.abs(Math.sin(stepCycle));
  const walkBobY = (footDrop * 6 - 3);
  const walkSwayX = Math.sin(stepCycle * 0.5) * 5;

  const { hackathonDetails } = narrativeConfig;

  return (
    <div
      className="absolute inset-0 z-25 pointer-events-none select-none flex flex-col justify-between pl-6 sm:pl-12 lg:pl-16 pr-4 sm:pr-8 pt-20 sm:pt-22 lg:pt-24 pb-4 sm:pb-6 overflow-hidden will-change-transform transform-gpu"
      style={{
        opacity: exitOpacity,
        transform: `translate3d(${exitPanX + walkSwayX}px, ${walkBobY}px, 0) scale(${exitScale})`,
        transformOrigin: "45% 48%",
        pointerEvents: exitOpacity > 0.4 ? "auto" : "none",
      }}
    >
      {/* ── Volumetric Investigation Chamber Fog & Supernatural Mist ── */}
      {/* User: "ye page ke content aane ka and also voice jo yha pe h wo match nhi kr rha to kuch foog effect ya kuch voice me manage kro" */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 -z-10"
        style={{
          opacity: Math.min(enterProgress * 1.35, 0.95) * Math.max(1.0 - Math.pow(exitProgress, 1.2), 0),
        }}
        aria-hidden="true"
      >
        {/* Layer 1: Dense Low Floor Fog billows across chamber tiles */}
        <div className="absolute -bottom-12 inset-x-0 h-[58vh] bg-gradient-to-t from-black via-stone-950/65 to-transparent filter blur-3xl pointer-events-none" />

        {/* Layer 2: Drifting Horizontal Volumetric Mist Stream */}
        <div className="absolute bottom-2 -left-[30%] w-[160%] h-80 bg-gradient-to-r from-transparent via-stone-400/[0.09] to-transparent filter blur-2xl animate-chamber-fog pointer-events-none" />

        {/* Layer 3: Counter-Drifting Cold Red Fog Stream */}
        <div className="absolute bottom-16 -right-[30%] w-[160%] h-72 bg-gradient-to-l from-transparent via-red-600/[0.07] to-transparent filter blur-3xl animate-chamber-fog-reverse pointer-events-none" />

        {/* Layer 4: Desk Lamp Amber Warmth Radiating through Mist */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-amber-500/[0.045] filter blur-[140px] pointer-events-none" />
      </div>

      {/* ── TOP & UPPER-MIDDLE CONTAINER (Shifted down cleanly below navbar) ── */}
      <div className="space-y-4 sm:space-y-5 relative z-10">
        {/* ── TOP SECTION: Detached Threat Banner & Radar Status (Scroll: 0.68 -> 0.74) ── */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 transition-all duration-300 max-w-5xl"
          style={{
            opacity: p1,
            transform: `translate3d(0, ${(1 - p1) * 12}px, 0)`,
            filter: p1 >= 0.95 ? "none" : `blur(${(1 - p1) * 4}px)`,
          }}
        >
          {/* Hazard Caution Tape Stamp */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-black/90 border border-[#D01820]/70 shadow-[0_0_20px_rgba(208,24,32,0.4)] backdrop-blur-md">
            <AlertTriangle className="w-4 h-4 text-[#D01820] animate-bounce" />
            <span className="font-danger-heading text-xs sm:text-sm text-red-500 tracking-widest font-black">
              LEVEL 4 ANOMALOUS CONTAINMENT BREACH
            </span>
            <span className="hidden sm:inline text-stone-500 font-mono">|</span>
            <span className="hidden sm:inline font-danger-mono text-xs text-stone-200">
              SECTOR 4 LOCKED FROM WITHIN
            </span>
          </div>

          {/* Eerie Blinking Radar Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-red-950/60 border border-[#D01820]/60 text-red-400 font-danger-mono text-xs backdrop-blur-sm shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D01820] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D01820]" />
            </span>
            <span className="tracking-widest uppercase font-bold text-red-300">SIGNAL LIVE: 03:17 AM</span>
          </div>
        </div>

        {/* ── UPPER-MIDDLE SECTION: Main Title + Separate Creepy Incident Dossier ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-6xl">
          {/* 1. SEPARATE BOX 1: Main Danger Title & Hackathon Identity (Scroll: 0.70 -> 0.76) */}
          <div
            className="lg:col-span-6 space-y-2.5 transition-all duration-300"
            style={{
              opacity: p2,
              transform: `translate3d(${(1 - p2) * -16}px, 0, 0)`,
              filter: p2 >= 0.95 ? "none" : `blur(${(1 - p2) * 4}px)`,
            }}
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-black/85 border border-white/20 font-danger-mono text-[11px] text-stone-300 shadow-md">
              <Crosshair className="w-3.5 h-3.5 text-[#D01820]" />
              <span className="text-white font-bold tracking-wider">DOSSIER // ARCH-BUILDX-001</span>
            </div>

            {/* Dripping BUILDX Logo Image */}
            <div className="space-y-1 select-none">
              <div className="relative max-w-[260px] sm:max-w-sm lg:max-w-md filter drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(208,24,32,0.4)]">
                <img
                  src={buildxLogoDanger}
                  alt="BUILDX"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                  loading="eager"
                />
              </div>

              <div className="font-danger-glitch text-xs sm:text-sm text-red-500 tracking-widest pt-0.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                A CODE-A-NOVA PARANORMAL INVESTIGATION • 2026
              </div>
            </div>

            <div className="font-danger-mono text-xs sm:text-sm text-stone-200 font-bold uppercase tracking-wider flex items-center gap-2 drop-shadow-md">
              <Radio className="w-3.5 h-3.5 text-[#D01820] animate-pulse" />
              <span>36 HOURS REMAIN BEFORE PERMANENT CONTAINMENT FAILURE</span>
            </div>
          </div>

          {/* 2. SEPARATE BOX 2: Pinned Evidence Log with Crisp Typewriter Font (Scroll: 0.72 -> 0.78) */}
          <div
            className="lg:col-span-6 transition-all duration-300"
            style={{
              opacity: p3,
              transform: `translate3d(${(1 - p3) * 16}px, 0, 0)`,
              filter: p3 >= 0.95 ? "none" : `blur(${(1 - p3) * 4}px)`,
            }}
          >
            <div className="relative bg-black/90 backdrop-blur-md border border-red-700/60 p-5 rounded-xs shadow-[0_12px_45px_rgba(0,0,0,0.95)] relative overflow-hidden group hover:border-[#D01820] transition-colors">
              {/* Top Red Caution Edge */}
              <div className="absolute top-0 left-0 right-0 h-1 danger-stripes" />

              {/* Holographic Classified Scanning Laser Sweep */}
              <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-red-500/[0.12] to-transparent pointer-events-none animate-classified-scan" />
              
              {/* Corner Crosshairs */}
              <div className="absolute top-2 left-2 text-[#D01820]/60 font-mono text-[10px]">+</div>
              <div className="absolute top-2 right-2 text-[#D01820]/60 font-mono text-[10px]">+</div>
              <div className="absolute bottom-2 left-2 text-[#D01820]/60 font-mono text-[10px]">+</div>
              <div className="absolute bottom-2 right-2 text-[#D01820]/60 font-mono text-[10px]">+</div>

              <div className="flex items-center justify-between border-b border-red-950/80 pb-2 mb-3">
                <div className="flex items-center gap-2 font-danger-heading text-xs text-red-400 font-bold">
                  <Skull className="w-3.5 h-3.5 text-red-500" />
                  <span className="tracking-widest">INCIDENT REPORT // CLASSIFIED</span>
                </div>
                <span className="font-danger-mono text-[10px] px-2 py-0.5 rounded-xs bg-red-950/80 text-red-300 border border-red-900/60 font-bold">
                  EYES ONLY
                </span>
              </div>

              {/* High-Contrast Crisp Horror Typewriter Story Text */}
              <p className="font-horror-dossier text-stone-100 text-xs sm:text-[13.5px] leading-relaxed tracking-wide font-medium drop-shadow-sm">
                "At <span className="text-red-400 font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.3)]">03:17 AM</span>, anomalous containment failed inside Sector 4. Visual sweeps confirm the entity has locked all deeper steel vaults from the inside. Your directive: deploy code, reconstruct the murder & anomaly board, and breach the vault before you are trapped in the darkness forever."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM SECTION: Detached Intel Badges + Standalone Action Button (Moved Niche / Bottom) ── */}
      <div className="mt-auto space-y-3.5 sm:space-y-4 max-w-6xl pt-4 sm:pt-6">
        {/* 3. SEPARATE CHIPS: Detached Dangerous Key Intel Chips (Scroll: 0.74 -> 0.80) */}
        <div
          className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 transition-all duration-300"
          style={{
            opacity: p4,
            transform: `translate3d(0, ${(1 - p4) * 12}px, 0)`,
            filter: p4 >= 0.95 ? "none" : `blur(${(1 - p4) * 4}px)`,
          }}
        >
          {/* Duration Card */}
          <div className="px-3.5 py-2 rounded-xs bg-black/90 border border-stone-700/80 backdrop-blur-sm flex items-center gap-2 shadow-2xl">
            <Clock className="w-3.5 h-3.5 text-[#D01820]" />
            <div>
              <div className="font-danger-mono text-[9px] text-stone-400 uppercase font-semibold">TIMELINE</div>
              <div className="font-danger-heading text-xs sm:text-sm text-white font-bold tracking-wider">
                36 HOURS VIRTUAL
              </div>
            </div>
          </div>

          {/* Bounty Card */}
          <div className="px-3.5 py-2 rounded-xs bg-black/90 border border-emerald-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl">
            <Trophy className="w-3.5 h-3.5 text-emerald-400" />
            <div>
              <div className="font-danger-mono text-[9px] text-stone-400 uppercase font-semibold">RECOVERY BOUNTY</div>
              <div className="font-danger-heading text-xs sm:text-sm text-emerald-300 font-bold tracking-wider">
                ₹50,000+ CASH
              </div>
            </div>
          </div>

          {/* Dates Card */}
          <div className="px-3.5 py-2 rounded-xs bg-black/90 border border-cyan-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <div>
              <div className="font-danger-mono text-[9px] text-stone-400 uppercase font-semibold">BREACH DATES</div>
              <div className="font-danger-heading text-xs sm:text-sm text-cyan-300 font-bold tracking-wider">
                OCT 24 - 26, 2026
              </div>
            </div>
          </div>

          {/* Free Entry Card */}
          <div className="px-3.5 py-2 rounded-xs bg-black/90 border border-amber-900/60 backdrop-blur-sm flex items-center gap-2 shadow-2xl">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <div>
              <div className="font-danger-mono text-[9px] text-stone-400 uppercase font-semibold">ACCESS CLEARANCE</div>
              <div className="font-danger-heading text-xs sm:text-sm text-amber-300 font-bold tracking-wider">
                FREE REGISTRATION
              </div>
            </div>
          </div>
        </div>

        {/* 4. SEPARATE BOX 3: Standalone High-Threat Action Bar (Scroll: 0.76 -> 0.82) */}
        <div
          className="flex flex-wrap items-center gap-3.5 transition-all duration-300 pt-1"
          style={{
            opacity: p5,
            transform: `translate3d(0, ${(1 - p5) * 12}px, 0)`,
            filter: p5 >= 0.95 ? "none" : `blur(${(1 - p5) * 4}px)`,
            pointerEvents: p5 > 0.3 ? "auto" : "none",
          }}
        >
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
            BREACH THE VAULT // REGISTER NOW
          </MagneticButton>

          <button
            type="button"
            onClick={() => {
              const h = document.documentElement.scrollHeight - window.innerHeight;
              window.scrollTo({ top: h, behavior: "smooth" });
            }}
            className="px-4 py-2.5 rounded-xs border border-red-900/70 hover:border-[#D01820] bg-black/90 backdrop-blur-md font-danger-heading text-xs text-stone-100 hover:text-white tracking-widest uppercase transition-all shadow-xl flex items-center gap-2"
          >
            <span>INSPECT CRIME BOARD EVIDENCE</span>
            <span className="text-[#D01820]">↓</span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default CinematicRoomDossier;
