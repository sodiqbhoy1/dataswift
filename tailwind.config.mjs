/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fe6807', // Orange for accents
        secondary: '#09080d', // Dark text
        background: '#f9fafb', // Light background
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(254, 104, 7, 0.6), rgba(254, 104, 7, 0.4))',
      },
    },
  },
  plugins: [],
};
