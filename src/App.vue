<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-title-title>
              Menu
            </v-list-title-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Shopping Cart</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-item>
          <v-btn text>Products</v-btn>
          <v-btn text>Basket</v-btn>
        </v-app-bar-item>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>

    <v-footer dark height="auto">
      <v-card tile class='indigo lighten-1 white--text text-xs-center flex'>
        <v-card-text text-center>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{icon}}</v-icon>
          </v-btn>
        </v-card-text>  

        <v-card-text>
          Shopping cart footer goes here
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class='white--text text-center'>
          &copy;2020 - <strong>Sonya Enterprises, Inc</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
    drawer: false,
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
      ],
      items: [{
        icon: 'perm_identity',
        href: "#",
        title: 'Account'
      }]

  }),//end data
};//end export
</script>
