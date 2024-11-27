import React from "react";
import Container from "../Container";
import { LOGO } from "@/constants/IMAGES";
import NavMenu from "./NavMenu";
import ButtonLink from "../ButtonLink";

interface Props {
  type?: "page" | "home";
}

function TopNav({ type = "home" }: Props) {
  return (
    <div className="z-50 relative border-b border-white border-opacity-25">
      <Container>
        <div className="flex justify-between py-3 items-center">
          <div className="flex items-center">
            <div
              className={`${type === "home" ? "bg-green-800" : "bg-white"} p-2`}
            >
              <img src={LOGO.src} alt="logo" className="w-16" />
            </div>
            <NavMenu />
          </div>
          <div className="hidden md:block">
            <ButtonLink
              type={type === "home" ? "primary" : "white"}
              href="/contact"
            >
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopNav;
