import React, { useEffect, useRef } from "react";

/**
 * SignalInterference
 * Canvas-based simulated analog oscilloscope waveform for evidence telemetry.
 */
export default function SignalInterference({
  width = 240,
  height = 70,
  frequency = 3,
  color = "#22c55e", // analog phosphor green
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = null;
    let t = 0;

    const loop = () => {
      t += 0.04;
      ctx.clearRect(0, 0, width, height);

      // Grid background lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 15) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Signal wave
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 4;

      const midY = height / 2;
      for (let x = 0; x < width; x++) {
        const rad = (x / width) * Math.PI * 2 * frequency + t;
        const noise = (Math.sin(rad * 3) + Math.cos(rad * 0.5)) * 4;
        const y = midY + Math.sin(rad) * 16 + noise;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      frameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [width, height, frequency, color]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={`rounded-xs bg-[#090d0b] border border-white/10 ${className}`}
      aria-hidden="true"
    />
  );
}
