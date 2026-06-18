import { ServiceLayout } from "@/components/shared/ServiceLayout";

export default function BPOBackOfficePage() {
  return (
    <ServiceLayout
      title="BPO & Back-Office Services"
      subtitle="Services 04"
      description="Administrative processes are essential to business success but can consume valuable time and resources. Solvigos provides reliable back-office support that allows your teams to focus on strategic growth while we handle the operational details."
      experienceText="We have over 25 years of experience."
      serviceCards={[
        {
          num: "01.",
          title: "Data Entry",
          desc: "Accurate, efficient data entry and management across systems, databases, and spreadsheets.",
        },
        {
          num: "02.",
          title: "CRM Management",
          desc: "Ongoing CRM maintenance, data cleanup, and system optimization to keep your operations running smoothly.",
        },
        {
          num: "03.",
          title: "Order Processing",
          desc: "End-to-end order management from entry to fulfillment, ensuring accuracy and speed.",
        },
        {
          num: "04.",
          title: "Virtual Assistance",
          desc: "Administrative support including scheduling, email management, research, and task coordination.",
        },
        {
          num: "05.",
          title: "Reporting & Documentation",
          desc: "Comprehensive business reporting, documentation, and record-keeping for better decision-making.",
        },
        {
          num: "06.",
          title: "Quality Assurance",
          desc: "Systematic quality checks and process audits to maintain accuracy and compliance standards.",
        },
      ]}
      popularServices={[
        {
          title: "Workflow Administration",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          desc: "Streamlined workflow management that reduces bottlenecks and improves operational efficiency across teams.",
        },
        {
          title: "Customer Records",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
          desc: "Secure customer data management, updates, and maintenance to ensure information accuracy and compliance.",
        },
        {
          title: "Scalable Operations",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
          desc: "Flexible resource allocation that scales with your business needs, from startup to enterprise operations.",
        },
      ]}
      faqs={[
        {
          question: "How do you ensure data accuracy?",
          answer: "We implement multi-layer quality checks, automated validation rules, and regular audits to maintain 99%+ accuracy rates.",
        },
        {
          question: "Can you work with our existing tools?",
          answer: "Yes. We integrate seamlessly with your current systems, tools, and workflows without disruption.",
        },
      ]}
    />
  );
}
