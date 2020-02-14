/**
 * vue最核心的管理对象store
 */

import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(vuex)

const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters
})


export default store

