"use client";

import React, { useLayoutEffect } from "react";
import Container from "../Container";
import {
  SERVICES_BG,
  SERVICES_ICON_1,
  SERVICES_ICON_2,
  SERVICES_ICON_3,
} from "@/constants/IMAGES";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: SERVICES_ICON_1.src,
    title: "Robust Services",
    description:
      "Delivering comprehensive agricultural solutions tailored to meet the diverse needs of farmers, businesses, and communities.",
  },
  {
    icon: SERVICES_ICON_2.src,
    title: "Quality Products",
    description:
      "Offering premium agricultural products that ensure reliability, sustainability, and exceptional value.",
  },
  {
    icon: SERVICES_ICON_3.src,
    title: "Customer Satisfaction",
    description:
      "Prioritizing our customers with personalized support and unwavering commitment to exceeding expectations.",
  },
];

function Services() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".service",
      { opacity: 0, y: 50 }, // Start with the image completely hidden (width = 0)
      {
        opacity: 1,
        y: 0, // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".service",
          start: "top 70%", // Start animation when image enters viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  return (
    <section className="relative overflow-hidden">
      <img
        data-scroll
        data-scroll-speed={-0.2}
        src={SERVICES_BG.src}
        alt=""
        className="absolute w-full h-full top-0 left-0 opacity-30 object-cover"
      />
      <Container>
        <div className="py-24 md:py-28 flex flex-col space-y-10 text-center relative">
          <span className="uppercase">- Why Us -</span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-green-800">
            This is Why we are currently the Best
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="service px-14 py-24 flex flex-col items-center space-y-4 bg-white border border-b-8 border-b-green-800 border-opacity-40"
              >
                <div className="h-28 w-28 flex items-center justify-center rounded-full bg-green-200">
                  <img src={service.icon} alt="" className="w-14" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
