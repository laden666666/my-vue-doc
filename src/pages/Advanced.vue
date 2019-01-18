<template>
    <Doc>
        <H1>基础文档控件</H1>
        <P>根据my系列控件的需求，文档框架还提供了一些高级文档组件，如Demo控件、Vue的props说明组件等。</P>

        <H2>源代码展示控件</H2>
        <P>使用<Strong>Code</Strong>标签先显示源代码。</P>
        <Demo :demo="Code" title="源代码展示控件">
            <div slot="desc">使用Code可以标签展示源代码。</div>
        </Demo>

        <H3>按钮形式</H3>
        <P>设置<Strong>onlyBtn</Strong>属性，Code控件将仅展示一个按钮，而不直接展示源码。</P>
        <Demo :demo="CodeOnlyBtn" title="按钮形式">
            <div slot="desc">设置<Strong>onlyBtn</Strong>属性。</div>
        </Demo>

        <H3>Props:</H3>
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

        <H2>属性说明书</H2>
        <P>使用<Strong>Instructions</Strong>控件做一组属性说明书。</P>
        <Demo :demo="Instructions" :vertical="true" title="属性说明书">
            <div slot="desc">属性说明书。</div>
        </Demo>
    </Doc>
</template>
<script>
import Code from '../demo/Advanced/Code';
import CodeOnlyBtn from "../demo/Advanced/CodeOnlyBtn";
import Instructions from "../demo/Advanced/Instructions";
export default {
    data(){
        return {
            Code,
            CodeOnlyBtn,
            Instructions,
        }
    }
}
</script>
