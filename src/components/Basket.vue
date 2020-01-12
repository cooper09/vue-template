<template>
  <v-container   class="animated fadeIn">
   Basket Page
    <v-btn @click="nextPage()">Checkout</v-btn><v-btn @click="closePage()">X</v-btn>

    <v-list disabled>
      <v-subheader>Items</v-subheader>
      <v-list-item-group v-model="products" color="primary">
        <v-list-item
          v-for="(item, i) in products"
          :key="i"
        >
          <v-list-avatar>
            <img :src="item.photo" width="24" height="24">
          </v-list-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-sub-title v-html="item.sub_title"></v-list-sub-title>

          </v-list-item-content>
            <v-list>
              {{item.price}}$
            </v-list>
            <v-list>
              <v-text-field label="Quantity" reverse :value="item.qty"></v-text-field>
            </v-list>
            <v-list>
              {{item.price * item.qty}}$
            </v-list>

            <v-btn icon ripple @click='deleteItem(item)'>
              <v-icon color="red lighten-1" class="fa fa-trash" @click='deleteItem(item)'>fa-trash</v-icon>
            </v-btn>
    
        </v-list-item>
      </v-list-item-group>
    </v-list>
  
  </v-container>
</template>


<script>
export default {
      data: () => ({
      products: [{
        product_id: 'kitchen-1',
        photo: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        title: 'QW cooking utensils',
        sub_title: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand',
        price: 14.99,
        qty: 1
      },{
        product_id: 'kitchen-1',
        photo: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        title: 'QW cooking utensils',
        sub_title: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand',
        price: 44.99,
        qty: 2
      },{
        product_id: 'kitchen-1',
        photo: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        title: 'QW cooking utensils',
        sub_title: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand',
        price: 64.99,
        qty: 2
      }]
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
    }
  }//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
</style>
