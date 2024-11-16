"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { LOGO } from "@/constants/IMAGES";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface Props {
  toggleMenu: () => void;
  isOpen: boolean;
}

function TopNav({ toggleMenu, isOpen }: Props) {
  return (
    <Container>
      <div
        data-scroll-sticky
        className="sticky top-0 z-20 py-4 flex justify-between items-center"
      >
        {/* Left side - Logo and Menu */}
        <div className="flex items-center space-x-24">
          {/* Logo */}
          <div className="text-xl">
            <Link href="/">
              <img src={LOGO.src} className="w-28 md:w-40" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 text-white">
            <Link href="/" className="hover:text-accent-light transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent-light transition">
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-accent-light transition"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent-light transition"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right side - Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-primary text-white rounded-full px-6 py-3 hover:bg-accent-light uppercase text-sm transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>
    </Container>
  );
}

export default TopNav;
