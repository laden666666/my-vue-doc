<template>
    <Doc>
        <H1>文档框架</H1>
        <P>用于创建文档相关内容的控件展示。</P>

        <H2>文档框架</H2>
        <P>用于创建整个文档，所有</P>

        <Demo title="Doc示例" :demo="Doc">
            <div slot="desc"><span>xxx</span></div>
        </Demo>
    </Doc>
</template>
<script>
import Doc from '../demo/Home/Doc'
export default {
    data(){
        return {
            Doc
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
