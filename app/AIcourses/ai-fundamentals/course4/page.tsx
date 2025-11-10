"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoGrid } from "@/components/BentoGrid";
import { AnimatedModuleCard } from "@/components/AnimatedModuleCard";

export default function DeepLearningFoundations() {
  const modules = [
    {
      number: "Module 1",
      title: "Introduction to Deep Learning",
      image: "/DL intro.png",
      activities: [
        "Understand what Deep Learning is and how it differs from Machine Learning.",
        "Learn about neurons, layers, and networks inspired by the human brain.",
        "Explore real-life examples: image recognition, voice assistants, and recommendation systems.",
      ],
      takeaway:
        "Grasp the core concept of deep learning and how it powers intelligent systems.",
    },
    {
      number: "Module 2",
      title: "Neural Networks Explained",
      image: "/Neural.jpg",
      activities: [
        "Understand the structure of a neural network — input, hidden, and output layers.",
        "Learn how information flows through the network (forward & backward propagation).",
        "Discover activation functions and their importance.",
      ],
      takeaway:
        "Visualize how artificial neurons connect to form powerful learning systems.",
    },
    {
      number: "Module 3",
      title: "Training the Model",
      image: "/training.jpg",
      activities: [
        "Understand how models learn through feedback, optimization, and loss functions.",
        "Explore concepts like gradient descent, learning rate, and epochs.",
        "Identify common challenges such as overfitting.",
      ],
      takeaway:
        "Learn how to train, test, and improve deep learning models effectively.",
    },
    {
      number: "Module 4",
      title: "Convolutional Neural Networks (CNNs)",
      image: "/Learn_Convolutional_Neural_Networks.png",
      activities: [
        "Learn what makes CNNs perfect for image and video recognition tasks.",
        "Understand filters, feature maps, and pooling layers.",
        "Explore real-world applications like facial recognition, autonomous vehicles, and medical imaging.",
      ],
      takeaway:
        "Discover how CNNs revolutionized computer vision and real-world AI systems.",
    },
    {
      number: "Module 5",
      title: "Applications & The Future of Deep Learning",
      image: "/application of DL.jpg",
      activities: [
        "Discover modern deep learning uses like ChatGPT, AI art, and self-driving cars.",
        "Discuss ethical AI, fairness, and future trends like multimodal AI and deepfakes.",
        "Engage in thoughtful debates: 'Can AI think like humans?'",
      ],
      takeaway:
        "Understand deep learning’s real-world impact and future possibilities.",
    },
  ];

  const projects = [
    {
      category: "Neural Network Visualizer",
      build: "Use TensorFlow Playground to visualize how neurons adjust during training.",
      imageUrl: "/NNV.png",
    },
    {
      category: "Image Classifier Project",
      build: "Train a CNN using Teachable Machine to classify different types of images.",
      imageUrl: "/imagecnn.jpg",
    },
    {
      category: "Deep Learning Explorer",
      build: "Experiment with simple AI models that detect patterns or objects.",
      imageUrl: "/deepexplorer.png",
    },
    {
      category: "AI Debate Challenge",
      build: "Students discuss and present views on AI’s role in human-like thinking.",
      imageUrl: "/ai debate.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-16 pb-10 px-4 text-center bg-indigo-900">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
          Deep Learning Foundations: Building Intelligent Machines from the Ground Up
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
          A hands-on journey into the world of Deep Learning — where students explore how machines
          recognize patterns, learn from data, and power today’s AI revolution.
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
          🧠 What You’ll Explore
        </h2>
        <p className="text-center text-xl text-purple-300 mb-16 max-w-3xl mx-auto">
          Learn how intelligent systems are built — from neural networks to AI applications — 
          through interactive demos and creative projects.
        </p>
        <BentoGrid items={projects} />
      </section>

      {/* Learning Outcomes Section */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Learning Outcomes</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Understand how neural networks work and learn from data.</li>
            <li>Visualize and train simple deep learning models interactively.</li>
            <li>Recognize applications of CNNs and real-world AI systems.</li>
            <li>Discuss ethical and social aspects of intelligent machines.</li>
            <li>Appreciate how deep learning powers modern AI like ChatGPT and image generation tools.</li>
          </ul>
        </div>

        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why Take This Course?</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Visually explains deep learning concepts through fun activities.</li>
            <li>Hands-on projects using interactive tools — zero coding required.</li>
            <li>Introduces neural networks, CNNs, and AI ethics in a beginner-friendly way.</li>
            <li>Perfect bridge between Machine Learning and AI creativity tools.</li>
          </ul>
        </div>
      </section>

      {/* Sticky Enroll Button */}
      <div className="sticky bottom-0 left-0 right-0 bg-purple-900/70 backdrop-blur-sm p-5 z-50 text-center border-t border-indigo-700">
        <a href="#booking" className="inline-block w-full md:w-auto">
          <button className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg text-white text-xl font-bold hover:from-pink-700 hover:to-purple-800 transition duration-300 shadow-lg shadow-pink-600/40">
            Enroll Now - Start Your Deep Learning Journey
          </button>
        </a>
      </div>

      <Footer />
    </main>
  );
}
