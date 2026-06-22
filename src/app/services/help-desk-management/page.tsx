import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconTicket, IconFilter, IconChartBar, IconUsers } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Desk Management",
};

export default function HelpDeskManagementPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 09"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      currentService="help-desk-management"
      features={[
        { icon: <IconTicket size={28} />, title: "Focus on valuable activities only", description: "Make sure you only speak to top-quality leads. Don't waste time on busy lines." },
        { icon: <IconFilter size={28} />, title: "Manage your leads effortlessly", description: "Pick and assign leads to the right campaigns. Automate your lead journeys and flows." },
        { icon: <IconChartBar size={28} />, title: "Make data-driven decisions with impact", description: "Customize your reports and get insights to keep up with your most important KPIs." },
        { icon: <IconUsers size={28} />, title: "Automate repetitive tasks & actions", description: "Create your own automated workflows. Waste no more time on repetitive tasks." },
      ]}
      keyFeatures={[
        { title: "24/7 Ticket Support", description: "Round-the-clock ticket management and resolution." },
        { title: "SLA Management", description: "Strict adherence to service level agreements." },
        { title: "Quality Assurance", description: "Regular audits and quality checks on all resolutions." },
        { title: "Custom Workflows", description: "Tailored workflows matching your business processes." },
        { title: "Reporting & Analytics", description: "Comprehensive reporting on all help desk metrics." },
        { title: "Knowledge Base", description: "Self-service resources to reduce ticket volume." },
      ]}
      faqItems={[
        { question: "What does Help Desk Management include?", answer: "We manage your help desk end-to-end — including ticket routing, categorization and prioritization, SLA monitoring, queue management, agent performance oversight, and reporting." },
        { question: "Can you help us migrate from one help desk platform to another?", answer: "Yes. We can assist with platform migrations, including ticket history transfers, workflow rebuilds, and team retraining — minimizing disruption during the transition." },
        { question: "Do you provide reporting on help desk performance?", answer: "Yes. You receive regular reports covering ticket volume, response and resolution times, CSAT scores, SLA compliance, backlog trends, and agent performance with insights and recommendations." },
      ]}
    />
  );
}
