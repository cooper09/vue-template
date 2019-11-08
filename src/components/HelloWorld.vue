<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      Chart goes here....buddy
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
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },//end props
/*  data:() =>({
    chartdata: {
      labels:['January','February'],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "ccc",
          data: [40,20]
        }
      ]
    }//end chartdata

  }),//end data */
  mounted () {
    let myChart = document.getElementById('myChart').getContext('2d');
    console.log("Chart goes here: ", myChart);

    let testChart = new Chart(myChart, {
      type: 'doughnut',
      data: {
        labels:["one","two","three"],
        datasets:[
          {
            label: "Stinky Face",
            data: [23,40,40]
          }
        ]
      }
    })
  }//end mounted
}//end exports
</script>
