const path = require('path')
const fs = require('fs')

//相对框架的路径
exports.resovleFramePath = function(...relativePath){
    return path.join(__dirname, '../', ...relativePath)
}

//相对文档的路径
exports.resovleDocsPath = function( ...relativePath){
    return path.join(process.cwd(), ...relativePath)
}

//获取任意一个存在的目录
exports.resovleAnyPath = function(...relativePath){
    return fs.existsSync(exports.resovleDocsPath(...relativePath)) ? exports.resovleDocsPath(...relativePath)
        : exports.resovleFramePath(...relativePath)
}
