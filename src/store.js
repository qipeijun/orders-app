import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './assets/js/types'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    [types.NAV]:'任务大厅',
  },
  mutations: {
    [types.NAV_CHANGE](state,nav){
      state[types.NAV] = nav
    }
  },
  actions: {

  }
})
