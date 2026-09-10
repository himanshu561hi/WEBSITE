import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqConfig } from "../data/faqConfig";
import SectionHeading from "../components/SectionHeading";
import HorrorReveal from "../components/HorrorReveal";

/**
 * FAQSection
 * SCENE 09 — THE DOSSIER
 * Accessible accordion floating over the 3D corridor (Sections 41 & 71).
 */
export default function FAQSection({ data = faqConfig }) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = data.faqs || [];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <HorrorReveal>
          <SectionHeading
            tag={data.tag}
            title={data.title}
            highlight=""
            subtitle={data.subtitle}
          />
        </HorrorReveal>

        {/* Accessible Accordion Container */}
        <div className="space-y-3.5 mt-14" role="region" aria-label="FAQ Accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const indexStr = String(idx + 1).padStart(2, "0");

            return (
              <HorrorReveal key={faq.q} delay={idx * 0.04}>
                <div
                  className={`rounded-xs transition-all duration-200 border backdrop-blur-xs ${
                    isOpen
                      ? "bg-black/85 border-[#D01820]/70 shadow-[0_4px_20px_rgba(0,0,0,0.7)]"
                      : "bg-black/70 border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#D01820] rounded-xs cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <span className="font-mono text-xs text-[#D01820] tracking-widest pt-0.5 sm:pt-0">
                        {indexStr} //
                      </span>
                      <h3 className="font-mono text-sm sm:text-base font-bold text-stone-200 tracking-wide">
                        {faq.q}
                      </h3>
                    </div>

                    <div className="text-stone-400 p-1 shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#D01820]" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans border-t border-white/5"
                    >
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              </HorrorReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
