<template>
  <v-container   class="animated fadeIn container">
   Pending Page
    <v-btn @click="exitPage()">Exit</v-btn>
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
  }
</style>
