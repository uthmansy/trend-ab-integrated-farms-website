import React, { useEffect, useLayoutEffect, useRef } from "react";
import Container from "../Container";
import ButtonLink from "../ButtonLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  currentImageIndex: number;
}

const titles = [
  "Boko Agro Allied",
  "Agricultural Sustainability",
  "Modern Agriculture",
];

function Hero({ currentImageIndex }: Props) {
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const hideTimelines = useRef(
    titles.map(() => gsap.timeline({ paused: true }))
  );
  const showTimelines = useRef(
    titles.map(() => gsap.timeline({ paused: true }))
  );

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize hide and show animations
    hideTimelines.current.forEach((tl, index) => {
      tl.to(titleRefs.current[index], {
        opacity: 0,
        y: 10, // Hide the element
      });
    });

    showTimelines.current.forEach((tl, index) => {
      tl.to(titleRefs.current[index], {
        opacity: 1,
        y: 0, // Show the element
      });
    });

    // Ensure refs array length matches titles
    titleRefs.current = titleRefs.current.slice(0, titles.length);
  }, []);

  useEffect(() => {
    // Restart animations for the current index
    hideTimelines.current[currentImageIndex]?.restart();
    showTimelines.current[(currentImageIndex + 1) % titles.length]?.restart();
  }, [currentImageIndex]);

  return (
    <div className="md:relative h-[50vh] md:h-[80vh] flex items-center">
      <Container>
        <div className="z-30 relative">
          <div className="flex flex-col space-y-7 md:space-y-9 max-w-lg">
            <div>
              {titles.map((title, index) => (
                <h1
                  key={index}
                  ref={(el) => {
                    titleRefs.current[index] = el;
                  }}
                  className={`text-4xl md:text-6xl lg:text-7xl font-heading font-semibold italic opacity-0 max-w-lg ${
                    (currentImageIndex + 1) % titles.length === index
                      ? "static"
                      : "absolute"
                  }`}
                >
                  {title}
                </h1>
              ))}
            </div>

            <p className="opacity-70">
              Empowering Agriculture, Transforming Lives. Innovative solutions
              for a sustainable farming future.
            </p>
            <div className="flex space-x-3">
              <ButtonLink href="/about">Read More</ButtonLink>
              <ButtonLink type="white" href="/about">
                Contact Us ➝
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
