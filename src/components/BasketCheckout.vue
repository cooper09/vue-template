<template>
  <v-container   class="animated fadeIn container">

  <form action=""  >
            <v-layout>
                <v-flex xs12 md6 lg4 class="myform">
                    <strong>Payment Information</strong>
                    <v-text-field label="Name" v-model="name" rules="inputRules"></v-text-field>
                    <v-text-field label="Address" v-model="address" rules="inputRules"></v-text-field>
                    <v-text-field label="Zipcode" v-model="zip" rules="inputRules"></v-text-field>
                    <v-text-field label="City" v-model="city" rules="inputRules"></v-text-field>
                    <v-text-field label="State" v-model="state" rules="inputRules"></v-text-field>
                    <v-text-field label="Country" v-model="country"></v-text-field>
                    <v-text-field label="Phone" v-model="phone" rules="inputRules"></v-text-field>
                    <v-text-field label="E-mail" v-model="email" rules="inputRules"></v-text-field>

                    <v-checkbox v-model="delivery_address" label="Other delivery address"></v-checkbox>
                </v-flex>
                <v-flex x6>
                    <strong>Delivery address</strong>
                    <div v-if="delivery_address">
                        <v-text-field label="Name" v-model="name" rules="inputRules"></v-text-field>
                        <v-text-field label="Address" v-model="address" rules="inputRules"></v-text-field>
                        <v-text-field label="Zipcode" v-model="zip" rules="inputRules"></v-text-field>
                        <v-text-field label="City" v-model="city" rules="inputRules"></v-text-field>
                        <v-text-field label="State" v-model="state" rules="inputRules"></v-text-field>
                        <v-text-field label="Country" v-model="country" rules="inputRules"></v-text-field>
                      
                    </div>
                    
                    <div v-else m3>
                        <v-alert type="info" :value="true">
                            The delivery address is the same as the payment address
                        </v-alert>
                        <Review />
                    </div>
                </v-flex>

            </v-layout>

        </form>
      <div v-if: showPay >
        <PayPage :name="name" 
                  :address="address" 
                  :city="city" 
                  :state="state" 
                  :country="country" 
                  :zip="zip" 
                  :phone="phone" 
                  :email="email" />
      </div> 
        <hr />

  </v-container>
</template>

<script>
import Review from '@/components/Review';
import PayPage from '@/components/PayPage'

export default {
  components: {
    Review,
    PayPage
  },
  data() {
    return {
      name: "",
      address: "",
      city:"",
      state:"",
      country: "",
      zip: "",
      phone: "",
      email: "",
      delivery_address: false,
      showPay: false,
      inputRules: [
        v => v.length  >=1 || alert("Field is required.")
      ]
    }
  },//end data
  methods: {
    nextPage() {
      //this.$router.push('/pay')
    },
  }//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
  .myform {
    margin-right: 1em;

  }
  .container {

    padding: 0;
  }
</style>
