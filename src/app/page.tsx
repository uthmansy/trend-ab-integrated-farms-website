"use client";
import Header from "@/components/Header";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsapTimelines from "./hooks/useGsapTimelines";
import About from "@/components/About";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { scrollRef } = useGsapTimelines();

  return (
    <div id="scroll-container" ref={scrollRef} data-scroll-container>
      <Header />
      <About />
    </div>
  );
}
