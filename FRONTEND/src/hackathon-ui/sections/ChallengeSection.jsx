import React from "react";
import {
  BrainCircuit,
  Globe2,
  Coins,
  Activity,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { hackathonConfig } from "../data/hackathonConfig";
import SectionHeading from "../components/SectionHeading";

// Icon mapping helper
const iconMap = {
  BrainCircuit: BrainCircuit,
  Globe2: Globe2,
  Coins: Coins,
  Activity: Activity,
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
};

/**
 * ChallengeSection
 * Showcases the 6 core problem categories with cybernetic cards.
 */
export default function ChallengeSection() {
  return (
    <section id="challenges" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#06060c]">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          tag="MISSION VECTORS"
          title="THE OTHER SIDE"
          highlight="AWAITS"
          subtitle="Select your technical domain and craft a solution that breaks through reality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {hackathonConfig.challenges.map((challenge) => {
            const IconComponent = iconMap[challenge.iconName] || Sparkles;

            return (
              <div
                key={challenge.id}
                className="cyber-card group p-6 sm:p-7 rounded-sm flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Corner Cyber Accent */}
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#ff1a40] opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-sm bg-[#120f22] border border-white/10 group-hover:border-[#ff1a40] flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(0,0,0,0.6)]">
                      <IconComponent className="w-6 h-6 text-[#ff1a40] group-hover:text-[#00f0ff] transition-colors" />
                    </div>
                    <span className="font-mono-tech text-xs text-slate-400 group-hover:text-white font-bold transition-colors">
                      TRACK // {challenge.number}
                    </span>
                  </div>

                  {/* Tag */}
                  <div className="mt-5 inline-block font-mono-tech text-[10px] text-[#00f0ff] uppercase tracking-widest font-bold">
                    [{challenge.tag}]
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white mt-1 group-hover:text-slate-100 transition-colors">
                    {challenge.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans-body text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                {/* Bottom Tags / Potential Areas */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {challenge.potentialIdeas.map((idea) => (
                      <span
                        key={idea}
                        className="text-[10px] font-mono-tech px-2 py-0.5 rounded-sm bg-white/[0.03] text-slate-400 border border-white/5"
                      >
                        {idea}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#registration"
                    className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[#ff1a40] group-hover:text-[#00f0ff] font-bold transition-colors"
                  >
                    <span>SELECT DOMAIN</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
