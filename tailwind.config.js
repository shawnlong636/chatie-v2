/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    '/plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}'

  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#fd7c12',
          100: '#ffe5d0',
          200: '#fecba0',
          300: '#feb071',
          400: '#fd9641',
          500: '#fd7c12',
          600: '#ca630e',
          700: '#984a0b',
          800: '#653207',
          900: '#331904'
        }
      }
    }
  },
  plugins: []
}
