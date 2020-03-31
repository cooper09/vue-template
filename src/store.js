import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: [],
    total: 0,
    products: [
      {
        id: 1,
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 2,
        title: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 35,
        ratings: 5,
        reviews: 10,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 3,
        title: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        ratings: 2,
        reviews: 3,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 4,
        title: 'Product 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        ratings: 1,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 5,
        title: 'Product 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 35,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 6,
        title: 'Product 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        ratings: 5,
        reviews: 1,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 7,
        title: 'Product 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        ratings: 5,
        reviews: 7,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 8,
        title: 'Product 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 35,
        ratings: 3,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      },
      {
        id: 9,
        title: 'Product 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1
      }
    ],
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: ''
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false
    }  
  },//end state
  mutations: {
    setData(state,payload) {
      state.selected.push( payload);
      state.total = state.total + parseInt(payload.price)
      //console.log("store.setData: ", state.selected)
    },
    updateCart(state,payload) {
      console.log("update selected: ", payload.title )
      let newCart = state.selected.filter(item => {
          console.log("item to remove: ", item.title );
          if (item.title != payload.title) {
            return item;
          } 
      })
      console.log("New Cart: ", newCart );
      state.selected = newCart;
      state.total = state.total - payload.price;

      //state.total = state.total + parseInt(payload.price)
      //console.log("store.setData: ", state.selected)
    }
  }, 
  actions: {
    setData(context, data ) {
      //alert("Hit it kid: " + data );
      context.commit('setData', data);
    },
    updateCart(context, data) {
      context.commit('updateCart', data);
    }
  },//end actions
  getters: {
    addTotal: state => {
     return  "$20"
    }
  },
})
