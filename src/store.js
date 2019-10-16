import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataURL: './data.json',
    startData: new Date(),
    projType: "TEST",
    startTime: "TEST",
    propType: "TEST",
    infoData: []
  },
  mutations: {
    setData(state, payload) {
      state.startData = payload;
    },
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
    // set Project Type, Start Date, Product Type via Actions, ie., this.$store.dispatch
    setProjType({state}, type) {
      alert("Set Start Date: " + type );
      state.projType = type;
    },
    setStartTime({state}, time) {
      alert("Set project type: " + time );
      state.startTime = time;
    },
    setPropType({state}, type) {
      alert("Set property type: " + type );
      state.propType = type;
    },
    setInfoData({state}, info) {
      alert("Set info type: " + info );
      state.infoData = info;
    },

  }//end actions
});//end export 
