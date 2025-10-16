/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'luckiest-guy': ['var(--font-luckiest-guy)', 'cursive'],
        'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'paw-walk': 'paw-walk 2s ease-in-out infinite',
        'paw-walk-alt': 'paw-walk-alt 2s ease-in-out infinite',
        'tokenomics-reveal': 'tokenomics-reveal 1.5s ease-out forwards',
        'tokenomics-glow': 'tokenomics-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'paw-walk': {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(20px) rotate(-5deg)' },
          '50%': { transform: 'translateX(40px) rotate(0deg)' },
          '75%': { transform: 'translateX(60px) rotate(5deg)' },
        },
        'paw-walk-alt': {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(-20px) rotate(5deg)' },
          '50%': { transform: 'translateX(-40px) rotate(0deg)' },
          '75%': { transform: 'translateX(-60px) rotate(-5deg)' },
        },
        'tokenomics-reveal': {
          '0%': { opacity: '0', transform: 'scale(0.8) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        'tokenomics-glow': {
          '0%': { filter: 'brightness(1) drop-shadow(0 0 10px rgba(186,142,54,0.5))' },
          '100%': { filter: 'brightness(1.1) drop-shadow(0 0 20px rgba(186,142,54,0.8))' },
        },
      },
    },
  },
  plugins: [],
}
