import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconFile, IconDatabase, IconClipboard, IconCalculator } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPO & Back-Office Outsourcing Services",
  description:
    "Back-office outsourcing for small businesses. Data entry, order processing, CRM management, and workflow automation. Flexible, affordable, no long-term contracts.",
  openGraph: {
    title: "BPO & Back-Office Services | Solvigos",
    description:
      "Back-office outsourcing for small businesses — data entry, order processing, CRM management, and workflow automation.",
    url: "https://solvigos.com/services/bpo-back-office",
    images: [
      {
        url: "/og_image/servicespage.jpg",
        width: 1200,
        height: 630,
        alt: "Solvigos BPO & Back-Office Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPO & Back-Office Services | Solvigos",
    description:
      "Back-office outsourcing for small businesses — data entry, order processing, CRM management, and workflow automation.",
    images: ["/og_image/servicespage.jpg"],
  },
};

export default function BpoBackOfficePage() {
  return (
    <ServiceLayout
      title="Take Back Your Time with Simple, Affordable Back-Office Support"
      subtitle="Services 07"
      description="Free yourself from repetitive admin tasks with accurate data management, workflow automation, and a dedicated team that integrates into your existing systems."
      heroImage="/servicepages/herobpoBackoffice.png"
      currentService="bpo-back-office"
      features={[
        { icon: <IconFile size={28} />, title: "We handle the busywork", description: "Data entry, order processing, invoice management — we take over the repetitive tasks that eat up your team's valuable time." },
        { icon: <IconDatabase size={28} />, title: "Works with your existing tools", description: "We plug into your current CRM, spreadsheets, or project management system. No need to change your stack or learn new software." },
        { icon: <IconClipboard size={28} />, title: "Accuracy you can count on", description: "Built-in quality checks and review processes ensure your data stays accurate, consistent, and reliable — no costly errors." },
        { icon: <IconCalculator size={28} />, title: "Affordable, flexible, contract-free", description: "Month-to-month agreements with no long-term lock-ins. Start small and scale up as your operational needs grow." },
      ]}
      keyFeatures={[
        { title: "Data Entry & Management", description: "Accurate handling of records, CRM updates, reporting, and operational data so your team never gets buried in spreadsheets again." },
        { title: "Workflow Automation", description: "We identify repetitive tasks and automate processes to improve efficiency and reduce manual effort across your operations." },
        { title: "Cost-Efficient Teams", description: "Expand your operational capacity without the expense of traditional hiring, benefits, office space, or infrastructure." },
        { title: "Quality-Controlled Output", description: "Built-in quality assurance processes ensure consistency, accuracy, and reliability at every step, no exceptions." },
      ]}
      faqItems={[
        { question: "What BPO and back-office tasks can you handle?", answer: "Our back-office services include data entry, order processing, CRM data management, reporting, administrative coordination, document handling, invoice processing, and other repetitive operational tasks that take time away from your core business." },
        { question: "How do you ensure data security?", answer: "We take data security seriously. Our teams operate under strict confidentiality agreements and follow best practices for data handling and access control. If your industry has specific compliance requirements, let us know and we'll accommodate them." },
        { question: "Can you work with our existing systems?", answer: "Absolutely. We work within your existing tools — whether that's your CRM, project management system, spreadsheets, or proprietary software. We adapt to your stack, not the other way around." },
        { question: "What's the minimum commitment?", answer: "There's no minimum commitment. We offer flexible month-to-month agreements so you can start small, prove the value, and scale when it makes sense for your business." },
      ]}
      strikeHeadline="What Happens When We Become Your"
      strikeWord="Overhead"
      strikeReplacement="Growth Engine"
      strikeSubheadline="Administrative work shouldn't slow your business down. We remove operational bottlenecks so your team can focus on growth, revenue, and strategic priorities not data entry and spreadsheets."
      ctaImages={["/startTeam/image9.jpg", "/startTeam/image3.jpg", "/startTeam/image4.jpg", "/startTeam/image8.jpg"]}
      stillHaveQuestionsText="We're here to answer any questions you may have about outsourcing your back-office operations. Whether you're a solo founder drowning in admin or a growing team looking to streamline operations, we'd love to chat."
      outsourcedBlocks={{
        heading: <>Back-Office Solutions That<br/>Free Up Your Time</>,
        blocks: [
          {
            title: "Less Admin, More What Matters",
            descriptions: [
              "Running a small business means wearing a lot of hats but that doesn't mean you need to do all the paperwork yourself. We take over the repetitive administrative tasks so you and your team can focus on serving customers, building products, and growing revenue.",
              "From data entry to document management, accuracy and speed are built into every process. Our quality-controlled workflows ensure consistency and reliability at scale, reducing errors and saving you time.",
            ],
          },
          {
            title: "Affordable Capacity Without the Hassle",
            descriptions: [
              "Hiring full-time admin staff comes with salary, benefits, training, and management overhead. We provide trained, managed teams that integrate seamlessly into your workflows at a fraction of the cost.",
              "Whether it's invoice processing, CRM updates, or order fulfillment, our back-office solutions are designed to fit your budget and scale with your business. No long-term contracts, no surprises.",
            ],
          },
        ],
      }}
    />
  );
}
