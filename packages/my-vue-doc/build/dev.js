
const childProcess = require('child_process');
const pathResolve = require('./pathResolve');

module.exports = function() {
    childProcess.spawn(
        pathResolve.resolveLibPath('./node_modules/.bin/webpack'),
        ['serve', '--config', pathResolve.resolveLibPath('./build/webpack.dev.conf.js')],
        {
            cwd: process.cwd(),
            stdio: 'inherit'
        }
    )
    // childProcess.spawn(
    //     'npm',
    //     ['run', 'dev'],
    //     {
    //         cwd: process.cwd(),
    //         stdio: 'inherit'
    //     }
    // )

}
