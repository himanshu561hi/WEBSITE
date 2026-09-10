import React from "react";
import { sponsorConfig } from "../data/sponsorConfig";
import SectionHeading from "../components/SectionHeading";
import HorrorReveal from "../components/HorrorReveal";

/**
 * SponsorsSection
 * SCENE 08 — THE ALLIES
 * Dynamic ecosystem sponsors with fallback banner (Sections 40 & 71).
 */
export default function SponsorsSection({ data = sponsorConfig }) {
  const tiers = data.tiers || [];

  return (
    <section
      id="sponsors"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="Ecosystem Partners and Sponsors"
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

        {tiers.length > 0 ? (
          <div className="space-y-12 mt-14">
            {tiers.map((tier) => (
              <div key={tier.tierName} className="space-y-4">
                <h4 className="font-mono text-xs text-stone-500 tracking-widest uppercase text-center">
                  {tier.tierName}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {tier.sponsors.map((s) => (
                    <HorrorReveal key={s.name}>
                      <div className="p-6 rounded-xs border border-white/10 bg-black/75 backdrop-blur-md text-center hover:border-white/25 transition-all duration-200">
                        <span className="font-display font-black text-lg text-stone-100 tracking-wider block mb-1">
                          {s.logoText}
                        </span>
                        <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
                          {s.type}
                        </span>
                      </div>
                    </HorrorReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Fallback State (Section 40) */
          <div className="mt-14 p-8 rounded-xs border border-dashed border-white/15 bg-black/60 text-center font-mono">
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">
              {data.emptyState.message}
            </p>
            <p className="text-[11px] text-stone-600 tracking-wider">
              INQUIRIES: {data.emptyState.contactEmail}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
