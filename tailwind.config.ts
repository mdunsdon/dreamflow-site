import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4f46e5", // indigo-600
          light: "#6366f1",
          dark: "#4338ca"
        }
      }
    },
  },
  plugins: [],
};
export default config;
