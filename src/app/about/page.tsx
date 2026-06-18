import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconHeart, IconShieldCheck, IconBulb, IconArrowsUp, IconEye } from "@tabler/icons-react";

const values = [
  {
    icon: IconHeart,
    title: "Customer First",
    desc: "Every decision begins with understanding customer needs.",
  },
  {
    icon: IconShieldCheck,
    title: "Accountability",
    desc: "We take ownership of every interaction and outcome.",
  },
  {
    icon: IconBulb,
    title: "Innovation",
    desc: "We continuously improve processes, technology, and service delivery.",
  },
  {
    icon: IconEye,
    title: "Transparency",
    desc: "We believe strong partnerships are built on trust and open communication.",
  },
  {
    icon: IconArrowsUp,
    title: "Continuous Improvement",
    desc: "We embrace learning and growth to deliver better outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ice py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge>About Us</Badge>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navy leading-tight">
              Customer Experience Experts Focused on Your Success
            </h1>
            <p className="mt-6 text-lg text-body leading-relaxed">
              At Solvigos, we believe exceptional customer experiences are the foundation of
              long-term business growth. Our mission is to help organizations build stronger
              customer relationships while improving operational efficiency through reliable
              outsourcing solutions.
            </p>
            <p className="mt-4 text-lg text-body leading-relaxed">
              We provide customer support outsourcing, technical support, business process
              outsourcing, and web development services designed to help businesses scale
              confidently and serve their customers more effectively.
            </p>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
            <p className="mt-4 text-body leading-relaxed">
              To become a trusted global partner for customer experience management and business
              process outsourcing.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
            <p className="mt-4 text-body leading-relaxed">
              To deliver professional, scalable, and results-driven outsourcing solutions that
              create measurable value for our clients.
            </p>
          </div>
        </div>
      </Section>

      <Section background="ice">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy">Our Values</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="border border-border rounded-xl bg-white p-6 text-center"
              >
                <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-blue" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-body leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-ice border border-tint rounded-xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-navy">Why Work With Us</h2>
            <p className="mt-4 text-body leading-relaxed text-lg">
              Our teams integrate seamlessly into your operations. We learn your processes,
              understand your customers, and represent your brand as if it were our own.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
