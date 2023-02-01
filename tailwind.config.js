module.exports = {
  content: [
    "./public/index.html",
    "./public/CouncilMemberFinal/councilMember.html",
    "./public/eventPage/eventSchedule.html",
    // "./src/**/*.{html,js}",
  ],
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
        wheelLoad: "wheelLoad 1000s infinite",
      },
      keyframes: {
        wheelLoad: {
          "0%": { transform: "rotate(0deg)", left: "15%" },
          "2%": { transform: "rotate(420deg)", left: "15%" },
          "3%": { transform: "rotate(90deg)", left: "-37%" },
          "100%": { transform: "rotate(-6000deg)", left: "-37%" },
        },
      },
    },
  },
  // ...
};
