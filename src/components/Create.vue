<template>
  <v-container   class="animated fadeIn container">
      <span class="right"><v-btn color=primary @click="exitPage()">Exit</v-btn></span>
   <h3>Create Transaction</h3>
  <p>Transfer some tokens/coins to someone!</p>
       <v-container>
         {{getWallet}}
        <form  @submit="submitTransaction()">
          <br/><br/>
            From Address: <input type="text" v-model="from" :placeholder=getWallet class="border" width="700"><br/>
            <p  class="smallFont">This is your wallet address. You cannot change it because you can only spend your own coins.</p>
            <br/>
            To Address:  <input type="text" v-model="to" placeholder ="" class="border"><br/>
            <p  class="smallFont">The address of the wallet where you want to send the money to. You can type random text here (if you are not interested in recovering the funds)
</p><br/>
            Amount: <input type="text" v-model="amount" placeholder ="" class="border"><br/>
            <p  class="smallFont"></p>You can transfer any amount. Account balance is not checked in this demo. Have at it!<br/>
            <input class="submit" type="submit" value="Sign & Create transaction" ><br/>
        </form>
        <div>
              <v-btn
                class="ma-2"
                outlined
                raised
                primary
                color="indigo"
                @click="showPending()"
              >
                Outlined Button
              </v-btn>
        </div>
       </v-container>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
      return {
          from: this.$store.getWallet,
          to: '',
          amount: ''
      }
  },
  methods: {
    exitPage() {
      this.$router.push('/')
    },
    showPending () {
      console.log("Show Pendiong Transactions ");
      this.$router.push('/pending')
    },
  submitTransaction(e){
    e.preventDefault()
    console.log("Submit Transaction");
    this.$router.push('/pending')
  }
  },//end methods
  computed: mapGetters(['getWallet']),
};//end export
</script>
<style scoped>

</style>
