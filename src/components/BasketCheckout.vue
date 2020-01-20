<template>
  <v-container   class="animated fadeIn container">

  <form action="">
            <v-layout>
                <v-flex x12 m12 l12>
                    <strong>Payment address</strong>
                    <v-text-field label="Name"></v-text-field>
                    <v-text-field label="Address"></v-text-field>
                    <v-text-field label="Zipcode"></v-text-field>
                    <v-text-field label="City"></v-text-field>
                    <v-text-field label="Phone"></v-text-field>
                    <v-text-field label="E-mail"></v-text-field>

                    <v-checkbox v-model="delivery_address" label="Other delivery address"></v-checkbox>
                </v-flex>
                <v-flex x6>
                    <strong>Delivery address</strong>
                    <div v-if="delivery_address">
                        <v-text-field label="Name"></v-text-field>
                        <v-text-field label="Address"></v-text-field>
                        <v-text-field label="Zipcode"></v-text-field>
                        <v-text-field label="City"></v-text-field>
                      
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
        <PayPage />
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
  data: () => ({
    delivery_address: false
  }),
  methods: {
    nextPage() {
      //this.$router.push('/pay')
    }
  }
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
</style>
