import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: "The good stuff..."
  },
  mutations: {
    setData(state,payload) {
      state.data = payload;
      console.log("store.setData: ", state.data)
    }
  },
  actions: {
    setData(context, data ) {
      alert("Hit it kid: " + data );
      context.commit('setData', data);
    }
  }
})
