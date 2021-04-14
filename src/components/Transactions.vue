<template>
  <v-container   class="animated fadeIn container">
    <span class="right"><v-btn color=primary @click="exitPage()">Exit</v-btn></span>
  <h3>Transactions</h3>
    
    <p>Current block has no transactions</p>
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
