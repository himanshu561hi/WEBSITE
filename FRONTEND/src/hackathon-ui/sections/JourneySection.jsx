import React from "react";
import { hackathonConfig } from "../data/hackathonConfig";
import SectionHeading from "../components/SectionHeading";

/**
 * JourneySection ("THE CROSSING")
 * Cinematic 6-stage roadmap.
 * Displays as a horizontal timeline on desktop and a vertical timeline on mobile.
 */
export default function JourneySection() {
  return (
    <section id="journey" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#05050a]">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          tag="EXPEDITION PROTOCOL"
          title="THE"
          highlight="CROSSING"
          subtitle="Six calibrated stages from portal breach to ultimate survival."
        />

        {/* ── Desktop Horizontal Timeline (Visible on lg+) ── */}
        <div className="hidden lg:block relative mt-16">
          {/* Glowing Connecting Fiber Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff1a40] via-[#8b5cf6] to-[#00f0ff] -translate-y-1/2 opacity-40 z-0" />

          <div className="grid grid-cols-6 gap-3 relative z-10">
            {hackathonConfig.journey.map((stage, idx) => (
              <div
                key={stage.step}
                className="group flex flex-col items-center text-center"
              >
                {/* Top Step Pill */}
                <div className="mb-4">
                  <span className="font-mono-tech text-[10px] text-slate-400 group-hover:text-[#ff1a40] transition-colors">
                    STAGE {stage.step}
                  </span>
                </div>

                {/* Center Node / Gateway Marker */}
                <div className="w-10 h-10 rounded-sm bg-[#0a0914] border border-white/20 group-hover:border-[#ff1a40] flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,26,64,0.4)]">
                  <span className="font-mono-tech font-bold text-xs text-white group-hover:text-[#ff1a40]">
                    {stage.step}
                  </span>
                </div>

                {/* Bottom Card */}
                <div className="mt-6 p-4 rounded-sm bg-[#0a0914]/90 border border-white/10 group-hover:border-[#ff1a40]/50 transition-all duration-300 w-full min-h-[190px] flex flex-col justify-between text-left">
                  <div>
                    <div className="font-mono-tech text-[10px] text-[#00f0ff] uppercase tracking-wider font-bold">
                      {stage.code}
                    </div>
                    <div className="font-display font-bold text-sm text-white mt-1 group-hover:text-slate-100">
                      {stage.title}
                    </div>
                    <p className="font-sans-body text-xs text-slate-400 mt-2 line-clamp-4 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono-tech text-slate-400">
                    <span>{stage.subtitle}</span>
                    <span className={stage.status === "ACTIVE" ? "text-emerald-400 font-bold" : "text-slate-400"}>
                      [{stage.status}]
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile Vertical Timeline (Visible on sm & md) ── */}
        <div className="lg:hidden relative mt-12 pl-6 sm:pl-8 border-l-2 border-white/15 space-y-8">
          {hackathonConfig.journey.map((stage) => (
            <div key={stage.step} className="relative group">
              {/* Node Marker on Left Border */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-sm bg-[#0c0a18] border border-[#ff1a40] flex items-center justify-center shadow-[0_0_10px_rgba(255,26,64,0.4)]">
                <span className="font-mono-tech text-[10px] font-bold text-white">
                  {stage.step}
                </span>
              </div>

              {/* Card */}
              <div className="p-5 rounded-sm bg-[#0a0914] border border-white/10 hover:border-[#ff1a40]/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-xs text-[#00f0ff] uppercase font-bold">
                    STAGE {stage.step} // {stage.code}
                  </span>
                  <span className="font-mono-tech text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-sm border border-emerald-500/20">
                    {stage.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-white mt-2">
                  {stage.title}
                </h3>
                <p className="font-mono-tech text-xs text-[#ff1a40] mt-0.5">
                  {stage.subtitle}
                </p>

                <p className="font-sans-body text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
