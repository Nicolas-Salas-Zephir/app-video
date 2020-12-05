<template>
  <div id="searchBar">
    <!-- <input type="text" class="searchBar" v-model.lazy="name_film" /> -->
    <input
      type="text"
      class="searchBar"
      v-model="name_film"
      v-on:keyup="searchMovie"
    />
    <div class="searchBar__icon">
      <svg width="24.648" height="24.648" viewBox="0 0 24.648 24.648">
        <path
          id="Tracé_2"
          data-name="Tracé 2"
          d="M24.116,22H23l-.395-.38a9.174,9.174,0,1,0-.986.986L22,23v1.113l7.046,7.032,2.1-2.1ZM15.66,22A6.342,6.342,0,1,1,22,15.66,6.333,6.333,0,0,1,15.66,22Z"
          transform="translate(-6.5 -6.5)"
          fill="rgba(0,0,0,0.72)"
        />
      </svg>
    </div>
    <div :class="{ modal: modal }">
      <p>{{ overview.original_title }}</p>
    </div>
    <div></div>
  </div>
</template>
    
<script>
import axios from "axios";
import { mapState } from 'vuex'

export default {
  name: "Searchbar",

  data() {
    return {
      modal: false,

      name_film: "",
      overview: {},
    };
  },
  computed: {
    ...mapState([
      'api_end_point',
      'popular_movies_url',
      'search_url',
      'api_key',
      'poster'
    ])
  },
  methods: {
    searchMovie() {
      axios
        .get(
          `${this.api_end_point}${this.search_url}${this.api_key}&language=fr&query=${this.name_film}&page=1&include_adult=false`
        )
        .then((response) => {
          this.overview = response.data.results[0];
        });
    },
  },
  mounted() {},
};
</script>
<style>
#searchBar {
  position: relative;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 4;
  grid-row-end: 4;
  align-self: center;
}

.searchBar {
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #fff;
  border: none;
  color: #000;
  box-shadow: 0px 9px 17px rgba(0, 0, 0, 0.7);
}

.searchBar__icon {
  position: absolute;
  top: calc((38px - 24.64px) / 2);
  right: 15px;
}

.hidden {
  display: none;
}

.modal {
  position: absolute;
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
  color: #000;
  text-align: left;
  padding: 5px 15px;
  border-radius: 10px;
}
</style>