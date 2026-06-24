import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story, Mission & Vision",
  description:
    "Learn about Solvigos — a customer experience outsourcing company focused on your success. Our culture, values, and leadership team.",
  openGraph: {
    title: "About Us | Solvigos",
    description:
      "Learn about Solvigos — a customer experience outsourcing company focused on your success.",
    url: "https://solvigos.com/about",
    images: [
      {
        url: "/og_image/aboutus.png",
        width: 1200,
        height: 630,
        alt: "About Solvigos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Solvigos",
    description:
      "Learn about Solvigos — a customer experience outsourcing company focused on your success.",
    images: ["/og_image/aboutus.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
