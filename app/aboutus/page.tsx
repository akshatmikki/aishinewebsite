"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Cpu, Zap, Shield, UserCheck, Smile } from "lucide-react";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const sections = [
    {
      title: "Our Mission",
      content:
        "Empower learners of all ages to navigate the AI-driven world using hands-on projects, creativity, and ethical practices.",
      icon: <Cpu size={48} className="text-purple-400" aria-hidden="true" />,
      gradient: "linear-gradient(135deg,#6b21a8,#d946ef)",
    },
    {
      title: "Our Vision",
      content:
        "AI literacy accessible to everyone — students, professionals, and organizations. We aim to create future-ready thinkers who leverage AI responsibly.",
      icon: <Zap size={48} className="text-indigo-400" aria-hidden="true" />,
      gradient: "linear-gradient(135deg,#6366f1,#818cf8)",
    },
    {
      title: "Who We Serve",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-white">
          <li>
            <strong>Students:</strong> Build AI skills early and explore creativity.
          </li>
          <li>
            <strong>Corporate Teams:</strong> Upskill in AI tools and productivity.
          </li>
        </ul>
      ),
      icon: <Smile size={48} className="text-pink-400" aria-hidden="true" />,
      gradient: "linear-gradient(135deg,#f472b6,#fbbf24)",
    },
  ];

  const approachPoints = [
    { text: "Interactive Learning: Engage with AI tools and projects, not just theory.", icon: <Cpu size={24} className="text-purple-400" /> },
    { text: "Hands-On Projects: Real-world challenges that build practical skills.", icon: <Zap size={24} className="text-indigo-400" /> },
    { text: "Ethical AI: Learn responsible AI practices for safe and meaningful use.", icon: <Shield size={24} className="text-pink-400" /> },
    { text: "Personalized Feedback: AI-driven guidance to enhance learning outcomes.", icon: <UserCheck size={24} className="text-purple-400" /> },
    { text: "Kahoot! Experience: Make assessments and testing fun and engaging.", icon: <Smile size={24} className="text-pink-400" /> },
  ];

  const [particles, setParticles] = useState(
    Array.from({ length: 20 }, () => ({
      size: Math.random() * 8 + 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
    }))
  );

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.dx) % 100,
          y: (p.y + p.dy) % 100,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-zinc-900 text-white font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-20 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-text-glow mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About AIshine – Shaping the Future of AI Learning
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Step into the world of Artificial Intelligence and explore learning, creating, and innovating with powerful AI tools.
        </motion.p>
      </section>

      {/* Sections */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20 py-20 relative z-10">
        {sections.map((s, idx) => (
          <motion.div
            key={idx}
            className="p-10 flex flex-col items-center text-center rounded-3xl bg-gradient-animate border border-purple-400/30 shadow-glow hover:scale-105 transition-transform"
            style={{ background: s.gradient }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <div className="mb-4">{s.icon}</div>
            <h2 className="text-3xl font-bold mb-4 text-white">{s.title}</h2>
            <div className="text-white text-lg">{s.content}</div>
          </motion.div>
        ))}
      </section>

      {/* Our Approach */}
      <section className="relative px-6 md:px-20 py-20">
        <motion.h2
          className="text-3xl font-bold text-center text-purple-400 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Approach
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          {approachPoints.map((p, idx) => (
            <motion.div
              key={idx}
              className="flex items-center space-x-4 bg-zinc-800/60 backdrop-blur-md p-4 rounded-xl hover:bg-purple-800 transition-all cursor-pointer shadow-glow"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div>{p.icon}</div>
              <p className="text-white">{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Particle Network */}
        <svg className="absolute w-full h-full top-0 left-0 z-0 overflow-visible" viewBox="0 0 100 100">
          {particles.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={p.size / 2} fill="rgba(255,255,255,0.1)" />
          ))}
          {particles.flatMap((p, i) =>
            particles.slice(i + 1).map((q, j) =>
              Math.hypot(p.x - q.x, p.y - q.y) < 20 ? (
                <line key={`${i}-${i + 1 + j}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="rgba(255,255,255,0.05)" />
              ) : null
            )
          )}
        </svg>
      </section>

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-700 to-pink-500 opacity-20 rounded-full blur-3xl animate-blob will-change-transform"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-700 to-purple-400 opacity-30 rounded-full blur-3xl animate-blob animation-delay-3000 will-change-transform"></div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;