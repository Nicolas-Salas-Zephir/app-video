import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_end_point: "https://api.themoviedb.org/3/",
    api_key: "3aeb37be9cff3d6a23acce82476ce19a",
    language: "fr",
    include_adult: "false",
    movie_url: "movie/",
    poster: "https://image.tmdb.org/t/p/w500",
  },
  mutations: {},
  actions: {},
  modules: {},
});
