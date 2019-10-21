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

    <v-content>
      <MultilineFB />
    </v-content>

  </v-app>
</template>

<script>

import MultilineFB from './components/MultilineFB';

export default {
  name: 'App',
  components: {
    MultilineFB
  },
  data: () => ({
    //
  }),
  //end computed
  created() {
    this.$store.dispatch('getData');
   } //end created
};
</script>
<style>
body {
  padding: 2em;
}

</style>
