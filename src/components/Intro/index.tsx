"use client";
import { INTRO_1, LEAF } from "@/constants/IMAGES";
import React, { useLayoutEffect, useRef } from "react";
import ButtonLink from "../ButtonLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Intro() {
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      imgRef.current,
      { width: "0%" }, // Start with the image completely hidden (width = 0)
      {
        width: "100%", // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 40%", // Start animation when image enters viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 }, // Start with the image completely hidden (width = 0)
      {
        opacity: 1,
        y: 0, // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%", // Start animation when image enters viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-wrap overflow-hidden">
      <div className="hidden md:block w-full md:w-1/2 lg:w-1/3">
        <img
          ref={imgRef}
          data-scroll
          data-scroll-speed={-0.5}
          src={INTRO_1.src}
          alt=""
          className="w-full object-cover h-[120%] -mt-56"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 py-24 md:py-40 px-5 md:pl-24 relative">
        <div
          ref={contentRef}
          className="flex flex-col space-y-5 md:space-y-7 max-w-screen-sm"
        >
          <span className="uppercase">About Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-green-800">
            Your partner in sustainable agricultural innovation
          </h2>
          <h3 className="italic">Empowering Agriculture, Transforming Lives</h3>
          <p>
            We are Nigeria’s new and leading agri-solutions provider, offering
            diverse products and services across the farming value chain.
            Starting our operations from Kano’s first automated fertiliser
            blending plant at Kunture, Ungogo Road in 2020.
          </p>
          <ButtonLink href="/about">Find Out More..</ButtonLink>
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            data-scroll
            data-scroll-speed={-0.2}
            src={LEAF.src}
            alt=""
            className="w-56 md:w-96 max-w-xl opacity-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
