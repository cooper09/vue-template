<template>
  <v-container   class="animated fadeIn container">
    <span class="right"><v-btn color=primary @click="exitPage()">Exit</v-btn></span>
  <h3>Transactions</h3>
    <h3>Current Block: </h3>{{getSelected}}
    <!-- Get all transactions for this particular block -->
    <!-- Need a getter to specific data  -->
    <p>Current block has no transactions C</p>
        {{this.newChain.getBlockTransactions()}}
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
  
  },
  computed: mapGetters(['getSelected','newChain']),
};//end export
</script>
<style scoped>
</style>

