'use strict';
const generateConfig = require('./src/webpack.base.lib.config');
const packageFile = require('./package.json');

const webpackConfig = generateConfig(packageFile, {
    'container-wrapper': './src/frame/index.js'
}, __dirname);
module.exports = webpackConfig;