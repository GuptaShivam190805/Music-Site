"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode.toString());
    setIsDark(newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      aria-pressed={isDark}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`
        fixed top-4 right-4 z-50
        flex items-center justify-center gap-2
        px-3 py-2 sm:px-4 sm:py-2
        min-w-[44px] min-h-[44px]
        rounded-full text-sm sm:text-base font-medium
        transition-colors duration-300 ease-in-out
        bg-black text-white hover:bg-gray-800
        dark:bg-white dark:text-black dark:hover:bg-gray-200
        shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300
      `}
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
      <span className="hidden sm:inline">
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
