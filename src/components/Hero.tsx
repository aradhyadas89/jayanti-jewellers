"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Award, Sparkles, MapPin, Clock, Gem } from "lucide-react";
import { STORE_INFO } from "@/data/jewellery-data";
import { useShowroomStatus } from "@/utils/showroom-status";
import TiltCard from "@/components/TiltCard";
import GoldDustCanvas from "@/components/GoldDustCanvas";

export default function Hero() {
  const status = useShowroomStatus();
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const HOTSPOTS = [
    {
      id: 1,
      x: "50%",
      y: "32%",
      title: "Tarakasi Filigree",
      desc: "0.2mm hand-drawn 22K gold lace wirework",
    },
    {
      id: 2,
      x: "30%",
      y: "48%",
      title: "Laser 6-Digit HUID",
      desc: "BIS Hallmark traceability inscription",
    },
    {
      id: 3,
      x: "72%",
      y: "50%",
      title: "Nakshi Chasing",
      desc: "Hand-embossed royal peacock relief",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-16 lg:pb-20 bg-[#faf8f5]">
      {/* Interactive Golden Stardust Particle Physics */}
      <GoldDustCanvas />

      {/* Subtle background ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#c5a059]/12 via-[#e8d9bd]/8 to-transparent blur-3xl animate-pulse-glow"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content with Staggered Entrance */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            {/* Royal Atelier Overline */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in-up">
              <div className="jewel-stamp rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8c6834] animate-pulse" />
                <span>Royal Atelier &bull; Khukur Daha, Jiakhali</span>
              </div>

              {status && (
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium tracking-wide shadow-2xs border rounded-full ${
                    status.isOpen
                      ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                      : "bg-amber-50 text-amber-900 border-amber-300"
                  }`}
                  style={{ boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.2)" }}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      status.isOpen ? "bg-emerald-600 animate-pulse" : "bg-amber-600"
                    }`}
                  />
                  {status.isOpen ? "Showroom Open (10 AM – 7 PM)" : status.badgeText}
                </span>
              )}
            </div>

            {/* Editorial Grand Headline with Fluid Responsive Scaling */}
            <div className="space-y-1 sm:space-y-2 animate-fade-in-up delay-100">
              <h1 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-[4rem] xl:text-[4.6rem] font-normal text-[#12100e] leading-[1.1] tracking-tight">
                Timeless Gold
                <br />
                Heirlooms,
              </h1>
              <p className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-[4rem] xl:text-[4.6rem] font-light text-gold-shimmer leading-[1.1] tracking-tight italic">
                Forged in Sacred Purity.
              </p>
            </div>

            {/* Lead Narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-[#4a453e] max-w-xl font-light leading-relaxed animate-fade-in-up delay-200">
              At <strong className="font-semibold text-[#12100e]">Jayanti Jewellers</strong>, we honor the revered heritage of Bengali goldsmithing. From royal bridal chokers and filigree sita hars to 22K gold-inlaid pola and certified solitaires, each masterpiece is laser-inscribed with a government-certified BIS 916 HUID hallmark.
            </p>

            {/* Quick Showroom Notice Strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#524c43] pt-1 animate-fade-in-up delay-300">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8c6834] shrink-0" />
                <span className="text-[11px] sm:text-xs">Road, Khukur Daha, Jiakhali (WB 721641)</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8c6834] shrink-0" />
                <span className="text-[11px] sm:text-xs">10 AM – 7 PM <span className="text-rose-700 font-semibold">(Thu Closed)</span></span>
              </div>
            </div>

            {/* Primary Action Buttons with Full Responsive Adaptability */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 w-full pt-1 animate-fade-in-up delay-400">
              <a
                href="#collections"
                className="w-full sm:w-auto min-h-[48px] px-7 sm:px-8 py-3.5 sm:py-4 btn-jewel-gold rounded-full flex items-center justify-center gap-2.5 group cursor-pointer text-xs"
              >
                <Sparkles className="w-4 h-4 text-[#735327] shrink-0" aria-hidden="true" />
                <span>Explore Collections</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#12100e] group-hover:translate-x-1.5 transition-transform duration-200" aria-hidden="true" />
              </a>

              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 btn-jewel-emerald rounded-full flex items-center justify-center gap-2.5 text-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366] shrink-0" aria-hidden="true" />
                <span>WhatsApp Atelier</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="w-full sm:w-auto min-h-[48px] px-5 sm:px-6 py-3.5 sm:py-4 btn-jewel-outline rounded-full flex items-center justify-center gap-2 text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#8c6834] shrink-0" aria-hidden="true" />
                <span>09734805821</span>
              </a>
            </div>

            {/* Credential Pillars Grid with Hallmarking Stamp Polish */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full border-t border-[#e8e2d8] animate-fade-in-up delay-500">
              {[
                { icon: ShieldCheck, label: "100% BIS 916 HUID" },
                { icon: Award, label: "Tarakasi Filigree" },
                { icon: Gem, label: "Certified Diamonds" },
                { icon: Sparkles, label: "Fair Gold Exchange" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 p-2 sm:p-2.5 bg-white/70 hover:bg-white border border-[#e8e2d8] hover:border-[#c5a059] rounded-2xl transition-all duration-200 group cursor-default shadow-2xs"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.15)" }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#faf6ef] flex items-center justify-center shrink-0 border border-[#c5a059]/40 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-3.5 h-3.5 text-[#8c6834] group-hover:text-[#c5a059] transition-colors duration-200" aria-hidden="true" />
                  </div>
                  <span className="font-medium text-[11px] sm:text-xs text-[#4a453e] group-hover:text-[#12100e] tracking-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Fashion Editorial Imagery with Interactive 3D Tilt */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none animate-float-slow">
              {/* Decorative gold hairline offset box behind frame */}
              <div 
                aria-hidden="true"
                className="absolute -top-3 -right-3 w-full h-full border border-[#c5a059]/40 rounded-3xl hidden sm:block pointer-events-none transition-transform duration-700"
              />

              <TiltCard maxTilt={10} glare={true}>
                {/* Museum-Grade Matting & Double Frame with Sunbeam Sheen & Royal Brass Corners */}
                <div className="jewel-box jewel-corners p-3.5 relative z-10 gold-shine-effect shadow-2xl rounded-3xl">
                  {/* Four Royal Brass Corner Brackets */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#c5a059] rounded-tl-xl z-20 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#c5a059] rounded-tr-xl z-20 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#c5a059] rounded-bl-xl z-20 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#c5a059] rounded-br-xl z-20 pointer-events-none" />

                  <div className="border border-[#e8e2d8] relative aspect-[4/5] w-full overflow-hidden bg-[#f4eee6] rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
                      alt="Royal Bengali Gold Jewellery Collection — Jayanti Jewellers, Khukur Daha"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Discrete Purity Stamp */}
                    <div className="absolute top-4 left-4 jewel-stamp bg-white/95 backdrop-blur-sm rounded-full">
                      <Sparkles className="w-2.5 h-2.5 text-[#c5a059]" />
                      <span>BIS 916 Hallmarked</span>
                    </div>

                    <div className="absolute top-4 right-4 jewel-stamp bg-white/95 backdrop-blur-sm rounded-full">
                      <span>Khukurdaha</span>
                    </div>

                    {/* Interactive Craftsmanship Hotspot Pins */}
                    {HOTSPOTS.map((spot) => {
                      const isHot = activeHotspot === spot.id;
                      return (
                        <div
                          key={spot.id}
                          className="absolute z-20 group/pin"
                          style={{ top: spot.y, left: spot.x, transform: "translate(-50%, -50%)" }}
                          onMouseEnter={() => setActiveHotspot(spot.id)}
                          onMouseLeave={() => setActiveHotspot(null)}
                          onClick={() => setActiveHotspot(isHot ? null : spot.id)}
                        >
                          {/* Pulsing Target Ring with Accessible Touch Pad */}
                          <span className="relative flex h-7 w-7 sm:h-6 sm:w-6 items-center justify-center cursor-pointer -m-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-60" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#12100e] border border-[#f5eedf] shadow-md items-center justify-center">
                              <span className="w-1 h-1 rounded-full bg-[#c5a059]" />
                            </span>
                          </span>

                          {/* Luxury Tooltip Callout */}
                          <div
                            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-44 sm:w-48 p-2.5 sm:p-3 bg-[#12100e]/95 text-[#f5eedf] border border-[#c5a059] shadow-2xl backdrop-blur-md rounded-2xl transition-all duration-300 pointer-events-none z-30 max-w-[calc(100vw-3.5rem)] ${
                              isHot
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 translate-y-1 scale-95"
                            }`}
                          >
                            <span className="text-[9px] uppercase tracking-widest text-[#c5a059] font-bold block">
                              {spot.title}
                            </span>
                            <p className="text-[10px] sm:text-[11px] text-[#e8d9bd] leading-tight mt-0.5 font-light">
                              {spot.desc}
                            </p>
                            {/* Downward pointer notch */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#c5a059]" />
                          </div>
                        </div>
                      );
                    })}

                    {/* Bottom Caption Card */}
                    <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 p-3 sm:p-4 jewel-box bg-white/95 backdrop-blur-sm transition-all duration-300 hover:bg-white rounded-2xl">
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-[#8c6834] uppercase tracking-widest font-semibold mb-1">
                        <span>Bridal Masterpiece</span>
                        <span>22K Fine Gold</span>
                      </div>
                      <p className="font-serif text-sm sm:text-base lg:text-lg text-[#12100e] font-normal leading-snug">
                        The Rajkumari Royal Choker &amp; Jhumka Set
                      </p>
                      <div className="mt-2 pt-2 border-t border-[#e8e2d8] flex items-center justify-between text-[11px] sm:text-xs text-[#524c43]">
                        <span className="truncate pr-2">Hand-forged by master karigars</span>
                        <a
                          href={STORE_INFO.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8c6834] hover:text-[#12100e] font-semibold inline-flex items-center gap-1 transition-colors group/link shrink-0"
                          aria-label="Inquire about the Rajkumari choker set on WhatsApp"
                        >
                          <span>Inquire</span>
                          <span className="group-hover/link:translate-x-1 transition-transform duration-200">&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Floating heritage seal with circular corners */}
              <div className="absolute -bottom-4 -left-4 bg-[#12100e] text-white px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] shadow-lg border border-[#c5a059]/40 rounded-full hidden sm:block z-20 animate-float-reverse">
                ✦ Handcrafted Atelier
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Luxury Marquee Ribbon */}
      <div className="mt-14 py-3 bg-[#12100e] text-[#e8d9bd] overflow-hidden border-y border-[#c5a059]/30">
        <div className="animate-marquee whitespace-nowrap text-[11px] font-medium tracking-[0.25em] uppercase flex items-center gap-10">
          <span>✦ 100% BIS 916 HALLMARKED GOLD</span>
          <span>✦ 6-DIGIT LASER HUID TRACEABILITY</span>
          <span>✦ BENGALI BRIDAL ATELIER</span>
          <span>✦ CERTIFIED NATURAL SOLITAIRES</span>
          <span>✦ 92.5 STERLING SILVER COLLECTIONS</span>
          <span>✦ ZERO UNFAIR MELTING DEDUCTION</span>
          <span>✦ KHUKUR DAHA, JIAKHALI, WEST BENGAL</span>
          <span>✦ 100% BIS 916 HALLMARKED GOLD</span>
          <span>✦ 6-DIGIT LASER HUID TRACEABILITY</span>
          <span>✦ BENGALI BRIDAL ATELIER</span>
          <span>✦ CERTIFIED NATURAL SOLITAIRES</span>
          <span>✦ 92.5 STERLING SILVER COLLECTIONS</span>
          <span>✦ ZERO UNFAIR MELTING DEDUCTION</span>
          <span>✦ KHUKUR DAHA, JIAKHALI, WEST BENGAL</span>
        </div>
      </div>
    </section>
  );
}
