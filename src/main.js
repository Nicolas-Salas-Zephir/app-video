import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './Routes'
import store from './store'
// import VueSplide from '@splidejs/vue-splide';

Vue.config.productionTip = false

// Vue.use(VueSplide);
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  router: router,
  store,
  render: h => h(App),
  
}).$mount('#app')
