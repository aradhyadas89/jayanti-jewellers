"use client";

import { MessageCircle, RefreshCw, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { STORE_INFO } from "@/data/jewellery-data";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function CustomCraftingSection() {
  const steps = [
    {
      num: "01",
      title: "Consultation & Vision",
      desc: "Share your bridal Pinterest moodboard, ancestral heirloom sample, or custom sketch on WhatsApp or at our Khukurdaha showroom.",
    },
    {
      num: "02",
      title: "Weight & Budget Engineering",
      desc: "We calibrate the piece to your exact gold gram weight, diamond carats, and budget parameters with fully transparent pricing.",
    },
    {
      num: "03",
      title: "Master Karigar Hand-Forging",
      desc: "Accomplished Bengali karigars hand-forge every motif using traditional Tarakasi filigree, Nakshi chasing, and die-embossing.",
    },
    {
      num: "04",
      title: "Laser HUID & Royal Delivery",
      desc: "Your bespoke creation is certified with an indelible BIS 916 laser HUID hallmark and presented in our signature heirloom case.",
    },
  ];

  return (
    <section id="bespoke" className="py-14 sm:py-20 lg:py-28 bg-[#12100e] text-[#faf8f5] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#c5a059]/10 to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Context & Old Gold Exchange */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1a1714] border border-[#c5a059]/30 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#e8d9bd]">
                Bespoke Bridal Atelier
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Custom Bridal Heirlooms &amp;{" "}
                <span className="italic text-gold-gradient font-light block">
                  Fair Gold Exchange
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#b3aaa0] leading-relaxed font-light">
              Whether you desire a one-of-a-kind royal Bengali bridal set or wish to transform ancestral ornaments, Jayanti Jewellers blends timeless karigari with computerized weight precision.
            </p>

            {/* Old Gold Exchange Highlight Card with 3D Tilt */}
            <ScrollReveal direction="up" delay={200} enable3D={true}>
              <TiltCard maxTilt={6} glare={true}>
                <div className="p-6 sm:p-7 jewel-box-dark jewel-corners space-y-3.5 relative overflow-hidden shadow-xl rounded-3xl">
                  <div className="flex items-center gap-2.5 text-[#e8d9bd]">
                    <RefreshCw className="w-4 h-4 text-[#c5a059]" />
                    <h4 className="font-serif text-lg font-semibold text-white">
                      100% Transparent Old Gold Exchange
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#b3aaa0] leading-relaxed">
                    Exchange old family gold with zero unfair deductions. We test your gold in your presence using computerized XRF analysis and credit full market valuation toward your new 22K 916 hallmarked ornaments.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs text-[#6ee7b7] font-medium border-t border-white/10">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Instant computerized purity testing • Zero hidden melting loss</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            <div className="pt-2">
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-jewel-gold inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-xs rounded-full w-full sm:w-auto min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-[#12100e]" />
                <span>Consult with Our Karigars</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Steps Progression with 3D Spatial Depth */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {steps.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 120} enable3D={true} intensity="medium">
                  <TiltCard maxTilt={8} glare={true} className="h-full">
                    <div className="jewel-box-dark jewel-corners group relative p-7 flex flex-col justify-between overflow-hidden shadow-lg h-full rounded-3xl">
                      {/* Subtle gold line on card hover */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8c6834] via-[#c5a059] to-[#8c6834] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                      <div>
                        <div className="text-3xl font-serif font-light text-[#c5a059] mb-3 tracking-wider">
                          {step.num}
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-white mb-2 leading-snug group-hover:text-[#e8d9bd] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#9e958c] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#c5a059]">
                        <span>Atelier Protocol</span>
                        <span className="font-mono">Step 0{idx + 1}</span>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
