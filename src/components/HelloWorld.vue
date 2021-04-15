<template>
  <v-container class="animated fadeIn container">

      <div>
        <div class="right">
           <span class="btn"><v-btn color=primary @click="settingsPage()">Settings </v-btn></span><v-btn color=primary  @click="createPage()">Create Transaction</v-btn>
        </div>
        <br/><br/>
      <div class="container">
          HelloWorld chain: {{newChain}}
          <BlockChain v-bind:blocks="newChain" /> 
      </div>
    </div>

  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BlockChain from './BlockChain.vue';
import BlockItem from './BlockItem.vue';
export default {
  name: 'HelloWorld',
  components: {
    BlockChain,
    BlockItem
  },
  computed: mapGetters(['newChain']),
  data() {
    return {
    blocks: [],
    props: ["bchain"]

    }//end return
  }, //end data,
  methods: {
    settingsPage() {
      this.$router.push('/settings')
    },
    createPage() {
      this.$router.push('/create')
    }
  },//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
    margin-right: 1em;
  }
  .container {
    background: #ccc;
  }
yle>
