"use client";

import { Phone, MessageCircle, Navigation } from "lucide-react";
import { STORE_INFO } from "@/data/jewellery-data";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#12100e]/95 backdrop-blur-md border-t border-[#c5a059]/40 sm:hidden shadow-2xl pb-[max(0.5rem,env(safe-area-inset-bottom))] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#f5d998] before:to-transparent">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        {/* Call Showroom */}
        <a
          href={`tel:${STORE_INFO.phone}`}
          aria-label="Call Jayanti Jewellers showroom"
          className="flex flex-col items-center justify-center py-2.5 px-1 min-h-[52px] text-white hover:bg-white/5 active:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#c5a059] mb-1" />
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#e8d9bd]">
            Call Store
          </span>
        </a>

        {/* WhatsApp Consultation */}
        <a
          href={STORE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Jayanti Jewellers on WhatsApp"
          className="flex flex-col items-center justify-center py-2.5 px-1 min-h-[52px] text-white hover:bg-white/5 active:bg-white/10 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#4ade80] mb-1" />
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#e8d9bd]">
            WhatsApp
          </span>
        </a>

        {/* Driving Directions */}
        <a
          href={STORE_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions to Jayanti Jewellers on Google Maps"
          className="flex flex-col items-center justify-center py-2.5 px-1 min-h-[52px] text-white hover:bg-white/5 active:bg-white/10 transition-colors"
        >
          <Navigation className="w-4 h-4 mb-1 text-[#c5a059]" />
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#e8d9bd]">
            Directions
          </span>
        </a>
      </div>
    </div>
  );
}
