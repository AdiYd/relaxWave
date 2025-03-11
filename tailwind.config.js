
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens : {
      '2xs' : '340px',
      'xs' : '480px',
      ...defaultTheme.screens,
      'sm': '750px'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#17332A',
          light: '#1f4437',
          dark: '#0c1a15',
          white: '#FFFFFF',  // Adding the missing primary-white color
        },
        secondary: {
          DEFAULT: '#C97B5B',
          light: '#d88b73',
          dark: '#a65d42',
        },
        accent: {
          DEFAULT: '#EEB85D',
          light: '#f2c77d',
          dark: '#d9a23d',
        },
        neutral: {
          DEFAULT: '#F5F5F5',
          dark: '#333333',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
