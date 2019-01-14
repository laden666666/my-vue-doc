<template>
    <h2 class="h2" :id="text"><slot></slot></h2>
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
.h2{
    margin: 45px 0 0.8em;
    padding-bottom: 0.7em;
    border-bottom: 1px solid #ddd;
    font-weight: 600;
    color: #2c3e50;
}
</style>