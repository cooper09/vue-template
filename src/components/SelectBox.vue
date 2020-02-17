<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
    combobox goes here...
    <select id="selectBox">
        <option value="S">small</option>
        <option value="M" >medium</option>
        <option value="L" >large</option>
    </select>
    <button @click="submit()">Select Size</button>        

    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
       
      }
    },
    methods: {
        submit() {
            let size = document.getElementById('selectBox')
        alert("time to boogie size: " + size.options[size.selectedIndex].value );

        }//end  submit

    },//end methodss
 
};
</script>
<style scoped>
    button {
        background: #333;
        color: #ccc;
        padding: 0.5em;
        cursor: pointer;
    }
    #selectBox {
        border: 1px solid #333;
        padding: 0.5em;
    }
</style>