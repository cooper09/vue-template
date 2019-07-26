<template>
        <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(campaign, idx) in campaigns" :key="idx">
                <v-card>
                    <v-responsive>
                        <v-img :src="campaign.utm_campaign"></v-img>
                    </v-responsive>

                    <v-card-text>
                        <div class="title">{{campaign.description}}</div>

                        <div class="subheading">Campaigns</div>
                        <ul>
                        <!--    <li v-for="(ingredient, i) in item.recipe.ingredientLines" :key="i">{{ingredient}}</li> -->
                        </ul>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Campaigns',
    computed: {
        campaigns() {
            return this.$store.state.campaigns;
        }
    }
}; //end export
</script>

<style scoped></style>
