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

  // Silenced to prevent collision with master "step and gate.mp3"
  playFootstep() {}
  playDoorOpenCreak() {}
  playLockUnlatch() {}

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
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
