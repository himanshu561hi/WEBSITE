import React from "react";
import { ArrowRight, KeyRound } from "lucide-react";
import { contentConfig } from "../data/contentConfig";
import { hackathonConfig } from "../data/hackathonConfig";
import MagneticButton from "../components/MagneticButton";
import HorrorReveal from "../components/HorrorReveal";

/**
 * FinalCTA
 * SCENE 11 — THE FINAL DOOR
 * Long dark corridor terminus. At the end, ONE DOOR slightly open with warm light.
 * On hover: door light increases slightly (Sections 42 & 43 & 71).
 */
export default function FinalCTA({
  data = contentConfig.finalCta,
  onHoverChange = () => {},
}) {
  return (
    <section
      id="registration"
      className="relative min-h-[90vh] flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8 bg-transparent text-center"
      aria-label="Final Registration Threshold"
    >
      <div className="max-w-3xl mx-auto relative z-10 space-y-8">
        {/* Mysterious Eyebrow */}
        <HorrorReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-black/70 backdrop-blur-xs border border-white/10 font-mono text-xs text-stone-400 tracking-widest uppercase">
            <KeyRound className="w-3.5 h-3.5 text-[#D01820]" />
            <span>{data.tag}</span>
          </div>
        </HorrorReveal>

        {/* Narrative Pause & Statement (Section 42) */}
        <HorrorReveal delay={0.1}>
          <div className="space-y-3 font-serif font-black text-4xl sm:text-6xl md:text-7xl text-stone-100 tracking-tight leading-[1.05]">
            <h2>{data.statement1}</h2>
            <h2 className="text-[#D01820] text-glow">{data.statement2}</h2>
          </div>
        </HorrorReveal>

        {/* Narrative Description */}
        <HorrorReveal delay={0.2}>
          <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            {data.description}
          </p>
        </HorrorReveal>

        {/* Cinematic Final Button with Doorway Light Intensification */}
        <HorrorReveal delay={0.3}>
          <div
            className="pt-4 flex justify-center"
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
          >
            <MagneticButton
              href={hackathonConfig.registration.targetUrl}
              variant="primary"
              size="lg"
              className="text-base px-10 py-5 tracking-widest uppercase font-mono shadow-[0_0_35px_rgba(208,24,32,0.4)]"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {data.buttonText}
            </MagneticButton>
          </div>
        </HorrorReveal>

        {/* Operational System Clearance */}
        <HorrorReveal delay={0.4}>
          <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest pt-6">
            SECURE ENCRYPTED REGISTRATION • NATIONAL LEVEL CERTIFICATION
          </p>
        </HorrorReveal>
      </div>
    </section>
  );
}
