export interface JewelleryItem {
  id: string;
  title: string;
  category: "bridal" | "lightweight" | "traditional" | "diamonds" | "silver";
  purity: string;
  description: string;
  weightApprox?: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface DaySchedule {
  day: string;
  dayIndex: number; // 0 for Sunday, 1 for Monday, etc.
  openTime: string;
  closeTime: string;
  openMinutes: number; // minutes from midnight: 10:00 AM = 600
  closeMinutes: number; // 7:00 PM = 19:00 = 1140
  isOpen: boolean;
  note?: string;
}

export const STORE_INFO = {
  name: "Jayanti Jewellers",
  tagline: "Timeless Bengali Artistry & BIS Hallmarked Purity",
  description:
    "Discover the finest 22K 916 Hallmarked Gold, handcrafted Bengali bridal heirlooms, certified diamonds, and pure silver ornaments at Jayanti Jewellers, nestled in Khukurdaha (Jiakhali), West Bengal.",
  address: {
    line1: "Road, Khukur Daha",
    locality: "Jiakhali (Near Lakshmi Bazar)",
    district: "Paschim Medinipur",
    state: "West Bengal",
    postalCode: "721641",
    country: "India",
    full: "Road, Khukur Daha, Jiakhali, West Bengal 721641",
  },
  phone: "09734805821",
  phoneFormatted: "+91 97348 05821",
  altPhone: "+91 96799 51830",
  whatsappUrl:
    "https://wa.me/919734805821?text=Hello%20Jayanti%20Jewellers%2C%20I%20am%20interested%20in%20your%20jewellery%20collection.",
  mapsUrl: "https://maps.app.goo.gl/FWQ6Am92ejyXPdzj8",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=22.4745658,87.7497901",
  embedMapUrl:
    "https://maps.google.com/maps?q=22.4745658,87.7497901&t=&z=16&ie=UTF8&iwloc=&output=embed",
  coordinates: {
    latitude: 22.4745658,
    longitude: 87.7497901,
  },
};

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    day: "Sunday",
    dayIndex: 0,
    openTime: "10:00 AM",
    closeTime: "7:00 PM",
    openMinutes: 600,
    closeMinutes: 1140,
    isOpen: true,
  },
  {
    day: "Monday",
    dayIndex: 1,
    openTime: "10:00 AM",
    closeTime: "7:00 PM",
    openMinutes: 600,
    closeMinutes: 1140,
    isOpen: true,
  },
  {
    day: "Tuesday",
    dayIndex: 2,
    openTime: "10:00 AM",
    closeTime: "7:00 PM",
    openMinutes: 600,
    closeMinutes: 1140,
    isOpen: true,
  },
  {
    day: "Wednesday",
    dayIndex: 3,
    openTime: "10:00 AM",
    closeTime: "7:00 PM",
    openMinutes: 600,
    closeMinutes: 1140,
    isOpen: true,
  },
  {
    day: "Thursday",
    dayIndex: 4,
    openTime: "Closed",
    closeTime: "Closed",
    openMinutes: 0,
    closeMinutes: 0,
    isOpen: false,
    note: "Weekly Holiday",
  },
  {
    day: "Friday",
    dayIndex: 5,
    openTime: "10:00 AM",
    closeTime: "7:00 PM",
    openMinutes: 600,
    closeMinutes: 1140,
    isOpen: true,
  },
  {
    day: "Saturday",
    dayIndex: 6,
    openTime: "10:00 AM",
    closeTime: "7:00 PM",
    openMinutes: 600,
    closeMinutes: 1140,
    isOpen: true,
  },
];

export const CATEGORIES = [
  { id: "all", label: "All Masterpieces" },
  { id: "bridal", label: "Royal Bridal Heritage" },
  { id: "lightweight", label: "Everyday Lightweight" },
  { id: "traditional", label: "Bengali Artistry & Pola" },
  { id: "diamonds", label: "Certified Diamonds" },
  { id: "silver", label: "Pure 92.5 Silver & Pooja" },
] as const;

