/**
 * sceneVoiceEngine.js
 * High-performance, Scene-Aware Voice / Narrative Audio Engine for BUILDX Hackathon.
 *
 * Core Capabilities:
 * - Exact Audio Clipping: Plays strictly between `start` and `end` seconds (never full file).
 * - Single-Voice Guarantee: Never allows two voices to play simultaneously.
 * - Scene Awareness: Plays voice when scene enters, stops cleanly on transition.
 * - Duplicate Guard: Scene voice plays once per activation session; no stutter on scroll jitter.
 * - Ambient Ducking: Smoothly ducks background horror drone while narrative speaks.
 * - Autoplay Unlocking: Waits for user gesture if blocked, then auto-resumes seamlessly.
 * - Sound Toggle Integration: Stops immediately when muted, restores for current scene when unmuted.
 * - Debug Observer: Real-time telemetry for ?storyDebug=true HUD.
 */

import { sceneAudioConfig } from "../config/audioConfig";
import { cinematicAudio } from "./cinematicAudio";

class SceneVoiceEngine {
  constructor() {
    this.currentAudio = null;
    this.currentSceneId = null;
    this.lastPlayedSceneId = null;
    this.activeClipSessionId = 0;
    this.isMuted = false;
    this.isAutoplayBlocked = false;
    this.isDucked = false;
    this.triggerTimeoutId = null;
    this.rafId = null;

    // Scroll-activity tracking (scroll stop -> voice fade-out & pause, scroll resume -> voice fade-in)
    this.isPausedByScrollStop = false;
    this.isFadingOut = false;
    this.isFadingToStop = false;
    this.scrollIdleTimeout = null;
    this.scrollIdleDelay = 160; // ms of inactivity after scroll before voice begins smooth fade-out
    this.fadeRafId = null;
    this.isClipFinished = false;

    // Real-time telemetry state for debug HUD
    this.debugState = {
      currentScene: "none",
      audioFile: "none",
      clipStart: 0,
      clipEnd: 0,
      currentTime: 0,
      playbackStatus: "IDLE", // "IDLE" | "PLAYING" | "FADING IN" | "FADING OUT" | "PAUSED" | "STOPPED" | "MUTED" | "BLOCKED"
      volume: 20,
      isMuted: false,
    };

    this.debugListeners = new Set();
    this.hasUnlockedGesture = false;

    this.bindAutoplayUnlock();
  }

  /**
   * Set initial scene metadata for debug HUD without auto-playing sound.
   */
  setInitialScene(sceneId = "scene-01") {
    this.debugState.currentScene = sceneId;
    const config = sceneAudioConfig[sceneId];
    if (config) {
      this.debugState.audioFile = config.file ? config.file.split("/").pop() : "none";
      this.debugState.clipStart = Number((config.clip?.start ?? 0).toFixed(2));
      this.debugState.clipEnd = Number((config.clip?.end ?? 10).toFixed(2));
      this.debugState.volume = Math.round((config.volume ?? 0.50) * 100);
      this.debugState.playbackStatus = "IDLE (SCROLL TO PLAY)";
    }
    this.notifyDebug();
  }

  /**
   * Listen for first user interaction (scroll, click, keydown, touch) to unlock audio.
   */
  bindAutoplayUnlock() {
    if (typeof window === "undefined") return;

    const onFirstGesture = () => {
      this.hasUnlockedGesture = true;
      this.isAutoplayBlocked = false;

      // Unlock ambient audio if initialized
      cinematicAudio.init();

      // If a scene voice was waiting to play, trigger it now
      if (this.pendingSceneId && this.pendingSceneId === this.currentSceneId && !this.isMuted) {
        const sceneId = this.pendingSceneId;
        this.pendingSceneId = null;
        this.playSceneVoice(sceneId, true);
      }

      window.removeEventListener("scroll", onFirstGesture);
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
    };

    window.addEventListener("scroll", onFirstGesture, { passive: true, once: true });
    window.addEventListener("pointerdown", onFirstGesture, { passive: true, once: true });
    window.addEventListener("keydown", onFirstGesture, { passive: true, once: true });
    window.addEventListener("touchstart", onFirstGesture, { passive: true, once: true });
  }

