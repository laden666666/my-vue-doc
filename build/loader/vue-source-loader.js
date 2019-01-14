const loaderUtils = require('loader-utils');
const fs = require('fs-extra');
const btoa = require('btoa');

module.exports = function codeLoader(source) {

    // 获取base64后的源码
    let sourceCode = btoa(encodeURI(fs.readFileSync(this.resource).toString()))
    let insertCode = 
`;
if(typeof Component !== 'undefined' && Component.exports){
    Component.exports.__vueSource = '${sourceCode}'
}
`



    source = source + insertCode
    return source
};