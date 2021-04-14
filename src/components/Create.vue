<template>
  <v-container   class="animated fadeIn container">
      <span class="right"><v-btn color=primary @click="exitPage()">Exit</v-btn></span>
   <h3>Create Transaction</h3>
  <p>Transfer some tokens/coins to someone!</p>
       <v-container>
        <form  @submit="submitTransaction()">
            From Address: <input type="text" v-model="from" placeholder ="0x100000000" class="border"><br/>
            <p  class="smallFont">This is your wallet address. You cannot change it because you can only spend your own coins.</p>
            <br/>
            To Address:  <input type="text" v-model="to" placeholder ="" class="border"><br/>
            <p  class="smallFont">The address of the wallet where you want to send the money to. You can type random text here (if you are not interested in recovering the funds)
</p><br/>
            Amount: <input type="text" v-model="amount" placeholder ="" class="border"><br/>
            <p  class="smallFont"></p>You can transfer any amount. Account balance is not checked in this demo. Have at it!<br/>
            <input class="submit" type="submit" value="Sign & Create transaction" ><br/>
        </form>
       </v-container>
    </v-container>
</template>

<script>
export default {
  data () {
      return {
          from: '',
          to: '',
          amount: ''
      }
  },
  methods: {
    exitPage() {
      this.$router.push('/')
    },
  submitTransaction(e){
    e.preventDefault()
    console.log("Submit Transaction");
    this.$router.push('/pending')
  }
  }//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
</style>
