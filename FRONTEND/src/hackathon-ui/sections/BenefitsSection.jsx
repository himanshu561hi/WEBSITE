import React from "react";
import {
  Target,
  Globe2,
  Cpu,
  FileCheck2,
  Award,
  Briefcase,
  Search,
} from "lucide-react";
import { contentConfig } from "../data/contentConfig";
import SectionHeading from "../components/SectionHeading";
import HorrorReveal from "../components/HorrorReveal";

const BENEFIT_ICONS = [
  Target,
  Globe2,
  Cpu,
  FileCheck2,
  Award,
  Briefcase,
];

/**
 * BenefitsSection
 * "WHY JOIN THE INVESTIGATION?"
 * 6 minimal line-icon cards floating over the 3D space.
 * Fully data-driven (Section 71).
 */
export default function BenefitsSection({ data = contentConfig.benefits }) {
  const items = Array.isArray(data?.items)
    ? data.items
    : Array.isArray(data)
    ? data
    : Array.isArray(contentConfig?.benefits?.items)
    ? contentConfig.benefits.items
    : [];

  return (
    <section
      id="benefits"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="Benefits of joining BUILDX"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <HorrorReveal>
          <SectionHeading
            tag={data?.tag || "07 // INVESTIGATOR VALUE"}
            title={data?.title || "WHY JOIN THE INVESTIGATION?"}
            highlight=""
            subtitle={data?.subtitle || "Direct technical and career capital gained by tackling high-stakes national anomalies."}
          />
        </HorrorReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {items.map((benefit, idx) => {
            const IconComponent = BENEFIT_ICONS[idx % BENEFIT_ICONS.length] || Search;
            const indexStr = String(idx + 1).padStart(2, "0");

            return (
              <HorrorReveal key={benefit.title} delay={idx * 0.06}>
                <div className="group relative bg-black/75 backdrop-blur-xs border border-white/10 hover:border-[#D01820]/60 p-6 rounded-xs transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#D01820]/70" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-2xs bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 group-hover:text-[#D01820] transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs text-stone-500">
                        {indexStr}
                      </span>
                    </div>

                    <h3 className="font-mono text-sm font-bold text-stone-100 uppercase tracking-wide mb-1 group-hover:text-white transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-xs text-stone-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#D01820] tracking-widest uppercase">
                    {benefit.subtitle || "BENEFIT VERIFIED"}
                  </div>
                </div>
              </HorrorReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
