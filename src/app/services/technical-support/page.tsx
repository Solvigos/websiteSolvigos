import { ServiceLayout } from "@/components/shared/ServiceLayout";
import { IconTool, IconSettings, IconBug, IconDeviceLaptop } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Support Outsourcing Services",
  description:
    "Technical support outsourcing for small businesses. Product-trained agents for Tier 1 & Tier 2 support, fast response times, and flexible month-to-month agreements.",
  openGraph: {
    title: "Technical Support Services | Solvigos",
    description:
      "Technical support outsourcing for small businesses with product-trained agents for Tier 1 and Tier 2 support.",
    url: "https://solvigos.com/services/technical-support",
    images: [
      {
        url: "/og_image/technicalsupport.png",
        width: 1200,
        height: 630,
        alt: "Solvigos Technical Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Support Services | Solvigos",
    description:
      "Technical support outsourcing for small businesses with product-trained agents for Tier 1 and Tier 2 support.",
    images: ["/og_image/technicalsupport.png"],
  },
};

export default function TechnicalSupportPage() {
  return (
    <ServiceLayout
      title="Technical Support That Actually Understands Your Product"
      subtitle="Services 05"
      description="Resolve customer issues quickly with product-trained specialists who know your software inside out. Small business friendly, no long-term commitments."
      heroImage="/servicepages/herotechnicalSupport.png"
      currentService="technical-support"
      features={[
        { icon: <IconTool size={28} />, title: "Trained on your actual product", description: "Your agents learn your software, your documentation, and your common issues before taking a single ticket. No generic support here." },
        { icon: <IconSettings size={28} />, title: "Fast fixes, happy customers", description: "We aim for first-response times under 5 minutes for chat and under 4 hours for email. Your customers stay productive, not frustrated." },
        { icon: <IconBug size={28} />, title: "Smart escalation when needed", description: "Tier 1 handles the basics. Tier 2 tackles the tricky stuff. If it needs your engineering team, we pass clean context so they can jump right in." },
        { icon: <IconDeviceLaptop size={28} />, title: "Scale up or down, your call", description: "Launching a new feature? Going through a quiet season? Adjust your support capacity anytime with no penalties or long-term contracts." },
      ]}
      strikeHeadline="What Happens When We Become Your"
      strikeWord="Help Desk"
      strikeReplacement="Tech Partner"
      strikeSubheadline="Complex issues require specialists, not generalists. Our technical support professionals are trained deeply on your products and systems to resolve issues quickly and accurately so your customers stay happy and your team stays focused."
      keyFeatures={[
        { title: "Product-Trained Agents", description: "Comprehensive onboarding into your technology stack ensures agents can resolve issues rather than simply escalating them to you." },
        { title: "Tier 1 & Tier 2 Support", description: "From basic troubleshooting to advanced technical investigations, our teams handle both tiers so your engineers can focus on building." },
        { title: "Fast First Response", description: "SLA-driven workflows ensure customers receive timely assistance within minutes for urgent issues, not hours or days." },
        { title: "Escalation Management", description: "Structured escalation paths connect critical issues to your engineering teams only when necessary with full context already documented." },
      ]}
      faqItems={[
        { question: "What does your Technical Support service cover?", answer: "Our Technical Support service handles product and software troubleshooting, guided setup assistance, bug reporting, escalation management, and resolution of technical issues on behalf of your customers." },
        { question: "How technical are your support agents?", answer: "We recruit and train agents specifically for technical roles. Before going live, they complete product-specific training, learn your documentation, and practice on real-world scenarios." },
        { question: "Can you handle both Tier 1 and Tier 2 support?", answer: "Yes. We specialize in Tier 1 (frontline troubleshooting) and Tier 2 (advanced technical resolution). For issues that require your engineering team, we manage the escalation process and ensure clean handoffs with all relevant context." },
        { question: "Is there a minimum commitment?", answer: "No. We offer flexible month-to-month agreements so you can start small, test the waters, and scale when it makes sense for your business." },
      ]}
      ctaImages={["/startTeam/image9.png", "/startTeam/image3.png", "/startTeam/image4.png", "/startTeam/image8.png"]}
      stillHaveQuestionsText="We're here to answer any questions you may have about outsourcing your technical support. From startups launching their first product to established businesses expanding support coverage, we'd love to help."
      outsourcedBlocks={{
        heading: <>Technical Support Solutions<br/>Built for Real Businesses</>,
        blocks: [
          {
            title: "Technical Expertise Without the Overhead",
            descriptions: [
              "Hiring an in-house technical support team is expensive and time-consuming. We provide trained, experienced technical agents who already know how to handle complex product issues ready to support your customers from day one.",
              "From software troubleshooting to hardware configuration, we handle Tier 1 and Tier 2 support so your internal team can focus on building great products, not answering repetitive questions.",
            ],
          },
          {
            title: "Flexible Support That Grows With You",
            descriptions: [
              "As your product evolves, your support needs change. We scale our technical teams to match your launch cycles, peak seasons, and growth plans without you having to hire or train.",
              "Our SLA-driven workflows ensure fast response times, while structured escalation paths connect critical issues to your engineering team only when absolutely necessary.",
            ],
          },
        ],
      }}
    />
  );
}
