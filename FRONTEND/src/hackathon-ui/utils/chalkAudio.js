/**
 * chalkAudio.js
 * Dedicated audio manager for blackboard chalk writing effect.
 *
 * User: "black board chalk.mp3 jb wo black board pe likhna start kre tb ye voice add krna h and khatam hote hi fade ke sath hta dena h"
 * - Starts playing "/hackathon-audio/black-board-chalk.mp3" when chalkboard writing starts (scrollProgress >= 0.38).
 * - Smooth S-curve fade-in on start.
 * - Loops seamlessly while user is actively scrolling through the chalkboard writing.
 * - Smooth S-curve fade-out and pause as soon as writing finishes (scrollProgress >= 0.56).
 * - Also smoothly pauses if scrolling stops mid-writing.
 * - Subscribed to master mute toggle.
 */

import { sceneVoiceEngine } from "./sceneVoiceEngine";

class ChalkAudioManager {
  constructor() {
    this.audio = null;
    this.fadeRaf = null;
    this.isPlaying = false;
    this.isFadingOut = false;
    this.scrollIdleTimer = null;
    this.targetVolume = 0.30; // 30% volume per user request ("iska voice 30% kr do")

    // Sync with master mute state
    if (typeof window !== "undefined") {
      sceneVoiceEngine.subscribeDebug((state) => {
        if (state.isMuted) {
          this.stopImmediate();
        }
      });
    }
  }

  ensureAudio() {
    if (!this.audio && typeof window !== "undefined") {
      this.audio = new Audio("/hackathon-audio/black-board-chalk.mp3");
      this.audio.loop = true;
      this.audio.preload = "auto";
      this.audio.volume = 0;
    }
    return this.audio;
  }

  fadeVolume(startVol, targetVol, durationMs, onComplete = null) {
    if (this.fadeRaf) {
      cancelAnimationFrame(this.fadeRaf);
      this.fadeRaf = null;
    }

    const audio = this.ensureAudio();
    if (!audio) return;

    if (durationMs <= 0) {
      audio.volume = targetVol;
      if (onComplete) onComplete();
      return;
    }

    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / durationMs, 1);
      // Cosine S-curve: smooth ease-in & ease-out
      const smooth = 0.5 - 0.5 * Math.cos(p * Math.PI);
      const current = startVol + (targetVol - startVol) * smooth;

      try {
        audio.volume = Math.max(0, Math.min(1, current));
      } catch {}

      if (p < 1) {
        this.fadeRaf = requestAnimationFrame(step);
      } else {
        this.fadeRaf = null;
        if (onComplete) onComplete();
      }
    };

    this.fadeRaf = requestAnimationFrame(step);
  }

  play() {
    if (sceneVoiceEngine.isMuted) return;
    const audio = this.ensureAudio();
    if (!audio) return;

    this.isFadingOut = false;
    if (audio.paused) {
      audio.play().catch(() => {});
    }

    this.fadeVolume(audio.volume, this.targetVolume, 250);
    this.isPlaying = true;
  }

  pauseWithFade(durationMs = 350) {
    if (!this.audio || this.isFadingOut || this.audio.paused) return;
    this.isFadingOut = true;

    this.fadeVolume(this.audio.volume, 0, durationMs, () => {
      if (this.audio) {
        try {
          this.audio.pause();
        } catch {}
      }
      this.isPlaying = false;
      this.isFadingOut = false;
    });
  }

  stopImmediate() {
    if (this.fadeRaf) {
      cancelAnimationFrame(this.fadeRaf);
      this.fadeRaf = null;
    }
    if (this.scrollIdleTimer) {
      clearTimeout(this.scrollIdleTimer);
      this.scrollIdleTimer = null;
    }
    if (this.audio) {
      try {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audio.volume = 0;
      } catch {}
    }
    this.isPlaying = false;
    this.isFadingOut = false;
  }

  /**
   * Called on scroll when within the writing range (0.38 -> 0.56)
   */
  onWritingScrollActivity() {
    if (sceneVoiceEngine.isMuted) return;

    if (!this.isPlaying || this.isFadingOut) {
      this.play();
    }

    if (this.scrollIdleTimer) {
      clearTimeout(this.scrollIdleTimer);
    }
    // If user pauses scrolling while in blackboard, fade out chalk sound after 200ms
    this.scrollIdleTimer = setTimeout(() => {
      this.pauseWithFade(280);
    }, 200);
  }
}

export const chalkAudio = new ChalkAudioManager();
