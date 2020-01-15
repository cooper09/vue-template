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
      product_id: 0,
      price: 24.99,
      src: 'https://sonyainc.net/beat139/caps.jpg',
      category: 'Looking Good in the Hood',
      title: 'Hats: Snap Back',
      description: 'Colors: Red, Blue,Black, Gray'
    },{
      product_id: 1,
      price: 59.99,
      src: 'https://sonyainc.net/beat139/jacket.jpg',
      category: 'Chic and Elite',
      title: 'Varsity Jacket',
      description: 'Sizes: L,XL,XXL'
    },{
      product_id: 2,
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

    //  let exists = state.cartItems.some(a => typeof a == 'object');

        switch(payload.product_id) {
          case 0:
            console.log("set qty to item-1...");

              state.cartItems.map(item => {
                console.log('Item 1 - item: ', item.product_id , " payload id: ", payload.product_id)
                if (item.product_id === payload.product_id ) {
                  console.log("Update Item 1")
                  item.qty = ++state.itemOne;
                }
              })
            
          break;
          case 1:
            state.cartItems.map(item => {
              console.log("setCart - cartItems: ",item.qty ," this: ", item);
              item.qty = ++state.itemTwo;
              })
          
          break;
          case 2:
            state.cartItems.map(item => {
              console.log("setCart - cartItems: ",item.qty ," this: ", item);
              item.qty = ++state.itemThree;
              })
          break;
        }//end switch
    //  }//end iffy 
    }, //end set Campaigns
    createCart(state, payload) {
      console.log("Mutate - createCart: ", payload );
      for (var i=0 ; i < payload ; ++i) {
        var cartObj = {
          product_id: i,
          photo: state.products[i].src,
          title: state.products[i].title,
          sub_title: state.products[i].category,
          price: state.products[i].price,
          qty: 0
        }
        state.cartItems.push(cartObj);
        console.log("Mutate - createCart: ", state.cartItems )
      }//end for
      
    }//end createCart
  },//end mutations
  actions: {
    addToCart({commit}, data) {
      console.log("Add this to the cart: ", data  );
      commit('setCart', data);
    },
    createCart({commit}, num ) {
      console.log("Create are cart Items");
      commit('createCart', 3);

    }//end createCart

  }//end actions
})//end export default
