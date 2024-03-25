import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    colors: {
      "white": "#FAFAFA",
      "dark-grey": "#505050",
      "black": "#171717",
      "pale-yellow": "#E9EB78",
      "shaded-yellow": "#ABAD58",
      "pastel-yellow": "#D6D94E"
    }
  },
  plugins: [],
};
export default config;
