"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Check, Crown, ShieldCheck, Scale, Clock, RotateCcw } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import RoyalCrest from "@/components/RoyalCrest";

interface TrousseauPiece {
  id: string;
  name: string;
  bengaliName: string;
  category: string;
  minWeight: number;
  maxWeight: number;
  karigarHours: number;
  image: string;
  description: string;
  defaultSelected: boolean;
}

const TROUSSEAU_PIECES: TrousseauPiece[] = [
  {
    id: "choker",
    name: "The Rajnandini Filigree Choker",
    bengaliName: "রাজকীয় তারাকাশি চোকার",
    category: "Necklace",
    minWeight: 22,
    maxWeight: 38,
    karigarHours: 48,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "Royal collar choker with hand-pulled 22K gold lace filigree and cascading drops.",
    defaultSelected: true,
  },
  {
    id: "sitahar",
    name: "Grand Imperial 5-Tier Sita Har",
    bengaliName: "পাঁচ নরী রাজকীয় সীতাহার",
    category: "Long Necklace",
    minWeight: 28,
    maxWeight: 55,
    karigarHours: 64,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Multi-layered auspicious bridal necklace with traditional Mayur & Padma medallions.",
    defaultSelected: true,
  },
  {
    id: "pola",
    name: "22K Gold-Inlaid Pola & Sankha",
    bengaliName: "সোনার তারে বাঁধানো শাঁখা ও পলা",
    category: "Bangles",
    minWeight: 8,
    maxWeight: 16,
    karigarHours: 24,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    description: "Revered Bengali bridal red Pola and pure white Sankha bound in 22K gold crowns.",
    defaultSelected: true,
  },
  {
    id: "bala",
    name: "Imperial Peacock Mukher Bala & Kankan",
    bengaliName: "ময়ূর মুখ বালা ও কাঁকন জোড়া",
    category: "Solid Bangles",
    minWeight: 24,
    maxWeight: 42,
    karigarHours: 52,
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=800&q=80",
    description: "Solid gold carved peacock head bracelets with screw safety mechanism.",
    defaultSelected: true,
  },
  {
    id: "jhumka",
    name: "Chandrakala 3-Tier Heritage Jhumkas",
    bengaliName: "চন্দ্রকলা তিন তলা রাজকীয় ঝুমকো",
    category: "Earrings",
    minWeight: 12,
    maxWeight: 22,
    karigarHours: 28,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    description: "Classic Bengali bell earrings with hand-engraved paisleys and ghungroo accents.",
    defaultSelected: true,
  },
  {
    id: "tiara",
    name: "Heirloom Tikli & Matha Patti",
    bengaliName: "সোনা মোড়ানো রাজকীয় টিকলি ও মাঙ্গটিকা",
    category: "Head Ornament",
    minWeight: 6,
    maxWeight: 12,
    karigarHours: 18,
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80",
    description: "Intricate forehead ornament centering the bride's auspicious sindoor mark.",
    defaultSelected: false,
  },
  {
    id: "nath",
    name: "Shringar Bridal Nath with Pearl Chain",
    bengaliName: "মুক্তা ও সোনার তারের রাজকীয় নথ",
    category: "Nose Ring",
    minWeight: 4,
    maxWeight: 8,
    karigarHours: 12,
    image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=800&q=80",
    description: "Delicate circular nose ring attached to a hand-spun gold & natural pearl hair chain.",
    defaultSelected: false,
  },
  {
    id: "ratanchur",
    name: "Artisanal Ratanchur Hand Ornaments",
    bengaliName: "পাঁচ আঙুলের সোনার রতনচূড়",
    category: "Hand Ornament",
    minWeight: 14,
    maxWeight: 26,
    karigarHours: 32,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Back-of-hand jewelry connecting five sculpted gold rings to a filigree wrist cuff.",
    defaultSelected: false,
  },
];

