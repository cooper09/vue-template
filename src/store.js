import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    campaignsUrl: 'https://sleepy-everglades-99189.herokuapp.com/sales',
    conversionsUrl:
        'https://sleepy-everglades-99189.herokuapp.com/conversions',
    campaigns: [],
    conversions: [],
    campaignTitles: [
      {
        value: "option 1"
      },
      {
        value: "option 2"
      },
      {
        value: "option 3"
      }
    ],
  },
  mutations: {
    setCampaigns(state, payload) {
      //alert('store - setCampaigns: ' + payload);
      state.campaigns = payload;
      }, //end set Campaigns
    setConversions(state, payload) {
          //alert('store - setConversions: ' + payload);
          state.conversions = payload;
      } //end set Campaigns
  },
  actions: {
    async getCampaigns({ state, commit }) {
      //alert("store - getCampaigns:  " )
      try {
          let response = await axios.get(`${state.campaignsUrl}`);
          commit('setCampaigns', response.data);
      } catch (error) {
          //commit('setCampaigns', \[\]);
          alert('Campaigns error: ' + error);
      }
  },
  async getConversions({ state, commit }) {
      //alert("store - getConversions:  " )
      try {
          let response = await axios.get(`${state.conversionsUrl}`);
          commit('setConversions', response.data);
      } catch (error) {
          //commit('setCampaigns', \[\]);
          alert('Conversions error: ' + error);
      }
  },
  }
})
