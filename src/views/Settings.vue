<template>
  <div class="animated fadeIn">
    <v-btn class="right" @click="closeMe">X</v-btn>
    <h1>Settings page</h1>

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
</style>
