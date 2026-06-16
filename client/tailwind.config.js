/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0f0c29',
        'navy': '#302b63',
        'accent-pink': '#ec4899',
        'accent-purple': '#a855f7',
        'accent-cyan': '#06b6d4',
        'light-blue': '#e0e7ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
