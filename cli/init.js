const pathResolve = require('../build/pathResolve')
const fs = require('fs-extra')

let name;
try{
    const package = require(pathResolve.resovleDocsPath('./package.json'))
    name = package.name
} catch (e){}


module.exports = function(){
    if(fs.existsSync(pathResolve.resovleDocsPath('docs-src'))){
        throw new Error('docs-src directory already exists')
    }

    return Promise.resolve()
    .then(()=>{
        return fs.copy(fs.existsSync(pathResolve.resovleFramePath('docs-src')), 
            fs.existsSync(pathResolve.resovleDocsPath('docs-src')), {
                filter: (src)=>{
                    return !/node_modules/.test(src)
                }
            })
    })
    .then(()=>{
        return fs.emptyDir(pathResolve.resovleDocsPath('docs-src/src/demo'))
    })
    .then(()=>{
        return fs.emptyDir(pathResolve.resovleDocsPath('docs-src/src/pages'))
    })
    .then(()=>{
        return fs.copy(pathResolve.resovleFramePath('docs-src/src/pages/index.vue'),
            pathResolve.resovleDocsPath('docs-src/src/pages/index.vue'))
    })
    .then(()=>{
        return fs.outputJSON(pathResolve.resovleDocsPath('docs-src/src/app.json'). {
            "name": "my-vue-doc",
            "background": "BackgroundColor",
            "logo": "./static/icon.svg",
            "subhead": "一个用于创建my系列控件文档的框架",
            "describe": "这是一个用于创建my系列控件文档的框架，样式参考iview。目前不对外开放，仅针对my系列控件定制化使用。",
            "link": [
                {
                    "title": "文档",
                    "path": "/",
                    "primary": true
                },
                {
                    "title": "源码",
                    "path": "https://www.github.com/laden666666/my-vue-doc"
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