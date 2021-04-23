<template>
  <div class="animated fadeIn">
    <v-btn class="right" @click="closeMe">X</v-btn>
    <h1>List Transactions page</h1>
    {{transactions}}
  </div>
</template>
<script>
export default {
  name:'ListTransactions',
  data () {
    return {
      coin: {},
      chain:{},
      block: '', 
      transactions:[]
    }
  },
  methods: {
    closeMe(){
      this.$router.push('/');
    }
  },
  created() {
    //First get the coin class..

      console.log("this route params: ", this.$route.params.foo );

        this.block = this.$route.params.foo;
        console.log("selected block: ", this.block );

        this.coin = this.$store.getters.getCoin;
        console.log("List Transactions- Coin in the store: ", this.coin.miningReward );

        this.chain = this.coin.chain;
        //console.log()

        this.chain.map( block => {
          console.log("This blocks hash: ", block.hash );
          if (block.hash === this.block ) {
             this.transactions = block.transactions;
             return 
          } //end iffy 
        })
  }
}//export
</script>
<style scoped>
</style>
