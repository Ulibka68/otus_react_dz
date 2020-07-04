const path = require('path');

module.exports = (env, argv) => {
    function isDevelopment() {
        return argv.mode === "development";
    }
    var config = {
        entry: {
            editor: "./src/editor.ts"
        },
        output: {
            path: path.resolve(__dirname,'dist'),
            filename: "[name].js"
        },

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
            ]
        },

    };
    return config;
};
