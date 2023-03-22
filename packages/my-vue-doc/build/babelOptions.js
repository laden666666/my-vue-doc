const pathResolve = require('./pathResolve');
const babelPresetEnvPath = pathResolve.resolveLibNpmPath('@babel/preset-env');


module.exports = {
    "presets": [
        babelPresetEnvPath,
        {}
    ],
}
