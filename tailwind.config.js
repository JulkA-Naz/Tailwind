/** @type {import('tailwindcss').Config} */
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  content: ["./index.html", "./js/script.js"],
  darkMode: "class",
  theme: {
    extend: {

      fontFamily: {
        main: ['Nunito'],
      },
      // backgroundImage: {
      //   'gradient-to-center': 'linear-gradient(to right, black, gray 50%, black)',
      // },
      // colors: {
      //   'custom': '#fff200',
      // },
    },
  },
  plugins: [require('tailwind-hamburgers'),
  require('tailwindcss'),
  require('autoprefixer'),
  require('cssnano')({
    preset: 'default',
  }),
  ],
}

