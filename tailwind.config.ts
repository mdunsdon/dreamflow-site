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
    DEFAULT: "#0d9488", // teal-600
    light: "#14b8a6",
    dark: "#0f766e"
  }
}

    },
  },
  plugins: [],
};
export default config;
