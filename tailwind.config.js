/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter','sans-serif']
      },
      colors: {
        "tomato": "#EB6440",
        "chocolate": "#56423D"
      }
    },
  },
  plugins: [],
}
