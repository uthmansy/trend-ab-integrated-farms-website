"use client";
import CarouselTest from "@/components/CarouselTest";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { useEffect } from "react";

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
    <div>
      <Header />
      <Intro />
      <Services />
      <Mission />
      <Products />
      <Team />
      <Footer />
      {/* <CarouselTest /> */}
    </div>
  );
}
