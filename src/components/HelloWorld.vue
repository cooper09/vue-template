<template>
  <v-container class="animated fadeIn container">
   <v-btn @click="nextPage()">Show Cart</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  
  }),
  methods: {
    nextPage() {
      //console.log("ouch!")
      this.$router.push('/basket')
    }
  },//end methods
  created () {
    const newClass = this.$store.getters.getClass;
    console.log("HelloWorld - Currently in the store: ", newClass.sideWind() )
  }
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
  .container {
    background: pink;
  }
</style>
