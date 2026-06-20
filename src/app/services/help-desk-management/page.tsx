import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconTicket, IconFilter, IconChartBar, IconUsers } from "@tabler/icons-react";

export default function HelpDeskManagementPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 09"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
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
    />
  );
}
