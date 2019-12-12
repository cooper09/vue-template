<template>
  <v-container   class="animated fadeIn">
   
   <v-btn @click="nextPage()">Next Page</v-btn>
   {{stateData}}
  </v-container>
</template>

<script>
export default {
  data: () => ({
  
  }),
  computed:{
      stateData() {
        return this.$store.state.data;
      },
  },
  methods: {
    nextPage() {
      alert("next page please")
      this.$router.push('/about')
      let hello = "We shall Overcome";
      this.$store.dispatch('setData', hello );
    }
  }
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
</style>
