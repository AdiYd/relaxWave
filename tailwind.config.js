const { orange, yellow } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          primary: {
            DEFAULT: '#17332A',
            orange: '#C97B5B',
            yellow: '#EEB85D',
            white: '#FEF8E9',
            dark: '#17332A',
            light: '#275546'
          },
          neutral: {
            DEFAULT: '#F3F4F6', // Light Gray for background
            dark: '#4B5563',    // Dark Gray for text
          },
          secondary: '#C97B5B',
          accent: '#EEB85D'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
