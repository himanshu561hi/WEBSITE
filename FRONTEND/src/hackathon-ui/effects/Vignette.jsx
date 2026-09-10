import React, { memo } from "react";

/**
 * Vignette
 * Deep perimeter darkness focusing vision on center investigation materials.
 */
const Vignette = memo(function Vignette({ intensity = "medium" }) {
  const gradientStyle =
    intensity === "deep"
      ? "radial-gradient(circle at center, transparent 35%, rgba(4, 4, 4, 0.85) 80%, #000000 100%)"
      : "radial-gradient(circle at center, transparent 45%, rgba(6, 6, 6, 0.7) 85%, #050505 100%)";

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30"
      style={{ background: gradientStyle }}
      aria-hidden="true"
    />
  );
});

export default Vignette;
