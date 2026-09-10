import React, { useState, useEffect } from "react";
import "./styles/hackathon.css";

// 1. Fullscreen Persistent 3D WebGL Investigation Canvas
import ExperienceCanvas from "./components/ExperienceCanvas";

// 2. Atmospheric Postprocessing & Custom Investigation Cursor
import PostProcessing from "./effects/PostProcessing";
import InvestigationCursor from "./components/InvestigationCursor";

// 3. Dynamic Minimalist Fixed Navigation Bar
import HackathonNavbar from "./components/HackathonNavbar";

// 4. Cinematic Story Experience (Scene 01 Home.png -> Gate Push -> Scene 02 -> Hackathon Evidence)
import StoryExperience from "./sections/StoryExperience";
import HackathonFooter from "./sections/HackathonFooter";
import AtmosphereAudioToggle from "./components/cinematic/AtmosphereAudioToggle";
import StoryAudioDebugHUD from "./components/cinematic/StoryAudioDebugHUD";

// 5. Centralized Data Architecture
import { contentConfig } from "./data/contentConfig";
import { hackathonConfig } from "./data/hackathonConfig";

/**
 * HackathonHome
 * BUILDX — CINEMATIC PARANORMAL INVESTIGATION EXPERIENCE
 * 
 * Powered by StoryExperience & CinematicStoryEngine:
 * - Scene 01 (Home.png): Ghost anchor, classified log reveal on dark left wall.
 * - Progressive camera push towards right-hand metal gate.
 * - Paranormal shove impact at ~80% scroll.
 * - Directional gate throw into Scene 02.
 * - Hackathon evidence, dossiers, 36hr timer, and registration terminal emerge from the world.
 */
export default function HackathonHome() {
  useEffect(() => {
    // 1. Page Title & Meta Description
    const prevTitle = document.title;
    document.title = `${hackathonConfig.branding.name} — ${hackathonConfig.branding.tagline}`;

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : null;
    if (metaDesc) {
      metaDesc.setAttribute("content", hackathonConfig.branding.missionDescription);
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute("content", prevDesc);
      }
    };
  }, []);

  return (
    <div className="hackathon-theme-root bg-black text-[#e5e5e5] min-h-screen relative selection:bg-[#D01820]/40 selection:text-white">
      {/* 1. Contextual Investigation Flashlight Cursor */}
      <InvestigationCursor />

      {/* 2. Minimalist Transparent Fixed Navigation Bar */}
      <HackathonNavbar />

      {/* 3. Master Cinematic Story Experience */}
      <main id="main-content" className="relative z-10 bg-black">
        <StoryExperience />
      </main>

      {/* 4. Master Audio Toggle: SOUND ON / SOUND OFF */}
      <AtmosphereAudioToggle />

      {/* 5. Audio Diagnostics HUD (?storyDebug=true) */}
      <StoryAudioDebugHUD />
    </div>
  );
}
