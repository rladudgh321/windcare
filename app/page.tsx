// src/app/page.tsx
// https://www.soomclean.com/

import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import ServicesSection from "./components/home/ServicesSection";
import WhyUsSection from "./components/home/WhyUsSection";
import ServiceShowcaseSection from "./components/home/ServiceShowcaseSection";
import WorkProcessSection from "./components/home/WorkProcessSection";
import PortfolioSection from "./components/home/PortfolioSection";
import ContactSection from "./components/home/ContactSection";
// import { ServicesSection } from "@/app/components/home/ServicesSection";
// import { PricingSection } from "@/app/components/home/PricingSection";
// import { WhyUsSection } from "@/components/home/WhyUsSection";
// import { WorkProcessSection } from "@/components/home/WorkProcessSection";
// import { PortfolioSection } from "@/components/home/PortfolioSection";
// import { ReviewsSection } from "@/components/home/ReviewsSection";
// import { FAQSection } from "@/components/home/FAQSection";
// import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      
      {/* <PricingSection /> */}
      <WhyUsSection />
      <ServicesSection />
      <ServiceShowcaseSection />
      <WorkProcessSection />
      <PortfolioSection />
      {/* <ReviewsSection /> */}
      {/* <FAQSection /> */}
      <ContactSection />
    </main>
  );
}