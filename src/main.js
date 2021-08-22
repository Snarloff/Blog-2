import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import VueAnalytics from 'vue-analytics'
import router from './router'
import i18n from './locales/i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.use(VueAnalytics, {
  id: 'G-YD260MM32Y'
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
