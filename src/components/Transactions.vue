<template>
  <v-container   class="animated fadeIn container">
    <span class="right"><v-btn color=primary @click="exitPage()">Exit</v-btn></span>
  <h3>Transactions</h3>
    <span><b>Current Block:</b>  </span><span>{{getSelected}}</span>
    <!-- Get all transactions for this particular block -->
      <div class="col-md-8 col-md-offset-2">
        <div id="people">
            <v-client-table :data="getTransactions" :columns="columns">
                <template slot="edit" slot-scope="props">
                   <div>
                        <a class="fa fa-edit" :href="edit(props.row.id)">thing</a>
                    </div>
                </template>
            </v-client-table>
        </div>
    </div>
    <!-- Need a getter to specific data  -->


  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Vue from 'vue';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

    Vue.use(ClientTable, {
        perPage: 3
    }, false);

export default {
  data: function() {                           // <== changed this line
     return {
        currentChain: this.newChain,
        columns: [ 'id','from','to', 'amount','timestamp', 'valid'],
                tableData: [
                    {id:1, from:"0x01",to:"0x20", amount: "12", timestamp: "now", valid: true },
                    {id:2, from:"0x01",to:"0x10", amount: "2o", timestamp: "then", valid: false },
    
                ]
      }
    },
  methods: {
    exitPage() {
      this.$router.push('/')
    }
  },//end methods
  created() {
    console.log("Let there be light....");
    const current = this.newChain;
    let selected = "";

    //console.log("the defining edge: ", current ) 
    current.map( block => {
      console.log("Block hash: ", block.hash )
      if (block.hash === this.getSelected ) {
        //we have our block gets its transactions
        selected = this.getSelected
        console.log("Selected transactions: ", block.transactions )
        const blockTxs = block.transactions;
        this.$store.dispatch('setSelectedBlock ', selected );
        //this.$store.dispatch('setTransactions', blockTxs);
      }
    })


    console.log("Selected Block: ", selected )
  },
  computed: mapGetters(['getSelected','newChain', 'getTransactions']),
};//end export
</script>
<style scoped>
</style>

