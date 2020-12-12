import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_end_point: "https://api.themoviedb.org/3/",
    popular_movies_url:
      "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images",
    api_key: "api_key=3aeb37be9cff3d6a23acce82476ce19a",
    search_url: "search/movie?",
    poster: "https://image.tmdb.org/t/p/w500/",
    title: "",
    overview: ""
  },
  mutations: {
    // SEARCH_MOVIE(state, payload) {
    //   state.title = payload.title
    // }
  },
  actions: {
    // searchMovie(context, payload) {
    //   axios
    //     .get(
    //       `${this.api_end_point}${this.search_url}${this.api_key}&language=fr&query=${context.commit('SEARCH_MOVIE', payload)}&page=1&include_adult=false`
    //     )
    //     .then((response) => {
    //       this.overview = response.data.results[0];
    //       console.log(this.overview)
    //     });
    // },
  },
  modules: {},
});
