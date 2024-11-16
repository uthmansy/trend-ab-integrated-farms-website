import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";
import { aboutTimelines, heroTimeline } from "../helpers/gsap/timelines";

interface Return {
  scrollRef: React.MutableRefObject<null>;
}

function useGsapTimelines(): Return {
  const scrollRef = useRef(null);
  const loco = useRef<any>(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    loco.current = new LocomotiveScroll({
      el: scrollRef.current || undefined,
      smooth: true,
      multiplier: 0.4, // Adjust scroll speed
      tablet: {
        breakpoint: 0,
      },
    });

    // loco.current.on("scroll", ScrollTrigger.update);

    // Tell ScrollTrigger to use Locomotive Scroll for scroll events
    // ScrollTrigger.scrollerProxy(scrollRef.current, {
    //   scrollTop(value) {
    //     if (value !== undefined) {
    //       loco.current.scrollTo(value, { duration: 0 });
    //     } else {
    //       //@ts-ignore
    //       return loco.current.scroll.instance.scroll.y; // Return current scroll position
    //     }
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     };
    //   },

    //   pinType:
    //     //@ts-ignore
    //     scrollRef.current && scrollRef.current.style.transform
    //       ? "transform"
    //       : "fixed",
    // });

    // heroTimeline(scrollRef);
    // aboutTimelines(scrollRef);

    // Refresh ScrollTrigger and Locomotive Scroll
    // ScrollTrigger.addEventListener("refresh", () => {
    //   loco.current.update();
    // });

    // ScrollTrigger.refresh();

    return () => {
      loco.current.destroy();
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return { scrollRef };
}

export default useGsapTimelines;
