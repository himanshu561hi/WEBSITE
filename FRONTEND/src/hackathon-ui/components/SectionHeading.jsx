import React from "react";

/**
 * SectionHeading
 * Cinematic classified investigation section header.
 */
export default function SectionHeading({
  tag = "CASE FILE",
  title = "",
  highlight = "",
  subtitle = "",
  align = "center",
  className = "",
}) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16 ${className}`}>
      {/* Classified Tag Badge with Red Pin */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#121212] border border-white/15 font-mono-tech text-[10px] md:text-xs text-[#D01820] uppercase tracking-widest mb-4 shadow-[0_0_12px_rgba(208,24,32,0.18)]">
        <span className="w-2 h-2 rounded-full bg-[#D01820] animate-pulse" />
        <span>{tag}</span>
      </div>

      {/* Main Display Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase max-w-4xl leading-[1.08]">
        {title}{" "}
        {highlight && (
          <span className="text-[#D01820] drop-shadow-[0_0_20px_rgba(208,24,32,0.5)]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-xs sm:text-sm md:text-base font-mono-tech text-slate-400 max-w-2xl font-normal leading-relaxed uppercase tracking-wider">
          // {subtitle}
        </p>
      )}

      {/* Red Thread Accent Divider */}
      <div className={`mt-6 flex items-center gap-2 ${align === "left" ? "justify-start" : "justify-center"} opacity-60`}>
        <span className="w-12 h-[1.5px] bg-[#D01820]" />
        <span className="w-2 h-2 rounded-full bg-[#D01820]" />
        <span className="w-12 h-[1.5px] bg-white/20" />
      </div>
    </div>
  );
}
