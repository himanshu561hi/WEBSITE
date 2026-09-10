import React, { useState } from "react";
import {
  FileSearch,
  Cpu,
  Compass,
  FileCheck,
  Award,
  Radio,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import HorrorReveal from "../components/HorrorReveal";

const INVESTIGATION_STAGES = [
  {
    step: "01",
    label: "REGISTER",
    sub: "UNKNOWN SIGNAL DETECTED",
    desc: "Keynote transmission begins. Problem parameters and repositories are officially unsealed.",
    icon: Radio,
    time: "HOUR 00:00",
  },
  {
    step: "02",
    label: "FORM TEAM",
    sub: "SQUAD ASSEMBLY",
    desc: "Recruit 1 to 4 specialized builders (frontend, backend, intelligence, design).",
    icon: FileSearch,
    time: "HOUR 06:00",
  },
  {
    step: "03",
    label: "CHOOSE TRACK",
    sub: "CASE BRIEFING",
    desc: "Select an anomalous problem track and formulate your architectural hypothesis.",
    icon: Compass,
    time: "HOUR 12:00",
  },
  {
    step: "04",
    label: "BUILD",
    sub: "THE 36-HOUR SPRINT",
    desc: "Construct, test, and deploy functional prototypes from an empty repository.",
    icon: Cpu,
    time: "HOUR 24:00",
  },
  {
    step: "05",
    label: "SUBMIT",
    sub: "EVIDENCE LOCKED",
    desc: "Public repositories frozen. Live deployed URLs and video walkthrough dossiers sealed.",
    icon: FileCheck,
    time: "HOUR 30:00",
  },
  {
    step: "06",
    label: "VERDICT",
    sub: "COUNCIL EVALUATION",
    desc: "Forensic double-blind audit by engineering leaders, score tallying, and national winners crowned.",
    icon: Award,
    time: "HOUR 36:00",
  },
];

/**
 * InvestigationSection
 * SCENE 07 — INVESTIGATION BOARD
 * Central investigation board overlay aligned with the 3D wall board and red strings.
 */
export default function InvestigationSection() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section
      id="investigation"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="The Investigation Process"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <HorrorReveal>
          <SectionHeading
            tag="03 // INVESTIGATION BOARD"
            title="CASE // BUILDX"
            highlight=""
            subtitle="HOW THE INVESTIGATION UNFOLDS — From the initial unknown signal to the sealed evidence submission and final verdict."
          />
        </HorrorReveal>

        {/* Connected Investigation Process Stages */}
        <div className="relative mt-16">
          {/* Connecting Red Evidence Thread (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-[#D01820]/60 -translate-y-1/2 z-0 shadow-[0_0_10px_#D01820]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
            {INVESTIGATION_STAGES.map((node, idx) => {
              const isHovered = activeStep === idx;
              const IconComp = node.icon;

              return (
                <div
                  key={node.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`group relative bg-black/80 backdrop-blur-xs border p-5 rounded-xs transition-all duration-300 flex flex-col justify-between ${
                    isHovered
                      ? "border-[#D01820] shadow-[0_0_25px_rgba(208,24,32,0.4)] -translate-y-2 bg-black/90"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Push Pin Node */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D01820] shadow-[0_0_8px_#D01820]" />
                    <span className="font-mono text-[9px] text-stone-400 tracking-wider">
                      {node.time}
                    </span>
                  </div>

                  <div className="mb-2">
                    <div className="w-8 h-8 rounded-2xs bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 group-hover:text-[#D01820] transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] text-[#D01820] font-bold tracking-widest block mb-0.5">
                      PHASE {node.step}
                    </span>
                    <h4 className="font-mono text-xs font-bold text-stone-100 tracking-wider">
                      {node.label}
                    </h4>
                    <p className="font-sans text-[11px] text-stone-400 leading-relaxed mt-1.5">
                      {node.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/5 font-mono text-[9px] text-stone-500 flex items-center justify-between">
                    <span>STAGE LOCKED</span>
                    <CheckCircle2 className="w-3 h-3 text-[#D01820]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
