'use strict';
const path = require('path');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.config');

function generateConfig(srcdir) {

    const newConfig = {
        output: {
            path: path.resolve(srcdir, 'build')
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html',
                inject: true,
                hash: true,
                filename: 'index.html'
            }),
        ],
        module: {
            loaders: [
                {test: /\.js$/, include: [/src/], exclude: /node_modules/, loader: 'babel-loader'}
            ]
        },
        devServer: {
        }
    };

    return merge(baseConfig, newConfig);
}

module.exports = generateConfig;