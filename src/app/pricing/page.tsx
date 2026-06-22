import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { IconCheck } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

const plans = [
  {
    name: "Starter",
    price: "$2,499",
    period: "/month",
    description: "Perfect for small teams looking to scale their support operations.",
    features: [
      "Up to 5 dedicated agents",
      "Email & chat support",
      "48-hour onboarding",
      "Basic reporting dashboard",
      "Standard business hours",
      "Monthly performance review",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$4,999",
    period: "/month",
    description: "Ideal for growing businesses needing multi-channel support.",
    features: [
      "Up to 15 dedicated agents",
      "Email, chat & phone support",
      "2-week onboarding",
      "Advanced analytics & reporting",
      "24/5 coverage",
      "Quality assurance program",
      "Dedicated account manager",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Unlimited agents",
      "Full multi-channel support",
      "Custom onboarding timeline",
      "Real-time dashboards & BI",
      "24/7/365 coverage",
      "Enterprise QA & training",
      "Dedicated success team",
      "Custom integrations",
      "SLA guarantees",
    ],
    highlighted: false,
  },
];

const faqs = [
  { q: "Can I scale my team up or down?", a: "Yes, we offer flexible scaling to match your business needs with no long-term lock-in contracts." },
  { q: "How quickly can you launch?", a: "Most teams are operational within 2 weeks. Our Starter plan launches in as little as 48 hours." },
  { q: "Do you provide training?", a: "Yes, we provide comprehensive training on your products, processes, and tools before go-live." },
  { q: "What channels do you support?", a: "We support email, live chat, phone, social media, and SMS across all plans." },
  { q: "Is there a minimum commitment?", a: "We offer month-to-month flexibility with no minimum commitment on most plans." },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-ice py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge>Pricing</Badge>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy leading-tight">
              Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-body leading-relaxed max-w-2xl mx-auto">
              Choose the plan that fits your business. All plans include a dedicated team, quality assurance, and ongoing support.
            </p>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border-2 ${
                plan.highlighted
                  ? "border-blue bg-blue text-white scale-[1.05] shadow-xl"
                  : "border-border bg-white"
              }`}
            >
              <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-navy"}`}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-end gap-1">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-navy"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.highlighted ? "text-white/70" : "text-body"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${plan.highlighted ? "text-white/80" : "text-body"}`}>
                {plan.description}
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <IconCheck size={18} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-blue"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-body"}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                size="lg"
                className={`mt-8 w-full ${plan.highlighted ? "bg-white text-blue hover:bg-gray-100" : ""}`}
                variant={plan.highlighted ? "ghost" : "primary"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section background="ice">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center">Frequently Asked Questions</h2>
          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl p-6 border border-border">
                <summary className="font-semibold text-navy cursor-pointer">{faq.q}</summary>
                <p className="mt-3 text-body text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white" className="text-center">
        <h2 className="text-3xl font-bold text-navy">Not Sure Which Plan is Right for You?</h2>
        <p className="mt-3 text-body max-w-xl mx-auto">
          Schedule a call with our team and we&apos;ll help you find the perfect solution.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button href="/contact" size="lg">Contact Us</Button>
          <Button href="/how-it-works" variant="secondary" size="lg">How It Works</Button>
        </div>
      </Section>
    </>
  );
}
