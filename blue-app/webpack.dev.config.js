const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Blue app'
        }),
        new ModuleFederationPlugin({
            name: 'BlueApp',
            filename: 'remoteEntry.js',
            exposes: {
                './Box': './src/components/box.js'
            }
        })
    ],
    devServer: {
        port: 5001
    }
};