import HeroSection from "@/components/ui/glassmorphism-trust-hero";
import { Case } from "@/components/ui/cases-with-infinite-scroll";
import { WhySolvigos } from "@/components/home/WhySolvigos";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyClientsChooseUs } from "@/components/home/WhyClientsChooseUs";
import { Process } from "@/components/home/Process";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { StatsBar } from "@/components/home/StatsBar";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Case />
      <WhySolvigos />
      <ServicesGrid />
      <WhyClientsChooseUs />
      <Process />
      <IndustriesSection />
      <StatsBar />
      <FinalCTA />
    </>
  );
}
