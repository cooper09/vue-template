import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataURL: './data.json',
    startData: []

  },
  mutations: {
    setData(state, payload) {
      state.startData = payload;
    }
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
    }
  }
});//end export 
