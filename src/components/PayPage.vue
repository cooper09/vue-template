<template>
  <v-container   class="animated fadeIn container">


        <div v-if="!paidFor">

        <h3> Please complete your purchase using PayPal </h3>
        <p> Your Total is:  ${{getTotal}}
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
  },//end computed
 /* 
 cooper s - picks up the THIS from the current scope and NOT the component scope
 
  data: () => ({git mer
    loaded: false,
    paidFor: false,
    product: {
        price: 9.99,// how do I get getTotal here...???
        description: "Beat 139 Apparel"
    paidFor: false
  }), */
  data () {
    return {
      loaded: false,
      paidFor: fals
    }
  },
  methods: {
    payMethod() {
      const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=AYvEZYKAlTLeErYUz9KdH_2twNwANrX9gWVlmR3D16GHndWk0lcrSXfDjle3TF-1jdiwfKMyUslZIHrW"
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
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
                                description: "test",
                                amount:{
                                    currency_code: "USD", 
                                    value:  this.getTotal
                                }
                            }
                        ]
                    })
                },
                onApprove: async (data, actions ) => {
                  console.log("What the fuck: ", this.completeSale )
                  const order = await actions.order.capture();
                  this.paidFor = true;

                }
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
</style>
