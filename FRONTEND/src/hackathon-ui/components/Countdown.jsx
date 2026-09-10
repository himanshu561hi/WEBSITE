import React, { useState, useEffect } from "react";
import { hackathonConfig } from "../data/hackathonConfig";

/**
 * Countdown Component
 * Investigation case-file countdown timer.
 * Style: Dark metallic card, thin border, red pin accent, monospace digits.
 */
export default function Countdown({ className = "" }) {
  const targetDate = hackathonConfig.dates.countdownTarget;

  const [timeLeft, setTimeLeft] = useState({
    days: "36",
    hours: "00",
    minutes: "00",
    seconds: "00",
    isExpired: false,
  });

  useEffect(() => {
    if (!targetDate) return;

    const targetTime = new Date(targetDate).getTime();

    const calculateTime = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          isExpired: true,
        });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
        isExpired: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Investigation Dossier Chrono Card */}
      <div className="relative p-4 sm:p-5 rounded-xs bg-[#101010]/95 border border-white/15 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_0_15px_rgba(208,24,32,0.06)]">
        {/* Red Evidence Pin in Top Corner */}
        <div className="absolute -top-1.5 -left-1.5 evidence-pin" />

        {/* Top Header Label */}
        <div className="flex items-center justify-between gap-4 mb-3 border-b border-white/10 pb-2">
          <div className="flex items-center gap-2 font-mono-tech text-[11px] tracking-widest text-slate-300 uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D01820] animate-pulse" />
            <span>THE INVESTIGATION BEGINS IN</span>
          </div>
          <span className="font-mono-tech text-[9px] text-[#D01820] tracking-widest">
            [CASE CLOCK]
          </span>
        </div>

        {/* Digits Container */}
        <div
          className="flex items-center gap-2 sm:gap-3 md:gap-4"
          role="timer"
          aria-label={`Countdown: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}
        >
          {units.map((unit, idx) => (
            <React.Fragment key={unit.label}>
              <div className="flex flex-col items-center">
                <div className="relative px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xs bg-[#090909] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  <span className="font-mono-tech font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-widest tabular-nums drop-shadow-[0_0_8px_rgba(208,24,32,0.35)]">
                    {unit.value}
                  </span>
                </div>

                <span className="mt-1.5 font-mono-tech text-[9px] sm:text-[10px] text-slate-400 tracking-wider">
                  {unit.label}
                </span>
              </div>

              {idx < units.length - 1 && (
                <span className="font-mono-tech font-bold text-lg sm:text-xl text-[#D01820] -mt-4 select-none">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
