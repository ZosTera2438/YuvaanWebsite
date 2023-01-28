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
        // latoFont: ["Lato", "sans-serif"],
      },
      animation: {
        wheelSize: "wheelSize 3s ",
      },
      keyframes: {
        wheelSize: {
          "0%": { transform: " rotate(0deg) translatey(0)" },
          "80%": { transform: " rotate(360deg) translatey(0)"},
          "100%": { transform: " rotate(360deg) translatex(-68%)"},
        },
      },
    },
  },
  // ...
};
