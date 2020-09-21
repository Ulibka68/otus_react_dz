module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
    "@babel/preset-typescript",
    "@emotion/babel-preset-css-prop",
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
  env: {
    production: {
      plugins: ["emotion", "@babel/plugin-transform-react-jsx"],
    },
    development: {
      plugins: [["emotion", { sourceMap: true }]],
    },
  },
};
