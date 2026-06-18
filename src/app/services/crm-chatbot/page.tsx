import { ServiceLayout } from "@/components/shared/ServiceLayout";

export default function CRMChatbotPage() {
  return (
    <ServiceLayout
      title="CRM & Chatbot Services"
      subtitle="Services 03"
      description="Your CRM and customer communication tools are only as powerful as the configuration behind them. Solvigos helps businesses implement, configure, optimize, and maintain their CRM platforms and chatbot systems to deliver smarter customer conversations."
      experienceText="We have over 25 years of experience."
      serviceCards={[
        {
          num: "01.",
          title: "CRM Implementation",
          desc: "Complete CRM setup and configuration tailored to your business processes and team workflows.",
        },
        {
          num: "02.",
          title: "CRM Migration",
          desc: "Seamless platform migration with data integrity, minimal downtime, and zero disruption to operations.",
        },
        {
          num: "03.",
          title: "Workflow Automation",
          desc: "Automated ticket routing, escalation rules, and process workflows that save time and reduce errors.",
        },
        {
          num: "04.",
          title: "Chatbot Design",
          desc: "Custom chatbot flows that handle common inquiries and escalate complex issues to human agents.",
        },
        {
          num: "05.",
          title: "AI Integration",
          desc: "Advanced AI-powered chatbots that learn from interactions and improve resolution rates over time.",
        },
        {
          num: "06.",
          title: "Reporting Dashboards",
          desc: "Custom analytics configurations that provide visibility into team performance and customer trends.",
        },
      ]}
      popularServices={[
        {
          title: "Chatbot Optimization",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
          desc: "Refining chatbot conversation flows, response accuracy, and resolution rates for better customer experiences.",
        },
        {
          title: "Third-Party Integrations",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          desc: "Connecting your CRM with billing, support, marketing, and other business tools for unified operations.",
        },
        {
          title: "CRM Audits & Cleanup",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
          desc: "Comprehensive audits of existing CRM setups to identify gaps, fix errors, and optimize performance.",
        },
      ]}
      faqs={[
        {
          question: "Can you work on our existing CRM that's already partially set up?",
          answer: "Yes. We handle audits, cleanup, and optimization of existing setups — not just fresh implementations.",
        },
        {
          question: "Which CRM platforms do you support?",
          answer: "We work with Zendesk, Freshdesk, Help Scout, HubSpot, Intercom, Freshchat, Gorgias, and several others.",
        },
        {
          question: "Do you build chatbots from scratch?",
          answer: "Yes. We design conversation flows, configure your chatbot platform, test the experience, and deploy — whether it's a simple FAQ bot or a more advanced AI-powered assistant.",
        },
      ]}
    />
  );
}
