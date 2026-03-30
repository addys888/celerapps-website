import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#b9e8fd",
          300: "#7cd4fc",
          400: "#36bcf8",
          500: "#0ca2e9",
          600: "#0081c7",
          700: "#0167a1",
          800: "#065785",
          900: "#0b496e",
          950: "#072e47",
        },
      },
      animation: {
        "float-a":    "floatA 6s ease-in-out infinite",
        "float-b":    "floatB 7s ease-in-out infinite 0.8s",
        "float-c":    "floatA 5s ease-in-out infinite 1.5s",
        "spin-slow":  "spin 12s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "shimmer":    "shimmer 2.5s linear infinite",
        "count-up":   "countUp 1s ease-out forwards",
      },
      keyframes: {
        floatA: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":     { transform: "translateY(-14px) rotate(1deg)" },
        },
        floatB: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":     { transform: "translateY(-10px) rotate(-1deg)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.4" },
          "50%":     { opacity: "0.8" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        countUp: {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
