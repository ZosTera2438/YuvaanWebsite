module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gold: "#facd38",
        deepGold: "#d4af37",
        blackText: "#2c2825",
      },
      fontFamily: {
        compoteFont: ["compote", "sans-serif"],
        latoFont: ["lato", "sans-serif"],
      },
      animation: {
        // wheelSize: "wheelSize 80s linear infinite ",
        wheelLoad: "wheelLoad 1000s ease infinite",
      },
      keyframes: {
        // wheelSize: {
        //   "0%": { transform: " rotate(90deg)" },
        //   "100%": { transform: " rotate(-89deg)" },
        // },
        // wheelLoad: {
        //   "0%": { transform: "rotate(0deg)", left:"15%" },
        //   "70%": {transform: "rotate(420deg)", left:"15%" },
        //   "100%": {transform: "rotate(90deg)", left:"-37%" },
        // },
        wheelLoad: {
          "0%": { transform: "rotate(0deg)", left:"15%" },
          "1%": {transform: "rotate(420deg)", left:"15%" },
          "2%": {transform: "rotate(90deg)", left:"-37%" },
          "100%": {transform: "rotate(-7000deg)", left:"-37%" },
        },
      },
    },
  },
  // ...
};
