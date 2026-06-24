import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconMessageChatbot, IconSettings, IconAutomation, IconDashboard } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Setup & AI Chatbot Integration Services",
  description:
    "CRM setup and AI chatbot integration for small businesses. Implement, configure, and optimize HubSpot, Salesforce, Zendesk, and custom AI chatbots. No tech team required.",
  openGraph: {
    title: "CRM & AI Chatbot Setup | Solvigos",
    description:
      "CRM setup and AI chatbot integration for small businesses — implement, configure, and optimize your customer experience tools.",
    url: "https://solvigos.com/services/crm-chatbot",
    images: [
      {
        url: "/og_image/crmchatbot.png",
        width: 1200,
        height: 630,
        alt: "Solvigos CRM & AI Chatbot Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM & AI Chatbot Setup | Solvigos",
    description:
      "CRM setup and AI chatbot integration for small businesses — implement, configure, and optimize your customer experience tools.",
    images: ["/og_image/crmchatbot.png"],
  },
};

export default function CrmChatbotPage() {
  return (
    <ServiceLayout
      title="CRM & Chatbot Setup That Actually Works for Small Businesses"
      subtitle="Services 08"
      description="Get your CRM and chatbot systems configured, connected, and running smoothly without needing a technical team or weeks of setup time."
      heroImage="/servicepages/herocrmchatbot.png"
      currentService="crm-chatbot"
      features={[
        { icon: <IconMessageChatbot size={28} />, title: "Set up in days, not months", description: "We handle the full implementation — from CRM configuration to chatbot deployment — so you can start seeing results fast." },
        { icon: <IconSettings size={28} />, title: "Tools that talk to each other", description: "We connect your CRM with email, billing, support, and communication platforms so your data flows where it needs to go." },
        { icon: <IconAutomation size={28} />, title: "Chatbots that actually help", description: "Deploy friendly AI chatbots that answer FAQs, capture leads, and deflect support tickets — trained on your specific business." },
        { icon: <IconDashboard size={28} />, title: "We stay with you after launch", description: "Setup is just the beginning. We monitor, tweak, and optimize your systems over time so they keep working well as your business grows." },
      ]}
      strikeHeadline="What Happens When We Become Your"
      strikeWord="IT Vendor"
      strikeReplacement="CX Architect"
      strikeSubheadline="We don't just configure software. We design intelligent customer experience systems that connect your sales, marketing, and support workflows without requiring you to hire a technical team."
      keyFeatures={[
        { title: "CRM Implementation", description: "Complete CRM setup and configuration tailored to your sales, marketing, customer service, and operational workflows no tech expertise needed from your side." },
        { title: "Platform Integration", description: "Connect your CRM seamlessly with email platforms, billing systems, support tools, communication channels, and business applications." },
        { title: "AI Chatbot Setup", description: "Deploy custom AI-powered chatbots for customer support, lead qualification, self-service, and engagement across your website or app." },
        { title: "Ongoing Optimization", description: "Continuous monitoring, refinement, and performance tuning to ensure your CRM and chatbot ecosystem delivers long-term results." },
      ]}
      faqItems={[
        { question: "What CRM platforms do you work with?", answer: "We have experience with HubSpot, Salesforce, Zendesk, Freshdesk, Intercom, GoHighLevel (GHL), Gorgias, and Help Scout. If you use a different CRM, let us know and we'll evaluate compatability." },
        { question: "Can you build a chatbot for my website or app?", answer: "Yes. We design, build, and configure chatbots for customer-facing use cases — including FAQ bots, lead capture bots, support deflection bots, and product recommendation flows." },
        { question: "How long does setup take?", answer: "Simple configurations can be completed in a few days. More complex setups involving data migration, multi-tool integrations, or custom automations typically take one to four weeks." },
        { question: "Do I need a technical team to maintain the system?", answer: "No. After setup, we handle ongoing optimization, monitoring, and updates. You don't need to hire an IT person or learn complex software — we've got you covered." },
      ]}
      ctaImages={["/startTeam/image9.png", "/startTeam/image3.png", "/startTeam/image4.png", "/startTeam/image8.png"]}
      stillHaveQuestionsText="We're here to answer any questions you may have about CRM and AI chatbot setup. Whether you're setting up your first CRM or looking to add AI chatbots to your existing systems, we'd love to help."
      outsourcedBlocks={{
        heading: <>CRM & Chatbot Solutions<br/>Built for Small Teams</>,
        blocks: [
          {
            title: "Your Tools, Connected and Working Together",
            descriptions: [
              "We design and implement CRM and chatbot ecosystems that work together to automate, personalize, and optimize every customer interaction. No more switching between 10 different tools or manually copying data from one system to another.",
              "From platform integration to AI chatbot deployment, our solutions connect your sales, marketing, and service workflows into one unified system that actually saves you time.",
            ],
          },
          {
            title: "Set Up Once, Keep Improving Forever",
            descriptions: [
              "Our approach goes beyond implementation. We continuously monitor, refine, and tune your CRM and chatbot performance to ensure long-term results and ROI.",
              "With custom automations, data-driven insights, and ongoing support, your customer experience ecosystem evolves with your business without you having to lift a finger.",
            ],
          },
        ],
      }}
    />
  );
}
