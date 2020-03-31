<template>
  <v-container   class="animated fadeIn container">
   BasketCheckout Page: 
   <div v-for="item in selected" :key="item.id" >{{item.title}}
   <vspacer></vspacer>
    price: ${{item.price}}
    <span class="right"><v-btn @click="removeItem(item)">remove</v-btn></span>
    <br/><br/>
   </div>
   <div>Total: ${{total}} </div>
   <v-btn class="btn" @click="nextPage()">Pay Now</v-btn>
  </v-container>
</template>

<script>
export default {
  computed:{
    selected () {
      return this.$store.state.selected;
    },
    total() {
      return this.$store.state.total;
    }
  },
  data: () => ({

  }),
  methods: {
    nextPage() {
      this.$router.push('/')
    },
    removeItem(item) {
      console.log("Remove following Item from cart: ", item);
      this.$store.dispatch('updateCart', item);
    }
  }//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
  .right {
    float: right;
  }
</style>
