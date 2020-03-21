<template>
  <v-container   class="animated fadeIn">
    <v-btn @click="closePage()" class="right blue white--text">X</v-btn>
    <br/>
    <hr />
    <br/>
    <v-list disabled>
      <v-subheader>Items</v-subheader>
      <v-list-item-group v-model="cartItems" color="primary">
        <v-list-item
          v-for="(item, i) in cartItems"
          :key="i"
          class="outline"
        >
          <v-list-item-avatar class="margins">
            <img :src="item.photo" width="24" height="24" >
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.sub_title"></v-list-item-subtitle>

          </v-list-item-content>
            <v-list>
              ${{item.price}}
            </v-list>
            <v-list>
              <v-text-field label="Quantity" dense counter-value :value="item.qty" class="pa-0 ma-1"></v-text-field>
            </v-list>
            <v-list class="cursor">
              ${{item.price * item.qty}}
            </v-list>

            <v-btn icon ripple @click='deleteItem(item)' class="cursor">
              <v-icon color="red lighten-1" class="fa fa-trash cursor" @click='deleteItem(item)'>fa-trash</v-icon>
            </v-btn>
    
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-btn @click="nextPage()" color='blue white--text' class='right'>Checkout</v-btn>
    <v-btn @click="clearCart()" color='blue white--text' class='right btn'>Clear Cart</v-btn>

    <br/><br />
  </v-container>
</template>

<script>
export default {
  computed: {
    cartItems () {
      return this.$store.state.cartItems;
    } 
  },//end computed
  data: () => ({

    }),
  methods: {
    nextPage() {
      this.$router.push('/checkout')
    },
    closePage() {
      this.$router.push('/')
    },
    deleteItem(item){
      console.log("Delete Item: ", item.product_id )
    },
    clearCart() {
      this.$store.dispatch('clearCart' );
    }
  }//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
    margin-right: 0.5em;
  }
  .outline {
    border: 1px solid #3e99ee;
  }

</style>
