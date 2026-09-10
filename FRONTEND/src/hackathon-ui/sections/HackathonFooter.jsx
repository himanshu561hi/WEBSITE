import React from "react";
import { Github, Twitter, Linkedin, MessageSquare } from "lucide-react";
import { contentConfig } from "../data/contentConfig";
import { hackathonConfig } from "../data/hackathonConfig";
import buildxLogoDanger from "../assets/buildx-logo-danger.png";

/**
 * HackathonFooter
 * Official BUILDX Case File Footer.
 */
export default function HackathonFooter({ data = contentConfig.footer }) {
  return (
    <footer className="border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Wordmark: BUILDX Dripping Horror Logo */}
        <div className="flex items-center gap-3">
          <div className="h-8 sm:h-9 w-auto flex items-center filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(208,24,32,0.4)]">
            <img
              src={buildxLogoDanger}
              alt="BUILDX"
              className="h-full w-auto object-contain select-none pointer-events-none brightness-[1.12] contrast-[1.15]"
              loading="lazy"
            />
          </div>
          <div className="border-l border-white/10 pl-2.5">
            <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest block">
              {hackathonConfig.branding.subOrganizer}
            </span>
          </div>
        </div>

        {/* Narrative & Legal Disclaimer */}
        <div className="text-center md:text-left max-w-md font-mono text-[10px] text-stone-500 leading-relaxed">
          <p>{data.disclaimer}</p>
          <p className="pt-1 text-stone-400">{data.copyright}</p>
        </div>

        {/* Social Transmissions */}
        <div className="flex items-center gap-4">
          <a
            href={hackathonConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={hackathonConfig.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors"
            aria-label="Discord Community"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <a
            href={hackathonConfig.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors"
            aria-label="Twitter Feed"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={hackathonConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-xs border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#D01820] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
