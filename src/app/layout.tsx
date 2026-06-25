import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MetaPixel } from "@/components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solvigos.com"),
  title: {
    default: "Customer Support Outsourcing | Solvigos",
    template: "%s | Solvigos",
  },
  description:
    "Deliver exceptional customer experiences without the cost and complexity of building an in-house support department. Solvigos provides omnichannel customer support, technical support, BPO, and CRM & AI chatbot setup.",
  icons: {
    icon: "/title.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Solvigos",
    title: "Solvigos | Customer Support Outsourcing Company",
    description:
      "Deliver exceptional customer experiences without the cost and complexity of building an in-house support department.",
    url: "https://solvigos.com",
    locale: "en_US",
    images: [
      {
        url: "/og_image/landingpage.png",
        width: 1200,
        height: 630,
        alt: "Solvigos - Customer Support Outsourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvigos | Customer Support Outsourcing Company",
    description:
      "Deliver exceptional customer experiences without the cost and complexity of building an in-house support department.",
    images: ["/og_image/landingpage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://solvigos.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Solvigos",
              url: "https://solvigos.com",
              description:
                "Deliver exceptional customer experiences without the cost and complexity of building an in-house support department.",
              logo: "https://solvigos.com/title.svg",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61571546759553",
                "https://www.instagram.com/solvigos/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
              },
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
