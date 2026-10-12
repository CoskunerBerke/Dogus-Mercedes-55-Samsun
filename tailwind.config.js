/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mercedes: {
          dark: '#0a0d12',
          card: '#121721',
          cardHover: '#18202d',
          border: '#1f2937',
          silver: '#e2e8f0',
          muted: '#94a3b8',
          accent: '#2563eb', // subtle precision blue
          gold: '#f59e0b',
          star: '#00d26a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'river-scroll': 'riverScroll 45s linear infinite',
        'river-scroll-reverse': 'riverScrollReverse 45s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        riverScroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        riverScrollReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
