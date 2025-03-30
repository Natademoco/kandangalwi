"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { StoreCard } from "./StoreCard";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function Layout() {
  const placeholders = ["Enter your nickname"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="relative min-h-dvh w-full flex items-center justify-center bg-white dark:bg-black mb-2">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Main content with padding from navbar */}
      <div className="relative z-20 flex flex-col items-center justify-start w-full max-w-screen-md px-4 space-y-8 pt-32 md:pt-32">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <StoreCard />
      </div>
    </div>
  );
}
