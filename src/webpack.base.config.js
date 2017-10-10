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
            {test: /\.js$/, include: [
                /node_modules\/container-wrapper/
                ,/src/], loader: 'babel-loader'}
        ]
    },
    devtool: 'eval-source-map'
};