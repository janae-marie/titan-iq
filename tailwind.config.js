/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./*.js",
    ],
    theme: {
      extend: {
        colors: {
          'deep-blue': '#001524',
          'teal-blue': '#15616D',
          'beige': '#FFECD1',
          'bright-orange': '#FF7D00',
          'burnt-orange': '#78290F',
        }
      },
    },
    plugins: [],
  }