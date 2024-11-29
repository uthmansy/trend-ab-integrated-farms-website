"use client";

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function CarouselTest() {
  const [currentEl, setCurrentEl] = useState(0);
  const elRef = useRef<HTMLDivElement[]>([]);
  const el2Ref = useRef<HTMLDivElement[]>([]);

  const els = ["one", "two", "three"];
  const titles = ["title one", "title two", "title three"];

  const nextSlide = () => {
    setCurrentEl((prevIndex) => (prevIndex + 1) % els.length);
  };

  const prevSlide = () => {
    setCurrentEl((prevIndex) =>
      prevIndex === 0 ? els.length - 1 : prevIndex - 1
    );
  };

  const entry = (tl: gsap.core.Timeline) => {
    tl.fromTo(
      elRef.current[(currentEl + 1) % els.length],
      { y: 10, x: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  };

  useLayoutEffect(() => {
    if (!elRef.current) return;

    // Create and manage the timeline
    const tl = gsap.timeline();

    // Exit animation
    tl.to(elRef.current[currentEl], {
      opacity: 0,
      duration: 0.5,
      x: 10,
    });
    // tl.to(el2Ref.current[0], {
    //   opacity: 0,
    //   duration: 0.5,
    // });

    // Entry animation
    // tl.to(el2Ref.current[0], { opacity: 1, duration: 0.5 });
    entry(tl);
  }, [currentEl]); // Dependency array ensures the effect runs on `currentEl` change

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEl((prevIndex) => (prevIndex + 1) % els.length);
    }, 3000); // Change content every 3 seconds
    return () => clearInterval(interval);
  }, [els.length]);

  return (
    <div>
      <div className="relative h-5">
        {els.map((element, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) elRef.current[index] = el;
            }}
            className="absolute opacity-0"
          >
            {element}
          </div>
        ))}
      </div>

      <div
        ref={(el) => {
          if (el) el2Ref.current[0] = el;
        }}
        className="animate"
      >
        hello 2
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default CarouselTest;
