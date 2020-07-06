const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;


const plugins = () => {
    const base = [
        // new HTMLWebpackPlugin({
        //     template: './index.html',
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: path.resolve(__dirname, 'src/index.html'), to: path.resolve(__dirname, 'dist','ind.html') },

                ],
            }
        ),
    ]

    if (isProd) {
        base.push(new BundleAnalyzerPlugin())
    }

    return base
}

module.exports = (env, argv) => {
    var config = {
        entry: {
            polish : ['@babel/polyfill',"./src/main.ts"]
        },
        output: {
            path: path.resolve(__dirname,'dist'),
            filename: filename('js')
        },
        resolve: {
            extensions: ['.js', '.json', '.png','.ts'],
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },

        devtool: isDev ? "source-map" : "",
        plugins: plugins(),
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
                        {
                            loader : 'eslint-loader',
                            options: {
                                cache: true,
                                fix : true,
                            },
                        }
                    ]
                },
            ]
        },

    };
    return config;
};
