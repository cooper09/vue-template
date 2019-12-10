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
      <DataTable/>
    </v-content>
    <v-content>
      <Popup/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import DataTable from './components/DataTable';
import Popup from './components/Popup';

export default {
  name: 'App',
  components: {
    HelloWorld,
    DataTable,
    Popup
  },
  data: () => ({
    //
  }),
};
</script>
