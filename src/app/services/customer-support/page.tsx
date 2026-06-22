import { ServiceLayout } from "@/components/shared/ServiceLayout";
import {
  IconHeadset,
  IconMail,
  IconMessage,
  IconUsers,
} from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support",
};

export default function CustomerSupportPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 01"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      currentService="customer-support"
      features={[
        {
          icon: <IconHeadset size={28} />,
          title: "Focus on valuable activities only",
          description:
            "Make sure you only speak to top-quality leads. Don't waste time on busy lines.",
        },
        {
          icon: <IconMail size={28} />,
          title: "Manage your leads effortlessly",
          description:
            "Pick and assign leads to the right campaigns. Automate your lead journeys and flows.",
        },
        {
          icon: <IconMessage size={28} />,
          title: "Make data-driven decisions with impact",
          description:
            "Customize your reports and get insights to keep up with your most important KPIs.",
        },
        {
          icon: <IconUsers size={28} />,
          title: "Automate repetitive tasks & actions",
          description:
            "Create your own automated workflows. Waste no more time on repetitive tasks.",
        },
      ]}
      keyFeatures={[
        {
          title: "24/7 Live Chat Support",
          description:
            "Real-time assistance for your customers through live chat channels, ensuring instant issue resolution.",
        },
        {
          title: "Professional Email Management",
          description:
            "Fast, detailed responses that reflect your brand voice and maintain customer satisfaction.",
        },
        {
          title: "Social Media Support",
          description:
            "Responsive support across social platforms to maintain your brand reputation online.",
        },
        {
          title: "Order Management",
          description:
            "End-to-end order processing, tracking, and customer communication for seamless transactions.",
        },
        {
          title: "Returns & Refunds",
          description:
            "Hassle-free returns processing and refund management that keeps customers satisfied.",
        },
        {
          title: "Quality Monitoring",
          description:
            "Regular quality audits and CSAT tracking to ensure consistent service excellence.",
        },
      ]}
      ctaTitle="Ready to Transform Your Customer Experience?"
      ctaDescription="Contact us today to discuss how Solvigos can support your business."
      faqItems={[
        { question: "What channels do you support?", answer: "We support live chat, email, social media (Instagram, Facebook, Twitter/X, and others), and phone/voice support. We can operate on whichever channels your customers prefer." },
        { question: "Do you offer 24/7 support?", answer: "Yes. 24/7 coverage is available. We staff teams across multiple time zones so your customers can always reach someone — day, night, weekends, and holidays." },
        { question: "How do you ensure your agents understand my brand and product?", answer: "Before going live, your team goes through a dedicated training program built around your brand guidelines, product knowledge, tone of voice, and common customer scenarios. We also run simulated interactions to ensure readiness." },
      ]}
    />
  );
}
