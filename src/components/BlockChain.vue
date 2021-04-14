<template>
  <div>
    <h3>Proto-Chain Blockchain</h3>
    Each card represents a block on the uploaded blockchain. Click "Show Transactions" to see the transactions stored inside.
    <p></p>
     <v-container class="animated fadeIn">
        <v-layout row wrap >
          <v-flex  xs12 sm6 md4 lg3 :key="block.id" v-for="block in blocks" class="blocks">
            <div class="col-sn">
                <BlockItem v-bind:block="block"/>
            </div>
          </v-flex>
      </v-layout>
    </v-container>
  </div><!-- end main div -->
</template>

<script>
import BlockItem from './BlockItem.vue';

export default {
  name: 'BlockChain',
  components: {
    BlockItem
  },
  props: ["blocks"]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocks {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;
}
</style>
