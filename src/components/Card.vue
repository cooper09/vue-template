<template>

  <v-container class="animated fadeIn">
    <!-- for the length of the product list, build a card and display it -->

        <v-card class="pa-1">
            <v-responsive class="pt-4">
                <img src="https://buefy.org/static/img/placeholder-1280x960.png">
            </v-responsive>
            <v-card-text>
                <div class="subheading">{{this.product.title}}</div>
                <div class="grey--text">{{this.product.description}}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn flat color='blue'>
                    <v-icon small left></v-icon>
                    <span>Add To Cart</span>
                </v-btn>
            </v-card-actions>
        </v-card>
 

  </v-container>
</template>

<script>

export default {
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
