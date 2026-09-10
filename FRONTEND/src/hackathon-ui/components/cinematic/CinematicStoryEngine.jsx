import React, { useState, useEffect, useRef, memo } from "react";
import { scenes } from "../../config/sceneConfig";
import { storyConfig } from "../../config/storyConfig";
import { useCinematicCamera } from "./CinematicCamera";
import CinematicScene from "./CinematicScene";
import CinematicHeroData from "./CinematicHeroData";
import CinematicRoomDossier from "./CinematicRoomDossier";
import BlackboardWritingEffect from "./BlackboardWritingEffect";
import ImpactEffect from "./ImpactEffect";
import AtmosphericOverlay from "./AtmosphericOverlay";
import { sceneVoiceEngine } from "../../utils/sceneVoiceEngine";
import { cinematicAudio } from "../../utils/cinematicAudio";

/**
 * Calculates the active scene ID based on scrollProgress with hysteresis buffer
 * to prevent duplicate audio triggers during minor back-and-forth scroll movements.
 */
function getActiveSceneId(p, currentId) {
  const h = 0.005; // Hysteresis threshold (0.5% scroll buffer)

  if (p < 0.09 - (currentId === "scene-01" ? -h : h)) return "scene-01";
  if (p < 0.19 - (currentId === "scene-02" ? -h : h)) return "scene-02";
  if (p < 0.36 - (currentId === "scene-03" ? -h : h)) return "scene-03";
  if (p < 0.63 - (currentId === "scene-06" ? -h : h)) return "scene-06";
  if (p < 0.77 - (currentId === "scene-07" ? -h : h)) return "scene-07";
  if (p < 0.86 - (currentId === "scene-08" ? -h : h)) return "scene-08";
  if (p < 0.922 - (currentId === "scene-09" ? -h : h)) return "scene-09";
  if (p < 0.936 - (currentId === "scene-10" ? -h : h)) return "scene-10";
  if (p < 0.944 - (currentId === "scene-10-map" ? -h : h)) return "scene-10-map";
  if (p < 0.954 - (currentId === "scene-11" ? -h : h)) return "scene-11";
  if (p < 0.963 - (currentId === "scene-12" ? -h : h)) return "scene-12";
  if (p < 0.971 - (currentId === "scene-13" ? -h : h)) return "scene-13";
  if (p < 0.988 - (currentId === "scene-14" ? -h : h)) return "scene-14";
  if (p < 0.9935 - (currentId === "scene-15" ? -h : h)) return "scene-15";
  if (p < 0.9972 - (currentId === "scene-16" ? -h : h)) return "scene-16";
  return "scene-17";
}

/**
 * CinematicStoryEngine
 * High-performance orchestrator for 8-scene scroll-driven paranormal investigation:
 * - Scene 01: Ghost in Corridor (home-01.png) [0.00 -> 0.12]
 * - Scene 02: Open Iron Gate Vault (home-02.png) [0.10 -> 0.22]
 * - Scene 03: Investigation Chamber & Dossiers (home-03.png) [0.20 -> 0.38]
 * - Scene 06: Front Blackboard Manifest & Word-by-Word Writing (home-06.png) [0.36 -> 0.65]
 * - Scene 07: Chamber Pull-Back & Open Floor Hatch (home-07.png) [0.63 -> 0.78]
 * - Scene 08: Subterranean Stairway // The Ghost at the Gate (home-08.png) [0.77 -> 0.88]
 * - Scene 09: Ghost First-Person Eye View // Gripping the Vault Gate (home-09.png) [0.86 -> 0.93]
 * - Gate Open Shove / Jhatka Impact [0.915 -> 0.935]
 * - Scene 10: The Open Vault Sanctum // Candled Crypt & Altar (home-10.png) [0.922 -> 1.00]
 */
