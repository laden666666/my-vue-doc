const fs = require('fs-extra');
const btoa = require('btoa');
const path = require('path');
const pathResolve = require('../pathResolve');

let demoPath = pathResolve.resolveDocsPath('./docs-src/demo/')

module.exports = function codeLoader(source) {
    // 不处理不在demoPath目录以外的文件
    if (path.relative(demoPath, this.resourcePath).startsWith('..')){
        return source
    }
    if (source.includes('export default component.exports')) {
        const resource = this.resourcePath;

        // 获取base64后的源码
        let sourceCode = btoa(encodeURI(fs.readFileSync(resource).toString()))
        let insertCode =
`;
if(typeof component !== 'undefined' && component.exports){
    component.exports.__vueSource = '${sourceCode}'
}
`
        source = source + insertCode;
    }

    return source
};
