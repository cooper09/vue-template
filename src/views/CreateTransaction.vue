<template>
  <div class="animated fadeIn">
    <v-btn class="right" @click="closeMe">X</v-btn>
    <h1>Create Transaction page</h1>
    <v-btn  @click="showPending()">Sign & Create</v-btn>
  </div>
</template>
<script>
export default {
  methods: {
    closeMe(){
      this.$router.push('/');
    },
    showPending (){
      this.$router.push('/pending')
    }
  },//end methods
}//export
</script>
<style scoped>
</style>
