<template>
  <v-container   class="animated fadeIn container">

        <h3> Please complete your purchase using PayPal </h3>
        <p> Your Total is:  ${{getTotal}}
        <div v-if="!paidFor">

        </div>
        <div ref="paypal"></div>
    <hr />
    <br/><br/>
   
    <br/><br/>
    <hr />
  </v-container>
</template>


<script>
export default {
  mounted: function() {
      const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=AYvEZYKAlTLeErYUz9KdH_2twNwANrX9gWVlmR3D16GHndWk0lcrSXfDjle3TF-1jdiwfKMyUslZIHrW"
      script.addEventListener("load", this.setLoaded );
      document.body.appendChild(script);
  },
  computed: {
     getCartItems () {
      return this.$store.getters.getCartItems;
    },
    getTotal () {
        return this.$store.state.totalPrice;
    }
  },//end computed
  data: () => ({
    loaded: false,
    paidFor: false,
    product: {
        price: this.$store.state.totalPrice,
        description: "Beat 139 Apparel"
    }
  }),
  methods: {
    nextPage() {
      this.$router.push('/')
    },
    setLoaded: function() {
        this.loaded = true;
        window.paypal
            .Buttons({
                createOrder: (data, actions ) => {
                    return actions.order.create({
                        purchase_units:[
                            {
                                description: this.product.description,
                                amount:{
                                    currency_code: "USD"
                                }
                            }
                        ]
                    })
                },

            })//end windows.paypal.Buttons
            .render(this.$refs.paypal )
    }//setLoaded
  },//end methods
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
</style>
