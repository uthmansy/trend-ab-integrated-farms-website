"use client";

import { HERO } from "@/constants/IMAGES";
import TopNav from "./TopNav";
import { useLayoutEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import Hero from "./Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".site-header",
        scrub: true,
        start: "top 0",
        end: "bottom 50%",
      },
    });

    tl.from(bgRef.current, { y: -100 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      ref={headerRef}
      className="relative site-header w-full h-screen text-white"
    >
      {/* Background Image as an Actual Element */}
      <div
        ref={bgRef}
        // data-scroll
        // data-scroll-speed="-0.3" // Adjusted speed for the parallax effect
        className="absolute inset-0 bg-cover bg-center z-0"
      >
        <img
          className="w-full object-cover"
          src={HERO.src}
          style={{
            filter: "brightness(30%)",
            height: "120%",
          }}
        />
      </div>

      <TopNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <Hero />
    </header>
  );
}
