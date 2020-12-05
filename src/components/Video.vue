<template>
  <div id="video">
    <iframe
      src="https://www.youtube.com/embed/fd3fasCD7kE"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
    
<script>
// import Description from "./Description.vue"

export default {
  name: "Video",
  // components: {
  //   Description
  // },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style>
#video {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: rgb(180, 180, 180);
  border-radius: 10px ;
  box-shadow: 0px 9px 17px rgba(0, 0, 0, 0.7);
}

#video iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px ;
}
</style>