"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="mx-auto px-5 w-full max-w-screen-xl">{children}</div>;
}
