<template>
  <v-container class="animated fadeIn container">
    <div>
      <span><v-btn class="right" @click="createPage()">Create Transaction</v-btn></span>
      <span><v-btn class="right" @click="settingsPage()">Settings</v-btn></span>
    </div>
     <div v-for= "block in blocks" :key="block.hash">
         {{block}} <v-btn @click="showTxs(block.hash)">Transactions</v-btn>
         
     <!--     <router-link to='/transactions'>Transactions</router-link> 
         <router-link :to="{ name: '/transactions', params: {block} }" ></router-link> -->
         
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ListTransactions',
  data: () => ({
    blocks: [
      {
        hash: "123",
        data: "block one"
      },
      { 
        hash: "456",
        data: "block two"
      },
      {
      hash: "789",
      data:"block three"
      }

    ],
    keys: {}
  }),
  coin: {},
  methods: {
    settingsPage() {
      this.$router.push('/settings')
    },
    createPage(){
      this.$router.push('/create')
    },
    showTxs (block){
      console.log("Show transactions for: ", block);
      this.$router.push({name: 'List Transactions', params: {foo: block }})
    }
  },//end methods
    created () {
      console.log("Begin HelloWorld!");
      this.coin = this.$store.getters.getCoin;
      console.log("HelloWorld - Coin in the store: ", this.coin.miningReward );
      this.blocks = this.coin.chain;

      //this.keys = this.$store.getters.getKeys;
      //console.log("Our keys to the castle: ", this.keys)
    }
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
