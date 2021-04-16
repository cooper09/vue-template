<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="btn"><img src="./logo.png" width="40"></span>
        <span class="font-weight-light">Proto-Chain</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://penta.solutions/"
        target="_blank"
      >
        <span class="mr-2">Do it yourself Blockchain</span>
      </v-btn>
    </v-app-bar>
    <v-content   class="animated fadeIn">
      <router-view></router-view>
       {{blockchain}}
     <HelloWorld :bchain="blockchain"/>  
    <p>Store Chain: {{this.$store.testChain}}</p>
    </v-content>
    <v-content transition="slide-x-transition">

    </v-content>

  </v-app>
</template>

<script>

import { mapGetters,mapActions } from 'vuex';

import HelloWorld from './components/HelloWorld';
import Block from './block';
//import Blockchain from './blockchain';
//import Blockchain from './blockchain_proof_of_work';
import Blockchain from './blockchain_transactions';

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

    const currentChain = blockCoin.getBlockChain();
    const timestamp =  new Date().getTime();

    console.log("current blockchain: ", currentChain.chain);

    //Add data to props

    this.$store.dispatch('setBlockChain', currentChain.chain)

    //we now have a working blockchain.
    //  1) add to store
    //  2) display data
    //  3) create transaction

  },//end created
  computed: {
    blockchain() {
      console.log("computed - store blockchain: ", this.$store.testChain);
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
 }
  .border {
    border: 1px solid #333;
  }
  .submit {
    background: purple;
    padding: 0.5em;
    color: white;
    
  }
</style>
