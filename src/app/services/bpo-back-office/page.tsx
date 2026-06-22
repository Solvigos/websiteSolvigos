import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconFile, IconDatabase, IconClipboard, IconCalculator } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPO & Back-Office",
};

export default function BpoBackOfficePage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 07"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      currentService="bpo-back-office"
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
      faqItems={[
        { question: "What is BPO, and what back-office tasks can you handle?", answer: "BPO stands for Business Process Outsourcing. Our back-office services include data entry, order processing, CRM data management, reporting, administrative coordination, document handling, and other repetitive operational tasks." },
        { question: "Is my data safe with your team?", answer: "Yes. We take data security seriously. Our teams operate under strict confidentiality agreements, and we follow best practices for data handling and access control. If your industry has specific compliance requirements, let us know during consultation." },
        { question: "Can you integrate into our existing systems and workflows?", answer: "Yes. We work within your existing tools — whether that's your CRM, project management system, spreadsheets, or proprietary software. We don't require you to change your stack; we adapt to it." },
      ]}
    />
  );
}
