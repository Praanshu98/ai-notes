/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.5rem",
      },
      spacing: {
        3.5: "14px",
      },
    },
  },
  plugins: [],
};
