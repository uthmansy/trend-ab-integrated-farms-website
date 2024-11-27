"use client";
import React, { ReactNode, useEffect } from "react";
import TopNav from "./Header/TopNav";
import Footer from "./Footer";
import Container from "./Container";

interface Props {
  children: ReactNode;
  pageTitle: string;
}

function PageWrapper({ children, pageTitle }: Props) {
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
      <header className="bg-green-800 text-white min-h-[30vh]">
        <TopNav type="page" />
        <div className="h-56 flex items-center justify-center">
          <Container>
            <h2 className="uppercase text-2xl tracking-wider font-bold text-center">
              {pageTitle}
            </h2>
          </Container>
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
}

export default PageWrapper;
