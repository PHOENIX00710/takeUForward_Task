/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "bluish": "0 8px 20px rgba(99, 179, 237, 0.5)"
      }
    },
  },
  plugins: [],
}