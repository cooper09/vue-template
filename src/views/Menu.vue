<template>
    <div>
        DashBoard
        <home-plans></home-plans>
        <meal-recipes></meal-recipes>
        <dash-board></dash-board>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import Campaigns from '@/components/Campaigns';
import DashBoard from '@/components/DashBoard';
export default {
    name: 'Menu',
    components: {
        HomePlans,
        Campaigns,
        DashBoard
    }
}; //end export
</script>

<style scoped></style>
