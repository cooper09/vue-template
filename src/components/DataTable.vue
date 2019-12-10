<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="startData"
    :single-select="singleSelect"
    item-key="timestamp"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
    {{selected}}
    </template>
  </v-data-table>
</template>

<script>

export default {

  data: () => ({
        singleSelect: true,
        selected: [],
        headers: [
          {
            text: 'Timestamp',
            align: 'left',
            sortable: true,
            value: 'timestamp',
          },
          { text: 'Campaign', value: 'campaign' },
          { text: 'Ad Set', value: 'medium' },
          { text: 'Ad Name', value: 'source' },
          { text: 'Postal Code', value: 'postal' },
        ],
      
  }),//end data
  methods: {
      updateSelected(){
          alert("We have made a selection")
      }
  },
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
