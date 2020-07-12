const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// const isDev = process.env.NODE_ENV === 'development';
const isDev = true;
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      },
    },
    'css-loader'
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: cssLoaders()
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./assets/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new CleanWebpackPlugin(),
  ],
};
