import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberOfItems:  0,
    cartItems: [],
    products: [{
      product_id: "item-1",
      price: 24.99,
      src: 'https://sonyainc.net/beat139/caps.jpg',
      category: 'Looking Good in the Hood',
      title: 'Hats: Snap Back',
      description: 'Colors: Red, Blue,Black, Gray'
    },{
      product_id: "item-2",
      price: 59.99,
      src: 'https://sonyainc.net/beat139/jacket.jpg',
      category: 'Chic and Elite',
      title: 'Varsity Jacket',
      description: 'Sizes: L,XL,XXL'
    },{
      product_id: "item-3",
      price: 34.99,
      src: 'https://sonyainc.net/beat139/sweat-shirt.jpg',
      category: 'Stay Warm in the Storm',
      title: 'Sweat Shirts (Regular)',
      description: 'Sizes: L,XL,XXL'
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
