"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoGrid } from "@/components/BentoGrid";
import { AnimatedModuleCard } from "@/components/AnimatedModuleCard";

export default function MachineLearningMadeSimple() {
  const modules = [
    {
      number: "Module 1",
      title: "Introduction to Machine Learning",
      image: "/Intro ML.png",
      activities: [
        "What is Machine Learning and how it differs from traditional programming.",
        "Explore real-world examples like Netflix recommendations, spam filters, and voice assistants.",
        "Understand data, patterns, and the concept of training a model.",
      ],
      takeaway:
        "Gain a clear understanding of how computers learn from data to make predictions.",
    },
    {
      number: "Module 2",
      title: "Types of Machine Learning",
      image: "/Types of ML.png",
      activities: [
        "Learn about Supervised, Unsupervised, and Reinforcement Learning.",
        "Discover everyday use cases like image recognition, clustering, and game-playing AIs.",
        "Understand datasets, labels, and feedback loops.",
      ],
      takeaway:
        "Differentiate between ML types and identify their real-world applications.",
    },
    {
      number: "Module 3",
      title: "Inside an ML Model — How Machines Learn",
      image: "/inside ML.jpg",
      activities: [
        "Understand features, training, testing, and model accuracy.",
        "Simple explanation of algorithms like Linear Regression and Decision Trees.",
        "Visualize how computers make predictions and improve over time.",
      ],
      takeaway:
        "See how ML models are trained, tested, and refined for better accuracy.",
    },
    {
      number: "Module 4",
      title: "Data in Machine Learning",
      image: "/Data in ML.jpg",
      activities: [
        "Understand the importance of data quality, cleaning, and representation.",
        "Introduction to bias, overfitting, and 'garbage in, garbage out.'",
        "Learn how data drives every stage of ML.",
      ],
      takeaway:
        "Recognize the role of good data and ethics in building reliable ML systems.",
    },
    {
      number: "Module 5",
      title: "Machine Learning in the Real World",
      image: "/Real World ML.jpg",
      activities: [
        "Explore ML applications in healthcare, gaming, education, and climate solutions.",
        "Get introduced to tools like Teachable Machine, Scratch for AI, and Kaggle.",
        "Understand ethical AI — fairness, privacy, and responsibility.",
      ],
      takeaway:
        "Appreciate the power of ML across industries while understanding responsible AI practices.",
    },
  ];

  const projects = [
    {
      category: "Movie Genre Predictor",
      build:
        "Students predict movie genres using sample datasets and simple models.",
      imageUrl: "/movie genre predict.jpg",
    },
    {
      category: "Image Classifier",
      build:
        "Train an AI to recognize fruits, animals, or objects using Google Teachable Machine.",
      imageUrl: "/Image Classifier.png",
    },
    {
      category: "House Price Predictor",
      build:
        "Visual sandbox project that predicts housing prices using sample data.",
      imageUrl: "/house image.jpg",
    },
    {
      category: "Mini ML Project",
      build:
        "Students design their own ML idea like a smart plant monitor or learning assistant.",
      imageUrl: "/ML project.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-16 pb-10 px-4 text-center bg-indigo-900">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
          Machine Learning Made Simple: Building the Future with Smart Machines
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
          A beginner-friendly journey into how computers learn, make
          predictions, and power modern AI — through fun concepts, demos, and
          hands-on projects.
        </p>
      </section>

      {/* Modules Section */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
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
          🚀 What You'll Build
        </h2>
        <p className="text-center text-xl text-purple-300 mb-16 max-w-3xl mx-auto">
          Learn by doing! Every module includes interactive labs and
          project-based learning.
        </p>
        <BentoGrid items={projects} />
      </section>

      {/* Why This Course Section */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Learning Outcomes</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>
              Understand how machines learn from data and improve over time.
            </li>
            <li>Recognize the main types of ML and their real-world uses.</li>
            <li>Build and test simple ML projects using visual tools.</li>
            <li>Appreciate the ethical responsibilities of using AI wisely.</li>
          </ul>
        </div>

        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why Take This Course?</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Step-by-step beginner approach with real examples.</li>
            <li>Hands-on, visual learning using AI simulators and datasets.</li>
            <li>Ethics-focused: building smart and responsible AI minds.</li>
            <li>
              Fun, creative, and future-ready — designed for curious learners!
            </li>
          </ul>
        </div>
      </section>

      <div className="sticky bottom-0 left-0 right-0 bg-purple-900/70 backdrop-blur-sm p-5 z-50 text-center border-t border-indigo-700">
        <a href="#booking" className="inline-block w-full md:w-auto">
          <button className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg text-white text-xl font-bold hover:from-pink-700 hover:to-purple-800 transition duration-300 shadow-lg shadow-pink-600/40">
            Enroll Now - Start Your ML Journey
          </button>
        </a>
      </div>

      <Footer />
    </main>
  );
}
