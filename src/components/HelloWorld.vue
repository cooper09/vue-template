<template>
  <v-container class="animated fadeIn container">
    stink

    {{newCoin}}
   <v-btn @click="nextPage()">Show Cart</v-btn>
  </v-container>
</template>

<script>
import {Transaction} from '../../blockchain_signing.js';

export default {
  data: () => ({
    newCoin: {}
  }),
  methods: {
    nextPage() {
      //console.log("ouch!")
      this.$router.push('/basket')
    }
  },//end methods
  created () {
    this.newCoin = this.$store.getters.getCoin;
    console.log("HelloWorld - Coin in the store: ", this.newCoin.miningReward );
  // create a new transaction

  //Creat a wallet to "sign" any transaction
  console.log("Key me up...")
  const EC = require('elliptic').ec;
  const ec = new EC('secp256k1');

  const key = ec.genKeyPair();
  const publicKey = key.getPublic('hex');
  const privateKey = key.getPrivate('hex');

  console.log("Our private key: ", privateKey )

 // const walletKey = ec.keyFromPrivate('78c8c039744d8d863b4be8935c0d30aebc4c8c0932246eff4a901e6acf2b17fa');
  const walletKey = ec.keyFromPrivate(privateKey)
  const walletAddress = walletKey.getPublic('hex');
  //newCoin.walletAddress = walletAddress;

    const newTx = new Transaction(walletAddress, "0c002", 100);
    console.log("HelloWorld - New transaction: ", newTx );

    newTx.signTransaction(walletKey); 
    console.log("Signed transaction: ", newTx.signature )  
    this.newCoin.addTransaction(newTx);

  //mine up the new transaction in its own block
    console.log("\n Starting up the 7 dwarfs...");
    this.newCoin.minePendingTransactions(walletAddress);
                
    console.log('\n Wallet Balance: ', this.newCoin.getBalanceOfAddress(walletAddress));

  console.log("Final Chain: ", this.newCoin.chain )

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
