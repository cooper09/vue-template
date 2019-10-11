<template>
  <div class="animated fadeInUp myPage">
    <v-btn class="closeBtn"  fab dark color="#DB3539"  @click="closeMe()">X</v-btn>
    <h3 class="red--text display-5 font-weight-italic dark mb-5">Type of Property</h3>
    <p></p>
    <center><v-layout row wrap align-center align-content-space-between>
        <v-btn class="mainBtn" flat dark  color="#DB3539"  @click="loadPropertyType(1)">Single Family Home
            <v-icon dark>mdi-home-floor-1</v-icon>
        </v-btn>
        <v-btn class="mainBtn" flat dark  color="#DB3539"  @click="loadPropertyType(2)">Condo/Apartment
            <v-icon dark>mdi-domain</v-icon>
        </v-btn>
        <v-btn class="mainBtn" flat dark  color="#DB3539"  @click="loadPropertyType(3)">Office/Commercial
            <v-icon dark>mdi-office-building</v-icon>
        </v-btn>
        <v-btn class="mainBtn" flat dark  color="#DB3539"  @click="loadPropertyType(4)">Other
            <v-icon dark>mdi-account-question</v-icon>
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
    loadPropertyType(startTime) {
      console.log("Property Type selected: ", startTime )
      this.$router.push('/page4')
    }//end page2()
  }//end methods
}
</script>
