<template>
    <Doc>
        <H1>文档框架</H1>
        <P>这是一个用于创建<Strong>my系列控件</Strong>文档的框架，样式参考<A href="https://docsify.js.org">docsify</A>，框架基于<A href="https://www.iviewui.com">iview</A>。目前不对外开放，仅针对<Strong>my系列控件</Strong>定制化使用。</P>

        <H2>使用</H2>
        <P>使用npm安装<span>my-vue-doc</span>到全局。</P>
        <Code code="npm install my-vue-doc -g" lang="shell"></Code>
        <P><Strong>my-vue-doc</Strong>提供了cli工具给<Strong>my系列库</Strong>做文档服务。</P>

        <H3>初始化</H3>
        <P>执行：</p>
        <Code code="mydoc init" lang="shell"></Code>
        <P>然后会在当前工程中创建一个<Strong>/docs-src</Strong>目录。</p>

        <H3>编辑模式</H3>
        <P>执行：</p>
        <Code code="mydoc dev" lang="shell"></Code>
        <P>然后在<Strong>/docs-src/pages</Strong>目录中编辑文档即可。</p>

        <H3>发布模式</H3>
        <P>执行：</p>
        <Code code="mydoc build" lang="shell"></Code>
        <P>会build出<Strong>docs</Strong>目录。</p>
        
        <H2>目录说明</H2>
        <P>该框架留给用户配置有三处：</P>

        <Li>文档目录</Li>
        <Li>例子目录</Li>
        <Li>全局配置</Li>
        
        <H3>文档目录</H3>
        <P>文档目录在<Strong>/docs-src/pages</Strong>中，不同于VuePress那种基于MD，该框架是使用Vue的标签构建文档的，这些文档就创建在该目录中。</P>
        <P>创建文档的Vue控件，请参考<A href="#/Base">基础控件</A>和高级控件。</P>
        <P>文档的首页要求是在pages目录下的index.vue页面，该页面框架会做静态化，以提升seo的效率，其他页面不会做静态化处理。</P>

        <H3>例子目录</H3>
        <P>供Demo控件使用的例子vue文件所放目录。该目录的文件会通过框架开发的<Strong>vue-source_loader</Strong>将Demo的源码读取出来，供Demo框架展示。</P>

        <H3>全局配置</H3>
        <P><Strong>/docs-src/app.js</Strong>是框架的主配置文件，配置如文档库名称、版本等功能，具体请参考<A href="#/AppConfig"></A>。</P>

        <H3>app.js</H3>
        <P>可以在<Strong>/docs-src/app.js</Strong>中引入全局样式或者当前库。</P>

        <!-- <Comments></Comments> -->
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
