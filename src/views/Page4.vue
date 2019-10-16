<template>
  <div class="animated fadeInUp myPage">
    <v-btn class="closeBtn"  fab dark color="#DB3539"  @click="closeMe()">X</v-btn>
    <h3 class="red--text display-5 font-weight-italic dark mb-5">Please provide the rest of your information.</h3>
    <v-content>
		<v-container>
          <v-stepper v-model="step" vertical>
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1" color="#DB3539">Your Information</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="step > 2" color="#DB3539">Your Address</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3" color="#DB3539">Add'l Info</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                  
                 <v-text-field label="Name" v-model="registration.name" required></v-text-field>
                 <v-text-field label="Phone" v-model="registration.phone" required></v-text-field>
                 <v-text-field label="Email" v-model="registration.email" required></v-text-field>
                                    
                <v-btn color="#DB3539"  dark @click.native="step = 2">Continue</v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                  
                  <v-text-field label="Street" v-model="registration.street" required></v-text-field>
                  <v-text-field label="City" v-model="registration.city" required></v-text-field>
                  <v-text-field label="State" v-model="registration.state" required></v-text-field>
                  <v-text-field label="Zip" v-model="registration.zip" required></v-text-field>

                <v-btn text @click.native="step = 1"  color="#DB3539">Previous</v-btn>
                <v-btn color="#DB3539"  dark @click.native="step = 3">Continue</v-btn>
                
              </v-stepper-content>
              <v-stepper-content step="3">
                
                <v-select label="Budget" v-model="registration.budget" 
                  :items="budgets"required></v-select>
                <v-select label="Relationship" v-model="registration.relationship" 
                          :items="relationships" required></v-select>
                <v-text-field label="Project Description" 
                              v-model="registration.description" required></v-text-field>
                <v-btn text @click.native="step = 2">Previous</v-btn>
                <v-btn color="#DB3539"  dark @click.prevent="submit">Save</v-btn>
                
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>         
              
        </v-container>    
    
    </v-content>
     <!-- <br/><br/>Debug: {{registration}} -->
  </div>
</template>
<script>
export default {
    data: () => ({
      step:1,
      registration:{
        name:null,
        phone:null,
        email:null,
        street:null,
        city:null,
        state:null,
        zip: null,
        relationship: "owner",
        budget: "$100",
        numtickets:0,
        shirtsize:'XL'
      },
      relationships:['owner','renter','manager'],
      budgets: ["$1000", "$10000", "100000"]
    }),
    methods: {
        closeMe() {
        //alert("NExt page");
            this.$router.push('/')
        },//end page2()
        loadPropertyType(startTime) {
            console.log("Property Type selected: ", startTime )
            this.$router.push('/')
        },//end page2()
        submit() {
           // alert('Your info has be posted. We should be in touch for you shortly! '+ this.registration );
            console.log("Our registration form: ", this.registration );
            // load up our data for storage

            this.$store.dispatch('setInfoData', this.registration );
            //
           // this.$router.push('/')
        }
  }//end methods
}//export default
</script>
