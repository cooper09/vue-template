<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      Chart goes here....buddy
      {{myData}}
      <div class="container">
        <canvas id="myChart">TEST</canvas>
      </div>
    </v-layout>
  </v-container>
</template>

<script>

import { Line } from 'vue-chartjs'

export default {
  extends: Line,
/*  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },//end props */
  data:() =>({
    chartdata: {
      labels:['January','February'],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "ccc",
          data: this.$store.state.myData
        }
      ]
    }//end chartdata

  }),//end data */
  computed: {
    myData () {
      return this.$store.state.mydata
    }
  },
  mounted () {
    let myChart = document.getElementById('myChart').getContext('2d');
    console.log("Chart goes here: ", myChart);

  //console.log("Our data: ", this.chartdata.datasets[0].data[0] );
  console.log("Our data: ", this.myData );

    let testChart = new Chart(myChart, {
      type: 'doughnut',
      data: {
        labels:["one","two","three"],
        datasets:[
          {
            label: "Stinky Face",
            //data: this.chartdata.datasets[0].data
            data: this.myData
          }
        ],
        backgroundColor: [
          'rgba(255,99,132)',
          'rgba(255,69,132)',
          'rgba(255,39,132)'
        ]
      }//end data
    })//end testChart
  }//end mounted
}//end exports
</script>
