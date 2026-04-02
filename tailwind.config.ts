import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Segoe UI', 'sans-serif'],
        display: ['Oswald', 'Arial Narrow', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      colors: {
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-orange)',
        cream: 'var(--color-cream)',
        page: 'var(--color-bg)',
        promo: '#382759',
        'promo-gold': '#695700',
        mint: '#12CE94',
        'figma-pink': '#F177C4',
      },
    },
  },
  plugins: [],
}

export default config
