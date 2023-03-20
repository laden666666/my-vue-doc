<h2 align="center">文档框架</h2>
这是一个用于创建my系列控件文档的框架，样式参考[docsify](https://docsify.js.org "")  ，框架基于[iview](https://www.iviewui.com "")  。目前不对外开放，仅针对my系列控件定制化使用。


## 使用

使用npm安装my-vue-doc到全局。

```shell
npm install my-vue-doc -g
```

my-vue-doc提供了cli工具给my系列库做文档服务。


### 初始化

执行：

```shell
mydoc init
```

然后会在当前工程中创建一个/docs-src目录。



### 编辑模式

执行：

```shell
mydoc dev
```

然后在/docs-src/pages目录中编辑文档即可。



### 发布模式

执行：

```shell
mydoc build
```

会build出docs目录。




## 目录说明

该框架留给用户配置有三处：

*   文档目录
*   例子目录
*   全局配置

### 文档目录

文档目录在/docs-src/pages中，不同于VuePress那种基于MD，该框架是使用Vue的标签构建文档的，这些文档就创建在该目录中。


创建文档的Vue控件，请参考[基础控件](https://laden666666.github.io/my-vue-doc/#/Base "")  和高级控件。


文档的首页要求是在pages目录下的index.vue页面，该页面框架会做静态化，以提升seo的效率，其他页面不会做静态化处理。



### 例子目录

供Demo控件使用的例子vue文件所放目录。该目录的文件会通过框架开发的vue-source_loader将Demo的源码读取出来，供Demo框架展示。



### 全局配置

/docs-src/app.js是框架的主配置文件，配置如文档库名称、版本等功能，具体请参考[](https://laden666666.github.io/my-vue-doc/#/AppConfig "")  。



### app.js

可以在/docs-src/app.js中引入全局样式或者当前库。



