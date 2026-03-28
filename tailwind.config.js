/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#6366f1',
        dark: '#e5e5e5',
        muted: '#999999',
        subtle: '#666666',
        surface: '#111111',
        border: '#222222',
      },
    },
  },
  plugins: [],
}
