/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'sans': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}