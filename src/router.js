import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Basket from './components/Basket.vue'
import BasketCheckout from './components/BasketCheckout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      //component: Home
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: BasketCheckout
    }
  ]
})
