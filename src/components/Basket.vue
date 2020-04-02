<template>
  <v-container   class="animated fadeIn container">
    <v-btn @click="nextPage()">Checkout</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  
  }),
  methods: {
    nextPage() {
      this.$router.push('/checkout')
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
