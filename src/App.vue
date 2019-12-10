<template>

  <v-app>
    <span class="bg"></span>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Multi-Line Insurance Agency</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="http://www.multilineins.com/"
        target="_blank"
      >
        <span class="mr-2">Go to Website</span>
      </v-btn>


    </v-app-bar>
    
    <v-content>
            <v-card>
      <v-card-title>
        <h3>Please tell us more about yourself.</h3>
        <v-spacer></v-spacer>
        <p>Call Now: 914-485-4463</p>
      </v-card-title>
      <v-flex xs12 copy >
      At Multi-line Insurance Agency we are continuously working to provide the individual coverage you require. When it comes to protecting your auto, home, business and family, don't leave it up to chance, or fly-by-night brokers. At Multi-line Insurance Agency we take pride in our business and strive to be relationship specialists providing you with the total insurance solution for all your needs. Being insured with the best has its advantages.]
      </v-flex>
      </v-card>
    <HelloWorld/> 
    </v-content>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
<style scope>
  .copy {
    padding: 2em;
    background: #eee;
  };
</style>
