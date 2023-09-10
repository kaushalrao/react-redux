const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ProvidePlugin} = require("webpack");
const path = require("path");

const getPlugins = (basePath) => {
    return [
        new ProvidePlugin({
            React: "react",
        }),
        new HtmlWebpackPlugin({
            template: path.join(basePath, "./public/index.html"),
            filename: "index.html",
            inject: "body",
            minify: true,
        }),
    ];
}

const getBaseRules = () => {
    return [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [["@babel/preset-react", {"runtime": "automatic"}], '@babel/preset-env', '@babel/preset-typescript'],
                    plugins: ['@babel/plugin-transform-runtime'],
                }
            }
        },
        {
            test: /\.(gif|png|jpe?g)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/'
                    }
                }
            ]
        },
    ];
}

const getBaseConfig = (basePath) => ({
    mode: 'development',
    devServer: {
        port:8090,
        historyApiFallback: true
    },
    entry: path.join(basePath, "src/index.tsx"),
    output: {
        path: path.resolve(basePath, "build"),
    },
    module: {
        rules: getBaseRules()
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    plugins: getPlugins(basePath)
})

module.exports = {getBaseConfig}