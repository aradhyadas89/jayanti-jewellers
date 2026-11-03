"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Trash2, MessageCircle, Phone, Sparkles, Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { STORE_INFO } from "@/data/jewellery-data";
import RoyalCrest from "@/components/RoyalCrest";

export default function WishlistDrawer() {
  const { wishlist, removeFromWishlist, isDrawerOpen, setIsDrawerOpen, clearWishlist } =
    useWishlist();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen, setIsDrawerOpen]);

  if (!isDrawerOpen) return null;

  const buildWhatsAppMessage = () => {
    const itemsList = wishlist
      .map((item, idx) => `${idx + 1}. ${item.title} (${item.purity}, ${item.weightApprox || ""})`)
      .join("%0A");

    const message = encodeURIComponent(
      `Hello Jayanti Jewellers! I have saved these pieces to my Bridal Wishlist on your website:%0A%0A`
    ) +
      itemsList +
      encodeURIComponent(
        `%0A%0ATotal Saved: ${wishlist.length} pieces.%0APlease share current pricing, live showroom availability, and schedule a physical trial at your Khukurdaha showroom.`
      );

    return `https://wa.me/919734805821?text=${message}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsDrawerOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="My Royal Bridal Wishlist Drawer"
    >
      <div
        className="relative w-full max-w-full sm:max-w-md bg-[#faf8f5] border-l border-[#c5a059]/40 h-[100dvh] flex flex-col justify-between shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#e8e2d8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RoyalCrest size={38} className="sm:w-10 sm:h-10" />
            <div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8c6834] font-semibold block">
                Jayanti Atelier Vault
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#12100e] font-normal leading-tight">
                My Bridal Wishlist ({wishlist.length})
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 text-[#736c62] hover:text-[#12100e] transition-colors rounded-full hover:bg-[#faf8f5] min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Close wishlist drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Item List */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-3.5">
          {wishlist.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full border border-[#c5a059]/40 bg-[#faf6ef] flex items-center justify-center mx-auto shadow-2xs">
                <Heart className="w-7 h-7 text-[#c5a059]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-[#12100e]">Your Vault is Empty</h4>
                <p className="text-xs text-[#736c62] max-w-xs mx-auto leading-relaxed">
                  Browse our collection and tap the gold heart icon on any necklace, bangle, or ring to save your wedding favorites.
                </p>
              </div>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="jewel-box p-3 sm:p-3.5 flex items-center gap-3 sm:gap-3.5 bg-white relative group rounded-2xl"
              >
                {/* Thumbnail */}
                <div className="relative w-14 h-18 sm:w-16 sm:h-20 shrink-0 border border-[#d5cbbe] overflow-hidden bg-[#f4eee6] rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 56px, 64px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] uppercase tracking-wider text-[#8c6834] font-semibold block truncate">
                    {item.purity}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-[#12100e] leading-snug truncate mt-0.5">
                    {item.title}
                  </h4>
                  {item.weightApprox && (
                    <span className="text-[11px] text-[#524c43] font-mono block mt-1">
                      {item.weightApprox}
                    </span>
                  )}
                </div>

                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => removeFromWishlist(item.id)}
                  className="p-2 text-[#736c62] hover:text-rose-700 transition-colors rounded-full hover:bg-rose-50 min-w-[36px] min-h-[36px] flex items-center justify-center"
                  title="Remove from wishlist"
                  aria-label={`Remove ${item.title}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Actions and Safe Area */}
        {wishlist.length > 0 && (
          <div className="p-4 sm:p-6 bg-white border-t border-[#e8e2d8] space-y-3.5 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <div className="flex items-center justify-between text-xs text-[#736c62]">
              <span>Saved Masterpieces:</span>
              <strong className="text-[#12100e] font-mono">{wishlist.length} Items</strong>
            </div>

            <div className="space-y-2.5">
              <a
                href={buildWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3.5 px-4 btn-jewel-gold text-xs flex items-center justify-center gap-2 shadow-md rounded-full"
              >
                <MessageCircle className="w-4 h-4 text-[#12100e]" />
                <span>Book Showroom Trial on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="min-h-[44px] py-2.5 px-3 btn-jewel-outline text-xs flex items-center justify-center gap-1.5 rounded-full"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8c6834]" />
                  <span>Call Store</span>
                </a>

                <button
                  type="button"
                  onClick={clearWishlist}
                  className="min-h-[44px] py-2.5 px-3 border border-[#d5cbbe] hover:border-rose-400 text-[#736c62] hover:text-rose-700 text-xs uppercase tracking-wider font-medium transition-colors rounded-full"
                >
                  Clear Vault
                </button>
              </div>
            </div>

            <div className="pt-2 text-center">
              <p className="text-[10px] text-[#736c62] flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-[#c5a059]" />
                <span>100% BIS 916 Hallmarked • Khukur Daha Showroom</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

