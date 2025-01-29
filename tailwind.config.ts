import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
        "2xl": "1536px", // 2x-large screens
        "3xl": "1920px", // Custom screen size
      },
      scale: {
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
        '100': '1.0',
        '120': '1.2',
        '140': '1.4',
        '160': '1.6',
      },
      keyframes: {
        moveImages: {
          "0%, 10%": { transform: "translateX(0)" }, // Stay in initial position
          "33.33%, 43.33%": { transform: "translateX(-33.33%)" }, // Move to second image
          "66.66%, 76.66%": { transform: "translateX(-66.66%)" }, // Move to third image
          "100%": { transform: "translateX(-100%)" }, // Back to the first image
        },
      },
      animation: {
        moveImages: "moveImages 6s ease-in-out infinite", // Total duration is 6s (2s per image)
      },
      fontFamily: {
        avenir: ["Avenir LT STD", "sans-serif"],
        workSans: ["Work Sans"],
      },
    },
  },
  plugins: [],
};

export default config;
