import React, { useEffect, useRef } from "react";

/**
 * PortalVisual (Canvas 2D)
 * 
 * High-performance, GPU-accelerated dimensional gateway animation.
 * Features:
 * - Concentric distorted energy rings (crimson + electric cyan)
 * - Swirling inward particle vortex
 * - Smooth mouse parallax reaction
 * - Auto-pause via IntersectionObserver when off-screen
 * - Auto-pause on tab blur/visibilitychange
 * - DevicePixelRatio capped at 2 to preserve GPU efficiency
 * - Full prefers-reduced-motion fallback
 */
export default function PortalVisual({ className = "" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = null;
    let isVisible = true;
    let isDocumentVisible = !document.hidden;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Particle pool
    const PARTICLE_COUNT = prefersReducedMotion ? 0 : 90;
    const particles = [];

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let maxRadius = 0;

    // Mouse tracking with lerp smoothing
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      // Cap DPR at 2 for performance
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      centerX = width / 2;
      centerY = height / 2;
      maxRadius = Math.min(width, height) * 0.44;

      // Initialize/re-seed particles
      if (particles.length === 0 && !prefersReducedMotion) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particles.push({
            angle: Math.random() * Math.PI * 2,
            distance: Math.random() * maxRadius + 30,
            speed: 0.4 + Math.random() * 0.8,
            size: 1 + Math.random() * 2,
            color: Math.random() > 0.35 ? "#ff1a40" : "#00f0ff",
            alpha: 0.2 + Math.random() * 0.7,
          });
        }
      }
    };

    resize();

    // Mouse move listener with throttled request
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) - width / 2;
      const y = (e.clientY - rect.top) - height / 2;
      targetMouseX = x * 0.08;
      targetMouseY = y * 0.08;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", resize, { passive: true });

    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
      if (isDocumentVisible && isVisible && !animationFrameId) {
        loop();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // IntersectionObserver to pause loop when scrolled outside viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && isDocumentVisible && !animationFrameId) {
          loop();
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    let time = 0;

    const renderStaticPortal = () => {
      ctx.clearRect(0, 0, width, height);

      // Core radial shadow
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, maxRadius);
      coreGrad.addColorStop(0, "#050508");
      coreGrad.addColorStop(0.5, "rgba(255, 26, 64, 0.18)");
      coreGrad.addColorStop(0.85, "rgba(0, 240, 255, 0.08)");
      coreGrad.addColorStop(1, "transparent");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius, 0, Math.PI * 2);
      ctx.fill();

      // Outer rings
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255, 26, 64, 0.4)";
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, maxRadius * 0.8, maxRadius * 0.5, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(0, 240, 255, 0.35)";
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, maxRadius * 0.95, maxRadius * 0.6, 0, 0, Math.PI * 2);
      ctx.stroke();
    };

    const loop = () => {
      animationFrameId = null;

      if (!isVisible || !isDocumentVisible) {
        return;
      }

      if (prefersReducedMotion) {
        renderStaticPortal();
        return;
      }

      time += 0.02;

      // Mouse position smoothing (lerp)
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      const activeCenterX = centerX + currentMouseX;
      const activeCenterY = centerY + currentMouseY;

      ctx.clearRect(0, 0, width, height);

      // 1. Deep Core Black Hole Gradient
      const coreGrad = ctx.createRadialGradient(
        activeCenterX,
        activeCenterY,
        15,
        activeCenterX,
        activeCenterY,
        maxRadius
      );
      coreGrad.addColorStop(0, "#050509");
      coreGrad.addColorStop(0.35, "rgba(255, 26, 64, 0.22)");
      coreGrad.addColorStop(0.7, "rgba(0, 240, 255, 0.09)");
      coreGrad.addColorStop(1, "transparent");

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(activeCenterX, activeCenterY, maxRadius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Concentric Distorted Pulsing Rings
      const ringCount = 5;
      for (let i = 1; i <= ringCount; i++) {
        const radiusFactor = (i / ringCount);
        const ringRadiusX = maxRadius * radiusFactor;
        const ringRadiusY = ringRadiusX * (0.55 + Math.sin(time + i) * 0.05);

        ctx.save();
        ctx.translate(activeCenterX, activeCenterY);
        ctx.rotate((time * 0.15) * (i % 2 === 0 ? 1 : -1));

        ctx.beginPath();
        ctx.ellipse(0, 0, ringRadiusX, ringRadiusY, 0, 0, Math.PI * 2);

        if (i % 2 === 0) {
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 + (i * 0.05)})`;
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = `rgba(255, 26, 64, ${0.2 + (i * 0.06)})`;
          ctx.lineWidth = 2;
        }

        ctx.stroke();
        ctx.restore();
      }

      // 3. Inward Particle Vortex
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Spiral inwards
        p.angle += p.speed * 0.015;
        p.distance -= p.speed * 0.35;

        // Reset if reached event horizon
        if (p.distance <= 20) {
          p.distance = maxRadius + Math.random() * 20;
          p.angle = Math.random() * Math.PI * 2;
        }

        // Elliptical coordinate projection
        const px = activeCenterX + Math.cos(p.angle) * p.distance;
        const py = activeCenterY + Math.sin(p.angle) * (p.distance * 0.6);

        // Alpha fades as particle nears the center or outer edge
        const distRatio = p.distance / maxRadius;
        const currentAlpha = Math.sin(distRatio * Math.PI) * p.alpha;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    if (prefersReducedMotion) {
      renderStaticPortal();
    } else {
      animationFrameId = requestAnimationFrame(loop);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full flex items-center justify-center pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
