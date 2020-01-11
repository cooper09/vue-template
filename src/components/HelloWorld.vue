<template>
  <v-container>

    <h2 class="display-2 mb-4">Beat 139 Goodies</h2>

    <v-layout row wrap>
    <template v-for="(product, index ) in products">
    <v-flex xs2 pa-1 :key="index">
      <v-hover>
        <v-card slot-scope="{hover}"  class="mx-auto" color="gray lighten-4" max-width="600" height="350">
        <v-img  :src='product.src' :aspect-ratio='16/9'>
          <v-expand-transition>
            <div v-if="hover" class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display3 white--text" style='height:100%'>
              ${{product.price}}
            </div>
          </v-expand-transition>
        </v-img>


        <v-card-text class="pt-4" style="position:relative;">
          <v-btn absolute color='blue' class='white--text' fab medium right top>
            <v-icon>fa-shopping-cart</v-icon>
          </v-btn>
          <div class="display-1 font-weight-light blue--text mb-2">{{product.category}}</div>
          <h3>{{product.title}}</h3>
          <div class='font-weight-light mb-2'>{{product.description}}</div>
          </v-card-text>
        </v-card>

      </v-hover>
    </v-flex>

    </template>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    products: [{
      price: 12.99,
      src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
      category: 'The joint',
      title: 'Look Good in the Hood',
      description: 'The Bomb-B-Diddy, Jack!!!'
    },
    {
      price: 99.99,
      src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
      category: 'The bomb',
      title: 'Its the P-Funk',
      description: 'I likes my Funk uncut!'
    },
    ]//end products
  }),//end data
};//end export
</script>
<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position:absolute;
    width: 100%;
  }
  .v-card h3.display-1 {
    font-size: 12px !important; 
   }
</style>