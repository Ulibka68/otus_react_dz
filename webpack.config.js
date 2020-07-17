const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const HTMLWebpackPlugin = require('html-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin(),
    ]

    if (isProd) {
        base.push(new BundleAnalyzerPlugin())
    }

    return base
}

module.exports = (env, argv) => {
    var config = {
        entry: {
            polish : "./src/main.ts"
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
                    enforce: 'pre',
                    test: /\.tsx?$/,
                    exclude: [
                        path.resolve(__dirname, "node_modules"),
                        path.resolve(__dirname, ".git"),
                        path.resolve(__dirname, ".idea"),
                    ],
                    loader: 'eslint-loader',
                    options: {
                        cache: true,
                        fix : true,
                        failOnError: true
                    },
                },
                {
                    test: /\.tsx?$/,
                    exclude: [
                        path.resolve(__dirname, "node_modules"),
                        path.resolve(__dirname, ".git"),
                        path.resolve(__dirname, ".idea"),
                    ],
                    loader: 'babel-loader'
                },
            ]
        },

    };
    return config;
};
