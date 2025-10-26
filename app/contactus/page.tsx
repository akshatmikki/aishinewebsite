"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input, Textarea, Button, Select } from "@/components/ui/FormComponents";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const fieldVariants = {
  focused: { scale: 1.03, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" },
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
        className="text-center py-24 md:py-28 relative bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-b-3xl overflow-hidden px-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          📬 Contact AIshine Now
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Whether you’re a student exploring AI or a company seeking corporate
          training — we’re just a message away!
        </p>
      </motion.section>

      {/* Contact Form + Illustration Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-center items-center gap-12 py-16 md:py-20 px-6 md:px-24"
      >
        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 w-full">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h2>
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:ring-2 focus:ring-blue-400 outline-none"
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                ) : (
                  <Input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    required
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                )}
              </motion.div>
            ))}

            <Button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white text-lg font-semibold py-3 rounded-xl shadow-lg hover:from-pink-600 hover:to-blue-600 transition-transform transform hover:scale-105"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Side Illustration (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex flex-1 justify-center"
        >
          <Image
            src="/contactus.png"
            alt="Contact Illustration"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-contain"
          />
        </motion.div>
      </motion.section>

      {/* Map + Contact Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-stretch gap-8 px-6 md:px-20 pb-20"
      >
        {/* Map */}
        <div className="flex-1 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            title="AIshine Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.027361399954!2d77.07917424355492!3d28.479044869428204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19218dfb3bc3%3A0xd6cff62c744db76b!2sVatika%20Triangle%2C%20Sector%2028%2C%20Maruti%20Housing%20Colony%2C%20Sarhol%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1761460650901!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="flex-1 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Visit or Reach Us
          </h2>

          <div className="flex flex-col gap-4 text-gray-700 text-base md:text-lg">
            <p className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-pink-500 mt-1 shrink-0" />
              AIshine HQ, Vatika Triangle, Sector 28, Gurugram, Haryana
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-pink-500 shrink-0" />
              +91 9058585435
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-pink-500 shrink-0" />
              divyum@aishine.com
            </p>
            <p className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-pink-500 shrink-0" />
              Mon–Fri: 9:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ContactUs;
