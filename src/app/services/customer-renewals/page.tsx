import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconRefresh, IconCalendar, IconHeart, IconTrendingUp } from "@tabler/icons-react";

export default function CustomerRenewalsPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 06"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      features={[
        { icon: <IconRefresh size={28} />, title: "Focus on valuable activities only", description: "Make sure you only speak to top-quality leads. Don't waste time on busy lines." },
        { icon: <IconCalendar size={28} />, title: "Manage your leads effortlessly", description: "Pick and assign leads to the right campaigns. Automate your lead journeys and flows." },
        { icon: <IconHeart size={28} />, title: "Make data-driven decisions with impact", description: "Customize your reports and get insights to keep up with your most important KPIs." },
        { icon: <IconTrendingUp size={28} />, title: "Automate repetitive tasks & actions", description: "Create your own automated workflows. Waste no more time on repetitive tasks." },
      ]}
      keyFeatures={[
        { title: "Renewal Reminders", description: "Automated and personal renewal reminders before expiry." },
        { title: "Contract Negotiation", description: "Skilled negotiation to secure favorable renewals." },
        { title: "Win-Back Campaigns", description: "Re-engage lapsed customers with targeted outreach." },
        { title: "Churn Prevention", description: "Identify and address at-risk accounts proactively." },
        { title: "Upsell Opportunities", description: "Identify expansion opportunities during renewal conversations." },
        { title: "Reporting & Analytics", description: "Detailed reports on renewal rates and revenue." },
      ]}
    />
  );
}
