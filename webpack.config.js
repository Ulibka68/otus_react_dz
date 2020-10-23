const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackRules = require("./webpackRules");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      types: path.resolve(__dirname, "src/types"),
      components: path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "./index.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      ...webpackRules,
    ],
  },
  devServer: {
    hot: true,
    // contentBase: path.join(__dirname, 'src/assets'),
    // contentBasePublicPath: '/',
    historyApiFallback: true,
    // historyApiFallback: {
    //   rewrites: [
    //     {from: /favicon.ico$/, to: 'E:/_prgs/otus/redux-dynamic-modules/packages/widgets-example/src/assets/favicon.ico'},
    //     {from: /manifest.json$/, to: 'E:/_prgs/otus/redux-dynamic-modules/packages/widgets-example/src/assets/manifest.json'}
    //   ]
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
