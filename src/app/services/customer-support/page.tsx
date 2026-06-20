import { ServiceLayout } from "@/components/shared/ServiceLayout";
import {
  IconHeadset,
  IconMail,
  IconMessage,
  IconUsers,
} from "@tabler/icons-react";

export default function CustomerSupportPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 01"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
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
    />
  );
}
