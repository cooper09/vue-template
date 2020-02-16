<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Select BoX Goodies</h2>
      </v-flex>

<center>
    <template><!-- beginning of combo-box goodid -->
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <v-combobox
              v-model="select"
              :items="items"
              label="Please Select a Size"
              multiple
              chips
            >
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                      :input-value="data.selected"
                      :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                >
                  <v-avatar
                    class="accent white--text"
                      left
                      v-text="data.item.slice(0, 1).toUpperCase()"
                    ></v-avatar>
                          {{ data.item }}
                        </v-chip>
                      </template>
                    </v-combobox>
            </v-col>
          </v-row>
        </v-container>
      </template><!-- end combo box goodie -->
</center>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
        select: ['Sizes'],
        items: [
          'Small',
          'Medium',
          'Large',
          'X-Large',
        ],
      }
    },
 
};
</script>
