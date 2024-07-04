/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        primary: colors.blue,
        azul: '#3249C2',
        azulacero: '#576CA8',
        plomo: '#686C7A',
        marron: '#302B27',
        blanco: '#FFFAFA'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

