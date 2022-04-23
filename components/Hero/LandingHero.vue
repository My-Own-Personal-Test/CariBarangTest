<template>
  <div class="hero w-full relative">
    <div
      class="max-w-2xl mx-auto py-8 px-4 sm:py-14 sm:px-4 lg:max-w-7xl lg:px-8"
    >
      <div class="w-full mx-auto">
        <img
          src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/caribarang-logo.png"
          class="max-w-sm mx-auto"
          alt=""
        />
      </div>
      <div
        class="w-full sm:w-10/12 mx-auto text-center text-white py-2 sm:py-6"
      >
        <h1 class="text-xl sm:text-6xl font-bold leading-tight capitalize">
          Jadi pedagang online internasional dengan amazon FBA, Belajar langsung
          dari ahlinya
        </h1>
        <p class="py-3 text-base sm:text-xl italic">
          <strong
            >(It's your turn to become a worldwide online seller!
            <br />
            Start selling from all around the world with Amazon FBA. Learn more
            from the expert!)
          </strong>
        </p>
      </div>
      <div
        class="w-full sm:w-10/12 mx-auto text-center text-white py-2 sm:py-6"
      >
        <p class="py-3 text-md sm:text-2xl">
          <strong> 5000+ orang </strong>
          sudah mengikuti seminar ini yang diadakan di berbagai negara asia
          seperti Singapura, Filipina, Malaysia, Taiwan, dan Hongkong
        </p>
        <p class="py-3 text-base sm:text-xl italic">
          (Be part of 5.000+ people who successfully join our seminar from
          Southeast Asia, such as Singapore, <br />
          Malaysia, Taiwan, Hongkong, and Phillipines.)
        </p>
      </div>
      <div class="grid grid-cols-3 bg-white rounded-lg px-3 mt-0 sm:mt-5">
        <div
          class="border-r border-gray-700 last:border-r-0 py-2 md:py-5 pl-1 sm:pl-12 flex flex-col"
        >
          <span class="text-red-600 text-base sm:text-2xl"> Wednesday </span>
          <span class="text-gray-800 text-sm sm:text-4xl">
            <strong>18</strong>
            <span class="text-gray-600 font-normal"> May 2022 </span>
          </span>
          <span class="mt-0 sm:mt-5 font-medium text-sm sm:text-sm">
            14.00 - 17.00 WIB
          </span>
        </div>
        <div
          class="border-r border-gray-700 last:border-r-0 py-2 md:py-5 pl-1 sm:pl-12 flex flex-col"
        >
          <span class="text-red-600 text-base sm:text-2xl"> Thursday </span>
          <span class="text-gray-800 text-sm sm:text-4xl">
            <strong>19</strong>
            <span class="text-gray-600 font-normal"> May 2022 </span>
          </span>
          <span class="mt-0 sm:mt-5 font-medium text-sm sm:text-sm">
            14.00 - 17.00 WIB
          </span>
        </div>
        <div class="last:border-r-0 py-2 md:py-5 pl-1 sm:pl-12 flex flex-col">
          <span class="text-red-600 text-base sm:text-2xl"> Saturday </span>
          <span class="text-gray-800 text-sm sm:text-4xl">
            <strong>21</strong>
            <span class="text-gray-600 font-normal"> May 2022 </span>
          </span>
          <span class="mt-0 sm:mt-5 font-medium text-sm sm:text-sm">
            10.00 - 14.00 WIB
          </span>
        </div>
      </div>
      <div class="absolute -bottom-5 sm:-bottom-8 button-register">
        <nuxt-link
          to="/register"
          class="flex bg-red-500 text-white active:bg-red-600 font-bold capitalize text-sm sm:text-lg px-6 sm:px-12 py-2 sm:py-4 rounded-xl shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-white"
          >Register Now</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url("https://caribarang.oss-ap-southeast-1.aliyuncs.com/general/lp/Background%20seminar(1).jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 60vh;
  background-attachment: fixed;
}
.button-register {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
