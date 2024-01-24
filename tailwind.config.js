/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",
  "./*.{html,js}",
  "./node_modules/flowbite/**/*.js",
],
  theme: {
    extend: {

      fontFamily: {
      'Just Me': ['Just Me Again Down Here', 'cursive']
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
}
