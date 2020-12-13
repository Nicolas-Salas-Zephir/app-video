<template>
  <div>
    <div class="presentation">
      <h1>
        <span>my</span>
        <span>video</span>
        <span>app</span>
      </h1>
    </div>
    <header id="search" class="hidden">
      <input
        v-model="search_movie"
        v-on:keyup="fetchMovie"
        type="text"
        placeholder="Rechercher..."
      />
      <div :class="{ card: hidden }" v-if="this.data">
        <p :key="this.data.original_title">
          <router-link
            :to="`/movie/${this.data.id}/${this.data.original_title}`"
            >{{ this.data.original_title }}</router-link
          >
        </p>
      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "SearchMovie",
  data() {
    return {
      hidden: false,
      search_movie: "",
      data: null,

      search_url: "search/movie?",
    };
  },
  props: {},

  computed: {
    ...mapState(["api_end_point", "api_key", "language", "include_adult"]),
  },

  methods: {
    fetchMovie() {
      if (this.search_movie !== "") {
        this.hidden = true;
        axios
          .get(
            `${this.api_end_point}${this.search_url}api_key=${this.api_key}&language=${this.language}&query=${this.search_movie}&page=1&include_adult=${this.include_adult}`
          )
          .then((response) => {
            this.data = response.data.results[0];
          })
          .catch((error) => console.error(error));
      }
    },
    animationStart() {
      setTimeout(function () {
        document.querySelector(".presentation").classList.add("hidden");
      }, 5000),
        setTimeout(function () {
          document.querySelector(".hidden").style.display = "none";
          document.getElementById("search").classList.remove("hidden");
          document.getElementById("search").classList.add("show");
        }, 6000);
    },
  },
  mounted() {
    this.animationStart();
  },
};
</script>


<style scoped>
#search {
  height: calc(100vh - 60px);
}

.presentation {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hidden {
  opacity: 0;
  transition: opacity 0.3s;
}

.show {
  opacity: 1;
  transition: opacity 0.3s;
}

h1 {
  font-weight: 300;
  font-size: 96px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 80);
  line-height: 90px;
}

h1 span {
  display: block;
}

h1 span:nth-child(1) {
  text-align: left;
}
h1 span:nth-child(2) {
  text-align: center;
  color: #ff9100;
}
h1 span:nth-child(3) {
  text-align: right;
}

header {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

header input {
  background: #ff9100;
  border: none;
  border-radius: 3px;
  padding: 7px;
}

header input::placeholder {
  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}

header .card {
  /* width: 100%; */
  height: auto;
  background-color: #fff;
  text-align: left;
  color: #000;
  border-radius: 3px;
  padding: 10px;
  margin-top: 4px;
}

@media screen and (min-width: 425px) {
  header {
    width: 50%;
  }
}

/* @media screen and (max-width: 425px) {
  header {
    width: 80%;
  }
} */
</style>
