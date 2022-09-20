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
      },
      keyframes: {
        go: {
          '0%': { opacity:1 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        triangleDraw: {
          '0%': { 
            strokeDashoffset: 1000,
            strokeDasharray: 1000,
          },
          '100%': {
            strokeDashoffset: 0,
            strokeDasharray: 1000,
            fill: "#B2FF9E",
          },
        },
        triangleRotate: {
          '0%': {
            left: "-100%",
            transform: "rotate(0deg)",
          },
          '90%':{
            transform: "translateY(0px)",
            transform: "rotate(350deg)",
          },
          '100%': {
            left: "30%",
            transform: "rotate(360deg) translateY(-100px)",

          },
        }
      },
      animation:{
        go: 'go 3s ease',
        triangleDraw: 'triangleDraw 5s ease forwards 4s',
        triangleRotate: 'triangleRotate 6s ease forwards',
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
