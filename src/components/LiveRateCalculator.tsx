"use client";

import { useState } from "react";
import { Calculator, ShieldCheck, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type PurityType = "22k" | "24k" | "18k";
type UnitType = "grams" | "vori";

export default function LiveRateCalculator() {
  const [purity, setPurity] = useState<PurityType>("22k");
  const [unit, setUnit] = useState<UnitType>("grams");
  const [weightValue, setWeightValue] = useState<number>(10); // default 10 grams

  // Benchmark gold rates in INR per gram (typical indicative benchmark for West Bengal)
  const ratesPerGram: Record<PurityType, { rate: number; label: string; fineness: string }> = {
    "22k": {
      rate: 7650,
      label: "22K BIS 916 Hallmark",
      fineness: "91.6% Pure Gold (Bridal Standard)",
    },
    "24k": {
      rate: 8350,
      label: "24K 999 Pure Bullion",
      fineness: "99.9% Pure Gold (Investment Grade)",
    },
    "18k": {
      rate: 6250,
      label: "18K 750 Diamond Gold",
      fineness: "75.0% Gold (Diamond & Gem Setting)",
    },
  };

  // 1 Vori (Bhari) = 11.664 grams
  const GRAMS_PER_VORI = 11.664;

  const actualGrams = unit === "grams" ? weightValue : weightValue * GRAMS_PER_VORI;
  const actualVori = unit === "vori" ? weightValue : weightValue / GRAMS_PER_VORI;

  const currentRate = ratesPerGram[purity].rate;
  const goldCost = Math.round(actualGrams * currentRate);

  // Approximate Bengali karigari making charges (typically 8% to 12% based on filigree intricacy)
  const makingChargePercent = purity === "24k" ? 3 : 10;
  const estimatedMaking = Math.round((goldCost * makingChargePercent) / 100);

  // Statutory GST (3% on jewelry) + BIS Hallmarking token (approx. ₹45)
  const gst = Math.round((goldCost + estimatedMaking) * 0.03);
  const totalEstimate = goldCost + estimatedMaking + gst + 45;

  const handleUnitChange = (newUnit: UnitType) => {
    if (newUnit === unit) return;
    if (newUnit === "vori") {
      setUnit("vori");
      setWeightValue(Number((weightValue / GRAMS_PER_VORI).toFixed(2)));
    } else {
      setUnit("grams");
      setWeightValue(Math.round(weightValue * GRAMS_PER_VORI));
    }
  };

  const createWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Jayanti Jewellers! I used your online Transparent Rate Calculator:%0A%0A` +
        `Purity: ${ratesPerGram[purity].label}%0A` +
        `Weight: ${actualGrams.toFixed(2)}g (≈ ${actualVori.toFixed(2)} Vori)%0A` +
        `Estimated Valuation: ₹${totalEstimate.toLocaleString("en-IN")}%0A%0A` +
        `Please share the exact live showroom rate for today and current making charge offers at Khukurdaha.`
    );
    return `https://wa.me/919734805821?text=${text}`;
  };

  return (
    <section id="gold-calculator" className="py-14 sm:py-20 lg:py-28 bg-[#faf8f5] border-t border-[#e8e2d8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]" />
              <div className="jewel-stamp rounded-full">
                <Calculator className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Transparent Atelier Valuation</span>
              </div>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#12100e] tracking-tight">
              Transparent Rate &amp; Vori Calculator
            </h2>
            <p className="font-serif text-base sm:text-lg lg:text-xl text-gold-gradient italic mt-1">
              সচ্ছ স্বর্ণ মূল্যায়ন ও ভরি রূপান্তর
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#524c43] leading-relaxed font-light">
              Unlike traditional opaque quotes, Jayanti Jewellers provides 100% itemized transparency.
              Calculate your budget in standard Grams or traditional Bengali Voris (ভরি) with zero hidden melting losses.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-4xl mx-auto jewel-box jewel-corners p-4 sm:p-8 md:p-10 shadow-xl bg-white rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Purity Tabs */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#12100e] block mb-2.5">
                  Select Gold Purity (ক্যারট নির্বাচন)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["22k", "24k", "18k"] as PurityType[]).map((p) => {
                    const active = purity === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPurity(p)}
                        className={`py-2.5 sm:py-3 px-1.5 sm:px-2 text-center border transition-all text-xs font-semibold uppercase tracking-wider rounded-2xl ${
                          active
                            ? "border-[#c5a059] bg-[#faf3e8] text-[#12100e] shadow-xs"
                            : "border-[#d5cbbe] bg-white text-[#736c62] hover:border-[#8c6834]"
                        }`}
                        style={
                          active
                            ? { boxShadow: "inset 0 0 0 1px rgba(197, 160, 89, 0.4)" }
                            : undefined
                        }
                      >
                        <span className="block text-sm font-serif">{p.toUpperCase()}</span>
                        <span className="text-[10px] text-[#8c6834] font-mono mt-0.5 block truncate">
                          {p === "22k" ? "916 Hallmark" : p === "24k" ? "999 Pure" : "750 Fineness"}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-[#736c62] mt-2 italic">
                  Selected: {ratesPerGram[purity].fineness}
                </p>
              </div>

              {/* Unit Toggle & Weight Slider */}
              <div className="pt-2">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#12100e]">
                    Calibrated Weight (ওজন)
                  </label>
                  {/* Unit Switcher */}
                  <div className="inline-flex border border-[#d5cbbe] p-1 bg-[#faf8f5] text-[11px] font-semibold rounded-full">
                    <button
                      type="button"
                      onClick={() => handleUnitChange("grams")}
                      className={`px-3 sm:px-3.5 py-1.5 uppercase tracking-wider transition-all rounded-full ${
                        unit === "grams"
                          ? "bg-[#12100e] text-white shadow-2xs"
                          : "text-[#736c62] hover:text-[#12100e]"
                      }`}
                    >
                      Grams (গ্রাম)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUnitChange("vori")}
                      className={`px-3 sm:px-3.5 py-1.5 uppercase tracking-wider transition-all rounded-full ${
                        unit === "vori"
                          ? "bg-[#12100e] text-white shadow-2xs"
                          : "text-[#736c62] hover:text-[#12100e]"
                      }`}
                    >
                      Vori (ভরি)
                    </button>
                  </div>
                </div>

                {/* Number Input & Conversion Badge */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <div className="relative flex-1">
                    <input
                      type="number"
                      min={unit === "grams" ? 1 : 0.1}
                      max={unit === "grams" ? 250 : 25}
                      step={unit === "grams" ? 1 : 0.25}
                      value={weightValue}
                      onChange={(e) => setWeightValue(Math.max(0.1, Number(e.target.value) || 0))}
                      className="w-full py-3 px-4 border border-[#d5cbbe] focus:border-[#8c6834] focus:outline-none text-base sm:text-lg font-serif font-bold text-[#12100e] bg-white shadow-2xs rounded-2xl"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase font-semibold text-[#8c6834]">
                      {unit === "grams" ? "Grams" : "Vori"}
                    </span>
                  </div>

                  {/* Equivalent conversion indicator */}
                  <div className="px-4 py-2.5 sm:py-3 bg-[#faf6ef] border border-[#d5cbbe] text-xs font-mono text-[#8c6834] font-medium shrink-0 rounded-2xl text-center">
                    {unit === "grams" ? (
                      <span>≈ {actualVori.toFixed(2)} Vori (ভরি)</span>
                    ) : (
                      <span>≈ {actualGrams.toFixed(2)} Grams</span>
                    )}
                  </div>
                </div>

                {/* Slider */}
                <input
                  type="range"
                  min={unit === "grams" ? 1 : 0.5}
                  max={unit === "grams" ? 100 : 10}
                  step={unit === "grams" ? 1 : 0.25}
                  value={weightValue}
                  onChange={(e) => setWeightValue(Number(e.target.value))}
                  className="w-full mt-4 accent-[#8c6834] cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-[#736c62] font-mono mt-1">
                  <span>{unit === "grams" ? "1g (Ring)" : "0.5 Vori"}</span>
                  <span>{unit === "grams" ? "50g (Bridal Set)" : "5 Vori"}</span>
                  <span>{unit === "grams" ? "100g+ (Trousseau)" : "10 Vori"}</span>
                </div>
              </div>

              {/* Trust assurance banner */}
              <div className="p-3 bg-[#fdfbf7] border border-[#e8d9bd] flex items-center gap-2.5 text-xs text-[#524c43] rounded-2xl">
                <ShieldCheck className="w-4 h-4 text-[#8c6834] shrink-0" />
                <span>100% Computerized weighing • Zero unfair melting deductions</span>
              </div>
            </div>

            {/* Right Cost Summary Card */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-7 jewel-box bg-[#faf6ef] space-y-4 rounded-3xl">
                <div className="flex items-center justify-between border-b border-[#e8e2d8] pb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#8c6834] font-semibold">
                    Atelier Price Breakdown
                  </span>
                  <span className="jewel-stamp text-[9px] rounded-full">Indicative</span>
                </div>

                {/* Breakdown List */}
                <div className="space-y-2.5 text-xs text-[#474139]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#736c62]">
                      Pure Gold Value ({actualGrams.toFixed(2)}g @ ₹{currentRate.toLocaleString("en-IN")}/g):
                    </span>
                    <strong className="text-[#12100e] font-mono">
                      ₹{goldCost.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#736c62]">
                      Artisanal Making Charge (~{makingChargePercent}%):
                    </span>
                    <span className="text-[#12100e] font-mono">
                      ₹{estimatedMaking.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#736c62]">Statutory GST (3%):</span>
                    <span className="text-[#12100e] font-mono">
                      ₹{gst.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#736c62]">Laser BIS HUID Hallmark:</span>
                    <span className="text-[#12100e] font-mono">₹45</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="pt-4 border-t border-[#d5cbbe]">
                  <span className="text-[10px] uppercase tracking-wider text-[#736c62] block font-medium">
                    Estimated Net Outlay
                  </span>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#12100e] text-gold-gradient mt-0.5">
                    ₹{totalEstimate.toLocaleString("en-IN")}*
                  </div>
                  <p className="text-[10px] text-[#736c62] mt-1 leading-tight">
                    *Rates fluctuate with daily bullion market. Inquire for the exact live quote today.
                  </p>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-2">
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] py-3.5 px-4 btn-jewel-gold text-xs flex items-center justify-center gap-2 rounded-full"
                  >
                    <MessageCircle className="w-4 h-4 text-[#12100e]" />
                    <span>Inquire Today&apos;s Live Rate</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
