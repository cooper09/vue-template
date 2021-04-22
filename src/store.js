import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coinClass: {},
    currentChain: [],
    keys: {},
  },//end state
  mutations: {
    setCoin (state, data ){
      state.coinClass = data;
    },
    setKeys (state, data ){
      state.keys = data;
    }
  },//end mutations
  actions: {
    setCoin ({commit}, data) {
      commit('setCoin', data )
    },
    setKeys ({commit}, data) {
      commit('setKeys', data )
    }
  },//end actions
  getters: {
    getCoin:  state => state.coinClass,
    getKeys: state => state.keys,
  }//end getters
})
