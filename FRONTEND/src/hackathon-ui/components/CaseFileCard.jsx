import React from "react";
import StatusBadge from "./StatusBadge";

/**
 * CaseFileCard
 * Styled like a classified dossier manila document card with corner accents and stamp.
 */
export default function CaseFileCard({
  caseNo = "CASE // 01",
  title = "",
  subtitle = "",
  description = "",
  stamp = "VERIFIED",
  className = "",
}) {
  return (
    <div className={`case-card p-6 sm:p-7 rounded-xs flex flex-col justify-between group ${className}`}>
      {/* Top Tape Accent & Case Header */}
      <div>
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <span className="font-mono-tech text-xs text-[#D01820] font-bold tracking-widest">
            {caseNo}
          </span>
          <StatusBadge text={stamp} variant="red" />
        </div>

        {/* Subtitle / Document Classification */}
        <div className="font-mono-tech text-[11px] text-slate-400 uppercase tracking-wider mb-1">
          // {subtitle}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-slate-100 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans-body text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer Fingerprint / Timestamp Marker */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
        <span>SECURITY LEVEL: AUTHORIZED</span>
        <span className="text-[#D01820]">BUILDX.DOSSIER</span>
      </div>
    </div>
  );
}
