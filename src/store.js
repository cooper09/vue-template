import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testChain: [
      {
        id: "1", 
        hash: "0x1",
        prevHash: "0x0",
        timestamp: new Date()
      },
      {
        id: "2", 
        hash: "0x2",
        prevHash: "0x1",
        timestamp: new Date()
      }
    ]
  },
  mutations: {
    setBlockChain(state, data ) {
      console.log("mutations - setBlockChain: ", data )
      state.testChain = data;  
    }
  },
  actions: {
    setBlockChain ({commit}, data) {
      console.log("actions- setBlockChain: ", data )
      commit('setBlockChain', data);
    }
  },
  getters: {
    newChain: state => state.testChain
  },//end getters
  modules: {

  }//end modules
})//end store
