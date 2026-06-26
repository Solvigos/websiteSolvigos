import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Solvigos customer support outsourcing, services, pricing, and how we help businesses scale their customer experience operations.",
  openGraph: {
    title: "Frequently Asked Questions | Solvigos",
    description:
      "Find answers to common questions about Solvigos customer support outsourcing services.",
    url: "https://solvigos.com/faq",
    images: [
      {
        url: "/og_image/servicespage.jpg",
        width: 1200,
        height: 630,
        alt: "Solvigos FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Solvigos",
    description:
      "Find answers to common questions about Solvigos customer support outsourcing services.",
    images: ["/og_image/servicespage.jpg"],
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Solvigos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Solvigos is an outsourced customer experience and business operations partner. We provide dedicated support teams, CRM administration, back-office processes, and AI chatbot deployment so businesses can deliver exceptional customer experiences without building those functions in-house.",
                },
              },
              {
                "@type": "Question",
                name: "How do I get started with Solvigos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start by scheduling a free consultation. We learn about your business, challenges, and goals, then put together a tailored proposal. Most clients are fully operational within a few weeks of signing.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to sign a long-term contract?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. We offer flexible month-to-month agreements with no long-term lock-ins. You can scale up, down, or pause as your business needs change.",
                },
              },
              {
                "@type": "Question",
                name: "What channels do you support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We support live chat, email, social media (Instagram, Facebook, Twitter/X, and others), and phone/voice support on whichever channels your customers prefer.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you get my team up and running?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most clients are fully operational within a few weeks of signing. Our onboarding includes discovery, recruitment, training, system configuration, and simulated interactions before going live.",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}