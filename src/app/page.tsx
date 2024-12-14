"use client";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      //@ts-ignore
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        tablet: {
          breakpoint: 0,
        },
      });
    })();
  }, []);

  return (
    <div className="">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </div>
  );
}
