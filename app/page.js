import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustMetricsBar from "@/components/TrustMetricsBar";
import ServicesSection from "@/components/ServicesSection";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import TheGapComparison from "@/components/TheGapComparison";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingAndModels from "@/components/PricingAndModels";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <HeroSection />
      <TrustMetricsBar />
      <ServicesSection />
      <ArchitectureFlow />
      <TheGapComparison />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PricingAndModels />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}