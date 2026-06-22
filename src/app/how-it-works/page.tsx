import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { IconSearch, IconUsers, IconRocket, IconChartLine } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
};

const steps = [
  {
    icon: <IconSearch size={32} />,
    title: "Discovery & Assessment",
    description: "We analyze your current support operations, identify pain points, and define your unique requirements.",
    details: [
      "In-depth consultation with your team",
      "Review of existing processes and tools",
      "Identify KPIs and success metrics",
      "Custom solution design proposal",
    ],
  },
  {
    icon: <IconUsers size={32} />,
    title: "Team Setup & Training",
    description: "We recruit, vet, and train dedicated agents who become experts in your products and brand.",
    details: [
      "Agent recruitment and background checks",
      "Comprehensive product and process training",
      "Tool and system integration setup",
      "Quality assurance framework implementation",
    ],
  },
  {
    icon: <IconRocket size={32} />,
    title: "Launch & Go-Live",
    description: "Your support team goes live with a soft launch, followed by a full rollout with real-time monitoring.",
    details: [
      "Controlled soft launch with pilot group",
      "Real-time performance monitoring",
      "Feedback collection and adjustments",
      "Full-scale deployment",
    ],
  },
  {
    icon: <IconChartLine size={32} />,
    title: "Ongoing Optimization",
    description: "We continuously monitor, measure, and optimize your support operations for peak performance.",
    details: [
      "Weekly performance reviews",
      "Continuous agent coaching and training",
      "Process refinement and optimization",
      "Monthly business reviews with insights",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-ice py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge>How It Works</Badge>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy leading-tight">
              How Solvigos Works
            </h1>
            <p className="mt-4 text-lg text-body leading-relaxed">
              From discovery to ongoing optimization, we make it easy to scale your customer support operations.
            </p>
            <div className="mt-6 flex gap-4">
              <Button href="/contact" size="lg">Get Started</Button>
              <Button href="/pricing" variant="secondary" size="lg">View Pricing</Button>
            </div>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-4xl mx-auto space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-ice flex items-center justify-center text-blue">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-bold text-blue uppercase tracking-wider">Step {index + 1}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy">{step.title}</h2>
                <p className="mt-3 text-body text-lg leading-relaxed">{step.description}</p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue/10 text-blue flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                      <span className="text-sm text-body">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="ice" className="text-center">
        <h2 className="text-3xl font-bold text-navy">Ready to Get Started?</h2>
        <p className="mt-3 text-body max-w-xl mx-auto">
          Contact us today and we&apos;ll have your support team up and running in no time.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button href="/contact" size="lg">Contact Us</Button>
          <Button href="/pricing" variant="secondary" size="lg">See Pricing</Button>
        </div>
      </Section>
    </>
  );
}
