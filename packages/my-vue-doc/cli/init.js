const pathResolve = require('../build/pathResolve')
const fs = require('fs-extra')

module.exports = function(){
    if(fs.existsSync(pathResolve.resolveDocsPath('docs-src'))){
        throw new Error('docs-src directory already exists')
    }
    const package = require(pathResolve.resolveDocsPath('./package.json'))
    let name = package.name

    if(!name){
        throw new Error('The current directory is not an npm package')
    }

    return Promise.resolve()
    .then(()=>{
        return fs.copy(pathResolve.resolveLibPath('docs-src'),
            pathResolve.resolveDocsPath('docs-src'))
    })
    .then(()=>{
        return fs.emptyDir(pathResolve.resolveDocsPath('docs-src/demo'))
    })
    .then(()=>{
        return fs.emptyDir(pathResolve.resolveDocsPath('docs-src/pages'))
    })
    .then(()=>{
        return fs.copy(pathResolve.resolveLibPath('docs-src/pages/Index.vue'),
            pathResolve.resolveDocsPath('docs-src/pages/Index.vue'))
    })
    .then(()=>{
        return fs.outputJSON(pathResolve.resolveDocsPath('docs-src/app.json'), {
            "name": name,
            "background": "BackgroundColor",
            "logo": "./static/icon.svg",
            "subhead": "请输入库的副标题",
            "describe": "请输入库的描述",
            "link": [
                {
                    "title": "文档",
                    "path": "/",
                    "primary": true
                },
                {
                    "title": "源码",
                    "path": "https://www.github.com/laden666666/" + name
                }
            ],
            "menu": [
                {
                    "title": "主页",
                    "path": "#/"
                },
            ]
        })
    })
}
