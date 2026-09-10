import React from "react";
import { Trophy, Award, Gift, Sparkles } from "lucide-react";
import { rewardsConfig } from "../data/rewardsConfig";
import SectionHeading from "../components/SectionHeading";
import HorrorReveal from "../components/HorrorReveal";

/**
 * RewardsSection
 * SCENE 07 — THE REWARDS
 * Atmospheric prize containers & bounties (Sections 38 & 71).
 */
export default function RewardsSection({ data = rewardsConfig }) {
  const podium = data.podium || [];
  const bounties = data.categoryBounties || [];

  return (
    <section
      id="rewards"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="Hackathon Prizes and Rewards"
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

        {/* Total Prize Pool Banner */}
        <HorrorReveal delay={0.05}>
          <div className="mt-12 text-center p-6 sm:p-8 rounded-xs border border-white/10 bg-black/80 backdrop-blur-md max-w-2xl mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            <span className="font-mono text-xs text-stone-400 tracking-widest uppercase block mb-1">
              TOTAL DECLASSIFIED BOUNTY POOL
            </span>
            <span className="font-serif font-black text-4xl sm:text-6xl text-stone-100 tracking-tight text-glow">
              {data.totalPrizePool}
            </span>
          </div>
        </HorrorReveal>

        {/* 3 Podium Displays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-stretch">
          {podium.map((tier, idx) => (
            <HorrorReveal key={tier.place} delay={idx * 0.08}>
              <div
                className={`h-full p-6 sm:p-8 rounded-xs border flex flex-col justify-between transition-all duration-300 relative ${
                  tier.highlight
                    ? "border-[#D01820]/70 bg-black/85 shadow-[0_0_30px_rgba(208,24,32,0.15)] md:-translate-y-2"
                    : "border-white/10 bg-black/75 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs">
                    <span className="text-stone-500">TIER // {tier.place}</span>
                    {tier.highlight && (
                      <span className="text-[#D01820] flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        CHAMPION
                      </span>
                    )}
                  </div>

                  <h3 className="font-mono text-xs text-stone-400 uppercase tracking-widest mb-1">
                    {tier.tier}
                  </h3>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-stone-100 mb-4">
                    {tier.amount}
                  </div>
                  <p className="font-sans text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {tier.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2">
                  {tier.perks.map((perk) => (
                    <div
                      key={perk}
                      className="font-mono text-[11px] text-stone-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D01820]" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </HorrorReveal>
          ))}
        </div>

        {/* Category Bounties Grid */}
        {bounties.length > 0 && (
          <div className="mt-14 pt-10 border-t border-white/10">
            <h4 className="font-mono text-xs text-stone-400 tracking-widest uppercase text-center mb-6">
              SPECIAL INVESTIGATION TRACK BOUNTIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {bounties.map((b) => (
                <div
                  key={b.title}
                  className="p-4 rounded-xs border border-white/10 bg-black/70 backdrop-blur-xs text-center"
                >
                  <span className="font-mono text-xs text-[#D01820] block mb-1">
                    {b.amount}
                  </span>
                  <p className="font-mono text-xs font-bold text-stone-200 uppercase tracking-wider mb-0.5">
                    {b.title}
                  </p>
                  <span className="text-[10px] font-mono text-stone-500 uppercase">
                    SPONSORED BY {b.sponsor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
