import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VeCharts from 've-charts'
import VueSmartWidget from 'vue-smart-widget'

Vue.use(VueSmartWidget)
Vue.use(VeCharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
