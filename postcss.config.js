module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: [
        "./assets/js/*.js",
        "./content/*.md",
        "./layouts/**/*.html",
      ],
      safelist: ["arrow", "tooltip", "tooltip-arrow", "tooltip-inner"],
      blocklist: [""],
    },
  },
};
