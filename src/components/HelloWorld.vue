<template>

  <v-container>
    <h2 class="display-2 mb-4 zingy">The Beat 139 Merchandise</h2>
    <v-btn @click="showCart()" class="blue right white--text">Show Cart</v-btn>
    <br/><br/>
    <v-layout row wrap>
      <template v-for="(product, index) in products">
        <v-flex xs12 md4 pa-1 :key="index">
          <v-hover>
            <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4" max-width="100%" height="350" @click="addToCart(product)">
              <v-img :src="product.src" :aspect-ratio="16/9">
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out blue darken-2 display-3 v-card--reveal display3 white--text" style="height: 100%;">
                    ${{product.price}}
                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-4" style="position: relative;">
                <v-btn absolute color="#3e99ee" class="white--text" fab medium right top>
                  <v-icon>fa-shopping-cart</v-icon>
                </v-btn>
                <br/>
                <div class="font-weight-bold grey--text title mb-2">{{product.category}}</div>
                <h3 class="display-1 font-weight-bold blue--text mb-2">{{product.title}}</h3>

                <div class="font-weight-light mb-2">{{product.description}}</div>
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
    computed: {
      products () {
        return this.$store.state.products;
      } 
    },//end computed
    data: () => ({
      
    }),//end data
    methods: {
      addToCart(data) {
        console.log("Add data to cart, ", data )
        this.$store.dispatch("addToCart", data )

      },//end addToCart
      showCart(){
        this.$router.push('/basket')
      }
    }//end methods
  }//end export default
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%; 
}

.v-card h3.display-1 {
  font-size: 24px !important;
}

.zingy {
  font-family: 'Lexend Deca';
}
</style>

