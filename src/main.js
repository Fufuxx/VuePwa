// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueResource)

Vue.filter('formatDate', function (value) {
  if (value) {
    value = new Date(value)
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
