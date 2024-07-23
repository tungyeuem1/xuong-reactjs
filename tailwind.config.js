/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        "text-1": "#171725",
        "text-2": "#4B5264",
        "text-3": "#808191",
        "text-4": "#B2B3BD",
        "icon-color": "#A2A2A8",
        white: "FFFFFF",
        whiteShoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        strock: "#F1F1F3",
        lite: "#FCFCFD",
        error: "#EB5757",
        darkbg: "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStrock: "#3A3A43",
        darkRed: "#422C32",
      },
    },
  },
  plugins: [],
};
