import { ContactForm } from "@/components/shared/ContactForm";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Consultation",
  description:
    "Get in touch with Solvigos. Speak with an expert about outsourcing your customer support, technical support, BPO, or CRM & AI chatbot setup.",
  openGraph: {
    title: "Contact Us | Solvigos",
    description:
      "Get in touch with Solvigos. Speak with an expert about outsourcing your customer support needs.",
    url: "https://solvigos.com/contact",
    images: [
      {
        url: "/og_image/servicespage.png",
        width: 1200,
        height: 630,
        alt: "Contact Solvigos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Solvigos",
    description:
      "Get in touch with Solvigos. Speak with an expert about outsourcing your customer support needs.",
    images: ["/og_image/servicespage.png"],
  },
};

export default function ContactPage() {
  return (
    <section className="bg-[#F3F4FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Speak With an Expert
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            Let&apos;s talk about how to scale smarter with AI-enabled outsourcing.
          </p>
        </div>

        {/* Form + Images Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Left Image */}
          <div className="hidden lg:block absolute -left-85 bottom-10 w-85">
            <Image
              src="/contactleft.png"
              alt="Contact illustration"
              width={220}
              height={320}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Form Card */}
          <div className="bg-[#FAFAFD] rounded-2xl shadow-sm p-5 sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
