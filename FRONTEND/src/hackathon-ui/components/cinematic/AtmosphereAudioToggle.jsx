import React, { useState, useEffect, memo } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { sceneVoiceEngine } from "../../utils/sceneVoiceEngine";
import { cinematicAudio } from "../../utils/cinematicAudio";

/**
 * AtmosphereAudioToggle
 * Master Sound Toggle for BUILDX Cinematic Experience (Section 12).
 *
 * States:
 * - SOUND ON: Cinematic narrative voices + atmospheric ambient active.
 * - SOUND OFF: All voices & ambient silenced immediately.
 */
const AtmosphereAudioToggle = memo(function AtmosphereAudioToggle() {
  const [isMuted, setIsMuted] = useState(sceneVoiceEngine.isMuted);

  useEffect(() => {
    // Initialize ambient subsystem
    cinematicAudio.init();

    // Subscribe to engine state for perfect sync
    const unsubscribe = sceneVoiceEngine.subscribeDebug((state) => {
      setIsMuted(state.isMuted);
    });

    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    const nextMuted = sceneVoiceEngine.toggleMute();
    setIsMuted(nextMuted);
  };

  return (
    <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 pointer-events-auto select-none">
      <button
        type="button"
        onClick={handleToggle}
        title={isMuted ? "Turn Sound ON (Voiceover & Atmosphere)" : "Turn Sound OFF (Silence Audio)"}
        aria-label={isMuted ? "Sound Off - Click to enable" : "Sound On - Click to mute"}
        className={`group flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.85)] cursor-pointer hover:scale-105 active:scale-95 ${
          isMuted
            ? "border-stone-700/60 text-stone-400 hover:border-stone-500 hover:text-stone-200"
            : "border-red-600/70 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.35)] hover:border-red-500"
        }`}
      >
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500 group-hover:text-stone-300" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          </div>
        )}

        <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold">
          {isMuted ? "SOUND OFF" : "SOUND ON"}
        </span>
      </button>
    </div>
  );
});

export default AtmosphereAudioToggle;
