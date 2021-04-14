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
      <router-view></router-view>
      <HelloWorld :bchain="blockchain"/> 
    </v-content>
    <v-content transition="slide-x-transition">

    </v-content>

  </v-app>
</template>

<script>

import { mapGetters,mapActions } from 'vuex';

import HelloWorld from './components/HelloWorld';
import Block from './block';
import Blockchain from './blockchain';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
   newchain: []
  }),//end data
  created() {
    console.log("App created...");
    const blockCoin = new Blockchain();
    console.log("new blockchain: ", blockCoin.chain);
    const timestamp =  new Date().getTime();
    const firstBlock = new Block (1,timestamp, {amount: 4});
    const secondBlock = new Block (2,timestamp, {amount: 10});

    blockCoin.addBlock(firstBlock);
    blockCoin.addBlock(secondBlock);

    //Add data to props

    this.$store.dispatch('setBlockChain', blockCoin.chain)

    //we now have a working blockchain.
    //  1) add to store
    //  2) display data
    //  3) create transaction

  },//end created
  computed: {
    blockchain() {
      //console.log("store blockchain: ", this.$store.testChain)
      return this.$store.testChain;
    }
  }
};//end export
</script>
<style>
body {
  padding: 2em;
}
  .right {
    float: right;
  }
 .btn {
   margin-right: 1em;
 };
</style>
