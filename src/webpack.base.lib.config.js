'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

function generateConfig(packageFile, entries, srcdir) {
    const packageDirectory = `${packageFile.name}-${packageFile.version}`;
    const entry = Object.keys(entries).reduce((obj,key) => {
        obj[`${key}_routes`] = entries[key];
        return obj;
    }, {});

    const newConfig = {
        entry: {},
        output: {
            path: path.join(srcdir, 'lib', packageDirectory),
            filename: '[name].js',
            chunkFilename: '[name].[chunkhash].bundle.js',
            library: '[name]',
            libraryTarget: 'umd',
            publicPath: packageFile.name + '/',
            jsonpFunction: 'WSJsonp_' + packageFile.name.replace(/[^0-9a-z]/gi, '')
        },
        resolve: {
            root: path.resolve(srcdir, 'src')
        },
        plugins: {

        },
        module: {
            loaders: [
                {test: /\.js$/, include: [/src/], exclude: /node_modules/, loader: 'babel-loader'}
            ]
        }
    };

    let finalConfig = merge(baseConfig, newConfig);
    finalConfig.entry = entry;
    return finalConfig;
}

module.exports = generateConfig;