"use client";
import React, { useLayoutEffect } from "react";
import { INTRO_1 } from "@/constants/IMAGES";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Item {
  title: string;
  description: string;
}

const items: Item[] = [
  {
    title: "Our Mission",
    description:
      "Building exceptional value in the global market by delivering high-quality and cost effective solutions to our customers.",
  },
  {
    title: "Our Vission",
    description:
      "To Become a very strong and innovative manufacturing,blending, distribution, infrastructural Service Provider to be reckoned with globally.",
  },
  {
    title: "Our Future",
    description:
      "The business climate is rapidly changing and only dynamic organizations can cope. This explains why we are constantly monitoring the environment, consolidating our existing strength and exploring fresh ideas not only to maintain a healthy existence, but also to create better opportunities that will always guarantee us a future.",
  },
];

function Mission() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".mission",
      { opacity: 0, x: 50 }, // Start with the image completely hidden (width = 0)
      {
        opacity: 1,
        x: 0, // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".mission",
          start: "top 70%", // Start animation when image enters viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  return (
    <section className="max-w-full overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 z-0">
          <img
            data-scroll
            data-scroll-speed={-0.5}
            src={INTRO_1.src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-800 md:w-2/3 text-white py-24 md:py-28 px-5 md:pl-0 md:px-10 z-30 relative">
          <div className="max-w-screen-md flex flex-col space-y-14">
            {items.map((item, index) => (
              <div
                key={index}
                className="mission flex items-start space-x-10 md:-ml-7"
              >
                <span className="flex items-center justify-center border rounded-full h-14 w-14 bg-white text-green-800 ">
                  {index + 1}
                </span>
                <div className="flex flex-1 flex-col space-y-4">
                  <h3 className="font-bold uppercase">{item.title}</h3>
                  <p className="opacity-85">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