const CinematicStoryEngine = memo(function CinematicStoryEngine({
  scrollProgress = 0,
}) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isImpactActive, setIsImpactActive] = useState(false);
  const [isGateImpactActive, setIsGateImpactActive] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(false);
  const [calendarAdded, setCalendarAdded] = useState(false);

  const activeSceneRef = useRef(null);
  const hasUserScrolledRef = useRef(false);

  // 0A. Initialize scene metadata on mount without auto-playing voice
  useEffect(() => {
    sceneVoiceEngine.setInitialScene("scene-01");

    const onUserScrollGesture = () => {
      hasUserScrolledRef.current = true;
      const targetScene = activeSceneRef.current || "scene-01";
      sceneVoiceEngine.onUserScrollActivity(targetScene);
    };

    window.addEventListener("scroll", onUserScrollGesture, { passive: true });
    window.addEventListener("wheel", onUserScrollGesture, { passive: true });
    window.addEventListener("touchmove", onUserScrollGesture, { passive: true });

    return () => {
      window.removeEventListener("scroll", onUserScrollGesture);
      window.removeEventListener("wheel", onUserScrollGesture);
      window.removeEventListener("touchmove", onUserScrollGesture);
      sceneVoiceEngine.stopActiveClip();
    };
  }, []);

  // 0B. Sync active scene voice with scroll progression: plays on scroll, pauses on stop
  useEffect(() => {
    const currentId = activeSceneRef.current || "scene-01";
    const nextSceneId = getActiveSceneId(scrollProgress, currentId);

    if (nextSceneId !== activeSceneRef.current) {
      activeSceneRef.current = nextSceneId;
      sceneVoiceEngine.onSceneActive(nextSceneId);
    }

    if (scrollProgress > 0.001) {
      hasUserScrolledRef.current = true;
      sceneVoiceEngine.onUserScrollActivity(nextSceneId);
    }
  }, [scrollProgress]);

  const scene01 = scenes[0];
  const scene02 = scenes[1];
  const scene03 = scenes[2];
  const scene06 = scenes[3];
  const scene07 = scenes[4];
  const scene08 = scenes[5];
  const scene09 = scenes[6];
  const scene10 = scenes[7];
  const scene10Map = scenes[8];
  const scene11 = scenes[9];
  const scene12 = scenes[10];
  const scene13 = scenes[11];
  const scene14 = scenes[12];
  const scene15 = scenes[13];
  const scene16 = scenes[14];
  const scene17 = scenes[15];

  // 1. Accessibility: Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);

      const handler = (e) => setReducedMotion(e.matches);
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
      }
    }
  }, []);

  // 2. Preload subsequent scenes eagerly
  useEffect(() => {
    [
      scene02?.image,
      scene03?.image,
      scene06?.image,
      scene07?.image,
      scene08?.image,
      scene09?.image,
      scene10?.image,
      scene10Map?.image,
      scene11?.image,
      scene12?.image,
      scene13?.image,
      scene14?.image,
      scene15?.image,
      scene16?.image,
      scene17?.image,
    ].forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [
    scene02?.image,
    scene03?.image,
    scene06?.image,
    scene07?.image,
    scene08?.image,
    scene09?.image,
    scene10?.image,
    scene10Map?.image,
    scene11?.image,
    scene12?.image,
    scene13?.image,
    scene14?.image,
    scene15?.image,
    scene16?.image,
    scene17?.image,
  ]);

  // ── Repeating Gate Breach Shudders Across Story ──
  const activeGateRef = useRef(new Set());

  useEffect(() => {
    const gates = [
      { id: "gate-1", min: 0.082, max: 0.118, resetMin: 0.065, resetMax: 0.135, heavy: false },
      { id: "gate-2", min: 0.205, max: 0.235, resetMin: 0.185, resetMax: 0.255, heavy: false },
      { id: "gate-3", min: 0.625, max: 0.655, resetMin: 0.600, resetMax: 0.675, heavy: true },
      { id: "gate-4", min: 0.755, max: 0.785, resetMin: 0.730, resetMax: 0.810, heavy: false },
      { id: "gate-5", min: 0.912, max: 0.938, resetMin: 0.885, resetMax: 0.955, heavy: true },
      { id: "gate-6", min: 0.962, max: 0.982, resetMin: 0.945, resetMax: 0.990, heavy: false },
    ];

    gates.forEach((gate) => {
      const isInside = scrollProgress >= gate.min && scrollProgress <= gate.max;
      const isReset = scrollProgress < gate.resetMin || scrollProgress > gate.resetMax;

      if (isInside && !activeGateRef.current.has(gate.id)) {
        activeGateRef.current.add(gate.id);

        // User: "wo gate open ka sound sirf is wale scene pe add krna h aur jagaho se hta do"
        // Exclusively plays gate-open.mp3 on gate-5 (Scene 09 Tehkhaana Vault Gate shown in screenshot)
        // User: "gate open ka volume 15-20 percent kr do and gate open voice ka sound 3 sec se 7 sec tk chaiye bs"
        if (gate.id === "gate-5") {
          cinematicAudio.playGateOpen(0.18); // strictly 15-20% volume, strictly 3s to 7s
          setIsGateImpactActive(true);
          setTimeout(() => setIsGateImpactActive(false), 560);
        } else if (gate.heavy) {
          setIsGateImpactActive(true);
          setTimeout(() => setIsGateImpactActive(false), 560);
        } else {
          setIsImpactActive(true);
          setTimeout(() => setIsImpactActive(false), 380);
        }
      } else if (isReset && activeGateRef.current.has(gate.id)) {
        activeGateRef.current.delete(gate.id);
        if (gate.id === "gate-5") {
          cinematicAudio.fadeGateAudio(400);
        }
      }
    });
  }, [scrollProgress]);

  // ── Dossier Entrance & Exit Sound Effect (sound effect.mp3) ──
  // User: "sound effect.mp3 ye ek new sound effect hai like jb lgana h mai wo screenshot attach kr rha hu like aate and jate time"
  // User: "ye seen jb ja rha rha to jo voice aa rhi h usko 1 sec phle kro"
  const dossierActiveRef = useRef(false);

  useEffect(() => {
    if (!hasUserScrolledRef.current) return;
    const wasActive = dossierActiveRef.current;

    // Active reading range: 0.188 to 0.308
    // Exit begins at 0.308 (1 second earlier than previous 0.345, right as cards begin sliding away)
    const isInside = scrollProgress >= 0.188 && scrollProgress <= 0.308;
    const isCompletelyOutside = scrollProgress < 0.178 || scrollProgress > 0.316;

    if (!wasActive && isInside) {
      // Entered Investigation Chamber Dossier through rolling fog ("aate time")
      dossierActiveRef.current = true;
      cinematicAudio.playDossierTransition(0.20); // 20% volume per user request
    } else if (wasActive && isCompletelyOutside) {
      // Exited Investigation Chamber Dossier right as departure motion begins ("jate time")
      dossierActiveRef.current = false;
      cinematicAudio.playDossierTransition(0.20); // 20% volume per user request
    }
  }, [scrollProgress]);

  // ── Repeating Footsteps Across Entire Journey ("step and gate ko pure pe lgana h and repeat kr kr ke") ──
  // User: "chalne step and gate.mp3 is voice se steps wala sound lga do pure jagah jb bhi scroll ho to sound aaye chalne ka"
  // User: "and voice exactly mt paste kr dena"
  // Plays clean extracted walking footsteps from step and gate.mp3 across the entire journey whenever scrolling
  const isWalking = scrollProgress > 0.001 && scrollProgress < 0.999;
  const stepCycle = scrollProgress * Math.PI * 64;
  const footDrop = Math.abs(Math.sin(stepCycle));
  const walkBobY = isWalking ? (footDrop * 5.5 - 2.75) : 0;
  const walkSwayX = isWalking ? Math.sin(stepCycle * 0.5) * 4.5 : 0;
  const walkTilt = isWalking ? Math.sin(stepCycle * 0.5) * 0.40 : 0;

  const prevScrollRef = useRef(scrollProgress);

  useEffect(() => {
    const scrollDelta = Math.abs(scrollProgress - prevScrollRef.current);
    prevScrollRef.current = scrollProgress;

    // Trigger footstep sound loop while user is actively scrolling anywhere across the journey
    if (isWalking && scrollDelta > 0.00015) {
      cinematicAudio.startFootsteps(0.32);
    }
  }, [scrollProgress, isWalking]);

  // ── Movement Sound Triggers (movement.mp3) ──
  // User: "and also mai move hone ka bhi sound lgana chahta hu wobhi dekhta hu add kr deta hu to move ho like abhi jo new ham rules ka add krenge usme kaam aayega baki agag khi aur dekho agar lga ho acha lge to accordingly lga skte ho movement.mp3 and voice exactly mt paste kr dena"
  const movementRulesTriggeredRef = useRef(false);
  const movementBoardTriggeredRef = useRef(false);
  const movementFullRulesTriggeredRef = useRef(false);
  const movementTrapdoorTriggeredRef = useRef(false);
  const movementScrollTriggeredRef = useRef(false);

  useEffect(() => {
    if (!hasUserScrolledRef.current) return;

    // 1. Camera Pan from Save The Date (Scene 14) into Scene 15 (0.988 -> 0.994)
    // Plays camera pan whoosh as the perspective turns away from the scroll toward the cathedral
    if (scrollProgress >= 0.988 && scrollProgress <= 0.994) {
      if (!movementRulesTriggeredRef.current) {
        movementRulesTriggeredRef.current = true;
        cinematicAudio.playMovementPan(0.32);
      }
    } else if (scrollProgress < 0.984 || scrollProgress > 0.998) {
      movementRulesTriggeredRef.current = false;
    }

    // 2. Stepping Forward into Scene 16: Approaching the Rules Wall (0.993 -> 0.996)
    if (scrollProgress >= 0.993 && scrollProgress <= 0.996) {
      if (!movementBoardTriggeredRef.current) {
        movementBoardTriggeredRef.current = true;
        cinematicAudio.playMovementSwish(0.24);
      }
    } else if (scrollProgress < 0.989 || scrollProgress > 0.998) {
      movementBoardTriggeredRef.current = false;
    }

    // 3. Pivoting Directly in Front: Scene 17 Full Page Rules (0.9965 -> 1.000)
    if (scrollProgress >= 0.9965 && scrollProgress <= 0.9995) {
      if (!movementFullRulesTriggeredRef.current) {
        movementFullRulesTriggeredRef.current = true;
        cinematicAudio.playMovementSwish(0.26);
      }
    } else if (scrollProgress < 0.995 || scrollProgress > 1.0) {
      movementFullRulesTriggeredRef.current = false;
    }

    // 3. Scene 06 -> 07: Trapdoor Hatch Open & Camera Pull-Back (0.63 -> 0.72)
    // Physical camera crane pull-back whoosh
    if (scrollProgress >= 0.635 && scrollProgress <= 0.72) {
      if (!movementTrapdoorTriggeredRef.current) {
        movementTrapdoorTriggeredRef.current = true;
        cinematicAudio.playMovementPan(0.26);
      }
    } else if (scrollProgress < 0.62 || scrollProgress > 0.74) {
      movementTrapdoorTriggeredRef.current = false;
    }

    // 4. Scene 12 -> 13: Hand Reach & Scroll Unrolling (0.950 -> 0.965)
    // Quick motion swish as the investigator reaches forward and lifts the ancient scroll
    if (scrollProgress >= 0.950 && scrollProgress <= 0.965) {
      if (!movementScrollTriggeredRef.current) {
        movementScrollTriggeredRef.current = true;
        cinematicAudio.playMovementSwish(0.26);
      }
    } else if (scrollProgress < 0.944 || scrollProgress > 0.970) {
      movementScrollTriggeredRef.current = false;
    }
  }, [scrollProgress]);

  // ── 4. Scene 01: Ghost in Corridor (0.00 -> 0.12) ──
  const p1 = Math.min(Math.max(scrollProgress / 0.12, 0), 1);
  const cameraTransform = useCinematicCamera(p1, reducedMotion, isImpactActive);

  const scene1to2Progress = Math.min(Math.max((scrollProgress - 0.09) / 0.03, 0), 1);
  const scene1Opacity = 1.0 - scene1to2Progress;

  // ── 5. Scene 02: Open Iron Gate Corridor (0.09 -> 0.22) ──
  const gateProgress = Math.min(Math.max((scrollProgress - 0.09) / 0.13, 0), 1);
  const scene2Scale = 1.0 + Math.pow(gateProgress, 1.35) * 1.85;
  const gateFadeOut = Math.min(Math.max((scrollProgress - 0.19) / 0.03, 0), 1);
  const scene2Opacity = scene1to2Progress * (1.0 - gateFadeOut);

  // Doorway portal aperture
  const portalProgress = Math.min(Math.max((scrollProgress - 0.14) / 0.07, 0), 1);
  const apertureRadius = portalProgress > 0.06 ? Math.pow(portalProgress, 1.35) * 115 : 0;
  const gateMaskStyle =
    portalProgress > 0.06 && scrollProgress < 0.22
      ? {
          WebkitMaskImage: `radial-gradient(ellipse 55% 65% at 47.5% 50%, transparent ${Math.min(
            apertureRadius * 0.45,
            75
          )}%, rgba(0,0,0,0.6) ${Math.min(apertureRadius * 0.8, 90)}%, black ${Math.min(
            apertureRadius + 18,
            100
          )}%)`,
          maskImage: `radial-gradient(ellipse 55% 65% at 47.5% 50%, transparent ${Math.min(
            apertureRadius * 0.45,
            75
          )}%, rgba(0,0,0,0.6) ${Math.min(apertureRadius * 0.8, 90)}%, black ${Math.min(
            apertureRadius + 18,
            100
          )}%)`,
        }
      : {};

  // ── 6. Scene 03: Investigation Room // Evidence Board & Desk (0.19 -> 0.38) ──
  const scene3FadeOut = Math.min(Math.max((scrollProgress - 0.35) / 0.03, 0), 1);
  const scene3Opacity = Math.min(portalProgress * 1.25, 1.0) * (1.0 - scene3FadeOut);

  // Phase 3A (0.19 -> 0.30): WALKING STRAIGHT FORWARD into room towards desk
  const straightProgress = Math.min(Math.max((scrollProgress - 0.19) / 0.11, 0), 1);
  const straightScale = 0.86 + portalProgress * 0.14 + Math.pow(straightProgress, 1.15) * 0.55;
  const straightPanY = -straightProgress * 18;

  // Phase 3B (0.30 -> 0.36): PIVOT & TURN RIGHT directly toward blackboard on the wall
  const turnProgress = Math.min(Math.max((scrollProgress - 0.30) / 0.06, 0), 1);
  const turnEase = Math.pow(turnProgress, 1.3);

  const scene3Scale = straightScale + turnEase * 0.55;
  const roomPanX = -turnEase * 370;
  const roomPanY = straightPanY - turnEase * 35;
  const roomRotateY = -turnEase * 14;
  const roomTilt = -turnEase * 1.8;

  // ── 7. Scene 06: Front Blackboard Manifest & Chalk Writing (0.35 -> 0.67) ──
  const scene6Entrance = Math.min(Math.max((scrollProgress - 0.35) / 0.03, 0), 1);

  // Backward Walking Physics: Cameraman physically steps backwards away from blackboard
  const backProgress = Math.min(Math.max((scrollProgress - 0.61) / 0.07, 0), 1);
  const backEase = Math.pow(backProgress, 1.35);

  const backCycle = backProgress * Math.PI * 6; // 3 distinct backward footsteps
  const backFootDrop = Math.abs(Math.sin(backCycle));
  const isBackWalking = backProgress > 0.02 && backProgress < 0.98;
  const backBobY = isBackWalking ? (backFootDrop * 16 - 8) : 0;
  const backSwayX = isBackWalking ? Math.sin(backCycle * 0.5) * 12 : 0;
  const backTilt = isBackWalking ? Math.sin(backCycle * 0.5) * 1.6 : 0;
  const backPanY = backProgress * 16;

  // Scene 06 shrinks away into the room as cameraman backs up
  const scene6Scale = 1.0 - backEase * 0.40;
  const scene6PanY = backPanY + backBobY;
  const scene6PanX = backSwayX;
  const scene6FadeOut = Math.min(Math.max((scrollProgress - 0.64) / 0.03, 0), 1);
  const scene6Opacity = scene6Entrance * (1.0 - scene6FadeOut);

  // ── 8. Scene 07: Subterranean Trapdoor Hatch (0.63 -> 0.79) ──
  const scene7Entrance = Math.min(Math.max((scrollProgress - 0.63) / 0.03, 0), 1);
  const scene7FadeOut = Math.min(Math.max((scrollProgress - 0.76) / 0.025, 0), 1);
  const scene7Opacity = scene7Entrance * (1.0 - scene7FadeOut);

  // Reverse dolly pull-back matching Scene 06 distance, anchored to left blackboard (24% 28%)
  const scene7PullBackScale = 1.32 - backEase * 0.32; // 1.32 -> 1.00

  // Focus & approach forward to frame the exact subterranean hatch view (0.67 -> 0.76)
  const hatchApproach = Math.min(Math.max((scrollProgress - 0.67) / 0.08, 0), 1);
  const hatchEase = Math.pow(hatchApproach, 1.25);
  const scene7Scale = scene7PullBackScale + hatchEase * 0.95; // 1.00 -> 1.95 (Exact framing of user screenshot!)

  const approachCycle = hatchApproach * Math.PI * 18;
  const approachFootDrop = Math.abs(Math.sin(approachCycle));
  const approachBobY = hatchApproach > 0 && hatchApproach < 1 ? (approachFootDrop * 12 - 6) : 0;
  const approachSwayX = hatchApproach > 0 && hatchApproach < 1 ? Math.sin(approachCycle * 0.5) * 8 : 0;

  const scene7PanX = hatchApproach > 0 ? approachSwayX : backSwayX;
  const scene7PanY = hatchApproach > 0 ? approachBobY : (backPanY + backBobY);
  const scene7Tilt = hatchApproach > 0 ? Math.sin(approachCycle * 0.5) * 1.2 : backTilt;

  // ── 9. Scene 08: Subterranean Staircase // The Ghost at the Gate (0.76 -> 0.88) ──
  // Immediately triggers after "ye view" (the close-up hatch framing):
  const scene8Entrance = Math.min(Math.max((scrollProgress - 0.76) / 0.02, 0), 1);
  const scene8FadeOut = Math.min(Math.max((scrollProgress - 0.85) / 0.02, 0), 1);
  const scene8Opacity = scene8Entrance * (1.0 - scene8FadeOut);

  // Hurtling down the stone stairs towards the ghost's back/head (0.77 -> 0.86)
  const stairProgress = Math.min(Math.max((scrollProgress - 0.77) / 0.08, 0), 1);
  const stairEase = Math.pow(stairProgress, 1.35);

  const stairCycle = stairProgress * Math.PI * 26;
  const stairFootDrop = Math.abs(Math.sin(stairCycle));
  const stairBobY = stairProgress > 0 ? (stairFootDrop * 18 - 9) : 0;
  const stairSwayX = stairProgress > 0 ? Math.sin(stairCycle * 0.5) * 14 : 0;
  const stairTilt = stairProgress > 0 ? Math.sin(stairCycle * 0.5) * 2.0 : 0;

  // Target ghost head & upper back: transformOrigin: "60% 46%"
  const scene8Scale = 1.0 + stairEase * 2.50;

  // ── 10. Scene 09: Ghost First-Person Eye View // Gripping Vault Gate (0.85 -> 0.93) ──
  // Camera possesses ghost; you see through ghost's eyes with hands gripping the iron bars!
  const scene9Entrance = Math.min(Math.max((scrollProgress - 0.85) / 0.02, 0), 1);
  const eyeProgress = Math.min(Math.max((scrollProgress - 0.86) / 0.06, 0), 1);

  // Visceral ghost breathing & iron bar rattling tension
  const ghostBreathe = Math.sin(eyeProgress * Math.PI * 16) * 7;
  const rattleBars = Math.sin(eyeProgress * Math.PI * 36) * 5.0;
  const eyeZoom = 1.0 + Math.pow(eyeProgress, 1.1) * 0.14;

  // Gate breach burst mechanics (0.915 -> 0.928)
  const breachProgress = Math.min(Math.max((scrollProgress - 0.915) / 0.013, 0), 1);
  const breachEase = Math.pow(breachProgress, 2.2);

  // Dynamic unlocking / opening percentage for the door HUD
  const unlockPercent = Math.min(Math.max(Math.round(eyeProgress * 80 + breachProgress * 20), 10), 100);

  // Sudden violent shove rightwards & forward as lock gives way
  const gateShoveX = breachEase * 105;
  const gateShoveScale = eyeZoom + breachEase * 0.16;

  const scene9FadeOut = Math.min(Math.max((scrollProgress - 0.920) / 0.009, 0), 1);
  const scene9Opacity = scene9Entrance * (1.0 - scene9FadeOut);

  // ── 11. Scene 10: Crypt Cathedral // Entering & Walking Forward Down Red Carpet (0.916 -> 0.935) ──
  const scene10Entrance = Math.min(Math.max((scrollProgress - 0.916) / 0.006, 0), 1);
  const scene10FadeOut = Math.min(Math.max((scrollProgress - 0.930) / 0.006, 0), 1);
  const scene10Opacity = scene10Entrance * (1.0 - scene10FadeOut);

  const recoilProgress = Math.min(Math.max((scrollProgress - 0.916) / 0.008, 0), 1);
  const recoilFactor = 1.0 - Math.pow(recoilProgress, 1.4);
  const scene10RecoilX = -recoilFactor * 20;

  const carpetWalkProgress = Math.min(Math.max((scrollProgress - 0.918) / 0.014, 0), 1);
  const carpetWalkEase = Math.pow(carpetWalkProgress, 1.25);
  const carpetStepCycle = carpetWalkProgress * Math.PI * 14;
  const carpetFootDrop = Math.abs(Math.sin(carpetStepCycle));
  const carpetBobY = carpetWalkProgress > 0 && carpetWalkProgress < 1 ? (carpetFootDrop * 9 - 4.5) : 0;
  const carpetSwayX = carpetWalkProgress > 0 && carpetWalkProgress < 1 ? Math.sin(carpetStepCycle * 0.5) * 7 : 0;
  const carpetTilt = carpetWalkProgress > 0 && carpetWalkProgress < 1 ? Math.sin(carpetStepCycle * 0.5) * 0.6 : 0;

  const altarTurnProgress = Math.min(Math.max((scrollProgress - 0.925) / 0.008, 0), 1);
  const altarTurnEase = Math.pow(altarTurnProgress, 1.35);
  const turnPanX = altarTurnEase * 80;
  const turnPanY = -altarTurnEase * 6;
  const turnRotateY = -altarTurnEase * 4.5;

  const scene10Scale = 1.00 + carpetWalkEase * 0.35 + altarTurnEase * 0.10;
  const scene10PanX = scene10RecoilX + carpetSwayX + turnPanX;
  const scene10PanY = carpetBobY + turnPanY; // Top remains anchored
  const scene10Tilt = carpetTilt - altarTurnEase * 0.6;

  // ── 12. Scene 10-Map: Sanctum Blueprint Verification (0.930 -> 0.948) ──
  const mapEntrance = Math.min(Math.max((scrollProgress - 0.930) / 0.006, 0), 1);
  const mapFadeOut = Math.min(Math.max((scrollProgress - 0.944) / 0.006, 0), 1);
  const scene10MapOpacity = mapEntrance * (1.0 - mapFadeOut);

  const mapRaiseProgress = Math.min(Math.max((scrollProgress - 0.930) / 0.006, 0), 1);
  const mapRaiseEase = Math.pow(mapRaiseProgress, 0.85);
  const mapLowerProgress = Math.min(Math.max((scrollProgress - 0.942) / 0.006, 0), 1);
  const mapLowerEase = Math.pow(mapLowerProgress, 1.4);

  const mapPanY = (1.0 - mapRaiseEase) * 40 + mapLowerEase * 50;
  const mapBreathing = Math.sin((scrollProgress - 0.930) * 80) * 2.5;
  const mapScale = 0.96 + mapRaiseEase * 0.08 + (scrollProgress - 0.934) * 0.3;
  const mapVerifiedProgress = Math.min(Math.max((scrollProgress - 0.934) / 0.008, 0), 1);

  // ── 13. Scene 11: Sacrificial Altar Front View // "aur zoom hoga" (0.940 -> 0.954) ──
  const scene11Entrance = Math.min(Math.max((scrollProgress - 0.940) / 0.005, 0), 1);
  const scene11FadeOut = Math.min(Math.max((scrollProgress - 0.952) / 0.005, 0), 1);
  const scene11Opacity = scene11Entrance * (1.0 - scene11FadeOut);

  // Deep forward zoom into the altar: "aur zoom hoga"
  const altarAdvanceProgress = Math.min(Math.max((scrollProgress - 0.940) / 0.014, 0), 1);
  const altarEase = Math.pow(altarAdvanceProgress, 1.25);
  const altarStepCycle = altarAdvanceProgress * Math.PI * 10;
  const altarBobY = altarAdvanceProgress > 0 ? (Math.abs(Math.sin(altarStepCycle)) * 7 - 3.5) : 0;
  const altarSwayX = altarAdvanceProgress > 0 ? Math.sin(altarStepCycle * 0.5) * 5 : 0;

  const scene11Scale = 1.00 + altarEase * 0.48; // Deep dramatic zoom towards altar
  const scene11PanY = altarBobY * 0.5; // Top remains anchored
  const scene11PanX = altarSwayX;

  // ── 14. Scene 12: Reaching for the Scroll in Dead Body's Hand (home-12.png) (0.950 -> 0.963) ──
  const scene12Entrance = Math.min(Math.max((scrollProgress - 0.950) / 0.005, 0), 1);
  const scene12FadeOut = Math.min(Math.max((scrollProgress - 0.961) / 0.005, 0), 1);
  const scene12Opacity = scene12Entrance * (1.0 - scene12FadeOut);

  const scrollReachProgress = Math.min(Math.max((scrollProgress - 0.950) / 0.011, 0), 1);
  const scrollReachEase = Math.pow(scrollReachProgress, 1.25);
  const scene12Scale = 1.00 + scrollReachEase * 0.20;
  const scene12PanY = scrollReachEase * 12;
  const scene12PanX = -scrollReachEase * 8;

  // ── 15. Scene 13: Unrolling the Ancient Parchment Scroll (home-13.png) (0.960 -> 0.970) ──
  const scene13Entrance = Math.min(Math.max((scrollProgress - 0.960) / 0.005, 0), 1);
  const scene13FadeOut = Math.min(Math.max((scrollProgress - 0.969) / 0.005, 0), 1);
  const scene13Opacity = scene13Entrance * (1.0 - scene13FadeOut);

  const unrollProgress = Math.min(Math.max((scrollProgress - 0.960) / 0.009, 0), 1);
  const unrollEase = Math.pow(unrollProgress, 0.9);
  const scene13Scale = 0.98 + unrollEase * 0.05;
  const scene13PanY = (1.0 - unrollEase) * 35; // Glides smoothly upward into hands

  // Ink reveal for Scene 13 (shows dates immediately on the open scroll!)
  const ink13RevealProgress = Math.min(Math.max((scrollProgress - 0.960) / 0.004, 0), 1);

  // ── 16. Scene 14: Fully Opened Ancient Scroll // Save The Date Proclamation (home-14.png) (0.968 -> 0.994) ──
  // User: "ye page bhut km time ke liye aa rha h thoda sa shake ya koi effect dalke thoda time bdao and real wali feel lao"
  // Extended plateau: scroll sits firmly centered in hands from 0.970 to 0.988 with realistic handheld shake
  const scene14Entrance = Math.min(Math.max((scrollProgress - 0.968) / 0.004, 0), 1);

  const scrollOpenProgress = Math.min(Math.max((scrollProgress - 0.968) / 0.005, 0), 1);
  const scrollOpenEase = Math.pow(scrollOpenProgress, 0.95);
  const baseScene14Scale = 1.00 + scrollOpenEase * 0.04;
  const baseScene14PanY = (1.0 - scrollOpenEase) * 20;

  // Dual-harmonic organic hand tremor & investigator adrenaline pulse
  const handShakeCycle = scrollProgress * Math.PI * 75;
  const handTremorX = Math.sin(handShakeCycle * 1.7) * 2.2 + Math.cos(handShakeCycle * 3.1) * 1.3;
  const handTremorY = Math.cos(handShakeCycle * 1.3) * 2.6 + Math.sin(handShakeCycle * 2.5) * 1.5;
  const handTremorRot = Math.sin(handShakeCycle * 0.9) * 0.55 + Math.cos(handShakeCycle * 1.8) * 0.25;

  // ── True First-Person Camera Movement: Camera Pans Right into Crypt Sanctum ──
  // Camera move starts at 0.988 after user has enjoyed the Save The Date scroll
  const cameraMoveProgress = Math.min(Math.max((scrollProgress - 0.988) / 0.006, 0), 1);
  // Smooth S-curve acceleration and deceleration for real physical camera motion
  const cameraMoveEase = 0.5 - 0.5 * Math.cos(cameraMoveProgress * Math.PI);
  // Rotational pan velocity for dynamic optical motion blur & lens flare streak
  const panVelocity = Math.sin(cameraMoveProgress * Math.PI);
  const cameraMotionBlur = panVelocity * 3.8; // px of directional camera motion blur
  const cameraFlareOpacity = panVelocity * 0.55; // golden candlelight streak across lens

  // Scene 14 (Parchment in Hands): Tilts down, moves toward bottom-left hip, blurs into room
  const scrollLowerY = cameraMoveEase * 240; // in px, lowers down toward hip
  const scrollLowerX = -cameraMoveEase * 28; // in %, drops toward bottom-left
  const scrollTiltX = -cameraMoveEase * 26; // tilts away in 3D perspective
  const scrollYawY = cameraMoveEase * 20; // turns as camera looks right
  const scene14Scale = baseScene14Scale * (1.0 - cameraMoveEase * 0.14);
  const scene14PanY = baseScene14PanY + scrollLowerY;
  const scene14PanX = scrollLowerX;
  const scene14Blur = cameraMoveEase * 5.0; // depth of field focus pull
  const scene14Opacity = scene14Entrance * Math.max(1.0 - Math.pow(cameraMoveProgress, 1.3), 0);

  // Ink reveal for Scene 14:
  const inkRevealProgress = Math.min(Math.max((scrollProgress - 0.968) / 0.003, 0), 1);
  const ink14RevealProgress = inkRevealProgress;

  // ── 17. Scene 15: The Crypt Sanctorum // Cathedral of the Occult Rules (home-15.jpg) (0.988 -> 0.995) ──
  const scene15Entrance = Math.min(Math.max((scrollProgress - 0.988) / 0.002, 0), 1);
  // Fast camera step forward into the right wall / rules desk:
  const boardAdvanceProgress = Math.min(Math.max((scrollProgress - 0.992) / 0.0028, 0), 1);
  const boardAdvanceEase = Math.pow(boardAdvanceProgress, 1.35);
  const scene15Scale = (1.18 + boardAdvanceEase * 0.38); // deep optical zoom toward board

  // The 3D Camera Pan across Scene 15 — MUST be declared before scene15PanX uses it:
  const cameraPanX = 6.0 - cameraMoveEase * 16.0; // sweeps from +6% (left/hand) to -10% (right/rules table)
  const cameraYawY = 6.0 - cameraMoveEase * 12.0; // camera rotates from +6deg to -6deg
  const cameraPitchX = -2.5 + cameraMoveEase * 2.5; // tilts up from looking down at scroll (-2.5deg) to eye level (0deg)
  const cameraRollZ = panVelocity * -1.5; // natural handheld dynamic bank during turn

  const scene15PanX = cameraPanX - boardAdvanceEase * 14.0;
  const scene15PanY = -boardAdvanceEase * 18.0;
  // Radial/forward camera stride motion blur:
  const stepMotionBlur = Math.sin(boardAdvanceProgress * Math.PI) * 4.8;
  // Volumetric candle flare flash as investigator passes the tall candelabras:
  const stepCandleFlash = Math.sin(boardAdvanceProgress * Math.PI) * 0.70;

  // Snappy focus handoff right as camera reaches the desk (0.9938 -> 0.9948)
  const scene15FadeOut = Math.min(Math.max((scrollProgress - 0.9938) / 0.0010, 0), 1);
  const scene15Opacity = scene15Entrance * (1.0 - scene15FadeOut);

  // Continuous Steadicam Video Breathing
  const videoBreathCycle = scrollProgress * Math.PI * 44;
  const videoBobY = Math.sin(videoBreathCycle) * 2.0;
  const videoSwayX = Math.cos(videoBreathCycle * 0.5) * 1.8;
  const videoTilt = Math.sin(videoBreathCycle * 0.5) * 0.22;
  const candleFlicker = 1.0 + Math.sin(scrollProgress * Math.PI * 32) * 0.06;

  // ── 18. Scene 16: Approaching the Sanctum Board (home-16.jpg) (0.9936 -> 0.9990) ──
  const scene16Entrance = Math.min(Math.max((scrollProgress - 0.9936) / 0.0018, 0), 1);
  const scene16EntranceEase = 0.5 - 0.5 * Math.cos(scene16Entrance * Math.PI);
  // Gentle push-forward zoom
  const scene16Scale = 1.00 + scene16EntranceEase * 0.03;
  const scene16FadeOut = Math.min(Math.max((scrollProgress - 0.9980) / 0.0022, 0), 1);
  const scene16FadeOutEase = 0.5 - 0.5 * Math.cos(scene16FadeOut * Math.PI);
  const scene16Opacity = scene16EntranceEase * (1.0 - scene16FadeOutEase);
  const scene16PivotPanX = 0;

  const rulesBreathCycle = scrollProgress * Math.PI * 48;
  const rulesBobY = Math.sin(rulesBreathCycle) * 1.0;
  const rulesSwayX = Math.cos(rulesBreathCycle * 0.5) * 0.8;
  const rulesTilt = Math.sin(rulesBreathCycle * 0.5) * 0.12;

  // ── 19. Scene 17: Full Page Rules Decree (home-17.jpg) Z-SLIDE ENTRY (0.9978 -> 1.000) ──
  // User: "last wala image scroll pe slide hoga Z trike se and image screen pe zoom hoke Z me slide hogi ek focus ke sath"
  const scene17Entrance = Math.min(Math.max((scrollProgress - 0.9978) / 0.003, 0), 1);
  // Z-axis push-in: starts far away (scale 0.72) and rushes forward into full focus
  const scene17ZEase = 1.0 - Math.pow(1.0 - scene17Entrance, 2.8); // fast deceleration = realistic inertia
  const scene17Scale = 0.72 + scene17ZEase * 0.30; // 0.72 -> 1.02 (Z depth to full-screen)
  // Vignette focus ring tightens as image zooms in: blurry at first, sharp at end
  const scene17FocusBlur = (1.0 - scene17ZEase) * 6.0; // 6px -> 0px as it lands
  const scene17Opacity = Math.pow(scene17Entrance, 0.5); // fades in fast initially then settles
  const scene17BreathCycle = scrollProgress * Math.PI * 52;
  const scene17BobY = Math.sin(scene17BreathCycle) * 1.2 * scene17ZEase;
  const scene17SwayX = Math.cos(scene17BreathCycle * 0.5) * 0.9 * scene17ZEase;

  const handleRegisterClick = () => {
    const regBtn = document.querySelector("[data-register-trigger]");
    if (regBtn) {
      regBtn.click();
    } else {
      window.location.hash = "register";
    }
  };

  const handleCalendarClick = () => {
    setCalendarAdded(true);

    // 1. Open Google Calendar with exact hackathon dates
    const title = encodeURIComponent("BUILDX: The Occult Hackathon 2026 // Code-A-Nova");
    const details = encodeURIComponent(
      "36-hour occult coding hackathon organized by Code-A-Nova! Decipher paranormal anomalies, build cutting-edge software, and compete for ₹50,000+ in bounties. Venue: Online."
    );
    const location = encodeURIComponent("Online // Organized by Code-A-Nova");
    // Start: Nov 1, 2026 09:00 AM IST (03:30 UTC) -> End: Nov 2, 2026 09:00 PM IST (15:30 UTC)
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261101T033000Z/20261102T153000Z&details=${details}&location=${location}`;
    window.open(gCalUrl, "_blank", "noopener,noreferrer");

    // 2. Download .ics for Apple Calendar / Outlook users
    try {
      const icsData = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Code-A-Nova//BUILDX Hackathon//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        "UID:buildx-hackathon-2026@code-a-nova.com",
        "DTSTAMP:20260910T000000Z",
        "DTSTART:20261101T033000Z",
        "DTEND:20261102T153000Z",
        "SUMMARY:BUILDX: The Occult Hackathon 2026 // Code-A-Nova",
        "DESCRIPTION:36-hour occult coding hackathon organized by Code-A-Nova. Solve paranormal anomalies, build breakthrough software, and compete for ₹50,000+ in bounties. Venue: Online.",
        "LOCATION:Online // Organized by Code-A-Nova",
        "STATUS:CONFIRMED",
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\r\n");

      const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", "BUILDX_Hackathon_Nov_1-2_2026.ics");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback if blob download is restricted
    }
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-black select-none will-change-transform ${
        isGateImpactActive
          ? "gate-breach-jhatka-active"
          : isImpactActive
          ? "paranormal-jhatka-active"
          : ""
      }`}
    >
      {/* ── Scene 01: Ghost Far in Corridor (home-01.png) ── */}
      {scene1Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-150 will-change-transform transform-gpu"
          style={{
            opacity: scene1Opacity,
            zIndex: 20,
          }}
        >
          <CinematicScene
            imageSrc={scene01.image}
            sceneId={scene01.id}
            scrollProgress={scrollProgress}
            cameraTransform={cameraTransform}
            onRevealComplete={() => setHeroRevealed(true)}
          />
        </div>
      )}

      {/* ── Scene 02: Open Iron Gate Corridor (home-02.png) ── */}
      {scene2Opacity > 0.005 && scrollProgress < 0.25 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-transparent transition-opacity duration-150 will-change-transform transform-gpu"
          style={{
            opacity: scene2Opacity,
            zIndex: 16,
            ...gateMaskStyle,
          }}
        >
          <div
            className="w-full h-full will-change-transform transform-gpu"
            style={{
              transform: `translate3d(${walkSwayX}px, ${walkBobY}px, 0) scale(${scene2Scale}) rotate(${walkTilt}deg)`,
              transformOrigin: "47.5% 50%",
            }}
          >
            <img
              src={scene02.image}
              alt="Open Iron Gate Vault Corridor"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      )}

      {/* ── Scene 03: Investigation Room (Straight Walk then Pivot Right to Board) ── */}
      {scene3Opacity > 0.005 && scrollProgress < 0.40 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu"
          style={{
            opacity: scene3Opacity,
            zIndex: scrollProgress >= 0.30 ? 18 : 14,
            perspective: "1200px",
          }}
        >
          <div
            className="w-full h-full will-change-transform transform-gpu"
            style={{
              transform: `perspective(1200px) translate3d(${roomPanX + walkSwayX}px, ${roomPanY + walkBobY}px, 0) scale(${scene3Scale}) rotateY(${roomRotateY}deg) rotateZ(${roomTilt + walkTilt}deg)`,
              transformOrigin: "50% 48%",
            }}
          >
            <img
              src={scene03.image}
              alt="Investigation Room with Evidence Board and Desk"
              className="w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.05]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      )}

      {/* ── Scene 06: The Crime Board // Front Blackboard Manifest (home-06.png) ── */}
      {scene6Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu"
          style={{
            opacity: scene6Opacity,
            zIndex: 22,
          }}
        >
          <div
            className="w-full h-full will-change-transform transform-gpu"
            style={{
              transform: `translate3d(${scene6PanX}px, ${scene6PanY}px, 0) scale(${scene6Scale}) rotate(${backTilt * 0.4}deg)`,
              transformOrigin: "50% 50%",
            }}
          >
            <img
              src={scene06.image}
              alt="Blackboard Front Crime Board"
              className="w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.05]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      )}

      {/* ── Scene 07: Subterranean Trapdoor Hatch // Pull-Back & Hatch Approach (home-07.png) ── */}
      {scene7Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu"
          style={{
            opacity: scene7Opacity,
            zIndex: 23,
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu"
            style={{
              transform: `translate3d(${scene7PanX}px, ${scene7PanY}px, 0) scale(${scene7Scale}) rotate(${scene7Tilt}deg)`,
              transformOrigin: scrollProgress >= 0.67 ? "67% 68%" : "24% 28%",
            }}
          >
            <img
              src={scene07.image}
              alt="Subterranean Trapdoor Hatch Room View"
              className="w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.06]"
              loading="eager"
              decoding="async"
            />

            {/* Left-Hand Blackboard: Written manifest in authentic 3D perspective on Scene 07 wall */}
            <BlackboardWritingEffect
              scrollProgress={scrollProgress}
              variant="mini-angled"
            />

            {/* Glowing Anomaly / Trapdoor Focus Target Reticle */}
            {hatchApproach > 0.1 && scrollProgress < 0.77 && (
              <div
                className="absolute pointer-events-none transition-opacity duration-300"
                style={{
                  left: "67%",
                  top: "68%",
                  transform: "translate(-50%, -50%)",
                  opacity: Math.min(hatchApproach * 1.5, 1) * (1 - Math.min(Math.max((scrollProgress - 0.75) / 0.02, 0), 1)),
                }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-emerald-400/80 animate-ping opacity-75" />
                  <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-dashed border-amber-400/60 animate-spin" style={{ animationDuration: "8s" }} />
                  <div className="absolute px-2 py-0.5 bg-black/80 border border-emerald-400 text-[10px] sm:text-xs text-emerald-300 font-mono tracking-widest whitespace-nowrap -bottom-6">
                    SUBTERRANEAN BREACH // ENTER
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hatch Approach Speed Lines / Subterranean Light Glow */}
          {hatchApproach > 0.05 && (
            <div
              className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-150"
              style={{
                opacity: Math.min(hatchApproach * 1.4, 0.85),
                background: `radial-gradient(ellipse at 67% 68%, rgba(16,185,129,0.25) 0%, transparent 60%), radial-gradient(circle at 67% 68%, transparent 35%, rgba(0,0,0,0.85) 100%)`,
              }}
            />
          )}
        </div>
      )}

      {/* ── Scene 08: Subterranean Staircase // The Ghost at the Gate (home-08.png) ── */}
      {scene8Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu"
          style={{
            opacity: scene8Opacity,
            zIndex: 25,
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu"
            style={{
              transform: `translate3d(${stairSwayX}px, ${stairBobY}px, 0) scale(${scene8Scale}) rotate(${stairTilt}deg)`,
              transformOrigin: "60% 46%", // Focuses directly on ghost's head and upper back
            }}
          >
            <img
              src={scene08.image}
              alt="The Ghost on Subterranean Staircase at Iron Gate"
              className="w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.08] contrast-[1.08]"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Optic Pulse / Supernatural Glitch as camera merges into ghost's head */}
          {stairProgress > 0.70 && (
            <div
              className="absolute inset-0 pointer-events-none mix-blend-color-dodge transition-opacity duration-100"
              style={{
                opacity: Math.min((stairProgress - 0.70) / 0.25, 1) * 0.9,
                background: `radial-gradient(circle at 60% 46%, rgba(220,38,38,0.4) 0%, rgba(245,158,11,0.2) 40%, rgba(0,0,0,0.9) 100%)`,
              }}
            />
          )}

          {/* Telemetry Warning: ENTITY ENCOUNTER */}
          <div
            className="absolute top-20 left-6 sm:left-12 px-3 py-1 bg-red-950/80 border border-red-500/80 rounded-xs font-mono text-[11px] sm:text-xs text-red-300 tracking-widest pointer-events-none transition-opacity duration-200"
            style={{
              opacity: stairProgress > 0.1 && stairProgress < 0.85 ? 1 : 0,
            }}
          >
            ⚠️ ENTITY PROXIMITY CRITICAL // MERGING VISION...
          </div>
        </div>
      )}

      {/* ── Scene 09: Ghost First-Person Eye View // Gripping Vault Gate (home-09.png) ── */}
      {scene9Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-150 will-change-transform transform-gpu"
          style={{
            opacity: scene9Opacity,
            zIndex: 26,
            perspective: "1000px",
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu"
            style={{
              transform: `translate3d(${rattleBars + gateShoveX}px, ${ghostBreathe}px, 0) scale(${gateShoveScale})`,
              transformOrigin: "85% 50%", // Hinged iron gate push point
            }}
          >
            <img
              src={scene09.image}
              alt="Ghost First-Person Eye View Gripping Vault Gate"
              className="w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.10] contrast-[1.08]"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* First-Person Ghost Eye View HUD: Blood-vessel peripheral vignette */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-multiply transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at 50% 50%, transparent 45%, rgba(80, 0, 0, 0.4) 75%, rgba(10, 0, 0, 0.95) 100%)`,
            }}
          />

          {/* Ghost Eye View Telemetry Banner */}
          <div
            className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 text-center pointer-events-none transition-opacity duration-300"
            style={{
              opacity: eyeProgress > 0.08 && breachProgress < 0.7 ? 1 : 0,
            }}
          >
            <div className="inline-block w-full max-w-md p-3 sm:p-3.5 rounded-xs bg-black/90 border border-red-500/90 shadow-[0_0_30px_rgba(220,38,38,0.55)] backdrop-blur-md">
              <div className="font-mono text-xs sm:text-sm text-red-400 font-bold tracking-widest flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span>
                  {breachProgress > 0.15
                    ? "💥 OPENING THE DOOR // BREAKING THE GATE"
                    : "🔓 UNLOCKING THE DOOR // OPENING THE GATE"}
                </span>
              </div>

              {/* Dynamic Unlocking Progress Bar */}
              <div className="w-full bg-stone-900 border border-red-900/60 rounded-full h-1.5 overflow-hidden my-2">
                <div
                  className="bg-gradient-to-r from-red-600 via-amber-500 to-emerald-400 h-full transition-all duration-75"
                  style={{ width: `${unlockPercent}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-stone-400 px-1">
                <span className="text-red-300 font-semibold">
                  {breachProgress > 0.15 ? "FORCING HEAVY GATE OPEN..." : "UNLOCKING ANCIENT LATCH..."}
                </span>
                <span className="font-bold text-amber-400">{unlockPercent}%</span>
              </div>

              <div className="font-chalk-detective text-xs sm:text-sm chalk-yellow mt-1.5">
                {breachProgress > 0.15
                  ? "Gate opening! Stepping forward into the inner crypt..."
                  : "Unlocking the door... Scroll down to push the gate open."}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gate Breach Impact Shockwave & Flash */}
      {(isGateImpactActive || (breachProgress > 0.05 && breachProgress < 0.95)) && (
        <div
          className="absolute inset-0 pointer-events-none z-35 mix-blend-screen transition-opacity duration-75"
          style={{
            background: `radial-gradient(ellipse at 85% 50%, rgba(255, 235, 180, 0.85) 0%, rgba(220, 38, 38, 0.5) 35%, transparent 75%)`,
            opacity: isGateImpactActive ? 0.95 : Math.sin(breachProgress * Math.PI),
          }}
        />
      )}

      {/* ── Scene 10: Crypt Cathedral // Entering & Walking Forward Down Red Carpet (home-10.png) ── */}
      {/* Direction: Mirrored scaleX(-1) so gate hand is on left and motion tracks from left to right */}
      {scene10Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu"
          style={{
            opacity: scene10Opacity,
            zIndex: 27,
            perspective: "1000px",
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu"
            style={{
              transform: `perspective(1000px) translate3d(${scene10PanX}px, ${scene10PanY}px, 0) scale(${scene10Scale}) rotateY(${turnRotateY}deg) rotateZ(${scene10Tilt}deg)`,
              transformOrigin: "50% 0%", // Top fixed, zoom expands downward and cuts off at bottom
            }}
          >
            <img
              src={scene10.image}
              alt="Crypt Cathedral with Red Carpet and Candles"
              className="w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]"
              style={{ transform: "scaleX(-1)" }}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Candlelight Warmth & Atmospheric Crypt Mist */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300"
            style={{
              background: `radial-gradient(ellipse at 50% 60%, rgba(245, 158, 11, 0.16) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)`,
            }}
          />

          {/* Telemetry Indicator during Red Carpet Walk */}
          {carpetWalkProgress > 0.08 && carpetWalkProgress < 0.95 && (
            <div
              className="absolute top-20 left-6 sm:left-12 px-3 py-1 bg-black/85 border border-amber-500/70 rounded-xs font-mono text-[11px] sm:text-xs text-amber-300 tracking-widest pointer-events-none transition-opacity duration-200"
            >
              ⚡ SANCTUM ENTERED // ADVANCING TOWARDS ALTAR
            </div>
          )}
        </div>
      )}

      {/* ── Scene 10-Map: Sanctum Blueprint Held in Hands // Verifying Location (home-10-map.png) ── */}
      {/* User: "ab ye map open hoga and dekhega ki location to shi h then further aage move krega" */}
      {scene10MapOpacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-200 will-change-transform transform-gpu"
          style={{
            opacity: scene10MapOpacity,
            zIndex: 28,
            perspective: "1000px",
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu flex items-center justify-center"
            style={{
              transform: `translate3d(0, ${mapPanY + mapBreathing}px, 0) scale(${mapScale})`,
              transformOrigin: "50% 0%", // Top fixed
            }}
          >
            <img
              src={scene10Map.image}
              alt="Sanctum Blueprint Held in Hands"
              className="w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.06]"
              loading="eager"
              decoding="async"
            />

            {/* Target Location Verification HUD ("dekhega ki location to shi h") */}
            <div
              className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 flex flex-col items-center gap-3"
              style={{
                opacity: mapVerifiedProgress > 0.12 ? 1 : 0,
                transform: `translate(-50%, calc(-50% + ${mapVerifiedProgress > 0.12 ? 0 : 18}px))`,
              }}
            >
              {/* Pulsing reticle centered on the blueprint rotunda */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-amber-400/50 rounded-full animate-ping opacity-35" />
                <div className="absolute inset-2 border border-dashed border-red-500/80 rounded-full animate-spin [animation-duration:9s]" />
                <div className="absolute inset-6 border border-amber-400/60 rounded-full" />
                <div className="w-3.5 h-3.5 bg-red-500 rounded-full shadow-[0_0_16px_#ef4444]" />
              </div>

              {/* Status Verification Pill */}
              <div className="px-4 sm:px-5 py-2 sm:py-2.5 bg-black/92 border border-amber-500/80 rounded-xs shadow-[0_0_35px_rgba(245,158,11,0.45)] backdrop-blur-md text-center max-w-sm">
                <div className="font-mono text-[11px] sm:text-xs text-amber-300 font-bold tracking-widest flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LOCATION VERIFIED // 100% BLUEPRINT MATCH</span>
                </div>
                <div className="font-chalk-detective text-xs sm:text-sm text-stone-200 mt-1">
                  "The chamber layout aligns. The sacrificial altar lies directly ahead."
                </div>
              </div>
            </div>
          </div>

          {/* Candlelight Atmosphere on Parchment */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at 50% 65%, rgba(245, 158, 11, 0.20) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)`,
            }}
          />
        </div>
      )}

      {/* ── Scene 11: The Sacrificial Altar // Advancing & Deep Zoom (home-11.png) ── */}
      {/* User: "aur zoom hoga" */}
      {scene11Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu"
          style={{
            opacity: scene11Opacity,
            zIndex: 29,
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu"
            style={{
              transform: `translate3d(${scene11PanX}px, ${scene11PanY}px, 0) scale(${scene11Scale})`,
              transformOrigin: "50% 0%", // Top fixed, zoom expands downward
            }}
          >
            <img
              src={scene11.image}
              alt="The Sacrificial Altar with Body in White Dress"
              className="w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Eerie Candle Flame Glow & Altar Mist */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.15) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.85) 100%)`,
            }}
          />
        </div>
      )}

      {/* ── Scene 12: Reaching for the Scroll in Dead Body's Hand (home-12.png) ── */}
      {scene12Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu"
          style={{
            opacity: scene12Opacity,
            zIndex: 30,
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu"
            style={{
              transform: `translate3d(${scene12PanX}px, ${scene12PanY}px, 0) scale(${scene12Scale})`,
              transformOrigin: "50% 0%", // Top fixed
            }}
          >
            <img
              src={scene12.image}
              alt="Reaching for Scroll in Hand on Altar"
              className="w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]"
              loading="eager"
              decoding="async"
            />
          </div>

          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.15) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.85) 100%)`,
            }}
          />
        </div>
      )}

      {/* ── Scene 13: Unrolling the Ancient Sanctum Scroll with Save The Date (home-13.png) ── */}
      {scene13Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-300 will-change-transform transform-gpu"
          style={{
            opacity: scene13Opacity,
            zIndex: 31,
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu flex items-center justify-center"
            style={{
              transform: `translate3d(0, ${scene13PanY}px, 0) scale(${scene13Scale})`,
              transformOrigin: "50% 0%", // Top fixed
            }}
          >
            <img
              src={scene13.image}
              alt="Unrolling the Sanctum Scroll"
              className="w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.08] contrast-[1.07]"
              loading="eager"
              decoding="async"
            />

            {/* Inscribed Parchment Calligraphy directly on Scene 13 Open Scroll (Tilted to match physical parchment angle in hands) */}
            <div
              className="absolute bottom-[6%] sm:bottom-[7%] md:bottom-[8%] left-1/2 w-[86%] max-w-md sm:max-w-lg md:max-w-xl px-3 py-1 flex flex-col items-center text-center select-none pointer-events-auto"
              style={{
                opacity: ink13RevealProgress,
                transform: `translate3d(-50%, 0, 0) perspective(900px) rotateX(8deg) rotateY(-1.5deg) rotateZ(2.2deg) scale(${0.96 + ink13RevealProgress * 0.04})`,
                transformOrigin: "50% 50%",
                transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
              }}
            >
              {/* Handwritten Occult Badge */}
              <div className="font-ink-cursive text-xs sm:text-sm text-[#0a0a0a] font-bold tracking-widest uppercase leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                ✦ OFFICIAL SANCTUM PROCLAMATION ✦
              </div>

              {/* Title in Deep Blood Red Calligraphy */}
              <h2 className="font-ink-cursive text-3xl sm:text-5xl md:text-6xl text-[#8b0000] font-black tracking-tight leading-none my-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                Save The Date
              </h2>

              <div className="font-ink-cursive text-sm sm:text-lg md:text-xl text-[#0a0a0a] font-bold leading-tight my-0.5">
                BUILDX: The Occult Innovation Hackathon
              </div>

              {/* Decorative Separator Flourish in Dark Red */}
              <div className="w-24 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#8b0000]/60 to-transparent my-0.5" />

              {/* The Date Banner in Blood Red Ink */}
              <div className="my-0.5">
                <div className="font-ink-cursive text-2xl sm:text-3xl md:text-4xl text-[#8b0000] font-black tracking-normal leading-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(139,0,0,0.3)]">
                  1st &amp; 2nd November 2026
                </div>
                <div className="font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold leading-tight">
                  ⚡ 36-Hour Challenge // ₹50,000+ Cash &amp; Bounties
                </div>
              </div>

              {/* Venue & Organizer in Handwritten Black Ink */}
              <div className="font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold leading-tight">
                Venue: Online &nbsp;✦&nbsp; Organized by Code-A-Nova
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2">
                <button
                  type="button"
                  onClick={handleCalendarClick}
                  className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#ffffff] border-2 border-[#8b0000] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                >
                  <span>📅</span>
                  <span>{calendarAdded ? "✓ MARKED IN CALENDAR!" : "MARK IN YOUR CALENDAR"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleRegisterClick}
                  className="px-3.5 sm:px-4.5 py-1 sm:py-1.5 bg-[#8b0000] hover:bg-[#a00000] text-[#ffffff] border-2 border-[#0a0a0a] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform"
                >
                  <span>⚡ REGISTER ➔</span>
                </button>
              </div>

              {calendarAdded && (
                <div className="mt-1 font-ink-cursive text-xs sm:text-sm text-[#0f5132] font-bold tracking-wide bg-[#d1e7dd]/90 px-2 py-0.5 rounded-xs border border-[#0f5132]/40 animate-pulse">
                  ✓ Added to Calendar! Nov 1-2, 2026 // Online // Code-A-Nova
                </div>
              )}
            </div>
          </div>

          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.16) 0%, transparent 60%), radial-gradient(circle at 50% 50%, transparent 38%, rgba(0,0,0,0.85) 100%)`,
            }}
          />
        </div>
      )}

      {/* ── Scene 14: Fully Opened Ancient Scroll // Save The Date Proclamation (home-14.png) ── */}
      {/* User: "ye page bhut km time ke liye aa rha h thoda sa shake ya koi effect dalke thoda time bdao and real wali feel lao" */}
      {scene14Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 will-change-transform transform-gpu"
          style={{
            opacity: scene14Opacity,
            zIndex: 33, // Foreground: scroll held in hands in front of the cathedral
            perspective: "1200px",
            background: cameraMoveProgress > 0.05 ? "transparent" : "#000000",
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu flex items-center justify-center"
            style={{
              transform: `translate3d(calc(${scene14PanX}% + ${reducedMotion ? 0 : handTremorX}px), ${scene14PanY + (reducedMotion ? 0 : handTremorY)}px, 0) scale(${scene14Scale}) rotateX(${scrollTiltX}deg) rotateY(${scrollYawY}deg) rotateZ(${(cameraRollZ * 0.8) + (reducedMotion ? 0 : handTremorRot)}deg)`,
              transformOrigin: "50% 10%",
              filter: reducedMotion ? "none" : (scene14Blur > 0.2 ? `blur(${scene14Blur}px)` : "none"),
            }}
          >
            {/* Subtle organic breathing & quivering hand tremor for realism */}
            <div className={`relative w-full h-full flex items-center justify-center ${reducedMotion ? "" : "handheld-parchment-tremor"}`}>
              <img
                src={scene14.image}
                alt="Fully Unrolled Ancient Scroll Proclamation"
                className="w-full h-full object-cover object-top pointer-events-none select-none brightness-[1.07] contrast-[1.06]"
                loading="eager"
                decoding="async"
              />

              {/* Inscribed Parchment Calligraphy & Save The Date Manifesto */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none px-4"
                style={{
                  opacity: inkRevealProgress * Math.max(1.0 - cameraMoveEase * 1.5, 0),
                  transform: `scale(${0.94 + inkRevealProgress * 0.06})`,
                  transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl px-4 sm:px-6 py-2 flex flex-col items-center text-center select-none pointer-events-auto mt-10 sm:mt-14 md:mt-16">
                  
                  {/* Vintage Occult Heading in Handwritten Black Ink */}
                  <div className="font-ink-cursive text-xs sm:text-sm md:text-base text-[#0a0a0a] font-bold tracking-widest uppercase leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                    ✦ OFFICIAL SANCTUM PROCLAMATION ✦
                  </div>

                  {/* Big Antique Headline: SAVE THE DATE in Handwritten Blood Red Ink */}
                  <h2 className={`font-ink-cursive text-4xl sm:text-5xl md:text-6xl text-[#8b0000] font-black tracking-tight my-0 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] ${reducedMotion ? "" : "blood-ink-living-glow"}`}>
                    Save The Date
                  </h2>

                  {/* Subtitle in Handwritten Black Ink */}
                  <div className="font-ink-cursive text-sm sm:text-lg md:text-xl text-[#0f0f0f] font-bold leading-tight my-0.5">
                    BUILDX: The Occult Innovation Hackathon
                  </div>

                  {/* Decorative Separator Flourish in Dark Red */}
                  <div className="w-28 sm:w-44 h-[1.5px] bg-gradient-to-r from-transparent via-[#8b0000]/60 to-transparent my-0.5 sm:my-1" />

                  {/* THE DATES - Weathered Blood-Red Handwriting on a single line */}
                  <div className="my-0.5">
                    <div className={`font-ink-cursive text-2xl sm:text-4xl md:text-5xl text-[#8b0000] font-black leading-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(139,0,0,0.3)] ${reducedMotion ? "" : "blood-ink-living-glow"}`}>
                      1st &amp; 2nd November 2026
                    </div>
                    <div className="font-ink-cursive text-xs sm:text-base md:text-lg text-[#111111] font-bold leading-tight">
                      ⚡ 36-Hour Challenge // ₹50,000+ Cash &amp; Bounties
                    </div>
                  </div>

                  {/* Venue & Organizer details in Handwritten Black Ink */}
                  <div className="font-ink-cursive text-xs sm:text-base md:text-lg text-[#0a0a0a] font-bold leading-tight my-0.5 max-w-lg">
                    Venue: Online &nbsp;✦&nbsp; Organized by Code-A-Nova
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2">
                    <button
                      type="button"
                      onClick={handleCalendarClick}
                      className="px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#ffffff] border-2 border-[#8b0000] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                    >
                      <span>📅</span>
                      <span>{calendarAdded ? "✓ MARKED IN CALENDAR!" : "MARK IN YOUR CALENDAR"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleRegisterClick}
                      className="px-3.5 sm:px-5 py-1.5 sm:py-2 bg-[#8b0000] hover:bg-[#a00000] text-[#ffffff] border-2 border-[#0a0a0a] rounded-xs font-ink-hand text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center gap-1.5 cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform"
                    >
                      <span>⚡ ENTER THE ARENA // REGISTER ➔</span>
                    </button>
                  </div>

                  {calendarAdded && (
                    <div className="mt-1 font-ink-cursive text-xs sm:text-sm text-[#0f5132] font-bold tracking-wide bg-[#d1e7dd]/90 px-3 py-0.5 rounded-xs border border-[#0f5132]/40 animate-pulse">
                      ✓ Google Calendar opened &amp; .ics file downloaded! Nov 1-2, 2026 // Online // Code-A-Nova
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Candlelight Atmosphere & Organic Flame Pulse on Parchment */}
          <div
            className={`absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-700 ${reducedMotion ? "" : "candle-flame-parchment-pulse"}`}
            style={{
              background: `radial-gradient(circle at 50% 60%, rgba(245, 158, 11, 0.20) 0%, transparent 65%), radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)`,
            }}
          />
        </div>
      )}

      {/* ── Scene 15: The Crypt Sanctorum // Cathedral of the Occult Rules (home-15.jpg) ── */}
      {scene15Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-black transition-opacity duration-500 will-change-transform transform-gpu"
          style={{
            opacity: scene15Opacity,
            zIndex: 32, // Background room layer behind the foreground scroll
            perspective: "1200px",
          }}
        >
          <div
            className="relative w-full h-full will-change-transform transform-gpu flex items-center justify-center"
            style={{
              transform: `translate3d(calc(${scene15PanX}% + ${videoSwayX}px), ${scene15PanY + videoBobY}px, 0) scale(${scene15Scale}) rotateX(${cameraPitchX}deg) rotateY(${cameraYawY}deg) rotateZ(${cameraRollZ + videoTilt}deg)`,
              transformOrigin: "78% 50%", // Deep optical zoom directly toward the rules wall
              filter: reducedMotion ? "none" : ((cameraMotionBlur + stepMotionBlur) > 0.3 ? `blur(${(cameraMotionBlur + stepMotionBlur) * 0.65}px)` : "none"),
            }}
          >
            <img
              src={scene15.image}
              alt="The Crypt Sanctorum & Cathedral of the Occult Rules"
              className="w-full h-full object-cover object-center pointer-events-none select-none brightness-[1.06] contrast-[1.06]"
              loading="eager"
              decoding="async"
            />

            {/* Steadicam Video Flare: Dynamic Candlelight Warmth in Cathedral */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-700"
              style={{
                background: `radial-gradient(circle at 78% 50%, rgba(245, 158, 11, ${0.20 * candleFlicker}) 0%, transparent 45%), radial-gradient(circle at 35% 42%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, transparent 45%, rgba(0,0,0,0.75) 100%)`,
              }}
            />

            {/* Volumetric Candle Flare Flash during fast camera stride */}
            {stepCandleFlash > 0.05 && !reducedMotion && (
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300"
                style={{
                  opacity: stepCandleFlash,
                  background: "radial-gradient(ellipse 70% 50% at 75% 50%, rgba(245, 158, 11, 0.45) 0%, rgba(220, 38, 38, 0.20) 45%, transparent 75%)",
                  filter: "blur(8px)",
                }}
              />
            )}

            {/* Anamorphic Lens Flare Sweep: Golden light streak flashing when camera pans past candles */}
            {cameraFlareOpacity > 0.01 && !reducedMotion && (
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-500"
                style={{
                  opacity: cameraFlareOpacity,
                  background: `linear-gradient(${105 + cameraMoveEase * 10}deg, transparent 20%, rgba(251, 191, 36, 0.15) 42%, rgba(245, 158, 11, 0.40) 50%, rgba(220, 38, 38, 0.25) 58%, transparent 80%)`,
                  transform: `translateX(${(cameraMoveEase - 0.5) * 80}%) scaleY(0.85)`,
                  filter: "blur(6px)",
                }}
              />
            )}

            {/* Camera Tracking Indicator at the Top */}
            <div
              className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-red-900/60 rounded-xs font-mono text-[10px] sm:text-xs text-stone-400 tracking-widest uppercase pointer-events-none transition-opacity duration-300"
              style={{
                opacity: Math.min(Math.max((scrollProgress - 0.989) / 0.003, 0), 1) * (1 - Math.min(Math.max((scrollProgress - 0.9935) / 0.0015, 0), 1)),
              }}
            >
              ✦ CAMERA PAN: CRYPT ALTAR ➔ OCCULT RULES SANCTUARY ✦
            </div>
          </div>
        </div>
      )}

      {/* ── Scene 16: Approaching the Sanctum Board (home-16.jpg) ── */}
      {/* Full body image, no top crop, smooth cross-dissolve into Scene 17 */}
      {scene16Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none will-change-transform transform-gpu"
          style={{
            opacity: scene16Opacity,
            zIndex: 34,
            backgroundColor: "#000",
          }}
        >
          {/* Outer overflow-visible wrapper: negative margins to prevent top-crop */}
          <div
            className="absolute will-change-transform transform-gpu"
            style={{
              inset: "-5% -4%",
              width: "108%",
              height: "110%",
              transform: `translate3d(calc(${scene16PivotPanX}px + ${rulesSwayX}px), ${rulesBobY}px, 0) scale(${scene16Scale}) rotateZ(${rulesTilt}deg)`,
              transformOrigin: "50% 50%",
            }}
          >
            <img
              src={scene16?.image}
              alt="Approaching the Sacred Rules & Regulations Sanctum Board"
              className="w-full h-full object-cover pointer-events-none select-none brightness-[1.06] contrast-[1.07]"
              style={{ objectPosition: "50% 30%" }}
              loading="eager"
              decoding="async"
            />

            {/* Cathedral Candlelight Radiance */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-screen"
              style={{
                background: `radial-gradient(circle at 75% 45%, rgba(245, 158, 11, ${0.22 * candleFlicker}) 0%, transparent 55%), radial-gradient(circle at 20% 60%, rgba(220, 38, 38, 0.16) 0%, transparent 50%)`,
              }}
            />
          </div>

          {/* Sanctum Telemetry Indicator */}
          <div
            className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-red-900/60 rounded-xs font-mono text-[10px] sm:text-xs text-stone-400 tracking-widest uppercase pointer-events-none"
            style={{
              opacity: Math.min(Math.max((scrollProgress - 0.9950) / 0.002, 0), 1) * (1 - Math.min(Math.max((scrollProgress - 0.9985) / 0.002, 0), 1)),
            }}
          >
            ✦ STEPPING FORWARD // SANCTUM PROCESS BOARD ✦
          </div>
        </div>
      )}

      {/* ── Scene 17: Full Page Rules & Regulations Board (home-17.jpg) ── */}
      {/* Z-SLIDE entry: zooms in from far depth (scale 0.72) into full focus, with lens blur snap */}
      {scene17Opacity > 0.005 && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none will-change-transform transform-gpu"
          style={{
            opacity: scene17Opacity,
            zIndex: 35,
            backgroundColor: "#000",
          }}
        >
          {/* Z-depth outer image wrapper — extends beyond viewport to prevent crop during zoom */}
          <div
            className="absolute will-change-transform transform-gpu"
            style={{
              inset: "-6% -5%",
              width: "110%",
              height: "112%",
              transform: `translate3d(${scene17SwayX}px, ${scene17BobY}px, 0) scale(${scene17Scale})`,
              transformOrigin: "50% 50%",
              filter: scene17FocusBlur > 0.2 ? `blur(${scene17FocusBlur}px)` : "none",
            }}
          >
            <img
              src={scene17?.image}
              alt="Full Page Sacred Rules & Regulations Board - BUILDX Hackathon Process"
              className="w-full h-full object-cover pointer-events-none select-none brightness-[1.05] contrast-[1.06]"
              style={{ objectPosition: "50% 30%" }}
              loading="eager"
              decoding="async"
            />

            {/* Dual Sconce Candlelight Glow */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-screen"
              style={{
                background: `radial-gradient(circle at 10% 50%, rgba(245, 158, 11, ${0.18 * candleFlicker}) 0%, transparent 40%), radial-gradient(circle at 90% 50%, rgba(245, 158, 11, ${0.18 * candleFlicker}) 0%, transparent 40%)`,
              }}
            />
          </div>

          {/* Focus vignette: tightens as image lands into view */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, rgba(0,0,0,${0.85 * (1.0 - scene17ZEase)}) 100%)`,
            }}
          />
          {/* Top Telemetry Header */}
          <div
            className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 px-4 py-1 bg-black/85 border border-[#D01820]/70 rounded-xs font-mono text-[10px] sm:text-xs text-[#e5e5e5] tracking-widest uppercase pointer-events-none transition-opacity duration-300 shadow-[0_0_20px_rgba(208,24,32,0.3)]"
            style={{
              opacity: Math.min(Math.max((scrollProgress - 0.9988) / 0.0015, 0), 1),
            }}
          >
            ✦ OFFICIAL HACKATHON DECREE // COMPLETE PROCESS RULES ✦
          </div>

          {/* Interactive Bottom Control Dock */}
          <div
            className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 w-[94%] max-w-3xl p-3 sm:p-4 rounded-xs bg-black/90 backdrop-blur-md border border-[#D01820]/70 shadow-[0_0_35px_rgba(0,0,0,0.95)] pointer-events-auto select-none transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{
              opacity: Math.min(Math.max((scrollProgress - 0.9990) / 0.001, 0), 1),
              transform: `translate3d(-50%, ${(1.0 - Math.min(Math.max((scrollProgress - 0.9990) / 0.001, 0), 1)) * 14}px, 0)`,
            }}
          >
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2 mb-0.5 font-mono text-[10px] sm:text-xs text-[#D01820] font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#D01820] animate-ping" />
                <span>PHASES 01–07 SEALED // READY TO COMMENCE</span>
              </div>
              <div className="font-mono text-[10px] sm:text-xs text-stone-300 tracking-wide">
                Online 36-Hr Sprint • ₹50,000+ Bounties • Entry ₹49/team • Nov 1-2, 2026
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("case-evidence-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3 sm:px-4 py-1.5 bg-[#D01820] hover:bg-[#b0141b] text-white font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase rounded-xs shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                CASE FILES ➔
              </button>
              <button
                type="button"
                onClick={handleRegisterClick}
                className="px-3 sm:px-4 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase rounded-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                ⚡ REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Atmospheric Fog, Vignette & Film Grain */}
      <AtmosphericOverlay
        scrollProgress={scrollProgress}
        isImpactActive={isImpactActive || isGateImpactActive}
        gateProximity={scrollProgress >= 0.76 ? 1.0 : hatchApproach}
      />

      {/* Homepage Hero Data (Visible only in Scene 01) */}
      {scene1Opacity > 0.01 && (
        <CinematicHeroData
          scrollProgress={scrollProgress}
          revealed={heroRevealed}
        />
      )}

      {/* Investigation Chamber Case Dossier (Visible in Scene 03 during straight walk) */}
      {scrollProgress >= 0.18 && scrollProgress <= 0.37 && (
        <CinematicRoomDossier scrollProgress={scrollProgress} />
      )}

      {/* Blackboard Chalk Writing Effect on Scene 06 (Full Front interactive writing - ends cleanly before Scene 07) */}
      {scrollProgress >= 0.36 && scrollProgress <= 0.60 && (
        <BlackboardWritingEffect
          scrollProgress={scrollProgress}
          variant="front"
        />
      )}

      {/* First Shock: Ghost Corridor Paranormal Jhatka */}
      <ImpactEffect
        isActive={isImpactActive}
        reducedMotion={reducedMotion}
        intensity={1.4}
      />

      {/* Second Shock: Violent Gate Opening Shove Jhatka */}
      <ImpactEffect
        isActive={isGateImpactActive}
        reducedMotion={reducedMotion}
        intensity={2.2}
      />

      {/* ── Persistent Asset Cache & GPU Texture Warm-Up Strip (Ensures all 14 scene images load in one go) ── */}
      <div className="sr-only opacity-0 pointer-events-none select-none" aria-hidden="true">
        {scenes.map((s) => (
          <img
            key={s.id}
            src={s.image}
            alt=""
            loading="eager"
            decoding="sync"
          />
        ))}
      </div>
    </div>
  );
});

export default CinematicStoryEngine;
