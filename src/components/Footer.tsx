import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { STORE_INFO } from "@/data/jewellery-data";
import RoyalCrest from "@/components/RoyalCrest";

export default function Footer() {
  return (
    <footer className="bg-[#f5f1eb] text-[#524c43] border-t border-[#e8e2d8] pt-12 sm:pt-16 pb-28 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 border-b border-[#e2d8cc]">
          {/* Col 1: Brand & Heritage */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <RoyalCrest size={38} />
              <span className="font-serif text-xl font-normal tracking-[0.2em] text-[#171513] uppercase">
                Jayanti Jewellers
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#635b50] leading-relaxed">
              Purveyors of fine 22K 916 BIS Hallmarked Gold, Bengali bridal heirlooms, 
              certified diamonds, and 92.5 pure silver in Khukurdaha (Jiakhali), West Bengal.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#8c6834] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% BIS Hallmarked • Laser HUID Inscribed</span>
            </div>
          </div>

          {/* Col 2: Collections Directory */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#171513] mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#collections" className="hover:text-[#171513] transition-colors">
                  Royal Bridal Heritage
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#171513] transition-colors">
                  Designer Pola & Sankha Bangles
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#171513] transition-colors">
                  Everyday Lightweight Gold
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#171513] transition-colors">
                  Certified Diamonds & Solitaires
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#171513] transition-colors">
                  Pure 92.5 Silver & Pooja Essentials
                </a>
              </li>
              <li>
                <a href="#bridal-studio" className="hover:text-[#171513] transition-colors text-[#8c6834] font-medium">
                  ✦ Bridal Trousseau Studio
                </a>
              </li>
              <li>
                <a href="#gold-calculator" className="hover:text-[#171513] transition-colors text-[#8c6834] font-medium">
                  ✦ Vori &amp; Rate Calculator
                </a>
              </li>
              <li>
                <a href="#bespoke" className="hover:text-[#171513] transition-colors">
                  Bespoke Handcrafted Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Showroom Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#171513] mb-4">
              Showroom Hours
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8c6834] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#171513] font-medium">Friday to Wednesday</p>
                  <p className="text-[#736c62] text-xs">10:00 AM – 7:00 PM</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#e2d8cc]">
                <p className="text-rose-800 font-semibold text-xs">
                  Thursday: Closed
                </p>
                <p className="text-[#736c62] text-[11px] mt-0.5">
                  Weekly Holiday & Assaying Audits
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="#timings"
                  className="text-xs text-[#8c6834] hover:text-[#171513] font-medium inline-block"
                >
                  View full 7-day schedule &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Store Location & Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#171513] mb-4">
              Showroom Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8c6834] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-[#524c43]">
                  Road, Khukur Daha, Jiakhali,
                  <br />
                  Paschim Medinipur, West Bengal 721641
                </p>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#8c6834] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="block font-medium text-[#171513] hover:text-[#8c6834]"
                  >
                    {STORE_INFO.phoneFormatted}
                  </a>
                  <a
                    href={`tel:${STORE_INFO.altPhone}`}
                    className="block text-xs text-[#736c62] hover:text-[#171513]"
                  >
                    Alt: {STORE_INFO.altPhone}
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-semibold text-[#8c6834] hover:text-[#171513]"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736c62]">
          <p>
            &copy; 2026 Jayanti Jewellers (জয়ন্তী জুয়েলার্স). All rights reserved.
          </p>

          <p className="text-[11px] text-[#8c6834]">
            Government of India BIS Hallmarked Jewellery Showroom
          </p>
        </div>
      </div>
    </footer>
  );
}
