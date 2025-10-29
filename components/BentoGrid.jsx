"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Example props interface
export function BentoGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-indigo-700/60 via-purple-800/40 to-gray-800/70 p-6 rounded-2xl shadow-2xl h-full flex flex-col items-center transition-all border border-purple-700/30"
        >
          <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={item.imageUrl}
              alt={item.category}
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-full text-center mt-2">
            <h3 className="text-xl font-bold text-purple-300 mb-2">{item.category}</h3>
            <p className="text-neutral-300">{item.build}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
