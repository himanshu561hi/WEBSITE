import React, { memo } from "react";
import { storyConfig } from "../../config/storyConfig";

/**
 * CinematicText
 * Classified narrative notes rendered strictly on the left negative space wall.
 * Avoids covering the central paranormal presence.
 * Features typewriter exposure, glitch anomalies, and classified data styling.
 */
const CinematicText = memo(function CinematicText({
  scrollProgress = 0,
}) {
  const { textEvents } = storyConfig;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden select-none">
      {textEvents.map((evt) => {
        // Calculate normalized visibility within [start, end]
        const { start, end, fadeDuration = 0.03 } = evt;
        const isWithin = scrollProgress >= start && scrollProgress <= end;

        if (!isWithin && (scrollProgress < start - fadeDuration || scrollProgress > end + fadeDuration)) {
          return null;
        }

        // Opacity ramp
        let opacity = 0;
        if (scrollProgress >= start && scrollProgress <= end) {
          if (scrollProgress < start + fadeDuration) {
            opacity = (scrollProgress - start) / fadeDuration;
          } else if (scrollProgress > end - fadeDuration) {
            opacity = (end - scrollProgress) / fadeDuration;
          } else {
            opacity = 1;
          }
        }

        // Subtle displacement as text reveals
        const translateY = (1 - opacity) * 10;

        return (
          <div
            key={evt.id}
            className="absolute left-6 sm:left-12 md:left-20 max-w-xs sm:max-w-sm md:max-w-md pointer-events-none transition-all duration-300"
            style={{
              top: evt.position.y || "35%",
              opacity: Math.max(0, Math.min(1, opacity)),
              transform: `translate3d(0, ${translateY}px, 0)`,
            }}
          >
            {/* Tag / Classification Header */}
            <div className="flex items-center gap-2 mb-2 font-mono text-[10px] sm:text-xs text-[#D01820] tracking-widest uppercase">
              <span className="inline-block w-1.5 h-1.5 bg-[#D01820] animate-ping" />
              <span>{evt.tag}</span>
            </div>

            {/* Main Primary Heading */}
            <h2 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-stone-100 tracking-tight leading-none uppercase drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] mb-2">
              {evt.heading}
            </h2>

            {/* Secondary Classified Body Line */}
            <p className="font-mono text-xs sm:text-sm text-stone-300 tracking-wider uppercase leading-relaxed drop-shadow-md border-l-2 border-stone-600/60 pl-3">
              {evt.body}
            </p>
          </div>
        );
      })}
    </div>
  );
});

export default CinematicText;
