<template>
    <h1 class="h1"><slot></slot></h1>
</template>
<script>
import H from './H'
export default {
    extends: H,
    data(){
        return {
            level: 1
        }
    }
}
</script>

<style lang="less" scoped>
@import '~docs-src/theme.less';
.h1{
    font-size: 2rem;
    margin: 3rem 0 1rem;
    font-weight: 600;
    line-height: 1.2;
    color: @font-color;
}
</style>
