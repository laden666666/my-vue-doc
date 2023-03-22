'use strict'
const pathResolve = require('./pathResolve')
const merge = require('webpack-merge').merge
const baseWebpackConfig = require('./webpack.base.conf')
const TerserPlugin = require('terser-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
	mode: 'production',
    optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				// 多进程
				parallel: true,
				//删除注释
				extractComments: false,
				terserOptions: {
					compress: { // 生产环境去除console
						drop_console: true,
						drop_debugger: true,
					},
				},
			}),
			// new CssMinimizerPlugin()
		],
    }
})

module.exports = webpackConfig
