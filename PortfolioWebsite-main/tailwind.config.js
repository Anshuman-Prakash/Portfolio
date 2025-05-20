/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poopins :["Poppins", "sans-serif"],
      },
        screens: {
        'vsm': '320px',
        'msm': '375px',
        'sm': '400px',
      }
    },
  },
  plugins: [],
}

