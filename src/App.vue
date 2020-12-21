<template>
  <div id="app">
    <router-view name="searchBar"></router-view>
    <router-view name="movie"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #34515E;
  color: rgba(255, 255, 255, .63);
  padding-top: 60px;
  overflow: hidden;
}
</style>
