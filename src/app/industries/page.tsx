import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const industries = [
  {
    id: "ecommerce",
    title: "eCommerce",
    desc: "Handle high-volume customer inquiries, order management, returns, and product support for online stores.",
  },
  {
    id: "saas",
    title: "SaaS",
    desc: "Provide technical support, user onboarding, subscription management, and customer retention services.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    desc: "Deliver HIPAA-compliant support, patient scheduling, and administrative assistance for healthcare providers.",
  },
  {
    id: "fintech",
    title: "Fintech",
    desc: "Offer secure, compliant support for financial applications, transaction inquiries, and account management.",
  },
  {
    id: "education",
    title: "Education",
    desc: "Support students, parents, and educators with enrollment, platform assistance, and technical troubleshooting.",
  },
  {
    id: "professional",
    title: "Professional Services",
    desc: "Provide client onboarding, scheduling, billing support, and back-office management for service firms.",
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    desc: "Handle booking support, travel modifications, customer inquiries, and concierge-level service.",
  },
  {
    id: "technology",
    title: "Technology",
    desc: "Deliver technical support, product troubleshooting, and customer success services for tech companies.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="border border-border rounded-xl p-6 hover:border-blue hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-bold text-navy">{ind.title}</h2>
              <p className="mt-2 text-body leading-relaxed">{ind.desc}</p>
              <Button href="/contact" variant="ghost" className="mt-4">
                Learn More &rarr;
              </Button>
            </div>
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
