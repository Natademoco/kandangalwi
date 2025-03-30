"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Realms() {
  const realms = [
    {
      name: "Vanilla",
      image: "/img/realms/vanilla.png",
    },
    {
      name: "Survival",
      image: "/img/realms/survival.png",
    },
    {
      name: "Skyblock",
      image: "/img/realms/skyblock.png",
    },
    {
      name: "Acid Island",
      image: "/img/realms/acidisland.png",
    },
    {
      name: "OneBlock",
      image: "/img/realms/oneblock.png",
    },
  ];

  return (
    <section className="mt-120 md:mt-0 h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-8">
        Our Realms
      </h1>
      <InfiniteMovingCards items={realms} direction="right" speed="slow" />
    </section>
  );
}
