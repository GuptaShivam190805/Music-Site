"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 pt-32 px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <TextHoverEffect
          text={`All Courses ${courseData.courses.length}`}
          textSize="text-6xl"
        />
      </div>

      {/* Course Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {courseData.courses.map((course) => (
          <CardContainer
            key={course.id}
            className="inter-var w-full sm:w-[22rem] md:w-[28rem]"
          >
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              {/* Title */}
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={course.image || "/images/default.jpg"}
                  alt={course.title}
                  className="h-52 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-6 sm:mt-10">
                <CardItem
                  translateZ={20}
                  as="span"
                  className="text-sm text-neutral-600 dark:text-white"
                >
                  Instructor: {course.instructor}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  ₹{course.price}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Page;
