import Vue from 'vue'
const lang = localStorage.getItem('locales') || 'zh-CN'
if('zh-CN' === lang){
    Vue.prototype.$LANG = require('./zh-CN').default
} else if('en-US' === lang){
    Vue.prototype.$LANG = require('./en-US').default
}
