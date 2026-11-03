"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, Heart } from "lucide-react";
import { STORE_INFO } from "@/data/jewellery-data";
import { useShowroomStatus } from "@/utils/showroom-status";
import { useWishlist } from "@/context/WishlistContext";
import RoyalCrest from "@/components/RoyalCrest";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const status = useShowroomStatus();
  const { wishlist, setIsDrawerOpen } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "#collections" },
    { name: "Bridal Studio", href: "#bridal-studio" },
    { name: "Rate Calculator", href: "#gold-calculator" },
    { name: "Hallmarking", href: "#hallmark" },
    { name: "Bespoke", href: "#bespoke" },
    { name: "Showroom Hours", href: "#timings" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f5]/98 shadow-md border-b border-[#c5a059]/30 backdrop-blur-md"
          : "bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e2d8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 lg:h-24">
          {/* Brand Logo & Royal Heritage Title */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 xl:gap-3.5 group focus:outline-none focus:ring-1 focus:ring-[#8c6834] py-1 min-w-0"
          >
            {/* Royal Heritage Monogram Crest */}
            <div className="relative group-hover:scale-105 transition-transform duration-300 shrink-0">
              <RoyalCrest size={38} className="sm:w-[44px] sm:h-[44px] xl:w-[48px] xl:h-[48px] animate-spin-slow" />
            </div>

            {/* Typography */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-base sm:text-lg lg:text-xl xl:text-2xl font-normal tracking-[0.12em] sm:tracking-[0.16em] xl:tracking-[0.2em] text-[#12100e] uppercase leading-tight group-hover:text-[#8c6834] transition-colors truncate">
                  Jayanti Jewellers
                </span>
              </div>
              <span className="text-[8px] sm:text-[9px] xl:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.24em] xl:tracking-[0.28em] text-[#8c6834] font-medium mt-0.5 truncate">
                Royal Goldsmiths &bull; Khukur Daha
              </span>
            </div>
          </Link>

          {/* Desktop Navigation for PC screens */}
          <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-5 2xl:space-x-7 text-[11px] xl:text-xs font-medium tracking-[0.1em] xl:tracking-[0.14em] uppercase text-[#474139] shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#12100e] transition-colors relative py-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#8c6834] hover:after:w-full after:transition-all after:duration-250"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Status, Call & Directions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-2.5 xl:gap-3 shrink-0">
            {status && (
              <div className="hidden 2xl:flex items-center gap-1.5 jewel-stamp py-1 px-2.5 rounded-full">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    status.isOpen ? "bg-emerald-600 animate-pulse" : "bg-amber-600"
                  }`}
                />
                <span>{status.isOpen ? "Open Today" : "Closed Today"}</span>
              </div>
            )}

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-2.5 lg:px-3 xl:px-3.5 py-1.5 xl:py-2 text-[10px] lg:text-[11px] btn-jewel-outline inline-flex items-center gap-1.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c6834]" />
              <span className="hidden xl:inline">{STORE_INFO.phoneFormatted}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Bridal Wishlist Vault Button */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2 lg:p-2.5 text-[#12100e] hover:text-[#8c6834] transition-colors border border-[#d5cbbe] hover:border-[#8c6834] bg-white shadow-2xs rounded-full min-w-[38px] min-h-[38px] lg:min-w-[40px] lg:min-h-[40px] flex items-center justify-center"
              title="Open My Bridal Wishlist"
              aria-label={`Open Bridal Wishlist with ${wishlist.length} saved items`}
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  wishlist.length > 0 ? "fill-[#c5a059] text-[#c5a059]" : "text-[#8c6834]"
                }`}
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#12100e] text-[#f7eac4] border border-[#c5a059] text-[9px] font-bold flex items-center justify-center font-mono animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </button>

            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex px-3.5 py-2 text-[11px] btn-jewel-dark items-center gap-1.5 rounded-full"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Showroom Map</span>
            </a>
          </div>

          {/* Mobile Menu & Quick Action Buttons */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {/* Mobile Wishlist Button */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2 sm:p-2.5 text-[#12100e] border border-[#d5cbbe] bg-white shadow-2xs rounded-full min-w-[38px] min-h-[38px] flex items-center justify-center"
              aria-label="Open Wishlist"
            >
              <Heart
                className={`w-4 h-4 ${
                  wishlist.length > 0 ? "fill-[#c5a059] text-[#c5a059]" : "text-[#8c6834]"
                }`}
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#12100e] text-[#f7eac4] text-[8px] font-bold flex items-center justify-center font-mono">
                  {wishlist.length}
                </span>
              )}
            </button>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="p-2 sm:p-2.5 text-[#12100e] border border-[#d5cbbe] bg-white md:hidden shadow-2xs rounded-full min-w-[38px] min-h-[38px] flex items-center justify-center"
              aria-label="Call Jayanti Jewellers"
            >
              <Phone className="w-4 h-4 text-[#8c6834]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#12100e] hover:bg-[#f2ece3] focus:outline-none rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Safe Area and Dynamic Viewport Height */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#e8e2d8] bg-[#faf8f5] px-5 pt-3 pb-6 space-y-4 shadow-xl animate-fade-in max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col divide-y divide-[#f0eae0]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-medium text-[#474139] hover:text-[#12100e] min-h-[44px] flex items-center transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 text-xs btn-jewel-outline rounded-full"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c6834]" />
              <span>Call 09734805821</span>
            </a>

            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 text-xs btn-jewel-dark rounded-full"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Directions on Google Maps</span>
            </a>
          </div>
        </div>
      )}
      {/* Hairline gold accent on scroll */}
      {scrolled && (
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#c5a059]/60 to-transparent pointer-events-none" />
      )}
    </header>
  );
}
