/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        fe: "linear-gradient(180deg,rgba(0,0,0,.7) 0,rgba(0,0,0,.7) 90%),url(/images/fe.svg)",
        feskills: "url(/images/feskills.jpg)",
        deploymentskills: "url(/images/deploymentskills.jpg)",
        versioncontrolskills: "url(/images/versioncontrolskills.jpg)",
      },
    },
    fontFamily: {
      BlackHanSans: ["BlackHanSans"],
    },
    screens: {
      sm: { max: "576px" },
      md: { min: "577px", max: "960px" },
    },
  },
  plugins: [],
};
