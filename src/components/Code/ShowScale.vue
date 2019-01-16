<style scoped>
    .code pre code{
        padding: 5px 15px;
    }
    .code-scale-modal{
        background-color: #fafafa;
        padding: 3px 5px;
        border-radius: 5px;
        height: 100%;
    }
    .code-scale-modal pre{
        font-size: 14px;
    }
</style>
<template>
    <div class="code-scale-modal">
        <pre :class="{bg: bg}"><code :class="language" ref="code2"></code></pre>
    </div>

</template>
<script>
    import hljs from 'highlightjs/highlight.pack.js';
    import 'highlightjs/styles/atom-one-light.css';

    export default {
        props: {
            lang: {
                type: String,
                default: 'javascript'
            },
            code: {
                type: String,
                required: true,
            },
            bg: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                docLang: this.$lang,
            }
        },
        computed: {
            language () {
                if (this.lang == 'auto') {
                    return ''
                } else {
                    return this.lang;
                }
            }
        },
        mounted () {
            this.$refs.code2.textContent = this.code;
            hljs.highlightBlock(this.$refs.code2);
        },
    }
</script>
