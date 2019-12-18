import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [{ name: "john",
            address:  "two",
            email: "three"
        }],
        dataUrl: './top10.csv'
  },
  mutations: {
    setData(state,payload) {
      state.data = payload;
      console.log("store.setData: ", state.data)
    }
  },
  actions: {
    async setData(context, data ) {
      try {
        let response = await( axios.get('./top10.csv'));
        console.log("got data: ", response.data );
        context.commit('setData', response.data);
      } catch (err){
        alert("Error loading data: "+ err )
      }
    }//end set Data 
  }//end actions 
})//end export default
