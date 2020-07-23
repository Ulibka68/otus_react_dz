const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

// const isDev = process.env.NODE_ENV === 'development';
const isDev = true;
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

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

                // css-loader - преобразовывает CSS - в модуль JavaScript.
                // (Входные данные: CSS, Выходные данные: JavaScript)
                // style-loader - внедряет CSS, экспортируемый модулем JavaScript, в тег style

                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    }
                ]
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
};
