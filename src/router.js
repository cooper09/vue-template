import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Settings from './components/Settings.vue'
import Create from './components/Create.vue'
import Transactions from './components/Transactions.vue'
import Pending from './components/Pending.vue'

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
      name: 'Settings',
      component: Settings
    },
    {
      path: '/create',
      name: 'Create Transaction',
      component: Create
    },
    {
      path: '/transactions',
      name: 'Block Transactions',
      component: Transactions
    },
    {
      path: '/pending',
      name: 'Pending Transactions',
      component: Pending
    }
  ]
})
