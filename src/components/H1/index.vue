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

<style scoped>
.h1{
    font-size: 2rem;
    margin: 3rem 0 1rem;
    font-weight: 600;
    color: #2c3e50;
}
</style>
