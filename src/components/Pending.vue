<template>
  <v-container   class="animated fadeIn container">
        <v-btn class="btn right" @click="exitPage()">Exit</v-btn>
   <h3>Pending Transactions</h3>

    <v-row>
      <v-responsive> 
        List of pending transactions go here: {{getPending}}<br/>
        <v-list>
          <v-list-item-group  model="getPending">
          <v-list-item
            v-for="(tx, i) in getPending"
          :key="i"
          >
          
               <v-list-item-content>
                 <span><b>Id:</b>  {{tx.id}}  <b>From:</b> {{tx.from}}  <b>To:</b> {{tx.to}}  <b>Amount:</b> {{tx.ammount}}  <b>Timestamp:</b> {{tx.timestamp}}   <b>Valid:</b> {{tx.valid}}</span>
              </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-btn class="btn" @click="startMining()">Start Mining</v-btn>
      </v-responsive>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
  
  }),
  methods: {
    exitPage() {
      this.$router.push('/')
    }
  },//end methods
computed: mapGetters(['getWallet','getPending']),
};//end export
</script>
<style scoped>

</style>
