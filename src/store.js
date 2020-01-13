import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberOfItems:  0,
    itemOne: 0,
    itemTwo: 0,
    itemThree: 0,
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
    }],
  },//end state
  mutations: {
    setCart(state, payload) {

      ++state.numberOfItems;

      let qty;

console.log("setCart - project id: ", payload.product_id );

      switch(payload.product_id) {
        case 'item-1':
          console.log("set qty to item-1...");
        //  var newArr = state.cartItems.map(item => ({ id: item.product_id, count: ++itemOne}))
        //  console.log("new Array: ", newArr )
          qty =  ++state.itemOne
        break;
        case 'item-2':
          qty =  ++state.itemTwo
        break;
        case 'item-3':
          qty =  ++state.itemThree
        break;
      }//end switch

      console.log("setCart qty: ", qty )
      var cartObj = {
        product_id: payload.product_id,
        photo: payload.src,
        title: payload.title,
        sub_title: payload.description,
        price: payload.price,
        qty: Number(qty)
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
