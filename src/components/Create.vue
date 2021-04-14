<template>
  <v-container   class="animated fadeIn container">
   Create Transaction Page
    <span class="right"><v-btn @click="exitPage()">Exit</v-btn></span>
       <v-container>
        <form  @submit="submitTransaction()">
            From Address: <input type="text" v-model="from" placeholder ="0x100000000" ><br/>
            To Address:  <input type="text" v-model="to" placeholder ="" ><br/>
            Amount: <input type="text" v-model="amount" placeholder ="" ><br/>
            <input type="submit" value="Sign & Create transaction" ><br/>
        </form>
       </v-container>
    </v-container>
</template>

<script>
export default {
  data () {
      return {
          from: '',
          to: '',
          amount: ''
      }
  },
  methods: {
    exitPage() {
      this.$router.push('/')
    },
  submitTransaction(e){
    e.preventDefault()
    console.log("Submit Transaction")
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
