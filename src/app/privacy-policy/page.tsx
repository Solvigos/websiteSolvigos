import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Solvigos Privacy Policy explains how we collect, use, store, and protect your personal data when you use our customer support outsourcing and BPO services.",
  openGraph: {
    title: "Privacy Policy | Solvigos",
    description:
      "Learn how Solvigos collects, uses, and protects your personal data across our customer support and BPO services.",
    url: "https://solvigos.com/privacy-policy",
    images: [
      {
        url: "/og_image/landingpage.png",
        width: 1200,
        height: 630,
        alt: "Solvigos Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Solvigos",
    description:
      "Learn how Solvigos collects, uses, and protects your personal data across our customer support and BPO services.",
    images: ["/og_image/landingpage.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#F3F4FA]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-24 lg:py-32">
          <p className="text-xs sm:text-sm font-semibold text-[#007b7b] uppercase tracking-wider mb-4">
            Legal
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: June 24, 2026</p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>1. Introduction</h2>
              <p>Solvigos ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our customer support outsourcing, technical support, BPO, and CRM & AI chatbot setup services.</p>
              <p>By accessing our website or using our services, you agree to the collection and use of information in accordance with this policy.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mt-4 mb-2">Personal Data</h3>
              <p>We may collect personally identifiable information such as your name, email address, phone number, company name, and billing information when you:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Fill out a contact or consultation form on our website</li>
                <li>Request a quote or pricing information</li>
                <li>Subscribe to our blog or newsletter</li>
                <li>Communicate with us via email, phone, or live chat</li>
                <li>Enter into a service agreement with us</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#1A1A2E] mt-6 mb-2">Service Data</h3>
              <p>When you use our outsourcing services, we may process customer support tickets, CRM data, chat transcripts, call recordings, and other operational data on your behalf. This data is processed strictly in accordance with your instructions and our service agreement.</p>

              <h3 className="text-lg font-semibold text-[#1A1A2E] mt-6 mb-2">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, and browsing behavior through cookies and similar technologies.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>To provide, operate, and maintain our services</li>
                <li>To process transactions and send related information</li>
                <li>To communicate with you about your account, inquiries, and service updates</li>
                <li>To improve our website, services, and customer experience</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To send marketing communications (with your consent where required)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>4. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your data only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., cloud hosting, payment processing, analytics) under strict confidentiality agreements</li>
                <li><strong>Legal Compliance:</strong> When required by law, court order, or governmental regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular security assessments and monitoring</li>
                <li>Employee training on data protection and confidentiality</li>
                <li>Strict confidentiality agreements with all team members</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>6. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. Service data is retained in accordance with your specific service agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>The right to access, update, or delete your personal data</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
                <li>The right to lodge a complaint with a data protection authority</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us at privacy@solvigos.com.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>8. Cookies</h2>
              <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>9. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>10. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>12. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Email: privacy@solvigos.com</li>
                <li>Website: <a href="/contact" className="text-[#007b7b] hover:underline">solvigos.com/contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
