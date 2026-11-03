"use client";

import { Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { STORE_INFO } from "@/data/jewellery-data";
import { useShowroomStatus } from "@/utils/showroom-status";

export default function AnnouncementBar() {
  const status = useShowroomStatus();

  return (
    <aside
      aria-label="Showroom Status and Contact"
      className="bg-[#12100e] text-[#e8d9bd] text-[11px] py-2 px-3 sm:px-4 select-none border-b border-[#c5a059]/30"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 tracking-wider text-center md:text-left">
        {/* Left: Showroom Real-Time Hours */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2" aria-live="polite" aria-atomic="true">
          {status ? (
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
              <span className="flex h-2 w-2 relative shrink-0">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-70 ${
                    status.isOpen ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    status.isOpen ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
              </span>
              <span className="font-semibold text-white tracking-wide">
                {status.isOpen ? "Showroom Open" : status.badgeText}:
              </span>
              <span className="text-[#c5baa9]">
                {status.isOpen
                  ? "Visiting hours until 7:00 PM IST today"
                  : status.subText}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[#c5baa9]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
              <span>Showroom Hours: 10:00 AM – 7:00 PM (Closed Thursday)</span>
            </div>
          )}
        </div>

        {/* Center: Hallmark Standard Tagline */}
        <div className="hidden lg:flex items-center gap-2 text-[#c5baa9] text-[10px] tracking-[0.2em] uppercase">
          <span className="text-[#c5a059]">✦</span>
          <span>100% BIS 916 Hallmarked Gold • Govt. Laser HUID</span>
          <span className="text-[#c5a059]">✦</span>
        </div>

        {/* Right: Direct Concierge & WhatsApp */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-white text-[11px]">
          <div className="hidden sm:flex items-center gap-1 text-[#c5baa9]">
            <MapPin className="w-3 h-3 text-[#c5a059] shrink-0" />
            <span>Khukur Daha, Jiakhali</span>
          </div>

          <span className="hidden sm:inline text-white/20">|</span>

          <a
            href={`tel:${STORE_INFO.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-[#c5a059] transition-colors font-medium py-0.5"
            aria-label="Call showroom at 09734805821"
          >
            <Phone className="w-3 h-3 text-[#c5a059] shrink-0" />
            <span>09734805821</span>
          </a>

          <span className="text-white/20">|</span>

          <a
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#4ade80] transition-colors font-medium py-0.5"
            aria-label="Contact Jayanti Jewellers on WhatsApp"
          >
            <MessageCircle className="w-3 h-3 text-[#4ade80] shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
