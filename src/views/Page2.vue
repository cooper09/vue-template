<template>
  <div class="animated fadeInUp myPage">
  <v-btn class="closeBtn"  fab dark color="#DB3539"  @click="closeMe()">X</v-btn>
    <h3 color="#DB3539" class="red--text display-5 font-weight-italic dark mb-5">When would you like to start?</h3>
      <p></p>
    <center><v-layout row wrap align-center align-content-space-between>
      <v-btn class="mainBtn" flat dark color="#DB3539"  @click="loadStartTime(1)">I'm flexible
        <v-icon dark>mdi-speedometer-slow</v-icon>
      </v-btn>
      <v-btn class="mainBtn" flat dark color="#DB3539"  @click="loadStartTime(2)">As soon as possible
        <v-icon dark>mdi-speedometer</v-icon>
      </v-btn>
      <v-btn class="mainBtn" flat dark color="#DB3539"  @click="loadStartTime(3)">Within a few weeks
        <v-icon dark>mdi-speedometer-medium</v-icon>
      </v-btn>
      <v-btn class="mainBtn" flat dark color="#DB3539"  @click="loadStartTime(4)">Within a few months
        <v-icon dark>mdi-play-speed</v-icon>
      </v-btn>
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