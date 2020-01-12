<template>
    <div>
        <v-navigation-drawer v-model="drawer" app temporary>
        <v-list>
            <v-list>
                <v-list-item-title>
                Menu
                </v-list-item-title>
                
            </v-list>
            <v-divider></v-divider>

            <template v-for="(item, index) in items">
            <v-list :key="index" :href="item.href">
                <v-list-item-action>
                <v-icon light v-html="item.icon"></v-icon>
                </v-list-item-action>
                <v-list-item-action>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                </v-list-item-action>
            </v-list>
            </template>
        </v-list>
        </v-navigation-drawer>

        <v-toolbar dark>
            <v-appbar-nav-icon @click="drawer = !drawer"></v-appbar-nav-icon>
            <v-toolbar-title><a href="/">ShoppingCart</a></v-toolbar-title>
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