export const PORTFOLIO_ITEMS: JewelleryItem[] = [
  {
    id: "item-1",
    title: "The Rajnandini Royal Choker & Sita Har Set",
    category: "bridal",
    purity: "22K 916 BIS Hallmark",
    description:
      "Intricately crafted with filigree (Tarakasi) lace motifs and cascading jhumka accents, sculpted for timeless bridal royalty.",
    weightApprox: "Approx. 42g - 65g",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Bridal", "22K Gold", "Filigree", "Wedding"],
  },
  {
    id: "item-2",
    title: "Gold-Inlaid Designer Pola & Sankha Bangles",
    category: "traditional",
    purity: "22K 916 Gold Inlay",
    description:
      "Signature auspicious red Pola and white Sankha handcrafted with intricate 22K gold wire filigree and traditional floral crowns.",
    weightApprox: "Gold wt: 8g - 16g per pair",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Traditional", "Pola Badhano", "Sankha", "Bengali Tradition"],
  },
  {
    id: "item-3",
    title: "Contemporary Minimalist Gold Dewdrop Chain",
    category: "lightweight",
    purity: "22K 916 BIS Hallmark",
    description:
      "Lightweight everyday chain accented with hand-cut geometric gold beads. Perfectly balanced for modern workwear and daily grace.",
    weightApprox: "Approx. 6g - 12g",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Lightweight", "Daily Wear", "Office Chic"],
  },
  {
    id: "item-4",
    title: "Solitaire Blossom Diamond Engagement Ring",
    category: "diamonds",
    purity: "18K Gold • IGI / SGL Certified",
    description:
      "Brilliant-cut certified solitaire embraced by micro-pavé diamonds on a sculpted gold band with exceptional clarity and fire.",
    weightApprox: "0.50 ct to 1.20 ct Solitaire",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Diamonds", "Engagement", "Solitaire", "18K Gold"],
  },
  {
    id: "item-5",
    title: "Imperial Mayur Kankan & Mayur Bala Bangles",
    category: "bridal",
    purity: "22K 916 BIS Hallmark",
    description:
      "Solid gold handcrafted peacock motif mouth-bangles (Mukher Bala) finished with exquisite nakshi relief work and secure screw clasp.",
    weightApprox: "Approx. 24g - 40g per pair",
    image:
      "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["Bala", "Kankan", "Nakshi Work", "Bridal"],
  },
  {
    id: "item-6",
    title: "Heritage Jhumka with Chandrakala Drops",
    category: "traditional",
    purity: "22K 916 BIS Hallmark",
    description:
      "Three-tier traditional Bengali jhumkas detailed with delicate gold ghungroos and hand-engraved paisleys that catch the light effortlessly.",
    weightApprox: "Approx. 14g - 22g",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Jhumka", "Traditional", "Earrings", "22K Gold"],
  },
  {
    id: "item-7",
    title: "92.5 Pure Silver Royal Bridal Nupur / Payal",
    category: "silver",
    purity: "92.5% Sterling Silver",
    description:
      "Artisanal silver anklets with sweet melody bells, antique oxidation finish, and secure clasp crafted for wedding ceremonies and celebrations.",
    weightApprox: "Approx. 75g - 150g per pair",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Silver", "92.5 Sterling", "Payal", "Pooja"],
  },
  {
    id: "item-8",
    title: "Divine Lakshmi-Ganesh Pure Silver Pooja Thali Set",
    category: "silver",
    purity: "Pure 999 / 925 Silver",
    description:
      "Hand-embossed auspicious pooja thali featuring diya, bell (ghanti), agarbatti stand, and chandan katori for divine household blessings.",
    weightApprox: "Approx. 120g - 350g",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Silver", "Pooja Thali", "Auspicious Gifts", "999 Silver"],
  },
  {
    id: "item-9",
    title: "Celestial Diamond Teardrop Pendant & Earrings Set",
    category: "diamonds",
    purity: "18K White & Yellow Gold",
    description:
      "Floating diamond pendant complemented by matching drop earrings. Certified natural diamonds set with utmost precision.",
    weightApprox: "Diamond wt: 0.85 ct total",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Diamonds", "Pendant Set", "Precious Gems"],
  },
  {
    id: "item-10",
    title: "Featherlight Modern Daily Wear Gold Mangalsutra",
    category: "lightweight",
    purity: "22K 916 BIS Hallmark",
    description:
      "Graceful combination of black auspicious beads with an elegant floral diamond-cut gold centerpiece designed for daily comfort.",
    weightApprox: "Approx. 5g - 9g",
    image:
      "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Lightweight", "Mangalsutra", "Daily Wear"],
  },
];

