"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoGrid } from "@/components/BentoGrid";
import { AnimatedModuleCard } from "@/components/AnimatedModuleCard";

export default function DataScienceWithPython() {
  const modules = [
    {
      number: "Module 1",
      title: "Introduction to Data Science & Python Basics",
      image: "/Datasciencepython.jpg",
      activities: [
        "Understand what Data Science is and why it’s essential today.",
        "Set up Python using Anaconda or Google Colab.",
        "Write your first Python program with variables, data types, and operations.",
      ],
      takeaway:
        "Get familiar with Python basics and how data drives real-world insights.",
    },
    {
      number: "Module 2",
      title: "Working with Data – Lists, Dictionaries & Libraries",
      image: "/listdic.jpg",
      activities: [
        "Learn Python data structures like lists, tuples, and dictionaries.",
        "Introduction to NumPy for handling numerical data.",
        "Load and manage datasets from CSV or Excel files.",
      ],
      takeaway:
        "Learn to organize, load, and handle data efficiently using Python.",
    },
    {
      number: "Module 3",
      title: "Data Cleaning & Preparation",
      image: "/dataclean.jpg",
      activities: [
        "Identify and handle missing data and outliers.",
        "Clean data using Pandas: dropna, fillna, replace.",
        "Combine, sort, and filter datasets like a pro.",
      ],
      takeaway:
        "Master the art of cleaning messy data for accurate analysis.",
    },
    {
      number: "Module 4",
      title: "Data Analysis & Statistics Made Easy",
      image: "/dataeasy.png",
      activities: [
        "Use Pandas to explore data with describe(), value_counts(), and groupby().",
        "Calculate mean, median, mode, and correlations.",
        "Find hidden trends in real datasets.",
      ],
      takeaway:
        "Gain confidence in statistical analysis and pattern recognition.",
    },
    {
      number: "Module 5",
      title: "Data Visualization with Matplotlib & Seaborn",
      image: "/matplotlib.jpg",
      activities: [
        "Create line graphs, bar charts, scatter plots, and pie charts.",
        "Use Seaborn for beautiful, readable visualizations.",
        "Turn data insights into stories with visuals.",
      ],
      takeaway:
        "Learn to visualize data insights clearly using Python’s best visualization libraries.",
    },
    {
      number: "Module 6",
      title: "Introduction to Machine Learning (Mini Preview)",
      image: "/mlintro.jpg",
      activities: [
        "Understand the link between data science and machine learning.",
        "Differentiate between supervised and unsupervised learning.",
        "Hands-on: Predict student grades using linear regression with scikit-learn.",
      ],
      takeaway:
        "Get a sneak peek into machine learning and prediction modeling.",
    },
    {
      number: "Module 7",
      title: "Real-World Project & Presentation",
      image: "/Real World ML.jpg",
      activities: [
        "Pick a topic (sports, education, or environment) and analyze real data.",
        "Clean → analyze → visualize → present findings.",
        "Present your 3-slide ‘Data Story’ with visuals and insights.",
      ],
      takeaway:
        "Apply everything learned in a full mini-project, like a real data scientist.",
    },
  ];

  const projects = [
    {
      category: "Data Story Project",
      build: "Create a 3-slide presentation from real data — tell stories with numbers and visuals.",
      imageUrl: "/Data Story.jpg",
    },
    {
      category: "Weather Data Analyzer",
      build: "Analyze daily weather trends using Pandas and visualize them with Matplotlib.",
      imageUrl: "/weather.jpg",
    },
    {
      category: "Sports Insights Dashboard",
      build: "Explore sports statistics to find trends and create charts with Seaborn.",
      imageUrl: "/sports.jpg",
    },
    {
      category: "Mini ML Predictor",
      build: "Use scikit-learn to predict grades, prices, or trends from sample datasets.",
      imageUrl: "/grades.webp",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-16 pb-10 px-4 text-center bg-blue-900">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
          Data Science with Python: Turning Data into Decisions
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
          Learn how to collect, clean, analyze, and visualize data to discover
          insights — building a foundation for AI, ML, and research.
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
          📊 What You'll Build
        </h2>
        <p className="text-center text-xl text-purple-300 mb-16 max-w-3xl mx-auto">
          Get hands-on with Python and data — build real projects that turn raw
          information into knowledge.
        </p>
        <BentoGrid items={projects} />
      </section>

      {/* Learning Outcomes Section */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Learning Outcomes</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Understand the data science process from start to finish.</li>
            <li>Use Python confidently for data analysis and visualization.</li>
            <li>Apply libraries like NumPy, Pandas, Matplotlib, and Seaborn effectively.</li>
            <li>Develop critical thinking to turn raw data into meaningful insights.</li>
            <li>Be prepared for advanced AI and machine learning concepts.</li>
          </ul>
        </div>

        <div className="bg-purple-700 bg-opacity-40 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Why Take This Course?</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-200">
            <li>Project-based and interactive — learn by doing, not memorizing.</li>
            <li>Teaches the exact tools used in real-world data science.</li>
            <li>Perfect for students curious about AI, research, and analytics.</li>
            <li>Fun, visual, and practical — zero coding experience needed!</li>
          </ul>
        </div>
      </section>

      {/* Sticky Enroll Button */}
      <div className="sticky bottom-0 left-0 right-0 bg-purple-900/70 backdrop-blur-sm p-5 z-50 text-center border-t border-indigo-700">
        <a href="#booking" className="inline-block w-full md:w-auto">
          <button className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg text-white text-xl font-bold hover:from-pink-700 hover:to-purple-800 transition duration-300 shadow-lg shadow-pink-600/40">
            Enroll Now - Start Your Data Science Journey
          </button>
        </a>
      </div>

      <Footer />
    </main>
  );
}
