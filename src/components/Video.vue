<template>
  <div id="video">
    <iframe
      :src="`https://www.youtube.com/embed/${currentMovie.key}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
    
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Video",
  // components: {
  //   Description
  // },
  data() {
    return {
      currentMovie: {}
    };
  },
  computed: {
    ...mapState(["api_end_point", "api_key"]),
  },
  methods: {},
  mounted() {
    axios
      .get(`${this.api_end_point}movie/${602211}/videos?${this.api_key}&language=en-US`)
      .then((response) => {
        if (response.status === 200) {
          this.currentMovie = response.data.results[0];
          console.log(this.currentMovie)
        }
      });
  },
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
  animation: clarity 1s;
}

#video iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px ;
}
</style>