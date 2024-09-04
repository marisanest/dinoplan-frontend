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
        blue: '#4772D2',
        'blue-600': '#294290',
        'red-200': '#FAA19F',
        orange: '#E6B45A',
        'orange-200': '#F7F2EA',
        'yellow-100': '#FFFFFA'
      }
    },
  },
  plugins: [],
};
export default config;
