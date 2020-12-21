import SearchMovie from "./components/SearchMovie";
import Movie from "./components/Movie";

export default [
  {
    path: "/",
    components: {
      searchBar: SearchMovie,
    },
  },
  {
    path: "/movie/:idMovie(\\d+)/:movie",
    components: {
      movie: Movie,
    },
  },
  { path: "*", redirect: "/" },
];
