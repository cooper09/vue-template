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
      <HelloWorld/> 
      <router-view></router-view>
    </v-content>
    <v-content transition="slide-x-transition">

    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Test from '../test.js';
import {Blockchain} from '../blockchain_signing.js';
//import Transaction from './transaction.js';


export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),//end data
  created () {
    console.log(' AppVue - Create new test class')
    const test = new Test ();
    console.log("App Vue created - Test data: ", test.data );
    console.log("App Vue created - Test method: ", test.sideWind() );

    this.$store.commit('setTest', test)
    const newClass = this.$store.getters.getClass;
    console.log("Currently in the store: ", newClass.sideWind() )

  // create blockchain class

  const coin = new Blockchain ();
  this.$store.commit('setCoin', coin)
  const newCoin = this.$store.getters.getCoin;
    console.log("Block Coin in the store: ", newCoin.miningReward )
  }, 
  computed: {
    getClass () {
      return this.$store.testClass
    }
  }
};//end export
</script>
<style>
body {
  padding: 2em;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e6f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow:auto;
  padding: 2rem 2rem
}

</style>
