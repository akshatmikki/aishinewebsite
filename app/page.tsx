"use client";
import React, { useState, useId, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Rocket, Book, Lightbulb } from "lucide-react";

const benefitIcons = [Star, Rocket, Book, Lightbulb];
const slides = [
  {
    id: 1,
    image: "/banner.png",
    title: "Empowering the Future with Human + AI Collaboration",
    subtitle:
      "Learn AI through interactive courses, real-world projects, and expert mentorship.",
  },
  {
    id: 2,
    image: "/banner3.png",
    title: "Discover the Power of Generative AI",
    subtitle:
      "Unleash your creativity with tools that blend human intuition and artificial intelligence.",
  },
  {
    id: 3,
    image: "/banner.png",
    title: "Shape Tomorrow’s World with AI Skills",
    subtitle:
      "Master in-demand technologies and become a leader in the AI-driven era.",
  },
];

export default function Home() {
  // ✅ Define courses before useState
  const courses = [
    {
      title: "AI Fundamentals",
      description: "Learn the basics of AI and ML algorithms",
      ctaText: "Enroll",
      ctaLink: "#",
      image: "/ai.png",
      content: () => (
        <p>
          Comprehensive introduction to AI, covering ML models, data preprocessing, and algorithms.
        </p>
      ),
    },
    {
      title: "AI for Business",
      description: "Leverage AI in business applications",
      ctaText: "Enroll",
      ctaLink: "#",
      image: "/aibusiness.png",
      content: () => (
        <p>
          Learn to apply AI to business workflows, analytics, and decision-making processes.
        </p>
      ),
    },
    {
      title: "AI Project Labs",
      description: "Build real-world AI projects",
      ctaText: "Enroll",
      ctaLink: "#",
      image: "/ai.png",
      content: () => (
        <p>
          Hands-on project-based learning with guidance from AI mentors.
        </p>
      ),
    },
    {
      title: "Advanced AI Topics",
      description: "Explore cutting-edge AI methods",
      ctaText: "Enroll",
      ctaLink: "#",
      image: "/aibusiness.png",
      content: () => (
        <p>
          Deep dive into NLP, computer vision, reinforcement learning, and generative AI.
        </p>
      ),
    },
  ];

  const [activeCourse, setActiveCourse] = useState<typeof courses[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Floating particles background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      color: string;
    }[] = [];

    const numParticles = 40;
    const colors = ["#ec4899", "#93c5fd", "#f9a8d4"];

    // Resize canvas
    const resize = () => {
      const c = canvasRef.current;
      if (!c) return; // safeguard for unmounted canvas
      c.width = window.innerWidth;
      c.height = 500;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;

    const draw = () => {
      const c = canvasRef.current;
      const context = c?.getContext("2d");
      if (!c || !context) return;

      context.clearRect(0, 0, c.width, c.height);

      for (let p of particles) {
        context.beginPath();
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fillStyle = p.color;
        context.globalAlpha = 0.6;
        context.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > c.width) p.dx *= -1;
        if (p.y < 0 || p.y > c.height) p.dy *= -1;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const benefits = [
    { title: "Interactive Learning", desc: "Hands-on labs & projects" },
    { title: "AI Mentors", desc: "Personalized 1:1 mentor guidance" },
    { title: "Certification", desc: "Globally recognized credentials" },
    { title: "Hybrid Mode", desc: "Learn online & in-person" },
  ];

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveCourse(null);
    }

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = activeCourse ? "hidden" : "auto";

    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeCourse]);

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col font-sans from-sky-50 via-white to-pink-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-zinc-800 dark:text-white scroll-smooth">
      <Navbar />

      {/* HERO SECTION */}
     <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-pink-100/30 to-sky-100/30"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].title}
          className="relative z-10 max-w-4xl px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
        >
          <h1
  className="text-5xl md:text-7xl font-extrabold 
             bg-gradient-to-r text-white
              bg-clip-text drop-shadow-[2px_2px_8px_rgba(0,0,0,0.5)]"
>
  {slides[current].title}
</h1>

<p
  className="mt-6 text-xl md:text-2xl 
             bg-gradient-to-r text-grey-800 bg-clip-text drop-shadow-[1px_1px_4px_rgba(0,0,0,0.4)]"
>
  {slides[current].subtitle}
