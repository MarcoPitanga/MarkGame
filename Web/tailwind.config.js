/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  variants: {
    scrollbar: ['dark']
  },
  plugins: [require('tailwind-scrollbar')]
}
