import React, { useState, useEffect, memo } from "react";

/**
 * GlitchText
 * Intentional, subtle text flicker effect reminiscent of analog CRT signal logs.
 */
const GlitchText = memo(function GlitchText({
  children,
  className = "",
  as = "span",
}) {
  const [glitching, setGlitching] = useState(false);
  const Component = as;

  useEffect(() => {
    // Occasional subtle micro-flicker
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 90);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Component
      className={`relative inline-block transition-transform duration-75 ${
        glitching ? "opacity-75 translate-x-[1px] text-[#D01820]" : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
});

export default GlitchText;
