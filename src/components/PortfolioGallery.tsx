"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Phone, Sparkles, X, ShieldCheck, Scale, ArrowRight, Eye, Heart } from "lucide-react";
import { PORTFOLIO_ITEMS, CATEGORIES, STORE_INFO, JewelleryItem } from "@/data/jewellery-data";
import { useWishlist } from "@/context/WishlistContext";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import RoyalCrest from "@/components/RoyalCrest";
import JewellerLoupe from "@/components/JewellerLoupe";

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<JewelleryItem | null>(null);
  const { isInWishlist, toggleWishlist } = useWishlist();

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  const createWhatsAppLink = (item: JewelleryItem) => {
    const text = encodeURIComponent(
      `Hello Jayanti Jewellers, I am inquiring about "${item.title}" (${item.purity}, ${item.weightApprox || ""}) as displayed on your website. Please share current pricing and availability.`
    );
    return `https://wa.me/919734805821?text=${text}`;
  };

  return (
    <section id="collections" className="py-14 sm:py-20 lg:py-28 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#8c6834]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8c6834]">
              Curated Atelier Portfolio
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#8c6834]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#171513] tracking-tight">
            The Jewellery Collection
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#524c43] leading-relaxed max-w-2xl mx-auto font-light">
            Each creation is hand-forged by master Bengali karigars. Every 22K gold ornament carries 
            government-mandated BIS 916 hallmarking with an indelible six-digit laser HUID.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#8c6834] font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showing {filteredItems.length} Masterpiece Designs</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-10 sm:mb-12 gap-4 sm:gap-8 border-b border-[#e8e2d8] no-scrollbar scroll-smooth px-1">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`pb-3 text-xs sm:text-sm tracking-[0.14em] uppercase font-medium whitespace-nowrap transition-all duration-300 relative min-h-[44px] flex items-center ${
                  isActive
                    ? "text-[#171513] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#8c6834]"
                    : "text-[#736c62] hover:text-[#171513]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} delay={(idx % 3) * 120} enable3D={true} intensity="medium">
              <TiltCard maxTilt={6} glare={true} className="h-full">
                <div
                  className="card-gold-top jewel-box rounded-3xl group flex flex-col justify-between overflow-hidden h-full"
                >
                  {/* Product Photography Container with Gold Sunbeam Sheen */}
                  <div 
                    className="relative aspect-[4/5] w-full overflow-hidden bg-[#f4eee6] cursor-pointer gold-shine-effect rounded-t-[22px]"
                    onClick={() => setSelectedItem(item)}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} — Jayanti Jewellers`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/95 backdrop-blur-sm text-[#171513] text-[11px] font-semibold uppercase tracking-wider shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-[#c5a059]/40 rounded-full">
                        <Eye className="w-3.5 h-3.5 text-[#8c6834]" />
                        Quick View Details
                      </span>
                    </div>

                    {/* Purity & Hallmark Tag */}
                    <div className="absolute top-3 left-3 jewel-stamp rounded-full bg-white/95 backdrop-blur-xs">
                      {item.purity}
                    </div>

                    {/* Royal Bengal Archive Badge for Bridal & Featured Heirloom pieces */}
                    {(item.category === "bridal" || item.featured) && (
                      <div className="absolute top-3 right-3 px-3 py-1 bg-[#3d0f13]/95 text-[#f5d998] border border-[#c5a059]/60 text-[9px] font-semibold tracking-widest uppercase shadow-sm flex items-center gap-1 backdrop-blur-xs rounded-full">
                        <Sparkles className="w-2.5 h-2.5 text-[#c5a059]" />
                        <span>Royal Archive</span>
                      </div>
                    )}

                    {/* Approximate weight indicator */}
                    {item.weightApprox && (
                      <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-xs border border-[#d5cbbe] text-[10px] text-[#474139] font-medium shadow-xs rounded-full" style={{ boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.2)" }}>
                        {item.weightApprox}
                      </div>
                    )}

                    {/* Floating Wishlist Heart Toggle */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(item);
                      }}
                      className={`absolute bottom-3 right-3 z-10 p-2 rounded-full backdrop-blur-xs transition-all shadow-xs ${
                        isInWishlist(item.id)
                          ? "bg-[#12100e] text-[#c5a059] border border-[#c5a059]"
                          : "bg-white/90 text-[#736c62] hover:text-[#c5a059] hover:bg-white border border-[#d5cbbe]"
                      }`}
                      title={isInWishlist(item.id) ? "Saved in Bridal Wishlist" : "Save to Bridal Wishlist"}
                      aria-label={`Save ${item.title} to Bridal Wishlist`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${
                          isInWishlist(item.id) ? "fill-[#c5a059]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] uppercase tracking-wider text-[#8c6834] font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <h3 
                        onClick={() => setSelectedItem(item)}
                        className="font-serif text-xl font-normal text-[#171513] mb-2 leading-snug group-hover:text-[#8c6834] transition-colors cursor-pointer"
                      >
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#524c43] leading-relaxed mb-4 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Actions & Inquiries */}
                    <div className="pt-4 border-t border-[#f0eae0] flex items-center gap-2">
                      <a
                        href={createWhatsAppLink(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 btn-jewel-dark rounded-full text-[11px] flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                        <span>Inquire on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(item)}
                        className="p-2.5 btn-jewel-outline rounded-full w-10 h-10 flex items-center justify-center"
                        title="View Full Specifications"
                        aria-label={`View full specifications for ${item.title}`}
                      >
                        <Eye className="w-4 h-4 text-[#8c6834]" />
                      </button>

                      <a
                        href={`tel:${STORE_INFO.phone}`}
                        className="p-2.5 btn-jewel-outline rounded-full w-10 h-10 flex items-center justify-center"
                        title="Call Showroom for Pricing"
                        aria-label={`Call Showroom for ${item.title}`}
                      >
                        <Phone className="w-4 h-4 text-[#8c6834]" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bespoke Inquiry Banner */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 md:p-10 jewel-box jewel-corners bg-[#f5f1eb] rounded-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          <div className="text-left max-w-2xl">
            <span className="jewel-stamp rounded-full mb-3">
              Bespoke Bridal Atelier
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#171513] leading-tight">
              Have a custom wedding design, Pinterest heirloom, or sketch in mind?
            </h4>
            <p className="text-xs sm:text-sm text-[#524c43] mt-2 leading-relaxed">
              Share your reference photograph on WhatsApp with our jewelry specialists. We provide exact gram weight 
              calculations, gold purity benchmarks, and making charge estimates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0 w-full sm:w-auto">
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] px-6 sm:px-7 py-3.5 btn-jewel-emerald rounded-full text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>Send Reference Photo</span>
            </a>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="w-full sm:w-auto min-h-[44px] px-5 sm:px-6 py-3.5 btn-jewel-outline rounded-full text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#8c6834]" />
              <span>Call Showroom</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div 
            className="relative jewel-box jewel-corners max-w-3xl w-full max-h-[90dvh] overflow-y-auto overscroll-contain shadow-2xl p-4 sm:p-6 md:p-8 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-[#736c62] hover:text-[#171513] hover:bg-[#faf8f5] transition-colors rounded-full z-30"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
              {/* Modal Image with Interactive 10x Jeweller Loupe */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f4eee6] border border-[#d5cbbe] rounded-2xl" style={{ boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.3)" }}>
                <JewellerLoupe
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  zoomLevel={2.6}
                  className="w-full h-full rounded-2xl"
                />
                <div className="absolute top-3 left-3 jewel-stamp rounded-full bg-white/95 backdrop-blur-xs z-20 pointer-events-none">
                  {selectedItem.purity}
                </div>
              </div>

              {/* Modal Content */}
              <div className="space-y-5 text-left">
                {/* Royal Authenticity Crest Banner */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-[#e8e2d8]">
                  <RoyalCrest size={42} />
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#8c6834] font-semibold block">
                      Jayanti Jewellers Atelier
                    </span>
                    <span className="text-xs font-serif text-[#171513] italic font-medium">
                      Authentic Bengal Karigari &bull; Masterpiece Collection
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8c6834] font-semibold">
                      {selectedItem.category.toUpperCase()} MASTERPIECE
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#171513] leading-tight">
                    {selectedItem.title}
                  </h3>
                </div>

                <p className="text-sm text-[#524c43] leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Spec Badges in Jewel Box Frame */}
                <div className="p-4 jewel-box bg-[#faf8f5] space-y-2.5 text-xs text-[#474139] rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[#736c62] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#8c6834]" />
                      Hallmark Standard:
                    </span>
                    <strong className="text-[#171513]">{selectedItem.purity}</strong>
                  </div>

                  {selectedItem.weightApprox && (
                    <div className="flex items-center justify-between pt-2 border-t border-[#f0eae0]">
                      <span className="text-[#736c62] flex items-center gap-1.5">
                        <Scale className="w-4 h-4 text-[#8c6834]" />
                        Calibrated Weight:
                      </span>
                      <strong className="text-[#171513]">{selectedItem.weightApprox}</strong>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-[#f0eae0]">
                    <span className="text-[#736c62]">Laser Verification:</span>
                    <strong className="text-[#8c6834] font-mono">6-Digit BIS HUID</strong>
                  </div>
                </div>

                {/* CTAs in Modal */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={createWhatsAppLink(selectedItem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-4 btn-jewel-gold rounded-full text-xs flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#12100e]" />
                      <span>Inquire Current Price on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => toggleWishlist(selectedItem)}
                      className={`p-3.5 border transition-all flex items-center justify-center rounded-full w-12 h-12 shrink-0 ${
                        isInWishlist(selectedItem.id)
                          ? "bg-[#12100e] text-[#c5a059] border-[#c5a059]"
                          : "bg-white text-[#736c62] hover:text-[#c5a059] border-[#d5cbbe] hover:border-[#c5a059]"
                      }`}
                      title={isInWishlist(selectedItem.id) ? "Saved in Bridal Wishlist" : "Save to Bridal Wishlist"}
                      aria-label="Toggle Wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isInWishlist(selectedItem.id) ? "fill-[#c5a059]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${STORE_INFO.phone}`}
                      className="min-h-[44px] py-3 px-3 btn-jewel-outline rounded-full text-xs flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#8c6834]" />
                      <span>Call Showroom</span>
                    </a>

                    <a
                      href={STORE_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] py-3 px-3 btn-jewel-dark rounded-full text-xs flex items-center justify-center gap-1.5"
                    >
                      <span>Showroom Trial</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
