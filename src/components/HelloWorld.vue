<template>
  <v-container class="animated fadeIn container">
    <div>
      <span><v-btn class="right" @click="createPage()">Create Transaction</v-btn></span>
      <span><v-btn class="right" @click="settingsPage()">Settings</v-btn></span>
    </div>
     <div v-for= "block in blocks" >
         {{block}} <router-link to='/transactions'>Transactions</router-link>
    </div>
  </v-container>
</template>

<script>
export default {
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
