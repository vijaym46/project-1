/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        socialbg: '#EDF1FF',
      },
      screens: {
        'custom-991': '991px', // Custom breakpoint at 991px
      },
    },
  },
  plugins: [],
}