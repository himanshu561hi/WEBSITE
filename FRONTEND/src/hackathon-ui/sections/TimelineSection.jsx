import React from "react";
import { timelineConfig } from "../data/timelineConfig";
import SectionHeading from "../components/SectionHeading";
import HorrorReveal from "../components/HorrorReveal";

/**
 * TimelineSection
 * SCENE 05 — THE 36-HOUR TIMELINE
 * Fully data-driven operational schedule (Sections 34, 35 & 71).
 */
export default function TimelineSection({ data = timelineConfig }) {
  const milestones = data.milestones || [];

  return (
    <section
      id="timeline"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="36-Hour Hackathon Timeline"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <HorrorReveal>
          <SectionHeading
            tag={data.tag}
            title={data.title}
            highlight=""
            subtitle={data.subtitle}
          />
        </HorrorReveal>

        {/* Corridor Milestone Path */}
        <div className="relative mt-16 pl-6 sm:pl-8 border-l border-white/15 space-y-12">
          {milestones.map((item, idx) => {
            const isCurrent = item.status === "CURRENT";
            const isCompleted = item.status === "COMPLETED";

            return (
              <HorrorReveal key={item.id} delay={idx * 0.05}>
                <div className="relative group">
                  {/* Milestone Pulse Pin on the border */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                      isCurrent
                        ? "bg-[#D01820] border-white shadow-[0_0_12px_#D01820] animate-pulse"
                        : isCompleted
                        ? "bg-stone-300 border-stone-500"
                        : "bg-black border-stone-600"
                    }`}
                  />

                  {/* Milestone Card */}
                  <div className="p-5 sm:p-6 rounded-xs border border-white/10 bg-black/75 backdrop-blur-md group-hover:border-[#D01820]/60 transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2 mb-3">
                      <div className="flex items-center gap-3 font-mono text-xs">
                        <span className="text-[#D01820] font-bold tracking-wider">
                          {item.hour}
                        </span>
                        <span className="text-stone-500 tracking-widest">{item.phase}</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs ${
                          isCurrent
                            ? "bg-[#D01820]/20 text-[#D01820] border border-[#D01820]/40"
                            : "bg-white/5 text-stone-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-mono text-lg font-bold text-stone-100 uppercase tracking-wide mb-1.5 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-stone-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
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
