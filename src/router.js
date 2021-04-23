import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Settings from './views/Settings.vue'
import CreateTransaction from './views/CreateTransaction.vue'
import ListTransactions from './views/ListTransactions.vue'
import Pending from './views/Pending.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
      component: Settings
    },
    {
      path: '/create',
      name: 'Create Transaction',
      component: CreateTransaction
    },
    {
      path: '/transactions',
      name: 'List Transactions',
      component: ListTransactions,
      props: true
    },
    {
      path: '/pending',
      name: 'Pending Transactions',
      component: Pending
    }
  ]
})
