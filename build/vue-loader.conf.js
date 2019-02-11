'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap

module.exports = {
    loaders: Object.assign({}, utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }), {
        js: [
            {
                loader: 'babel-loader',
                options: require('./babelOptions.js')
            }
        ]
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        Img: 'src',
        image: 'xlink:href'
    }
}
