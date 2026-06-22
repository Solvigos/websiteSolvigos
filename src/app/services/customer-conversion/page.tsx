import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconTrendingUp, IconTarget, IconMessage, IconUsers } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Conversion",
};

export default function CustomerConversionPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 02"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      currentService="customer-conversion"
      features={[
        { icon: <IconTrendingUp size={28} />, title: "Focus on valuable activities only", description: "Make sure you only speak to top-quality leads. Don't waste time on busy lines." },
        { icon: <IconTarget size={28} />, title: "Manage your leads effortlessly", description: "Pick and assign leads to the right campaigns. Automate your lead journeys and flows." },
        { icon: <IconMessage size={28} />, title: "Make data-driven decisions with impact", description: "Customize your reports and get insights to keep up with your most important KPIs." },
        { icon: <IconUsers size={28} />, title: "Automate repetitive tasks & actions", description: "Create your own automated workflows. Waste no more time on repetitive tasks." },
      ]}
      keyFeatures={[
        { title: "Lead Qualification", description: "Identify and qualify high-potential leads for your sales team." },
        { title: "Outbound Calling", description: "Professional cold calling and follow-up campaigns." },
        { title: "Email Sequences", description: "Automated email nurturing that moves prospects forward." },
        { title: "Appointment Setting", description: "Book qualified meetings for your sales team." },
        { title: "Pipeline Management", description: "Track and manage prospects through your sales funnel." },
        { title: "Conversion Analytics", description: "Data-driven insights to optimize your conversion rates." },
      ]}
      faqItems={[
        { question: "What does Customer Conversion mean in the context of your services?", answer: "Customer Conversion refers to engaging and converting prospective customers into paying ones. Our teams handle outreach, follow-ups, product education, and persuasive communication designed to move leads through the funnel." },
        { question: "How is this different from a sales team?", answer: "Think of our conversion agents as an extension of your sales or pre-sales team. They're trained on your product and value proposition, respond to inbound inquiries quickly, and nurture leads with the right messaging at the right time." },
        { question: "How do you track conversion performance?", answer: "We track metrics including lead response time, conversion rate, and pipeline contribution. These are included in your regular performance reports with insights and recommendations." },
      ]}
    />
  );
}
