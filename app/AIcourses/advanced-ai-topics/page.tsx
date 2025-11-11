"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoGrid } from "@/components/BentoGrid";
import { AnimatedModuleCard } from "@/components/AnimatedModuleCard";

export default function AdvancedAIMastery() {
  const modules = [
    {
      number: "Module 1",
      title: "The Landscape of Advanced AI",
      image: "/advancAI/landscape.jpg",
      activities: [
        "Explore the evolution from traditional ML to modern Generative AI.",
        "Understand architectures: transformers, diffusion models, and LLMs.",
        "Get an overview of frameworks like PyTorch, TensorFlow, and JAX.",
      ],
      takeaway:
        "Gain a clear view of the current and future AI ecosystem — architectures, models, and tools.",
    },
    {
      number: "Module 2",
      title: "Deep Neural Networks – Beyond Basics",
      image: "/advancAI/DeepNeuralNetwork.jpg",
      activities: [
        "Dive deeper into CNNs, RNNs, and LSTMs for complex tasks.",
        "Build and train models using Keras or PyTorch Lightning.",
        "Master dropout, batch normalization, and transfer learning.",
      ],
      takeaway:
        "Level up your deep learning foundation with custom model architectures and optimization tricks.",
    },
    {
      number: "Module 3",
      title: "Transformer Architectures & Large Language Models (LLMs)",
      image: "/advancAI/LLM.jpg",
      activities: [
        "Dissect attention mechanisms, positional encoding, and token embeddings.",
        "Build custom Transformer-based models using Hugging Face.",
        "Case studies on GPT, Claude, Gemini, and LLaMA.",
      ],
      takeaway:
        "Understand how LLMs think, train, and scale — from GPT-style models to next-gen transformers.",
    },
    {
      number: "Module 4",
      title: "Fine-Tuning & Custom Training LLMs",
      image: "/advancAI/finetuningLLM.jpg",
      activities: [
        "Fine-tune with LoRA, PEFT, and QLoRA for efficiency.",
        "Manage data pipelines with Weights & Biases and LangChain.",
        "Deploy LLMs for business and research with best practices.",
      ],
      takeaway:
        "Learn to customize, optimize, and deploy your own powerful language models.",
    },
    {
      number: "Module 5",
      title: "Generative AI – Images, Audio & Video",
      image: "/advancAI/GenerativeAI.jpg",
      activities: [
        "Work with diffusion models, GANs, and Stable Diffusion pipelines.",
        "Use Midjourney, Leonardo AI, and RunwayML for creative generation.",
        "Explore multimodal AI: text-to-image, text-to-video, and beyond.",
      ],
      takeaway:
        "Unleash creative AI — mastering visual, audio, and video generation systems.",
    },
    {
      number: "Module 6",
      title: "Advanced Prompt Engineering & Retrieval-Augmented Generation (RAG)",
      image: "/advancAI/RAG.jpg",
      activities: [
        "Craft complex prompts for LLMs and multimodal systems.",
        "Build RAG pipelines using LangChain, Pinecone, and ChromaDB.",
        "Integrate vector databases for smart, context-aware AI agents.",
      ],
      takeaway:
        "Master the art of precision prompting and context retrieval for powerful AI performance.",
    },
    {
      number: "Module 7",
      title: "Autonomous AI Agents & Multi-Agent Systems",
      image: "/advancAI/AI agents.jpg",
      activities: [
        "Build autonomous agents using AutoGPT, BabyAGI, and Relevance AI.",
        "Coordinate multiple agents using CrewAI and LangGraph.",
        "Design self-improving systems capable of complex workflows.",
      ],
      takeaway:
        "Learn how to create AI agents that collaborate, reason, and act autonomously.",
    },
    {
      number: "Module 8",
      title: "Reinforcement Learning & Decision-Making Systems",
      image: "/advancAI/decision making.jpg",
      activities: [
        "Explore RL algorithms: Q-learning, PPO, and policy gradients.",
        "Train models in OpenAI Gym and RLlib environments.",
        "Apply RL for robotics, gaming, and financial systems.",
      ],
      takeaway:
        "Develop intelligent systems capable of learning through trial, error, and reward.",
    },
    {
      number: "Module 9",
      title: "Explainable & Ethical AI",
      image: "/advancAI/ethical ai.jpg",
      activities: [
        "Use SHAP, LIME, and Captum for explainability.",
        "Detect and mitigate bias in datasets and predictions.",
        "Build transparency frameworks for ethical AI deployment.",
      ],
      takeaway:
        "Ensure your AI solutions are fair, explainable, and responsible.",
    },
    {
      number: "Module 10",
      title: "AI for Business Automation & Productivity",
      image: "/advancAI/business and automation.jpg",
      activities: [
        "Integrate Zapier AI, Make.com, and OpenAI APIs for business automation.",
        "Build smart CRMs and task automation bots.",
        "Analyze AI impact in HR, finance, and marketing workflows.",
      ],
      takeaway:
        "Leverage AI to streamline operations and boost workplace productivity.",
    },
    {
      number: "Module 11",
      title: "Computer Vision & Multimodal Fusion",
      image: "/advancAI/computervision.jpg",
      activities: [
        "Implement YOLOv8 for detection and segmentation.",
        "Combine vision-text models like CLIP, BLIP, and Flamingo.",
        "Work with Roboflow and OpenCV AI Kit for real-world projects.",
      ],
      takeaway:
        "Bridge vision and language with cutting-edge multimodal fusion systems.",
    },
    {
      number: "Module 12",
      title: "Natural Language Understanding & Semantic Search",
      image: "/advancAI/NLP.jpg",
      activities: [
        "Build semantic search using OpenAI embeddings, Cohere, and Sentence Transformers.",
        "Implement summarization and sentiment pipelines.",
        "Deploy NLU systems using LangChain and FAISS.",
      ],
      takeaway:
        "Master semantic AI — systems that understand meaning, not just words.",
    },
    {
      number: "Module 13",
      title: "AI Deployment, APIs & Cloud Integration",
      image: "/advancAI/AI deploy.jpg",
      activities: [
        "Deploy AI models via FastAPI, Docker, and Streamlit.",
        "Integrate with AWS SageMaker, GCP Vertex, or Hugging Face Spaces.",
        "Learn model scaling, versioning, and performance monitoring.",
      ],
      takeaway:
        "Turn prototypes into production — deploy AI systems at scale with cloud tools.",
    },
    {
      number: "Module 14",
      title: "Building Custom AI Tools & Apps",
      image: "/advancAI/custom ai tools.jpg",
      activities: [
        "Build chatbots and agents using LangChain + OpenAI API.",
        "Use Gradio and Streamlit for AI-powered web apps.",
        "Create interactive dashboards with live inference outputs.",
      ],
      takeaway:
        "Develop complete AI-powered apps — from interface to backend logic.",
    },
    {
      number: "Module 15",
      title: "The Future of AI – AGI, Multimodality & Next-Gen Systems",
      image: "/advancAI/AGI.jpg",
      activities: [
        "Explore frontier AI systems: GPT-5, Gemini Ultra, Claude 3 Opus.",
        "Understand the road to AGI: alignment, safety, and collaboration.",
        "Discuss multimodal, embodied, and agentic AI trends shaping the future.",
      ],
      takeaway:
        "Stay ahead of the curve by understanding where AI is heading next.",
    },
  ];

  const projects = [
    {
      category: "Build a Custom LLM",
      build: "Fine-tune and deploy a lightweight LLM using LoRA or QLoRA and Hugging Face Transformers.",
      imageUrl: "/advancAI/LLMproject.jpg",
    },
    {
      category: "Generative AI Creator",
      build: "Design multimodal generative systems — from text-to-image to text-to-video pipelines.",
      imageUrl: "/advancAI/Generative AI project.jpg",
    },
    {
      category: "AI Automation System",
      build: "Develop a full automation workflow integrating APIs, LangChain, and business AI tools.",
      imageUrl: "/advancAI/ai automation project.jpg",
    },
    {
      category: "Capstone Project",
      build: "Combine LLMs, diffusion models, and APIs to build your own next-gen AI application.",
      imageUrl: "/advancAI/capstoneproject.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-purple-900 text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-16 pb-10 px-4 text-center bg-zinc-900">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
          Advanced Artificial Intelligence Mastery: Building with Next-Gen Models, Tools & Techniques
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
          A deep-dive, project-driven program exploring the most advanced AI architectures, 
          generative systems, and deployment techniques powering the AI revolution.
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
          🧩 Capstone Projects & Tools
        </h2>
        <p className="text-center text-xl text-purple-300 mb-16 max-w-3xl mx-auto">
          Apply everything you’ve learned to build intelligent systems — from custom models 
          to production-ready AI tools using next-generation frameworks.
        </p>
        <BentoGrid items={projects} />
      </section>

      {/* Learning Outcomes */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Learning Outcomes</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Master advanced AI models — transformers, diffusion, and multimodal architectures.</li>
            <li>Fine-tune, deploy, and evaluate LLMs and generative systems efficiently.</li>
            <li>Develop autonomous agents and real-world AI applications.</li>
            <li>Understand AI ethics, explainability, and the road to AGI.</li>
            <li>Gain industry-ready experience using modern AI frameworks and APIs.</li>
          </ul>
        </div>

        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why Take This Course?</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Ideal for professionals, researchers, and AI enthusiasts ready for deep specialization.</li>
            <li>Hands-on labs with real-world frameworks like PyTorch, Hugging Face, and LangChain.</li>
            <li>Future-proof curriculum covering next-gen AI and deployment techniques.</li>
            <li>Capstone-level experience to prepare for roles in AI R&D and innovation.</li>
          </ul>
        </div>
      </section>

      {/* Sticky Enroll Button */}
      <div className="sticky bottom-0 left-0 right-0 bg-purple-900/70 backdrop-blur-sm p-5 z-50 text-center border-t border-indigo-700">
        <a href="#booking" className="inline-block w-full md:w-auto">
          <button className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg text-white text-xl font-bold hover:from-pink-700 hover:to-purple-800 transition duration-300 shadow-lg shadow-pink-600/40">
            Enroll Now - Advance Your AI Expertise
          </button>
        </a>
      </div>

      <Footer />
    </main>
  );
}
