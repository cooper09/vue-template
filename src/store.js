import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coinClass: {},
    currentChain: [],
    keys: {},
    newTx:{
      from: "the kid",
      to: "my girl",
      amount: "20"
    }
  },//end state
  mutations: {
    setCoin (state, data ){
      state.coinClass = data;
    },
    setKeys (state, data ){
      state.keys = data;
    },
    setNewTx (state, data ){
      console.log("Alass....Store mute - new Tx: ", data )
      state.newTx = data;
      alert("newTx has been updated: ")
    }
  },//end mutations
  actions: {
    setCoin ({commit}, data) {
      commit('setCoin', data )
    },
    setKeys ({commit}, data) {
      commit('setKeys', data )
    },
    setNewTx  ({commit}, data) {
      console.log("Store action - new Tx: ", data )
      commit('setnewTx', data )
    }
  },//end actions
  getters: {
    getCoin:  state => state.coinClass,
    getKeys: state => state.keys,
    getNewTx: state => state.newTx,
  }//end getters
})
