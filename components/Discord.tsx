"use client";

import React from "react";
import { FaDiscord } from "react-icons/fa";

export function Discord() {
  return (
    <section className="text-white py-40">
      <div className="max-w-3xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10 rounded-xl shadow-xl bg-zinc-800 py-12">
        {/* Icon (Discord) */}
        <div className="text-indigo-400 flex-shrink-0">
          <FaDiscord
            size={160}
            className="drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-right">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Be Social!</h2>
          <p className="text-neutral-300 leading-relaxed mb-8 max-w-md text-right">
            Here on Origin Realms we think communication is the key to an
            amazing community. That’s why we value our Discord – it helps us
            connect with our favorite people ever – you! Join us and let’s
            create our origin together!
          </p>

          <a
            href="https://discord.gg/kandangalwi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            JOIN OUR DISCORD
          </a>
        </div>
      </div>
    </section>
  );
}
