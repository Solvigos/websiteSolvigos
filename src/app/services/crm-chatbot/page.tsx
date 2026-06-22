import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconMessageChatbot, IconSettings, IconAutomation, IconDashboard } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM & Chatbot Setup",
};

export default function CrmChatbotPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 08"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      currentService="crm-chatbot"
      features={[
        { icon: <IconMessageChatbot size={28} />, title: "Focus on valuable activities only", description: "Make sure you only speak to top-quality leads. Don't waste time on busy lines." },
        { icon: <IconSettings size={28} />, title: "Manage your leads effortlessly", description: "Pick and assign leads to the right campaigns. Automate your lead journeys and flows." },
        { icon: <IconAutomation size={28} />, title: "Make data-driven decisions with impact", description: "Customize your reports and get insights to keep up with your most important KPIs." },
        { icon: <IconDashboard size={28} />, title: "Automate repetitive tasks & actions", description: "Create your own automated workflows. Waste no more time on repetitive tasks." },
      ]}
      keyFeatures={[
        { title: "HubSpot Implementation", description: "Complete HubSpot setup including marketing, sales, and service hubs." },
        { title: "Salesforce Configuration", description: "Custom Salesforce implementation tailored to your sales process." },
        { title: "Zendesk Setup", description: "Help desk and ticketing system configuration." },
        { title: "Chatbot Development", description: "Custom chatbot solutions for customer support and lead generation." },
        { title: "Data Migration", description: "Seamless migration of your data to new CRM systems." },
        { title: "Training & Support", description: "Comprehensive training for your team on new systems." },
      ]}
      faqItems={[
        { question: "What CRM platforms do you work with?", answer: "We have experience with HubSpot, Salesforce, Zendesk, Freshdesk, Intercom, GoHighLevel (GHL), Gorgias, and Help Scout, among others. If you use a different CRM, our team evaluates platforms on a case-by-case basis." },
        { question: "Can you build and configure chatbots for my website or app?", answer: "Yes. We design, build, and configure chatbots for customer-facing use cases — including FAQ bots, lead capture bots, support deflection bots, and product recommendation flows." },
        { question: "How long does CRM or chatbot setup take?", answer: "Simple configurations can be completed in a few days. More complex setups involving data migration, multi-tool integrations, or custom automations typically take one to four weeks." },
      ]}
    />
  );
}
