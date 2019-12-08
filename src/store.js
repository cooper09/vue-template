import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    campaign:"",
    selection:""
  },
  mutations: {
    setCampaign(payload) {
      state.campaign = payload;
    },
    setSelection(payload) {
      state.selection = payload;
    }
  },
  actions: {
    addCampaign({state}, date) {
      //alert('Store - Set Date: '+ date )
      state.campaign = date;
    },
    addSelection({state}, date) {
      //alert('Store - Set Date: '+ date )
      state.selection = date;
    },
  },
  getters: {
    ourCampaign(state) {
      return state.campaign;
    },
    ourSelection(state){
      return state.selection;
    }
  }
})
