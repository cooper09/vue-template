<template>
  <v-container   class="animated fadeIn container">
   BasketCheckout Page
   <v-btn @click="nextPage()">Submit</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  
  }),
  methods: {
    nextPage() {
      this.$router.push('/')
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
