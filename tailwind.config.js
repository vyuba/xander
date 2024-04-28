/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'patino': ['patino', 'sans-serif'],
      'planet': ['planet', 'sans-serif'],
    },
    colors: {
      // Using modern `rgb`
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
    },
    extend: {
      animation: {
        slide: 'slide 5s infinite linear',
      },
    },
  },
  plugins: [],
}

