<template>
  <v-container   class="animated fadeIn container">
      <span class="right"><v-btn color=primary @click="exitPage()">Exit</v-btn></span>
   <h3>Create Transaction </h3> current chain: {{this.getCoin}}
  <p>Transfer some tokens/coins to someone!</p>
       <v-container>
        <form  @submit="submitTransaction()">
          <br/><br/>
            From Address: <input id="from" type="text" v-model="from" :placeholder=getWallet class="border" width="700" readonly="readonly"><br/>
            <p  class="smallFont">This is your wallet address. You cannot change it because you can only spend your own coins.</p>
            <br/>
            To Address:  <input id="to" type="text" v-model="to" placeholder ="" class="border"><br/>
            <p  class="smallFont">The address of the wallet where you want to send the money to. You can type random text here (if you are not interested in recovering the funds)
</p><br/>
            Amount: <input id="amount" type="text" v-model="amount" placeholder ="" class="border"><br/>
            <p  class="smallFont">You can transfer any amount. Account balance is not checked in this demo. Have at it</p><br/>
           
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
                Sign & Create transaction
              </v-btn>
        </div>
       </v-container>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import  Transaction  from  '../transaction.js';

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
            
const walletKey = ec.keyFromPrivate('78c8c039744d8d863b4be8935c0d30aebc4c8c0932246eff4a901e6acf2b17fa');
const walletAddress = walletKey.getPublic('hex');
    
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
      //console.log("Show Pendiong Transactions 2:  ", document.getElementById('from').value + " stinky");
      document.getElementById('from').value = this.getWallet;
      let transactionObj = {
        from: document.getElementById('from').value,
        to: document.getElementById('to').value,
        amount: document.getElementById('amount').value,
      }

      this.$store.dispatch('newTx', transactionObj)
      //add transaction to the chain
      this.createTx(transactionObj)
      // check thats valid and set parameter
      //this proceed to prending page.
      //this.$router.push('/pending')
    },
    createTx (newTx) {

      console.log("Create Transaction: ", newTx, " private key: ", walletKey );
        //console.log("BlockCoin wallet key: ", blockCoin.walletKey );
    //const walletAddress = walletKey.getPublic('hex');
    const tx = new Transaction(walletKey, walletAddress, 10 );
    console.log("new transaction:  ", tx )
    tx.signTransaction( this.getWallet);

    //blockCoin.addTransaction(transObj)


    }
  },//end methods
  computed: mapGetters(['getWallet','getCoin']),
};//end export
</script>
<style scoped>

</style>
