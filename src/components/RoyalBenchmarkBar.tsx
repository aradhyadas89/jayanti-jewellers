"use client";

import { ShieldCheck, Scale, Award, Sparkles } from "lucide-react";

export default function RoyalBenchmarkBar() {
  return (
    <section className="bg-[#14110e] text-[#e8d9bd] border-y border-[#c5a059]/40 py-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #c5a059 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#c5a059]/20">
          {/* Pillar 1 */}
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full border border-[#c5a059]/50 flex items-center justify-center shrink-0 bg-[#1c1814] shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] block font-semibold">
                Purity Guarantee
              </span>
              <p className="font-serif text-sm sm:text-base text-white font-medium leading-tight mt-0.5">
                100% BIS 916 Hallmarked
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:pl-4 lg:pl-6">
            <div className="w-10 h-10 rounded-full border border-[#c5a059]/50 flex items-center justify-center shrink-0 bg-[#1c1814] shadow-sm">
              <Award className="w-5 h-5 text-[#c5a059]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] block font-semibold">
                Traceable Heritage
              </span>
              <p className="font-serif text-sm sm:text-base text-white font-medium leading-tight mt-0.5">
                Laser Inscribed 6-Digit HUID
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:pl-4 lg:pl-6">
            <div className="w-10 h-10 rounded-full border border-[#c5a059]/50 flex items-center justify-center shrink-0 bg-[#1c1814] shadow-sm">
              <Scale className="w-5 h-5 text-[#c5a059]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] block font-semibold">
                Fair Exchange Policy
              </span>
              <p className="font-serif text-sm sm:text-base text-white font-medium leading-tight mt-0.5">
                Zero Hidden Melting Loss
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:pl-4 lg:pl-6">
            <div className="w-10 h-10 rounded-full border border-[#c5a059]/50 flex items-center justify-center shrink-0 bg-[#1c1814] shadow-sm">
              <Sparkles className="w-5 h-5 text-[#c5a059]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] block font-semibold">
                Artisanal Lineage
              </span>
              <p className="font-serif text-sm sm:text-base text-white font-medium leading-tight mt-0.5">
                Bengal Tarakasi &amp; Nakshi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

