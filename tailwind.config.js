/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './dist/**/*.{html,js}',
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

