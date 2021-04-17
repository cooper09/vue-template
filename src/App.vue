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
//import Blockchain from './blockchain_proof_of_work-2';
//import Blockchain from './blockchain_transactions';
import {Blockchain, Transaction} from './blockchain_signing';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
   newchain: [],
   wallet: ""
  }),//end data
  created() {
    console.log("Create our blockchain");

    const blockCoin = new Blockchain();
    const currentChain = blockCoin.getBlockChain();
    console.log("current blockchain wallet: ", currentChain.walletAddress);

    //Add data to props

    this.$store.dispatch('setBlockChain', currentChain.chain);
    this.$store.dispatch('setWalletAddr', currentChain.walletAddress);
    //we now have a working blockchain.
    //  1) add to store
    //  2) display data
    //  3) create transaction

  },//end created
  computed: {
    blockchain() {
      console.log("computed - store blockchain: ", this.$store.testChain);
      return this.$store.testChain;
    },
    walletAddr() {
      return this.$store.walletAddr;
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
