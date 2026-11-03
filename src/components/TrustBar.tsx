"use client";

import { ShieldCheck, Sparkles, Scale, Gem } from "lucide-react";
import { PILLARS } from "@/data/jewellery-data";
import ScrollReveal from "@/components/ScrollReveal";

export default function TrustBar() {
  const iconMap = {
    ShieldCheck,
    Sparkles,
    Scale,
    Gem,
  };

  return (
    <section
      aria-label="Our Quality Pillars"
      className="py-10 sm:py-14 lg:py-16 bg-[#faf8f5] border-b border-[#e8e2d8] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PILLARS.map((pillar, idx) => {
            const Icon =
              iconMap[pillar.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <ScrollReveal key={idx} delay={idx * 120} direction="up" enable3D={true} intensity="subtle">
                <div className="card-gold-top jewel-box jewel-corners gold-shine-effect group relative p-5 sm:p-7 flex flex-col justify-between overflow-hidden h-full rounded-3xl">
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/0 to-[#faf7f2]/0 group-hover:from-[#fefcf9] group-hover:to-white transition-all duration-300 pointer-events-none" />

                  <div className="relative">
                    {/* Icon Box with jewellery bezel framing */}
                    <div
                      className="w-12 h-12 border border-[#c5a059]/50 bg-[#faf6ef] group-hover:bg-[#f5ecdc] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 shadow-2xs rounded-2xl"
                      style={{
                        boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.3)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-[#8c6834] group-hover:text-[#c5a059] transition-colors duration-200" />
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-[#12100e] mb-3 tracking-tight leading-snug group-hover:text-[#8c6834] transition-colors duration-200">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#524c43] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="relative mt-7 pt-4 border-t border-[#f0eae0] flex items-center justify-between text-[10px] tracking-[0.18em] uppercase text-[#8c6834] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      Authenticity Guaranteed
                    </span>
                    <span className="text-[#c5a059] font-mono">0{idx + 1}</span>
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
