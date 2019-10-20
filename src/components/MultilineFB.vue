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

      <v-layout justify-center>
          <a
            v-for="(next, i) in startData"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
           {{  next.source }}
          </a>
        </v-layout>
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
   
  }),
  computed: {
    startData() {
      return this.$store.state.startData;
    },
  },//end computed
};
</script>
