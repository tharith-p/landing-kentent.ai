/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
    'index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100'   : 'rgb(var(--color-primary-100) / <alpha-value>)',
          '200'   : 'rgb(var(--color-primary-200) / <alpha-value>)',
          DEFAULT : 'rgb(var(--color-primary) / <alpha-value>)',
        }
      }
    },
  },
  plugins: [],
}