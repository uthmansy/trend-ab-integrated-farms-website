import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: Url;
  type?: "primary" | "white";
}

function ButtonLink({ children, href, type = "primary" }: Props) {
  return (
    <Link
      href={href}
      className={`${
        type === "primary"
          ? "bg-green-800 text-white"
          : "bg-white text-green-900"
      }  px-6 md:px-8 py-3 md:py-5  uppercase text-sm max-w-fit`}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
