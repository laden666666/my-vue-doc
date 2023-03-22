const { VueLoaderPlugin } = require('vue-loader');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require('path')
const pathResolve = require('./pathResolve');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app = require(pathResolve.resolveDocsPath('./docs-src/app.json'))

module.exports = {
    context: pathResolve.resolveLibPath('./'),
    entry: {
        app: pathResolve.resolveLibPath('./src/main.js'),
    },
    output: {
        path: pathResolve.resolveDocsPath('./docs'),
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            pathResolve.resolveLibPath('./node_modules'),
            pathResolve.resolveDocsPath('./node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'vue': pathResolve.resolveLibNpmPath('vue'),
            [app.name]: pathResolve.resolveDocsNpmPath(app.name),
            'docs-src': pathResolve.resolveDocsPath('./docs-src'),
            'app-name': pathResolve.resolveDocsPath('./'),
            'background': pathResolve.resolveLibPath('./src/components/Background/strategy/', app.background + '.vue')
        }
    },
    resolveLoader: {
        // 告诉 webpack 该去那个目录下找 loader 模块
        modules: [
            pathResolve.resolveLibPath('./node_modules'),
            path.resolve(__dirname, 'loader')
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-source-loader',
                }, {
                    loader: 'vue-loader',
                }]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: require('./babelOptions.js')
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 100000,
            //     }
            // },
            // {
            //     test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 100000,
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 100000,
            //     }
            // },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: app.name,
            describe: app.describe,
            inject: true
        }),
        new VueLoaderPlugin(),
    ]
}
