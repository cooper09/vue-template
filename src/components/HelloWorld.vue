<template>
  <v-container class="animated fadeIn container">
  
    <div v-for="block in newCoin.chain"  :key=block.hash >
      {{block.transactions}} 
      <v-btn class="right" @click="showTxs()">Show Transactions</v-btn>
    </div>
    <div>
      <v-btn @click="nextPage()">Create Transaction</v-btn>
    </div>
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
      this.$router.push('/createtransaction')
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
  const walletKey = ec.keyFromPrivate(privateKey)
  const walletPublicAddress = walletKey.getPublic('hex');

  //now that we have our wallet we can create the transaction - be sure 
  //  sign it with the current wallet's public key. 
    const newTx = new Transaction(walletPublicAddress, "0c002", 100);
    console.log("HelloWorld - New transaction: ", newTx );

  //sign transaction with the private key
    newTx.signTransaction(walletKey); 
    console.log("Signed transaction: ", newTx.signature )  
    this.newCoin.addTransaction(newTx);

  //mine up the new transaction in its own block
    console.log("\n Starting up the 7 dwarfs...");
    this.newCoin.minePendingTransactions(walletPublicAddress);
                
    console.log('\n Wallet Balance: ', this.newCoin.getBalanceOfAddress(walletPublicAddress));

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
