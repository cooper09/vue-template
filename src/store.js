import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testClass: {
      data: "test",
      funct: null
    },
    coinClass: {}
  },//end state
  mutations: {
    setTest (state, data ) {
      state.testClass = data ; 
    },
    setCoin (state, data ){
      state.coinClass = data;
    }
  },//end mutations
  actions: {
    setTest ({commit}, data) {
      commit('setTest', data )
    },
    setCoin ({commit}, data) {
      commit('setCoin', data )
    }
  },//end actions
  getters: {
    getClass: state => state.testClass,
    getCoin:  state => state.coinClass,
  }//end getters
})//end export
