"use client";

import { Award, QrCode, SearchCheck, CheckCircle2, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function HallmarkingSection() {
  return (
    <section id="hallmark" className="py-14 sm:py-20 lg:py-28 bg-[#faf8f5] border-t border-[#e8e2d8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <ScrollReveal direction="up">
              <div className="jewel-stamp rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6834]" />
                <span>Govt. of India Certified &bull; BIS 916</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#12100e] tracking-tight leading-tight">
                100% BIS 916 Hallmarking with{" "}
                <span className="italic text-gold-gradient font-light block">
                  Laser HUID Traceability
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="text-sm sm:text-base text-[#524c43] leading-relaxed font-light">
                At Jayanti Jewellers, gold purity is guaranteed with absolute transparency. Every piece of 22K gold is certified under the Bureau of Indian Standards (BIS) and laser-inscribed with a unique six-digit alphanumeric <strong>HUID</strong> (Hallmark Unique Identification) code.
              </p>
            </ScrollReveal>

            <div className="space-y-4 pt-2">
              {[
                {
                  icon: Award,
                  title: "22K916 Gold Fineness Standard",
                  desc: "Guaranteed 91.6% pure gold alloyed strictly with high-grade precious metals for lasting bridal durability and brilliant shine.",
                },
                {
                  icon: QrCode,
                  title: "Traceable 6-Digit Laser HUID",
                  desc: "Each jewel carries its own verified identity. You can enter the HUID code directly in the government BIS Care App to view the assaying center, date, and certified purity.",
                },
                {
                  icon: SearchCheck,
                  title: "Computerized Non-Destructive Testing",
                  desc: "Transparent digital scales and computerized XRF testing ensure you are billed strictly for true gold net weight, with stones and lac accounted for accurately.",
                },
              ].map(({ icon: Icon, title, desc }, idx) => (
                <ScrollReveal key={title} direction="up" delay={250 + idx * 100}>
                  <div className="p-5 jewel-box flex items-start gap-4 rounded-2xl">
                    <div 
                      className="w-10 h-10 border border-[#c5a059]/40 bg-[#faf6ef] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs rounded-full"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.25)" }}
                    >
                      <Icon className="w-5 h-5 text-[#8c6834]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#12100e]">
                        {title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#524c43] mt-1 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Visual Hallmarking Card */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={200}>
              <div className="jewel-box jewel-corners shadow-lg overflow-hidden relative rounded-3xl">
                {/* Premium gold gradient header bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#8c6834] via-[#c5a059] to-[#8c6834]" aria-hidden="true" />

                <div className="p-8 sm:p-10">
                  <div className="text-center mb-8">
                    <div 
                      className="inline-block p-4 border border-[#c5a059]/40 bg-[#faf6ef] mb-3 shadow-2xs rounded-2xl"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.25)" }}
                    >
                      {/* BIS Hallmark Symbol Representation */}
                      <svg
                        viewBox="0 0 120 100"
                        className="w-16 h-14 mx-auto text-[#8c6834]"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <polygon points="60,10 110,85 10,85" stroke="#8c6834" strokeWidth="4" fill="none" />
                        <circle cx="60" cy="55" r="14" fill="#8c6834" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-[#12100e]">
                      The Three BIS Hallmark Marks
                    </h3>
                    <p className="text-xs text-[#736c62] mt-1">
                      Laser-inscribed on all authentic 22K gold ornaments
                    </p>
                  </div>

                  {/* 3 Hallmark Components with Jewel Box styling */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-5 jewel-box gold-shine-effect rounded-2xl">
                      <div className="text-lg font-serif font-bold text-[#8c6834] mb-1">
                        ▲ BIS Logo
                      </div>
                      <div className="text-xs font-semibold text-[#12100e]">
                        Standard Mark
                      </div>
                      <div className="text-[11px] text-[#736c62] mt-1">
                        Govt. Certified
                      </div>
                    </div>

                    <div className="p-5 jewel-box gold-shine-effect rounded-2xl">
                      <div className="text-lg font-serif font-bold text-[#8c6834] mb-1">
                        22K916
                      </div>
                      <div className="text-xs font-semibold text-[#12100e]">
                        Fineness Grade
                      </div>
                      <div className="text-[11px] text-[#736c62] mt-1">
                        91.6% Pure Gold
                      </div>
                    </div>

                    <div className="p-5 jewel-box gold-shine-effect rounded-2xl">
                      <div className="text-lg font-mono font-bold text-[#8c6834] mb-1">
                        AB1234
                      </div>
                      <div className="text-xs font-semibold text-[#12100e]">
                        6-Digit HUID
                      </div>
                      <div className="text-[11px] text-[#736c62] mt-1">
                        Unique Laser Code
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#e8e2d8] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <p className="text-xs text-[#524c43] flex-1">
                      Have ancestral gold without a hallmark? Visit our Khukurdaha showroom for complimentary computerized purity assessment.
                    </p>
                    <a
                      href="https://www.bis.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 btn-jewel-outline text-[11px] font-medium rounded-full shrink-0 inline-flex items-center gap-1.5"
                    >
                      <span>BIS Official Portal</span>
                      <ExternalLink className="w-3 h-3 text-[#8c6834]" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
