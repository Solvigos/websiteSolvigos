import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconUserPlus, IconChecklist, IconRocket, IconStar } from "@tabler/icons-react";

export default function CustomerOnboardingPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 03"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      features={[
        { icon: <IconUserPlus size={28} />, title: "Focus on valuable activities only", description: "Make sure you only speak to top-quality leads. Don't waste time on busy lines." },
        { icon: <IconChecklist size={28} />, title: "Manage your leads effortlessly", description: "Pick and assign leads to the right campaigns. Automate your lead journeys and flows." },
        { icon: <IconRocket size={28} />, title: "Make data-driven decisions with impact", description: "Customize your reports and get insights to keep up with your most important KPIs." },
        { icon: <IconStar size={28} />, title: "Automate repetitive tasks & actions", description: "Create your own automated workflows. Waste no more time on repetitive tasks." },
      ]}
      keyFeatures={[
        { title: "Welcome Calls", description: "Personalized welcome calls to set expectations." },
        { title: "Training Sessions", description: "Product training and walkthrough sessions." },
        { title: "Setup Assistance", description: "Hands-on help with account and product setup." },
        { title: "Progress Tracking", description: "Monitor onboarding milestones and completion." },
        { title: "Feedback Collection", description: "Gather insights to improve the onboarding process." },
        { title: "Success Playbooks", description: "Standardized processes for consistent onboarding." },
      ]}
    />
  );
}
