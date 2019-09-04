<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
      <vue-dropdown
        :config="config"
        @setSelectedOption="setNewSelectedOption($event);"
      
    ></vue-dropdown>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import vueDropdown from "./components/vue-dropdown/vue-dropdown";

export default {
  name: 'App',
  components: {
    HelloWorld,
    vueDropdown
  },
  data: () => ({
    //
    config: {
        options: [
          {
            value: "option 1"
          },
          {
            value: "option 2"
          },
          {
            value: "option 3"
          }
        ],
        placeholder: "Placeholder",
        backgroundColor: "#cde4f5",
        textColor: "black",
        borderRadius: "1.5em",
        border: "1px solid gray",
        width: 180
      }
    }),//end data()
    methods:  {
      setNewSelectedOption(selectedOption) {
        this.config.placeholder = selectedOption.value;
      }
    },
    computed: {
        campaignTitles() {
            return this.$store.state.campaignTitles;
      }
    },
    created() {
      this.$store.dispatch('getCampaigns');
      this.$store.dispatch('getConversions');
    }, //end created
};//end export default
</script>
