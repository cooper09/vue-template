<template>
  <v-container   class="animated fadeIn container">

        <h3> Your Cart </h3>

        <hr />
    <br/><br/>
    <v-list disabled>
      <v-subheader>Items</v-subheader>
      <v-list-item-group v-model="getCartItems" color="primary">
        <v-list-item
          v-for="(item, i) in getCartItems"
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
              <v-text-field label="Quantity" dense counter-value :value="item.qty" class="margins"></v-text-field>
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
        <br/><br/>
        Total: ${{totalPrice}}
        <hr />
  </v-container>
</template>


<script>
export default {
  computed: {
     getCartItems () {
      return this.$store.getters.getCartItems;
    },
    totalPrice () {
      return this.$store.state.totalPrice;
    }
  },//end computed
  data: () => ({
    delivery_address: false
  }),
  methods: {
    nextPage() {
      this.$router.push('/')
    }
  },//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
</style>
