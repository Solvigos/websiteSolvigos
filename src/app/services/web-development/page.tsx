import { ServiceLayout } from "@/components/shared/ServiceLayout";

export default function WebDevelopmentPage() {
  return (
    <ServiceLayout
      title="Web Development Services"
      subtitle="Services 05"
      description="Your website is often the first impression customers have of your business. We create fast, responsive, and conversion-focused websites designed to support growth and deliver exceptional user experiences."
      experienceText="We have over 25 years of experience."
      serviceCards={[
        {
          num: "01.",
          title: "WordPress Development",
          desc: "Custom WordPress websites and themes built for performance, security, and easy content management.",
        },
        {
          num: "02.",
          title: "Website Redesign",
          desc: "Modern, conversion-focused redesigns that refresh your brand and improve user engagement.",
        },
        {
          num: "03.",
          title: "Landing Pages",
          desc: "High-converting landing pages designed for campaigns, product launches, and lead generation.",
        },
        {
          num: "04.",
          title: "eCommerce Development",
          desc: "Full-featured online stores with secure checkout, inventory management, and payment integrations.",
        },
        {
          num: "05.",
          title: "Performance Optimization",
          desc: "Speed improvements, Core Web Vitals optimization, and technical enhancements for better rankings.",
        },
        {
          num: "06.",
          title: "SEO Optimization",
          desc: "Technical SEO, on-page optimization, and structured data implementation for organic visibility.",
        },
      ]}
      popularServices={[
        {
          title: "Website Maintenance",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          desc: "Ongoing maintenance, security updates, backups, and support to keep your website running smoothly.",
        },
        {
          title: "Custom Integrations",
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
          desc: "Connecting your website with CRMs, payment processors, analytics, and third-party business tools.",
        },
        {
          title: "Responsive Design",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
          desc: "Mobile-first design and development that ensures perfect experiences across all devices and screen sizes.",
        },
      ]}
      faqs={[
        {
          question: "How long does a website project take?",
          answer: "Depending on scope, most projects are completed within 4-8 weeks, from discovery to launch.",
        },
        {
          question: "Do you provide hosting?",
          answer: "We can recommend hosting solutions and handle deployment, or work with your existing hosting provider.",
        },
      ]}
    />
  );
}
