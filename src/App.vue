<template>
<div>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span><img src="kweku-logo-color.png"></span>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        color="#db3539"
        href="https://kweku.com"
        target="_blank"
      >
        <span class="hidden-sm-and-down">Go To Web Site</span><span class="hidden-md-and-up">Web Site</span>
      </v-btn>
    </v-app-bar>
    <v-content   >
      <HelloWorld/> 
    </v-content>
    <v-content class="animated fadeIn">
      <router-view></router-view>
    </v-content>
  </v-app>
    <hr />
<!--    <br/><br/>Project Type: {{projType}}
    <br/>Start Time: {{startTime}}
    <br/>Property Tytpe: {{propType}}  -->

      <v-footer
      absolute
      class="red dark white--text text-center"
    >
      <v-col
        class="text-center footer ex"
        cols="12"
      >
      <span>
        Kweku Development <br/>
        2 Hamilton Avenue <br/>
        New Rochelle, New York 10801 
      </span>
      <span class="right">
        Office Phone: 914-229-3445<br/>
        Emergency Phone: 914-586-3004<br/>
        Email: reno@kweku.com<br/><br/>
      </span>
        <br/><br/>
        {{ new Date().getFullYear() }} — <strong>© Kweku Development Corporation All Right Reserved</strong>

      </v-col>
    </v-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
  computed: {
    projType() {
      return this.$store.state.projType;
    },
    startTime() {
      return this.$store.state.startTime;
    },
    propType() {
      return this.$store.state.propType;
    },
  },//end computed
  created() {
    this.$store.dispatch('getData');
   } //end created
};
</script>
<style>
body {
  padding: 2em;
}
.startBtn {
 background: #db3539;
}
.closeBtn {
    float: right;
    margin-right: 0.5em;
  }
.myPage {
  border:#db3539  1px solid;
  position: relative;
  top: -5em;
  padding: 1em;
}
.mainBtn {
  width: 45%;
  margin: .25em;
}
.footer {
  background: #d93940;
  font-family: verdana;
  font-size: 0.8em;
  font-style: strong;
  color: #fff;
  padding: 2em;
}
.right {
  float:right;
  position: relative;
  bottom: 2em;
  
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
 {
   .right {
     display: none;
   }
}
</style>
