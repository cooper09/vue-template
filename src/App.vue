<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>HarlemJambo</span>
        <span class="font-weight-light leftmargin" >VIRTUAL MALL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="http://www.harlemjambo.com/"
        target="_blank"
      >
        <span class="mr-2">Latest News</span>
      </v-btn>
    </v-app-bar>
    <v-content   class="animated fadeIn">
      <p>App.vue</p>

      <router-view></router-view>
            <MainView />
    </v-content>
    <v-content transition="slide-x-transition">

    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import MainView from './views/MainView';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainView
  },
  data: () => ({
    //
  }),
};
</script>
<style>
body {
  padding: 2em;
}
.leftmargin {
  margin-left: 1em;
}
</style>
