import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconUserPlus, IconChecklist, IconRocket, IconStar } from "@tabler/icons-react";

export default function CustomerOnboardingPage() {
  return (
    <ServiceLayout
      title="Improve outbound calls today"
      subtitle="Services 03"
      description="We help call centers boost KPIs, make better decisions based on insights, and manage contacts more wisely."
      heroImage="/solutions.png"
      currentService="customer-onboarding"
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
      faqItems={[
        { question: "What is Customer Onboarding, and why does it matter?", answer: "Customer Onboarding is the process of helping new customers get set up, understand your product, and experience early value — so they're less likely to churn. We guide new users through the key steps and ensure they feel confident from day one." },
        { question: "Can you handle onboarding for SaaS products or complex platforms?", answer: "Yes. We've onboarded customers for SaaS tools, eCommerce platforms, and technology products. We learn your product thoroughly and build structured onboarding flows that reduce time-to-value." },
        { question: "How do you track onboarding performance?", answer: "We track metrics including onboarding completion rate, time-to-value, and early churn indicators. These are included in your regular performance reports." },
      ]}
    />
  );
}
