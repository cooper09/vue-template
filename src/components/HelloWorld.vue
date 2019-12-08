<template>
  <v-container  id="kahuna">
    <v-layout row wrap align-center>

        <v-btn class="btn" @click="nextPage(1)">Insurance Policies</v-btn>
        <v-btn class="btn" @click="nextPage(2)">Defensive Driving Courses</v-btn>
        <v-btn class="btn" @click="nextPage(3)">Become a Defensive Driving Instructor</v-btn><br/>
        <v-btn class="btn" @click="nextPage(4)">Become a Multi-Line Agent</v-btn>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
  }),
  methods: {
    nextPage(data) {
      console.log("display form: ", data );
      
       var varArr = [];
        var vars = {};
        var varKey;
        var varValue;
        var varObj = {}

        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });

    console.log("Our campaign: ", vars.utm_campaign );

    this.$store.dispatch('addCampaign', vars.utm_campaign);
    this.$store.dispatch('addSelection', data );

      this.$router.push('/form')
    }
  }
};//end export
</script>
<style scoped>
  #kahuna {
    background: #ccc; 
    margin-top: 3em;
  }
  .btn {
    background: #ff0;
    cursor: pointer;
    margin: 1em;
  }
</style>
