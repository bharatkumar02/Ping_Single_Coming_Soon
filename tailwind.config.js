/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      "instagram" : 'url("/src/assets/instagram.svg")',
    },
    fontFamily: {
      libreFranklin: ["Libre Franklin", "sans-serif"],
    },
  },
  plugins: [],
}

