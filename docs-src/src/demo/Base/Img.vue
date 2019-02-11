<template>
    <Doc>
        <P>使用Img标签定义文档图片，src定义图片路径。</P>
        <P>使用字符串定义路径，不经过webpack的loader，注意路径是编译后的相对路径。</P>
        <Img :src="'./static/icon.svg'" />
        <P>使用属性定义路径，经过webpack的loader，注意路径是编译前的相对路径。</P>
        <Img src="../../../static/icon.svg" />
    </Doc>
</template>
<script>
export default {
}
</script>
