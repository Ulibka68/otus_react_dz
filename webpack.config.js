const path = require('path');
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    function isDevelopment() {
        return argv.mode === "development";
    }
    var config = {
        entry: {
            editor: "./src/editor.ts"
        },
        output: {
            path: __dirname,
            filename: "[name].js"
        },

        plugins: [
            new MiniCssExtractPlugin({
                chunkFilename: '[id].css',
                moduleFilename: (chunk) => {
                  const { name } = chunk;
                  return   name === "script" ? "style.css" : "[name].css";
                }
              })
        ],
        devtool: isDevelopment() ? "cheap-module-source-map" : "source-map",
        module: {
            rules: [
                {
                    test: /\.js$/,

                    exclude: [
                        path.resolve(__dirname, "node_modules"),
                        path.resolve(__dirname, ".git"),
                        path.resolve(__dirname, ".idea"),
                        path.resolve(__dirname, ".dist"),
                    ],
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                plugins: [
                                    "@babel/plugin-proposal-class-properties"
                                ],
                                presets: [
                                    // ['@babel/preset-env', {targets: {node: 'current'}}],
                                    '@babel/preset-env',
                                ]
                            }
                        },
                        "eslint-loader"
                    ]
                },
                {
                    test: /\.tsx?$/,
                    exclude: [
                        path.resolve(__dirname, "node_modules"),
                        path.resolve(__dirname, ".git"),
                        path.resolve(__dirname, ".idea"),
                        path.resolve(__dirname, ".dist"),
                    ],
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                plugins: [
                                    "@babel/plugin-proposal-class-properties",
                                    "@babel/proposal-object-rest-spread"
                                ],
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-typescript'

                                ]
                            }
                        },
                        "eslint-loader"
                    ]
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [autoprefixer()]
                            }
                        },
                     
                        "sass-loader"
                    ]
                }
            ]
        },

    };
    return config;
};
