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
import ReviewsSection from "./components/home/ReviewsSection";
import DiscountPromoSection from "./components/home/DiscountPromoSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DiscountPromoSection />
      <BenefitsSection />
      <ServicesSection />
      <WhyUsSection />
      <ServicesSection />
      <ServiceShowcaseSection />
      <WorkProcessSection />
      <PortfolioSection />
      <ReviewsSection />
      {/* <FAQSection /> */}
      <ContactSection />
    </main>
  );
}