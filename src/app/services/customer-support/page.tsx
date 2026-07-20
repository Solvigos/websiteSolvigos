import { ServiceLayout } from "@/components/shared/ServiceLayout";
import {
  IconHeadset,
  IconMail,
  IconMessage,
  IconUsers,
} from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outsourced Customer Support Services",
  description:
    "Small business customer support outsourcing. Friendly omnichannel agents, 24/7 coverage, no long-term contracts. Scale support without the overhead of an in-house team.",
  openGraph: {
    title: "Customer Support Services | Solvigos",
    description:
      "Small business customer support outsourcing with friendly omnichannel agents and 24/7 coverage. No long-term contracts.",
    url: "https://solvigos.com/services/customer-support",
    images: [
      {
        url: "/og_image/customersupport.jpg",
        width: 1200,
        height: 630,
        alt: "Solvigos Customer Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Support Services | Solvigos",
    description:
      "Small business customer support outsourcing with friendly omnichannel agents and 24/7 coverage. No long-term contracts.",
    images: ["/og_image/customersupport.jpg"],
  },
};

export default function CustomerSupportPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What channels do you support?", "acceptedAnswer": { "@type": "Answer", "text": "We support live chat, email, social media (Instagram, Facebook, Twitter/X, and others), and phone/voice support. We can operate on whichever channels your customers prefer." } },
      { "@type": "Question", "name": "Do you offer 24/7 support for small teams?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. 24/7 coverage is available even for smaller teams. We staff agents across multiple time zones so your customers can always reach someone — day, night, weekends, and holidays." } },
      { "@type": "Question", "name": "How quickly can we start?", "acceptedAnswer": { "@type": "Answer", "text": "Most teams go live within 2-3 weeks. We start with a discovery call to understand your needs, then build, train, and launch your dedicated support team." } },
      { "@type": "Question", "name": "Do I need to sign a long-term contract?", "acceptedAnswer": { "@type": "Answer", "text": "No. We offer flexible month-to-month agreements with no long-term lock-ins. You can scale up, down, or pause as your business needs change." } },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceLayout
      title="Customer Support That Feels Like Yours Without the Headcount"
      subtitle="Services 01"
      description="Delight your customers with friendly, professional support across every channel. We handle the hiring, training, and management so you can focus on growing your business."
      heroImage="/servicepages/herocustomerSupport.png"
      currentService="customer-support"
      features={[
        {
          icon: <IconHeadset size={28} />,
          title: "Start small, scale when you're ready",
          description:
            "Whether you need one agent or an entire team, we grow with your business. No minimum commitments, no pressure.",
        },
        {
          icon: <IconMail size={28} />,
          title: "Your brand voice, perfectly matched",
          description:
            "We train your agents on your products, tone, and processes so every interaction sounds like it's coming from your in-house team.",
        },
        {
          icon: <IconMessage size={28} />,
          title: "Clear reporting, no surprises",
          description:
            "Get simple weekly reports on response times, customer satisfaction, and ticket volumes. Know exactly what's happening.",
        },
        {
          icon: <IconUsers size={28} />,
          title: "Real people who genuinely care",
          description:
            "No bots, no scripts that sound robotic. Our agents are trained to listen, understand, and solve problems like a real human.",
        },
      ]}
      ctaTitle="Ready to Transform Your Customer Experience?"
      ctaDescription="Contact us today to discuss how Solvigos can support your business."
      strikeHeadline="What Happens When We Become Your"
      strikeWord="Vendor"
      strikeReplacement="Support Partner"
      strikeSubheadline="We don't just answer tickets we become an extension of your team. Dedicated specialists, proven processes, and the flexibility to scale with your business, big or small."
      keyFeatures={[
        { title: "Omnichannel Coverage", description: "Live chat, email, phone, and social media support so your customers can reach you however they prefer no channel left behind." },
        { title: "24/7 Availability", description: "Round-the-clock support coverage across every time zone so you never miss a customer inquiry, even while you sleep." },
        { title: "Brand-Trained Agents", description: "Every agent learns your products, your tone, and your processes so every interaction feels like it's coming from your in-house team." },
        { title: "97% Satisfaction Rate", description: "Industry-leading customer satisfaction scores backed by measurable performance and continuous quality assurance you can trust." },
      ]}
      faqItems={[
        { question: "What channels do you support?", answer: "We support live chat, email, social media (Instagram, Facebook, Twitter/X, and others), and phone/voice support. We can operate on whichever channels your customers prefer." },
        { question: "Do you offer 24/7 support for small teams?", answer: "Yes. 24/7 coverage is available even for smaller teams. We staff agents across multiple time zones so your customers can always reach someone — day, night, weekends, and holidays." },
        { question: "How quickly can we start?", answer: "Most teams go live within 2-3 weeks. We start with a discovery call to understand your needs, then build, train, and launch your dedicated support team." },
        { question: "Do I need to sign a long-term contract?", answer: "No. We offer flexible month-to-month agreements with no long-term lock-ins. You can scale up, down, or pause as your business needs change." },
      ]}
      ctaImages={["/startTeam/image9.jpg", "/startTeam/image3.jpg", "/startTeam/image4.jpg", "/startTeam/image8.jpg"]}
      stillHaveQuestionsText="We're here to answer any questions you may have about outsourcing your customer support. Whether you're a startup launching your first support team or an established business looking to scale, we'd love to hear from you."
      outsourcedBlocks={{
        heading: <>What Support Solutions<br/>Does Solvigos Offer?</>,
        blocks: [
          {
            title: "Friendly Support That Feels Personal",
            descriptions: [
              "We believe great customer support starts with great people. Our agents are carefully selected for their communication skills, empathy, and problem-solving ability then trained on your specific products and brand voice.",
              "Whether it's a quick chat question or a complex email inquiry, your customers will feel heard, understood, and taken care of. No robotic scripts, no cookie-cutter responses.",
            ],
          },
          {
            title: "Flexible, Affordable, and Ready to Scale",
            descriptions: [
              "Start with what you need today and expand when you're ready. Our flexible pricing and month-to-month agreements mean you're never locked into something that doesn't fit.",
              "As your business grows, we add agents, expand coverage hours, and bring on new channels all without you having to hire, train, or manage additional staff.",
            ],
          },
        ],
      }}
    />
    </>
  );
}
