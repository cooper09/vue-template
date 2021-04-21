<template>
  <v-container   class="animated fadeIn container">
        <v-btn @click="nextPage()">Exit</v-btn>
          Create new Transansaction
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
