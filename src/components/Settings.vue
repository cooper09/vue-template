<template>
  <v-container   class="animated fadeIn container">
       <span class="right"><v-btn                 
                class="ma-2"
                outlined
                raised
                primary @click="exitPage()">Exit</v-btn></span>
   <h3>Settings</h3>
   <p>Control how the blockchain behaves when new transactions or blocks are created. Changes are automatically saved.</p>
  
    <v-container>
        <form  @submit="submitSettings()">
            Difficulty: <input type="text" v-model="difficulty" placeholder ="2" class="border"><br/>
            <p class="smallFont ">Difficulty controls how long the mining process takes. Higher numbers will make mining a lot slower!
Default: 2</p><br/>
            Mining Reward: <input type="text" v-model="reward" placeholder ="100" class="border"><br/>
            <p class="smallFont">How many "coins" a miner receives for successfully creating a new block for the chain.
Default: 100
</p>
 
        </form>
            <div>
              <v-btn
                class="ma-2"
                outlined
                raised
                primary
                color="indigo"
                @click="submitSettings()"
              >
                Submit
              </v-btn>
        </div>
    </v-container>

  </v-container>
</template>

<script>
export default {
  data () {
      return {
          difficulty: '',
          reward: ''
      }
  },
  methods: {
    exitPage() {
      this.$router.push('/')
    },
    submitSettings(e) {
        e.preventDefault();
        console.log("Submit settings")
    }
  }//end methods
};//end export
</script>
<style scoped>

  .smallFont {
    font-size: 0.8em;
    color: gray;
  }
  </style>
