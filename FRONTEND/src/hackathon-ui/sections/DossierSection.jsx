import React from "react";
import { FileText, ShieldAlert } from "lucide-react";
import { hackathonConfig } from "../data/hackathonConfig";
import SectionHeading from "../components/SectionHeading";
import StatusBadge from "../components/StatusBadge";

/**
 * DossierSection ("THE DOSSIER")
 * Official rules and investigation guidelines presented as classified documents.
 */
export default function DossierSection() {
  return (
    <section id="rules" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#080808]">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          tag="CODIFIED PROTOCOL"
          title="THE"
          highlight="DOSSIER"
          subtitle="EVERY INVESTIGATION HAS RULES. STRICT ADHERENCE IS MANDATED."
        />

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {hackathonConfig.dossierRules.map((rule) => (
            <div
              key={rule.title}
              className="case-card p-6 sm:p-7 rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#D01820]" />
                    <span className="font-mono-tech text-xs text-white font-bold tracking-wider">
                      {rule.title}
                    </span>
                  </div>
                  <StatusBadge text={rule.documentStatus} variant="red" />
                </div>

                <p className="font-sans-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {rule.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
                <span className="flex items-center gap-1 text-slate-400">
                  <ShieldAlert className="w-3 h-3 text-[#D01820]" />
                  DOCUMENT CODE: BXR-{rule.title.slice(0, 3)}
                </span>
                <span className="text-[#D01820] font-bold">MANDATORY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
