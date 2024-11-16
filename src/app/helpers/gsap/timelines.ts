import gsap from "gsap";

export const aboutTimelines = (scrollRef: React.MutableRefObject<null>) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-us-section",
      // scroller: scrollRef.current,
      start: "top 80%",
      end: "bottom 100%",
      scrub: true,
      markers: true,
    },
  });

  timeline
    .fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    )
    .fromTo(".slide-in", { x: "-100%" }, { x: "0%", duration: 1 }, "-=0.8");
};

export const heroTimeline = (scrollRef: React.MutableRefObject<null>) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animate", // Start the timeline when .animate is triggered
      // scroller: scrollRef.current, // Use the Locomotive Scroll container
      start: "top 80%", // Start when the top of .animate reaches 80% of the viewport height
      end: "top 30%", // End when the top of .animate reaches 30% of the viewport height
      scrub: true, // Scrub the timeline with the scroll
      pin: true, // Pin the element while the scrollTrigger is active
    },
  });

  // Add animations to the timeline
  tl.fromTo(
    ".animate",
    { x: "100%" }, // Starting position
    { x: 0, stagger: 0.1 } // End position with staggered animation
  );
};
