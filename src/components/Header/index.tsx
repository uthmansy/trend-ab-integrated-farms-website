import { HERO_1, HERO_2, HERO_3 } from "@/constants/IMAGES";
import { useState, useEffect } from "react";
import TopNav from "./TopNav";
import Hero from "./Hero";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [HERO_1.src, HERO_2.src, HERO_3.src];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="relative md:h-screen w-full overflow-hidden text-white">
      <div>
        {images.map((image, index) => (
          <img
            data-scroll
            data-scroll-speed={-0.3}
            key={index}
            src={image}
            alt="hero image"
            className={`absolute top-0 left-0 right-0 -bottom-10 w-full h-full object-cover transition-opacity duration-500 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="bg-black/30 backdrop-blur-md w-full max-w-screen-lg h-full absolute left-0 top-0 bottom-0"></div>
      </div>
      <TopNav />
      <Hero currentImageIndex={currentImageIndex} />
      <div className="absolute bottom-0 right-0 flex">
        <button
          onClick={prevSlide}
          className="bg-white text-gray-800  p-3 md:p-5"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="bg-green-800 text-white  p-3 md:p-5"
        >
          ➝
        </button>
      </div>
    </header>
  );
};

export default Header;
