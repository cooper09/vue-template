<template>
<div>
   <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Conversions</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="http://source.unsplash.com/hpjSkU2UYSU" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">Boucher+Co</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Boucher+Co</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="http://source.unsplash.com/ra4vJwxnvAo" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">Facebook</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Facebook</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="http://source.unsplash.com/shr_Xn8S8QU" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">Google</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Google</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>


</div>
</template>

<script>
export default {
    name: 'HomePlans'
};
</script>

<style scoped>
</style>