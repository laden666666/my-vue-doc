<template>
    <h1 class="h1" :id="text"><slot></slot></h1>
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
.h1{
    font-size: 2rem;
    margin: 3rem 0 1rem;
    font-weight: 600;
    color: #2c3e50;
}
</style>
