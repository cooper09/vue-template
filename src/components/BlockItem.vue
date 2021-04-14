<template>
  <div>
  <h3>Block</h3>   {{block.id}} 
  <div class="block">
    Hash: {{block.hash}}<br/>
    Previous Hash: {{block.previousHash}}<br/>
    Data: {{block.data }}<br/>
    Timestamp: {{block.timestamp}}
    <br/>
    <v-btn @click="showTransactions()">Show Transactions</v-btn>
  </div>
  </div>
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
    .block-item {
        background: #f4f4f4;
        padding: 1em;
        border: 2px #ff0 dotted;
        margin: 1em;
    }

    .block {
      border: 1px solid #333;
      background: #ccc;
      padding: 1em;
      border-radius: 5px;
      text-align: center;
      position: relative;
      cursor:pointer;
    }
</style>
