import React from "react";
import { ArrowRight, Radio, Tag } from "lucide-react";

/**
 * EvidenceCard
 * Discovered evidence card for hackathon challenge tracks.
 * Features:
 * - Evidence number header (EVIDENCE // 01)
 * - Status: UNDER INVESTIGATION
 * - Focus areas and technical signal metadata
 * - Subtle hover elevation and red marker line
 */
export default function EvidenceCard({
  track,
  onSelect,
  className = "",
}) {
  return (
    <div
      className={`group relative bg-[#0d0d0d] border border-stone-800 hover:border-[#B3131B]/70 p-6 sm:p-7 rounded-xs transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-[0_4px_24px_rgba(0,0,0,0.6)] ${className}`}
      onClick={onSelect}
    >
      {/* Red Evidence Marker Corner */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D01820]/70 group-hover:bg-[#D01820] shadow-[0_0_8px_#D01820] transition-colors" />

      {/* Subtle Red Highlight Top Edge */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#D01820] transition-all" />

      <div>
        {/* Top Header: Evidence Index & Signal Frequency */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-800/80 font-mono text-[11px]">
          <span className="text-[#D01820] font-bold tracking-widest">
            {track.caseNo?.replace("CASE", "EVIDENCE") || "EVIDENCE // 01"}
          </span>

          <span className="flex items-center gap-1.5 text-stone-500 group-hover:text-stone-300 transition-colors">
            <Radio className="w-3 h-3 text-[#D01820]" />
            <span>FREQ: {track.frequency}</span>
          </span>
        </div>

        {/* Classification Tag */}
        <div className="inline-block px-2 py-0.5 rounded-2xs bg-stone-900 border border-stone-800 text-[10px] font-mono text-stone-400 tracking-wider mb-2">
          SIGNAL: {track.tag}
        </div>

        {/* Track Title */}
        <h3 className="font-mono text-base sm:text-lg font-bold text-stone-100 mt-1 group-hover:text-white transition-colors tracking-wide">
          {track.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-stone-400 mt-2.5 leading-relaxed">
          {track.description}
        </p>

        {/* Potential Focus Areas */}
        {track.potentialAreas && track.potentialAreas.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {track.potentialAreas.map((area) => (
              <span
                key={area}
                className="px-2 py-0.5 rounded-2xs bg-black/40 border border-stone-800/80 font-mono text-[10px] text-stone-400"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center justify-between font-mono text-xs">
        <span className="text-[10px] text-stone-500 group-hover:text-stone-400 tracking-wider">
          STATUS: UNDER INVESTIGATION
        </span>
        <span className="inline-flex items-center gap-1.5 text-[#D01820] font-bold tracking-wider group-hover:translate-x-1 transition-transform">
          INVESTIGATE
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
