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

      <HelloWorld/> 
      <router-view></router-view>
    </v-content>
    <v-content transition="slide-x-transition">

    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Block from './block';
import Blockchain from './blockchain';


export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),//end data
  created() {
    console.log("App created...");
    const blockCoin = new Blockchain();
    console.log("new blockchain: ", blockCoin.chain);
    const timestamp =  new Date().getTime();
    const firstBlock = new Block (1,timestamp, {amount: 4});
    const secondBlock = new Block (2,timestamp, {amount: 10});

    blockCoin.addBlock(firstBlock);
    blockCoin.addBlock(secondBlock);
    
  }//end created
};//end export
</script>
<style>
body {
  padding: 2em;
}

</style>
