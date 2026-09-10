import React, { useEffect, useRef } from "react";

/**
 * EvidenceParticles
 * Subtle drifting dust motes illuminated by incandescent lamp light.
 * Pauses automatically when off-screen or tab blurred.
 */
export default function EvidenceParticles({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId = null;
    let isVisible = true;
    let isDocumentVisible = !document.hidden;

    const DUST_COUNT = 35;
    const dust = [];

    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      if (dust.length === 0) {
        for (let i = 0; i < DUST_COUNT; i++) {
          dust.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: 0.8 + Math.random() * 1.5,
            vx: (Math.random() - 0.5) * 0.15,
            vy: -0.15 - Math.random() * 0.25,
            alpha: 0.1 + Math.random() * 0.35,
          });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && isDocumentVisible && !animationFrameId) {
          loop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleVisibility = () => {
      isDocumentVisible = !document.hidden;
      if (isDocumentVisible && isVisible && !animationFrameId) {
        loop();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const loop = () => {
      animationFrameId = null;
      if (!isVisible || !isDocumentVisible) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dust.length; i++) {
        const d = dust[i];
        d.x += d.vx;
        d.y += d.vy;

        if (d.y < -10) {
          d.y = height + 10;
          d.x = Math.random() * width;
        }
        if (d.x < -10) d.x = width + 10;
        if (d.x > width + 10) d.x = -10;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 241, 234, ${d.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-10 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
