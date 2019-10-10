<template>
  <div class="animated fadeInLeft myPage">
    <v-btn class="closeBtn" @click="closeMe()">X</v-btn>
    <h3>Please Provide Info</h3>
    <v-content>
		<v-container>
          <v-stepper v-model="step" vertical>
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1">Your Information</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="step > 2">Your Address</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3">Misc Info</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                  
                 <v-text-field label="Name" v-model="registration.name" required></v-text-field>
                 <v-text-field label="Phone" v-model="registration.phone" required></v-text-field>
                 <v-text-field label="Email" v-model="registration.email" required></v-text-field>
                                    
                <v-btn color="primary" @click.native="step = 2">Continue</v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                  
                  <v-text-field label="Street" v-model="registration.street" required></v-text-field>
                  <v-text-field label="City" v-model="registration.city" required></v-text-field>
                  <v-text-field label="State" v-model="registration.state" required></v-text-field>
                  <v-text-field label="Zip" v-model="registration.zip" required></v-text-field>

                <v-btn text @click.native="step = 1">Previous</v-btn>
                <v-btn color="primary" @click.native="step = 3">Continue</v-btn>
                
              </v-stepper-content>
              <v-stepper-content step="3">
                
                <v-text-field label="Budget" type="number"
                              v-model="registration.budget" required></v-text-field>
                <v-select label="Relationship" v-model="registration.relationship" 
                          :items="relationships" required></v-select>
                <v-text-field label="Project Description" 
                              v-model="registration.description" required></v-text-field>
                <v-btn text @click.native="step = 2">Previous</v-btn>
                <v-btn color="primary" @click.prevent="submit">Save</v-btn>
                
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>         
              
        </v-container>    
    
    </v-content>
     <br/><br/>Debug: {{registration}}
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
        budget: null,
        numtickets:0,
        shirtsize:'XL'
      },
      relationships:['owner','renter','manager']
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
            alert('This is the post. Blah');
        }
  }//end methods
}//export default
</script>
