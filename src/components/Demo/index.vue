
<template>
    <div class="example" :class="{'example-vertical': vertical}" :id="title">
        <div ref="demo" class="example-demo" :style="{width: vertical ? '100%' : '50%'}">
            <div class="example-case">
                <component :is="demo"></component>
            </div>
            <header class="example-header">
                <span>
                    {{ title }}
                    <a :href="`#${title}`">#</a>
                </span>
            </header>
            <div class="example-desc">
                <slot name="desc"></slot>
            </div>
        </div>
        <div class="example-split"></div>
        <div ref="code" class="example-code" :style="codeHeight">
            <div :style="style">
                <Code lang="html">{{vueSource}}</Code>
            </div>
            <div class="example-code-more" v-if="showMore" @click="showCode = !showCode">
                <button type="ios-arrow-down" v-show="!showCode"></button>
                <button type="ios-arrow-up" v-show="showCode"></button>
                <button v-show="hideCode && !showCode">
                    <template v-if="lang === 'zh-CN'">显示代码</template>
                    <template v-else>Show Code</template>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Demo',
        props: {
            //示例的标题
            title: {
                type: String,
                default: ''
            },
            //是否垂直显示
            vertical: {
                type: Boolean,
                default: false
            },
            //是否隐藏代码显示区域
            hideCode: {
                type: Boolean,
                default: false
            },
            demo: {
                type: Object,
                required: true,
            },
            code: {
                type: String,
            },
        },
        data () {
            return {
                showCode: false,
                showMore: true,
                demo_height: 0,
                code_height: 0,
                ready: false,
                lang: this.$lang
            }
        },
        computed: {
            codeHeight () {
                let style = {};
                if (this.ready) {
                    if (this.showCode) {
                        style.height = `${this.code_height}px`;
                    } else {
                        style.height = `${this.demo_height}px`;
                    }
                }
                style.width = this.vertical ? '100%' : '50%'
                return style;
            },
            vueSource () {
                return this.code || window.atob(this.demo.__vueSource) 
            },
            style () {
                let style = {
                    opacity: 1
                };
                if (this.hideCode && !this.showCode) {
                    style.opacity = 0;
                }
                return style;
            }
        },
        mounted () {
            this.$nextTick(() => {
                const demo_height = this.$refs.demo.clientHeight;
                const code_height = this.$refs.code.clientHeight + 20;
                this.code_height = code_height;
                console.log(code_height, demo_height)
                if ((code_height <= demo_height) && !this.hideCode) {
                    this.showMore = false;
                }
                this.demo_height = this.hideCode ? 30 : demo_height;
                this.ready = true;
            });
        }
    }
</script>

<style lang="less" scoped>
    .example{
        margin-top: 20px;
        border: 1px solid #eee;
        border-radius: 6px;
        margin-bottom: 20px;
        position: relative;
        transition: all .2s ease-in-out;
        display: flex;

        &:hover{
            box-shadow: 0 2px 7px rgba(0,0,0,.15);
            border-color: transparent;
            position: relative;
        }

        &-split{
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            border: 1px dashed #eee;
        }
        &-vertical &-split{
            width: 100%;
            float: left;
            position: relative;
            left: 0;
        }

        &-demo{
            padding: 20px 0;
            position: relative;
        }

        &-case{
            padding: 0 20px;
        }

        &-header{
            font-weight: 500;
            margin: 30px 0 10px;
            position: relative;
            span{
                display: inline-block;
                background: #fff;
                padding: 0 5px 0 18px;
                position: relative;
                margin-left: 30px;
                font-size: 14px;

                a{
                    opacity: 0;
                    transition: opacity .2s ease-in-out;
                }
            }
            &:hover span a{
                opacity: 1;
            }
            &:before{
                content: '';
                display: block;
                width: 100%;
                height: 1px;
                background: #eee;
                position: absolute;
                top: 10px;
                left: 0;
            }
        }

        &-desc{
            font-size: 12px;
            padding: 0 20px;
            p{
                font-size: 12px !important;
                text-align: justify;
            }
            ul li {
                font-size: 12px !important;
            }
            blockquote{
                font-size: 12px !important;
            }
        }

        &-code{
            padding: 0 10px;
            position: relative;
            overflow: hidden;
            transition: height .2s ease-in-out;

            &-more{
                position: absolute;
                bottom: 0;
                left: 4px;
                right: 4px;
                text-align: center;
                cursor: pointer;
                padding: 5px 0;
                /*transition: background .1s ease-in-out;*/

                &:after{
                    content: '';
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    z-index: 1;
                    box-shadow: 0 -15px 30px #fff inset;
                }

                i{
                    position: relative;
                    top: 5px;
                    z-index: 2;
                }
                .ivu-btn{
                    padding: 0 0 4px;
                    position: relative;
                    top: 4px;
                    z-index: 2;
                }

                &:hover{
                    /*background: #fff;*/
                    i{
                        color: #5cb85c;
                    }
                }
            }
        }
    }
</style>