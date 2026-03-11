"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. Streamline your workflow and boost productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-2xl font-bold shadow-lg">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real-time Changes",
    description:
      "Track every modification in real time. Say goodbye to version confusion and enjoy seamless updates.",
    content: (
      <div className="flex items-center justify-center w-full h-full p-4 bg-black">
        <img
          src="/pexels-junior-teixeira.webp"
          width={800}
          height={600}
          alt="Real-time collaboration demo"
          className="w-full h-auto rounded-2xl shadow-xl object-cover"
        />
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "Always work on the latest version with automatic updates. No more manual syncing—stay aligned effortlessly.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white text-2xl font-bold shadow-lg">
        Version Control
      </div>
    ),
  },
  {
    title: "Running Out of Content",
    description:
      "Let our tools help you generate and manage content effortlessly. Stay inspired and organized at all times.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-2xl font-bold shadow-lg">
        Running out of content
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <section className="w-full h-[48rem] py-12 px-4 sm:px-8 lg:px-16 bg-white dark:bg-black">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-zinc-800 dark:text-white">
        Why Choose Us
      </h2>

      <StickyScroll content={content} />

      <div className="mt-16 text-center">
        <a
          href="/get-started"
          className="inline-block bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
}

export default WhyChooseUs;
