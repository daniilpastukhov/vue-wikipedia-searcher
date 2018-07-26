<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import MainLayout from '../src/MainLayout.vue'

    export default {
        components: {
            'main-layout': MainLayout
        }
    }
</script>

<style scoped>
</style>