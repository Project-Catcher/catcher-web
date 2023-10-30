/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        stayLoggedIn: "url(/images/samples/StayLoggedIn.svg)",
        idLabel: "url(/images/samples/IdLabel.svg)",
        pwLabel: "url(/images/samples/PwLabel.svg)",
        eye: "url(/images/samples/eye.svg)",
        kakao: "url(/images/samples/kakao.svg)",
        naver: "url(/images/samples/naver.svg)",
        question: "url(/images/samples/question.svg)",
        check: "url(/images/samples/check.svg)",
        searchIcon: "url(/images/samples/searchIcon.svg)",
      },
      width: {
        "3/5-10": "calc(60% - 10px)",
        "full-177": "calc(100% - 177px)",
        "full-30": "calc(100% - 30px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
