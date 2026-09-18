/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0b0c0e',
        velvet: '#121418',
        charcoal: '#1a1d24',
        gold: {
          300: '#f3e5ab',
          400: '#e6c659',
          500: '#d4af37',
          600: '#b89326',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 2',
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
