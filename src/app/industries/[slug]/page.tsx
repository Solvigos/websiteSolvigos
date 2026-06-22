import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  IconHeadset,
  IconUsers,
  IconDeviceLaptop,
  IconBuildingStore,
  IconCloud,
  IconCpu,
  IconHeart,
  IconSchool,
  IconPlane,
  IconShoppingBag,
  IconRefresh,
  IconMessageChatbot,
  IconPackage,
  IconCreditCard,
  IconTruck,
  IconClipboardCheck,
  IconChartLine,
  IconUserPlus,
  IconSettings,
  IconBug,
  IconHelpCircle,
  IconBook,
  IconCalendar,
  IconFileText,
  IconStethoscope,
  IconPill,
  IconUserCheck,
  IconClipboardList,
  IconCalendarEvent,
  IconPhone,
  IconMail,
  IconMessage,
  IconTicket,
  IconCode,
  IconRocket,
  IconStar,
} from "@tabler/icons-react";
import type { Metadata } from "next";

const industriesData = {
  ecommerce: {
    title: "eCommerce",
    subtitle: "From Cart to Customer Loyalty",
    description: "Online shoppers expect fast answers and frictionless experiences. We handle order management, returns and refunds, live chat support, and customer inquiries — so your buyers stay happy and your team stays focused on growth.",
    icon: <IconBuildingStore size={32} />,
    features: [
      { icon: <IconShoppingBag size={28} />, title: "Order Management", description: "End-to-end order processing, tracking, and customer communication for seamless transactions." },
      { icon: <IconRefresh size={28} />, title: "Returns & Refunds", description: "Hassle-free returns processing and refund management that keeps customers satisfied." },
      { icon: <IconMessageChatbot size={28} />, title: "Live Chat Support", description: "Real-time assistance for your customers through live chat channels, ensuring instant issue resolution." },
      { icon: <IconPackage size={28} />, title: "Product Support", description: "Expert guidance on product features, sizing, and usage questions." },
      { icon: <IconCreditCard size={28} />, title: "Payment Support", description: "Assistance with payment issues, billing inquiries, and transaction disputes." },
      { icon: <IconTruck size={28} />, title: "Shipping Inquiries", description: "Real-time shipping updates, delivery tracking, and logistics support." },
    ],
  },
  saas: {
    title: "SaaS",
    subtitle: "Support That Matches Your Product's Pace",
    description: "Subscription businesses live and die by retention. We provide technical support, user onboarding, help desk management, and CRM configuration that keeps your customers activated, engaged, and renewing.",
    icon: <IconCloud size={32} />,
    features: [
      { icon: <IconHeadset size={28} />, title: "Technical Support", description: "Multi-tier technical support for software issues and troubleshooting." },
      { icon: <IconUserPlus size={28} />, title: "User Onboarding", description: "Guided onboarding experiences that drive adoption and reduce churn." },
      { icon: <IconSettings size={28} />, title: "CRM Configuration", description: "Setup and optimization of CRM systems for maximum efficiency." },
      { icon: <IconClipboardCheck size={28} />, title: "Help Desk Management", description: "Complete help desk operations with ticket management and escalation." },
      { icon: <IconChartLine size={28} />, title: "Customer Success", description: "Proactive outreach and account management to maximize retention." },
      { icon: <IconMessageChatbot size={28} />, title: "Subscription Support", description: "Billing support, plan upgrades, and subscription lifecycle management." },
    ],
  },
  technology: {
    title: "Technology",
    subtitle: "Specialized Support for Complex Products",
    description: "Tech companies need agents who understand the product, not just the script. We provide Tier 1 and Tier 2 technical support, bug reporting, knowledge base management, and escalation handling for startups and established tech firms alike.",
    icon: <IconCpu size={32} />,
    features: [
      { icon: <IconDeviceLaptop size={28} />, title: "Tier 1 & 2 Support", description: "Multi-level technical support for hardware and software issues." },
      { icon: <IconBug size={28} />, title: "Bug Reporting", description: "Structured bug tracking, reporting, and developer handoff processes." },
      { icon: <IconBook size={28} />, title: "Knowledge Base", description: "Creation and maintenance of comprehensive documentation and FAQs." },
      { icon: <IconTicket size={28} />, title: "Escalation Handling", description: "Structured escalation paths for complex technical issues." },
      { icon: <IconCode size={28} />, title: "Developer Support", description: "Technical support for APIs, integrations, and developer tools." },
      { icon: <IconRocket size={28} />, title: "Product Feedback", description: "User feedback collection and product improvement recommendations." },
    ],
  },
  healthcare: {
    title: "Healthcare",
    subtitle: "Reliable Support With the Sensitivity It Demands",
    description: "Patient communication requires accuracy, empathy, and discretion. We support healthcare providers with patient-facing assistance, appointment coordination, administrative processing, and back-office operations — handled with the care your patients deserve.",
    icon: <IconHeart size={32} />,
    features: [
      { icon: <IconStethoscope size={28} />, title: "Patient Support", description: "Compassionate assistance for patient inquiries and health-related questions." },
      { icon: <IconCalendarEvent size={28} />, title: "Appointment Coordination", description: "Scheduling, rescheduling, and reminder management for healthcare providers." },
      { icon: <IconFileText size={28} />, title: "Administrative Processing", description: "Medical records management, data entry, and paperwork processing." },
      { icon: <IconClipboardList size={28} />, title: "Insurance Verification", description: "Assistance with insurance eligibility checks and claims support." },
      { icon: <IconPill size={28} />, title: "Prescription Support", description: "Assistance with prescription inquiries and medication information." },
      { icon: <IconUserCheck size={28} />, title: "Patient Follow-up", description: "Post-visit follow-up care coordination and patient engagement." },
    ],
  },
  education: {
    title: "Education",
    subtitle: "Supporting Students From Enrollment to Completion",
    description: "Educational institutions need responsive, knowledgeable support teams. We assist with student inquiries, enrollment support, academic help desk services, and administrative operations — helping institutions deliver a better experience at every stage.",
    icon: <IconSchool size={32} />,
    features: [
      { icon: <IconClipboardCheck size={28} />, title: "Enrollment Support", description: "Guidance through application, registration, and enrollment processes." },
      { icon: <IconHelpCircle size={28} />, title: "Academic Help Desk", description: "Technical support for students and faculty accessing online resources." },
      { icon: <IconCalendar size={28} />, title: "Student Services", description: "Support for financial aid, transcripts, and academic records." },
      { icon: <IconMessage size={28} />, title: "Parent Communication", description: "Communication support for parent inquiries and engagement." },
      { icon: <IconBook size={28} />, title: "LMS Support", description: "Help with learning management systems and educational platforms." },
      { icon: <IconMail size={28} />, title: "Administrative Support", description: "Administrative operations including records management and data entry." },
    ],
  },
  "travel-hospitality": {
    title: "Travel & Hospitality",
    subtitle: "Every Interaction Is Part of the Experience",
    description: "Travelers expect instant, knowledgeable responses at every touchpoint. We support booking management, guest inquiries, itinerary assistance, concierge operations, and complaint resolution — delivering the seamless experience your customers expect before, during, and after their journey.",
    icon: <IconPlane size={32} />,
    features: [
      { icon: <IconTicket size={28} />, title: "Booking Management", description: "Assistance with reservations, cancellations, and itinerary changes." },
      { icon: <IconPhone size={28} />, title: "Guest Inquiries", description: "Responsive support for guest questions and special requests." },
      { icon: <IconCalendarEvent size={28} />, title: "Itinerary Assistance", description: "Travel planning support and itinerary customization." },
      { icon: <IconStar size={28} />, title: "Concierge Operations", description: "Personalized recommendations and VIP travel support." },
      { icon: <IconMessage size={28} />, title: "Complaint Resolution", description: "Professional handling of guest complaints and service recovery." },
      { icon: <IconRefresh size={28} />, title: "Loyalty Programs", description: "Support for rewards programs, points redemption, and member inquiries." },
    ],
  },
};

