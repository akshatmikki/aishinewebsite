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
    category: "AI-Powered Presentation",
    build: "Students will design a story-driven presentation using AI tools, combining visuals, storytelling, and smart content generation.",
    imageUrl: "/m4.jpeg"
  },
  {
    category: "Personal Website",
    build: "Students will build their own modern website, using AI to generate layout ideas, content, and creative design elements.",
    imageUrl: "/m3.jpeg"
  },
  {
    category: "Mini Game with AI",
    build: "Students will create a simple interactive game, designing characters, gameplay ideas, and fun mechanics with AI assistance.",
    imageUrl: "/cartoon.jpg"
  },
  {
    category: "AI Avatar Character",
    build: "Students will create a digital AI avatar that can be used for storytelling, presentations, or content creation.",
    imageUrl: "/avatar.jpg"
  },
  {
    category: "Personal AI Chatbot",
    build: "Students will design and train their own AI chatbot that can answer questions, share information, or interact with users.",
    imageUrl: "/chatbot.webp"
  },
  {
    category: "First AI App & Business Idea",
    build: "Students will build a basic AI-powered app concept and develop a mini business plan to present their innovation.",
    imageUrl: "/video.jpg"
  }
];

  const modules = [
  {
    number: "Module 1",
    title: "Introduction to AI",
    intro: "Unlock what AI really is and explore.",
    image: "/m1.jpeg",
    activities: [
      "Understand what Artificial Intelligence actually means in simple terms.",
      "Discover real-life examples like smart assistants, recommendations, and automation.",
    ],
    takeaway:
      "Understand the fundamentals of AI and how it is transforming everyday activities.",
  },
  {
    number: "Module 2",
    title: "Introduction to AI Tools",
    intro: "Dive into the coolest AI tools.",
    image: "/m2.jpeg",
    activities: [
      "Explore powerful tools like ChatGPT, Gemini, and Perplexity AI.",
      "Hands-on with popular AI tools for research and study.",
    ],
    takeaway:
      "Learn how to harness AI tools to supercharge learning and creativity.",
  },
  {
    number: "Module 3",
    title: "AI Tool Creativity Workshop",
    intro: "Jump into hands-on activities.",
    image: "/m3.jpeg",
    activities: [
      "Exploring Midjourney, Higgsfield AI, Ideogram, Runway ML, DALL·E, Krea, Sounddraw, and Beatoven.",
      "Creating with the latest generative AI tools for images, music, and more.",
    ],
    takeaway:
      "Experience creativity with top tools for graphics, video, music, and design. Creativity grows when humans and AI collaborate.",
  },
  {
    number: "Module 4",
    title: "AI Presentations",
    intro: "Use AI to craft stunning presentations.",
    image: "/m4.jpeg",
    activities: [
      "Using Gamma.app, Yoodli AI, Notion AI, Rewordify, and Otter AI.",
      "Hands-on projects in digital storytelling and smart docs.",
    ],
    takeaway:
      "AI can turn your ideas into impactful visual stories and presentations.",
  },
  {
    number: "Module 5",
    title: "Building Websites",
    intro: "Build sleek, modern websites with AI.",
    image: "/m5.jpeg",
    activities: [
      "Building a website using Lovable AI.",
      "Exploring website creation using Wix AI.",
    ],
    takeaway:
      "Gain practical skills in no-code AI web development. You don’t need to be a coder to start building online.",
  },
  {
    number: "Module 6",
    title: "Game Development with AI",
    intro: "Develop your own games.",
    image: "/m6.jpeg",
    activities: [
      "Using Lovable AI for game logic and design.",
      "Database storage basics with Supabase.",
    ],
    takeaway:
      "Discover how to build smart games & manage game data with the latest AI tools.",
  },
  {
    number: "Module 7",
    title: "AI Avatars",
    intro: "Create expressive digital avatars.",
    image: "/avatar.jpg",
    activities: [
      "Introducing SUNO AI, Eleven Labs, and HeyGen.",
      "Understand how avatars enhance communication and engagement – Make your first talking avatar.",
    ],
    takeaway:
      "Your digital identity can be as creative as your imagination.",
  },
  {
    number: "Module 8",
    title: "Build Your AI Bot",
    intro: "Design your personal AI chatbot and teach it how to respond, help, and interact.",
    image: "/m8.webp",
    activities: [
      "Learn how chatbots are structured and trained.",
      "Build and customize responses for specific use cases.",
    ],
    takeaway:
      "Go beyond basic chat by designing your own AI assistants.",
  },
  {
    number: "Module 9",
    title: "Build Your First App & Business Plan",
    intro: "Launch your first app and learn how to turn big ideas into a real business strategy.",
    image: "/agent.jpg",
    activities: [
      "Creating an App using the Rocket.new tool.",
      "Create a basic business model and pitching strategy.",
    ],
    takeaway:
      "Big ideas become powerful when combined with execution and strategy.",
  },
  {
    number: "Module 10",
    title: "Recap – Finale",
    intro: "Show off everything you built, celebrate achievements, and prepare for your next AI journey.",
    image: "/m10.png",
    activities: [
      "Present projects and reflect on learning growth.",
      "Plan next steps in AI exploration and innovation.",
    ],
    takeaway:
      "Finish up with a strong ethical foundation for your future AI journey. This is not the end — it’s the beginning of your AI journey.",
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
          This course is <b>100% project-based</b>—students will build and showcase a portfolio of exciting AI-powered creations.
        </p>
        <BentoGrid items={projects} />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Learning Outcomes</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Understand the fundamentals of Artificial Intelligence and how it works in the real world.</li>
            <li>Learn to use powerful AI tools to create presentations, websites, games, avatars, and chatbots.</li>
            <li>Develop creative problem-solving skills by building hands-on AI projects.</li>
            <li>Gain practical digital skills that combine technology, creativity, and innovation.</li>
            <li>Build confidence to design apps, explore AI careers, and think like a future innovator.</li>
          </ul>
        </div>

        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why This Course?</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Future-Ready Skills – AI is transforming every industry, and early exposure builds a strong foundation.</li>
            <li>Hands-On Learning – Students don’t just learn theory; they build real projects with AI tools.</li>
            <li>Creativity + Technology – The course blends imagination with cutting-edge AI capabilities.</li>
            <li>Beginner Friendly – No coding or prior technical knowledge required.</li>
            <li>Confidence & Innovation – Students learn how to turn ideas into real digital creations.</li>
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
