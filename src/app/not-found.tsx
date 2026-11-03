import Link from "next/link";
import { ArrowLeft, Phone, MapPin } from "lucide-react";
import { STORE_INFO } from "@/data/jewellery-data";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#171513] flex flex-col justify-between p-6 sm:p-12">
      {/* Top Brand Bar */}
      <div className="flex items-center justify-between border-b border-[#e8e2d8] pb-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 border border-[#c1a06e] flex items-center justify-center bg-white">
            <span className="font-serif text-sm font-semibold text-[#8c6834]">
              JJ
            </span>
          </div>
          <span className="font-serif text-xl tracking-[0.2em] uppercase">
            Jayanti Jewellers
          </span>
        </Link>

        <a
          href={`tel:${STORE_INFO.phone}`}
          className="text-xs uppercase tracking-wider font-semibold text-[#8c6834] hover:underline hidden sm:inline-flex items-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>09734805821</span>
        </a>
      </div>

      {/* Main 404 Content */}
      <main className="max-w-xl mx-auto text-center py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6834] block mb-3">
          Page Not Found • Error 404
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#171513] mb-4">
          A Moment of Pause
        </h1>

        <p className="text-sm sm:text-base text-[#524c43] leading-relaxed mb-8">
          The collection or page you are seeking does not exist or has been relocated. We invite you to return to our flagship gallery or speak directly with our showroom team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#171513] text-white text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#2b2723] transition-colors inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-[#c1a06e]" />
            <span>Return to Showroom</span>
          </Link>

          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#171513] border border-[#d5cbbe] hover:border-[#8c6834] text-xs font-semibold uppercase tracking-[0.15em] transition-colors inline-flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#8c6834]" />
            <span>Store Directions</span>
          </a>
        </div>
      </main>

      {/* Bottom Footer Details */}
      <div className="border-t border-[#e8e2d8] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#736c62]">
        <p>Road, Khukur Daha, Jiakhali, West Bengal 721641</p>
        <p>&copy; {new Date("2026-11-01").getFullYear()} Jayanti Jewellers. All rights reserved.</p>
      </div>
    </div>
  );
}

