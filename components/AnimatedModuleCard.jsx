"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function AnimatedModuleCard({ module }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 16px 56px -8px #c084fc44" }}
      className="bg-gradient-to-tr from-blue-200/60 via-purple-300/30 to-pink-200/50 rounded-2xl flex flex-col md:flex-row mb-8 shadow-xl p-5 gap-6 border border-purple-400/20 dark:from-zinc-800 dark:to-zinc-900"
    >
      <div className="flex-shrink-0 flex items-center justify-center w-full md:w-52">
        <div className="w-48 h-32 rounded-xl overflow-hidden">
          <Image
            src={module.image}
            alt={module.number}
            width={192}
            height={128}
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex-1">

        {/* 🔹 Combined Heading */}
        <h3 className="font-bold text-xl mb-2 text-white">
          {module.number} : {module.title}
        </h3>

        {/* 🔹 Intro Line in White */}
        {module.intro && (
          <p className="text-white mb-4">
            {module.intro}
          </p>
        )}

        {/* 🔹 Activities Label */}
        <div className="text-md font-semibold mb-1 text-white">
          Activities :
        </div>

        <ul className="list-disc ml-5 mb-3 text-white">
          {module.activities.map((act, i) => (
            <li key={i}>{act}</li>
          ))}
        </ul>

        <div className="bg-gray-100 dark:bg-zinc-700 rounded p-3">
          <span className="font-semibold text-gray-900 dark:text-white">
            Takeaway:
          </span>{" "}
          <span className="text-gray-700 dark:text-gray-200">
            {module.takeaway}
          </span>
        </div>
      </div>
    </motion.div>
  );
}