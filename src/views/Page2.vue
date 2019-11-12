<template>
  <div class="animated fadeInUp myPage">
    <v-btn class="closeBtn" fab dark color="#DB3539" @click="next()"><v-icon dark >mdi-arrow-right-bold</v-icon></v-btn>
    <v-btn class="closeBtn" fab dark color="#DB3539" @click="prev()"><v-icon dark >mdi-arrow-left-bold</v-icon></v-btn>
    <h3 color="#DB3539" class="red--text display-5 font-weight-italic dark mb-5">When would you like to start?</h3>
      <p></p>
    <center><v-layout row wrap align-center align-content-space-between>
      <v-btn class="mainBtn" dark color="#DB3539"  @click="loadStartTime(1)"><span class="hidden-sm-and-down">I'm flexible</span>
        <v-icon dark>mdi-speedometer-slow</v-icon>
      </v-btn>
      <v-btn class="mainBtn" dark color="#DB3539"  @click="loadStartTime(2)"><span class="hidden-sm-and-down">As soon as possible</span>
        <v-icon dark>mdi-speedometer</v-icon>
      </v-btn>
      <v-btn class="mainBtn" dark color="#DB3539"  @click="loadStartTime(3)"><span class="hidden-sm-and-down">Within a few weeks</span>
        <v-icon dark>mdi-speedometer-medium</v-icon>
      </v-btn>
      <v-btn class="mainBtn"  dark color="#DB3539"  @click="loadStartTime(4)"><span class="hidden-sm-and-down">Within a few months</span>
        <v-icon dark>mdi-play-speed</v-icon>
      </v-btn>
      </v-layout></center>
  </div>
</template>
<script>
export default {
    methods: {
    prev() {
      //alert("Prev page");
      this.$router.push('/page1')
    },
    next() {
      //alert("NExt page");
      this.$router.push('/page3');
    },//end page2()
    loadStartTime(startTime) {
      console.log("Start time selected: ", startTime )
            
      switch(startTime) {
        case 1:
          this.$store.dispatch('setStartTime', 'flexible')
        break;
        case 2:
          this.$store.dispatch('setStartTime', 'soon as possible')
        break;
        case 3:
          this.$store.dispatch('setStartTime', 'few weeks')
        break;
        case 4:
          this.$store.dispatch('setStartTime', 'few months')
        break;
      }//end switch
      //
      this.$router.push('/page3')
    }//end page2()
  }//end methods
}
</script>