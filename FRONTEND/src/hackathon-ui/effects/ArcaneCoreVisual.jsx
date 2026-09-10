import React, { useEffect, useRef } from "react";

/**
 * ArcaneCoreVisual
 * 
 * The visual centerpiece of "The Arcane Code":
 * - Floating multifaceted crystalline energy core
 * - Concentric counter-rotating bronze-gold & obsidian gimbals
 * - Original arcane circuit runes & geometric sigils
 * - Floating holographic telemetry HUD panels
 * - Swirling energy particles & light rays
 * - Smooth mouse parallax with lerp
 * - 60fps GPU-accelerated Canvas 2D with auto-pause on scroll/tab-blur
 * - Strictly original fantasy-tech iconography (zero IP infringement)
 */
export default function ArcaneCoreVisual({ className = "" }) {
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

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Particle pool
    const PARTICLE_COUNT = prefersReducedMotion ? 0 : 75;
    const particles = [];

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let coreRadius = 0;

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

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      centerX = width / 2;
      centerY = height / 2;
      coreRadius = Math.min(width, height) * 0.38;

      if (particles.length === 0 && !prefersReducedMotion) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particles.push({
            angle: Math.random() * Math.PI * 2,
            distance: Math.random() * (coreRadius * 1.3) + 20,
            speed: 0.3 + Math.random() * 0.7,
            size: 1 + Math.random() * 2.2,
            color: Math.random() > 0.45 ? "#00f0ff" : (Math.random() > 0.5 ? "#d4af37" : "#8b5cf6"),
            alpha: 0.2 + Math.random() * 0.7,
            orbitSpeed: (Math.random() - 0.5) * 0.02,
          });
        }
      }
    };

    resize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) - width / 2;
      const y = (e.clientY - rect.top) - height / 2;
      targetMouseX = x * 0.06;
      targetMouseY = y * 0.06;
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

    // Draw central multifaceted arcane crystal
    const drawCrystal = (cx, cy, radius, t) => {
      ctx.save();
      ctx.translate(cx, cy);

      const floatY = Math.sin(t * 1.5) * 8;
      ctx.translate(0, floatY);

      // Core radial glow
      const glowGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, radius * 0.85);
      glowGrad.addColorStop(0, "rgba(0, 240, 255, 0.45)");
      glowGrad.addColorStop(0.4, "rgba(139, 92, 246, 0.25)");
      glowGrad.addColorStop(0.8, "rgba(212, 175, 55, 0.12)");
      glowGrad.addColorStop(1, "transparent");

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.85, 0, Math.PI * 2);
      ctx.fill();

      // Multifaceted Crystal Octahedron Vertices
      const h = radius * 0.65;
      const w = radius * 0.38;

      const top = { x: 0, y: -h };
      const bottom = { x: 0, y: h };
      const left = { x: -w, y: 0 };
      const right = { x: w, y: 0 };
      const centerFront = { x: Math.sin(t) * 12, y: 0 };

      // Facet 1: Top-Left
      ctx.beginPath();
      ctx.moveTo(top.x, top.y);
      ctx.lineTo(left.x, left.y);
      ctx.lineTo(centerFront.x, centerFront.y);
      ctx.closePath();
      ctx.fillStyle = "rgba(0, 240, 255, 0.45)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Facet 2: Top-Right
      ctx.beginPath();
      ctx.moveTo(top.x, top.y);
      ctx.lineTo(right.x, right.y);
      ctx.lineTo(centerFront.x, centerFront.y);
      ctx.closePath();
      ctx.fillStyle = "rgba(139, 92, 246, 0.55)";
      ctx.fill();
      ctx.stroke();

      // Facet 3: Bottom-Left
      ctx.beginPath();
      ctx.moveTo(bottom.x, bottom.y);
      ctx.lineTo(left.x, left.y);
      ctx.lineTo(centerFront.x, centerFront.y);
      ctx.closePath();
      ctx.fillStyle = "rgba(14, 165, 233, 0.4)";
      ctx.fill();
      ctx.stroke();

      // Facet 4: Bottom-Right
      ctx.beginPath();
      ctx.moveTo(bottom.x, bottom.y);
      ctx.lineTo(right.x, right.y);
      ctx.lineTo(centerFront.x, centerFront.y);
      ctx.closePath();
      ctx.fillStyle = "rgba(212, 175, 55, 0.35)";
      ctx.fill();
      ctx.stroke();

      // Crystal Core Inner Light Source
      ctx.beginPath();
      ctx.arc(centerFront.x, 0, 8, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 18;
      ctx.fill();

      ctx.restore();
    };

    // Draw rotating metallic & arcane rune rings
    const drawRings = (cx, cy, radius, t) => {
      // Ring 1: Outer bronze-gold metallic ring with counter-rotation
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.12);

      ctx.beginPath();
      ctx.ellipse(0, 0, radius, radius * 0.72, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212, 175, 55, 0.55)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Geometric markers along outer ring
      const markerCount = 8;
      for (let i = 0; i < markerCount; i++) {
        const ma = (i / markerCount) * Math.PI * 2;
        const mx = Math.cos(ma) * radius;
        const my = Math.sin(ma) * (radius * 0.72);

        ctx.beginPath();
        ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#d4af37";
        ctx.fill();
      }
      ctx.restore();

      // Ring 2: Intermediate cyan arcane gimbal ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.18);

      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 0.82, radius * 0.52, Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 240, 255, 0.6)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(0, 240, 255, 0.6)";
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // Ring 3: Deep violet inner containment ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.22);

      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 0.62, radius * 0.38, -Math.PI / 5, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.65)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Geometric sigil diamond in center orbit
      ctx.rotate(t * 0.4);
      ctx.beginPath();
      ctx.rect(-radius * 0.35, -radius * 0.35, radius * 0.7, radius * 0.7);
      ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    const loop = () => {
      animationFrameId = null;

      if (!isVisible || !isDocumentVisible) return;

      if (prefersReducedMotion) {
        ctx.clearRect(0, 0, width, height);
        drawRings(centerX, centerY, coreRadius, 1);
        drawCrystal(centerX, centerY, coreRadius, 1);
        return;
      }

      time += 0.02;

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      const activeX = centerX + currentMouseX;
      const activeY = centerY + currentMouseY;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Ring Gimbals
      drawRings(activeX, activeY, coreRadius, time);

      // 2. Draw Arcane Crystal Core
      drawCrystal(activeX, activeY, coreRadius, time);

      // 3. Swirling Energy Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.orbitSpeed;
        p.distance -= p.speed * 0.18;

        if (p.distance <= 15) {
          p.distance = coreRadius * 1.25 + Math.random() * 20;
          p.angle = Math.random() * Math.PI * 2;
        }

        const px = activeX + Math.cos(p.angle) * p.distance;
        const py = activeY + Math.sin(p.angle) * (p.distance * 0.65);

        const distRatio = p.distance / (coreRadius * 1.25);
        const alpha = Math.sin(distRatio * Math.PI) * p.alpha;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      drawRings(centerX, centerY, coreRadius, 1);
      drawCrystal(centerX, centerY, coreRadius, 1);
    } else {
      animationFrameId = requestAnimationFrame(loop);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating Holographic Technical HUD Panels (Positioned around Arcane Core) */}
      
      {/* Panel 1: Top-Right Telemetry */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-6 p-3 sm:p-4 rounded-sm bg-[#080d1a]/85 border border-[#00f0ff]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.18)] font-mono-tech text-[10px] sm:text-xs text-slate-300 pointer-events-auto transition-transform hover:scale-105 duration-300">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-1.5 mb-2">
          <span className="text-[#00f0ff] font-bold tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
            ARCANE CORE
          </span>
          <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded-xs border border-emerald-500/20">
            ACTIVE
          </span>
        </div>
        <div className="space-y-1 text-slate-400">
          <div className="flex justify-between gap-4">
            <span>ENERGY OUTPUT:</span>
            <span className="text-white font-bold">98.7%</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>CONTAINMENT:</span>
            <span className="text-[#d4af37] font-bold">STABLE</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>SPRINT BUILD:</span>
            <span className="text-[#00f0ff] font-bold">READY</span>
          </div>
        </div>
      </div>

      {/* Panel 2: Bottom-Right Command Stack */}
      <div className="hidden sm:block absolute bottom-6 right-4 sm:bottom-10 sm:right-8 p-3.5 rounded-sm bg-[#080d1a]/85 border border-[#d4af37]/30 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)] font-mono-tech text-[10px] text-slate-300 pointer-events-auto">
        <div className="text-[#d4af37] font-bold mb-1.5 border-b border-white/10 pb-1">
          // SPELL PROTOCOL
        </div>
        <div className="space-y-0.5 text-slate-400">
          <div className="text-[#00f0ff]">&gt; INITIATE</div>
          <div className="text-slate-300">&gt; CREATE</div>
          <div className="text-slate-300">&gt; COLLABORATE</div>
          <div className="text-[#d4af37]">&gt; DEPLOY</div>
          <div className="text-emerald-400 font-bold">&gt; IMPACT</div>
        </div>
      </div>

      {/* Panel 3: Bottom-Left Equation Badge */}
      <div className="absolute bottom-6 left-4 sm:bottom-10 sm:left-6 px-3.5 py-2 rounded-sm bg-[#080d1a]/85 border border-[#8b5cf6]/40 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)] font-mono-tech text-[10px] sm:text-xs text-white pointer-events-auto">
        <span className="text-[#00f0ff] font-bold">CODE</span>
        <span className="text-[#d4af37] mx-1.5">+</span>
        <span className="text-purple-300 font-bold">LOGIC</span>
        <span className="text-[#d4af37] mx-1.5">+</span>
        <span className="text-emerald-400 font-bold">CREATIVITY</span>
      </div>
    </div>
  );
}
