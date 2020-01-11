<template>
  <v-app>
    <v-toolbar dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Shopping Cart</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-item>
          <v-btn flat></v-btn>
        </v-toolbar-item>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
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
