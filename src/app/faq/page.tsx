"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconChevronDown,
  IconSearch,
  IconArrowLeft,
  IconArrowRight,
  IconMessageChatbot,
  IconReportAnalytics,
  IconMapPin,
  IconCreditCard,
  IconScale,
  IconTool,
  IconHelpCircle,
  IconClipboardList,
  IconHeadset,
  IconCode,
  IconUserPlus,
  IconRefresh,
  IconBuilding,
  IconAdjustments,
  IconSettings,
} from "@tabler/icons-react";

const categories = [
  { name: "General", icon: IconHelpCircle },
  { name: "Getting Started", icon: IconClipboardList },
  { name: "Customer Support", icon: IconHeadset },
  { name: "Technical Support", icon: IconSettings },
  { name: "Customer Conversion & Onboarding", icon: IconUserPlus },
  { name: "Customer Renewals", icon: IconRefresh },
  { name: "BPO & Back-Office", icon: IconBuilding },
  { name: "CRM & Chatbot Setup", icon: IconMessageChatbot },
  { name: "Help Desk Management", icon: IconAdjustments },
  { name: "Web Development", icon: IconCode },
  { name: "Pricing & Contracts", icon: IconCreditCard },
];

const faqs = [
  // General
  { question: "What is Solvigos?", answer: "Solvigos is an outsourced customer experience and business operations partner. We provide dedicated support teams, CRM administration, back-office processes, and web development services — so businesses can deliver exceptional customer experiences without the overhead of building those functions in-house.", category: "General" },
  { question: "Who do you typically work with?", answer: "We work with growing businesses across eCommerce, SaaS, Technology, Healthcare, Education, and Travel & Hospitality. Whether you're a startup scaling quickly or an established company looking to reduce operational costs, we build a solution tailored to your stage and goals.", category: "General" },
  { question: "Where is Solvigos based, and where do you operate?", answer: "Solvigos operates globally. Our teams support clients and their customers across multiple time zones, with 24/7 coverage available. We work with businesses regardless of their location and serve customers in English as well as other languages depending on your requirements.", category: "General" },
  { question: "What makes Solvigos different from other outsourcing companies?", answer: "A few things set us apart: we assign dedicated teams — not shared agent pools — so your team knows your product and brand inside out. We move fast, with a structured onboarding process that gets you from discovery to live operations quickly. We also don't believe in set-it-and-forget-it; every account receives continuous performance monitoring, reporting, and optimization.", category: "General" },
  { question: "Do you work with small businesses or only enterprise clients?", answer: "Both. We have solutions designed for businesses at every stage. If you're a small team that needs to scale support without hiring, we can help. If you're a larger organization looking to streamline operations, we have the infrastructure for that too.", category: "General" },
  { question: "How long has Solvigos been in business?", answer: "Solvigos has 10+ years of experience in customer experience and business process outsourcing, with a portfolio of 500+ completed projects and 200+ satisfied clients.", category: "General" },
  { question: "What tools and platforms do you work with?", answer: "Our teams are experienced with leading platforms including Zendesk, HubSpot, Freshdesk, Intercom, Salesforce, Gorgias, GoHighLevel (GHL), Shopify, and Help Scout. If you use a different platform, let us know — we adapt to your existing tech stack.", category: "General" },

  // Getting Started
  { question: "How do I get started with Solvigos?", answer: "Start by scheduling a free consultation via our Contact page. We'll learn about your business, your current challenges, and what success looks like for you. From there, we'll put together a tailored proposal.", category: "Getting Started" },
  { question: "How quickly can you get my team up and running?", answer: "Timelines vary depending on the scope of service, but we move fast by design. After our discovery phase, we recruit and train the right people, configure your systems, and run real-world simulations before going live. Most clients are fully operational within a few weeks of signing.", category: "Getting Started" },
  { question: "What happens during onboarding?", answer: "Our onboarding process has three clear phases: Discover & Align (we deep-dive into your business, customers, tone, and pain points), Build, Train & Launch (we set up people, processes, and systems), and Optimize, Perform & Scale (we begin continuous monitoring from day one). You'll have a dedicated point of contact throughout.", category: "Getting Started" },
  { question: "Will I have a dedicated account manager?", answer: "Yes. Every Solvigos client is assigned a dedicated account manager who oversees your operations, communicates performance updates, and is your go-to point of escalation.", category: "Getting Started" },
  { question: "Do I need to sign a long-term contract?", answer: "No long-term lock-ins are required. We offer flexible engagement models so you can scale up or down based on your business needs. Details are discussed during your consultation.", category: "Getting Started" },
  { question: "Can I start with one service and add more later?", answer: "Absolutely. Many clients start with a single service — for example, customer support — and expand into help desk management, CRM setup, or back-office services as their business grows. We're built to grow with you.", category: "Getting Started" },

  // Customer Support
  { question: "What is included in your Customer Support service?", answer: "Our Customer Support service covers professional, multi-channel support across live chat, email, social media, and phone. We handle inbound inquiries, complaints, order-related questions, account management, and general customer care — all branded to match your voice and tone.", category: "Customer Support" },
  { question: "What channels do you support?", answer: "We support live chat, email, social media (Instagram, Facebook, Twitter/X, and others), and phone/voice support. We can operate on whichever channels your customers prefer.", category: "Customer Support" },
  { question: "Do you offer 24/7 support?", answer: "Yes. 24/7 coverage is available. We staff teams across multiple time zones so your customers can always reach someone — day, night, weekends, and holidays.", category: "Customer Support" },
  { question: "How do you ensure your agents understand my brand and product?", answer: "Before going live, your team goes through a dedicated training program built around your brand guidelines, product knowledge, tone of voice, and common customer scenarios. We also run simulated interactions to ensure readiness before your first live customer contact.", category: "Customer Support" },
  { question: "What languages do you support?", answer: "English is our primary language. Additional languages may be available depending on your requirements — please bring this up during your consultation so we can advise on availability and feasibility.", category: "Customer Support" },
  { question: "How do you measure support quality?", answer: "We track key metrics including first response time, resolution time, customer satisfaction scores (CSAT), first contact resolution (FCR), and ticket backlog. You receive regular performance reports with insights and recommendations.", category: "Customer Support" },
  { question: "Can I review my team's interactions?", answer: "Yes. Depending on the platform you use, you'll have visibility into conversations and ticket history. We also share regular QA reviews and highlight areas of strength and improvement.", category: "Customer Support" },

  // Technical Support
  { question: "What does your Technical Support service cover?", answer: "Our Technical Support service handles product and software troubleshooting, guided setup assistance, bug reporting, escalation management, and resolution of technical issues on behalf of your customers. We operate across live chat, email, and phone.", category: "Technical Support" },
  { question: "How technical are your support agents?", answer: "We recruit and train agents specifically for technical roles. Before going live, they complete product-specific training, learn your documentation, and practice on real-world scenarios. For highly complex platforms, we work with your internal team during training to ensure accuracy.", category: "Technical Support" },
  { question: "Can you handle Tier 1, Tier 2, and Tier 3 support?", answer: "We specialize in Tier 1 and Tier 2 support (frontline troubleshooting and escalated technical resolution). For Tier 3 issues requiring your internal engineering team, we manage the escalation process and ensure clean handoffs with all relevant context documented.", category: "Technical Support" },
  { question: "Do your agents use my existing knowledge base and documentation?", answer: "Yes. We work with whatever documentation you have — FAQs, help articles, internal wikis, product guides — and can help you identify gaps in your documentation based on the issues we encounter.", category: "Technical Support" },
  { question: "What happens when an issue can't be resolved at the support level?", answer: "We have a defined escalation process tailored to your business. When a ticket exceeds what our team can resolve, it is escalated to the appropriate internal stakeholder with full context, priority status, and any relevant notes — so nothing gets lost.", category: "Technical Support" },

  // Customer Conversion & Onboarding
  { question: "What does Customer Conversion mean in the context of your services?", answer: "Customer Conversion refers to engaging and converting prospective customers into paying ones. Our teams handle outreach, follow-ups, product education, and persuasive communication designed to move leads through the funnel — via chat, email, or phone.", category: "Customer Conversion & Onboarding" },
  { question: "How is this different from a sales team?", answer: "Think of our conversion agents as an extension of your sales or pre-sales team. They're trained on your product and value proposition, respond to inbound inquiries quickly, and nurture leads with the right messaging at the right time. They work within your CRM and follow your sales process.", category: "Customer Conversion & Onboarding" },
  { question: "What is Customer Onboarding, and why does it matter?", answer: "Customer Onboarding is the process of helping new customers get set up, understand your product, and experience early value — so they're less likely to churn. We guide new users through the key steps, answer questions proactively, and ensure they feel confident from day one.", category: "Customer Conversion & Onboarding" },
  { question: "Can you handle onboarding for SaaS products or complex platforms?", answer: "Yes. We've onboarded customers for SaaS tools, eCommerce platforms, and technology products. We learn your product thoroughly and build structured onboarding flows that reduce time-to-value for your customers.", category: "Customer Conversion & Onboarding" },
  { question: "How do you track conversion and onboarding performance?", answer: "We track metrics including lead response time, conversion rate, onboarding completion rate, and early churn indicators. These are included in your regular performance reports.", category: "Customer Conversion & Onboarding" },

  // Customer Renewals
  { question: "What does your Customer Renewals service involve?", answer: "We manage proactive renewal conversations, retention outreach, and win-back campaigns for customers approaching the end of their subscription or contract. Our goal is to reduce churn and keep your customers engaged before they decide to leave.", category: "Customer Renewals" },
  { question: "When do you start renewal outreach?", answer: "Timing depends on your product and typical renewal cycle — this is defined during onboarding. We generally recommend beginning outreach 30 to 60 days before a renewal date, giving enough time to address concerns and reinforce value.", category: "Customer Renewals" },
  { question: "What if a customer has a complaint before renewing?", answer: "Our renewal agents are trained to handle objections, de-escalate frustrations, and connect customers with the right solutions — whether that's a pricing adjustment, a service upgrade, or a support resolution. We treat every renewal conversation as a relationship touchpoint, not just a transaction.", category: "Customer Renewals" },
  { question: "How do you personalize renewal communications?", answer: "We work from your CRM data to tailor outreach based on the customer's history, usage patterns, plan type, and any prior interactions. Personalized outreach consistently outperforms generic renewal reminders.", category: "Customer Renewals" },
  { question: "What channels do you use for renewal outreach?", answer: "Email, phone, and live chat — depending on what your customers respond to and what's available in your platform setup.", category: "Customer Renewals" },

  // BPO & Back-Office
  { question: "What is BPO, and what back-office tasks can you handle?", answer: "BPO stands for Business Process Outsourcing. Our back-office services include data entry, order processing, CRM data management, reporting, administrative coordination, document handling, and other repetitive operational tasks that take time away from your core team.", category: "BPO & Back-Office" },
  { question: "How do you ensure accuracy in back-office work?", answer: "We build quality control checkpoints into every workflow. Tasks are reviewed at multiple stages, and we track accuracy rates as part of our ongoing reporting. Any issues are flagged and corrected before they impact your operations.", category: "BPO & Back-Office" },
  { question: "Is my data safe with your team?", answer: "Yes. We take data security seriously. Our teams operate under strict confidentiality agreements, and we follow best practices for data handling and access control. If your industry has specific compliance requirements (such as healthcare or finance), let us know during the consultation so we can address those needs directly.", category: "BPO & Back-Office" },
  { question: "Can you integrate into our existing systems and workflows?", answer: "Yes. We work within your existing tools — whether that's your CRM, project management system, spreadsheets, or proprietary software. We don't require you to change your stack; we adapt to it.", category: "BPO & Back-Office" },
  { question: "How do I know what tasks are getting done?", answer: "You receive regular activity reports and have visibility into work output. Your account manager is also available to discuss task progress, turnaround times, and any adjustments to workload.", category: "BPO & Back-Office" },

  // CRM & Chatbot Setup
  { question: "What CRM platforms do you work with?", answer: "We have experience with HubSpot, Salesforce, Zendesk, Freshdesk, Intercom, GoHighLevel (GHL), Gorgias, and Help Scout, among others. If you use a different CRM, let us know — our team evaluates platforms on a case-by-case basis.", category: "CRM & Chatbot Setup" },
  { question: "What does CRM setup involve?", answer: "CRM setup includes platform configuration, pipeline and workflow creation, contact data migration, custom field setup, automation building, integration with other tools, and team training. The scope depends on what you need — we can set it up from scratch or optimize an existing instance.", category: "CRM & Chatbot Setup" },
  { question: "Can you build and configure chatbots for my website or app?", answer: "Yes. We design, build, and configure chatbots for customer-facing use cases — including FAQ bots, lead capture bots, support deflection bots, and product recommendation flows. We work within your existing platform or recommend the right tool based on your needs.", category: "CRM & Chatbot Setup" },
  { question: "Do you also manage the CRM after setup?", answer: "Yes. Ongoing CRM administration is available as part of our BPO & Back-Office service. This includes keeping contact records clean, updating pipelines, running reports, and ensuring your CRM continues to reflect how your business actually works.", category: "CRM & Chatbot Setup" },
  { question: "How long does CRM or chatbot setup take?", answer: "Simple configurations can be completed in a few days. More complex setups involving data migration, multi-tool integrations, or custom automations typically take one to four weeks. We'll give you a clear timeline during the scoping phase.", category: "CRM & Chatbot Setup" },

  // Help Desk Management
  { question: "What does Help Desk Management include?", answer: "We manage your help desk end-to-end — including ticket routing, categorization and prioritization, SLA monitoring, queue management, agent performance oversight, and reporting. We can run your help desk entirely or augment an existing team.", category: "Help Desk Management" },
  { question: "Which help desk platforms do you work with?", answer: "We work with Zendesk, Freshdesk, Intercom, Help Scout, Gorgias, and other major platforms. If you're using something different, we'll evaluate it during the consultation.", category: "Help Desk Management" },
  { question: "Can you help us migrate from one help desk platform to another?", answer: "Yes. We can assist with platform migrations, including ticket history transfers, workflow rebuilds, and team retraining — minimizing disruption during the transition.", category: "Help Desk Management" },
  { question: "How do you manage SLA compliance?", answer: "We set up SLA rules within your platform, monitor response and resolution times in real time, and flag at-risk tickets before they breach. Our reporting includes SLA compliance rates so you always know where you stand.", category: "Help Desk Management" },
  { question: "Do you provide reporting on help desk performance?", answer: "Yes. You receive regular reports covering ticket volume, response and resolution times, CSAT scores, SLA compliance, backlog trends, and agent performance. We also surface insights and recommendations based on the data.", category: "Help Desk Management" },

  // Web Development
  { question: "What kind of websites do you build?", answer: "We build fast, responsive, conversion-focused websites — including business websites, landing pages, and full eCommerce platforms. We work with WordPress, Shopify, WooCommerce, and custom web builds depending on your needs.", category: "Web Development" },
  { question: "Do you handle eCommerce development?", answer: "Yes. We build and optimize eCommerce stores on platforms like Shopify and WooCommerce, including product catalog setup, payment gateway integration, custom theme development, and conversion optimization.", category: "Web Development" },
  { question: "Can you redesign or improve my existing website?", answer: "Absolutely. We handle full redesigns as well as targeted improvements — whether that's speed optimization, UX improvements, mobile responsiveness, or landing page builds.", category: "Web Development" },
  { question: "Do you offer ongoing website maintenance after launch?", answer: "Yes. Post-launch maintenance and support is available, covering updates, security patches, performance monitoring, and content changes. This can be arranged as an ongoing retainer.", category: "Web Development" },
  { question: "How long does a typical website project take?", answer: "A simple landing page can be delivered in one to two weeks. A full business website typically takes three to six weeks. A custom eCommerce build may take six to twelve weeks depending on scope. We provide a detailed timeline and milestone plan at the start of every project.", category: "Web Development" },
  { question: "Will my website be SEO-friendly?", answer: "Yes. All sites we build follow on-page SEO best practices — including proper heading structure, meta tags, fast load times, mobile optimization, and clean URL structures. We do not offer ongoing SEO campaigns, but the technical foundation will be solid.", category: "Web Development" },

  // Pricing & Contracts
  { question: "How is Solvigos priced?", answer: "Our pricing is customized based on the scope and scale of your needs — the number of agents, services, channels, hours of coverage, and complexity of setup all factor in. We don't publish flat rates because every business is different. Visit our Pricing page or schedule a consultation for a tailored quote.", category: "Pricing & Contracts" },
  { question: "Are there setup fees?", answer: "This depends on the service. Some services involve an onboarding or setup component that may be priced separately. All fees are disclosed clearly in your proposal before you commit.", category: "Pricing & Contracts" },
  { question: "Do you require long-term contracts?", answer: "No. We offer flexible engagement terms with no long-term lock-ins required. You can scale up or down based on your needs. The minimum engagement period and notice terms are outlined in your service agreement.", category: "Pricing & Contracts" },
  { question: "Can I scale my team up or down as my business changes?", answer: "Yes — this is one of our core offerings. We're built for flexibility. Whether you need to ramp up for a product launch, seasonal peak, or reduce scope during a slower period, we can adjust your team size and coverage accordingly.", category: "Pricing & Contracts" },
  { question: "What payment methods do you accept?", answer: "Payment details including accepted methods and billing cycles are confirmed during the proposal stage. Please get in touch with our team for specifics.", category: "Pricing & Contracts" },
  { question: "Is there a minimum contract size or team size?", answer: "We work with businesses of various sizes. There is no fixed minimum, though the services and team structure we recommend depend on your volume and requirements. We'll advise on the right starting point during your consultation.", category: "Pricing & Contracts" },
];

