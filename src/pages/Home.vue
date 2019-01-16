<template>
    <Doc>
        <H1>文档框架</H1>
        <P>这是一个用于创建<Strong>my系列控件</Strong>文档的框架，样式参考<A href="https://docsify.js.org">docsify</A>，框架基于<A href="https://www.iviewui.com">iview</A>。目前不对外开放，仅针对<Strong>my系列控件</Strong>定制化使用。</P>

        <H2>目录说明</H2>
        <P></P>

        <H3>例子目录</H3>
        <P>供Demo控件使用的例子vue文件所放目录。该目录的文件会通过框架开发的<Strong>vue-source_loader</Strong>将Demo的源码读取出来，供Demo框架展示。</P>

        <H3>Pages目录</H3>
        <P>说明文档所放的目录。</P>
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
