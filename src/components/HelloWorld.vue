<template>
  <v-container class="animated fadeIn container">
   <v-btn @click="nextPage()">Show Cart</v-btn>
  </v-container>
</template>

<script>
import {Transaction} from '../../blockchain_signing.js';

export default {
  data: () => ({
  
  }),
  methods: {
    nextPage() {
      //console.log("ouch!")
      this.$router.push('/basket')
    }
  },//end methods
  created () {
    const newCoin = this.$store.getters.getCoin;
    console.log("HelloWorld - Coin in the store: ", newCoin.miningReward );
  // create a new transaction
    const newTx = new Transaction("0x000", "0c002", 100);
    console.log("HelloWorld - New transaction: ", newTx );

  //Creat a wallet to "sign" any transaction
  const EC = require('elliptic').ec;
  const ec = new EC('secp256k1');
  const walletKey = ec.keyFromPrivate('78c8c039744d8d863b4be8935c0d30aebc4c8c0932246eff4a901e6acf2b17fa');
  const walletAddress = walletKey.getPublic('hex');
  newCoin.walletAddress = walletAddress;

    newTx.signTransaction(walletKey);   
    newCoin.addTransaction(newTx);

  }//end created
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
  .container {
    background: pink;
  }
</style>
