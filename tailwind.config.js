/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {

    extend: {},
  },
  plugins: [require('daisyui')],
}
