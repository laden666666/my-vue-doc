<template>
    <Doc>
        <H1>浏览器兼容性列表——BrowserList</H1>
        <P>使用<Strong>BrowserList标签</Strong>浏览器兼容性列表。</P>
        
        <Demo :vertical="true" :demo="BrowserList" title="浏览器兼容性列表">
            <div >使用<Strong>BrowserList标签</Strong>浏览器兼容性列表。</div>
        </Demo>

        <H2>Props</H2>
        <P>该控件没有固定的Props，填任意属性名都会当做浏览器名解析。当不填属性值时候，会视为库兼容属性名对应的浏览器；当属性值为false时候，表示不兼容该属性名对应的浏览器；如果属性值是一个字符串，视为兼容列表里面属性名对应的值。</P>
    </Doc>
</template>
<script>
import BrowserList from '../../demo/Advanced/BrowserList/BrowserList';
export default {
    data(){
        return {
            BrowserList,
        }
    }
}
</script>
