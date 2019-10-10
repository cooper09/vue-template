<template>
  <div class="animated fadeInLeft myPage">
  <v-btn class="closeBtn" @click="closeMe()">X</v-btn>
    <h3>When would you like to start?</h3>
    <center><v-layout row wrap align-center align-content-space-between>
      <v-btn class="mainBtn" @click="loadStartTime(1)">I'm flexible</v-btn>
      <v-btn class="mainBtn" @click="loadStartTime(2)">As soon as possible</v-btn>
      <v-btn class="mainBtn" @click="loadStartTime(3)">Within a few weeks</v-btn>
      <v-btn class="mainBtn" @click="loadStartTime(4)">Within a few months</v-btn>
      </v-layout></center>
  </div>
</template>
<script>
export default {
    methods: {
    closeMe() {
      //alert("NExt page");
      this.$router.push('/')
    },//end page2()
    loadStartTime(startTime) {
      console.log("Start time selected: ", startTime )
      this.$router.push('/page3')
    }//end page2()
  }//end methods
}
</script>