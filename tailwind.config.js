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
        'custom-blue': '#3249C2',
        'custom-white': '#FFFFFF'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

