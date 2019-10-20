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
          <pure-vue-chart
            :points="[3,5,2,5,4]"
            :width="400"
            :height="200"
          />
    </v-layout>
  </v-container>
</template>

<script>
import PureVueChart from 'pure-vue-chart';
export default {
  components: {
    PureVueChart,
},
  data: () => ({
   
  }),
  computed: {
    startData() {
      return this.$store.state.startData;
    },
  },//end computed
};
</script>
