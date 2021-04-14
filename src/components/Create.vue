<template>
  <v-container   class="animated fadeIn container">
   Create Transaction Page
    <span class="right"><v-btn @click="exitPage()">Exit</v-btn></span>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >

        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  
  }),
  methods: {
    exitPage() {
      this.$router.push('/')
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