const ITEMS_PER_PAGE = 10;

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredFaqs = useMemo(() => {
    let result = faqs;
    if (activeCategory) {
      result = result.filter((faq) => faq.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (faq) =>
          faq.question.toLowerCase().includes(q) ||
          faq.answer.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredFaqs.length / ITEMS_PER_PAGE);
  const paginatedFaqs = filteredFaqs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryClick = (name: string) => {
    setActiveCategory(activeCategory === name ? null : name);
    setCurrentPage(1);
    setOpenIndex(null);
  };

  const handleReset = () => {
    setActiveCategory(null);
    setSearchQuery("");
    setCurrentPage(1);
    setOpenIndex(null);
  };

  const solutions = [
    { name: "Customer Support", slug: "customer-support", image: "/moreSolutions/customerSupport.png" },
    { name: "Technical Support", slug: "technical-support", image: "/moreSolutions/technicalSupport.png" },
    { name: "Customer Conversion", slug: "customer-conversion", image: "/moreSolutions/customerConversion.png" },
    { name: "Customer Onboarding", slug: "customer-onboarding", image: "/moreSolutions/customerOnboarding.png" },
    { name: "Customer Renewals", slug: "customer-renewals", image: "/moreSolutions/customerRenewals.png" },
    { name: "BPO & Back-Office", slug: "bpo-back-office", image: "/moreSolutions/bpoBackoffice.png" },
    { name: "CRM & Chatbot Setup", slug: "crm-chatbot", image: "/moreSolutions/crmChatotSetup.png" },
    { name: "Help Desk Management", slug: "help-desk-management", image: "/moreSolutions/helpdeskManagement.png" },
    { name: "Web Development", slug: "web-development", image: "/moreSolutions/webDevelopment.png" },
  ];

  return (
    <div className="bg-[#F3F4FA] min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <p className="text-sm text-gray-500 mb-2">Got Questions?</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A1A2E] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl text-sm sm:text-base">
            Everything you need to know about working with Solvigos — from
            getting started to scaling your support operations.
          </p>
        </div>
      </section>

      {/* Main Content: Sidebar + FAQs */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
            {/* Left Sidebar */}
            <div>
              <h3 className="text-xs font-bold text-[#1A1A2E] uppercase tracking-wider mb-3">
                Filter by keyword
              </h3>
              <div className="relative mb-8">
                <IconSearch
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search by keyword"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                    setOpenIndex(null);
                  }}
                  className="w-full pl-9 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#007b7b] bg-white"
                />
              </div>

              <h3 className="text-xs font-bold text-[#1A1A2E] uppercase tracking-wider mb-3">
                Filter by category
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => handleCategoryClick(cat.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${isActive
                          ? "bg-[#007b7b] text-white border-[#007b7b]"
                          : "bg-white text-[#1A1A2E] border-gray-300 hover:border-[#007b7b] hover:text-[#007b7b]"
                        }`}
                    >
                      <span>{cat.name}</span>
                      <Icon
                        size={18}
                        className={isActive ? "text-white" : "text-gray-500"}
                      />
                    </button>
                  );
                })}
              </div>

              {(activeCategory || searchQuery) && (
                <button
                  onClick={handleReset}
                  className="mt-6 text-xs font-medium text-[#007b7b] underline"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Right: FAQ List */}
            <div>
              <div className="space-y-0">
                {paginatedFaqs.map((faq, i) => {
                  const globalIndex =
                    (currentPage - 1) * ITEMS_PER_PAGE + i;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div
                      key={globalIndex}
                      className="border-b border-gray-200"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(isOpen ? null : globalIndex)
                        }
                        className="flex items-center justify-between w-full py-5 text-left"
                      >
                        <span className="text-base sm:text-lg font-medium text-[#1A1A2E] pr-4">
                          {faq.question}
                        </span>
                        <IconChevronDown
                          size={20}
                          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 text-sm text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {filteredFaqs.length === 0 && (
                <p className="text-center text-gray-500 py-12">
                  No questions found matching your search.
                </p>
              )}

              {/* Pagination + Count */}
              {filteredFaqs.length > 0 && (
                <div className="mt-8 flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    {filteredFaqs.length} question
                    {filteredFaqs.length !== 1 ? "s" : ""}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setCurrentPage((p) => Math.max(1, p - 1));
                        setOpenIndex(null);
                      }}
                      disabled={currentPage === 1}
                      className="w-10 h-10 rounded-full bg-[#1A3D2E] hover:bg-[#2a5a42] text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <IconArrowLeft size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage((p) => Math.min(totalPages, p + 1));
                        setOpenIndex(null);
                      }}
                      disabled={currentPage === totalPages}
                      className="w-10 h-10 rounded-full bg-[#1A3D2E] hover:bg-[#2a5a42] text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <IconArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Unanswered Questions Banner */}
              <div
                className="mt-16 rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
                style={{ backgroundColor: "#000f30" }}
              >
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Do you have unanswered questions?
                </h3>
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full font-semibold transition-all duration-200 whitespace-nowrap bg-[#007b7b] hover:bg-[#00f4f4] hover:text-black text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20 block"
      >
        <path
          d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,70 1440,80 Z"
          fill="#F3F4FA"
        />
        <path
          d="M0,80 C360,40 720,80 1080,40 C1260,20 1380,10 1440,0 L1440,80 Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Browse Our Solutions */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-12"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Browse our solutions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/services/${solution.slug}`}
                className="bg-[#e7edf7] rounded-xl p-6 text-center hover:shadow-md transition-shadow group"
              >
                <div className="w-full aspect-square relative overflow-hidden mb-3">
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#1A1A2E] group-hover:text-[#007b7b] transition-colors leading-snug">
                  {solution.name}
                </h3>
                <span className="text-[#007b7b] text-xs mt-2 inline-block">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
