<template>
  <span>
    <home-hero></home-hero>
    <home-detail></home-detail>
    <home-plans></home-plans>
  </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetail from '@/components/HomeDetail';
import HomePlans from '@/components/HomePlans';

export default {
  name: 'home',
  components: {
    HomeHero,
    HomeDetail,
    HomePlans
  },
};
</script>
