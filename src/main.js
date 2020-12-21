import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './Routes'
import store from './store'

// Library Vue Carousel "https://ssense.github.io/vue-carousel/guide/"
import VueCarousel from 'vue-carousel';


Vue.config.productionTip = false

Vue.use(VueRouter, VueCarousel)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  router: router,
  store,
  render: h => h(App),
  
}).$mount('#app')
