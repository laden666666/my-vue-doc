<template>
    <Doc>
        <H1>基础文档控件</H1>
        <P>根据my系列控件的需求，文档框架还提供了一些高级文档组件，如Demo控件、Vue的props说明组件等。</P>

        <H2>源代码展示控件</H2>
        <P>使用<Strong>Code</Strong>标签先显示源代码。</P>
        <Props :data="`{
            // 展示代码的语言
            lang: {
                type: String,
                default: 'javascript'
            },
            // 只渲染一个展示代码的按钮，而不直接显示代码
            onlyBtn: {
                type: Boolean,
                default: false
            },
            // 源代码
            code: {
                type: String,
                required: true
            }
        }`"></Props>
    </Doc>
</template>
<script>
export default {
    data(){
        return {
        }
    }
}
</script>
