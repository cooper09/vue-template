<template>
  <v-container   class="animated fadeIn container">
   Settings Page
    <span class="right"><v-btn @click="exitPage()">Exit</v-btn></span>
   
    <v-container>
        <form  @submit="submitSettings()">
            Difficulty: <input type="text" v-model="difficulty" placeholder ="1" ><br/>
            Mining Reward<input type="text" v-model="reward" placeholder ="100" ><br/>
            <input type="submit" value="Submit" >
        </form>
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
  .btn {
    background: #ddd;
    cursor: pointer;
  }
</style>
