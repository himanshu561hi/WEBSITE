import React from "react";
import { FileText, ShieldAlert } from "lucide-react";

/**
 * CaseFile
 * Classified dossier document component with weathered edges, red stamp, and technical metadata.
 */
export default function CaseFile({
  caseNo = "CASE // 001",
  status = "CLASSIFIED",
  title = "",
  highlight = "",
  description = "",
  footerMetadata = "DEPT. OF FORENSIC COMPUTATION",
  className = "",
}) {
  return (
    <div
      className={`group relative bg-[#0c0c0c] border border-stone-800/90 hover:border-[#B3131B]/70 p-6 sm:p-7 rounded-xs transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden ${className}`}
    >
      {/* Top Red Investigation Yarn / Stitch accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D01820]/60 to-transparent group-hover:via-[#D01820] transition-colors" />

      {/* Red Corner Pin */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#B3131B]/60 group-hover:bg-[#D01820] shadow-[0_0_8px_#D01820] transition-colors" />

      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-2 border-b border-stone-800/60 pb-3 mb-4 font-mono text-[10px] text-stone-500">
          <span className="tracking-widest text-[#D01820] flex items-center gap-1.5">
            <FileText className="w-3 h-3 text-[#D01820]" />
            {caseNo}
          </span>
          <span className="px-1.5 py-0.5 rounded-2xs bg-stone-900 border border-stone-700 text-stone-400">
            [{status}]
          </span>
        </div>

        {/* Title */}
        <h3 className="font-mono text-base sm:text-lg font-bold text-stone-100 tracking-wider mb-1 group-hover:text-white transition-colors">
          {title}
        </h3>

        {highlight && (
          <p className="font-mono text-xs text-[#D01820] tracking-widest uppercase mb-3 font-semibold">
            {highlight}
          </p>
        )}

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-stone-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer / Confidential Stamp */}
      <div className="mt-6 pt-3 border-t border-stone-800/50 flex items-center justify-between font-mono text-[10px] text-stone-600 group-hover:text-stone-400 transition-colors">
        <span>{footerMetadata}</span>
        <span className="text-[#D01820] group-hover:underline">VIEW &rarr;</span>
      </div>
    </div>
  );
}
