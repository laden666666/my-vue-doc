<template>
    <Doc>
        <H1>文档框架</H1>
        <P>这是一个用于创建my系列控件文档的框架，样式参考docsify，框架基于iview。</P>

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
    </Doc>
</template>
<script>
import Doc from '../demo/Home/Doc'
import Title from '../demo/Home/Title'
import P from '../demo/Home/P'
export default {
    data(){
        return {
            Doc,
            Title,
            P
        }
    }
}
</script>


<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
