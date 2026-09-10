import React, { memo } from "react";

/**
 * SignalNoise
 * Intermittent analog RF signal noise and oscilloscope interference bars.
 */
const SignalNoise = memo(function SignalNoise({ active = false, className = "" }) {
  if (!active) return null;

  return (
    <div
      className={`absolute inset-0 pointer-events-none mix-blend-screen opacity-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="w-full h-2 bg-white/20 blur-xs animate-signal-scan" />
      <div className="w-full h-1 bg-[#D01820]/40 blur-xs mt-12" />
    </div>
  );
});

export default SignalNoise;
