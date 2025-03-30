"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="text-white py-6 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2025 KandangAlwi. All rights reserved.</p>

        <div className="flex space-x-5 text-xl">
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            aria-label="GitHub"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
}
