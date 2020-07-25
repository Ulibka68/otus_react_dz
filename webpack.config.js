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
    mode: isDev ? 'development' : 'production',
    // tells webpack-dev-server to serve the files from the dist directory on localhost:8080
    devServer: {
        stats: 'errors-only',
        overlay: true,
        contentBase: path.join(__dirname, "/dist"),
        hot: true
    },
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
        // tell CleanWebpackPlugin we dont want to remove index.html file after incremental build triggered by watch
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
};
