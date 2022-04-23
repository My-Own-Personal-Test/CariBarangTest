<template>
  <div class="w-full">
    <LandingHero />
    <Amazon />
    <Learn />
    <Testi />
    <Questions />
  </div>
</template>

<script>
import LandingHero from "~/components/Hero/LandingHero.vue";
import Amazon from "~/components/Amazon/Amazon.vue";
import Learn from "~/components/Learn/Learn.vue";
import Testi from "~/components/Testi/Testi.vue";
import Questions from "~/components/Questions/Questions.vue";
export default {
  components: { LandingHero, Amazon, Learn, Testi, Questions },
  name: "IndexPage",
};
</script>
