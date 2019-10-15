<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span><img src="kweku-logo-color.png"></span>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        color="#db3539"
        href="https://kweku.com"
        target="_blank"
      >
        <span class="hidden-sm-and-down">Goto Web Site</span><span class="hidden-md-and-up">Web Site</span>
      </v-btn>
    </v-app-bar>
    <v-content   >
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
  border:#db3539  1px solid;
  position: relative;
  top: -5em;
  padding: 1em;
}
.mainBtn {
  width: 45%;
  margin: .25em;
}

</style>
