import React, { useRef, useEffect, memo } from "react";
import { Radio, Activity, Terminal } from "lucide-react";

/**
 * SignalMonitor
 * Fictional analog RF signal oscilloscope monitor.
 * Visualizes the "UNKNOWN SIGNAL DETECTED" waveform with live audio-frequency canvas simulation.
 */
const SignalMonitor = memo(function SignalMonitor({
  frequency = "142.8 MHz",
  status = "AWAITING INPUT...",
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let phase = 0;

    const render = () => {
      phase += 0.04;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Radar / Scope grid
      ctx.strokeStyle = "rgba(34, 197, 94, 0.12)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Waveform line
      ctx.strokeStyle = "#22c55e";
      ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(34, 197, 94, 0.6)";
      ctx.shadowBlur = 8;
      ctx.beginPath();

      const centerY = canvas.height / 2;
      for (let x = 0; x < canvas.width; x += 2) {
        const y =
          centerY +
          Math.sin(x * 0.05 + phase) * 20 * Math.sin(phase * 0.5) +
          (Math.random() - 0.5) * 3;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      className={`bg-[#050905] border border-green-900/60 p-4 rounded-xs font-mono text-green-400 shadow-[0_4px_24px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="flex items-center justify-between text-[11px] pb-2 border-b border-green-950 mb-3">
        <span className="flex items-center gap-1.5 text-stone-300">
          <Terminal className="w-3.5 h-3.5 text-green-400" />
          SIGNAL OSCILLOSCOPE
        </span>
        <span className="flex items-center gap-1.5 text-[#D01820] font-bold animate-pulse">
          <Radio className="w-3 h-3 text-[#D01820]" />
          LIVE // {frequency}
        </span>
      </div>

      <canvas
        ref={canvasRef}
        width={320}
        height={100}
        className="w-full h-24 rounded-2xs bg-black/60 border border-green-950/80"
      />

      <div className="mt-3 pt-2 border-t border-green-950/60 flex items-center justify-between text-[10px] text-green-500/80">
        <span>INTERCEPT: CH-01</span>
        <span className="text-[#D01820] font-bold">{status}</span>
      </div>
    </div>
  );
});

export default SignalMonitor;
