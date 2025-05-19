import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";
import '@/components/common/blob.css'

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="blob" />
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
      {/* <PricingSection /> */}
      <CTASection />
    </div>
  );
}
