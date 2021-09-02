module.exports = {
  presets: ["next/babel", "@babel/preset-typescript"],
  plugins: [["styled-components", { ssr: true }]],
  env: {
    test: {
      plugins: [
        [
          "babel-plugin-styled-components",
          {
            ssr: false,
            displayName: false,
          },
        ],
      ],
    },
  },
};
