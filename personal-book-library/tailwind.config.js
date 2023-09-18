/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      screens: {
        phone: '500px',
        xxs: '380px',
      },
      maxWidth: {
        fitForButtons: '12rem',
      },
    },
  },
  plugins: [],
};
