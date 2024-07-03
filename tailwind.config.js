/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6ba5d7',
          DEFAULT: '#3a82c4', // This is the dark blue color we'll use as the primary theme color
          dark: '#2a5a8a',
        },
      },
    },
  },
  plugins: [],
}

