import HeroSection from "@/components/home/glassmorphism-trust-hero";
import { Case } from "@/components/home/cases-with-infinite-scroll";
import { WhySolvigos } from "@/components/home/WhySolvigos";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Process } from "@/components/home/Process";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Case />
      <WhySolvigos />
      <ServicesGrid />
      <Process />
      <IndustriesSection />
      <Testimonials />
    </>
  );
}
