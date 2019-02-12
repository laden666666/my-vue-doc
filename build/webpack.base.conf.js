'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const pathResolve = require('./pathResolve')
const app = require(pathResolve.resovleDocsPath('./src/app.json'))
const vueLoaderConfig = require('./vue-loader.conf')

module.exports = {
    context: pathResolve.resovleFramePath('./'),
    entry: {
        app: pathResolve.resovleFramePath('./src/main.js'),
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            pathResolve.resovleFramePath('./node_modules'), 
            pathResolve.resovleDocsPath('./node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'vue': pathResolve.resovleAnyPath('./node_modules/vue'),
            'vuex': pathResolve.resovleAnyPath('./node_modules/vuex'),
            'docs-src': pathResolve.resovleDocsPath('./src'),
            'background': path.join(__dirname, '../src/components/Background/strategy/', app.background + '.vue')
        }
    },
    resolveLoader: {
        // 告诉 webpack 该去那个目录下找 loader 模块
        modules: [
            pathResolve.resovleDocsPath('node_modules'), 
            pathResolve.resovleFramePath('./node_modules'), 
            path.resolve(__dirname, 'loader')
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: [{
                    loader: 'vue-source-loader',
                }, {
                    loader: 'vue-loader',
                    options: vueLoaderConfig
                }]
             
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: require('./babelOptions.js'),
                include: [
                    pathResolve.resovleDocsPath('./src'), 
                    pathResolve.resovleFramePath('./src'), 
                    pathResolve.resovleAnyPath('./node_modules/webpack-dev-server/client'), 
                    pathResolve.resovleAnyPath('./node_modules/vue-particles'), 
                    pathResolve.resovleAnyPath('./node_modules/iview'), 
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}
