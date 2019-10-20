import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataURL:'https://sleepy-everglades-99189.herokuapp.com/multiline_facebook_conversions'
  },
  mutations: {

  },
  actions: {
    async getData({ state, commit }) {
      try {
          let response = await axios.get(`${state.dataURL}`);
          console.log("store - getData:  ", response.data );
          commit('setData', response.data);
      } catch (error) {
          alert('Data Load error: ' + error);
      }
    },//end getData
  }
})
