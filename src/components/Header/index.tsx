import React from "react";
import Container from "../Container";
import Link from "next/link";
import { LOGO } from "@/constants/IMAGES";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/team" },
];

function Header() {
  return (
    <div className="md:bg-secondary text-accent sticky top-0 z-30 shadow-sm">
      <button className="h-full w-20 bg-secondary z-10 absolute top-0 right-0 bottom-0 text-white md:hidden">
        menu
      </button>
      <div></div>
      <div className="absolute h-full w-[40%] left-0 top-0 bg-white z-0" />
      <Container>
        <div className="flex w-full relative min-h-20 h-[10vh] md:h-[15vh]">
          <div className="w-full md:w-[40%] lg:w-[40%] flex items-center bg-white">
            <Link href={"/"}>
              <div className="flex items-center space-x-3 text-primary">
                <img src={LOGO.src} alt="logo" className="h-14 md:h-16" />
                <div>
                  <h2 className="font-bold uppercase text-xl md:text-2xl tracking-wide">
                    Trend Ab
                  </h2>
                  <div className="uppercase text-sm text-primary tracking-widest">
                    Integrated Farms
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex w-[60%] items-center pl-20">
            <nav>
              <div className="hidden md:flex space-x-4">
                {menuItems.map((item) => (
                  <Link
                    className="px-5 py-2 uppercase text-sm"
                    key={item.name}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
