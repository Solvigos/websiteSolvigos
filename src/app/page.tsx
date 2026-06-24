import HeroSection from "@/components/home/glassmorphism-trust-hero";
import { Case } from "@/components/home/cases-with-infinite-scroll";
import { WhySolvigos } from "@/components/home/WhySolvigos";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Process } from "@/components/home/Process";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { Testimonials } from "@/components/home/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support Outsourcing",
  description:
    "Deliver exceptional customer experiences without the cost and complexity of building an in-house support department. Solvigos provides omnichannel customer support, technical support, BPO, and CRM & AI chatbot setup.",
  openGraph: {
    title: "Solvigos | Customer Support Outsourcing Company",
    description:
      "Deliver exceptional customer experiences without the cost and complexity of building an in-house support department.",
    url: "https://solvigos.com",
    images: [
      {
        url: "/og_image/landingpage.png",
        width: 1200,
        height: 630,
        alt: "Solvigos - Customer Support Outsourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvigos | Customer Support Outsourcing Company",
    description:
      "Deliver exceptional customer experiences without the cost and complexity of building an in-house support department.",
    images: ["/og_image/landingpage.png"],
  },
};

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
