module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'antiquewhite': '#FAEBD7',
        'yellow': '#FFFF00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
