<template>
    <h3 class="h3"><a :name="text" class="h3-anchor"></a><slot></slot></h3>
</template>
<script>
import H from '../H1/H'
export default {
    extends: H,
    data(){
        return {
            level: 3
        }
    }
}
</script>

<style scoped>
.h3{
    margin: 52px 0 1.2em;
    line-height: 1.2;
    position: relative;
    font-weight: 600;
    color: #2c3e50;
    position: relative;
}
.h3-anchor{
    position: absolute;
    top: -10px;
}
</style>