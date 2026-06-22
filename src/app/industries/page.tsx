import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  IconBuildingStore,
  IconCloud,
  IconCpu,
  IconHeart,
  IconSchool,
  IconPlane,
  IconArrowRight,
} from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
};

const industries = [
  {
    id: "ecommerce",
    title: "eCommerce",
    subtitle: "From Cart to Customer Loyalty",
    desc: "Online shoppers expect fast answers and frictionless experiences. We handle order management, returns and refunds, live chat support, and customer inquiries — so your buyers stay happy and your team stays focused on growth.",
    icon: <IconBuildingStore size={28} />,
  },
  {
    id: "saas",
    title: "SaaS",
    subtitle: "Support That Matches Your Product's Pace",
    desc: "Subscription businesses live and die by retention. We provide technical support, user onboarding, help desk management, and CRM configuration that keeps your customers activated, engaged, and renewing.",
    icon: <IconCloud size={28} />,
  },
  {
    id: "technology",
    title: "Technology",
    subtitle: "Specialized Support for Complex Products",
    desc: "Tech companies need agents who understand the product, not just the script. We provide Tier 1 and Tier 2 technical support, bug reporting, knowledge base management, and escalation handling.",
    icon: <IconCpu size={28} />,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Reliable Support With the Sensitivity It Demands",
    desc: "Patient communication requires accuracy, empathy, and discretion. We support healthcare providers with patient-facing assistance, appointment coordination, administrative processing, and back-office operations.",
    icon: <IconHeart size={28} />,
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Supporting Students From Enrollment to Completion",
    desc: "Educational institutions need responsive, knowledgeable support teams. We assist with student inquiries, enrollment support, academic help desk services, and administrative operations.",
    icon: <IconSchool size={28} />,
  },
  {
    id: "travel-hospitality",
    title: "Travel & Hospitality",
    subtitle: "Every Interaction Is Part of the Experience",
    desc: "Travelers expect instant, knowledgeable responses at every touchpoint. We support booking management, guest inquiries, itinerary assistance, concierge operations, and complaint resolution.",
    icon: <IconPlane size={28} />,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-ice py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge>Industries</Badge>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy leading-tight">
              Industries We Serve
            </h1>
            <p className="mt-4 text-lg text-body leading-relaxed">
              We bring deep expertise across a wide range of industries, delivering tailored
              support solutions that meet the unique needs of each sector.
            </p>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <Link
              key={ind.id}
              href={`/industries/${ind.id}`}
              className="block border border-border rounded-2xl p-6 hover:border-blue hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-ice flex items-center justify-center text-blue mb-4 group-hover:bg-blue group-hover:text-white transition-colors">
                {ind.icon}
              </div>
              <h2 className="text-xl font-bold text-navy group-hover:text-blue transition-colors">{ind.title}</h2>
              <p className="mt-1 text-sm font-medium text-blue">{ind.subtitle}</p>
              <p className="mt-2 text-sm text-body leading-relaxed">{ind.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="ice" className="text-center">
        <h2 className="text-3xl font-bold text-navy">Not sure if we cover your industry?</h2>
        <p className="mt-3 text-body max-w-xl mx-auto">
          Reach out and we&apos;ll discuss how Solvigos can support your specific business needs.
        </p>
        <Button href="/contact" size="lg" className="mt-8">
          Contact Us Today
        </Button>
      </Section>
    </>
  );
}
