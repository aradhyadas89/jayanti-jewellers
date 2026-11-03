import { STORE_INFO } from "@/data/jewellery-data";

export default function SchemaMarkup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: STORE_INFO.name,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    "@id": STORE_INFO.mapsUrl,
    url: "https://jayantijewellers.com",
    telephone: "+919734805821",
    priceRange: "₹₹ - ₹₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Road, Khukur Daha",
      addressLocality: "Jiakhali",
      addressRegion: "West Bengal",
      postalCode: "721641",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: STORE_INFO.coordinates.latitude,
      longitude: STORE_INFO.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Friday",
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      STORE_INFO.mapsUrl,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

