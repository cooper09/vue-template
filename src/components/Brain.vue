<template>
  <v-container class="animated fadeIn">
   BrainJS module
   <v-btn @click="nextPage()">Next Page</v-btn>
   {{mydata}}

  </v-container>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('setData')
  },
  data: () => ({
       singleSelect: false,
        selected: [],
        
    }),//end data
  computed:{
    mydata () {
      return this.$store.state.data;
    }
  },
  methods: {
    nextPage() {
      alert("next page please")
      this.$router.push('/about')
      let hello = "We shall Overcome"
      //this.$store.dispatch('setData', "more stuff");
    },

  },//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
</style>
