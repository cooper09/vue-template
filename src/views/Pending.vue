<template>
  <div class="animated fadeIn">
    <v-btn class="closeBtn" @click="closeMe">X</v-btn>
    <h1>Pending Transactions page</h1>
     <v-btn  @click="beginMining()">Mine</v-btn>

    </div>
</template>
<script>
export default {
  methods: {
    closeMe(){
      this.$router.push('/');
    },
    beginMining() {
        console.log("Time to go to work!")
    }
  }
}//export
</script>
<style scoped>
  .closeBtn {
    float: right;
  }
</style>
