import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testClass: {
      data: "test",
      funct: null
    }
  },
  mutations: {
    setTest (state, data ) {
      state.testClass = data ; 
    }
  },
  actions: {
    setTest ({commit}, data) {
      commit('setTest', data )
    }
  },//end actions
  getters: {
    getClass: state => state.testClass,
  }//end getters
})//end export
