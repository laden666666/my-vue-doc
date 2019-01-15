<template>
    <Doc>
        <H1>文档框架</H1>
        <P>这是一个用于创建my系列控件文档的框架，样式参考<A href="https://docsify.js.org">docsify</A>，框架基于<A href="https://www.iviewui.com">iview</A>。</P>

        <H2>文档根标签</H2>
        <P>一篇文档的根标签。</P>

        <Demo title="Doc示例" :demo="Doc">
            <div slot="desc">使用Doc定义文档根标签</div>
        </Demo>

        <H2>文档标题</H2>
        <P>使用H1、H2、H3定义文档标签。</P>

        <Demo title="文档标题示例" :demo="Title">
            <div slot="desc">使用H1、H2、H3定义文档标签。</div>
        </Demo>

        <H2>文档段落</H2>
        <P>使用P标签定义文档段落。</P>

        <Demo title="文档段落示例" :demo="P">
            <div slot="desc">使用P标签定义文档段落。</div>
        </Demo>

        <H2>超链接</H2>
        <P>使用A标签定义超链接，支持href属性。超链接中，如果href是非“http”、“https”、“//”开头的，表示是站内链接，会跳转到该链接处；如果是表示非站内链接，会再打开一个浏览器tab跳转的链接页面。</P>

        <Demo title="文档段落示例" :demo="A">
            <div slot="desc">使用A标签定义超链接。</div>
        </Demo>

        <H2>强调</H2>
        <P>使用Strong标签定义强调的语句。</P>

        <Demo title="文档段落示例" :demo="Strong">
            <div slot="desc">使用Strong标签定义强调的语句。</div>
        </Demo>
    </Doc>
</template>
<script>
import Doc from '../demo/Home/Doc'
import Title from '../demo/Home/Title'
import P from '../demo/Home/P'
import A from '../demo/Home/A'
import Strong from '../demo/Home/Strong'
export default {
    data(){
        return {
            Doc,
            Title,
            P,
            A,
            Strong,
        }
    }
}
</script>
