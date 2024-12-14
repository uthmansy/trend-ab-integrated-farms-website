import { HERO_1, HERO_2, HERO_3 } from "@/constants/IMAGES";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import Container from "../Container";
import gsap from "gsap";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const titlesRef = useRef<HTMLHeadingElement[]>([]);
  const titleBgRef = useRef<HTMLDivElement>(null);

  // Memoize images array to avoid recalculations
  const images = useMemo(() => [HERO_1.src, HERO_2.src, HERO_3.src], []);
  const titles = [
    "Hello Welcome to Trend AB",
    "Modern Agriculture",
    "Progressive Farming",
  ];

  // GSAP Animation Handler
  useLayoutEffect(() => {
    if (!imagesRef.current[currentSlide]) return;
    const nextSlide = (currentSlide + 1) % images.length;

    const tl = gsap.timeline();
    tl.to(imagesRef.current[currentSlide], {
      opacity: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out", // Smooth fade-out and scale-down
    })
      .to(
        titlesRef.current[currentSlide],
        {
          opacity: 0,
          duration: 0.5,
          y: 20,
          ease: "back.out(1.7)", // Matches image fade-out
        },
        "-=0.3" // Overlap with the previous animation
      )
      .fromTo(
        imagesRef.current[nextSlide],
        { opacity: 0, scale: 1.2 },
        {
          opacity: 1,
          scale: 1.1,
          duration: 0.6,
          ease: "power4.out", // Adds dynamic entry with slight scaling
        },
        "-=0.5" // Slight overlap for seamless transition
      )
      .to(
        titleBgRef.current,
        {
          clipPath: "inset(0 0 0 100%)",
          duration: 0.5,
          ease: "power2.in", // Adds a smooth slide-out effect
        },
        "-=0.4"
      )
      .to(titleBgRef.current, {
        clipPath: "inset(0 0 0% 0%)",
        duration: 0.5,
        ease: "power2.out", // Reverses the effect smoothly
      })
      .fromTo(
        titlesRef.current[nextSlide],
        { opacity: 0, y: 20 }, // Starts slightly lower for a "pop-up" effect
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)", // Adds a bouncy, engaging effect
        }
      );

    return () => {
      tl.kill(); // Clean up the animation
    };
  }, [currentSlide]);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images]);

  // Navigation Handlers
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="h-[65vh] md:h-[85vh] relative text-white w-full overflow-hidden">
      {/* Navigation Buttons */}
      <div className="absolute right-0 bottom-0 flex flex-col space-y-3 p-5 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="border border-white rounded-full h-14 w-14 flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="border border-white rounded-full h-14 w-14 flex items-center justify-center"
        >
          ➝
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute z-10 w-full h-full top-0 left-0 bottom-0 right-0 flex md:items-center justify-center md:justify-normal items-end px-10">
        <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 w-fit md:ml-auto mb-5 md:mb-0">
          {images.map((_, index) => (
            <span
              key={index}
              className={`bg-white rounded-full h-3 w-3 ${
                index === currentSlide ? "opacity-100" : "opacity-50"
              }`}
            ></span>
          ))}
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed={-0.3}
        className="absolute top-0 left-0 w-full h-full"
      >
        {/* Images */}
        {images.map((image, index) => (
          <img
            ref={(el) => {
              if (el) imagesRef.current[index] = el;
            }}
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            loading="lazy" // Lazy loading for performance
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Text Content */}
      <Container>
        <div className="relative">
          <div className="w-full md:w-[40%] max-w-screen-md h-96 relative">
            <div
              ref={titleBgRef}
              className="absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-85"
            />
            {titles.map((title, index) => (
              <div
                ref={(el) => {
                  if (el) titlesRef.current[index] = el;
                }}
                key={index}
                className="absolute top-0 bottom-0 left-0 right-0 flex items-end p-10"
                style={{ opacity: index === currentSlide ? 1 : 0 }}
              >
                <div>
                  <h2
                    className={`text-3xl md:text-5xl uppercase font-bold tracking-wide mb-5 md:mb-0 opacity-80`}
                  >
                    {title}
                  </h2>
                  <p className="text-opacity-90 md:hidden">
                    Innovative solutions for wheat, grains, and profitable
                    farming ventures.
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-primary w-full max-w-screen-md bg-opacity-85 absolute hidden md:block left-[100%] top-[100%] p-10">
              <p className="opacity-80">
                Innovative solutions for wheat, grains, and profitable farming
                ventures.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
