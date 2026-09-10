import React, { useState, useEffect, memo } from "react";

/**
 * InvestigationCursor
 * Custom desktop investigation cursor with dynamic contextual states:
 * - Default: small dot with subtle flashlight glow
 * - Hover button / link: ring expands
 * - Hover evidence card: small crosshair
 * - Hover CTA: magnetic red pulse
 * Automatically disabled on mobile/touch screens and prefers-reduced-motion.
 */
const InvestigationCursor = memo(function InvestigationCursor() {
  const cursorRef = React.useRef(null);
  const [cursorState, setCursorState] = useState("default"); // 'default' | 'hover' | 'crosshair' | 'cta'
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let rafId = null;

    const updateCursorPosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      rafId = null;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updateCursorPosition);
      }

      // Determine hover target type
      const target = e.target;
      if (!target) return;

      if (target.closest("button[type='button'], .cta-button, a[href*='registration']")) {
        setCursorState("cta");
      } else if (target.closest(".evidence-card, [id='evidence']")) {
        setCursorState("crosshair");
      } else if (target.closest("a, button, input, summary, [role='button']")) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 will-change-transform transform-gpu"
      style={{
        transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
      }}
      aria-hidden="true"
    >
      {/* 1. Ambient Flashlight Glow */}
      <div className="w-80 h-80 rounded-full bg-radial from-amber-100/[0.035] via-[#B3131B]/[0.015] to-transparent blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* 2. Cursor Graphics Based on State */}
      {cursorState === "default" && (
        <div className="w-2.5 h-2.5 rounded-full bg-[#D01820] shadow-[0_0_8px_#D01820]" />
      )}

      {cursorState === "hover" && (
        <div className="w-8 h-8 rounded-full border border-stone-300 bg-white/10 transition-all duration-200 shadow-[0_0_12px_rgba(255,255,255,0.3)] animate-ping" />
      )}

      {cursorState === "crosshair" && (
        <div className="relative w-7 h-7 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border border-[#D01820] shadow-[0_0_8px_#D01820]" />
          <div className="absolute w-7 h-[1px] bg-[#D01820]" />
          <div className="absolute h-7 w-[1px] bg-[#D01820]" />
        </div>
      )}

      {cursorState === "cta" && (
        <div className="w-10 h-10 rounded-full border-2 border-[#D01820] bg-[#D01820]/20 shadow-[0_0_20px_#D01820] transition-all duration-200 animate-pulse" />
      )}
    </div>
  );
});

export default InvestigationCursor;
