<template>
    <div>
        <home-plans></home-plans>
        <meal-recipes></meal-recipes>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import Campaigns from '@/components/Campaigns';
export default {
    name: 'Menu',
    components: {
        HomePlans,
        Campaigns
    }
}; //end export
</script>

<style scoped></style>
