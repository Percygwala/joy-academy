import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#A7D8F5',
        'academy-red': '#D7263D',
        'academy-yellow': '#FFD23F',
        'navy': '#0B2239',
      },
      fontFamily: {
        'heading': ['var(--font-montserrat)', 'sans-serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
