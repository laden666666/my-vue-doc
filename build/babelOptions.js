const pathResolve = require('./pathResolve')

module.exports = {
    "presets": [
        [pathResolve.resovleAnyPath('./node_modules/babel-preset-env/'), {
            "modules": false,
            "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
        }],
        pathResolve.resovleAnyPath('./node_modules/babel-preset-stage-2/')
    ],
    "plugins": [
        pathResolve.resovleAnyPath('./node_modules/babel-plugin-transform-vue-jsx/'),
        pathResolve.resovleAnyPath('./node_modules/babel-plugin-transform-runtime/'),
        [
            pathResolve.resovleAnyPath('./node_modules/babel-plugin-import/'),
            {
                "libraryName": "iview",
                "libraryDirectory": "src/components"
            }
        ]
    ],
    babelrc: false ,
}