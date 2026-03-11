"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black h-full  text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">🎵 Master the Art of Music</h2>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Unlock your musical potential with expert instructors, top-notch
            resources, and a passionate community.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-white hover:text-blue-500" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-pink-500" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-white hover:text-red-500" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-sky-500" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Instructors</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <p className="text-sm text-gray-400">
            📍 123 Melody Lane, Delhi, India
          </p>
          <p className="text-sm text-gray-400 mt-2">📞 +91 98765 43210</p>
          <p className="text-sm text-gray-400 mt-2">
            📧 hello@masterthemusic.com
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Master the Art of Music. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
