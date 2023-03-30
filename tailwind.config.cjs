/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FAF8ED",
        "primary-300": "#2E476B",
        "primary-500": "#F66F4D",
        "secondary-100": "#2D3134",
        "secondary-300": "#5B5F62"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sen: ["Sen", "sans-serif"]
      },
      screens :{
        xs: "480px",
        sm: "768px",
        md: "1060px"
      }
    },
  },
  plugins: [],
}