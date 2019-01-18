export default {
    name: 'my-vue-doc',
    background: 'BackgroundColor',
    logo: './static/icon.svg',
    version: "v0.0.0",
    subhead: "一个用于创建my系列控件文档的框架",
    describe: '这是一个用于创建my系列控件文档的框架，样式参考iview。目前不对外开放，仅针对my系列控件定制化使用。',
    link: [{
        title: '文档',
        path: '/',
        primary: true,
    }, {
        title: '源码',
        path: 'https://www.github.com/laden666666/my-vue-doc',
    },],
    menu: [{
        title: '主页',
        path: '#/',
    }, {
        title: '基础文档控件',
        path: '#/Base',
    }, {
        title: '进阶文档控件',
        children: [{
            title: '源代码展示控件',
            path: '#/Advances/Code',
        }, {
            title: '属性说明书',
            path: '#/Advances/Instructions',
        }, {
            title: 'Vue的props说明书',
            path: '#/Advances/Props',
        }, {
            title: 'Vue的Demo展示',
            path: '#/Advances/Demo',
        }]
    }]
}