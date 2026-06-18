import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";

const faqs = [
  {
    question: "What industries do you support?",
    answer:
      "We work with eCommerce, SaaS, healthcare, professional services, technology, education, and other industries. Our teams are trained to adapt to your specific industry requirements.",
  },
  {
    question: "Do you provide 24/7 support?",
    answer:
      "Yes, we can provide support coverage based on your operational requirements. We build support schedules that match your business needs.",
  },
  {
    question: "How quickly can services be launched?",
    answer:
      "Depending on complexity, onboarding can typically be completed within days to a few weeks. We work efficiently to get your team up and running as quickly as possible.",
  },
  {
    question: "Can support teams use our existing systems?",
    answer:
      "Yes. We can work directly within your current CRM, helpdesk, and communication platforms including Zendesk, Freshdesk, HubSpot, Intercom, and more.",
  },
  {
    question: "Do you offer dedicated teams?",
    answer:
      "Yes. We provide dedicated agents, shared teams, and customized outsourcing models to fit your specific needs and budget.",
  },
  {
    question: "Can you set up or fix our CRM platform?",
    answer:
      "Yes. We provide CRM implementation, configuration, debugging, upgrades, and chatbot setup across platforms including Zendesk, Freshdesk, HubSpot, Intercom, Help Scout, and more.",
  },
  {
    question: "Can your agents represent our brand?",
    answer:
      "Absolutely. Our teams are trained specifically on your products, services, and communication standards to represent your brand as if it were their own.",
  },
];

export default function FAQPage() {
  return (
    <section className="bg-ice py-16 sm:py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge>FAQ</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy">
            Frequently Asked Questions
          </h1>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