</p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#courses"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Explore Courses
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Talk to Us
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
          title="scroll"
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-pink-500 scale-125"
                : "bg-white/70 hover:bg-pink-300"
            }`}
          />
        ))}
      </div>
    </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative px-10 py-24 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-pink-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 overflow-hidden"
      >
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
            About AIshine
          </h2>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
            AIshine is a next-generation learning platform focused on practical AI skills. We
            empower students and professionals to collaborate with AI tools and transform their
            careers.
          </p>
          <motion.ul
            className="space-y-3 text-xl text-zinc-700 dark:text-zinc-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              "Personalized mentorship",
              "Project-based curriculum",
              "Career assistance & certifications",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3"
                variants={{
                  hidden: { opacity: 0, x: -20, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 300 },
                  },
                }}
              >
                <span className="text-pink-500 dark:text-pink-400 text-2xl">✔</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <Link href="/aboutus" passHref>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundPositionX: "200%", // Move gradient on hover
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 font-semibold text-white rounded-xl 
               bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
               bg-[length:200%_100%] bg-left 
               shadow-lg transition-all duration-300"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/about.png"
              alt="Glowing AI Brain Illustration"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* WHY CHOOSE AISHINE */}
      <section
        id="why"
        className="relative px-10 py-20 bg-gradient-to-b from-white/70 via-pink-50/50 to-white/70 dark:from-zinc-900/70 dark:via-zinc-800/50 dark:to-zinc-900/70 overflow-hidden"
      >
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl font-extrabold text-center mb-14 text-zinc-900 dark:text-zinc-100 z-10"
        >
          Why Choose <span className="text-pink-500">AIshine</span>
        </motion.h2>

        <div className="relative grid md:grid-cols-4 gap-8 max-w-6xl mx-auto z-10">
          {benefits.map((b, i) => {
            const Icon = benefitIcons[i % benefitIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="flex"
              >
                <Card className="flex flex-col justify-between items-center text-center w-full h-full min-h-[260px] p-6 rounded-3xl border border-transparent bg-gradient-to-br from-white/80 to-pink-50/20 dark:from-zinc-800/70 dark:to-zinc-900/50 shadow-md hover:shadow-pink-400/20 hover:border-pink-300/40 dark:hover:border-pink-500/40 transition-all duration-500 ease-out">
                  <CardHeader className="flex flex-col items-center gap-3 relative z-10">
                    <div className="bg-pink-100 dark:bg-zinc-700 p-4 rounded-full inline-flex">
                      <Icon className="w-7 h-7 text-pink-500 dark:text-pink-400" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {b.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 flex-grow flex items-center">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {b.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="px-6 md:px-10 py-20 bg-white/70 dark:bg-zinc-900/70">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent 
               bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
               drop-shadow-lg animate-fadeIn">
          Courses for Students
        </h2>


        {/* Horizontal Scroll Layout (All Screens) */}
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 no-scrollbar">
          <div className="flex gap-8 px-4">
            {courses.map((course) => (
              <motion.div
                key={course.title}
                onClick={() => setActiveCourse(course)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[350px] bg-white dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-2xl transition-all cursor-pointer snap-center overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-40 md:h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 text-center mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center line-clamp-3">
                    {course.description}
                  </p>
                  <div className="mt-auto flex justify-center">
                    <button className="mt-4 px-5 py-2 text-sm rounded-full font-semibold bg-gray-100 hover:bg-green-500 hover:text-white text-black transition-all">
                      {course.ctaText}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeCourse && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setActiveCourse(null)}
              />

              {/* Modal */}
              <motion.div
                layoutId={`card-${activeCourse.title}-${id}`}
                ref={ref}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <div className="relative bg-white dark:bg-neutral-900 rounded-3xl max-w-lg w-full shadow-xl p-6">

                  {/* Image */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={activeCourse.image}
                      alt={activeCourse.title}
                      fill
                      className="object-cover"
                    />

                    {/* Close Button on top of image */}
                    <button
                      onClick={() => setActiveCourse(null)}
                      className="absolute top-2 right-2 bg-gray-200 dark:bg-neutral-800 hover:bg-red-500 hover:text-white text-black dark:text-white rounded-full h-8 w-8 flex items-center justify-center shadow-sm transition-all z-10"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-2">
                    {activeCourse.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {activeCourse.description}
                  </p>
                  <div>{activeCourse.content()}</div>

                  <a
                    href={activeCourse.ctaLink}
                    target="_blank"
                    className="mt-6 inline-block px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all"
                  >
                    {activeCourse.ctaText}
                  </a>
                </div>
              </motion.div>

            </>
          )}
        </AnimatePresence>
      </section>

      {/* CORPORATE TRAINING */}
      <section
        id="corporate"
        className="relative px-6 md:px-16 py-28 grid md:grid-cols-2 gap-16 items-center bg-white/70 dark:bg-zinc-900/70 overflow-hidden"
      >
        {/* Decorative Background Shapes */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-300/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        {/* Floating AI Icons */}
        {/* <div className="absolute top-10 right-10 flex flex-col space-y-4 z-0">
    <div className="w-10 h-10 bg-blue-400/50 rounded-full animate-bounce-slow flex items-center justify-center shadow-lg">
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 17h-2v-2h2zm0-4h-2V7h2z"/>
      </svg>
    </div>
    <div className="w-12 h-12 bg-pink-400/50 rounded-full animate-bounce-slow animation-delay-1000 flex items-center justify-center shadow-lg">
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM11 17h2v-2h-2zm0-4h2V7h-2z"/>
      </svg>
    </div>
  </div> */}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-zinc-900 dark:text-white leading-tight">
            Corporate AI Training
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 mb-8 text-xl md:text-2xl max-w-lg">
            Upskill your team with customized AI programs designed for businesses.
          </p>
          <ul className="list-disc pl-8 text-zinc-600 dark:text-zinc-400 space-y-4 text-lg md:text-xl">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              AI workshops & bootcamps
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Hands-on AI dashboards & tools
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Flexible hybrid training options
            </motion.li>
          </ul>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-200/40 to-blue-200/40 hover:scale-105 transition-transform duration-500 border-2 border-white/30 dark:border-zinc-700/40"
        >
          {/* Image with Floating Animation */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/coperateai.png"
              alt="AI Dashboard"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </motion.div>

          {/* Particle Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-white/0 animate-pulse-slow rounded-2xl"></div>
          </div>
        </motion.div>
      </section>


      <Footer />
    </main>
  );
}
