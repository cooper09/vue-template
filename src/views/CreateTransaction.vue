<template>
  <div class="animated fadeIn">
    <v-btn class="right" @click="closeMe">X</v-btn>
    <h1>Create Transaction page</h1>

    <v-btn  @click="createTx()">Sign & Create</v-btn>
  </div>
</template>
<script>
import {Transaction} from '../blockchain_signing.js';
export default {
  data() {
    return {
      coin: {},
      keys: []
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

      const newTx = new Transaction(walletPublicAddr, "0c002", 100);
      console.log("our New transaction: ", newTx );


  //sign transaction with the private key
    newTx.signTransaction(this.keys); 
    console.log("Signed transaction: ", newTx.signature )  
    this.coin.addTransaction(newTx);

    }//end created
  },//end methods
  created () {
      console.log("Begin CreateTransaction!");
      this.coin = this.$store.getters.getCoin;
      console.log("CreateTransaction - Coin in the store: ", this.coin.miningReward );
  
  }
}//export
</script>
<style scoped>
</style>
