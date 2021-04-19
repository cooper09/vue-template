<template>
  <v-container   class="animated fadeIn container">
        <v-btn class="btn right" @click="exitPage()">Exit</v-btn>
   <h3>Pending Transactions</h3>

    <v-row>
      <v-responsive> 
        List of pending transactions go here: {{getPending}}<br/>
        New Transaction: {{getNewTx}}


      <div class="col-md-8 col-md-offset-2">
        <div id="people">
            <v-client-table :data="getPending" :columns="columns">
                <template slot="edit" slot-scope="props">
                   <div>
                        <a class="fa fa-edit" :href="edit(props.row.id)">thing</a>
                    </div>
                </template>
            </v-client-table>
        </div>
    </div>
      </v-responsive>
    </v-row>
           <div>
              <v-btn
                class="ma-2"
                outlined
                raised
                primary
                color="indigo"
                @click="startMining()"
              >
                Start Mining
              </v-btn>
        </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

export default {
  data: () => ({
    columns: [ 'id','from','to', 'amount','timestamp', 'valid'],
                tableData: [
                    {id:1, from:"0x01",to:"0x20", amount: "12", timestamp: "now", valid: true },
                    {id:2, from:"0x01",to:"0x10", amount: "2o", timestamp: "then", valid: false },
  
                ]
  }),
  //pending: [this.getNewTx],
  methods: {
    exitPage() {
      this.$router.push('/')
    },
    startMining() {
      console.log("Mine block: ", this.newChain ," new transaction: ", this.getNewTx);
      let txObj = {
        id : "00",
        from: "0x10000",
        to: "you",
        amount: "20",
      }
    const addTx = this.newChain.addTransaction(txObj)
      //this.newChain.addTransaction(this.getNewTx);
    }
  },//end methods
computed: mapGetters(['getWallet','getPending','getNewTx', 'newChain']),
};//end export
</script>
<style scoped>

</style>
