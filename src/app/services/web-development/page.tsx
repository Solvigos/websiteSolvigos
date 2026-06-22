import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconWorld, IconCode, IconRocket, IconPalette } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development",
};

export default function WebDevelopmentPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 10"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      currentService="web-development"
      features={[
        { icon: <IconWorld size={28} />, title: "Focus on valuable activities only", description: "Make sure you only speak to top-quality leads. Don't waste time on busy lines." },
        { icon: <IconCode size={28} />, title: "Manage your leads effortlessly", description: "Pick and assign leads to the right campaigns. Automate your lead journeys and flows." },
        { icon: <IconRocket size={28} />, title: "Make data-driven decisions with impact", description: "Customize your reports and get insights to keep up with your most important KPIs." },
        { icon: <IconPalette size={28} />, title: "Automate repetitive tasks & actions", description: "Create your own automated workflows. Waste no more time on repetitive tasks." },
      ]}
      keyFeatures={[
        { title: "WordPress Development", description: "Custom WordPress themes and plugins for your business." },
        { title: "eCommerce Solutions", description: "Shopify, WooCommerce, and custom eCommerce platforms." },
        { title: "Landing Pages", description: "High-converting landing pages for marketing campaigns." },
        { title: "Website Maintenance", description: "Ongoing support and updates for your website." },
        { title: "SEO Optimization", description: "Search engine optimization for better visibility." },
        { title: "Analytics Integration", description: "Google Analytics and tracking setup for insights." },
      ]}
      faqItems={[
        { question: "What kind of websites do you build?", answer: "We build fast, responsive, conversion-focused websites — including business websites, landing pages, and full eCommerce platforms. We work with WordPress, Shopify, WooCommerce, and custom web builds." },
        { question: "Can you redesign or improve my existing website?", answer: "Absolutely. We handle full redesigns as well as targeted improvements — whether that's speed optimization, UX improvements, mobile responsiveness, or landing page builds." },
        { question: "Will my website be SEO-friendly?", answer: "Yes. All sites we build follow on-page SEO best practices — including proper heading structure, meta tags, fast load times, mobile optimization, and clean URL structures." },
      ]}
    />
  );
}
