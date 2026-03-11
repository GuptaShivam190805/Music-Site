"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    checkDarkMode();

    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-auto min-h-[100vh] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto px-4 sm:px-6 py-10">
      {/* Spotlight background */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 opacity-100"
        fill={isDark ? "lightgray" : "white"}
        fillOpacity={isDark ? 0.15 : 0.21}
      />

      {/* Content */}
      <div className="relative z-10 w-full text-center space-y-6 sm:space-y-8 max-w-3xl mx-auto mt-16 sm:mt-24">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-balance bg-clip-text text-transparent 
          bg-gradient-to-b from-black to-gray-600 
          dark:from-neutral-50 dark:to-neutral-400"
        >
          Master the art of music
        </h1>

        <p className="font-normal text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-md sm:max-w-xl mx-auto px-2 sm:px-0">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether {`you're`} a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>

        <div className="pt-2">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
