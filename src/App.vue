<template>
  <v-app>
   
    <Navigation />
    <v-content   class="animated fadeIn">
      <p>App.vue</p>
      <v-img src="assets/logo.jpg"></v-img>
      <router-view></router-view>      
      <HelloWorld/> 
    </v-content>
    <v-content transition="slide-x-transition">

    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import Navigation from '@/components/Navigation';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigation
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

</style>
