"use client";

import { Calendar, CheckCircle2, XCircle, Phone, MessageCircle, Clock, Sparkles } from "lucide-react";
import { WEEKLY_SCHEDULE, STORE_INFO } from "@/data/jewellery-data";
import { useShowroomStatus } from "@/utils/showroom-status";
import ScrollReveal from "@/components/ScrollReveal";

export default function ShowroomHoursCard() {
  const status = useShowroomStatus();

  return (
    <section id="timings" className="py-14 sm:py-20 lg:py-28 bg-[#faf8f5] border-t border-[#e8e2d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Context & Store Status */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" enable3D={true}>
              <div className="jewel-stamp rounded-full">
                <Clock className="w-3.5 h-3.5 text-[#8c6834]" />
                <span>Operating Hours &bull; Khukurdaha</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} enable3D={true}>
              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#12100e] tracking-tight leading-tight">
                  Showroom Timings &amp;{" "}
                  <span className="italic text-gold-gradient font-light block">
                    Visiting Schedule
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} enable3D={true}>
              <p className="text-sm sm:text-base text-[#524c43] leading-relaxed font-light">
                We warmly welcome you to visit our Khukurdaha showroom to view our collections in person. Our specialists are available to assist with bridal sizing, hallmarking verification, and custom heirloom commissions.
              </p>
            </ScrollReveal>

            {/* Live Indicator Card with 3D elevation */}
            <ScrollReveal direction="up" delay={200} enable3D={true}>
              <div className="p-4 sm:p-6 jewel-box space-y-3.5 rounded-3xl" aria-live="polite" aria-atomic="true">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#736c62] font-semibold">
                    Live Showroom Status (IST)
                  </span>
                  {status ? (
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold shadow-2xs border rounded-full ${
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
                      {status.badgeText}
                    </span>
                  ) : (
                    <span className="text-xs text-[#8c6834]">Calculating IST...</span>
                  )}
                </div>

                {status && (
                  <p className="text-sm text-[#12100e] font-medium leading-snug">
                    {status.subText}
                  </p>
                )}

                <div className="pt-3 border-t border-[#e8e2d8] flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 font-medium text-[#12100e] hover:text-[#8c6834] transition-colors py-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8c6834]" />
                    <span>09734805821</span>
                  </a>
                  <span className="hidden sm:inline text-[#d5cbbe]">|</span>
                  <a
                    href={STORE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-[#1b7e3f] hover:underline py-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Weekly Holiday Notice Card */}
            <ScrollReveal direction="up" delay={250} enable3D={true}>
              <div className="p-3.5 sm:p-5 jewel-box bg-[#fbf9f4] border-l-4 border-l-rose-700 text-xs text-[#524c43] leading-relaxed shadow-2xs rounded-2xl">
                <strong className="block text-[#12100e] font-semibold mb-1 text-[13px]">
                  Weekly Holiday Notice:
                </strong>
                Our showroom is closed every <strong>Thursday</strong> for workshop crafting, assaying audits, and maintenance. We reopen on Friday promptly at 10:00 AM.
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Complete Timetable Table */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={150} enable3D={true} intensity="deep">
              <div className="jewel-box jewel-corners shadow-md overflow-hidden rounded-3xl">
                <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#e8e2d8] flex flex-wrap items-center justify-between gap-2 bg-[#f5f1eb]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#8c6834]" />
                    <span className="font-serif text-base font-semibold text-[#12100e]">
                      Weekly Operating Timetable
                    </span>
                  </div>
                  <span className="text-xs text-[#736c62] uppercase tracking-wider font-medium">
                    Khukur Daha, Jiakhali
                  </span>
                </div>

                <div className="divide-y divide-[#f0eae0]">
                  {WEEKLY_SCHEDULE.map((item) => {
                    const isToday = status?.currentDayIndex === item.dayIndex;
                    return (
                      <div
                        key={item.day}
                        className={`px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0 border-l-4 transition-colors ${
                          isToday
                            ? "bg-[#faf3e8] border-l-[#8c6834] font-semibold"
                            : "border-l-transparent hover:bg-[#faf8f5]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {item.isOpen ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-700 shrink-0" />
                          )}

                          <span
                            className={`text-sm ${
                              isToday ? "text-[#12100e] font-semibold" : "text-[#474139]"
                            }`}
                          >
                            {item.day}
                          </span>

                          {isToday && (
                            <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 bg-[#8c6834] text-[#f7eac4] font-semibold shadow-2xs rounded-full inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f7eac4] animate-pulse" />
                              Today
                            </span>
                          )}
                        </div>

                        <div className="text-left sm:text-right pl-7 sm:pl-0 mt-0.5 sm:mt-0">
                          {item.isOpen ? (
                            <span className="text-xs sm:text-sm text-[#12100e] font-medium">
                              {item.openTime} – {item.closeTime}
                            </span>
                          ) : (
                            <span className="text-xs font-semibold text-rose-800 bg-rose-50 px-3 py-1 border border-rose-200 shadow-2xs rounded-full inline-block">
                              Closed (Weekly Holiday)
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#faf8f5] border-t border-[#e8e2d8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-xs text-[#736c62]">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#8c6834] shrink-0" />
                    <span>Bridal consultation appointments recommended</span>
                  </div>
                  <a 
                    href={`tel:${STORE_INFO.phone}`} 
                    className="text-[#8c6834] font-semibold hover:underline"
                  >
                    Call Desk: 09734805821
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
