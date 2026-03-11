"use client";

import Link from "next/link";
import React from "react";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 px-4 sm:px-6 bg-gray-900 min-h-screen">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl text-teal-500 font-semibold tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Learn with the Best
        </p>
      </div>

      {/* Course Grid */}
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient
                animate
                containerClassName="my-container"
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-xs sm:max-w-sm shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="p-6 flex flex-col items-center text-center h-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-neutral-200 mb-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-auto bg-black dark:bg-zinc-800 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-700"
                  >
                    Learn More →
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex flex-col items-center mt-10 gap-6">
        <Link
          href="/"
          className="group relative flex items-center justify-center w-[50px] h-[50px] bg-[#111827] rounded-full text-white font-semibold shadow-[0px_0px_0px_4px_rgba(180,160,255,0.253)] overflow-hidden transition-all duration-300 hover:w-[140px] hover:rounded-full"
        >
          <svg
            className="w-[12px] transition-all duration-300 group-hover:translate-y-[-200%] rotate-180"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="white" />
          </svg>
          <span className="absolute bottom-[-20px] text-white text-[0px] group-hover:text-[13px] group-hover:bottom-auto transition-all duration-300">
            View All Courses
          </span>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
