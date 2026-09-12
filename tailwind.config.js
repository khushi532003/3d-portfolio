/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        spinSlider: {
          '0%': {
            transform: 'rotateX(-16deg) rotateY(0deg)',
          },
          '100%': {
            transform: 'rotateX(-16deg) rotateY(360deg)',
          },
        },
      },
      animation: {
        spinSlider: 'spinSlider 20s linear infinite',
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#05192d ",
        "black-100": "#030e19",
        "black-200": "#05192d ",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg2.webp')",
      },
    },
  },
  plugins: [],
};