"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoGrid } from "@/components/BentoGrid";
import { AnimatedModuleCard } from "@/components/AnimatedModuleCard";

export default function AIInnovatorsLab() {
  const modules = [
    {
      number: "Module 1",
      title: "Kickoff – From Ideas to Impact",
      image: "/cap1.jpg",
      activities: [
        "Understand the structure of a successful AI project — problem, data, innovation.",
        "Brainstorm real-world challenges across education, health, business, and environment.",
        "Form teams and choose your capstone project theme.",
      ],
      takeaway:
        "Set the foundation for your team’s AI journey by identifying meaningful, real-world problems.",
    },
    {
      number: "Module 2",
      title: "Design Thinking for AI Projects",
      image: "/cap2.jpg",
      activities: [
        "Apply design thinking steps: empathize, define, ideate, prototype, test.",
        "Structure AI problem statements effectively.",
        "Create your AI Project Canvas — goal, user, data, model, impact.",
      ],
      takeaway:
        "Learn to approach AI problem-solving creatively and strategically using design thinking.",
    },
    {
      number: "Module 3",
      title: "Data Exploration & Collection",
      image: "/cap3.jpg",
      activities: [
        "Explore open data sources like Kaggle and Google Dataset Search.",
        "Clean, label, and prepare your dataset ethically.",
        "Team activity: collect data aligned with your chosen challenge.",
      ],
      takeaway:
        "Gain practical experience in data handling and preparation for AI modeling.",
    },
    {
      number: "Module 4",
      title: "Building with No-Code AI Tools",
      image: "/cap4.jpg",
      activities: [
        "Work with tools like Teachable Machine, Pictoblox AI, and Lobe.ai.",
        "Train, test, and refine your first AI models for images, text, or sound.",
        "Teams start building their initial AI prototypes.",
      ],
      takeaway:
        "Experience hands-on AI creation without needing deep coding — just ideas and execution.",
    },
    {
      number: "Module 5",
      title: "AI for Social Good & Community Impact",
      image: "/cap5.jpg",
      activities: [
        "Explore AI use cases that improve accessibility, environment, and education.",
        "Add ethical and human-centered design layers to your projects.",
        "Redesign your prototype for real-world relevance and social value.",
      ],
      takeaway:
        "Understand how AI innovation can be a force for good — design for people, not just performance.",
    },
    {
      number: "Module 6",
      title: "Enhancing AI Projects with APIs & Integrations",
      image: "/cap6.jpg",
      activities: [
        "Integrate OpenAI, Hugging Face, or Google Vision APIs for new capabilities.",
        "Add multimodal functionality: chatbots, image recognition, or text generation.",
        "Upgrade your prototypes with interactive and intelligent features.",
      ],
      takeaway:
        "Combine tools and APIs to move from concept to a truly functional AI product.",
    },
    {
      number: "Module 7",
      title: "Building User Interfaces & Demos",
      image: "/cap7.jpg",
      activities: [
        "Create interactive web or app interfaces using Glide, Streamlit, or Scratch for AI.",
        "Showcase your model outputs visually and clearly.",
        "Teams prepare demo-ready prototypes.",
      ],
      takeaway:
        "Learn to make your AI projects accessible and engaging through interactive interfaces.",
    },
    {
      number: "Module 8",
      title: "Collaboration & Project Management Tools",
      image: "/cap8.jpg",
      activities: [
        "Use Notion, Trello, and Miro for organizing and managing your projects.",
        "Assign team roles — AI designer, data lead, dev, and presenter.",
        "Track progress, share updates, and gather peer feedback effectively.",
      ],
      takeaway:
        "Develop teamwork, leadership, and organization — just like real AI teams in startups.",
    },
    {
      number: "Module 9",
      title: "Testing, Evaluation & Improvement",
      image: "/cap9.jpg",
      activities: [
        "Evaluate model accuracy, fairness, and usability.",
        "Iterate based on feedback and impact metrics.",
        "Refine your prototype and polish your final presentation.",
      ],
      takeaway:
        "Learn how to critically analyze, test, and refine your AI system before deployment.",
    },
    {
      number: "Module 10",
      title: "Final Showcase – Pitch, Demo & Reflect",
      image: "/cap10.jpg",
      activities: [
        "Deliver a complete presentation — problem, AI solution, demo, and impact.",
        "Participate in mentor evaluations and peer feedback.",
        "Reflect on teamwork, learning, and next steps for scaling your idea.",
      ],
      takeaway:
        "End the course by pitching your team’s AI project — from concept to prototype to impact.",
    },
  ];

  const projects = [
    {
      category: "AI for Education",
      build: "Design AI tools to personalize student learning or automate grading.",
      imageUrl: "/eduai.jpg",
    },
    {
      category: "AI for Health & Wellness",
      build: "Prototype models for symptom checking, fitness tracking, or mental health support.",
      imageUrl: "/healthai.jpg",
    },
    {
      category: "AI for Business",
      build: "Develop smart assistants that automate tasks or provide insights for small businesses.",
      imageUrl: "/bizia.jpg",
    },
    {
      category: "AI for Sustainability",
      build: "Use AI to predict pollution, track waste, or optimize energy usage.",
      imageUrl: "/greenai.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-16 pb-10 px-4 text-center bg-gray-900">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
          AI Innovators Lab: Team-Based Capstone Projects for Real-World Impact
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
          A collaborative, project-based experience where teams design, prototype, and present 
          AI-driven solutions that make a real-world difference — from concept to showcase.
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
          🚀 Team Capstone Themes
        </h2>
        <p className="text-center text-xl text-purple-300 mb-16 max-w-3xl mx-auto">
          Teams choose from real-world AI challenge areas to innovate and solve — combining 
          creativity, data, and design to build impactful prototypes.
        </p>
        <BentoGrid items={projects} />
      </section>

      {/* Outcomes Section */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Learning Outcomes</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Collaboratively design and prototype a functional AI project.</li>
            <li>Apply data, design, and AI problem-solving skills to real-world issues.</li>
            <li>Gain experience with Teachable Machine, Lobe, Hugging Face, and API integrations.</li>
            <li>Develop teamwork, pitching, and project management expertise.</li>
            <li>Build a presentation-ready AI product and demonstrate its impact.</li>
          </ul>
        </div>

        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why This Course?</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Capstone-style course focused on teamwork, creativity, and leadership.</li>
            <li>Guided mentorship and real-world challenge-solving environment.</li>
            <li>Practical exposure to AI tools, APIs, and design methods.</li>
            <li>Perfect preparation for hackathons, innovation fairs, or AI careers.</li>
          </ul>
        </div>
      </section>

      {/* Sticky Enroll Button */}
      <div className="sticky bottom-0 left-0 right-0 bg-purple-900/70 backdrop-blur-sm p-5 z-50 text-center border-t border-indigo-700">
        <a href="#booking" className="inline-block w-full md:w-auto">
          <button className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg text-white text-xl font-bold hover:from-pink-700 hover:to-purple-800 transition duration-300 shadow-lg shadow-pink-600/40">
            Enroll Now - Start Your Capstone AI Journey
          </button>
        </a>
      </div>

      <Footer />
    </main>
  );
}
