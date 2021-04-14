<template>
  <v-container   class="animated fadeIn container">
  Transactions Page
    <span class="right"><v-btn @click="exitPage()">Exit</v-btn></span>
    <p>List of transactions for the selected block go here....</p>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  
  }),
  methods: {
    exitPage() {
      this.$router.push('/')
    }
  }
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
    margin-right: 1em;
  }
</style>
