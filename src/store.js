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

      let exists = state.cartItems.some(a => typeof a == 'object');

      //cooper s - need a function to create objects - Factory Pattern?
      console.log("Is there something in the carts array: " ,exists);
      if (exists) {
        switch(payload.product_id) {
          case 'item-1':
            console.log("set qty to item-1...");

              state.cartItems.map(item => {
                console.log("setCart - cartItems: ",item.qty ," this: ", item);
                item.qty = ++state.itemOne;
                })
            
          break;
          case 'item-2':
            state.cartItems.map(item => {
              console.log("setCart - cartItems: ",item.qty ," this: ", item);
              item.qty = ++state.itemTwo;
              })
          
          break;
          case 'item-3':
            state.cartItems.map(item => {
              console.log("setCart - cartItems: ",item.qty ," this: ", item);
              item.qty = ++state.itemThree;
              })
          break;
        }//end switch
      } else {
        console.log("No items in cart yet, lets create one: ", payload.product_id )

        switch(payload.product_id) {
          case 'item-1':
            payload.product_id = 'item-1';
          break;
          case 'item-2':
            payload.product_id = 'item-2';;
          break;
          case 'item-3':
            payload.product_id = 'item-3';
          break;
        }//end switch

        var cartObj = {
          product_id: payload.product_id,
          photo: payload.src,
          title: payload.title,
          sub_title: payload.description,
          price: payload.price,
          qty: ++state.itemOne
        }
        state.cartItems.push(cartObj);
      }//end iffy


  }, //end set Campaigns
  },
  actions: {
    addToCart({commit}, data) {
      console.log("Add this to the cart: ", data  );
      commit('setCart', data);
    }

  }//end actions
})//end export default
