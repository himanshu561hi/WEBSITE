import React from "react";
import { Terminal, Cpu, Network, Flame, CheckCircle2 } from "lucide-react";
import { hackathonConfig } from "../data/hackathonConfig";
import SectionHeading from "../components/SectionHeading";

/**
 * AboutSection
 * Introduces the lore, mission, and scope of "Code From The Other Side".
 */
export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#06060c]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#ff1a40]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#00f0ff]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          tag="TRANSMISSION // 01"
          title="WELCOME TO"
          highlight="THE OTHER SIDE"
          subtitle="Beyond standard hackathons lies an uncharted dimension of engineering challenge."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-[#ff1a40] pl-4 sm:pl-6 py-1">
              <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white leading-relaxed">
                {hackathonConfig.branding.description}
              </p>
            </div>

            <p className="text-slate-400 font-sans-body text-base leading-relaxed">
              When standard conventions no longer suffice, builders must look across the threshold. 
              <strong> Code From The Other Side</strong> is not merely a competition—it is a 36-hour crucible designed to test the limits of architectural ingenuity, rapid execution, and technical fortitude.
            </p>

            <p className="text-slate-400 font-sans-body text-base leading-relaxed">
              Whether you specialize in generative neural agents, high-throughput distributed backends, or immersive digital interfaces, your code will be appraised by seasoned technology leaders under double-blind rubric standards.
            </p>

            {/* Core Invariants / Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {["36 HOURS", "ONLINE", "NATIONAL LEVEL", "BUILD. SHIP. SOLVE."].map((badge, idx) => (
                <div
                  key={badge}
                  className="p-3 rounded-sm bg-[#0d0c18] border border-white/10 flex flex-col items-center justify-center text-center group hover:border-[#ff1a40] transition-colors"
                >
                  <span className="font-mono-tech text-[10px] text-[#ff1a40] font-bold">
                    TAG // 0{idx + 1}
                  </span>
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-200 mt-1">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Cinematic Terminal Console Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm bg-[#090812] border border-white/15 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] glow-portal-border">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff1a40]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff]" />
                </div>
                <span className="font-mono-tech text-[11px] text-slate-400">
                  OTHER_SIDE_GATEWAY.SYS
                </span>
              </div>

              {/* Terminal Body Details */}
              <div className="space-y-4 font-mono-tech text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <Terminal className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400">HOST:</span> CODE-A-NOVA NATIONAL TERMINAL
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-300">
                  <Cpu className="w-4 h-4 text-[#ff1a40] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400">EXECUTION:</span> 36-HOUR CONTINUOUS RUN
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-300">
                  <Network className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400">CONNECTIVITY:</span> DISTRIBUTED NATIONWIDE
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-300">
                  <Flame className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400">STAKES:</span> NATIONAL GLORY & RECOGNITION
                  </div>
                </div>

                {/* Simulated Diagnostic Telemetry */}
                <div className="mt-4 p-3 bg-black/50 border border-white/5 rounded text-[11px] text-slate-400 space-y-1">
                  <div className="text-[#00f0ff] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>PORTAL FREQUENCY: STABLE (440.0 Hz)</span>
                  </div>
                  <div className="text-slate-400">DIMENSIONAL DRIFT: 0.002%</div>
                  <div className="text-slate-400">CLEARANCE: LEVEL 4 INVITATIONAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {hackathonConfig.stats.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-sm bg-[#090812]/80 border border-white/10 hover:border-[#00f0ff]/40 transition-colors"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-white">
                {item.value}
              </div>
              <div className="font-mono-tech text-xs text-[#ff1a40] font-bold mt-1">
                {item.label}
              </div>
              <div className="font-sans-body text-xs text-slate-400 mt-0.5">
                {item.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
