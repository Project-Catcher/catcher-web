/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "c-accept": "#00D179", // green. 확인용 색상
        "c-accept-disabled": "#00D17975", // green-disabled
        "c-warn": "#FACD49", // yellow. 경고용 색상
        "c-warn-disabled": "#FACD4975", // yellow-disabled
        "c-danger": "#FF2330", // red. 에러용 색상
        "c-danger-disabled": "#FFA4A475", // red-disabled
        "c-pink": "#F864A1",
        "c-orange": "#F5A200",
        "c-purple": "#A564F8",
        "c-gray": "#BABABA",
        "c-black": "#222222",
      },
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
        mypageMenu: "url(/images/samples/mypageMenu.svg)",
        changeProfileImageButton:
          "url(/images/samples/changeProfileImageButton.svg)",
        checked: "url(/images/samples/checked.svg)",
        calender: "url(/images/samples/calender.svg)",
        city: "url(/images/samples/city.svg)",
      },
      width: {
        "3/5-10": "calc(60% - 10px)",
        "full-177": "calc(100% - 177px)",
        "full-30": "calc(100% - 30px)",
        "full-280": "calc(100% - 280px)",
        planContent: "calc(100% - 250px)",
      },
      height: {
        "full-204": "calc(100% - 204px)",
        "without-header": "calc(100vh - 78px)",
        planScrollbar: "calc(100vh - 85px)",
      },
      maxHeight: {
        "full-204": "calc(100% - 204px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
