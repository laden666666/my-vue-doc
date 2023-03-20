<template>
    <Doc>
        <H1>TimeLine</H1>
        <P>使用<Strong>TimeLine</Strong>控件完成对一系列信息进行时间排序时，垂直地展示。</P>
        <Demo :demo="TimeLine" title="时间轴控件示例" :vertical="true">
            <div >时间轴控件示例。</div>
        </Demo>

        <H2>Props</H2>
        <Props type="h3" :data="`{
            // 是否是倒序显示
            reverse: {
                type: Boolean,
                default: true
            }
        }`"></Props>

        <H2>Slots</H2>
        <Instructions type="h3" :data="[{
            name: 'timex',
            describe: '用于插入每个时间点的内容，x是一个数字，用于给各个时间排序',
        }]"></Instructions>
    </Doc>
</template>
<script>
import TimeLine from '../../demo/Advanced/TimeLine/TimeLine';
export default {
    data(){
        return {
            TimeLine
        }
    }
}
</script>
