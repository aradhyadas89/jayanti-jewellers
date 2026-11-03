"use client";

interface RoyalCrestProps {
  className?: string;
  size?: number;
}

export default function RoyalCrest({ className = "", size = 44 }: RoyalCrestProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="royalGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8C6834" />
          <stop offset="25%" stopColor="#C5A059" />
          <stop offset="50%" stopColor="#F7EAC4" />
          <stop offset="75%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#735327" />
        </linearGradient>
        <linearGradient id="royalFoil" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#735327" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#FAF1D6" />
        </linearGradient>
      </defs>

      {/* Outer Ornamental Circle with Beaded Filigree */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="url(#royalGold)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="url(#royalGold)"
        strokeWidth="1.5"
      />

      {/* Royal Crown / Tiara Ornament at Top */}
      <path
        d="M38 24 L42 28 L50 20 L58 28 L62 24 L60 32 L40 32 Z"
        fill="url(#royalGold)"
      />
      <circle cx="50" cy="18" r="2.2" fill="url(#royalFoil)" />
      <circle cx="42" cy="23" r="1.5" fill="url(#royalFoil)" />
      <circle cx="58" cy="23" r="1.5" fill="url(#royalFoil)" />

      {/* Royal Monogram JJ with Serif Swash */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="30"
        fontWeight="600"
        letterSpacing="-1.5"
        fill="url(#royalGold)"
      >
        JJ
      </text>

      {/* Ornamental Laurel Leaves underneath */}
      <path
        d="M30 68 C35 76 42 80 50 80 C58 80 65 76 70 68"
        stroke="url(#royalGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="83" r="1.8" fill="url(#royalGold)" />
      <path
        d="M44 83 L50 80 L56 83"
        stroke="url(#royalGold)"
        strokeWidth="1"
      />

      {/* Starburst accent */}
      <circle cx="50" cy="38" r="1.2" fill="url(#royalFoil)" />
    </svg>
  );
}

