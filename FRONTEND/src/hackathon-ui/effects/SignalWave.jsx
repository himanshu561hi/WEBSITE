import React, { memo } from "react";

/**
 * SignalWave
 * SVG animated oscilloscope waveform line.
 */
const SignalWave = memo(function SignalWave({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 80"
      className={`w-full h-full stroke-current fill-none stroke-2 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 0 40 Q 40 10 80 40 T 160 40 T 220 5 T 260 75 T 300 40 T 360 40 T 400 40"
        className="animate-pulse"
      />
    </svg>
  );
});

export default SignalWave;
