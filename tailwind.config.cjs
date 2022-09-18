/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B2FF9E",
        secondary: "#61DC9A",
        bgBlack: "#1A1A1A",
        white: "#ffffff",
        gray: "rgba(191, 191, 191, 0.25);",
        grayMatte : "rgba(67,67,67,1);",
        textSecondary: "rgba(255, 255, 255, 0.6)",
        gold: "rgba(233, 220, 107, 1)",
        lightBlueForBoxShadow: "rgba(163, 243, 249, 0.25)",
        green: "rgba(45, 192, 157, 1)",
      }
    },
    fontFamily:{
      'rationale': ['Rationale', 'consolas', 'monospace'],
      'coda': ['Coda', 'consolas', 'monospace'],
      'codaCaption': ['Coda Caption'],
    }
  },
  plugins: [],
}