  /**
   * Subscribe to real-time audio debug updates (used by ?storyDebug=true HUD).
   */
  subscribeDebug(callback) {
    this.debugListeners.add(callback);
    callback(this.getDebugState());
    return () => {
      this.debugListeners.delete(callback);
    };
  }

  notifyDebug() {
    if (this.debugListeners.size === 0) return;
    const state = this.getDebugState();
    this.debugListeners.forEach((listener) => {
      try {
        listener(state);
      } catch (err) {
        console.warn("Debug listener error:", err);
      }
    });
  }

  getDebugState() {
    return {
      ...this.debugState,
      isMuted: this.isMuted,
      isAutoplayBlocked: this.isAutoplayBlocked,
      ambientVolume: cinematicAudio.ambientVolume,
    };
  }

  /**
   * Reusable High-Precision Audio Clip Player:
   * Only plays from `start` to `end`. Never plays full file.
   */
  playAudioClip({
    file,
    start = 0,
    end = 0,
    volume = 0.50,
    duckAmbient = false,
    duckVolume = 0.04,
    fadeIn = 0,
    fadeOut = 0,
    loop = true,
    onEnd = null,
  }) {
    // 1. If muted, do not start audio
    if (this.isMuted) {
      this.debugState.playbackStatus = "MUTED";
      this.notifyDebug();
      return;
    }

    // Enforce safe master volume ceiling
    const targetVolume = Math.min(Math.max(0, volume), 0.85);

    // 2. Stop any existing clip immediately
    this.stopActiveClip();

    const sessionId = ++this.activeClipSessionId;

    // 3. Create audio instance
    const audio = new Audio(file);
    audio.preload = "auto";
    audio.loop = Boolean(loop);
    audio.volume = 0; // Start at 0 to avoid any seek blip
    this.currentAudio = audio;
    this.currentAudioFile = file;
    this.activeClipStart = start;
    this.activeClipEnd = end;
    this.activeClipLoop = Boolean(loop);

    this.debugState.audioFile = file.split("/").pop();
    this.debugState.clipStart = Number(start.toFixed(2));
    this.debugState.clipEnd = Number(end > 0 ? end.toFixed(2) : 0);
    this.debugState.currentTime = Number(start.toFixed(2));
    this.debugState.volume = Math.round(targetVolume * 100);
    this.debugState.playbackStatus = "LOADING";
    this.notifyDebug();

    let hasStartedPlaying = false;
    let fadeOutStarted = false;

    // Helper to start the active playback loop once seeked
    const beginPlayback = async () => {
      if (sessionId !== this.activeClipSessionId) return;

      try {
        await audio.play();

        // Autoplay succeeded
        this.isAutoplayBlocked = false;
        hasStartedPlaying = true;
        this.debugState.playbackStatus = "PLAYING";
        this.notifyDebug();

        // Smooth fade-in on initial play
        const initialFadeInMs = fadeIn > 0 ? fadeIn * 1000 : 350;
        this.debugState.playbackStatus = "PLAYING (FADING IN)";
        this.notifyDebug();
        this.fadeVolume(audio, 0, targetVolume, initialFadeInMs, sessionId, () => {
          this.debugState.playbackStatus = "PLAYING";
          this.notifyDebug();
        });

        // Duck ambient horror drone smoothly while narrative speaks
        if (duckAmbient) {
          this.isDucked = true;
          cinematicAudio.duck(duckVolume, initialFadeInMs);
        }

        // Start High-Precision RAF Monitor for exact end cut-off
        const monitorClip = () => {
          if (sessionId !== this.activeClipSessionId || !this.currentAudio) return;

          if (!audio.paused) {
            const curr = audio.currentTime;
            this.debugState.currentTime = Number(curr.toFixed(2));

            // Fade out shortly before `end` if configured and end > 0
            if (end > 0 && fadeOut > 0 && !fadeOutStarted && curr >= end - fadeOut && curr < end) {
              fadeOutStarted = true;
              this.fadeVolume(audio, audio.volume, 0, fadeOut * 1000, sessionId);
            }

            // Exact stop condition: strictly at activeClipEnd if > 0, or end of stream if not looping
            const limitEnd = this.activeClipEnd;
            if ((limitEnd > 0 && curr >= limitEnd) || (!this.activeClipLoop && audio.ended)) {
              if (this.activeClipLoop && limitEnd > 0) {
                try {
                  audio.currentTime = this.activeClipStart;
                } catch {}
              } else {
                this.isClipFinished = true;
                this.stopActiveClip();
                if (onEnd) onEnd();
                return;
              }
            }

            this.notifyDebug();
          }

          this.rafId = requestAnimationFrame(monitorClip);
        };

        this.rafId = requestAnimationFrame(monitorClip);
      } catch (err) {
        if (err.name === "NotAllowedError") {
          this.isAutoplayBlocked = true;
          this.debugState.playbackStatus = "BLOCKED";
          this.notifyDebug();
        } else {
          console.warn("Audio clip playback notice for", file, err);
          this.debugState.playbackStatus = "ERROR";
          this.notifyDebug();
        }
      }
    };

    // 4. Set start seek point before playback
    const onMetadataLoaded = () => {
      if (sessionId !== this.activeClipSessionId) return;

      if (start > 0) {
        try {
          audio.currentTime = start;
        } catch {
          // If seek before load is not yet ready, seek on canplay
        }
      }

      const onSeekReady = () => {
        audio.removeEventListener("seeked", onSeekReady);
        audio.removeEventListener("canplay", onSeekReady);
        if (sessionId === this.activeClipSessionId && !hasStartedPlaying) {
          beginPlayback();
        }
      };

      if (Math.abs(audio.currentTime - start) <= 0.15 || start === 0) {
        beginPlayback();
      } else {
        audio.addEventListener("seeked", onSeekReady, { once: true });
        audio.addEventListener("canplay", onSeekReady, { once: true });
      }
    };

    if (audio.readyState >= 1) {
      onMetadataLoaded();
    } else {
      audio.addEventListener("loadedmetadata", onMetadataLoaded, { once: true });
      audio.addEventListener("canplay", onMetadataLoaded, { once: true });
    }

    // Safety fallback if file is missing / doesn't load
    audio.addEventListener(
      "error",
      () => {
        if (sessionId === this.activeClipSessionId) {
          this.debugState.playbackStatus = "UNAVAILABLE";
          this.notifyDebug();
          if (this.isDucked) {
            this.isDucked = false;
            cinematicAudio.restore();
          }
        }
      },
      { once: true }
    );
  }

