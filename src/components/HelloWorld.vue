<template>
  <v-container class="animated fadeIn container">
      <div>
        <div class="right">
           <span class="btn"><v-btn                
                outlined
                raised
                primary
                color="indigo" 
                @click="settingsPage()">Settings </v-btn></span>
                <v-btn                 
                  outlined
                  raised
                  primary
                  color="indigo"   
                  @click="createPage()">Create Transaction</v-btn>
        </div>
        <br/><br/>
      <div>
                <p class="wrap">
                  <b>Wallet (public) address:</b> {{getWallet}}
                </p>
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
  //computed: mapGetters(['newChain','getWallet', 'getCoin']),
  data() {
    return {
    blocks: [], 
    props: ["bchain","bcoin"]

    }//end return
  }, //end data,
  methods: {
    settingsPage() {
      this.$router.push('/settings')
    },
    createPage() {
      console.log("Create Page - blockCoin: ", this.getCoin)
      this.$router.push('/create')
    }
  },//end methods
  created () {

    if(this.getCoin) {
      console.log("Fuck you: ",  this.getCoin)
    }
    //this.getCoin.then(()=>{
      //console.log(this.getCoin);
    //}
    //const myGoodie = this.getCoin;
    //console.log("blockCoin: ", this.stinkface)
    //const myGoodie = this.getCoin;
    //console.log("blockCoin: ", myGoodie.miningReward)

  },
   computed: mapGetters(['newChain','getWallet', 'getCoin']),
    stinkface(){
      return this.$store.blockCoin
    }

};//end export
</script>
<style scoped>
    .container {
      border: 1px solid indigo;
    }
    .wrap {
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden ;
    text-overflow: ellipsis;
  }

</style>
