"use client";

import { HERO } from "@/constants/IMAGES";
import TopNav from "./TopNav";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Hero from "./Hero";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative site-header w-full h-screen text-white overflow-hidden">
      {/* Background Image as an Actual Element */}
      <div
        data-scroll
        data-scroll-speed="-0.3" // Adjusted speed for the parallax effect
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${HERO.src}')`,
          filter: "brightness(30%)",
        }}
      ></div>

      <TopNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <Hero />
    </header>
  );
}
