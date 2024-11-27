import React from "react";
import Container from "../Container";
import ButtonLink from "../ButtonLink";

function Hero() {
  return (
    <div className="md:relative h-[50vh] md:h-[80vh] flex items-center">
      <Container>
        <div className="z-30 relative">
          <div className="flex flex-col space-y-7 md:space-y-9 max-w-lg">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold italic">
              Boko Agro Allied
            </h1>
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
