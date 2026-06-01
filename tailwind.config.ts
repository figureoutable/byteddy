import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#F5F1EB",
        surface: "#FAF8F5",
        border: "#C8BFB0",
        primary: "#2C1A0E",
        secondary: "#7A6A5A",
        muted: "#9A8878",
        success: {
          DEFAULT: "#3B6D11",
          bg: "#EAF3DE",
        },
        warning: {
          DEFAULT: "#854F0B",
          bg: "#FAEEDA",
        },
        danger: {
          DEFAULT: "#993C1D",
          bg: "#FAECE7",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
      },
      borderWidth: {
        hairline: "0.5px",
      },
    },
  },
  plugins: [],
};

export default config;
