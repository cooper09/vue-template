<template>
    <div>
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
            <v-toolbar-items>
                <v-btn >
                Products
                </v-btn>
                <v-btn :to="{name: 'basket'}">
                    <v-badge left color="green">
                        <span slot="badge">{{numberOfItems}}</span>
                        <v-icon>shopping_cart</v-icon> 
                    </v-badge>
                </v-btn>
            </v-toolbar-items>
    </v-toolbar>
    </div>
</template>

<script>
export default {
        computed: {
      numberOfItems () {
        return this.$store.state.numberOfItems;
      } 
    },//end computed
    data: () => ({
        drawer: false,
        items: [{
            icon: 'perm_identity',
            href: '#',
            title: 'Account'
      }]
    })
}
</script>

<style>

</style>