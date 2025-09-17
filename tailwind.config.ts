import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // A deep, near-black
        foreground: '#f5f5f5', // Soft white for text
        primary: '#d4af37',   // A rich, metallic gold
        card: '#1a1a1a',      // A slightly lighter black for cards/sections
      },
      fontFamily: {
        serif: ['var(--font-cormorant)'],
        sans: ['var(--font-inter)'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config