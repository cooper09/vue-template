<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>
    <v-content   class="animated fadeIn">
      <p>App.vue</p>
        Wallet (Public) Address: {{keys.privateKey}}
         <router-view></router-view>
      <HelloWorld/> 
     
    </v-content>
    <v-content transition="slide-x-transition">

    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import {Blockchain} from './blockchain_signing.js';
import {getKeys} from './helpers';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
    keys:{}
  }),
  methods: {
    appMethod (){
      console.log('appMethod at our service...')
    }
  },
  created () {
    console.log(' AppVue - Create new test class')

  // create blockchain class
    const coin = new Blockchain ();
    this.$store.commit('setCoin', coin)
    const newCoin = this.$store.getters.getCoin;
    console.log("Block Coin in the store: ", newCoin.miningReward )

    //get and store private and public keys
     this.keys = getKeys();
    console.log("Our Keys: ", this.keys);
    this.$store.commit('setKeys', this.keys);
    }//end created
};
</script>
<style>
body {
  padding: 2em;
}
.right {
  float: right;
}
</style>
