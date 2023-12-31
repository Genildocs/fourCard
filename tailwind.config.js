/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },

    gridTemplateColumns: {
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(1, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 22rem))',
    },
    extend: {
      colors: {
        primary: {
          Red: 'hsl(0, 78%, 62%)',
          Cyan: ' hsl(180, 62%, 55%)',
          Orange: 'hsl(34, 97%, 64%)',
          Blue: 'hsl(212, 86%, 64%)',
        },
        neutral: {
          'very-dark-blue': 'hsl(234, 12%, 34%)',
          'grayish-blue': 'hsl(229, 6%, 66%)',
          'light-grayish-blue': 'hsl(0, 0%, 98%)',
        },
        Main: '#FAFAFA',
      },
    },
  },
  plugins: [],
};
