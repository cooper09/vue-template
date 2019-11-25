<template>
  <div class="animated fadeInUp myPage">
    <v-btn class="closeBtn" fab dark color="#DB3539" @click="next()"><v-icon dark >mdi-arrow-right-bold</v-icon></v-btn>
    <v-btn class="closeBtn" fab dark color="#DB3539" @click="prev()"><v-icon dark >mdi-arrow-left-bold</v-icon></v-btn>
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
      relationships:['owner','architect'],
      budgets: ["<$20,000", "$20,000 - $50,000", "$100,000 - $250,000", "$250,000 - $500,000", "$500,000+"]
    }),
    methods: {
    prev() {
      //alert("NExt page");
      this.$router.push('/page3')
    },
    next() {
      //alert("Prev page");
      this.$router.push('/');
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
            alert('Your info has be posted. We should be in touch for you shortly! ' );
            //
            this.$router.push('/')

            console.log('email body object: ', this.registration.name )
          /*  let body = "Name: "+this.registration.name+"%0D%0A project type: "+ this.registration.projectType+"%0D%0A startTime: "+ this.registration.startTime;
            //let body = "Hello World. \r\n My name is Jennifer. %0D%0A What is your name?"
            //JSON.stringify(this.registration )
            console.log('email body string: ', body )
;            //cooper s - send out email here...
            window.open('mailto:cooper.smith@boucherco.com?subject=kweku_project&body='+ body ); 

        const sgMail = require('@sendgrid/mail');
          sgMail.setApiKey(process.env.SENDGRID_API_KEY);
          //sgMail.setApiKey('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');
          const msg = {
            to: 'cooper.smith@boucherco.com',
            from: 'cooperatkmba@gmail.com',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
          };
          console.log("Send msg: ", msg );
          sgMail.send(msg);
  */
        }
  }//end methods
}//export default
</script>
