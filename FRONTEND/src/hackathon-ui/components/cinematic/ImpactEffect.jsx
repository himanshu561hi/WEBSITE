import React, { memo, useEffect, useState } from "react";

/**
 * ImpactEffect
 * Paranormal Shove cinematic event.
 * Triggers sudden physical shove: fast horizontal displacement, rotational jerk,
 * brief chromatic aberration, and exposure distortion lasting ~480ms.
 */
const ImpactEffect = memo(function ImpactEffect({
  isActive = false,
  intensity = 1,
  reducedMotion = false,
}) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setFrameIndex(0);
      return;
    }

    if (reducedMotion) {
      setFrameIndex(4);
      return;
    }

    // Sequence of 5 discrete rapid frames simulating physical camera shove & recoil
    const timeouts = [
      setTimeout(() => setFrameIndex(1), 30),  // Violent jerk
      setTimeout(() => setFrameIndex(2), 90),  // Peak displacement & tilt
      setTimeout(() => setFrameIndex(3), 180), // Inertial rebound
      setTimeout(() => setFrameIndex(4), 320), // Settling
      setTimeout(() => setFrameIndex(0), 480), // Restabilized
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [isActive, reducedMotion]);

  if (!isActive && frameIndex === 0) return null;

  // Frame values
  let transform = "none";
  let filter = "none";

  if (!reducedMotion) {
    switch (frameIndex) {
      case 1:
        transform = `translate3d(${-24 * intensity}px, ${-6 * intensity}px, 0) rotate(-2.8deg)`;
        filter = "brightness(1.5) contrast(1.3) blur(2px)";
        break;
      case 2:
        transform = `translate3d(${18 * intensity}px, ${4 * intensity}px, 0) rotate(1.9deg)`;
        filter = "brightness(1.3) contrast(1.15) blur(1px)";
        break;
      case 3:
        transform = `translate3d(${-8 * intensity}px, ${-2 * intensity}px, 0) rotate(-0.8deg)`;
        filter = "brightness(1.1) contrast(1.05)";
        break;
      case 4:
        transform = `translate3d(${2 * intensity}px, 0px, 0) rotate(0.2deg)`;
        filter = "none";
        break;
      default:
        transform = "none";
        filter = "none";
    }
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 z-40 transition-transform ease-out"
      style={{
        transform,
        filter,
        transitionDuration: frameIndex === 1 ? "40ms" : "120ms",
      }}
    >
      {/* Chromatic Aberration RGB split simulation */}
      {frameIndex > 0 && frameIndex <= 2 && (
        <>
          <div
            className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
            style={{
              transform: `translate3d(${6 * intensity}px, 0, 0)`,
              background: "rgba(255, 0, 40, 0.15)",
            }}
          />
          <div
            className="absolute inset-0 opacity-35 mix-blend-screen pointer-events-none"
            style={{
              transform: `translate3d(${-6 * intensity}px, 0, 0)`,
              background: "rgba(0, 200, 255, 0.12)",
            }}
          />
        </>
      )}
    </div>
  );
});

export default ImpactEffect;
