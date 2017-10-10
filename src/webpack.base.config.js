'use strict';
module.exports = {
    entry: {
        app: ['./src/app.js']
    },
    output: {
        filename: '[name]/[name].bundle.js',
        chunkFilename: '[name]/[name].bundle.js',
        sourceMapFilename: '[name]/[name].bundle.js.map'
    },
    externals: {

    },
    module: {
        loaders: [
            {test: /\.scss$/, use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]},
            {test: /\.js$/, include: [/src/], exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    devtool: 'eval-source-map'
};