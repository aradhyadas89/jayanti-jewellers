"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/jewellery-data";
import ScrollReveal from "@/components/ScrollReveal";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-14 sm:py-20 lg:py-28 bg-[#f5f1eb] border-t border-[#e8e2d8] relative overflow-hidden">
      {/* Decorative large background text with gentle float */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 left-1/2 -translate-x-1/2 font-serif text-[10rem] sm:text-[14rem] lg:text-[18rem] leading-none text-[#e8e2d8]/40 font-bold animate-float-slow"
      >
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#8c6834]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8c6834]">
                Patron Testimonials
              </span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#8c6834]" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#12100e] tracking-tight">
              Generations of Trust
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#524c43] leading-relaxed font-light">
              Here is what our valued patrons in Khukurdaha, Tamluk, and Paschim Medinipur share about their wedding orders and family heirlooms.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} direction="up" enable3D={true} intensity="subtle">
              <figure
                className="jewel-box jewel-corners group relative p-6 sm:p-8 flex flex-col justify-between h-full rounded-3xl"
              >
                {/* Decorative quote mark */}
                <div
                  aria-hidden="true"
                  className="absolute top-5 right-6 font-serif text-6xl leading-none text-[#f0eae0] group-hover:text-[#e8d9bd] transition-colors duration-300 select-none pointer-events-none"
                >
                  &rdquo;
                </div>

                <div className="relative">
                  {/* Stars */}
                  <div
                    className="flex items-center gap-1 mb-5"
                    aria-label={`Rated ${review.rating} out of 5 stars`}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#c5a059] fill-[#c5a059] group-hover:scale-110 transition-transform duration-200" />
                    ))}
                  </div>

                  <blockquote className="text-sm text-[#474139] leading-relaxed italic mb-6">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="pt-5 border-t border-[#f0eae0] flex items-center justify-between gap-3">
                  <div>
                    <cite className="font-serif not-italic text-base font-semibold text-[#12100e] block">
                      {review.name}
                    </cite>
                    <p className="text-xs text-[#736c62] mt-0.5">{review.location}</p>
                  </div>

                  <span className="jewel-stamp shrink-0 rounded-full">
                    {review.tag}
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Maps rating note */}
        <ScrollReveal direction="up" delay={400}>
          <p className="mt-12 text-center text-xs text-[#8c6834] font-medium tracking-wide">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-[#8c6834]" aria-hidden="true" />
              Reviewed by patrons in Khukurdaha, Tamluk, Paschim Medinipur &amp; beyond
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
