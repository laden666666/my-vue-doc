'use strict'
const pathResolve = require('./pathResolve')
const merge = require('webpack-merge').merge;
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    mode:'development',
    // these devServer options should be customized in /config/index.js
    devServer: {
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        static: {
            directory: pathResolve.resolveDocsPath('./docs-src/static/'),
            publicPath: '/static'
        },
    },
});
