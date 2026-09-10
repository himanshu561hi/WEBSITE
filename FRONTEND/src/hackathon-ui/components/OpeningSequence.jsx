import React, { useState, useEffect, memo } from "react";
import { Radio } from "lucide-react";

/**
 * OpeningSequence
 * Cinematic opening cold open:
 * Screen is almost black -> CASE FILE // 001 -> SIGNAL DETECTED -> Light flickers -> 3D world revealed.
 */
const OpeningSequence = memo(function OpeningSequence({ onComplete = () => {} }) {
  const [step, setStep] = useState(0); // 0: dark, 1: case file, 2: signal, 3: reveal, 4: complete

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 400);
    const t2 = setTimeout(() => setStep(2), 1600);
    const t3 = setTimeout(() => setStep(3), 2800);
    const t4 = setTimeout(() => {
      setStep(4);
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStep(4);
    onComplete();
  };

  if (step >= 4) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center cursor-pointer transition-opacity duration-1000 ${
        step === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Opening Transmission"
    >
      <div className="flex flex-col items-center space-y-4 font-mono text-center px-4">
        {step >= 1 && (
          <div className="text-xs text-[#D01820] tracking-widest uppercase animate-pulse flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D01820]" />
            <span>CASE FILE // 001</span>
          </div>
        )}

        {step >= 2 && (
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-bold text-stone-100 tracking-wider">
              SIGNAL DETECTED
            </h1>
            <p className="text-xs text-stone-400 tracking-widest flex items-center justify-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#22c55e] animate-ping" />
              <span>SOURCE: UNKNOWN // FREQ: 142.8 MHz</span>
            </p>
          </div>
        )}

        {step >= 2 && (
          <div className="pt-8 text-[10px] text-stone-600 tracking-widest uppercase">
            [ CLICK ANYWHERE TO INITIALIZE TERMINAL ]
          </div>
        )}
      </div>
    </div>
  );
});

export default OpeningSequence;
