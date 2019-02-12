
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfigPromise = require('./webpack.dev.conf');

module.exports = function(){
    process.env.NODE_ENV = 'development'

    webpackConfigPromise.then(webpackConfig=>{
        const compiler = Webpack(webpackConfig);
        const devServerOptions = Object.assign({}, webpackConfig.devServer, {
            stats: {
                colors: true,
            },
        });
        const server = new WebpackDevServer(compiler, devServerOptions);
        
        server.listen(devServerOptions.port, devServerOptions.host, (err) => {
            if(err){
                console.error(err)
            } else {
                console.log('Starting server http://' + devServerOptions.host + ':' + devServerOptions.port);
            }
           
        });
    })
}