<template>
  <div class="w-full">
    <LandingHero />
    <Amazon />
    <Learn />
    <Testi />
    <Questions />
    <Schedule />
    <div
      class="fixed bg-red bottom-5 md:bottom-10 right-2 sm:right-10 md:right-20 bg-red z-100"
    >
      <button
        class="bg-emerald-500 text-white active:bg-emerald-600 font-bold px-2 py-2 sm:px-3 sm:py-3 uppercase text-base rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative"
      >
        <img
          src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/identity/wa-icon.png"
          class="h-10 w-10 transform transition duration-200 hover:scale-110"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script>
import LandingHero from "~/components/Hero/LandingHero.vue";
import Amazon from "~/components/Amazon/Amazon.vue";
import Learn from "~/components/Learn/Learn.vue";
import Testi from "~/components/Testi/Testi.vue";
import Questions from "~/components/Questions/Questions.vue";
import Schedule from "~/components/Schedule/Schedule.vue";
export default {
  components: { LandingHero, Amazon, Learn, Testi, Questions, Schedule },
  name: "IndexPage",
};
</script>
