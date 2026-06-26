import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Solvigos Terms of Service govern the use of our customer support outsourcing, technical support, BPO, and CRM & AI chatbot setup services.",
  openGraph: {
    title: "Terms of Service | Solvigos",
    description:
      "Review the terms and conditions governing the use of Solvigos outsourcing services.",
    url: "https://solvigos.com/terms-of-service",
    images: [
      {
        url: "/og_image/landingpage.jpg",
        width: 1200,
        height: 630,
        alt: "Solvigos Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Solvigos",
    description:
      "Review the terms and conditions governing the use of Solvigos outsourcing services.",
    images: ["/og_image/landingpage.jpg"],
  },
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Last updated: June 24, 2026</p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>1. Acceptance of Terms</h2>
              <p>By accessing the Solvigos website ("Site") or using any of our services — including but not limited to customer support outsourcing, technical support, BPO & back-office services, and CRM & AI chatbot setup — you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access the Site or use our services.</p>
              <p>These Terms constitute a legally binding agreement between you ("Client" or "you") and Solvigos ("we," "our," or "us").</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>2. Services Description</h2>
              <p>Solvigos provides outsourced customer support, technical support, BPO & back-office operations, and CRM & AI chatbot setup services. The specific scope, deliverables, pricing, and service levels for each engagement will be defined in a separate Service Agreement or Statement of Work (SOW) executed between the parties.</p>
              <p>All services are provided on a month-to-month basis unless otherwise specified in a signed Service Agreement. Either party may terminate the service with 30 days' written notice, unless otherwise stated in the applicable agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>3. Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Provide accurate and complete information necessary for us to deliver our services</li>
                <li>Grant us reasonable access to your systems, tools, and documentation required for service delivery</li>
                <li>Review and approve any materials, workflows, or configurations in a timely manner</li>
                <li>Maintain the confidentiality of any login credentials or access provided to our team</li>
                <li>Comply with all applicable laws and regulations in your use of our services</li>
                <li>Not use our services for any unlawful or unauthorized purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>4. Intellectual Property</h2>
              <p>All content, materials, and deliverables specifically created for you as part of our services (such as configured workflows, chatbot scripts, and process documentation) become your intellectual property upon full payment.</p>
              <p>Solvigos retains ownership of its pre-existing tools, methodologies, software, and proprietary systems used in the delivery of services. Nothing in these Terms grants you any ownership rights to our underlying technology or intellectual property.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>5. Confidentiality</h2>
              <p>Both parties agree to maintain the confidentiality of all non-public information shared during the course of the engagement. This includes but is not limited to business processes, customer data, financial information, trade secrets, and proprietary technology.</p>
              <p>Our team members sign confidentiality agreements and are trained on data protection and information security best practices. Confidential information shall not be disclosed to third parties except as required by law or as necessary to perform the services.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>6. Data Protection and Privacy</h2>
              <p>We take data protection seriously. When processing data on your behalf, we act as a data processor and you remain the data controller. Our data handling practices are governed by our Privacy Policy and any applicable Data Processing Agreement (DPA) we enter into with you.</p>
              <p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or disclosure, as further described in our Privacy Policy.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>7. Payment Terms</h2>
              <p>Fees for services are as set forth in your Service Agreement or invoice. Unless otherwise agreed:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Invoices are due within 15 days of the invoice date</li>
                <li>Services may be paused or suspended for accounts that are more than 30 days past due</li>
                <li>All fees are non-refundable except as expressly stated in your Service Agreement</li>
                <li>We reserve the right to change pricing with 30 days' written notice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>8. Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law, Solvigos shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to the use of our services. Our total liability for any claim arising from these Terms or our services shall not exceed the total fees paid by you during the 12 months preceding the claim.</p>
              <p>We do not exclude or limit liability for death, personal injury, fraud, or any other liability that cannot be excluded by applicable law.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>9. Service Level and Warranties</h2>
              <p>We provide our services using reasonable skill and care consistent with industry standards. Specific service level agreements (SLAs) regarding response times, resolution times, and uptime guarantees will be detailed in your Service Agreement.</p>
              <p>Except as expressly stated in your Service Agreement, our services are provided "as is" without any warranties, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>10. Termination</h2>
              <p>Either party may terminate the service agreement with 30 days' written notice. Upon termination:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>You must pay all fees accrued up to the termination date</li>
                <li>We will provide a reasonable transition period and data export assistance</li>
                <li>Confidential information will be returned or destroyed as per your instructions</li>
                <li>Sections of these Terms that by their nature should survive termination will do so</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>11. Website Use</h2>
              <p>You agree not to use our website for any unlawful purpose or in violation of these Terms. You may not:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use any automated means to access or scrape the website</li>
                <li>Transmit malware, viruses, or any harmful code</li>
                <li>Interfere with the proper functioning of the website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>12. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction specified in your Service Agreement. Any disputes arising from these Terms shall be resolved through good-faith negotiation, and if unresolved, through binding arbitration in accordance with the rules specified in your Service Agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>13. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last updated" date. Continued use of our services after such changes constitutes acceptance of the new Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "var(--font-serif)" }}>14. Contact Information</h2>
              <p>For questions, concerns, or notices regarding these Terms, please contact us:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Email: legal@solvigos.com</li>
                <li>Website: <a href="/contact" className="text-[#007b7b] hover:underline">solvigos.com/contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
