<template>
  <div class="wrap__movieList">
    <SearchBar></SearchBar>
    <h2>Movie List</h2>
    <div>
      <ul class="grid">
        <li v-for="(value, index) in moviesList" :key="value.title">
          <figure>
            <div class="grid__image">
              <img :src="`${poster}${value.poster_path}`" alt="" />
            </div>
            <div class="grid__description">
              <figcaption>{{ value.title }}</figcaption>
              <p>{{ index + 1 }}</p>
              <p>
                {{
                  value.overview
                    ? `${value.overview.slice(0, 100)} [...]`
                    : "Il n'y a pas de description pour ce film :("
                }}
              </p>
            </div>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";
// import SearchBar from "./searchBar.vue";

export default {
  name: "Film",
//   components: {
//     SearchBar,
//   },
  data() {
    return {
      api_end_point: "https://api.themoviedb.org/3/",
      popular_movies_url:
        "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images",
      api_key: "api_key=3aeb37be9cff3d6a23acce82476ce19a",
      search_url: "search/movie?",

      index: 0,
      currentMovie: {},
      overview: {},

      moviesList: {},
      language: "&language=fr",
      poster: "https://image.tmdb.org/t/p/w500",
    };
  },
  methods: {},
  mounted() {
    axios
      .get(`${this.api_end_point}${this.popular_movies_url}&${this.api_key}`)
      .then((response) => {
        if (response.status === 200) {
          this.currentMovie = response.data.results;
          this.moviesList = response.data.results.slice(1, 11);
          //   this.searchMovie(this.currentMovie.title);
        }
      });
  },
};
</script>
<style>
.wrap__movieList {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}

.wrap__movieList h2 {
  font-size: 60px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-areas:
    "image1 image2"
    "image3 image4 "
    "image5 image6"
    "image7 image8"
    "image9 image10";
  list-style-type: none;
  width: 100%;
}

ul li:nth-child(1) {
  grid-area: image1;
}
ul li:nth-child(2) {
  grid-area: image2;
}
ul li:nth-child(3) {
  grid-area: image3;
}
ul li:nth-child(4) {
  grid-area: image4;
}
ul li:nth-child(5) {
  grid-area: image5;
}
ul li:nth-child(5) {
  grid-area: image5;
}
ul li:nth-child(7) {
  grid-area: image7;
}
ul li:nth-child(8) {
  grid-area: image8;
}
ul li:nth-child(9) {
  grid-area: image9;
}
ul li:nth-child(10) {
  grid-area: image10;
}

.grid__description figcaption {
  align-self: center;
  font-size: 40px;
  padding: 15px;
}

figure {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  height: 100%;
  border-radius: 3px;
  color: black;
  margin: 0;
}

/* .grid__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
} */
.grid__image {
  padding: 5px;
}
.grid__image img {
  width: 100%;
  border-radius: 3px;
}

figure p {
  text-align: left;
  padding: 15px;
  margin: 0;
}

@media screen and (max-width: 1000px) {
  .description {
    width: 50%;
  }

  .wrap__movieList {
    width: 80%;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
    grid-template-areas:
      "image1"
      "image2"
      "image3"
      "image4"
      "image5"
      "image6"
      "image7"
      "image8"
      "image9"
      "image10";
    list-style-type: none;
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .description {
    width: 85%;
  }
}

@media screen and (max-width: 400px) {
  .wrap__movieList {
    width: 90%;
  }
}
</style>