export default function BridalTrousseauStudio() {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    TROUSSEAU_PIECES.filter((p) => p.defaultSelected).map((p) => p.id)
  );

  const togglePiece = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedIds(TROUSSEAU_PIECES.map((p) => p.id));
  };

  const resetToEssentials = () => {
    setSelectedIds(TROUSSEAU_PIECES.filter((p) => p.defaultSelected).map((p) => p.id));
  };

  const selectedPieces = TROUSSEAU_PIECES.filter((p) => selectedIds.includes(p.id));

  const totalMinWeight = selectedPieces.reduce((acc, p) => acc + p.minWeight, 0);
  const totalMaxWeight = selectedPieces.reduce((acc, p) => acc + p.maxWeight, 0);
  const totalKarigarHours = selectedPieces.reduce((acc, p) => acc + p.karigarHours, 0);

  // Traditional Bengali Vori conversion (1 Vori = 11.664g)
  const minVori = (totalMinWeight / 11.664).toFixed(1);
  const maxVori = (totalMaxWeight / 11.664).toFixed(1);

  const buildWhatsAppLink = () => {
    const piecesList = selectedPieces
      .map((p, i) => `${i + 1}. ${p.name} (${p.minWeight}g-${p.maxWeight}g)`)
      .join("%0A");

    const message = encodeURIComponent(
      `Hello Jayanti Jewellers! I have curated a custom Royal Bridal Trousseau on your website studio:%0A%0A`
    ) +
      piecesList +
      encodeURIComponent(
        `%0A%0ATotal Pieces: ${selectedPieces.length}%0AEstimated Gold Weight: ${totalMinWeight}g - ${totalMaxWeight}g (Approx. ${minVori} - ${maxVori} Vori)%0APurity: 22K 916 BIS Hallmark%0A%0APlease share availability, making charge estimate, and consultation time at your Khukurdaha showroom.`
      );

    return `https://wa.me/919734805821?text=${message}`;
  };

  return (
    <section id="bridal-studio" className="py-14 sm:py-20 lg:py-28 bg-[#faf8f5] border-t border-[#e8e2d8] relative overflow-hidden">
      {/* Subtle background ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#c5a059]/15 to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]" />
              <div className="jewel-stamp rounded-full">
                <Crown className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Interactive Bridal Trousseau Studio</span>
              </div>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#12100e] tracking-tight">
              Curate Your Royal Bridal Box
            </h2>
            <p className="font-serif text-base sm:text-lg lg:text-xl text-gold-gradient italic mt-1">
              রাজকীয় বিয়ের গয়নার তত্ত্ব ও সেট সাজান
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#524c43] leading-relaxed font-light">
              Select your essential Bengali wedding heirlooms below. Our live atelier studio calculates 
              calibrated gold gram weights, traditional Bengali Voris (ভরি), and master karigar forging hours.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Piece Selector Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between pb-2 border-b border-[#e8e2d8] text-xs gap-2">
              <span className="text-[#736c62] uppercase tracking-wider font-semibold">
                Available Heirloom Pieces ({TROUSSEAU_PIECES.length})
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={selectAll}
                  className="text-[#8c6834] hover:text-[#12100e] font-semibold underline underline-offset-4 transition-colors py-1"
                >
                  Select All
                </button>
                <span className="text-[#d5cbbe]">|</span>
                <button
                  type="button"
                  onClick={resetToEssentials}
                  className="text-[#736c62] hover:text-[#12100e] transition-colors flex items-center gap-1 py-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Essentials</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {TROUSSEAU_PIECES.map((piece) => {
                const isSelected = selectedIds.includes(piece.id);
                return (
                  <div
                    key={piece.id}
                    onClick={() => togglePiece(piece.id)}
                    className={`jewel-box rounded-2xl p-3.5 sm:p-4 cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                      isSelected
                        ? "border-[#c5a059] bg-[#fdfbf7]"
                        : "opacity-75 hover:opacity-100 hover:border-[#c5a059]/60"
                    }`}
                    style={
                      isSelected
                        ? {
                            boxShadow:
                              "inset 0 0 0 1px rgba(197, 160, 89, 0.5), 0 8px 24px -4px rgba(140, 104, 52, 0.15)",
                          }
                        : undefined
                    }
                  >
                    <div className="flex items-start gap-3 sm:gap-3.5">
                      {/* Thumbnail */}
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 border border-[#d5cbbe] rounded-xl overflow-hidden bg-[#f4eee6]">
                        <Image
                          src={piece.image}
                          alt={piece.name}
                          fill
                          sizes="(max-width: 640px) 56px, 64px"
                          className="object-cover object-center"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8c6834]">
                            {piece.category}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              isSelected
                                ? "bg-[#c5a059] border-[#a37a3e] text-white shadow-xs"
                                : "border-[#d5cbbe] bg-white"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[2.5]" />}
                          </div>
                        </div>

                        <h4 className="font-serif text-sm sm:text-base text-[#12100e] font-semibold leading-tight mt-0.5 truncate">
                          {piece.name}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-[#8c6834] font-serif italic mt-0.5 truncate">
                          {piece.bengaliName}
                        </p>

                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-2 text-[10px] text-[#524c43] font-medium">
                          <span className="inline-flex items-center gap-1 font-mono">
                            <Scale className="w-3 h-3 text-[#c5a059]" />
                            {piece.minWeight}g – {piece.maxWeight}g
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono">
                            <Clock className="w-3 h-3 text-[#c5a059]" />
                            {piece.karigarHours}h
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Trousseau Certificate & Summary Box (Responsive desktop-only stickiness) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="jewel-box jewel-corners p-5 sm:p-8 bg-white shadow-2xl relative rounded-3xl">
              {/* Header with Royal Crest */}
              <div className="flex items-center gap-3 pb-5 border-b border-[#e8e2d8]">
                <RoyalCrest size={40} className="sm:w-11 sm:h-11" />
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#8c6834] font-semibold block">
                    Jayanti Jewellers &bull; Khukurdaha
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl text-[#12100e] font-normal leading-tight">
                    Custom Bridal Trousseau
                  </h3>
                </div>
              </div>

              {/* Dynamic Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 my-5 sm:my-6">
                {/* Weight Dial */}
                <div className="p-3.5 sm:p-4 jewel-box bg-[#faf6ef] rounded-2xl">
                  <span className="text-[10px] uppercase tracking-wider text-[#736c62] block font-semibold">
                    Calibrated Net Weight
                  </span>
                  <div className="text-lg sm:text-2xl font-serif font-bold text-[#12100e] mt-1">
                    {totalMinWeight}g – {totalMaxWeight}g
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#8c6834] font-medium font-serif mt-0.5 block">
                    ≈ {minVori} – {maxVori} Vori (ভরি)
                  </span>
                </div>

                {/* Handcrafting Time */}
                <div className="p-3.5 sm:p-4 jewel-box bg-[#faf6ef] rounded-2xl">
                  <span className="text-[10px] uppercase tracking-wider text-[#736c62] block font-semibold">
                    Karigari Dedication
                  </span>
                  <div className="text-lg sm:text-2xl font-serif font-bold text-[#12100e] mt-1">
                    {totalKarigarHours}+ Hours
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#8c6834] font-medium mt-0.5 block">
                    Master Tarakasi &amp; Nakshi
                  </span>
                </div>
              </div>

              {/* Included Pieces Checklist */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs text-[#736c62] font-semibold uppercase tracking-wider pb-1">
                  <span>Included Masterpieces</span>
                  <span>{selectedPieces.length} Items</span>
                </div>

                <div className="max-h-48 overflow-y-auto pr-1 space-y-1.5 divide-y divide-[#f0eae0]">
                  {selectedPieces.map((p) => (
                    <div key={p.id} className="pt-1.5 first:pt-0 flex items-center justify-between text-xs text-[#474139]">
                      <span className="font-medium text-[#12100e] truncate pr-2">
                        {p.name}
                      </span>
                      <span className="font-mono text-[#8c6834] shrink-0">
                        {p.minWeight}g-{p.maxWeight}g
                      </span>
                    </div>
                  ))}
                  {selectedPieces.length === 0 && (
                    <p className="text-xs text-[#8c6834] italic py-3 text-center">
                      Please select at least one piece to assemble your wedding set.
                    </p>
                  )}
                </div>
              </div>

              {/* Hallmarking & Assaying Seal */}
              <div className="p-3 bg-[#faf8f5] border border-[#e8e2d8] flex items-center gap-3 text-xs text-[#524c43] mb-6 rounded-2xl">
                <ShieldCheck className="w-5 h-5 text-[#8c6834] shrink-0" />
                <div className="text-[11px] leading-tight">
                  <strong className="text-[#12100e] font-semibold block">
                    100% BIS 916 Laser HUID Certified
                  </strong>
                  Assayed with zero unfair deductions &amp; lifetime exchange warranty.
                </div>
              </div>

              {/* Instant WhatsApp Dispatch CTA */}
              <div className="space-y-3">
                <a
                  href={selectedPieces.length > 0 ? buildWhatsAppLink() : "#"}
                  target={selectedPieces.length > 0 ? "_blank" : undefined}
                  rel={selectedPieces.length > 0 ? "noopener noreferrer" : undefined}
                  className={`w-full min-h-[48px] py-3.5 sm:py-4 px-4 btn-jewel-gold rounded-full text-xs flex items-center justify-center gap-2 shadow-lg ${
                    selectedPieces.length === 0 ? "opacity-50 pointer-events-none" : ""
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-[#12100e]" />
                  <span>Send Trousseau to Master Karigar</span>
                </a>

                <p className="text-[11px] text-center text-[#736c62]">
                  Sends your custom weight &amp; piece breakdown directly to our Khukurdaha showroom team on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
