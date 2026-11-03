import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jayanti Jewellers — Fine Gold & Diamond Jewellery",
    short_name: "Jayanti Jewellers",
    description:
      "Exclusive BIS 916 Hallmarked Gold, Bengali Bridal Collections, Certified Diamonds and Pure Silver Showroom in Khukur Daha, Jiakhali.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#faf8f5",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

