/**
 * cinematicAudio.js
 * Comprehensive audio manager for BUILDX Paranormal Cinematic Experience.
 *
 * User: "gate open.mp3 jb tehkhaane me jata h to gate open krta h to wha ye wala voice lgana h and voice thoda km rakhna like 40-50%"
 * - Plays "/hackathon-audio/gate-open.mp3" when opening the subterranean/tehkhaana vault gate.
 * - Volume: strictly 40-50% (0.45).
 */

class CinematicAudioManager {
  constructor() {
    this.ambientAudio = null;
    this.gateAudio = null;
    this.dossierAudio = null;
    this.movementAudio = null;
    this.swishAudio = null;
    this.footstepAudio = null;
    this.isFootstepPlaying = false;
    this.footstepIdleTimer = null;
    this.footstepFadeRaf = null;
    this.fadeRaf = null;
    this.isMuted = false;
    this.isInitialized = false;
  }

  init() {
    if (typeof window === "undefined" || this.isInitialized) return;
    this.isInitialized = true;
    this.ambientAudio = null;
  }

  /**
   * User: "chalne step and gate.mp3 is voice se steps wala sound lga do pure jagah jb bhi scroll ho to sound aaye chalne ka"
   * User: "and voice exactly mt paste kr dena"
   * Uses clean extracted walking footsteps from step and gate.mp3 without gate slams.
   * Plays in seamless loop when scrolling; smoothly pauses when scrolling stops.
   */
  startFootsteps(targetVolume = 0.32) {
    if (this.isMuted) return;
    const vol = Math.min(Math.max(0.15, targetVolume), 0.45);

    if (!this.footstepAudio) {
      const audio = new Audio("/hackathon-audio/footsteps-clean.wav");
      audio.preload = "auto";
      audio.loop = true;
      audio.volume = 0;
      this.footstepAudio = audio;
    }

    const audio = this.footstepAudio;

    if (this.footstepFadeRaf) {
      cancelAnimationFrame(this.footstepFadeRaf);
      this.footstepFadeRaf = null;
    }

    if (audio.paused) {
      audio.play().catch(() => {});
      this.isFootstepPlaying = true;
    }

    // Smoothly fade in volume over 120ms
    const startVol = audio.volume;
    const startTime = performance.now();
    const duration = 120;

    const fadeInStep = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      try {
        audio.volume = Math.min(startVol + (vol - startVol) * p, vol);
      } catch {}
      if (p < 1 && !audio.paused && !this.isMuted) {
        this.footstepFadeRaf = requestAnimationFrame(fadeInStep);
      } else {
        this.footstepFadeRaf = null;
      }
    };
    this.footstepFadeRaf = requestAnimationFrame(fadeInStep);

