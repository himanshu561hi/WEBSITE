import React, { useState, useEffect, memo } from "react";
import { sceneVoiceEngine } from "../../utils/sceneVoiceEngine";
import { Volume2, VolumeX, Play, Square, RotateCcw, Radio } from "lucide-react";

/**
 * StoryAudioDebugHUD
 * Real-time Audio Diagnostics HUD (Section 14).
 * Activated via URL query `?storyDebug=true` or `#storyDebug`.
 *
 * Displays:
 * - Current Active Scene (e.g. scene-01)
 * - Current Audio File (e.g. home.mp3)
 * - Exact Clip Window (e.g. 0.0s -> 7.5s)
 * - Live Current Time
 * - Playback Status (PLAYING / STOPPED / MUTED / BLOCKED)
 * - Configured Voice Volume
 * - Live Controls (Replay, Stop, Mute)
 */
const StoryAudioDebugHUD = memo(function StoryAudioDebugHUD() {
  const [isVisible, setIsVisible] = useState(false);
  const [debug, setDebug] = useState(sceneVoiceEngine.getDebugState());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkDebugParam = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const hasQuery = urlParams.get("storyDebug") === "true";
      const hasHash = window.location.hash.includes("storyDebug");
      setIsVisible(hasQuery || hasHash);
    };

    checkDebugParam();
    window.addEventListener("hashchange", checkDebugParam);
    window.addEventListener("popstate", checkDebugParam);

    // Subscribe to real-time updates from SceneVoiceEngine
    const unsubscribe = sceneVoiceEngine.subscribeDebug((state) => {
      setDebug(state);
    });

    return () => {
      window.removeEventListener("hashchange", checkDebugParam);
      window.removeEventListener("popstate", checkDebugParam);
      unsubscribe();
    };
  }, []);

  if (!isVisible) return null;

  const clipDuration = Math.max(0.1, debug.clipEnd - debug.clipStart);
  const clipProgress = Math.min(
    Math.max((debug.currentTime - debug.clipStart) / clipDuration, 0),
    1
  );

  const getStatusColor = (status = "") => {
    if (status.includes("FADING IN") || status === "LOADING") {
      return "text-cyan-400 bg-cyan-950/70 border-cyan-500/50";
    }
    if (status.includes("FADING OUT") || status.includes("PAUSED")) {
      return "text-amber-400 bg-amber-950/70 border-amber-500/50";
    }
    if (status.includes("PLAYING")) {
      return "text-emerald-400 bg-emerald-950/70 border-emerald-500/50";
    }
    if (status === "MUTED") {
      return "text-amber-400 bg-amber-950/70 border-amber-500/50";
    }
    if (status === "BLOCKED") {
      return "text-rose-400 bg-rose-950/70 border-rose-500/50";
    }
    return "text-stone-400 bg-stone-900/70 border-stone-700/50";
  };

  return (
    <div
      className="fixed top-20 right-4 sm:right-6 z-50 w-72 sm:w-80 bg-stone-950/95 border-2 border-red-800/80 rounded-xs p-3.5 backdrop-blur-md shadow-[0_0_35px_rgba(0,0,0,0.95)] text-stone-200 font-mono text-xs select-none pointer-events-auto"
      style={{ boxShadow: "0 0 30px rgba(185, 28, 28, 0.35)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-red-900/50 pb-2 mb-2.5">
        <div className="flex items-center gap-1.5 text-red-400 font-bold uppercase tracking-wider text-[11px]">
          <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" />
          <span>AUDIO DEBUG HUD</span>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 rounded-xs bg-red-950/60 border border-red-800/50 text-red-300">
          ?storyDebug=true
        </span>
      </div>

      {/* Grid of Key Properties */}
      <div className="space-y-1.5 text-[11px]">
        {/* Current Scene */}
        <div className="flex items-center justify-between py-0.5 border-b border-stone-800/50">
          <span className="text-stone-400">Current Scene:</span>
          <span className="font-bold text-white bg-stone-900 px-1.5 py-0.5 rounded-xs border border-stone-700">
            {debug.currentScene}
          </span>
        </div>

        {/* Current Audio */}
        <div className="flex items-center justify-between py-0.5 border-b border-stone-800/50">
          <span className="text-stone-400">Current Audio:</span>
          <span className="font-bold text-amber-300 truncate max-w-[140px]" title={debug.audioFile}>
            {debug.audioFile}
          </span>
        </div>

        {/* Clip Timing */}
        <div className="flex items-center justify-between py-0.5 border-b border-stone-800/50">
          <span className="text-stone-400">Clip:</span>
          <span className="font-semibold text-cyan-300">
            {debug.clipStart.toFixed(1)}s → {debug.clipEnd.toFixed(1)}s
          </span>
        </div>

        {/* Live Head Position */}
        <div className="flex items-center justify-between py-0.5 border-b border-stone-800/50">
          <span className="text-stone-400">Playhead:</span>
          <span className="font-bold text-stone-100">
            {debug.currentTime.toFixed(2)}s / {debug.clipEnd.toFixed(1)}s
          </span>
        </div>

        {/* Playback Progress Bar */}
        <div className="w-full bg-stone-900 h-1.5 rounded-full overflow-hidden border border-stone-800">
          <div
            className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-400 transition-all duration-75"
            style={{ width: `${clipProgress * 100}%` }}
          />
        </div>

        {/* Playback Status & Volume */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5">
            <span className="text-stone-400">Playback:</span>
            <span
              className={`px-1.5 py-0.5 text-[10px] font-bold rounded-xs border ${getStatusColor(
                debug.playbackStatus
              )}`}
            >
              {debug.playbackStatus}
            </span>
          </div>

          <div className="flex items-center gap-1 text-stone-300 text-[11px]">
            <span className="text-stone-400">Volume:</span>
            <span className="font-bold text-white">{debug.volume}%</span>
          </div>
        </div>

        {/* Autoplay state hint if blocked */}
        {debug.isAutoplayBlocked && (
          <div className="text-[10px] text-amber-400 bg-amber-950/40 p-1.5 rounded-xs border border-amber-800/50 mt-1">
            ⚠ Autoplay waiting: Click or scroll to unlock audio
          </div>
        )}
      </div>

      {/* Manual Quick Action Controls */}
      <div className="grid grid-cols-3 gap-1.5 mt-3 pt-2 border-t border-stone-800 text-[10px]">
        <button
          type="button"
          onClick={() => sceneVoiceEngine.replayCurrentScene()}
          className="px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors"
          title="Replay active scene voice clip"
        >
          <RotateCcw className="w-3 h-3 text-cyan-400" />
          <span>Replay</span>
        </button>

        <button
          type="button"
          onClick={() => sceneVoiceEngine.stopActiveClip()}
          className="px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors"
          title="Stop currently playing audio clip"
        >
          <Square className="w-3 h-3 text-rose-400" />
          <span>Stop</span>
        </button>

        <button
          type="button"
          onClick={() => sceneVoiceEngine.toggleMute()}
          className="px-2 py-1 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-red-500 rounded-xs flex items-center justify-center gap-1 cursor-pointer transition-colors"
          title="Toggle Master Sound"
        >
          {debug.isMuted ? (
            <>
              <VolumeX className="w-3 h-3 text-amber-400" />
              <span>Unmute</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3 h-3 text-emerald-400" />
              <span>Mute</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
});

export default StoryAudioDebugHUD;