  /**
   * S-Curve volume fade helper for cinematic, click-free fadeIn / fadeOut.
   */
  fadeVolume(audio, startVol, targetVol, durationMs, sessionId, onComplete = null) {
    if (this.fadeRafId) {
      cancelAnimationFrame(this.fadeRafId);
      this.fadeRafId = null;
    }

    if (!audio || durationMs <= 0) {
      if (audio) {
        try {
          audio.volume = targetVol;
        } catch {}
      }
      if (onComplete) onComplete();
      return;
    }

    const startTime = performance.now();
    const step = (now) => {
      if (sessionId !== this.activeClipSessionId || !audio) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Cosine S-curve: gentle ease-in and ease-out
      const smoothProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
      const current = startVol + (targetVol - startVol) * smoothProgress;

      try {
        audio.volume = Math.max(0, Math.min(1, current));
      } catch {}

      if (progress < 1) {
        this.fadeRafId = requestAnimationFrame(step);
      } else {
        this.fadeRafId = null;
        if (onComplete) onComplete();
      }
    };

    this.fadeRafId = requestAnimationFrame(step);
  }

  /**
   * Stop the active voice clip cleanly, restore ambient drone, and release state.
   */
  stopActiveClip() {
    this.activeClipSessionId++; // Invalidate active RAF loop & callbacks

    if (this.triggerTimeoutId) {
      clearTimeout(this.triggerTimeoutId);
      this.triggerTimeoutId = null;
    }

    if (this.scrollIdleTimeout) {
      clearTimeout(this.scrollIdleTimeout);
      this.scrollIdleTimeout = null;
    }

    if (this.fadeRafId) {
      cancelAnimationFrame(this.fadeRafId);
      this.fadeRafId = null;
    }

    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.src = "";
        this.currentAudio.load();
      } catch {}
      this.currentAudio = null;
    }

    this.isPausedByScrollStop = false;
    this.isFadingOut = false;
    this.isFadingToStop = false;
    this.currentAudioFile = null;

    if (this.isDucked) {
      this.isDucked = false;
      cinematicAudio.restore();
    }

    this.debugState.playbackStatus = "STOPPED";
    this.notifyDebug();
  }

  /**
   * Smoothly fade out the active voice clip over durationMs, then cleanly stop and unload.
   * Prevents abrupt audio cut-offs when transitioning out of scenes (e.g. Scene 01 -> Scene 02+).
   */
  fadeOutAndStop(durationMs = 550) {
    if (!this.currentAudio) return;

    // If already in middle of fading out to stop, let the active fade complete smoothly
    if (this.isFadingOut && this.isFadingToStop) return;

    this.isFadingOut = true;
    this.isFadingToStop = true;
    const audio = this.currentAudio;
    const sessionId = this.activeClipSessionId;

    this.debugState.playbackStatus = "FADING OUT...";
    this.notifyDebug();

    if (this.isDucked) {
      this.isDucked = false;
      cinematicAudio.restore(durationMs);
    }

    this.fadeVolume(audio, audio.volume, 0, durationMs, sessionId, () => {
      this.isFadingToStop = false;
      if (sessionId === this.activeClipSessionId) {
        this.stopActiveClip();
      } else {
        try {
          audio.pause();
          audio.currentTime = 0;
          audio.removeAttribute("src");
          audio.src = "";
          audio.load();
        } catch {}
      }
    });
  }

  /**
   * User Scroll Activity Hook:
   * Called on every active scroll/wheel/touch gesture.
   * - Starts voice with a smooth fade-in if not yet playing.
   * - Smoothly unpauses and fades in if it was paused or fading out.
   * - When user stops scrolling, initiates a smooth fade-out to 0 before pausing.
   */
  onUserScrollActivity(sceneId) {
    if (this.isMuted) return;

    const targetScene = sceneId || this.currentSceneId || "scene-01";
    const config = sceneAudioConfig[targetScene] || sceneAudioConfig.global;
    const targetVolume = Math.min(config?.volume ?? 0.50, 0.85);

    // If current scene has NO voice clip configured (e.g. scene-02, scene-03):
    if (!config || !config.file) {
      // If previous scene audio is still playing and not yet fading to stop, fade it out smoothly!
      if (this.currentAudio && !this.isFadingToStop) {
        this.fadeOutAndStop(550);
      }
      return;
    }

    // Since this scene has an active audio file, cancel any scene-exit stop fade
    this.isFadingToStop = false;

    // 1. If voice clip is not yet playing and has not completed, begin playback
    if (!this.currentAudio && !this.isClipFinished) {
      this.currentSceneId = targetScene;
      this.lastPlayedSceneId = targetScene;
      this.playSceneVoice(targetScene, true);
    }
    // 2. If voice was paused or in middle of fading out due to scroll stop, smoothly fade back in!
    else if (this.currentAudio && !this.isClipFinished) {
      const audio = this.currentAudio;
      const wasPaused = this.isPausedByScrollStop || audio.paused;
      const wasFadingOut = this.isFadingOut;

      if (wasPaused || wasFadingOut) {
        this.isPausedByScrollStop = false;
        this.isFadingOut = false;

        if (audio.paused) {
          audio.play().catch((err) => {
            if (err.name === "NotAllowedError") {
              this.isAutoplayBlocked = true;
              this.debugState.playbackStatus = "BLOCKED";
              this.notifyDebug();
            }
          });
        }

        // Smoothly fade in to target volume over 300ms
        this.debugState.playbackStatus = "PLAYING (FADING IN)";
        this.notifyDebug();
        this.fadeVolume(audio, audio.volume, targetVolume, 300, this.activeClipSessionId, () => {
          this.debugState.playbackStatus = "PLAYING";
          this.notifyDebug();
        });

        if (config?.duckAmbient !== false) {
          this.isDucked = true;
          cinematicAudio.duck(config?.duckVolume ?? 0.04, 300);
        }
      }
    }

    // 3. Reset the idle timeout: if scrolling stops for 160ms, begin smooth fade-out!
    // User: "rone wali aawaj scroll pe mt krakho" -> continuous scenes do NOT pause on scroll stop!
    if (config?.continuous || config?.ignoreScrollIdle) {
      if (this.scrollIdleTimeout) {
        clearTimeout(this.scrollIdleTimeout);
        this.scrollIdleTimeout = null;
      }
    } else {
      if (this.scrollIdleTimeout) {
        clearTimeout(this.scrollIdleTimeout);
      }
      this.scrollIdleTimeout = setTimeout(() => {
        this.handleScrollStopped();
      }, this.scrollIdleDelay);
    }
  }

  /**
   * Called when user stops scrolling: smoothly fades out voice audio and restores ambient drone.
   */
  handleScrollStopped() {
    if (!this.currentAudio || this.isClipFinished || this.isPausedByScrollStop || this.isFadingOut) return;

    // Continuous audio scenes (e.g. ghost crying at the gate) continue playing without stopping!
    const config = sceneAudioConfig[this.currentSceneId] || sceneAudioConfig.global;
    if (config?.continuous || config?.ignoreScrollIdle) {
      return;
    }

    this.isFadingOut = true;
    const audio = this.currentAudio;
    const sessionId = this.activeClipSessionId;
    const fadeOutDuration = 360; // 360ms gentle cinematic fade out

    this.debugState.playbackStatus = "FADING OUT...";
    this.notifyDebug();

    // Smoothly duck ambient back to normal in sync with voice fade-out
    if (this.isDucked) {
      this.isDucked = false;
      cinematicAudio.restore(fadeOutDuration);
    }

    // Smooth fade out to 0, then cleanly pause
    this.fadeVolume(audio, audio.volume, 0, fadeOutDuration, sessionId, () => {
      if (this.activeClipSessionId === sessionId && this.isFadingOut && audio) {
        try {
          audio.pause();
        } catch {}
        this.isFadingOut = false;
        this.isPausedByScrollStop = true;
        this.debugState.playbackStatus = "PAUSED (SCROLL STOPPED)";
        this.notifyDebug();
      }
    });
  }

  /**
   * Scene Entry Listener:
   * Called by CinematicStoryEngine when `scrollProgress` lands in a scene.
   * Employs strict hysteresis guards to avoid restarting audio on tiny scroll jitter.
   */
  onSceneActive(sceneId) {
    if (!sceneId) return;

    this.debugState.currentScene = sceneId;

    // 1. If still within the same active scene, DO NOT re-trigger
    if (sceneId === this.currentSceneId) {
      return;
    }

    // 2. User has genuinely transitioned to a different scene
    this.currentSceneId = sceneId;
    this.isClipFinished = false;

    const nextConfig = sceneAudioConfig[sceneId] || sceneAudioConfig.global;

    // If new scene has NO voice config:
    if (!nextConfig || !nextConfig.file) {
      this.lastPlayedSceneId = sceneId;
      this.debugState.audioFile = "none";
      this.debugState.playbackStatus = "FADING OUT (SCENE EXIT)";
      this.notifyDebug();

      // Smoothly fade out previous voice instead of abruptly cutting off!
      if (this.currentAudio) {
        this.fadeOutAndStop(550);
      }
      return;
    }

    // If next scene uses the same continuous audio file (e.g. women-crying.mp3 across Scene 08 -> 14):
    // DO NOT interrupt, stop, or restart playback! Seamlessly adapt to scene-specific clip range and volume!
    if (this.currentAudio && this.currentAudioFile === nextConfig.file) {
      this.lastPlayedSceneId = sceneId;
      if (nextConfig.clip?.start !== undefined) {
        this.activeClipStart = nextConfig.clip.start;
        this.activeClipEnd = nextConfig.clip.end ?? 0;
        this.activeClipLoop = nextConfig.loop ?? true;
        this.debugState.clipStart = Number(this.activeClipStart.toFixed(2));
        this.debugState.clipEnd = Number(this.activeClipEnd > 0 ? this.activeClipEnd.toFixed(2) : 0);
        this.notifyDebug();

        const curr = this.currentAudio.currentTime;
        if (curr < this.activeClipStart || (this.activeClipEnd > 0 && curr >= this.activeClipEnd)) {
          try {
            this.currentAudio.currentTime = this.activeClipStart;
          } catch {}
        }
      }

      // Smoothly adapt volume to the new scene acoustics
      if (nextConfig?.volume !== undefined && !this.isMuted) {
        const targetVol = Math.min(nextConfig.volume, 0.85);
        this.fadeVolume(this.currentAudio, this.currentAudio.volume, targetVol, 500, this.activeClipSessionId);
      }
      return;
    }

    // If new scene has a genuinely different audio file:
    // Fade out previous audio over 250ms, then begin new scene voice
    if (this.currentAudio) {
      this.fadeOutAndStop(250);
    }

    // If sound is muted, update debug and do nothing
    if (this.isMuted) {
      this.debugState.playbackStatus = "MUTED";
      this.notifyDebug();
      return;
    }

    // 3. Prevent duplicate playback: only play if entering a new scene
    if (sceneId !== this.lastPlayedSceneId) {
      this.lastPlayedSceneId = sceneId;
      this.playSceneVoice(sceneId);
    }
  }

  /**
   * Play the configured audio clip for the given scene.
   */
  playSceneVoice(sceneId, forceImmediate = false) {
    const config = sceneAudioConfig[sceneId] || sceneAudioConfig.global;
    if (!config || !config.file) {
      this.debugState.audioFile = "none";
      this.debugState.playbackStatus = "NO_VOICE_CONFIG";
      this.notifyDebug();
      return;
    }

    const startClip = () => {
      if (this.currentSceneId !== sceneId) return; // User already scrolled away

      this.playAudioClip({
        file: config.file,
        start: config.clip?.start ?? 0,
        end: config.clip?.end ?? 0,
        volume: Math.min(config.volume ?? 0.50, 0.85),
        duckAmbient: false,
        duckVolume: 0.04,
        fadeIn: config.fadeIn ?? 0.35,
        fadeOut: config.fadeOut ?? 0.40,
        loop: config.loop ?? true,
        onEnd: () => {
          this.debugState.playbackStatus = "STOPPED";
          this.notifyDebug();
        },
      });
    };

    const delay = forceImmediate ? 0 : (config.triggerDelayMs || 0);
    if (delay > 0) {
      this.triggerTimeoutId = setTimeout(startClip, delay);
    } else {
      startClip();
    }
  }

  /**
   * Master Sound Toggle:
   * SOUND ON / SOUND OFF
   */
  toggleMute() {
    this.isMuted = !this.isMuted;
    this.debugState.isMuted = this.isMuted;

    // Sync with ambient audio
    cinematicAudio.isMuted = this.isMuted;
    if (this.isMuted) {
      // Muted: stop voice immediately
      this.stopActiveClip();
      if (cinematicAudio.ambientAudio) {
        cinematicAudio.ambientAudio.pause();
      }
      this.debugState.playbackStatus = "MUTED";
    } else {
      // Unmuted: resume ambient & play current scene voice if available
      if (cinematicAudio.ambientAudio) {
        cinematicAudio.ambientAudio.play().catch(() => {});
      }
      if (this.currentSceneId) {
        this.lastPlayedSceneId = null; // Allow current scene to play
        this.playSceneVoice(this.currentSceneId, true);
      }
    }

    this.notifyDebug();
    return this.isMuted;
  }

  /**
   * Allow manual replaying of current scene's clip (e.g. from debug HUD).
   */
  replayCurrentScene() {
    if (this.currentSceneId) {
      this.lastPlayedSceneId = null;
      this.playSceneVoice(this.currentSceneId, true);
    }
  }
}

export const sceneVoiceEngine = new SceneVoiceEngine();
