<template>
  <div class="animated fadeIn">
    <v-btn class="right" @click="closeMe">X</v-btn>
    <h1>Create Transaction page</h1>
    <Pending />
    <v-btn  @click="createTx()">Sign & Create</v-btn>
  </div>
</template>
<script>
import {Transaction} from '../blockchain_signing.js';
import Pending from './Pending';

export default {
  data() {
    return {
      coin: {},
      keys: {}
    }
  },
  methods: {
    closeMe(){
      this.$router.push('/');
    },
    showPending (){
      this.$router.push('/pending')
    },
    createTx (){
      console.log("Create and sign a transaction", this.coin);
      this.keys = this.$store.getters.getKeys;
      console.log("Our keys to the castle: ", this.keys.publicKey)
      const walletPublicAddr = this.keys.publicKey;
      const walletPrivateAddr = this.keys.privateKey;

      const newTx = new Transaction(walletPrivateAddr, "0c002", 100);
      console.log("our New transaction: ", newTx );

  //sign transaction with the private key
    newTx.signTransaction(this.keys); 
    console.log("Signed transaction: ", newTx.signature );

    //set the new transaction to the store
    this.$store.commit ('setNewTx', newTx );
       const tx = this.$store.getters.getNewTx;
      console.log("CreateTransaction - Transaction in the store: ", tx );
    
     //showPending ()

    this.$router.push('/pending');
    //this.$router.push({name: './pending', params: {foo: "test" }})

  /*
  this.coin.addTransaction(newTx);

    //mine up the new transaction in its own block
    console.log("\n Starting up the 7 dwarfs...");
    this.coin.minePendingTransactions(walletPublicAddr);
                
    console.log('\n Wallet Balance: ', this.coin.getBalanceOfAddress(walletPublicAddr));

  console.log("Final Chain: ", this.coin.chain )

    */
    }//end created
  },//end methods
  emits: [
    "update-tx"
  ]

  ,
  created () {
      console.log("Begin CreateTransaction!");
      this.coin = this.$store.getters.getCoin;
      console.log("CreateTransaction - Coin in the store: ", this.coin.miningReward );
  
  }
}//export
</script>
<style scoped>
</style>
