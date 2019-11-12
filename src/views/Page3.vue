<template>
  <div class="animated fadeInUp myPage">
      <v-btn class="closeBtn" fab dark color="#DB3539" @click="next()">></v-btn>
    <v-btn class="closeBtn" fab dark color="#DB3539" @click="prev()"><</v-btn>
    <h3 class="red--text display-5 font-weight-italic dark mb-5">Type of Property</h3>
    <p></p>
    <center><v-layout row wrap align-center align-content-space-between>
        <v-btn class="mainBtn"  dark  color="#DB3539"  @click="loadPropertyType(1)"><span class="hidden-sm-and-down">Single Family Home</span>
            <v-icon dark>mdi-home-floor-1</v-icon>
        </v-btn>
        <v-btn class="mainBtn"  dark  color="#DB3539"  @click="loadPropertyType(2)"><span class="hidden-sm-and-down">Condo/Apartment</span>
            <v-icon dark>mdi-domain</v-icon>
        </v-btn>
        <v-btn class="mainBtn"  dark  color="#DB3539"  @click="loadPropertyType(3)"><span class="hidden-sm-and-down">Office/Commercial</span>
            <v-icon dark>mdi-office-building</v-icon>
        </v-btn>
        <v-btn class="mainBtn"  dark  color="#DB3539"  @click="loadPropertyType(4)"><span class="hidden-sm-and-down">Other</span>
            <v-icon dark>mdi-account-question</v-icon>
        </v-btn>
    </v-layout></center>
  </div>
</template>
<script>
export default {
    methods: {
    prev() {
      //alert("NExt page");
      this.$router.push('/page2')
    },
    next() {
      //alert("NExt page");
      this.$router.push('/page4');
    },//end page2()
    loadPropertyType(propType) {
      console.log("Property Type selected: ", propType )
            
      switch(propType) {
        case 1:
          this.$store.dispatch('setPropType', 'Single Family')
        break;
        case 2:
          this.$store.dispatch('setPropType', 'condo/apartment')
        break;
        case 3:
          this.$store.dispatch('setPropType', 'office/commercial')
        break;
        case 4:
          this.$store.dispatch('setPropType', 'other')
        break;
      }//end switch
      //
      this.$router.push('/page4')
    }//end page2()
  }//end methods
}
</script>
