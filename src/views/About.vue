<template>
  <div class="animated fadeInLeft myPage  ">
    <v-btn class="closeBtn" @click="closeMe">X</v-btn>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  methods: {
    closeMe(){
      this.$router.push('/');
    }
  }
}//export
</script>
<style scoped>
.myPage {
  background: #ccc;
  padding: 0 0 0 0;
}

</style>
