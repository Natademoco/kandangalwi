"use client";

import { useState } from "react";
import Image from "next/image";
import heroImg from "public/img/hero-img.png";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kandangalwi.me").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const words = ["build", "explore", "hang out", "have fun"];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-img.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-8">
          Welcome to Kandang Alwi
          <br />a place to
          <FlipWords words={words} />
        </h1>
        <p className="text-white max-w-xl mb-6 w-85 md:w-200">
          Kandangalwi is a cozy and creative Minecraft server where over{" "}
          <strong>500+ members</strong> gather to build, explore, and hang out.
          Come join the fun!
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          onClick={handleCopy}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
            copied ? "bg-green-500 text-white" : "bg-white text-black"
          }`}
        >
          <span>{copied ? "IP Copied!" : "kandangalwi.me"}</span>
        </HoverBorderGradient>
      </div>
    </section>
  );
};

export default Hero;
