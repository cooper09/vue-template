<template>
  <v-container   class="animated fadeIn">
   
   <v-btn @click="nextPage()">Next Page</v-btn>
   {{mydata}}

  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="mydata"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
    </template>
  </v-data-table>

  </v-container>
</template>

<script>
export default {
  data: () => ({
       singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Address', value: 'address' },
          { text: 'Email', value: 'email' },
        ]
    }),//end data
  computed:{
    mydata () {
      return this.$store.state.data;
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
  }
</style>
