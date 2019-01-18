<template>
    <div class="doc">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Doc'
}
</script>

<style lang="css" scoped>
    .doc{
        margin: 0 auto;
        max-width: 100%;
        padding: 15px 15px 40px;
        position: relative;
        line-height: 1.6em;
        padding-bottom: 1.2em;
        position: relative;
        z-index: 1;
        font-size: 16px;
        color: #34495e;
    }
    .doc > br{
        
    }
</style>
