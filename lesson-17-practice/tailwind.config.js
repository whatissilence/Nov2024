/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: "#f0145a",
        head: "#b3b3ba",
        'back-secondary': "#f5f5fa",
        about: "#323264",
        'header-circle': "#e6e6f0",
        'nav-link': "#24a3ff"
      },
      screens: {
        'desc-hd': '1920px',
      },
    },
  },
  plugins: [],
}

