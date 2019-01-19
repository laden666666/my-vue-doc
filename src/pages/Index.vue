<template>
    <Doc>
        <H1>文档框架</H1>
        <P>这是一个用于创建<Strong>my系列控件</Strong>文档的框架，样式参考<A href="https://docsify.js.org">docsify</A>，框架基于<A href="https://www.iviewui.com">iview</A>。目前不对外开放，仅针对<Strong>my系列控件</Strong>定制化使用。</P>

        <H2>目录说明</H2>
        <P>该框架留给用户配置有三处：</P>

        <Li>文档目录</Li>
        <Li>例子目录</Li>
        <Li>全局配置</Li>
        
        <H3>文档目录</H3>
        <P>文档目录在<Strong>/src/pages</Strong>中，不同于VuePress那种基于MD，该框架是使用Vue的标签构建文档的，这些文档就创建在该目录中。</P>
        <P>创建文档的Vue控件，请参考<A href="#/Base">基础控件</A>和高级控件。</P>
        <P>文档的首页要求是在pages目录下的index.vue页面，该页面框架会做静态化，以提升seo的效率，其他页面不会做静态化处理。</P>

        <H3>例子目录</H3>
        <P>供Demo控件使用的例子vue文件所放目录。该目录的文件会通过框架开发的<Strong>vue-source_loader</Strong>将Demo的源码读取出来，供Demo框架展示。</P>

        <H3>全局配置</H3>
        <P><Strong>/src/app.js</Strong>是框架的主配置文件，配置如文档库名称、版本等功能，具体请参考<A href="#/AppConfig"></A>。</P>

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
