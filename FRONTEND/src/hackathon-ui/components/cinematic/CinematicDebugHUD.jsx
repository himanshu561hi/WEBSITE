import React, { useState, useEffect } from "react";

/**
 * CinematicDebugHUD
 * Development telemetry and parameter tuning HUD.
 * Activated via URL query parameter: ?storyDebug=true or ?debug=true
 */
export default function CinematicDebugHUD({
  scrollProgress = 0,
  currentScene = "scene-01",
  cameraTransform = {},
  isImpactActive = false,
  tuningParams = {},
  onUpdateTuning,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      if (
        searchParams.get("storyDebug") === "true" ||
        searchParams.get("debug") === "true" ||
        window.location.hash.includes("debug")
      ) {
        setIsVisible(true);
      }
    }
  }, []);

  if (!isVisible) return null;

  const { x = 0, y = 0, scale = 1, rotateZ = 0, gateProximity = 0 } = cameraTransform;

  return (
    <aside
      aria-label="Story Debug HUD"
      className="fixed bottom-4 left-4 z-50 w-80 bg-black/90 border border-red-600/70 p-4 rounded text-xs font-mono text-stone-200 shadow-2xl backdrop-blur-md space-y-3 pointer-events-auto"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-red-500 font-bold tracking-wider">STORY DEBUG HUD</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-stone-400 hover:text-white px-1"
        >
          [X]
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div>
          <span className="text-stone-500">SCROLL: </span>
          <span className="text-emerald-400 font-bold">
            {(scrollProgress * 100).toFixed(1)}%
          </span>
        </div>
        <div>
          <span className="text-stone-500">SCENE: </span>
          <span className="text-amber-400 font-bold">{currentScene}</span>
        </div>
        <div>
          <span className="text-stone-500">CAM SCALE: </span>
          <span className="text-cyan-300">{scale.toFixed(2)}x</span>
        </div>
        <div>
          <span className="text-stone-500">CAM X/Y: </span>
          <span className="text-cyan-300">
            {x.toFixed(2)}, {y.toFixed(2)}
          </span>
        </div>
        <div>
          <span className="text-stone-500">ROTATION: </span>
          <span className="text-cyan-300">{rotateZ.toFixed(1)}°</span>
        </div>
        <div>
          <span className="text-stone-500">IMPACT: </span>
          <span
            className={`font-bold ${
              isImpactActive ? "text-red-500 animate-pulse" : "text-stone-600"
            }`}
          >
            {isImpactActive ? "TRIGGERED" : "ARMED"}
          </span>
        </div>
      </div>

      {/* Quick Jump Bar */}
      <div className="flex items-center gap-1.5 pt-1">
        <span className="text-[10px] text-stone-500">JUMP:</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-stone-800 hover:bg-stone-700 px-1.5 py-0.5 rounded text-[10px]"
        >
          0%
        </button>
        <button
          onClick={() => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            window.scrollTo({ top: h * 0.4, behavior: "smooth" });
          }}
          className="bg-stone-800 hover:bg-stone-700 px-1.5 py-0.5 rounded text-[10px]"
        >
          40%
        </button>
        <button
          onClick={() => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            window.scrollTo({ top: h * 0.8, behavior: "smooth" });
          }}
          className="bg-red-950 hover:bg-red-900 text-red-300 px-1.5 py-0.5 rounded text-[10px]"
        >
          80% Shove
        </button>
        <button
          onClick={() => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            window.scrollTo({ top: h * 0.95, behavior: "smooth" });
          }}
          className="bg-stone-800 hover:bg-stone-700 px-1.5 py-0.5 rounded text-[10px]"
        >
          95% S2
        </button>
      </div>
    </aside>
  );
}
