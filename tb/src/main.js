import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Old links used hash routing (tannenbomb.info/#/yr2023). Send them to the new paths.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1))
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
