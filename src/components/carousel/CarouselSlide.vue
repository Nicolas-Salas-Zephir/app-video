<template>
  <div class="carousel">
    <p>Films similiaires</p>
    <carousel
      :autoplay="true"
      :autoplayTimeout="5000"
      :perPage="4"
      :paginationEnabled="false"
      :navigationEnabled="true"
    >
      <slide v-for="movie in slides" :key="movie.id">
        <img
          class="image"
          :src="`${poster}${movie.poster_path}`"
          :alt="movie.original_title"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
// Library Vue Carousel "https://ssense.github.io/vue-carousel/guide/"
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "CarouselSlide",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      movie: this.$route.params.movie,
      idMovie: this.$route.params.idMovie,
      slides: [],
    };
  },
  props: {},
  computed: {
    ...mapState(["api_end_point", "api_key", "language", "include_adult", "movie_url", "poster"]),
  },

  methods: {
    fetchSimilarMovie() {
      axios
        .get(
          `${this.api_end_point}${this.movie_url}${this.idMovie}/similar?api_key=${this.api_key}&language=${this.language}&page=1`
        )
        .then((response) => {
          this.slides = response.data.results;
        })
        .catch((error) => console.error(error));
    },
  },

  created() {
    this.fetchSimilarMovie();
  },

  updated() {},
};
</script>


<style >
.image {
  width: 100%;
  border-radius: 3px;
}

.VueCarousel-slide {
  padding: 0 2px;
}

@media screen and (min-width: 1024px) {
  #slider {
    z-index: 1000;
  }
}
</style>
