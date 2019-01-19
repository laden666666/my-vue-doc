<doc>
    <title>文档框架 —— my-vue-doc</title>
    <p>这是一个用于创建<span>my系列控件</span>文档的框架，样式参考<span>docsify</span>，框架基于<span>iview</span>。目前不对外开放，仅针对<span>my系列控件</span>定制化使用。</p>

    <h2>使用</h2>
    <p>下载整个工程，然后执行：</p>
    <code>npm install</code>
    <p>即可安装好然后。</p>

    <h3>编辑模式</h3>
    <p>执行：</p>
    <code>npm install dev</code>
    <p>然后在<span>/src/pages</span>目录中编辑文档即可。</p>

    <h3>发布模式</h3>
    <p>执行：</p>
    <code>npm install build</code>
    <p>然后将<span>docs</span>目录拷贝到github的对应项目中的<span>docs</span>目录即可。</p>

    <h2>目录说明</h2>
    <p>该框架留给用户配置有三处：</p>

    <li>文档目录</li>
    <li>例子目录</li>
    <li>全局配置</li>
    
    <h3>文档目录</h3>
    <p>文档目录在<span>/src/pages</span>中，不同于Vuepress那种基于MD，该框架是使用Vue的标签构建文档的，这些文档就创建在该目录中。</p>
    <p>创建文档的Vue控件，请参考<a href="laden666666.github.io/my-vue-doc#/Base">基础控件</a>和高级控件。</p>
    <p>文档的首页要求是在pages目录下的index.vue页面，该页面框架会做静态化，以提升seo的效率，其他页面不会做静态化处理。</p>

    <h3>例子目录</h3>
    <p>供Demo控件使用的例子vue文件所放目录。该目录的文件会通过框架开发的<span>vue-source_loader</span>将Demo的源码读取出来，供Demo框架展示。</p>

    <h3>全局配置</h3>
    <p><span>/src/app.js</span>是框架的主配置文件，配置如文档库名称、版本等功能，具体请参考<a href="laden666666.github.io/my-vue-doc#/appConfig"></a>。</p>

</doc>
