/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'card-bg': 'var(--card-bg)',
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
        border: 'var(--border)',
        brand: 'var(--brand)',
        'brand-light': 'var(--brand-light)',
        'brand-dark': 'var(--brand-dark)',
      },
    },
  },
  plugins: [],
};