<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span><img src="kweku-logo-color.png"></span>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://kweku.com"
        target="_blank"
      >
        <span class="mr-2">Kweku Development</span>
      </v-btn>
    </v-app-bar>
    <v-content   >
      <p>App.vue</p>
      <HelloWorld/> 
    </v-content>
    <v-content class="animated fadeIn">
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
  created() {
    this.$store.dispatch('getData');
   } //end created
};
</script>
<style>
body {
  padding: 2em;
}
.startBtn {
 background: red;
}
.closeBtn {
    float: right;
  }
.myPage {
  background: #ccc;
  position: relative;
  top: -5em;
  padding: 1em;
}
.mainBtn {
  width: 50%;
}

</style>
