/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: '#FF9900',   // Use for call-to-action elements
        secondary: '#0044CC', // Use for headings and accents
        accent: '#FF44AA',    // Use for special highlights

        // Neutral Colors
        black: '#000000',     // Use for text and borders
        white: '#FFFFFF',     // Use for backgrounds and contrast

        // Grayscale Shades
        gray: {
          100: '#F5F5F5',     // Use for light backgrounds
          200: '#E0E0E0',     // Use for medium-light backgrounds
          300: '#CCCCCC',     // Use for neutral backgrounds
          400: '#999999',     // Use for muted text and elements
          500: '#666666',     // Use for regular text
          600: '#444444',     // Use for headings and subheadings
          700: '#333333',     // Use for dark text and outlines
          800: '#222222',     // Use for very dark elements
          900: '#111111',     // Use for borders and dividers
        },
      },
      backgroundColor: {
        primary: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
