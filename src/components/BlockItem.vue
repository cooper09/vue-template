<template>
  <div>
  <v-container class="animated fadeIn">
    <v-card class="pa-1">
      <v-responsive class="pt-4"> 
       <center><img src="../logo.png" width="35"/></center>
      </v-responsive>
        <h3>Block</h3>   {{block.index}} 
         <v-card-text>
                <div class="subheading wrap">Hash: {{block.hash}}</div>
                <div>Previous Hash: {{block.previousHash}}</div>
                <div>Data: {{block.data }}</div>
                <div>Timestamp: {{block.timestamp}}</div>
            </v-card-text>
              <v-card-actions>
                <span class="right"><v-btn
                  depressed
                  color="primary"
                  @click="showTransactions()"
                >
                  Show Transactions
                </v-btn></span>
        </v-card-actions>
    </v-card>
  </v-container>
  </div><!-- end main div -->
</template>

<script>
export default {
 name: "BlockItem",
 props: ["block"],
   methods: {
    showTransactions() {
      this.$router.push('/transactions')
    }
  },//end methods
}//end export 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right {
  float:right;
}


</style>
