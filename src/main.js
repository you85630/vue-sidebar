import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/css/reset.css'
import store from './vuex'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
