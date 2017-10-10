'use strict';
const generateConfig = require('./src/webpack.app.config');
const webpackConfig = generateConfig(__dirname);

module.exports = webpackConfig;