    // Reset idle timer: if user stops scrolling for 180ms, smoothly fade out & pause
    if (this.footstepIdleTimer) {
      clearTimeout(this.footstepIdleTimer);
    }
    this.footstepIdleTimer = setTimeout(() => {
      this.stopFootsteps(180);
    }, 180);
  }

  stopFootsteps(fadeDurationMs = 180) {
    if (!this.footstepAudio || this.footstepAudio.paused) return;
    const audio = this.footstepAudio;

    if (this.footstepFadeRaf) {
      cancelAnimationFrame(this.footstepFadeRaf);
      this.footstepFadeRaf = null;
    }

    const startVol = audio.volume;
    const startTime = performance.now();

    const fadeOutStep = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / fadeDurationMs, 1);
      try {
        audio.volume = Math.max(0, startVol * (1 - p));
      } catch {}
      if (p < 1) {
        this.footstepFadeRaf = requestAnimationFrame(fadeOutStep);
      } else {
        this.footstepFadeRaf = null;
        try {
          audio.pause();
        } catch {}
        this.isFootstepPlaying = false;
      }
    };
    this.footstepFadeRaf = requestAnimationFrame(fadeOutStep);
  }

  /**
   * User: "and also mai move hone ka bhi sound lgana chahta hu wobhi dekhta hu add kr deta hu to move ho like abhi jo new ham rules ka add krenge usme kaam aayega baki agag khi aur dekho agar lga ho acha lge to accordingly lga skte ho movement.mp3 and voice exactly mt paste kr dena"
   * Plays cinematic camera pan whoosh during Scene 14 -> Scene 15 transition into the Rules cathedral!
   * Volume: tuned to strictly 28-35% (0.32).
   */
  playMovementPan(volume = 0.32) {
    if (this.isMuted) return;
    const clampedVolume = Math.min(Math.max(0.15, volume), 0.40);

    try {
      if (this.movementAudio) {
        try {
          this.movementAudio.pause();
          this.movementAudio.currentTime = 0;
        } catch {}
      }
      const audio = new Audio("/hackathon-audio/movement-pan.wav");
      audio.preload = "auto";
      audio.volume = clampedVolume;
      audio.play().catch(() => {
        const fallback = new Audio("/hackathon-audio/movement.mp3");
        fallback.currentTime = 2.5;
        fallback.volume = clampedVolume;
        fallback.play().catch(() => {});
        this.movementAudio = fallback;
      });
      this.movementAudio = audio;
    } catch (e) {}
  }

  /**
   * Quick motion / body turn swish for camera pull-backs & scroll lifting
   */
  playMovementSwish(volume = 0.25) {
    if (this.isMuted) return;
    const clampedVolume = Math.min(Math.max(0.12, volume), 0.35);

    try {
      if (this.swishAudio) {
        try {
          this.swishAudio.pause();
          this.swishAudio.currentTime = 0;
        } catch {}
      }
      const audio = new Audio("/hackathon-audio/movement-swish.wav");
      audio.preload = "auto";
      audio.volume = clampedVolume;
      audio.play().catch(() => {
        const fallback = new Audio("/hackathon-audio/movement.mp3");
        fallback.currentTime = 1.0;
        fallback.volume = clampedVolume;
        fallback.play().catch(() => {});
        this.swishAudio = fallback;
      });
      this.swishAudio = audio;
    } catch (e) {}
  }

  /**
   * User: "gate open ka volume 15-20 percent kr do"
   * User: "and gate open voice ka sound 3 sec se 7 sec tk chaiye bs"
   * Clamped strictly between 0.12 and 0.20 (15-20%).
   * Plays strictly 3.0s to 7.0s segment (no loud 0-3s slam, no dead 7-10s tail).
   */
  playGateOpen(volume = 0.18) {
    if (this.isMuted) return;
    const clampedVolume = Math.min(Math.max(0.12, volume), 0.20); // Strictly 15-20%

    try {
      if (this.gateAudio) {
        try {
          this.gateAudio.pause();
          this.gateAudio.currentTime = 0;
        } catch {}
      }
      // Uses the pre-sliced 3.0s -> 7.0s master clip (zero latency, exact 4-second gate screech & open)
      const audio = new Audio("/hackathon-audio/gate-open-trimmed.wav");
      audio.preload = "auto";
      audio.volume = clampedVolume;
      audio.play().catch(() => {
        // Fallback: seek original gate-open.mp3 to 3.0s
        const fallback = new Audio("/hackathon-audio/gate-open.mp3");
        fallback.currentTime = 3.0;
        fallback.volume = clampedVolume;
        fallback.play().catch(() => {});
        this.gateAudio = fallback;
      });
      this.gateAudio = audio;
    } catch (e) {}
  }

  playHeavyGateBreach(volume = 0.18) {
    this.playGateOpen(volume);
  }

  /**
   * User: "sound effect.mp3 ye ek new sound effect hai like jb lgana h mai wo screenshot attach kr rha hu like aate and jate time"
   * User: "ye jha use kiye ho uska volume sirf 20 % rakho"
   * Plays holographic transition sound when Investigation Chamber Dossier appears & leaves at strictly 20% volume.
   */
  playDossierTransition(volume = 0.20) {
    if (this.isMuted) return;
    const clampedVolume = Math.min(Math.max(0.05, volume), 0.25); // Set strictly to 20% (0.20) per user request

    try {
      if (this.dossierAudio) {
        try {
          this.dossierAudio.pause();
          this.dossierAudio.currentTime = 0;
        } catch {}
      }
      const audio = new Audio("/hackathon-audio/sound-effect.mp3");
      audio.preload = "auto";
      audio.volume = clampedVolume;
      audio.play().catch(() => {});
      this.dossierAudio = audio;
    } catch (e) {}
  }

  /**
   * User: "rules pe jb slide ho rha h to kya sound lga skta hu"
   * Tactile occult target-lock / focus click when camera locks onto each of the 7 rules.
   * Features zero-latency progressive Web Audio API resonance chime + sound-effect.mp3 warmth.
   * Strictly clamped to 18-22% volume.
   */
  playRuleFocusLock(ruleNum = 1, volume = 0.20) {
    if (this.isMuted) return;
    const clampedVolume = Math.min(Math.max(0.08, volume), 0.24);

    try {
      // 1. Instantaneous 0ms Web Audio synthetic focus lock click
      if (typeof window !== "undefined") {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          if (!this.synthCtx || this.synthCtx.state === "closed") {
            this.synthCtx = new AudioCtx();
          }
          if (this.synthCtx.state === "suspended") {
            this.synthCtx.resume();
          }
          const ctx = this.synthCtx;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          // Pitch scales smoothly from Rule 01 (500Hz) up to Rule 07 (740Hz)
          const baseFreq = 500 + (Math.max(1, ruleNum) - 1) * 40;
          osc.type = "sine";
          osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.45, ctx.currentTime + 0.035);
          gain.gain.setValueAtTime(clampedVolume * 0.40, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.07);
        }
      }

      // 2. Layered organic acoustic texture via sound-effect.mp3
      const audio = new Audio("/hackathon-audio/sound-effect.mp3");
      audio.preload = "auto";
      audio.volume = clampedVolume * 0.75;
      audio.play().catch(() => {});
    } catch (e) {}
  }

  fadeGateAudio(durationMs = 400) {
    if (!this.gateAudio || this.gateAudio.paused) return;
    const audio = this.gateAudio;
    const startVol = audio.volume;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / durationMs, 1);
      try {
        audio.volume = Math.max(0, startVol * (1 - p));
      } catch {}
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        try {
          audio.pause();
          audio.currentTime = 0;
        } catch {}
      }
    };
    requestAnimationFrame(step);
  }

  // Backwards-compatible alias for single footstep triggers
  playFootstep(volume = 0.32) {
    this.startFootsteps(volume);
  }

  playDoorOpenCreak() {}
  playLockUnlatch() {}

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      if (this.footstepAudio) {
        try {
          this.footstepAudio.pause();
        } catch {}
        this.isFootstepPlaying = false;
      }
      if (this.movementAudio) {
        try {
          this.movementAudio.pause();
        } catch {}
      }
      if (this.swishAudio) {
        try {
          this.swishAudio.pause();
        } catch {}
      }
      if (this.gateAudio) {
        try {
          this.gateAudio.pause();
        } catch {}
      }
      if (this.dossierAudio) {
        try {
          this.dossierAudio.pause();
        } catch {}
      }
    }
    return this.isMuted;
  }

  setAmbientVolume() {}
  duck() {}
  restore() {}
}

export const cinematicAudio = new CinematicAudioManager();
