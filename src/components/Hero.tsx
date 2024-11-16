import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div
      className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-8"
      data-scroll
      data-scroll-speed="3" // Adjusted for content parallax effect
    >
      <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4 text-white">
        Welcome to MyWebsite
      </h1>
      <p className="hero-description mb-8 text-xl max-w-2xl text-gray-200">
        Discover our exceptional services and how we can help you achieve your
        goals.
      </p>
      <Link
        href="/services"
        className="bg-primary animatee text-white px-6 py-3 rounded-full hover:bg-accent-light transition uppercase"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Hero;
