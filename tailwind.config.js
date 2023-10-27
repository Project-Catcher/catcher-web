/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { question: "url(/images/samples/question.svg)" },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
