"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoGrid } from "@/components/BentoGrid";
import { AnimatedModuleCard } from "@/components/AnimatedModuleCard";

export default function AIPoweredBusinessMastery() {
  const modules = [
    {
      number: "Module 1",
      title: "Business in the AI Era – The Power of Smart Tools",
      image: "/businessAI/AI for business.webp",
      activities: [
        "Understand how AI and automation are redefining business operations.",
        "Explore top AI tool categories: marketing, productivity, analytics, and customer experience.",
        "Identify automation opportunities specific to your business model.",
      ],
      takeaway:
        "Gain a high-level understanding of how AI creates competitive advantage.",
    },
    {
      number: "Module 2",
      title: "Smart Research & Insights Tools",
      image: "/businessAI/market tools.jpg",
      activities: [
        "Leverage tools like Perplexity, ChatGPT, and Notion AI for market research.",
        "Automate trend analysis and competitor monitoring.",
        "Convert raw data into actionable business insights with AI dashboards.",
      ],
      takeaway:
        "Master the art of fast, AI-powered market research and decision-making.",
    },
    {
      number: "Module 3",
      title: "Branding & Content Creation Tools",
      image: "/businessAI/content tools.jpg",
      activities: [
        "Design brand visuals using Canva, Adobe Firefly, and Leonardo AI.",
        "Create brand identity kits and reusable templates.",
        "Generate professional marketing content instantly with AI.",
      ],
      takeaway:
        "Build a strong digital presence with effortless branding and creative automation.",
    },
    {
      number: "Module 4",
      title: "Social Media & Marketing Automation",
      image: "/businessAI/social media tools.jpg",
      activities: [
        "Automate posting with Buffer, Metricool, and Hootsuite.",
        "Use AI tools for captions, scheduling, and analytics tracking.",
        "Optimize your content strategy for maximum engagement and ROI.",
      ],
      takeaway:
        "Save time and scale your marketing with AI-powered automation systems.",
    },
    {
      number: "Module 5",
      title: "Copywriting, Ads & Sales Funnels",
      image: "/businessAI/copywriting tools.png",
      activities: [
        "Generate persuasive ad and email copy using Copy.ai, Jasper, and Writesonic.",
        "Build and optimize funnels and ad campaigns automatically.",
        "Measure and analyze ad performance with AI analytics.",
      ],
      takeaway:
        "Turn words into revenue with AI-driven copywriting and ad optimization.",
    },
    {
      number: "Module 6",
      title: "Website & Landing Page Builders",
      image: "/businessAI/landing tools.png",
      activities: [
        "Design landing pages with Durable, Framer, or Wix ADI in minutes.",
        "Generate website copy and visuals using AI assistants.",
        "Integrate analytics and lead-capture forms seamlessly.",
      ],
      takeaway:
        "Build and launch professional business websites faster than ever before.",
    },
    {
      number: "Module 7",
      title: "Productivity, Collaboration & Automation Tools",
      image: "/businessAI/copywriting tools.png",
      activities: [
        "Manage tasks with ClickUp, Notion, and Trello AI.",
        "Automate workflows using Zapier and Make.com.",
        "Enhance team communication with Slack AI and Loom integrations.",
      ],
      takeaway:
        "Boost productivity and eliminate repetitive work with smart automation.",
    },
    {
      number: "Module 8",
      title: "Customer Engagement & Support Tools",
      image: "/businessAI/customer.jpg",
      activities: [
        "Build chatbots using Manychat, Intercom, and Chatbase.",
        "Personalize CRM interactions with AI-driven insights.",
        "Automate lead nurturing and feedback systems.",
      ],
      takeaway:
        "Deliver world-class customer experiences through intelligent automation.",
    },
    {
      number: "Module 9",
      title: "Business Analytics & Decision-Making Tools",
      image: "/businessAI/business analytics.jpg",
      activities: [
        "Use Google Looker, Tableau, and Power BI for data visualization.",
        "Combine multiple data sources for deeper insights.",
        "Forecast trends and performance metrics using AI models.",
      ],
      takeaway:
        "Turn business data into clarity and make decisions backed by AI-driven insights.",
    },
    {
      number: "Module 10",
      title: "AI Tools for Sales & Lead Generation",
      image: "/businessAI/AI lead and sales.jpg",
      activities: [
        "Generate and qualify leads using Apollo, Clay, and PhantomBuster.",
        "Automate outreach campaigns and scoring systems.",
        "Streamline CRM management with AI automation.",
      ],
      takeaway:
        "Grow sales pipelines intelligently with automated prospecting systems.",
    },
    {
      number: "Module 11",
      title: "Financial Management & AI Accounting Tools",
      image: "/businessAI/financial and accounting.jpg",
      activities: [
        "Simplify finance tracking using QuickBooks AI, Fyle, and Zoho Books.",
        "Automate expense reports, invoicing, and budget insights.",
        "Predict cash flow trends using AI forecasting tools.",
      ],
      takeaway:
        "Bring clarity to finances with AI-powered accounting and forecasting systems.",
    },
    {
      number: "Module 12",
      title: "Scaling with AI Agents & Future Tools",
      image: "/businessAI/scaling with ai.jpg",
      activities: [
        "Create AI agents for task automation using ChatGPT, AgentGPT, and Relevance AI.",
        "Explore AI voice/video for personalized marketing and sales.",
        "Learn future trends: autonomous workflows, multimodal AI, and self-managing businesses.",
      ],
      takeaway:
        "Prepare for the future — integrate autonomous AI systems to scale your business exponentially.",
    },
  ];

  const projects = [
    {
      category: "AI Marketing Campaign",
      build: "Create and automate a full marketing campaign using AI tools for design, copy, and analytics.",
      imageUrl: "/businessAI/ai marketing compaign.jpg",
    },
    {
      category: "Smart Business Dashboard",
      build: "Build a live business analytics dashboard using AI insights tools like Looker or Power BI.",
      imageUrl: "/businessAI/smart business.jpg",
    },
    {
      category: "Automation Blueprint",
      build: "Design an AI-powered workflow using Zapier or Make.com to automate daily tasks.",
      imageUrl: "/businessAI/ai business automation.jpg",
    },
    {
      category: "AI Sales Assistant",
      build: "Build a chatbot that engages leads, answers FAQs, and captures new prospects automatically.",
      imageUrl: "/businessAI/sales assitant.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-16 pb-10 px-4 text-center bg-slate-900">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
          AI-Powered Business Mastery: Tools to Supercharge Growth, Productivity & Profit
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
          A hands-on, tool-driven program designed for business owners and professionals 
          who want to leverage AI to scale faster, save time, and make smarter decisions.
        </p>
      </section>

      {/* Modules Section */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-12 border-b border-white/30 pb-4 text-center">
          Course Modules & Highlights
        </h2>
        {modules.map((mod, idx) => (
          <AnimatedModuleCard key={idx} module={mod} />
        ))}
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-t from-purple-900 via-purple-800 to-purple-900 border-t border-b border-white/20">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-6">
          💼 Real-World Projects
        </h2>
        <p className="text-center text-xl text-purple-300 mb-16 max-w-3xl mx-auto">
          Every participant builds practical, AI-driven business systems — from marketing 
          campaigns to automated workflows and dashboards.
        </p>
        <BentoGrid items={projects} />
      </section>

      {/* Outcomes Section */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Learning Outcomes</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Understand and apply AI tools across marketing, sales, and operations.</li>
            <li>Automate repetitive processes to save time and cut costs.</li>
            <li>Use analytics and dashboards to make smarter data-driven decisions.</li>
            <li>Build an AI-powered business strategy for sustainable growth.</li>
          </ul>
        </div>

        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why This Course?</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Curated for entrepreneurs, managers, and startups.</li>
            <li>Hands-on learning with the most powerful AI business tools.</li>
            <li>Action-oriented modules — apply everything you learn instantly.</li>
            <li>Future-focused: prepares you for the AI-driven digital economy.</li>
          </ul>
        </div>
      </section>

      {/* Sticky Enroll Button */}
      <div className="sticky bottom-0 left-0 right-0 bg-purple-900/70 backdrop-blur-sm p-5 z-50 text-center border-t border-indigo-700">
        <a href="#booking" className="inline-block w-full md:w-auto">
          <button className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg text-white text-xl font-bold hover:from-pink-700 hover:to-purple-800 transition duration-300 shadow-lg shadow-pink-600/40">
            Enroll Now - Transform Your Business with AI
          </button>
        </a>
      </div>

      <Footer />
    </main>
  );
}
