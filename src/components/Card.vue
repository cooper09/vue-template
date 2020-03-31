<template>

  <v-container class="animated fadeIn">
    <!-- for the length of the product list, build a card and display it -->

    <v-card class="pa-1">
        <v-responsive class="pt-4">
            
            <center><img src="https://via.placeholder.com/300" /></center>
        </v-responsive>
        <v-card-text>
            <div class="subheading">{{this.product.title}}</div>
            <div class="grey--text">{{this.product.description}}</div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="blue light" class="addBtn" @click="addToCart(product)">
                <v-icon small left></v-icon>
                <span>Add To Cart</span>
            </v-btn>
        </v-card-actions>
            <Basket />
    </v-card>


  </v-container>
</template>

<script>
import Basket from '@/components/Basket';

export default {
    components: {
       Basket 
    },
  props: ["product"],  
  data: () => ({
       singleSelect: false,
        selected: [],
        
    }),//end data
  computed:{
    mydata () {
      return this.$store.state.products;
    }
  },
  methods: {
    nextPage() {
      alert("next page please")
      this.$router.push('/about')
      let hello = "We shall Overcome"
      //this.$store.dispatch('setData', "more stuff");
    },
    selected() {
      alert("Selected Something")
    },
    addToCart(item){ 
        //add to cart update state selected list with an action
        console.log ("Add "+ item + " to the Cart")   
        this.$router.push('/basket');
        this.$store.dispatch('setData', item )
    }
  },//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
    float: right;
  }
  .addBtn {
 /*align-items:    background: blue;
    cursor: pointer;  */
  }
</style>
