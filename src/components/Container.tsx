"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="mx-auto px-4 md:px-8">{children}</div>;
}
