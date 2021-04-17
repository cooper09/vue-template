<template>
  <v-container   class="animated fadeIn container">
    <span class="right"><v-btn color=primary @click="exitPage()">Exit</v-btn></span>
  <h3>Transactions</h3>
    <h3>Current Block: </h3>{{getSelected}}
    <!-- Get all transactions for this particular block -->
    <!-- Need a getter to specific data  -->
    <p>Current block has no transactions B</p>
    {{this.getTransactions}}
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: function() {                           // <== changed this line
     return {
        currentChain: this.newChain,
      }
    },
  methods: {
    exitPage() {
      this.$router.push('/')
    }
  },//end methods
  created() {
    console.log("Let there be light....");
    const current = this.newChain;
    //console.log("the defining edge: ", current ) 
    current.map( block => {
      console.log("Block hash: ", block.hash )
      if (block.hash === this.getSelected ) {
        //we have our block gets its transactions
        console.log("Selected transactions: ", block.transactions )
        const blockTxs = block.transactions;
        this.$store.dispatch('setTransactions', blockTxs);
      }
    })

    const selected = this.getSelected
    console.log("Selected Block: ", selected )
  },
  computed: mapGetters(['getSelected','newChain', 'getTransactions']),
};//end export
</script>
<style scoped>
</style>

