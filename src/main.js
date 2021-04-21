import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import blockchain from './blockchain'

const bc = new blockchain ();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  blockchain,
  bc,
  render: h => h(App)
}).$mount('#app')
