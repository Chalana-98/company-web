import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      primaryTextColor: "#1E1E1E",
      primarybgColor: "#FFFFFF",
      primaryDarkTextColor: "#EBEBEB",
      primarystrokeColor: "#BBBBBB",
      secondaryDarkbgColor: "#3A3A3A",
      secondaryDarkTextColor: "#E6E6E6",
      primarydarkbgColor: "#282828",
      blue1: "#002e6a",
      blue2: "#004eb5",
      blue3: "#519cff",
      blue4: "#519cff",
      blue5: "#9cc6ff",
      blue6: "#f1f7ff",
      bodercolor1: "#D9D9D9",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
