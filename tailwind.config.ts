import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#468f9b",
        dark: "#A2A79E",
        accent: "#666465",
      },
      fontFamily: {
        heading: '"Noto Serif Display", serif',
      },
      fontSize: {
        base: "calc(16px + 0.2vw)", // Custom base font size
      },
    },
  },
  plugins: [],
} satisfies Config;
