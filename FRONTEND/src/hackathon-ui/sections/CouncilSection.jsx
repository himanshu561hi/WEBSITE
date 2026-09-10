import React from "react";
import { Scale, CheckCircle2, ShieldAlert } from "lucide-react";
import { judgeConfig } from "../data/judgeConfig";
import SectionHeading from "../components/SectionHeading";
import HorrorReveal from "../components/HorrorReveal";

/**
 * CouncilSection
 * SCENE 06 — THE COUNCIL
 * Double-blind forensic evaluation rubrics (Sections 36, 37 & 71).
 */
export default function CouncilSection({ data = judgeConfig }) {
  const criteria = data.criteria || [];
  const judges = data.judges || [];

  return (
    <section
      id="council"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="Judging Council & Evaluation Rubrics"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <HorrorReveal>
          <SectionHeading
            tag={data.tag}
            title={data.title}
            highlight=""
            subtitle={data.subtitle}
          />
        </HorrorReveal>

        {/* 5 Core Double-Blind Evaluation Rubrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {criteria.map((item, idx) => (
            <HorrorReveal key={item.rubric} delay={idx * 0.05}>
              <div className="p-6 rounded-xs border border-white/10 bg-black/75 backdrop-blur-md hover:border-[#D01820]/60 transition-all duration-200 group">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs">
                  <span className="text-stone-500">RUBRIC // 0{idx + 1}</span>
                  <span className="text-[#D01820] font-bold text-sm">{item.weight}</span>
                </div>

                <h3 className="font-mono text-base font-bold text-stone-100 uppercase tracking-wide mb-2 group-hover:text-white transition-colors">
                  {item.rubric}
                </h3>
                <p className="font-sans text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </HorrorReveal>
          ))}
        </div>

        {/* Council Judges Section or Confirmed Placeholder (Section 37) */}
        <div className="mt-14 p-6 sm:p-8 rounded-xs border border-dashed border-white/15 bg-black/60 backdrop-blur-xs text-center font-mono">
          <div className="flex items-center justify-center gap-2 text-xs text-stone-400 uppercase tracking-widest mb-2">
            <Scale className="w-4 h-4 text-[#D01820]" />
            <span>CONFIDENTIAL INVESTIGATOR ROSTER</span>
          </div>
          <p className="text-xs text-stone-500 tracking-wider">
            {data.judgesPendingText}
          </p>
        </div>
      </div>
    </section>
  );
}
