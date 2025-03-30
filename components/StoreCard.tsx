"use client";

import React from "react";

const coinOptions = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800];

export function StoreCard() {
  return (
    <div className="z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 mb-32">
      {coinOptions.map((coins, index) => (
        <div
          key={index}
          className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl bg-neutral-800 transition duration-300 hover:shadow-yellow-400/40 hover:scale-[1.02]"
        >
          {/* Card content */}
          <div className="w-full flex flex-col items-center justify-center py-10 px-6">
            {/* Top-left label */}
            <div className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-md shadow-md">
              {coins} Coins
            </div>

            {/* Coin Image */}
            <img
              src="/img/coins.png"
              alt={`${coins} Coins`}
              className="w-32 h-32 object-contain mb-6"
            />

            {/* Buy Button */}
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md shadow-md hover:bg-yellow-300 transition">
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
