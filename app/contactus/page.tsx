"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input, Textarea, Button, Select } from "@/components/ui/FormComponents";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const fieldVariants = {
  focused: { scale: 1.03, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
  unfocused: { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
};

const ContactUs = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-28 relative bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-b-3xl overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          {/* Optional decorative background shapes */}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">📬 Get in Touch with AIshine</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Have questions or want to explore our AI courses? We’re here to help students and corporate teams shine with AI.
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8"
        >
          {/* Hero illustration placeholder */}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-center items-start gap-12 py-20 px-4 md:px-24"
      >
        {/* Contact Form */}
        <div className="flex-1 bg-white p-10 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-100">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
          <form className="flex flex-col gap-5">
            {["name", "email", "phone", "role", "message"].map((field) => (
              <motion.div
                key={field}
                animate={focusedField === field ? "focused" : "unfocused"}
                variants={fieldVariants}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {field === "role" ? (
                  <Select
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black"
                  >
                    <option value="">Are you a Student or Corporate?</option>
                    <option value="student">Student</option>
                    <option value="corporate">Corporate</option>
                  </Select>
                ) : field === "message" ? (
                  <Textarea
                    placeholder="Your Message / Inquiry"
                    rows={5}
                    required
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black"
                  />
                ) : (
                  <Input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    required
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black"
                  />
                )}
              </motion.div>
            ))}

            <Button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white text-lg font-semibold py-3 rounded-xl shadow-lg hover:from-pink-600 hover:to-blue-600 transition-transform transform hover:scale-105"
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Other Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-5 bg-white/70 p-10 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-100"
        >
          <h2 className="text-3xl font-semibold mb-4 text-black">Other Contact Info</h2>
          <p className="flex items-center gap-3 text-gray-700"><Mail className="w-5 h-5 text-pink-500" /> divyum@aishine.com</p>
          <p className="flex items-center gap-3 text-gray-700"><Phone className="w-5 h-5 text-pink-500" /> +91 9058585435</p>
          <p className="flex items-center gap-3 text-gray-700"><MapPin className="w-5 h-5 text-pink-500" /> AIshine HQ, City, State, Country</p>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ContactUs;
