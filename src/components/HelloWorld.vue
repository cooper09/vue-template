<template>
  <v-container   class="animated fadeIn">
   <v-btn success @click="nextPage()">What Type of Project Do We Have?</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  
  }),
  methods: {
    nextPage() {
      //alert("next page please")
      this.$router.push('/page1')
    }
  }
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
  .startBtn {
    background: red;
    }
</style>
