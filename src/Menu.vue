<template>
    <Background>
        <Home 
            name="my-vue-doc"
            logo="https://docsify.js.org/_media/icon.svg"
            version="v0.0.0"
            subhead="A magical documentation site generator."
            :describe="'Simple and lightweight (~21kB gzipped)\nNo statically built html files\nMultiple themes'"

        ></Home>
        <router-view/>
    </Background>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
