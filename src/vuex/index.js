import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import sidebar from './sidebar'

export default new Vuex.Store({
  modules: {
    sidebar
  }
})
