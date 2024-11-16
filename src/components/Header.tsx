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
        data-scroll-speed="-5" // Adjusted speed for the parallax effect
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${HERO.src}')` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      <TopNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <Hero />
    </header>
  );
}
