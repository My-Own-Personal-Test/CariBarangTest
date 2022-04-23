<template>
  <div class="w-full">
    <LandingHero />
    <Amazon />
  </div>
</template>

<script>
import LandingHero from "~/components/Hero/LandingHero.vue";
import Amazon from "~/components/Amazon/Amazon.vue";
export default {
  components: { LandingHero, Amazon },
  name: "IndexPage",
};
</script>
