import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberOfItems:  0,
    cartItems: [],
    products: [{
      product_id: "item-1",
      price: 14.99,
      src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
      category: 'For the perfect meal',
      title: 'The Cool Joint',
      description: 'Looking good in the hood...'
    },{
      product_id: "item-2",
      price: 64.99,
      src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
      category: 'Life after death',
      title: 'The Beat 139 Goes on',
      description: 'The bomb b-diddy...'
    }]
  },//end data
  mutations: {
    setCart(state, payload) {

      ++state.numberOfItems;

      var cartObj = {
        product_id: payload.product_id,
        photo: payload.src,
        title: payload.title,
        sub_title: payload.description,
        price: payload.price,
        qty: 1
      }
      state.cartItems.push(cartObj);

  }, //end set Campaigns
  },
  actions: {
    addToCart({commit}, data) {
      console.log("Add this to the cart: ", data  );
      commit('setCart', data);
    }

  }//end actions
})//end export default
