import React from "react";
import { ArrowRight, FolderOpen, Radio } from "lucide-react";
import { contentConfig } from "../data/contentConfig";
import { hackathonConfig } from "../data/hackathonConfig";
import MagneticButton from "../components/MagneticButton";
import Countdown from "../components/Countdown";

/**
 * HeroSection
 * The World is the UI — Minimalist, high-impact HTML overlay.
 * All text consumes configuration data directly (Section 28 & 71).
 */
export default function HeroSection({ data = contentConfig.hero }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="BUILDX Investigation Arrival"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-start text-left space-y-6">
        {/* Eyebrow Classification */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs bg-black/60 backdrop-blur-xs border border-white/10 font-mono text-xs text-stone-400 tracking-widest uppercase select-none">
          <span className="w-2 h-2 rounded-full bg-[#D01820] animate-pulse" />
          <span className="text-stone-300">{data.eyebrow}</span>
        </div>

        {/* Main Wordmark: BUILDX */}
        <h1 className="font-serif font-black text-6xl sm:text-8xl lg:text-9xl tracking-tight text-stone-100 leading-[0.9] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] select-none">
          {data.title}<span className="text-[#D01820] font-sans">{data.accent}</span>
        </h1>

        {/* Core Statement */}
        <div className="font-mono text-base sm:text-xl lg:text-2xl font-bold text-stone-200 tracking-wider uppercase space-y-1 drop-shadow-md">
          <p>{data.taglinePrimary}</p>
          <p className="text-stone-400">{data.taglineSecondary}</p>
        </div>

        {/* Narrative Description */}
        <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed max-w-lg drop-shadow-sm">
          {data.description}
        </p>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <MagneticButton
            href="#case"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {data.primaryCta}
          </MagneticButton>

          <MagneticButton
            href="#evidence"
            variant="secondary"
            size="lg"
            icon={<FolderOpen className="w-4 h-4" />}
          >
            {data.secondaryCta}
          </MagneticButton>
        </div>

        {/* Countdown Timer */}
        <div className="w-full max-w-lg pt-4">
          <Countdown targetDate={hackathonConfig.dates.start} />
        </div>

        {/* Status Metadata */}
        <div className="pt-2 flex items-center gap-4 text-[11px] font-mono text-stone-500 tracking-widest select-none">
          <span>STATUS // ACTIVE</span>
          <span>&bull;</span>
          <span>DURATION // 36 HOURS</span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5 text-stone-400">
            <Radio className="w-3 h-3 text-[#22c55e]" />
            SIGNAL // DETECTED
          </span>
        </div>
      </div>
    </section>
  );
}
