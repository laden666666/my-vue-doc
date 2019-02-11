
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfigPromise = require('./webpack.dev.conf');

module.exports = function(){

    webpackConfigPromise.then(webpackConfig=>{
        const compiler = Webpack(webpackConfig);
        const devServerOptions = Object.assign({}, webpackConfig.devServer, {
            stats: {
                colors: true,
            },
        });
        const server = new WebpackDevServer(compiler, devServerOptions);
        
        server.listen(() => {
            console.log('Starting server on http://localhost:8080');
        });
    })
}

