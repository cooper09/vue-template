<template>
<div class="animated fadeInUp myPage  ">
  <v-container>

    <v-btn class="closeBtn" fab dark color="#DB3539" @click="next()"><v-icon dark >mdi-arrow-right-bold</v-icon></v-btn>
    <v-btn class="closeBtn" fab dark color="#DB3539" @click="prev()"><v-icon dark >mdi-arrow-left-bold</v-icon></v-btn>
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
            <v-btn class="mainBtn" dark color="#DB3539" @click="loadProdType(1)"><span class="hidden-sm-and-down">Bathroom Remodel</span>
                <v-icon dark >mdi-paper-roll-outline</v-icon>
            </v-btn>
    
            <v-btn class="mainBtn" dark color="#DB3539"  @click="loadProdType(2)"><span class="hidden-sm-and-down">Kitchen Remodel</span>
                <v-icon dark >mdi-fridge-outline</v-icon>
            </v-btn>
            <v-btn class="mainBtn" dark color="#DB3539"  @click="loadProdType(3)"><span class="hidden-sm-and-down">Multi-Room Remodel</span>
                <v-icon dark>mdi-floor-plan</v-icon>
            </v-btn>
            <v-btn class="mainBtn" dark color="#DB3539"  @click="loadProdType(4)"><span class="hidden-sm-and-down">Home Remodel</span>
                <v-icon dark>mdi-home-edit-outline</v-icon>
            </v-btn>
            <v-btn class="mainBtn" dark color="#DB3539" @click="loadProdType(5)"><span class="hidden-sm-and-down">New Home Construction</span>
                <v-icon dark>mdi-home-analytics</v-icon>
            </v-btn>
            <v-btn class="mainBtn" dark color="#DB3539"  @click="loadProdType(6)"><span class="hidden-sm-and-down">Roofing</span>
                <v-icon dark>mdi-home-roof</v-icon>
            </v-btn>
              <v-btn class="mainBtn" dark color="#DB3539"  @click="loadProdType(7)"><span class="hidden-sm-and-down">Other</span>
                <v-icon dark>mdi-account-question</v-icon>
            </v-btn>

        </v-layout>
    
  </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({

    projectType:"",
    startTime:"",
    propertyType: "",
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
    prev() {
      //alert("NExt page");
      this.$router.push('/')
    },
    next() {
      //alert("NExt page");
      this.$router.push('/page2');
    },
    loadProdType(projectType) {
      console.log("Project type selected: ", projectType );
      // set the propertype in the store
      
      switch(projectType) {
        case 1:
          this.$store.dispatch('setProjType', 'bathroom')
        break;
        case 2:
          this.$store.dispatch('setProjType', 'kitchen')
        break;
        case 3:
          this.$store.dispatch('setProjType', 'multi-room')
        break;
        case 4:
          this.$store.dispatch('setProjType', 'home remodel')
        break;
        case 5:
          this.$store.dispatch('setProjType', 'new home')
        break;
        case 6:
          this.$store.dispatch('setProjType', 'roofing')
        break;
        case 7:
          this.$store.dispatch('setProjType', 'other')
        break

      }//end switch

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
