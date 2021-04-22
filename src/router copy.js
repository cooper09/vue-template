import Vue from 'vue'
import Router from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Basket from './components/Basket.vue'
import BasketCheckout from './components/BasketCheckout.vue'

Vue.use(Router, createRouter, createWebHistory)

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
