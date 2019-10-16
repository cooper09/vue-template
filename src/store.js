import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataURL: './data.json',
    postURL: 'https://sleepy-everglades-99189.herokuapp.com/kwekuproject',
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
      //alert("Set Start Date: " + type );
      state.projType = type;
    },
    setStartTime({state}, time) {
      //alert("Set project type: " + time );
      state.startTime = time;
    },
    setPropType({state}, type) {
      //alert("Set property type: " + type );
      state.propType = type;
    },
    async setInfoData({state}, info) {

      state.infoData = info;

      var timeStamp = new Date().toLocaleDateString();

      var dataObj = {
        projectType: state.projType,
        startTime: state.startTime,
        propertyType: state.propType,
        name: info.name,
        phone: info.phone,
        email: info.email,
        street: info.street,
        city: info.city,
        state: info.state,
        zip: info.zip,
        budget: info.budget,
        relationship: info.relationship,
        description: info.description,
        timestamp: timeStamp
      }//end dataObj
      console.log("Set info data: ", dataObj );

      try {
        let response = await axios.post(`${state.postURL}`, dataObj);
          console.log("store - postInfodata:  ", response.data );
        } catch (error) {
            alert('Data Post error: ' + error);
        }

    }//end setInfoData
    
  }//end actions
});//end export 
