import Vue from 'vue'
const lang = localStorage.getItem('locales') || 'zh-CN'
let langInfo = require(`./${lang}'`)
Vue.prototype.$LANG = langInfo