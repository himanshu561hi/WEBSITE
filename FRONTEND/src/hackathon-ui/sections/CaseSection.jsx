import React from "react";
import { contentConfig } from "../data/contentConfig";
import SectionHeading from "../components/SectionHeading";
import HorrorReveal from "../components/HorrorReveal";

/**
 * CaseSection
 * SCENE 02 — THE CASE
 * 4 Floating Evidence Dossiers (Universal Eligibility, 36h Sprint, Blind Audit, Equipment).
 * Fully data-driven (Section 71).
 */
export default function CaseSection({ data = contentConfig.caseHighlights }) {
  return (
    <section
      id="case"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="The Case Highlights"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <HorrorReveal>
          <SectionHeading
            tag="01 // THE CASE"
            title="ANOMALOUS INCIDENT BRIEFING"
            highlight=""
            subtitle="Preliminary case parameters established for the 2026 National Investigation."
          />
        </HorrorReveal>

        {/* 4 Floating Evidence Dossiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {data.map((item, idx) => (
            <HorrorReveal key={item.caseNo} delay={idx * 0.08}>
              <div className="relative p-6 sm:p-8 rounded-xs border border-white/10 bg-black/75 backdrop-blur-md hover:border-[#D01820]/60 transition-all duration-300 group shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                {/* Case Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="text-[#D01820] tracking-widest">{item.caseNo}</span>
                  <span className="text-stone-500 uppercase tracking-wider">{item.subtitle}</span>
                </div>

                {/* Case Title */}
                <h3 className="font-mono text-lg sm:text-xl font-bold text-stone-100 tracking-wide uppercase mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Case Description */}
                <p className="font-sans text-stone-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Corner Forensic Marker */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-stone-600 opacity-60" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-stone-600 opacity-60" />
              </div>
            </HorrorReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
