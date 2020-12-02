<template>
  <div id="app">
    <film></film>
  </div>
</template>

<script>
import Film from './components/Film.vue'

export default {
  name: 'App',
  components: {
    'film': Film
  }
}
</script>

<style scoped>
#app {
  position: relative;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
