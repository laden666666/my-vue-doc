<template>
    <Doc>
        <H1>显示npm库相关的信息——NpmInfo</H1>
        <P>使用<Strong>NpmInfo标签</Strong>显示指定npm库相关的信息，主要是基于<A href="img.shields.io">img.shields.io</A>这个网站来生成项目和npm相关的信息。</P>
        
        <Demo :demo="NpmInfo" title="显示npm相关的信息">
            <div >使用<Strong>NpmInfo标签</Strong>显示npm库相关的信息。</div>
        </Demo>

        <H2>Props</H2>
        <Props type="h3" :data="`{
            // npm库的名字
            name: {
                type: String,
                required: true
            },
            // 是否显示npm库的版本信息
            version: {
                type: Boolean,
                default: false
            },
            // 是否显示npm库的没月下载次数
            downloads: {
                type: Boolean,
                default: false
            },
            // 是否显示npm库的所使用的协议
            license: {
                type: Boolean,
                default: false
            },
            // 是否居中显示
            center: {
                type: Boolean,
                default: false
            },
        }`"></Props>
    </Doc>
</template>
<script>
import NpmInfo from '../../demo/Advanced/NpmInfo/NpmInfo';
export default {
    data(){
        return {
            NpmInfo,
        }
    }
}
</script>
