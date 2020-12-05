<template>
  <div id="app">
    <Video></Video>
    <Searchbar></Searchbar>
    <Description></Description>
  </div>
</template>

<script>

import Video from "./components/Video.vue";
import Description from "./components/Description.vue";
import Searchbar from "./components/Searchbar.vue";

export default {
  name: "App",
  components: {
    Video,
    Description,
    Searchbar,
  },
  data() {},
};
</script>


<style scoped>
#app {
  position: relative;
  padding: 155px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 119.5px);
  grid-template-rows: repeat(5, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
