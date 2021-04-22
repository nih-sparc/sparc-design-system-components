import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import SparcComponentLibrary from './components/index.js'

Vue.config.productionTip = false

Vue.use(SparcComponentLibrary)
Vue.use(VueRouter)

const router = new VueRouter({
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
