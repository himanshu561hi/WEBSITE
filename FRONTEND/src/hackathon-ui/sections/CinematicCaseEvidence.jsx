import React, { memo } from "react";
import { ArrowRight, ShieldAlert, Terminal, Lock, Clock, Trophy, Users } from "lucide-react";
import { narrativeConfig } from "../config/narrativeConfig";
import { tracksConfig } from "../data/tracksConfig";
import { timelineConfig } from "../data/timelineConfig";
import { judgeConfig } from "../data/judgeConfig";
import { rewardsConfig } from "../data/rewardsConfig";
import Countdown from "../components/Countdown";
import MagneticButton from "../components/MagneticButton";

/**
 * CinematicCaseEvidence
 * The hackathon details emerging organically from the investigation story once inside the gate.
 * Formatted as classified terminal dossiers, breach timers, anomaly tracks, and case registration.
 */
const CinematicCaseEvidence = memo(function CinematicCaseEvidence({
  isVisible = true,
}) {
  const { anomalies, briefing, hackathonDetails, status } = narrativeConfig;

  return (
    <div
      id="case-evidence"
      className={`relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      {/* 1. Terminal Header Dossier */}
      <div className="border border-stone-800 bg-black/80 backdrop-blur-md p-6 sm:p-8 rounded-xs mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D01820] to-transparent" />
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#D01820]">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span className="tracking-widest uppercase">{narrativeConfig.caseId}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs bg-[#D01820]/10 border border-[#D01820]/40 text-[#D01820]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D01820] animate-ping" />
            <span>{status.badge}</span>
          </div>
        </div>

        {/* Breach Countdown & Core Title */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-stone-100 uppercase leading-none">
              BUILDX <span className="text-[#D01820]">2026</span>
            </h2>
            <p className="font-mono text-lg sm:text-xl text-stone-300 tracking-wider uppercase font-bold">
              {hackathonDetails.durationNarrative}
            </p>
            <p className="font-sans text-stone-400 text-sm leading-relaxed max-w-xl">
              {briefing.detail}
            </p>
          </div>

          {/* 36-Hour Lockdown Timer */}
          <div className="bg-stone-950/80 border border-stone-800 p-5 rounded-xs space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-stone-400 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#D01820]" />
              <span>CONTAINMENT COUNTDOWN</span>
            </div>
            <Countdown targetDate="2026-10-24T09:00:00Z" />
            <div className="pt-2 font-mono text-[11px] text-stone-500 uppercase text-center">
              {hackathonDetails.dates} • {hackathonDetails.format}
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
          <MagneticButton
            href="#register-modal"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => {
              // Smooth dispatch or register trigger
              const regBtn = document.querySelector('[data-register-trigger]');
              if (regBtn) regBtn.click();
            }}
          >
            ENTER THE CASE // REGISTER NOW
          </MagneticButton>

          <a
            href="#dossiers"
            className="px-5 py-3 rounded-xs border border-white/10 hover:border-stone-400 font-mono text-xs text-stone-300 tracking-wider uppercase transition-colors"
          >
            REVIEW ANOMALY DOSSIERS
          </a>
        </div>
      </div>

      {/* 2. Anomalies / Tracks Grid */}
      <div id="dossiers" className="mb-14">
        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#D01820] tracking-widest uppercase">
          <ShieldAlert className="w-4 h-4" />
          <span>ACTIVE SECTOR ANOMALIES // TRACKS</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 uppercase tracking-tight mb-8">
          SELECT YOUR INVESTIGATION VECTOR
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {anomalies.map((anom) => (
            <div
              key={anom.id}
              className="group relative bg-black/75 border border-stone-800 hover:border-[#D01820]/70 p-6 rounded-xs transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3 font-mono text-xs">
                <span className="text-[#D01820] font-bold">{anom.code}</span>
                <span className="px-2 py-0.5 bg-stone-900 text-stone-400 rounded-xs border border-stone-800">
                  {anom.risk}
                </span>
              </div>
              <h4 className="font-mono text-lg font-bold text-stone-200 group-hover:text-white uppercase mb-2">
                {anom.title}
              </h4>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-4">
                {anom.description}
              </p>
              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between font-mono text-xs">
                <span className="text-stone-500">BOUNTY ALLOCATION:</span>
                <span className="text-emerald-400 font-bold">{anom.bounty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Investigation Protocol Timeline */}
      <div className="border border-stone-800 bg-black/70 p-6 sm:p-8 rounded-xs mb-14">
        <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#D01820] tracking-widest uppercase">
          <Clock className="w-4 h-4" />
          <span>36-HOUR RUN PROTOCOL</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-stone-100 uppercase tracking-tight mb-6">
          INCIDENT TIMELINE
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {narrativeConfig.investigationTimeline.map((item, idx) => (
            <div key={idx} className="p-4 bg-stone-950/90 border border-stone-800/80 rounded-xs space-y-1.5">
              <span className="font-mono text-xs text-[#D01820] font-bold">{item.time}</span>
              <h5 className="font-mono text-sm font-bold text-stone-200 uppercase">{item.title}</h5>
              <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Council of Investigators (Judges & Adjudicators) */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#D01820] tracking-widest uppercase">
          <Users className="w-4 h-4" />
          <span>INVESTIGATION COUNCIL</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 uppercase tracking-tight mb-6">
          SENIOR ADJUDICATORS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {judgeConfig.judges.slice(0, 3).map((judge) => (
            <div
              key={judge.id}
              className="bg-black/75 border border-stone-800 p-5 rounded-xs flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-stone-900 border border-[#D01820]/40 flex items-center justify-center font-mono font-bold text-sm text-stone-300">
                {judge.name.charAt(0)}
              </div>
              <div className="font-mono text-xs">
                <div className="font-bold text-stone-200 uppercase text-sm">{judge.name}</div>
                <div className="text-stone-400">{judge.role}</div>
                <div className="text-[#D01820] text-[11px]">{judge.organization}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Final Containment Call to Action */}
      <div className="text-center py-12 px-6 border border-[#D01820]/40 bg-gradient-to-b from-black to-[#D01820]/10 rounded-xs space-y-4">
        <div className="font-mono text-xs text-[#D01820] tracking-widest uppercase">
          [ FINAL PROTOCOL DIRECTIVE ]
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl font-black text-stone-100 uppercase tracking-tight">
          WILL YOU ENTER THE BREACH?
        </h3>
        <p className="font-sans text-stone-300 text-sm max-w-lg mx-auto leading-relaxed">
          The signal is active. 36 hours. National competitors. Top industry mentors and bounties.
        </p>
        <div className="pt-2">
          <MagneticButton
            href="#register-modal"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            ENTER THE CASE NOW
          </MagneticButton>
        </div>
      </div>
    </div>
  );
});

export default CinematicCaseEvidence;
