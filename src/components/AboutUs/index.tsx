"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import { HERO_1, HERO_2 } from "@/constants/IMAGES";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      customer: "John Doe",
      text: `The fertilizers from Trend AB Integrated Farms have transformed our yields. The team is knowledgeable, supportive, and always delivers on time. Highly recommend them to any farmer looking for reliable solutions!`,
    },
    {
      customer: "Usman Doe",
      text: `Working with Trend AB Integrated Farms has been a game-changer for our business. Their wheat and grains are consistently top-quality, and their commitment to sustainability aligns perfectly with our values.`,
    },
    {
      customer: "Shuaibu Doe",
      text: `Their agricultural consultancy has helped us implement modern techniques, improving efficiency and profitability. Trend AB truly understands the challenges farmers face and provides practical, effective solutions.`,
    },
  ];

  const titleRef = useRef(null);
  const firstContentRef = useRef(null);
  const bgOneRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: bgOneRef.current,
        start: "top 40%", // Start animation when image enters viewport
        // toggleActions: "play none none none", // Play animation once
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-img-area",
        start: "top 80%", // Start animation when image enters viewport
        end: "bottom 40%",
        // toggleActions: "play none none none", // Play animation once
        scrub: true,
      },
    });
    tl1
      .fromTo(
        bgOneRef.current,
        { width: "0%" }, // Start with the image completely hidden (width = 0)
        {
          width: "50%", // Expand to full width
          duration: 0.5, // Duration of the animation
          ease: "power4.out", // Smooth easing effect
        }
      )
      .fromTo(
        ".about-comp-2",
        { opacity: 0, y: 50 }, // Start with the image completely hidden (width = 0)
        {
          opacity: 1,
          y: 0, // Expand to full width
          duration: 1.5, // Duration of the animation
          ease: "power3.out", // Smooth easing effect
          stagger: 0.3,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%", // Start animation when image enters viewport
            // toggleActions: "play none none none", // Play animation once
          },
        }
      );
    // tl2.to("#about-img-area", {
    //   scale: 1.2, // Expand to full width
    // });
    gsap.fromTo(
      [titleRef.current, firstContentRef.current],
      { opacity: 0, y: 50 }, // Start with the image completely hidden (width = 0)
      {
        opacity: 1,
        y: 0, // Expand to full width
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing effect
        stagger: 0.3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%", // Start animation when image enters viewport
          // toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials]);

  // Navigation Handlers
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 lg:gap-72 py-24 md:py-40">
          <div ref={titleRef}>
            <SectionTitle>About Us</SectionTitle>
          </div>
          <div>
            <p ref={firstContentRef}>
              At Trend AB Integrated Farms, we are dedicated to revolutionizing
              agriculture with innovative solutions. Specializing in fertilizer
              production, grain cultivation, and sustainable farming, we empower
              farmers to achieve abundant harvests.
            </p>
          </div>
        </div>
      </Container>
      <div className="relative py-24 md:py-40 bg-primary md:bg-white">
        <div className="absolute bottom-0 right-0 w-[50%] bg-gray-200 h-56 hidden md:block" />
        <div
          ref={bgOneRef}
          className="absolute w-[50%] left-0 bottom-0 top-0 bg-primary "
        />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40 lg:gap-72 mb-24 md:mb-28 relative text-center md:text-left">
            <div>
              <p className="about-comp-2 text-2xl md:text-4xl text-accent mb-10 md:mb-20">
                Our expertise and dedication help farmers maximize productivity
              </p>
              <Link
                href={"/about"}
                className="about-comp-2 px-10 py-4 border border-accent text-accent rounded-full uppercase"
              >
                Read More
              </Link>
            </div>
            <div className="text-accent md:text-inherit">
              <h3 className="about-comp-2 text-2xl md:text-5xl mb-5 md:mb-8 font-semibold">
                We Give Back
              </h3>
              <p className="about-comp-2">
                Our commitment to quality and excellence ensures we deliver
                value from farm to market. With a focus on wheat, grains, and
                modern agricultural practices, we are proud to be a trusted
                partner for growth and prosperity.
              </p>
            </div>
          </div>
          <div
            id="about-img-area"
            className=" aspect-[2/3] md:aspect-[9/4] w-full relative flex"
          >
            <div className="w-14 md:w-28 bg-accent"></div>
            <div className="flex-1 relative flex items-center justify-center">
              <img
                src={HERO_2.src}
                alt=""
                className="w-full h-full object-cover mix-blend-multiply absolute top-0 left-0 bottom-0 right-0 "
              />
              <h2 className="text-white text-4xl md:text-7xl text-center opacity-80 italic">
                Cultivating Prosperity, Harvesting Tomorrow.
              </h2>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative">
        <div className="absolute top-0 right-0 w-[50%] bg-gray-200 h-[80%] hidden md:block" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-28 md:gap-40 lg:gap-72 py-24 md:py-40 relative">
            <div className="flex flex-col space-y-8">
              <p>
                At Trend AB Integrated Farms, we offer a comprehensive range of
                agricultural services designed to meet the diverse needs of
                farmers and agribusinesses. Our fertilizer production division
                provides high-quality, nutrient-rich products tailored to
                enhance soil health and boost crop yields. We specialize in the
                cultivation and distribution of premium wheat and grains,
                ensuring a steady supply of high-grade produce for local and
                international markets.
              </p>
              <p>
                In addition, we offer expert agricultural consultancy, sharing
                innovative solutions and sustainable farming practices to help
                farmers optimize their operations. From soil preparation to
                harvest, our services are crafted to empower the agricultural
                community and drive food security.
              </p>
              <Link
                href={"/about"}
                className="w-fit px-10 py-4 border border-primary text-primary rounded-full uppercase"
              >
                Read More
              </Link>
            </div>
            <div>
              <div className="md:-mt-20 text-primary flex flex-col space-y-8">
                <h3 className="uppercase text-sm font-bold relative">
                  See what our customers are saying{" "}
                  <span className="absolute left-0 -bottom-3 h-[2px] opacity-70 w-24 bg-primary"></span>
                </h3>
                <div className="relative">
                  <p className="text-2xl md:text-4xl invisible">
                    {testimonials[0].text}
                  </p>
                  {testimonials.map((item, index) => (
                    <p
                      key={index}
                      className={`absolute top-0 transition-all duration-700 text-2xl md:text-4xl italic ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.text}
                    </p>
                  ))}
                </div>
                <div className="relative">
                  {testimonials.map((item, index) => (
                    <p
                      key={index}
                      className={`absolute top-0 left-0 text-sm uppercase font-semibold transition-all duration-700 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.customer} - Customer
                    </p>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="border border-primary rounded-full h-14 w-14 flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="border border-primary rounded-full h-14 w-14 flex items-center justify-center"
                  >
                    ➝
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default AboutUs;
