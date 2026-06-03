/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f2240',
        'navy-dark': '#091829',
        'navy-light': '#1a3a5c',
        gold: '#c9973a',
        'gold-light': '#e8bc6a',
        'gold-muted': '#f5e6c8',
        cream: '#f8f6f1',
        'cream-dark': '#ede9e0',
      },
      fontFamily: {
        heading: ['Merriweather', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        code: ['JetBrains Mono', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      borderRadius: {
        bubble: '18px 18px 4px 18px',
      },
    },
  },
  plugins: [],
};