type Props = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `${slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ")} Outsourcing` };
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export default async function IndustryPage(props: { params: Props }) {
  const { slug } = await props.params;
  const industry = industriesData[slug as keyof typeof industriesData];
  if (!industry) notFound();

  return (
    <>
      <section className="bg-ice py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge>Industries</Badge>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy leading-tight">
              {industry.title}
            </h1>
            <p className="mt-2 text-lg text-blue font-medium">{industry.subtitle}</p>
            <p className="mt-4 text-lg text-body leading-relaxed">
              {industry.description}
            </p>
            <div className="mt-6 flex gap-4">
              <Button href="/contact" size="lg">Get Started</Button>
              <Button href="/services" variant="secondary" size="lg">View Our Services</Button>
            </div>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">How We Support {industry.title}</h2>
          <p className="mt-4 text-body text-lg leading-relaxed">
            Tailored solutions designed specifically for {industry.title.toLowerCase()} businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industry.features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-[50px] h-[50px] mx-auto mb-4 rounded-full bg-ice flex items-center justify-center text-blue">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-sm text-body leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="ice" className="text-center">
        <h2 className="text-3xl font-bold text-navy">Ready to Get Started?</h2>
        <p className="mt-3 text-body max-w-xl mx-auto">
          Contact us today to discuss how Solvigos can support your {industry.title.toLowerCase()} business.
        </p>
        <Button href="/contact" size="lg" className="mt-8">
          Contact Us Today
        </Button>
      </Section>
    </>
  );
}
