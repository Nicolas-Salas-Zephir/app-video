<template>
  <div class="container">
    <div
      v-bind:class="{ description, showDescription: transition_description }"
    >
      <button
        v-bind:class="{ transitionButton: transition_description }"
        v-on:click="transition_description = !transition_description"
        id="slide-button"
        role="button"
      >
      </button>
      <div class="descrition__image">
        <img src="../../public/images/photo_secondaire.jpg" alt="" />
      </div>
      <h1>LA MISSION</h1>
      <p>
        Cinq ans après la fin de la Guerre de Sécession, le capitaine Jefferson
        Kyle Kidd, vétéran de trois guerres, sillonne le pays de ville en ville
        en qualité de rapporteur publique et tient les gens informés, grâce à
        ses lectures, des péripéties des grands de ce monde, des querelles du
        gratin, ainsi que des plus terribles catastrophes ou aventures du bout
        du monde.
      </p>
      <div class="search">
        <input type="text" class="search__bar" />
        <div class="search__icon">
          <svg width="24.648" height="24.648" viewBox="0 0 24.648 24.648">
            <path
              id="Tracé_2"
              data-name="Tracé 2"
              d="M24.116,22H23l-.395-.38a9.174,9.174,0,1,0-.986.986L22,23v1.113l7.046,7.032,2.1-2.1ZM15.66,22A6.342,6.342,0,1,1,22,15.66,6.333,6.333,0,0,1,15.66,22Z"
              transform="translate(-6.5 -6.5)"
              fill="rgba(255,255,255,0.72)"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="video">
      <iframe src="https://www.youtube.com/embed/bezDrBl7Jzg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Film",
  data() {
    return {
      transition_description: false,
      description: true,
    };
  },
  methods: {},
};
</script>
<style>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.video {
  width: 100%;
  height: 100%;
}

.video iframe {
  object-fit: cover;
  object-position: left 70%;
  height: 100%;
  width: 100%;
}

.showDescription {
  transform: translateX(calc(100% + 20px));
}

.transitionButton {
  transform: translateX(calc(-100% + 20px));
}

.description {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  width: 25%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 44px;
  border-radius: 10px;
  transition: transform 0.3s;
}

#slide-button {
  position: absolute;
  top: calc(50% - (40px / 2));
  left: calc(0px - (40px / 2));
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff1744 ;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  border: none;
  z-index: 100;
  cursor: pointer;
}

.descrition__image {
  position: relative;
  height: auto;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.descrition__image::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  border-radius: 10px;
}

.descrition__image img {
  display: block;
  position: relative;
  width: 100%;
  max-height: 490px;
  object-fit: cover;
  object-position: left top;
  border-radius: 10px;
}

.description h1 {
  font-size: 70px;
  letter-spacing: -1.5px;
  margin: 0;
  opacity: 0.55;
}

.description p {
  opacity: 0.7;
  margin-top: 0;
  text-align: left;
  line-height: 25px;
}

.search {
  position: relative;
  align-self: center;
  width: 100%;
}

.search__bar {
  width: 100%;
  padding: 10px 5px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #4f5b62;
  border: none;
  color: rgba(255, 255, 255, 0.72);
  box-shadow: 0px 9px 17px rgba(0, 0, 0, 0.7);
}

.search__icon {
  position: absolute;
  top: calc((38px - 24.64px) / 2);
  right: 15px;
}
</style>