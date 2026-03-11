import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const musicAcademyHighlights = [
    {
      title: "Classical Training",
      description:
        "Master the art of classical music with our expert-led courses in vocal and instrumental disciplines.",
      link: "https://youracademy.com/classical-training",
    },
    {
      title: "Modern Music Production",
      description:
        "Learn to produce, mix, and master tracks using industry-standard tools and workflows.",
      link: "https://youracademy.com/music-production",
    },
    {
      title: "Live Performance Coaching",
      description:
        "Gain stage confidence and live show techniques from experienced performing artists.",
      link: "https://youracademy.com/live-performance",
    },
    {
      title: "Music Theory & Composition",
      description:
        "Build a strong foundation in music theory and learn to compose original pieces.",
      link: "https://youracademy.com/music-theory",
    },
    {
      title: "Instrument Mastery",
      description:
        "Personalized learning paths for guitar, piano, drums, violin, and more.",
      link: "https://youracademy.com/instrument-mastery",
    },
    {
      title: "Voice Training",
      description:
        "Refine your vocal techniques across genres with personalized coaching.",
      link: "https://youracademy.com/voice-training",
    },
  ];

  return (
    <div className="p-6 sm:p-8 md:p-12 min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl text-teal-500 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <HoverEffect items={musicAcademyHighlights} />
        </div>

        <div className="mt-10 text-center">
          <div className="flex flex-col items-center gap-6">
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
                View All Webinars
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
