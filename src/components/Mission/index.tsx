import React from "react";
import Container from "../Container";
import { INTRO_1 } from "@/constants/IMAGES";

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
  return (
    <section className="max-w-full overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={INTRO_1.src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-800 md:w-2/3 text-white py-24 md:py-28 px-5 md:pl-0 md:px-10 ">
          <div className="max-w-screen-md flex flex-col space-y-14">
            {items.map((item, index) => (
              <div key={index} className="flex items-start space-x-10 md:-ml-7">
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
