import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      ...colors,
      e1pink: "#FB2E86",
      e1offNavyBlue: "#1A0A5A",
    
      e1purple: "rgb(126, 51, 224)",
      e1offPurple: "#FB2E86",
      e1red350: "#FB2E86",
      e1skyBlue: "#FB2E86",
      e1offBlue: "#FB2E86",
      e1pantonePurple: "#F3f4FF",
      e1blue350: "#FB2E86",
    },
  },
  plugins: [],
};
export default config;
