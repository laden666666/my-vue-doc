<template>
    <div class="props">
        <table class="mydoc_api_table">
            <tr>
                <th v-if="calcPropskey['name']">属性名</th>
                <th v-if="calcPropskey['type']">类型</th>
                <th v-if="calcPropskey['default']">默认值</th>
                <th v-if="calcPropskey['describe'] || calcPropskey['demo']">说明</th>
            </tr>
            <tr v-for="(param, index) in calcPropsData" :key="index">
                <td v-if="calcPropskey['name']"><strong>{{param.name || ''}}</strong></td>
                <td v-if="calcPropskey['type']" v-html="param.type || ''"></td>
                <td v-if="calcPropskey['default']" v-html="param.default || '-'"></td>
                <td v-if="calcPropskey['describe'] || calcPropskey['demo']">
                    <Code :code="param.demo" v-if="calcPropskey['demo']"></Code>
                    <pre>{{param.describe || ''}}</pre>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import highlight from '../Code/highlight'

    export default {
        props: {
            // 一个属性的说明书，例如：
            // [{
            //     name: '属性名',
            //     type: 'Number', 
            //     default: '"1"', 
            //     required: true, 
            //     describe: '说明', 
            //     demo: '示例代码'
            // },]
            data: {
                type: Array,
                required: true
            },
        },
        computed: {
            calcPropsData(){
                return this.data.map(item=> {
                    return {
                        name: item.name,
                        type: highlight(item.type), 
                        default: highlight(item.default), 
                        required: highlight(item.required), 
                        describe: item.describe, 
                        demo: item.demo,
                    }
                })
            },
            calcPropskey(){
                return this.data.reduce((map, item, index)=>{
                    Object.keys(map).forEach(key=>{
                        map[key] = map[key] || item[key] !== undefined
                    })

                    return map
                } ,{
                    name: false,
                    type: false, 
                    default: false, 
                    required: false, 
                    describe: false, 
                    demo: false,
                })
            },
        },
    };

</script>


<style scoped>
    .props {
        width: 100%;
        line-height: 40px;
        text-align: left;
        margin-top: 20px;
    }


    .mydoc_api_describe {
        box-sizing : border-box ;
        position : relative ;
        padding : 24px 15px ;
        margin : 0px 0px 15px ;
        border-color : rgb(0,0,0) ;
        border-style : solid ;
        border-width : 1px ;
        box-shadow : none ;
        background-color : rgb(255,255,255) ;
        border-radius : 4px 4px 0px 0px ;
        color : rgb(51, 51, 51) ;
    }
    .mydoc_api_content {
        box-sizing : border-box ;
        margin : -16px 0px 15px ;
        padding : 9px 14px ;
        background-color : rgb(255,255,255) ;
        border : 1px solid rgb(0,0,0) ;
        border-radius : 0px 0px 4px 4px ;
        color : rgb(51, 51, 51) ;
    }

    .mydoc_api_table{
        margin : 15px 0px 0px ;
        padding : 0px ;
        border : 1px solid rgb(170, 170, 170) ;
        border-collapse : collapse ;
        width : 100% ;
        color : rgb(0, 0, 0) ;
        font-size : 14px ;
        background-color : rgb(253, 252, 248) ;
        margin-top: -1px;
        margin-bottom: 8px;
    }

    .mydoc_api_table tr{
        margin : 0px ;
        padding : 0px ;
        border : 0px ;
        background-color : rgb(255, 255, 255) ;
    }
    .mydoc_api_table tr:nth-child(odd){
        background-color : rgb(245, 245, 245) ;
    }
    .mydoc_api_table tr:nth-child(1){
        background-color : rgb(63, 63, 63);
    }

    .mydoc_api_table th{
        margin : 0px ;
        padding : 0px 15px 0px 6px ;
        border: 1px solid #e9e9e9;
        vertical-align : baseline ;
        text-align : left ;
        width : 123px ;
        word-break: break-all;
        background: #f7f7f7;
        white-space: nowrap;
        color: #5c6b77;
        font-weight: 600;
    }

    .mydoc_api_table td{
        line-height: 1.5;
        margin : 0px ;
        padding : 3px 15px 3px 6px ;
        border: 1px solid #e9e9e9;
        vertical-align : text-top ;
        word-break: break-all;
        font-size: 12px;
        color: #495060;
    }

</style>
