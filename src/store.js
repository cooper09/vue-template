import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataURL:'https://sleepy-everglades-99189.herokuapp.com/multiline_facebook_conversions',
    startData: [],
    ad2:0,
    ad3:0,
    ad4:0,
    ad5:0,
    ad6:0
  },//end  state
  mutations: {
    setData(state, payload) {
      state.startData = payload;
      //console.log('Store.setData data: '+ state.startData );
    },//end setData
  },//end mutations
  actions: {
    async getData({ state, commit }) {
      //alert("Store.getData: ");
      try {
          let response = await axios.get(`${state.dataURL}`);
          console.log("store - getData:  ", response.data );
          commit('setData', response.data);
      } catch (error) {
          alert('Data Load error: ' + error);
      }
    }//end getData
  },//end actions
  getters:{
    getAds: state => {
      var testArr =[];
      state.startData.forEach((ad) =>{
        console.log("Ad Source: ", ad.source );
        switch (ad.source ) {
          case 'Ad2': 
          console.log("increment Ad2")
            ++state.ad2
          break;
          case 'Ad3': 
            ++state.ad3
          break;
          case 'Ad4': 
            ++state.ad4
          break;
          case 'Ad5': 
            ++state.ad5
          break;
          case 'Ad6': 
          ++state.ad6
        break;
        }//end switch

        testArr.push(ad.source);
        testArr.sort();

      });
        
      console.log("store.getAds ads: " + testArr );
      console.log("How many Ad2: ", state.ad2 )
      
      return testArr;
    },//end getAds
    getAd2: state => {
      return state.ad2;
    },
    getAd3: state => {
      return state.ad3;
    },
    getAd4: state => {
      return state.ad4;
    },
    getAd5: state => {
      return state.ad5;
    },
    getAd6: state => {
      return state.ad6;
    }
  }//end getters
})//end export default
