/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          
      },
      colors: {
          "gold": "#a19877",
          "silver": "#a7a9ac",
          "blue": "#012f87",
          "red": "9e0d38"
      }
    },
  },
  plugins: [],
}