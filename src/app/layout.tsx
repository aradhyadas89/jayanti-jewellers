import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jayantijewellers.com"),
  title: {
    default: "Jayanti Jewellers | Fine Gold, Diamond & Silver Jewellery in Khukurdaha",
    template: "%s | Jayanti Jewellers",
  },
  description:
    "Official website of Jayanti Jewellers, Road, Khukur Daha, Jiakhali, West Bengal 721641. Featuring BIS 916 Hallmarked Gold, Bengali Bridal Collections, Certified Diamonds & Pure Silver. Call 09734805821.",
  keywords: [
    "Jayanti Jewellers",
    "Khukur Daha Jewellers",
    "Jiakhali jewellery shop",
    "West Bengal 721641",
    "916 Hallmark Gold",
    "Bengali Bridal Jewellery",
    "Gold ornaments Paschim Medinipur",
    "Diamond jewellery Jiakhali",
  ],
  authors: [{ name: "Jayanti Jewellers" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jayanti Jewellers | Timeless Bengali Craftsmanship",
    description:
      "Exclusive Gold, Diamond & Silver Jewellery Showroom in Khukurdaha, Jiakhali. 100% BIS Hallmarked. Contact: 09734805821.",
    url: "https://jayantijewellers.com",
    siteName: "Jayanti Jewellers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jayanti Jewellers Royal Bridal Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayanti Jewellers | Fine Gold & Diamond Jewellery",
    description:
      "100% BIS 916 Hallmarked Gold, Bengali Bridal Collections & Diamonds in Khukurdaha, Jiakhali. Call 09734805821.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf8f5] text-[#1a1612]">
        {children}
      </body>
    </html>
  );
}
