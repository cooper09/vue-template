<template>
  <v-container   class="animated fadeIn">
   
       <v-layout text-center wrap >
      <v-flex mb-4>
        <div class="about">
          <v-btn class="ma-2" outlined color="#DB3539" @click="nextPage()"><span class="hidden-sm-and-down">What Type of Project Do We Have?</span><span class="hidden-md-and-up">Project Type</span></v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  
  }),
  methods: {
    nextPage() {
      //alert("next page please")
      this.$router.push('/page1');

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
