<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="startData"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Timestamp',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Campaign', value: 'campaign' },
          { text: 'Ad Set', value: 'medium' },
          { text: 'Ad Name', value: 'source' },
          { text: 'Postal Code', value: 'postal' },
        ],
      
  }),//end data
  computed: {
            startData() {
                return this.$store.state.startData;
            },
            contactData() {
                return this.$store.state.contactData;
            }
        },//end computed
        created() {
            this.$store.dispatch('getData');
            this.$store.dispatch('getContacts');
        } //end created  */
};//end export
</script>
