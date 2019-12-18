<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>
    <v-content   class="animated fadeIn">
      <p>App.vue</p>
      <Brain /> 
    </v-content>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <v-btn @click="runAI()">AI</v-btn>
  </v-app>
</template>

<script>
import Brain from '@/components/Brain';
import makeaDecision from '@/helpers/makeaDecision';

export default {
  name: 'App',
  components: {
    Brain,
  },
  data: () => ({
    //
  }),
  methods: {
  runAI(){
    alert("AI Baby!!");
            //var conversions = this.makeaDecision.doYourThing("Data", "Baby" );  
            var conversions = makeaDecision.Test( );  
            alert("Confirmed-decisionTreeConversions: " + conversions );
            console.log("Confirmed - conversion: ",  conversions )
        },//end runAI
    }//end methods
};//end default
</script>
<style>
body {
  padding: 2em;
}

</style>
