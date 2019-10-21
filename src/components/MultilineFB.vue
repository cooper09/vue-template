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
         <!--   <ul
            v-for="(next, i) in startData"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
         <li> {{  next.source }}</li> 
          </ul> -->

<!-- sort out the number of ads and their dates
      Y= ad source X=time   -->
      <p>Ads by Popularity</p><br/><br/>
        </v-layout>

          <ul
            v-for="(ad, i) in getAds"
            :key="i"
          >
             <li> {{  ad }}</li><br/>
          </ul>
          <v-layout>
          <br/><br/>
          <pure-vue-chart
            :points="[`${getAd2}`,`${getAd3}`,`${getAd4}`,`${getAd5}`,`${getAd6}`]"
            :width="400"
            :height="200"
            :show-values="true"

          />
      </v-layout>
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
    adArr: [],
    timeArr:[]
  }),
  computed: {
    startData() {
      return this.$store.state.startData;
    },
    getAds() {
      return this.$store.getters.getAds;
    },
    getAd2() {
      return this.$store.state.ad2;
    },
    getAd3() {
      return this.$store.state.ad3;
    },
    getAd4() {
      return this.$store.state.ad4;
    },
    getAd5() {
      return this.$store.state.ad5;
    },
    getAd6() {
      return this.$store.state.ad6;
    }
  },//end computed
};
</script>
