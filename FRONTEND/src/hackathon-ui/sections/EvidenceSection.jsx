import React from "react";
import { tracksConfig } from "../data/tracksConfig";
import SectionHeading from "../components/SectionHeading";
import HorrorReveal from "../components/HorrorReveal";
import EvidenceCard from "../components/EvidenceCard";

/**
 * EvidenceSection
 * SCENE 03 — THE EVIDENCE
 * Dynamic challenge tracks (Section 31 & 32 & 71).
 * Works with 3, 5, 6, 8 or any number of tracks without altering components.
 */
export default function EvidenceSection({ data = tracksConfig }) {
  const tracksList = data.tracks || [];

  return (
    <section
      id="evidence"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="Classified Challenge Tracks"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <HorrorReveal>
          <SectionHeading
            tag={data.tag}
            title={data.title}
            highlight=""
            subtitle={data.subtitle}
          />
        </HorrorReveal>

        {/* Dynamic Challenge Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {tracksList.map((track, idx) => (
            <HorrorReveal key={track.id} delay={idx * 0.06}>
              <EvidenceCard track={track} index={idx} />
            </HorrorReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
