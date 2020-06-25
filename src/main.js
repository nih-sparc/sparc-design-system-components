import Vue from 'vue'
import App from './App.vue'

import DesignSystem from './components/index.js'

Vue.config.productionTip = false

Vue.use(DesignSystem)

new Vue({
  render: h => h(App),
}).$mount('#app')
