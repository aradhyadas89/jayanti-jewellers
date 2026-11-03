"use client";

import { useState } from "react";
import { MapPin, Navigation, Phone, ExternalLink, MessageCircle, Clock, Compass, Copy, Check } from "lucide-react";
import { STORE_INFO } from "@/data/jewellery-data";
import ScrollReveal from "@/components/ScrollReveal";

export default function LocationMapSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Jayanti Jewellers, Road, Khukur Daha, Jiakhali, West Bengal 721641");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <section id="location" className="py-14 sm:py-20 lg:py-28 bg-[#faf8f5] border-t border-[#e8e2d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]" />
            <span className="jewel-stamp rounded-full">
              Store Locator &amp; Visit
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#12100e] tracking-tight">
            Flagship Showroom
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#524c43] leading-relaxed font-light">
            Located in Khukurdaha (Jiakhali), Paschim Medinipur. We invite you to experience our certified hallmarked gold, diamond, and pure silver collections in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Contact & Address Directory Card with 3D Scroll Reveal */}
          <div className="lg:col-span-5 h-full">
            <ScrollReveal direction="right" enable3D={true} intensity="medium" className="h-full">
              <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10 jewel-box jewel-corners shadow-md h-full rounded-3xl">
                <div className="space-y-6 sm:space-y-7">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8c6834] font-semibold block mb-1">
                      Showroom Address
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#12100e]">
                      Jayanti Jewellers
                    </h3>
                  </div>

                  {/* Address details */}
                  <div className="flex items-start gap-3.5 sm:gap-4 text-sm text-[#524c43]">
                    <div 
                      className="w-9 h-9 border border-[#c5a059]/40 bg-[#faf6ef] flex items-center justify-center shrink-0 mt-0.5 rounded-full"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.25)" }}
                    >
                      <MapPin className="w-4 h-4 text-[#8c6834]" />
                    </div>
                    <div>
                      <p className="text-[#12100e] font-semibold leading-relaxed">
                        Road, Khukur Daha, Jiakhali
                      </p>
                      <p className="text-xs text-[#736c62] mt-0.5">
                        Near Lakshmi Bazar, Paschim Medinipur
                      </p>
                      <p className="text-xs text-[#8c6834] font-semibold mt-1 tracking-wide">
                        West Bengal – PIN 721641
                      </p>
                      <div className="mt-2.5">
                        <button
                          type="button"
                          onClick={handleCopyAddress}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#faf6ef] hover:bg-[#f5eedf] border border-[#c5a059]/40 hover:border-[#8c6834] rounded-full text-[11px] font-medium text-[#8c6834] transition-colors focus:outline-none"
                          title="Copy address to clipboard"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-700 font-semibold">Address Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-[#8c6834]" />
                              <span>Copy Address for GPS</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Direct Phone Numbers */}
                  <div className="flex items-start gap-3.5 sm:gap-4 text-sm text-[#524c43] pt-5 border-t border-[#e8e2d8]">
                    <div 
                      className="w-9 h-9 border border-[#c5a059]/40 bg-[#faf6ef] flex items-center justify-center shrink-0 mt-0.5 rounded-full"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.25)" }}
                    >
                      <Phone className="w-4 h-4 text-[#8c6834]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#736c62] font-semibold">
                        Direct Contact &amp; Orders
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 mt-1">
                        <a
                          href={`tel:${STORE_INFO.phone}`}
                          className="text-base font-medium text-[#12100e] hover:text-[#8c6834] transition-colors"
                        >
                          {STORE_INFO.phoneFormatted}
                        </a>
                        <span className="hidden sm:inline text-[#d5cbbe]">/</span>
                        <a
                          href={`tel:${STORE_INFO.altPhone}`}
                          className="text-xs sm:text-sm text-[#736c62] hover:text-[#12100e] transition-colors"
                        >
                          {STORE_INFO.altPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Showroom Hours */}
                  <div className="flex items-start gap-3.5 sm:gap-4 text-sm text-[#524c43] pt-5 border-t border-[#e8e2d8]">
                    <div 
                      className="w-9 h-9 border border-[#c5a059]/40 bg-[#faf6ef] flex items-center justify-center shrink-0 mt-0.5 rounded-full"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.25)" }}
                    >
                      <Clock className="w-4 h-4 text-[#8c6834]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#736c62] font-semibold">
                        Operating Hours
                      </p>
                      <p className="text-[#12100e] font-medium mt-0.5 text-xs sm:text-sm">
                        10:00 AM – 7:00 PM (Fri, Sat, Sun, Mon, Tue, Wed)
                      </p>
                      <p className="text-xs text-rose-700 font-semibold mt-0.5">
                        Thursday: Closed (Weekly Holiday)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Navigation & Call Actions */}
                <div className="pt-6 sm:pt-8 space-y-3">
                  <a
                    href={STORE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] py-3.5 sm:py-4 px-4 btn-jewel-dark text-xs flex items-center justify-center gap-2 shadow-sm rounded-full"
                  >
                    <Navigation className="w-4 h-4 text-[#c5a059]" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <a
                      href={`tel:${STORE_INFO.phone}`}
                      className="min-h-[44px] py-3 px-3 btn-jewel-outline text-xs flex items-center justify-center gap-1.5 rounded-full"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#8c6834]" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={STORE_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] py-3 px-3 btn-jewel-emerald text-xs flex items-center justify-center gap-1.5 rounded-full"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Embedded Interactive Map with 3D Elevation */}
          <div className="lg:col-span-7 h-full">
            <ScrollReveal direction="left" delay={150} enable3D={true} intensity="medium" className="h-full">
              <div className="jewel-box relative shadow-md min-h-[340px] sm:min-h-[420px] h-full flex flex-col overflow-hidden rounded-3xl">
                <div className="relative w-full h-full flex-1 min-h-[300px] sm:min-h-[380px]">
                  <iframe
                    title="Jayanti Jewellers Showroom Location Map"
                    src={STORE_INFO.embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full absolute inset-0"
                  />
                </div>

                {/* Bottom Bar on Map */}
                <div className="p-3.5 sm:p-5 bg-[#faf8f5] border-t border-[#e8e2d8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-xs text-[#524c43]">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#8c6834]" />
                    <span className="font-mono">Coordinates: 22.4745° N, 87.7497° E</span>
                  </div>
                  <a
                    href={STORE_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8c6834] hover:text-[#12100e] font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Live Driving Directions</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
