const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'Navigation',
            remotes: {
                BlueApp: 'BlueApp@http://localhost:5001/remoteEntry.js'
            }
        })
    ]
};