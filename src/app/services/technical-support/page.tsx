import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconTool, IconSettings, IconBug, IconDeviceLaptop } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Support",
};

export default function TechnicalSupportPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 05"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      currentService="technical-support"
      features={[
        { icon: <IconTool size={28} />, title: "Focus on valuable activities only", description: "Make sure you only speak to top-quality leads. Don't waste time on busy lines." },
        { icon: <IconSettings size={28} />, title: "Manage your leads effortlessly", description: "Pick and assign leads to the right campaigns. Automate your lead journeys and flows." },
        { icon: <IconBug size={28} />, title: "Make data-driven decisions with impact", description: "Customize your reports and get insights to keep up with your most important KPIs." },
        { icon: <IconDeviceLaptop size={28} />, title: "Automate repetitive tasks & actions", description: "Create your own automated workflows. Waste no more time on repetitive tasks." },
      ]}
      keyFeatures={[
        { title: "Tier 1-3 Support", description: "Scalable technical support from basic troubleshooting to advanced engineering." },
        { title: "Product Knowledge Base", description: "Comprehensive documentation and training for your products." },
        { title: "Escalation Management", description: "Clear escalation paths for complex technical issues." },
        { title: "Performance Monitoring", description: "Proactive monitoring to prevent technical issues before they occur." },
        { title: "User Training", description: "Help your customers get the most from your products." },
        { title: "Documentation", description: "Technical documentation and knowledge base development." },
      ]}
      faqItems={[
        { question: "What does your Technical Support service cover?", answer: "Our Technical Support service handles product and software troubleshooting, guided setup assistance, bug reporting, escalation management, and resolution of technical issues on behalf of your customers." },
        { question: "How technical are your support agents?", answer: "We recruit and train agents specifically for technical roles. Before going live, they complete product-specific training, learn your documentation, and practice on real-world scenarios." },
        { question: "Can you handle Tier 1, Tier 2, and Tier 3 support?", answer: "We specialize in Tier 1 and Tier 2 support (frontline troubleshooting and escalated technical resolution). For Tier 3 issues, we manage the escalation process and ensure clean handoffs with all relevant context documented." },
      ]}
    />
  );
}
