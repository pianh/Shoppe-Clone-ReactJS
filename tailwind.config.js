/** @type {import('tailwindcss').Config} */
module.exports = {
  // eslint-disable-next-line prettier/prettier
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d'
      }
    }
  },
  plugins: []
}
