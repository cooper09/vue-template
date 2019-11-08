import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mydata: [20,30,5,10,35]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getData(state) {
      return state.mydata
    }
  }
})
