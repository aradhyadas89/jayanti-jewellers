"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";

interface JewellerLoupeProps {
  src: string;
  alt: string;
  zoomLevel?: number;
  className?: string;
}

export default function JewellerLoupe({
  src,
  alt,
  zoomLevel = 2.4,
  className = "",
}: JewellerLoupeProps) {
  const [isActive, setIsActive] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const LENS_SIZE = 130; // Diameter of the loupe lens in pixels

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Relative coordinates within the container [0..1]
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

    setCoords({ x, y });
    setLensPos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      onTouchMove={handleTouchMove}
      className={`relative overflow-hidden cursor-crosshair select-none group ${className}`}
      aria-label="Interactive Jeweller Loupe: Hover or touch to inspect craftsmanship"
    >
      {/* Base Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-300"
      />

      {/* Floating Loupe Prompt Pill */}
      {!isActive && (
        <div className="absolute bottom-3 right-3 z-10 jewel-stamp bg-white/95 backdrop-blur-sm pointer-events-none group-hover:opacity-0 transition-opacity duration-200 rounded-full text-[10px] sm:text-xs">
          <ZoomIn className="w-3 h-3 text-[#c5a059]" />
          <span className="hidden sm:inline">Hover to 10x Inspect</span>
          <span className="sm:hidden">Touch to Zoom</span>
        </div>
      )}

      {/* The Optical Jeweller's Loupe Lens */}
      {isActive && (
        <div
          className="pointer-events-none absolute rounded-full z-30 transition-transform duration-75"
          style={{
            width: `${LENS_SIZE}px`,
            height: `${LENS_SIZE}px`,
            left: `${lensPos.x - LENS_SIZE / 2}px`,
            top: `${lensPos.y - LENS_SIZE / 2}px`,
            boxShadow:
              "0 0 0 2px #c5a059, 0 0 0 4px #1a1714, 0 12px 30px rgba(0, 0, 0, 0.45), inset 0 0 20px rgba(0, 0, 0, 0.25)",
            background: "#ffffff",
          }}
        >
          {/* Magnified Image Container inside the lens */}
          <div
            className="w-full h-full rounded-full overflow-hidden relative"
            style={{
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${zoomLevel * 100}%`,
              backgroundPosition: `${coords.x * 100}% ${coords.y * 100}%`,
            }}
          >
            {/* Optical Glass Specular Flare overlay */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 45%, rgba(197,160,89,0.15) 100%)",
              }}
            />

            {/* Fine Jeweller Crosshairs */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
              <div className="w-full h-[0.5px] bg-[#8c6834]" />
              <div className="h-full w-[0.5px] bg-[#8c6834] absolute" />
            </div>

            {/* Micro Hallmark Stamp on Lens */}
            <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none">
              <span className="text-[7px] uppercase tracking-widest font-mono text-[#8c6834] font-semibold bg-white/80 px-1.5 py-0.5 rounded-full border border-[#c5a059]/40">
                10x APLANAT • HUID
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

