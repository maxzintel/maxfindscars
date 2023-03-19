/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'antiquewhite': '#FAEBD7',
      'yellow': '#FFFF00',
    }),
  },
  variants: {},
  plugins: [],
}

