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
        page: "#EDE8E0",
        surface: "#FDFCFA",
        border: "#B8AA9A",
        "border-strong": "#9A8878",
        primary: "#2C1A0E",
        secondary: "#5C4A3A",
        muted: "#756558",
        success: {
          DEFAULT: "#3B6D11",
          bg: "#E2EFD4",
        },
        warning: {
          DEFAULT: "#854F0B",
          bg: "#F8E8C8",
        },
        danger: {
          DEFAULT: "#993C1D",
          bg: "#F8E4DC",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
      },
      boxShadow: {
        card: "0 1px 2px rgba(44, 26, 14, 0.06), 0 2px 8px rgba(44, 26, 14, 0.04)",
        "card-hover": "0 2px 4px rgba(44, 26, 14, 0.08), 0 4px 12px rgba(44, 26, 14, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
