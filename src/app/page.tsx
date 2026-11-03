import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoyalBenchmarkBar from "@/components/RoyalBenchmarkBar";
import TrustBar from "@/components/TrustBar";
import PortfolioGallery from "@/components/PortfolioGallery";
import BridalTrousseauStudio from "@/components/BridalTrousseauStudio";
import LiveRateCalculator from "@/components/LiveRateCalculator";
import HallmarkingSection from "@/components/HallmarkingSection";
import CustomCraftingSection from "@/components/CustomCraftingSection";
import ShowroomHoursCard from "@/components/ShowroomHoursCard";
import LocationMapSection from "@/components/LocationMapSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import SchemaMarkup from "@/components/SchemaMarkup";
import BackToTop from "@/components/BackToTop";
import ClientProviders from "@/components/ClientProviders";

export default function Home() {
  return (
    <ClientProviders>
      <SchemaMarkup />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <RoyalBenchmarkBar />
        <TrustBar />
        <PortfolioGallery />
        <BridalTrousseauStudio />
        <LiveRateCalculator />
        <HallmarkingSection />
        <CustomCraftingSection />
        <ShowroomHoursCard />
        <LocationMapSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <BackToTop />
      <StickyMobileBar />
    </ClientProviders>
  );
}
