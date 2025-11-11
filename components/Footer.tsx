"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  // helper to trigger same event as Navbar
  const handleOpenCategory = (category: string) => {
    window.dispatchEvent(
      new CustomEvent("openCourseCategory", { detail: category })
    );
    const section = document.getElementById("courses");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-gray-800 py-16 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        {/* Company */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-blue-700">AIShine</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link
                href="/aboutus"
                className="hover:text-blue-500 transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-blue-700">Programs</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <button
                onClick={() => handleOpenCategory("ai-fundamentals")}
                className="hover:text-blue-500 transition-colors text-left w-full cursor-pointer"
              >
                Student Courses
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOpenCategory("ai-for-business")}
                className="hover:text-blue-500 transition-colors text-left w-full cursor-pointer"
              >
                AI for Business
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOpenCategory("ai-project-labs")}
                className="hover:text-blue-500 transition-colors text-left w-full cursor-pointer"
              >
                AI Projects Lab
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOpenCategory("advanced-ai-topics")}
                className="hover:text-blue-500 transition-colors text-left w-full cursor-pointer"
              >
                Advanced AI Learning
              </button>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-blue-700">Connect</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link
                href="/contactus"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 mt-2">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-500 transition-transform transform hover:scale-110" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-6 h-6 text-gray-600 hover:text-red-500 transition-transform transform hover:scale-110" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-400 transition-transform transform hover:scale-110" />
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-blue-700">Legal</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link
                href="/privacy"
                className="hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-blue-500 transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/refund"
                className="hover:text-blue-500 transition-colors"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        © 2025 <span className="font-semibold text-blue-600">AIshine</span>. All
        Rights Reserved.
      </div>
    </motion.footer>
  );
}