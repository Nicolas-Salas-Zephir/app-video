<template>
  <div id="movie" v-if="this.data">
    <div class="movie__backdrop">
      <img :src="`${poster}${data.backdrop_path}`" alt="" />
    </div>
    <button v-on:click="goStart">
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <path
          d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM22 7L1 7V9L22 9V7Z"
          fill="white"
          fill-opacity="0.8"
        />
      </svg>
    </button>
    <div class="description">
      <div class="description__image">
        <img :src="`${poster}${data.poster_path}`" :alt="data.original_title" />
        <button class="trailer" v-on:click="fetchVideo">
          <svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 7.5L0.249999 14.8612L0.25 0.138783L13 7.5Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
          TRAILER
        </button>
      </div>
      <div class="description__info" v-if="dataDetail">
        <h1>{{ data.original_title }}</h1>
        <p>
          <span>{{ splitWord(data.release_date) }}</span>
          <span>{{ formatTime(dataDetail.runtime) }}</span>
          <span>{{ data.original_language }}</span>
        </p>
        <p>
          <span>Note : {{ data.vote_average }}</span>
        </p>
      </div>
      <div class="description__overview">
        <p>{{ data.overview.slice(0, 300) }} <span>[...]</span></p>
      </div>
    </div>
    <div id="video" :class="{ hidden: !hidden }" v-if="dataMovie">
      <div class="cross" v-on:click="hidden = !hidden">X</div>
      <iframe
        :src="`https://www.youtube.com/embed/${dataMovie.key}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <CarouselSlide></CarouselSlide>
  </div>
</template>

<script>
import axios from "axios";
import CarouselSlide from "./carousel/CarouselSlide.vue";
import { mapState } from "vuex";

export default {
  name: "Movie",
  components: {
    CarouselSlide,
  },
  data() {
    return {
      hidden: false,

      movie: this.$route.params.movie,
      idMovie: this.$route.params.idMovie,
      data: null,
      dataMovie: null,
      dataDetail: null,

      search_url: "search/movie?",
      
    };
  },
  props: {},
  computed: {
    ...mapState(["api_end_point", "api_key", "language", "include_adult", "movie_url", "poster"]),

    slidesCount() {
      console.log(this.slides.length)
      return this.slides.length;
    },
  },
  methods: {
    goStart() {
      this.$router.push("/");
    },

    splitWord(word) {
      const wordArr = word.split("");
      const index = wordArr.indexOf("-");
      const format = wordArr.slice(0, index);
      return format.join("");
    },

    formatTime(time) {
      const hour = parseInt(time / 60);
      const minutes = time % 60;
      return `${hour}h ${minutes}min`;
    },

    fetchMovie() {
      axios
        .get(
          `${this.api_end_point}${this.search_url}api_key=${this.api_key}&language=${this.language}&query=${this.movie}&page=1&include_adult=${this.include_adult}`
        )
        .then((response) => {
          this.data = response.data.results[0];
        })
        .catch((error) => console.error(error));
    },

    fetchDetail() {
      axios
        .get(
          `${this.api_end_point}${this.movie_url}${this.idMovie}?api_key=${this.api_key}&language=${this.language}`
        )
        .then((response) => {
          this.dataDetail = response.data;
        })
        .catch((error) => console.error(error));
    },

    fetchVideo() {
      this.hidden = true;
      axios
        .get(
          `${this.api_end_point}${this.movie_url}${this.idMovie}/videos?api_key=${this.api_key}&language=${this.language}`
        )
        .then((response) => {
          this.dataMovie = response.data.results[0];
          // console.log(this.dataMovie);
        })
        .catch((error) => console.error(error));
    },
  },

  created() {
    this.fetchMovie();
    this.fetchDetail();
  },

  updated() {},
};
</script>


<style >
.hidden {
  display: none;
}

#movie {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;
  margin: 0 auto;
  padding-bottom: 32px;
}

#movie button {
  align-self: flex-start;
  padding: 0;
  z-index: 2;
}

button {
  background-color: transparent;
  border: none;
}

.movie__backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 30vh;
  z-index: 1;
  overflow: hidden;
}

.movie__backdrop img {
  object-fit: cover;
  object-position: left top;
  width: 100%;
}

.movie__backdrop::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(0deg, #34515e, transparent);
}

.description {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20vw;
  margin-bottom: 32px;
  z-index: 2;
}

.description__image {
  flex: 0 0 45%;
  overflow: hidden;
}

.description__info {
  display: flex;
  flex-direction: column;
  flex: 0 0 45%;
  text-align: left;
  margin-left: 35px;
}

.description__info h1 {
  font-size: 20px;
}

.description__info p span {
  display: inline-block;
  margin-right: 9px;
}

.description__info p:nth-child(1) {
  position: relative;
  margin: 0 0 12px 0;
  font-size: 16px;
}
.description__info p:nth-child(2),
.description__info p:nth-child(3) {
  margin: 0 0 12px 0;
  font-size: 12px;
}
.description__info p span {
  position: relative;
}

.description__info p:nth-child(2) span:nth-child(2)::before,
.description__info p:nth-child(2) span:nth-child(1)::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 2px;
  top: calc(50% - 1px);
  right: -6px;
  border-radius: 50%;
  background-color: #fff;
}

.description__image img {
  object-fit: cover;
  object-position: left top;
  width: 100%;
  border-radius: 3px;
}

.description__overview {
  flex: 0 0 100%;
  text-align: left;
  margin-top: 32px;
}

.description__overview p {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
}

.trailer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Roboto", sans-serif;
  width: 100%;
  background-color: #ff9100;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 500;
  padding: 6px 0 !important;
  margin-top: 30px;
  border-radius: 3px;
}

#video {
  position: absolute;
  width: 72%;
  height: 150px;
  z-index: 1000;
  transform: translateX(calc(60% - (300px / 2)));
}

.cross {
  position: absolute;
  top: -20px;
  right: 0;
}

@media screen and (min-width: 1024px) {
  .movie__backdrop {
    position: fixed;
    height: 100%;
  }

  .movie__backdrop::after {
    background: rgba(52, 81, 94, 0.5);
  }

  .movie__backdrop img {
    object-position: left top;
    height: 100%;
  }

  .description {
    margin-top: 10vw;
    margin-bottom: 64px;
  }

  .description__info h1 {
    font-size: 40px;
  }
  .description__info p,
  .description__overview p {
    font-size: 20px !important;
  }

  .description__overview {
    flex: 0 0 50%;
  }

  .description__image {
    flex: 0 0 25%;
  }

  .trailer {
    justify-content: space-around;
  }

  #video {
    height: 500px;
    transform: none;
  }

  #video iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
