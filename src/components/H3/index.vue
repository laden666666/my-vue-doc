<template>
    <h3 class="h3" :id="text"><slot></slot></h3>
</template>
<script>
export default {
    computed: {
        text(){
            let $slots = this.$slots
            if($slots.default && $slots.default[0]){
                return $slots.default[0].text
            }
            return ''
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
}
</style>