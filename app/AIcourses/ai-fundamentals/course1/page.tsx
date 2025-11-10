"use client";
import React from "react";
//import Image from "next/image";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { BentoGrid } from '@/components/BentoGrid';
import { AnimatedModuleCard } from '@/components/AnimatedModuleCard';

export default function AIFundamentals() {
  const projects = [
    {
      category: "AI Blog Site",
      build: "They'll make a full blog with AI-generated images and stories.",
      imageUrl: "/blog.jpg"
    },
    {
      category: "Cartoon Quiz App",
      build: "Kids build a quiz app about cartoons, animals, or science, powered by AI.",
      imageUrl: "/cartoon.jpg"
    },
    {
      category: "Interactive Chatbot",
      build: "Make a chatbot that gives facts, tells jokes, or guides site visitors.",
      imageUrl: "/chatbot.webp"
    },
    {
      category: "Video Explainer",
      build: "Script and produce an educational or fun explainer video with avatars and AI voices.",
      imageUrl: "/video.jpg"
    },
  ];

  const modules = [
    {
      number: "Module 1",
      title: "What is AI? Use of AI in daily life and shaping our future.",
      image: "/m1.jpeg",
      activities: [
        "Exploring the basics of AI and its impact on daily life.",
        "Future trends and opportunities with AI.",
      ],
      takeaway: "Understand the fundamentals of AI and how it is transforming everyday activities.",
    },
    {
      number: "Module 2",
      title: "Intro to AI tools for smarter learning, research, and creativity.",
      image: "/m2.jpeg",
      activities: [
        "Introducing ChatGPT, Gemini, and Perplexity AI.",
        "Hands-on with popular AI tools for research and study.",
      ],
      takeaway: "Learn how to harness AI tools to supercharge learning and creativity.",
    },
    {
      number: "Module 3",
      title: "Welcome to AI Creativity Workshops.",
      image: "/m3.jpeg",
      activities: [
        "Exploring Midjourney, Higgsfield AI, Ideogram, Runway ML, DALL·E, Krea, Sounddraw, and Beatoven.",
        "Creating with the latest generative AI tools for images, music, and more.",
      ],
      takeaway: "Experience creativity with top tools for graphics, video, music, and design.",
    },
    {
      number: "Module 4",
      title: "How AI Transforms Presentations, Websites, and Public Speaking.",
      image: "/m4.jpeg",
      activities: [
        "Using Gamma.app, Loom AI, Notion AI, Rewordify, and Otter AI.",
        "Hands-on projects in digital storytelling and smart docs.",
      ],
      takeaway: "Master AI-powered communication for study and beyond.",
    },
    {
      number: "Module 5",
      title: "AI & Websites: Basic Web Development.",
      image: "/m5.jpeg",
      activities: [
        "Building a website using Lovable AI.",
        "Exploring website creation using Wix AI.",
      ],
      takeaway: "Gain practical skills in no-code AI web development.",
    },
    {
      number: "Module 6",
      title: "Game Development with AI.",
      image: "/m6.jpeg",
      activities: [
        "Using Gemini/ChatGPT for game logic and design.",
        "Database storage basics with Supabase and Edge Functions.",
      ],
      takeaway: "Discover how to build smart games & manage game data with the latest AI tools.",
    },
    {
      number: "Module 7",
      title: "AI Avatars—What Are They and How Do They Work?",
      image: "/avatar.jpg",
      activities: [
        "Introducing SUNO AI, Eleven Labs, HeyGen, CapCut, and Canva.",
        "Lab: Make your first talking avatar.",
      ],
      takeaway: "Learn to create and use AI video and voice avatars for storytelling.",
    },
    {
      number: "Module 8",
      title: "Creating Advanced GPT Bots and Custom Instructions.",
      image: "/m8.webp",
      activities: [
        "Build custom GPTs and explore the GPT Store.",
        "Hands-on with real use cases.",
      ],
      takeaway: "Go beyond basic chat by designing your own AI assistants.",
    },
    {
      number: "Module 9",
      title: "Building AI Agents (F.R.I.D.A.Y. Concept from Ironman).",
      image: "/agent.jpg",
      activities: [
        "Components: process, workflow, automation, trigger, filter, action.",
        "Project: Your first simple digital agent.",
      ],
      takeaway: "Understand multi-step AI systems and build your own helper bot.",
    },
    {
      number: "Module 10",
      title: "Recap and Responsible Use of AI.",
      image: "/m10.png",
      activities: [
        "Ethics, fact checking, critical thinking.",
        "Review of all modules and responsible use best practices.",
      ],
      takeaway: "Finish up with a strong ethical foundation for your future AI journey.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white font-sans">
      <Navbar />

      {/* Clean Hero Section */}
      <section className="w-full pt-16 pb-10 px-4 text-center bg-blue-900">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
          Artificial Intelligence Course for Students
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
          We’ve planned every moment to deliver real skills, real takeaways, and zero filler for
          the next generation of tech leaders.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-12 border-b border-white/30 pb-4 text-center">
          Course Modules & Highlights
        </h2>
        {modules.map((mod, idx) => (
          <AnimatedModuleCard key={idx} module={mod} />
        ))}
      </section>

      <section className="py-20 bg-gradient-to-t from-purple-900 via-purple-800 to-purple-900 border-t border-b border-white/20">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-6">
          ✨ What Your Child Will Create
        </h2>
        <p className="text-center text-xl text-purple-300 mb-16 max-w-3xl mx-auto">
          This course is <b>100% project-based</b>—they will build and share a portfolio of incredible work.
        </p>
        <BentoGrid items={projects} />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Learning Outcomes</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Build a personal smart AI assistant for studies and daily ideas</li>
            <li>Create no-code websites and interactive quizzes</li>
            <li>Develop presentations, comics, images, and creative storytelling</li>
            <li>Produce a mini-podcast or video explainer using AI voice tools</li>
          </ul>
        </div>

        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why This Course?</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Personalized mentorship</li>
            <li>Project-based, hands-on learning</li>
            <li>Globally recognized certification provided</li>
            <li>Confidence, creativity, and real-world portfolio gains</li>
          </ul>
        </div>
      </section>

      <div className="sticky bottom-0 left-0 right-0 bg-purple-900/70 backdrop-blur-sm p-5 z-50 text-center border-t border-indigo-700">
        <a href="#booking" className="inline-block w-full md:w-auto">
          <button className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg text-white text-xl font-bold hover:from-pink-700 hover:to-purple-800 transition duration-300 shadow-lg shadow-pink-600/40">
            Secure Your Child's Future - Enroll Now
          </button>
        </a>
      </div>

      <Footer />
    </main>
  );
}
