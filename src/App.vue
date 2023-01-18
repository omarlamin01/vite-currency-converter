<template>
    <div data-theme="lemonade" id="app">
        <Navbar />
    </div>
</template>

<script>
    import Navbar from './components/navbar.vue'
    export default {
        name: "App",
        components: {
            Navbar
        },
        data() {
            return {
                // ...
            }
        },
        methods: {
            // ...
        }
    }
</script>

<style scoped>
#app {
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
}
</style>
