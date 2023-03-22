const path = require('path')
const fs = require('fs')

//相对框架的路径
exports.resolveLibPath = function(...relativePath){
    return path.join(__dirname, '../', ...relativePath)
}

//相对框架的 npm 包的路径
exports.resolveLibNpmPath = function(npmName) {
    const packagePath = require.resolve(npmName + '/package.json', { paths: [__dirname] });
    if (packagePath) {
        return path.join(packagePath, '..');
    }
}

//相对文档的路径
exports.resolveDocsPath = function( ...relativePath){
    return path.join(process.cwd(), ...relativePath)
}

//相对框架的 npm 包的路径
exports.resolveDocsNpmPath = function(npmName) {
    const packagePath = require.resolve(npmName + '/package.json', { paths: [process.cwd()] });
    if (packagePath) {
        return path.join(packagePath, '..');
    }
}

//获取任意一个存在的目录
exports.resolveAnyPath = function(...relativePath){
    return fs.existsSync(exports.resolveDocsPath(...relativePath)) ? exports.resolveDocsPath(...relativePath)
        : exports.resolveLibPath(...relativePath)
}
