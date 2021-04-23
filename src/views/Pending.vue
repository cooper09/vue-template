<template>
  <div class="animated fadeIn">
    <v-btn class="closeBtn" @click="closeMe">X</v-btn>
    <h1>Pending Transactions page</h1>
    Current Transaction: {{tx}}
     <v-btn  @click="beginMining()">Start Mining</v-btn>

    </div>
</template>
<script>
export default {
  name: 'Pending',
  data() {
    return {
      tx: {},
      coin:{},
      keys:{}
    }
  },
  methods: {
    closeMe(){
      this.$router.push('/');
    },
    beginMining() {
        console.log("Time to go to work!")
        // see if I can send an event up the chain....
        //this,$emit('begin-minin', this.tx )
          
  this.coin.addTransaction(this.tx);

    //mine up the new transaction in its own block
    console.log("\n Starting up the 7 dwarfs...");

    const walletPublicAddr = "12334"
    this.coin.minePendingTransactions(walletPublicAddr);
                
  console.log('\n Wallet Balance: ', this.coin.getBalanceOfAddress(walletPublicAddr));

  console.log("Final Chain: ", this.coin.chain )

    
    }
  },//end methods
  created () {
    this.tx = this.$store.getters.getNewTx;
    console.log("Pending - retrieved from store: ", this.tx )
    //this.$emit('update-tx', this.tx )

    this.coin = this.$store.getters.getCoin;
    console.log("Pending - Coin in the store: ", this.coin.miningReward );

      this.keys = this.$store.getters.getKeys;
      console.log("Pending - Our keys to the castle: ", this.keys)
  
  }//end created 
}//export
</script>
<style scoped>
  .closeBtn {
    float: right;
  }
</style>
