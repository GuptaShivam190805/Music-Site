"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "../utils/cn";

const musicSchoolTestimonials = [
  {
    title: "Perseverance",
    quote: "It does not matter how slowly you go as long as you do not stop.",
    name: "Confucius",
  },
  {
    title: "Courage",
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    name: "Maya Angelou",
  },
  {
    title: "Wisdom",
    quote: "Silence is the sleep that nourishes wisdom.",
    name: "Francis Bacon",
  },
  {
    title: "Passion",
    quote: "The only way to do great work is to love what you do.",
    name: "Steve Jobs",
  },
  {
    title: "Authenticity",
    quote: "Be yourself; everyone else is already taken.",
    name: "Oscar Wilde",
  },
  {
    title: "Hope",
    quote: "Keep your face to the sunshine and you cannot see a shadow.",
    name: "Helen Keller",
  },
  {
    title: "Growth",
    quote: "A journey of a thousand miles begins with a single step.",
    name: "Lao Tzu",
  },
  {
    title: "Balance",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    name: "Albert Einstein",
  },
  {
    title: "Dreams",
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    name: "Walt Disney",
  },
  {
    title: "Healing",
    quote: "The wound is the place where the Light enters you.",
    name: "Rumi",
  },
];

function MusicSchoolTestimonials() {
  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-black py-20 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-start gap-12 overflow-hidden">
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 dark:from-black/60 dark:to-black/20 z-0" />

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-black dark:text-white z-10 relative leading-tight tracking-tight max-w-4xl">
        Hear Our Harmony: <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500">
          Voices of Success
        </span>
      </h2>

      {/* Infinite Cards */}
      <div className="w-full max-w-6xl z-10 relative">
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

export default MusicSchoolTestimonials;
