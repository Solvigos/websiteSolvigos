import { ServiceLayout } from "@/components/shared/ServiceLayout";

export default function CustomerSupportPage() {
  return (
    <ServiceLayout
      title="Customer Support Outsourcing"
      subtitle="Services 01"
      description="Your customers expect quick answers, professional communication, and personalized support. Solvigos helps you deliver outstanding service experiences that strengthen customer loyalty and improve retention. Our dedicated team becomes an extension of your brand, handling every interaction with care and professionalism."
      experienceText="We have over 25 years of experience."
      serviceCards={[
        {
          num: "01.",
          title: "Live Chat Support",
          desc: "Real-time assistance for your customers through live chat channels, ensuring instant issue resolution.",
        },
        {
          num: "02.",
          title: "Email Support",
          desc: "Professional email management with fast, detailed responses that reflect your brand voice.",
        },
        {
          num: "03.",
          title: "Help Desk Management",
          desc: "Centralized support operations with ticket tracking, prioritization, and resolution workflows.",
        },
        {
          num: "04.",
          title: "Social Media Support",
          desc: "Responsive support across social platforms to maintain your brand reputation online.",
        },
        {
          num: "05.",
          title: "Order Management",
          desc: "End-to-end order processing, tracking, and customer communication for seamless transactions.",
        },
        {
          num: "06.",
          title: "Returns & Refunds",
          desc: "Hassle-free returns processing and refund management that keeps customers satisfied.",
        },
      ]}
      popularServices={[
        {
          title: "Customer Onboarding",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
          desc: "Streamlined onboarding experiences that help new customers get started quickly and successfully with your product or service.",
        },
        {
          title: "Subscription Support",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          desc: "Comprehensive subscription management including billing, upgrades, cancellations, and renewal reminders.",
        },
        {
          title: "Customer Retention",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
          desc: "Proactive retention programs and satisfaction monitoring to reduce churn and build lasting relationships.",
        },
      ]}
      faqs={[
        {
          question: "Can you provide 24/7 support?",
          answer: "Yes. We can build support schedules that match your business requirements, including 24/7 coverage across multiple time zones.",
        },
        {
          question: "Can your agents represent our brand?",
          answer: "Absolutely. Our teams are trained specifically on your products, services, and communication standards to ensure brand consistency.",
        },
        {
          question: "How do you measure support quality?",
          answer: "We track CSAT, NPS, first response time, resolution time, and other KPIs with regular reporting and quality audits.",
        },
      ]}
    />
  );
}
