"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/jewellery-data";
import ScrollReveal from "@/components/ScrollReveal";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#faf8f5] border-t border-[#e8e2d8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <ScrollReveal direction="up">
            <div className="jewel-stamp mb-3 rounded-full">
              <HelpCircle className="w-3.5 h-3.5 text-[#8c6834]" />
              <span>Customer Guidance &bull; Hallmarking &amp; Policies</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#12100e] tracking-tight">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#524c43] max-w-xl mx-auto leading-relaxed font-light">
              Everything you need to know about our BIS 916 hallmarking, showroom visiting hours, and custom bridal orders.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 80} direction="up">
                <div
                  className={`jewel-box transition-all duration-300 rounded-2xl overflow-hidden ${
                    isOpen ? "border-[#c5a059] shadow-md" : "border-[#e8e2d8] hover:border-[#c5a059]"
                  }`}
                  style={isOpen ? { boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.4), 0 8px 24px -4px rgba(140, 104, 52, 0.12)" } : undefined}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full min-h-[52px] p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6834] focus-visible:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                  >
                    <span
                      className={`font-serif text-sm sm:text-base md:text-lg font-medium transition-colors duration-250 ${
                        isOpen ? "text-[#8c6834]" : "text-[#12100e]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 border flex items-center justify-center shrink-0 transition-all duration-300 rounded-full ${
                        isOpen
                          ? "rotate-180 border-[#c5a059] bg-[#faf8f5] text-[#8c6834]"
                          : "border-[#d5cbbe] text-[#736c62]"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {/* Smooth animated accordion body */}
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className={`accordion-body ${isOpen ? "open" : ""}`}
                  >
                    <div className="accordion-inner">
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-sm text-[#524c43] leading-relaxed border-t border-[#f0eae0]">
                        <div className="pt-4">{faq.a}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
