<template>
  <v-container   class="animated fadeIn container">


        <div v-if="!paidFor">
        <h3> Please complete your purchase using PayPal {{name}} {{address}}</h3>
        <p> Your Total is:   ${{getQty}}
          <br/><br/>
         <v-btn @click="payMethod()" color='blue white--text' >Pay Now</v-btn>
        <br/><br/>
          <div ref="paypal"></div>
        </div>

    <hr />
    <br/><br/>
        <div v-if="paidFor">
            <h3>Thanx for Shopping with the Beat 139 Crew. Stay Live!</h3>
          </div>
    <br/><br/>
    <hr />
  </v-container>
</template>


<script>
import axios from 'axios';

export default {
  mounted: function() {
    /*  const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=AYvEZYKAlTLeErYUz9KdH_2twNwANrX9gWVlmR3D16GHndWk0lcrSXfDjle3TF-1jdiwfKMyUslZIHrW"
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script); */
  },
  computed: {
     getCartItems () {
      return this.$store.getters.getCartItems;
    },
    getTotal () {
        return this.$store.state.totalPrice;
    },
    getOne () {
        return this.$store.state.itemOne;
    },
        getTwo () {
        return this.$store.state.itemTwo;
    },
        getThree () {
        return this.$store.state.itemThree;
    },
    getQty() {
      return this.$store.getters.getQty;
    },
  },//end computed
  
 //cooper s - picks up the THIS from the current scope and NOT the component scope
  props:['name',
          'address',
          'city',
          'state',
          'country',
          'zip',
          'phone',
          'email'
    ],
  data () {
    return {
      loaded: false,
      paidFor: false
    }//end return
  },//end data
  methods: {
    payMethod() {
      const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=AYvEZYKAlTLeErYUz9KdH_2twNwANrX9gWVlmR3D16GHndWk0lcrSXfDjle3TF-1jdiwfKMyUslZIHrW"
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);

    },//end payMethods
    nextPage() {
      this.$router.push('/')
    },
    setLoaded: function() {
      console.log("setLoaded this is: ", this)
        this.loaded = true;
        window.paypal
            .Buttons({
                createOrder: (data, actions ) => {
                    return actions.order.create({
                        purchase_units:[
                            {
                                description: this.name,
                                amount:{
                                    currency_code: "USD", 
                                    value:  this.getQty
                                }
                            }
                        ]
                    })
                },
                onApprove: async (data, actions ) => {
                  const order = await actions.order.capture();
                  this.paidFor = true;
                  console.log("Payment approved: ", data.ID );
                  console.log("Payment info: ", JSON.stringify(data));

                  // cooper s - send captured data to DB
                  console.log("Send data to DB " , this.name , " address: ", this.address, " city: ", this.city," state: ", this.state, " zip: ", this.zip, " phone: ", this.phone, " email: ", this.email );

                  var timestamp = new Date();

                  var infoObj = {
                    orderId: data.orderID,
                    paymentId: data.paymentID,
                    payerId:data.payerID,
                    items: this.getCartItems,
                    amount:this.getQty,
                    name: this.name,
                    address: this.address,
                    city: this.city,
                    state: this.state,
                    country: this.country,
                    zip: this.zip,
                    phone: this.phone,
                    email: this.email,
                    timestamp: timestamp
                  }

                console.log("PayPage sending data: ",  infoObj, " to database ");
                  const url = `https://sleepy-everglades-99189.herokuapp.com/beatcart`;

                  axios.post(url,infoObj)
                    .then(function (response) {
                      console.log("POST: ", response.data);
                    //clear fields
                    })
                    .catch(function (error) {
                      console.log("POST Error: ",  error);
                    }); 

              this.$store.dispatch("clearCart");
              //this.$router.push('/')
              
        }// on Approval
      })//end windows.paypal.Buttons
      .render(this.$refs.paypal )
    },//setLoaded
  },//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
    .container {
    padding: 0;
  }
</style>
