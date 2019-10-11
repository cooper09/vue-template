<template>
  <div class="animated fadeInLeft myPage">
    <v-btn class="closeBtn" outlined color="#DB3539"  @click="closeMe()">X</v-btn>
    <h3>Type of Property</h3>
    <center><v-layout row wrap align-center align-content-space-between>
        <v-btn class="mainBtn" outlined color="#DB3539"  @click="loadPropertyType(1)">Single Family Home</v-btn>
        <v-btn class="mainBtn" outlined color="#DB3539"  @click="loadPropertyType(2)">Condo/Apartment</v-btn>
        <v-btn class="mainBtn" outlined color="#DB3539"  @click="loadPropertyType(3)">Office/Commercial</v-btn>
        <v-btn class="mainBtn" outlined color="#DB3539"  @click="loadPropertyType(4)">Other</v-btn>
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
