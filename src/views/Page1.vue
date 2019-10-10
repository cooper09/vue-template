<template>
<div class="animated fadeInLeft myPage  ">
  <v-container>
    <v-btn class="closeBtn" @click="closeMe()">X</v-btn>
    <v-layout
      text-center
      wrap
    >
        <v-layout justify-center>
          <a
            v-for="(next, i) in mydata"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
        <!--    {{ next.data }} -->
          </a>
        </v-layout>
    </v-layout>
    <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(item, idx) in mydata" :key="idx">
            <!--    <div class="subheading"><b>Product:</b> {{item.data}}</div>  -->
            </v-flex>
            <v-spacer></v-spacer>

        </v-layout>
        <v-layout row wrap align-center align-content-space-between>
            <v-btn class="mainBtn" @click="loadStart(1)">Bathroom Remodel</v-btn>
            <v-btn class="mainBtn"  @click="loadStart(2)">Kitchen Remodel</v-btn>
            <v-btn class="mainBtn"  @click="loadStart(3)">Multi=Room Remodel</v-btn>
            <v-btn class="mainBtn"  @click="loadStart(4)">Home Remodel</v-btn>
            <v-btn class="mainBtn" @click="loadStart(5)">New Home Construction</v-btn>
            <v-btn class="mainBtn"  @click="loadStart(6)">Roofing</v-btn>
            <v-btn class="mainBtn"  @click="loadStart(7)">Solar Installation</v-btn>
            <v-btn class="mainBtn"  @click="loadStart(8)">New Commerical Remodel</v-btn>
        </v-layout>
    
  </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
   
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
  methods: {
    closeMe() {
      //alert("NExt page");
      this.$router.push('/')
    },//end page2()
    loadStart(projectType) {
      console.log("Project type selected: ", projectType )
      this.$router.push('/page2')
    }//end page2()
  }//end methods
  ,
  computed: {
    mydata() {
      return this.$store.state.startData; 
    }
  }//end computed
};//end export
</script>
