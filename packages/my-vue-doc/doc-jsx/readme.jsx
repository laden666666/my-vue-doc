<doc>
    <title>文档框架</title>
    <p>这是一个用于创建<span>my系列控件</span>文档的框架，样式参考<a href="https://docsify.js.org">docsify</a> ，框架基于<a href="https://www.iviewui.com">iview</a> 。目前不对外开放，仅针对<span>my系列控件</span>定制化使用。</p>

    <h2>使用</h2>
    <p>使用npm安装<span>my-vue-doc</span>到全局。</p>
    <code lang="shell">{'npm install my-vue-doc -g'}</code>
    <p><span>my-vue-doc</span>提供了cli工具给<span>my系列库</span>做文档服务。</p>

    <h3>初始化</h3>
    <p>执行：</p>
    <code lang="shell">{'mydoc init'}</code>
    <p>然后会在当前工程中创建一个<span>/docs-src</span>目录。</p>

    <h3>编辑模式</h3>
    <p>执行：</p>
    <code lang="shell">{'mydoc dev'}</code>
    <p>然后在<span>/docs-src/pages</span>目录中编辑文档即可。</p>

    <h3>发布模式</h3>
    <p>执行：</p>
    <code lang="shell">{'mydoc build'}</code>
    <p>会build出<span>docs</span>目录。</p>
    
    <h2>目录说明</h2>
    <p>该框架留给用户配置有三处：</p>

    <li>文档目录</li>
    <li>例子目录</li>
    <li>全局配置</li>
    
    <h3>文档目录</h3>
    <p>文档目录在<span>/docs-src/pages</span>中，不同于VuePress那种基于MD，该框架是使用Vue的标签构建文档的，这些文档就创建在该目录中。</p>
    <p>创建文档的Vue控件，请参考<a href="https://laden666666.github.io/my-vue-doc/#/Base">基础控件</a> 和高级控件。</p>
    <p>文档的首页要求是在pages目录下的index.vue页面，该页面框架会做静态化，以提升seo的效率，其他页面不会做静态化处理。</p>

    <h3>例子目录</h3>
    <p>供Demo控件使用的例子vue文件所放目录。该目录的文件会通过框架开发的<span>vue-source_loader</span>将Demo的源码读取出来，供Demo框架展示。</p>

    <h3>全局配置</h3>
    <p><span>/docs-src/app.js</span>是框架的主配置文件，配置如文档库名称、版本等功能，具体请参考<a href="https://laden666666.github.io/my-vue-doc/#/AppConfig"></a> 。</p>

    <h3>app.js</h3>
    <p>可以在<span>/docs-src/app.js</span>中引入全局样式或者当前库。</p>
</doc>
