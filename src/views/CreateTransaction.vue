<template>
  <div class="animated fadeIn">
    <v-btn class="right" @click="closeMe">X</v-btn>
    <h1>Create Transaction page</h1>

    <v-btn  @click="showPending()">Sign & Create</v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coin: {}
    }
  },
  methods: {
    closeMe(){
      this.$router.push('/');
    },
    showPending (){
      this.$router.push('/pending')
    }
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
