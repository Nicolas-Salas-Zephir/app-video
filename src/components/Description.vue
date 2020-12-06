<template>
  <div id="description">
    <div class="description__title">
      <h1>{{ currentMovie.title }}</h1>
    </div>
    <div v-on:click="toggle = !toggle" class="description__image">
      <img :src="`${poster}${currentMovie.poster_path}`" alt="" />
    </div>
    <div class="description__complementary">
      <div class="description__voteAverage">
        <p><strong>Note</strong> : {{ currentMovie.vote_average }} / 10</p>
      </div>
      <div class="description__releaseDate">
        <p><strong>Date de sortie</strong> : {{ currentMovie.release_date }}</p>
      </div>
    </div>
    <div class="description__text">
      <p>
        {{
          currentMovie.overview
            ? currentMovie.overview
            : "Il n'y a pas de description pour ce film :("
        }}
      </p>
    </div>
    <div :class="{ show: toggle }" class="modalImage">
      <img :src="`${poster}${currentMovie.poster_path}`" alt="" />
      <div v-on:click="toggle = !toggle" class="cross">
        <p>X</p>
      </div>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Description",
  data() {
    return {
      toggle: false,
      currentMovie: {},
    };
  },
  props: {},
  methods: {},
  computed: {
    ...mapState(["api_end_point", "popular_movies_url", "api_key", "poster"]),
  },
  mounted() {
    axios
      .get(`${this.api_end_point}${this.popular_movies_url}&${this.api_key}`)
      .then((response) => {
        if (response.status === 200) {
          this.currentMovie = response.data.results[0];
        }
      });
  },
};
</script>
<style >
#description {
  display: grid;
  grid-template-columns: repeat(5, 115px);
  grid-template-rows: repeat(5, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  grid-column-start: 8;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 6;
  transition: all 0.3s;
  opacity: 1;
  animation: clarity 1s;
}

.description__title {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
}

.description__text {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 6;
  padding: 45px;
  background-color: #fff;
  border-radius: 10px;
  color: #000;
}

.description__complementary {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-items: start;
  color: #fff;
  justify-self: center;
}

.description__voteAverage,
.description__releaseDate,
.description__text {
  text-align: left;
}

.description__text p,
.description__title h1 {
  margin: 0;
  transform: translateX(0);
}

.description__image {
  position: relative;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  cursor: pointer;
  max-width: 150px;
  opacity: 1;
  transform: translateX(0);
}

.description__image img {
  border-radius: 10px;
}

.modalImage {
  position: absolute;
  /* 1.5 is the ratio width height of the image  */
  top: calc(50% - (1.5 * 20%));
  left: calc(50% - (20% / 2));
  width: 20%;
  padding: 5px 5px 2px 5px;
  background-color: #fff;
  z-index: 10000;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.3s;
}

.modalImage .cross {
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: -30px;
  right: 0px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  width: 25px;
  height: auto;
  background-color: rgb(224, 65, 65);
  border-radius: 3px;
}

.cross p {
  margin: 0;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

@keyframes clarity {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
}
</style>