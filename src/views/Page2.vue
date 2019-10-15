<template>
  <div class="animated fadeInUp myPage">
  <v-btn class="closeBtn"  fab dark color="#DB3539"  @click="closeMe()">X</v-btn>
    <h3 color="#DB3539" class="red--text display-5 font-weight-italic dark mb-5">When would you like to start?</h3>
      <p></p>
    <center><v-layout row wrap align-center align-content-space-between>
      <v-btn class="mainBtn" flat dark color="#DB3539"  @click="loadStartTime(1)"><span class="hidden-sm-and-down">I'm flexible</span>
        <v-icon dark>mdi-speedometer-slow</v-icon>
      </v-btn>
      <v-btn class="mainBtn" flat dark color="#DB3539"  @click="loadStartTime(2)"><span class="hidden-sm-and-down">As soon as possible</span>
        <v-icon dark>mdi-speedometer</v-icon>
      </v-btn>
      <v-btn class="mainBtn" flat dark color="#DB3539"  @click="loadStartTime(3)"><span class="hidden-sm-and-down">Within a few weeks</span>
        <v-icon dark>mdi-speedometer-medium</v-icon>
      </v-btn>
      <v-btn class="mainBtn" flat dark color="#DB3539"  @click="loadStartTime(4)"><span class="hidden-sm-and-down">Within a few months</span>
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