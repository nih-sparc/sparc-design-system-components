import Vue from 'vue'
import App from './App.vue'

import SparcComponentLibrary from './components/index.js'

Vue.config.productionTip = false

Vue.use(SparcComponentLibrary)

new Vue({
  render: h => h(App),
}).$mount('#app')
