<template>
  <div class="animated fadeIn">
    <v-btn class="closeBtn" @click="closeMe">X</v-btn>
    <h1>Pending Transactions page</h1>
    Current Transaction: {{tx}}
     <v-btn  @click="beginMining()">Mine</v-btn>

    </div>
</template>
<script>
export default {
  name: 'Pending',
  data() {
    return {
      tx: {}
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
    }
  },//end methods
  created () {
    this.tx = this.$store.getters.getNewTx;
    console.log("Pending - retrieved from store: ", this.tx )
  
    this.$emit('update-tx', this.tx )
  }//end created 
}//export
</script>
<style scoped>
  .closeBtn {
    float: right;
  }
</style>