export const PILLARS = [
  {
    icon: "ShieldCheck",
    title: "100% BIS Hallmarked 916 Gold",
    description:
      "Every gold jewel is laser-inscribed with the mandatory 6-digit HUID code, assuring absolute purity and transparent valuation.",
  },
  {
    icon: "Sparkles",
    title: "Bespoke Bridal Crafting",
    description:
      "Transform your heirloom dream or custom sketch into reality. Our master Bengali karigars handcraft every curve with utmost dedication.",
  },
  {
    icon: "Scale",
    title: "100% Transparent Pricing",
    description:
      "Live gold rate billing with zero hidden deductions. Clear breakdown of net gold weight, making charges, and stone weights.",
  },
  {
    icon: "Gem",
    title: "Certified Diamonds & Pure Silver",
    description:
      "Internationally certified diamonds with high clarity grades and 92.5 sterling silver collections for every celebration.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Soumita Mukherjee",
    location: "Tamluk & Khukurdaha",
    quote:
      "We purchased the complete bridal jewellery set for my wedding from Jayanti Jewellers. The finishing on the Sita Har and Pola Badhano was breathtaking. The transparency in gold rates and HUID hallmark gave us complete peace of mind.",
    rating: 5,
    tag: "Bridal Customer",
  },
  {
    name: "Debashis Samanta",
    location: "Jiakhali",
    quote:
      "Our family has been trusting Jayanti Jewellers for years. When exchanging our old family gold, their valuation was completely fair and honest. Their lightweight daily gold chains are also top notch.",
    rating: 5,
    tag: "Lifelong Customer",
  },
  {
    name: "Ananya Ghosh",
    location: "Paschim Medinipur",
    quote:
      "Outstanding service and very polite behavior. We ordered custom designed gold bangles from a photo we showed them, and the craftsmanship surpassed our expectations! Highly recommended in Khukurdaha.",
    rating: 5,
    tag: "Custom Jewellery Order",
  },
];

export const FAQS = [
  {
    q: "Is all gold at Jayanti Jewellers BIS Hallmarked with HUID?",
    a: "Yes, 100%. All our 22K gold ornaments carry the government-mandated BIS Hallmark logo and a unique 6-digit alphanumeric HUID (Hallmark Unique Identification) laser mark, verifiable on the BIS Care app.",
  },
  {
    q: "What are your showroom opening and closing hours?",
    a: "We are open Monday, Tuesday, Wednesday, Friday, Saturday, and Sunday from 10:00 AM to 7:00 PM. Please note that we are closed every Thursday.",
  },
  {
    q: "Do you accept old gold exchange?",
    a: "Yes. We offer transparent melting and computerized testing for old gold with the highest fair-market value exchange on modern 916 hallmarked ornaments.",
  },
  {
    q: "Can I place custom orders from photos or sketches?",
    a: "Absolutely! Our skilled karigars specialize in bespoke handcrafted jewellery. You can bring any design, photo, or wedding theme, and we will craft it according to your exact budget and weight preferences.",
  },
  {
    q: "How can I reach the showroom in Khukurdaha / Jiakhali?",
    a: "We are located at Road, Khukur Daha, Jiakhali (near Lakshmi Bazar), Paschim Medinipur, West Bengal 721641. You can tap the 'Get Directions' button on this website to navigate directly via Google Maps.",
  },
];

