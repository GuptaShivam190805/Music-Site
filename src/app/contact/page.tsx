"use client";

import React from "react";
import { Meteors } from "../../components/ui/meteors";

function ContactPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      
      {/* 🔥 Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/background-animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔥 Overlay for better readability */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm z-10" />

      {/* Card Content */}
      <div className="relative z-20 w-full max-w-xl">
        <div
          className="relative z-10 flex flex-col items-start justify-center overflow-hidden rounded-2xl border
          border-gray-300 dark:border-gray-800
          bg-white/90 dark:bg-gray-900/80 px-6 py-10 shadow-xl transition-colors duration-500"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Have a question, idea, or just want to say hello? Drop us a message
            below and we’ll get back to you as soon as possible.
          </p>

          <form className="w-full space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-blue-600 dark:bg-blue-700 px-4 py-2 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>

          {/* Meteors Animation */}
          <Meteors number={25} />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;