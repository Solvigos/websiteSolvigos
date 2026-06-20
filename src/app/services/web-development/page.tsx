import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconWorld, IconCode, IconSpeed, IconPalette } from "@tabler/icons-react";

export default function WebDevelopmentPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 10"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      features={[
        { icon: <IconWorld size={28} />, title: "Focus on valuable activities only", description: "Make sure you only speak to top-quality leads. Don't waste time on busy lines." },
        { icon: <IconCode size={28} />, title: "Manage your leads effortlessly", description: "Pick and assign leads to the right campaigns. Automate your lead journeys and flows." },
        { icon: <IconSpeed size={28} />, title: "Make data-driven decisions with impact", description: "Customize your reports and get insights to keep up with your most important KPIs." },
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
    />
  );
}
