import type { Config } from "tailwindcss"

const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        freegroceries: {
          50: "#037d50",
          100: "#1f493e",
          200: "#024b30",
          800: "#17302b",
          900: "#102923"
        },
        gold: {
          200: "#d4ac66"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
})

export default withMT
