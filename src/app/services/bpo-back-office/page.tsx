import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconFile, IconDatabase, IconClipboard, IconCalculator } from "@tabler/icons-react";

export default function BpoBackOfficePage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 07"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      features={[
        { icon: <IconFile size={28} />, title: "Focus on valuable activities only", description: "Make sure you only speak to top-quality leads. Don't waste time on busy lines." },
        { icon: <IconDatabase size={28} />, title: "Manage your leads effortlessly", description: "Pick and assign leads to the right campaigns. Automate your lead journeys and flows." },
        { icon: <IconClipboard size={28} />, title: "Make data-driven decisions with impact", description: "Customize your reports and get insights to keep up with your most important KPIs." },
        { icon: <IconCalculator size={28} />, title: "Automate repetitive tasks & actions", description: "Create your own automated workflows. Waste no more time on repetitive tasks." },
      ]}
      keyFeatures={[
        { title: "Data Processing", description: "High-volume data entry with 99.9% accuracy rate." },
        { title: "Document Management", description: "Digital document organization and retrieval systems." },
        { title: "Order Fulfillment", description: "End-to-end order processing and tracking." },
        { title: "Invoice Processing", description: "Accounts payable and receivable management." },
        { title: "Quality Control", description: "Multi-step verification processes for accuracy." },
        { title: "Scalable Solutions", description: "Flexible staffing that scales with your business needs." },
      ]}
    />
  );
}
