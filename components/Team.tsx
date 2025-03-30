"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Team() {
  const testimonials = [
    {
      quote:
        "The mastermind behind everything. Handles server management, plugins, and keeps the community running smoothly.",
      name: "Anosh",
      designation: "Head of Engineering",
      src: "/img/mc1.png",
    },
    {
      quote:
        "Syawmoon is responsible for keeping the server’s community thriving. From hosting events to moderating chat, he ensures that everyone has a great experience.",
      name: "Syawmoon",
      designation: "Community Manager",
      src: "/img/mc3.png",
    },
    {
      quote:
        "Kirry is the creative mastermind behind the breathtaking builds on the server. She designs everything from spawn areas to custom landscapes.",
      name: "Kirry",
      designation: "Lead Builder",
      src: "/img/mc2.png",
    },
  ];
  return (
    <section className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-8">
        Meet The Team
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
