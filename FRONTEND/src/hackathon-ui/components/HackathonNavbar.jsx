import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { hackathonConfig } from "../data/hackathonConfig";
import { navigationConfig } from "../data/navigationConfig";
import MagneticButton from "./MagneticButton";
import buildxLogoDanger from "../assets/buildx-logo-danger.png";

/**
 * HackathonNavbar
 * Dynamic Navigation Bar (Sections 44 & 45).
 * Renders only enabled links configured in navigationConfig.js.
 */
export default function HackathonNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const enabledLinks = navigationConfig.filter((item) => item.enabled);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#06080c]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.9)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark: BUILDX Dripping Horror Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#D01820] rounded-xs p-1 select-none"
          >
            <div className="h-7 sm:h-8 w-auto flex items-center filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(208,24,32,0.4)]">
              <img
                src={buildxLogoDanger}
                alt="BUILDX"
                className="h-full w-auto object-contain select-none pointer-events-none brightness-[1.12] contrast-[1.15]"
                loading="eager"
              />
            </div>

            <div className="hidden sm:flex flex-col justify-center border-l border-white/10 pl-2.5">
              <span className="font-mono-tech text-[9px] text-slate-400 uppercase tracking-widest leading-tight">
                {hackathonConfig.branding.subOrganizer}
              </span>
            </div>
          </a>

          {/* Dynamic Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 select-none" aria-label="Investigation Navigation">
            {enabledLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="font-mono-tech text-xs font-semibold text-slate-300 hover:text-white transition-colors relative py-1 group tracking-wider select-none"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D01820] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <MagneticButton
              href={hackathonConfig.registration.targetUrl}
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              {hackathonConfig.registration.ctaText}
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xs bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#D01820] focus:outline-none focus:ring-1 focus:ring-[#D01820]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[65px] bg-[#06080c]/98 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col justify-between z-50">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {enabledLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono-tech text-sm font-semibold text-slate-200 hover:text-[#D01820] py-2 border-b border-white/5 tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6">
            <MagneticButton
              href={hackathonConfig.registration.targetUrl}
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {hackathonConfig.registration.ctaText}
            </MagneticButton>
          </div>
        </div>
      )}
    </header>
  );
}
