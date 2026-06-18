import { ServiceLayout } from "@/components/shared/ServiceLayout";

export default function TechnicalSupportPage() {
  return (
    <ServiceLayout
      title="Technical Support Services"
      subtitle="Services 02"
      description="Technical issues can impact customer satisfaction and business performance. Solvigos provides responsive technical support teams that help customers resolve issues efficiently. Our specialists understand complex products and deliver solutions that keep your users productive."
      experienceText="We have over 25 years of experience."
      serviceCards={[
        {
          num: "01.",
          title: "Product Troubleshooting",
          desc: "Systematic diagnosis and resolution of product issues across hardware, software, and digital platforms.",
        },
        {
          num: "02.",
          title: "Software Support",
          desc: "Expert assistance for software applications including installation, configuration, and bug resolution.",
        },
        {
          num: "03.",
          title: "Application Assistance",
          desc: "Guided support for web and mobile applications to ensure smooth user experiences.",
        },
        {
          num: "04.",
          title: "User Account Support",
          desc: "Account management, password recovery, access permissions, and security assistance.",
        },
        {
          num: "05.",
          title: "Knowledge Base Management",
          desc: "Creating and maintaining self-service resources that empower customers to find answers independently.",
        },
        {
          num: "06.",
          title: "Ticket Escalation",
          desc: "Structured escalation workflows that ensure complex issues reach the right experts quickly.",
        },
      ]}
      popularServices={[
        {
          title: "System Monitoring",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
          desc: "Proactive monitoring and alerting to identify and address technical issues before they impact your customers.",
        },
        {
          title: "Bug Reporting",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          desc: "Detailed bug documentation, replication, and reporting to streamline your development team's workflow.",
        },
        {
          title: "Tier 2 & 3 Support",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
          desc: "Advanced technical support for complex issues that require specialized knowledge and deeper investigation.",
        },
      ]}
      faqs={[
        {
          question: "How quickly can technical support be launched?",
          answer: "Depending on complexity, onboarding can typically be completed within days to a few weeks.",
        },
        {
          question: "Can your team handle Tier 2 and Tier 3 support?",
          answer: "Yes. We provide support across all tiers based on your requirements and product complexity.",
        },
      ]}
    />
  );
}
