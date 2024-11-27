import { INTRO_1, LEAF } from "@/constants/IMAGES";
import React from "react";
import ButtonLink from "../ButtonLink";

function Intro() {
  return (
    <section className="flex flex-wrap">
      <div className="hidden md:block w-full md:w-1/2 lg:w-1/3">
        <img src={INTRO_1.src} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 py-24 md:py-40 px-5 md:pl-24 relative">
        <div className="flex flex-col space-y-5 md:space-y-7 max-w-screen-sm">
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
