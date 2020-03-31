<template>

  <v-container class="animated fadeIn">
    <!-- for the length of the product list, build a card and display it -->
    Currently selected: {{selected}}
    <v-layout row wrap >
      <v-flex xs12 sm6 md4 lg3 v-for="product in mydata" :key="product.id">
        <Card v-bind:product="product" /> 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from "@/components/Card";

export default {
    components: {
    Card,
  },
  data: () => ({
       singleSelect: false,
        selected: [],
        
    }),//end data
  computed:{
    mydata () {
      return this.$store.state.products;
    },
    selected () {
      return this.$store.state.selected;
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
</style>
