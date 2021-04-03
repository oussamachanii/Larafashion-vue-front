<template>
  <div class="bg-white ">
    <div class="flex  border-b lg:container lg:mx-auto h-5/6 ">
      <div class="flex w-full lg:w-1/2 flex-col lg:p-18 lg:py-36 ">
        <h1
          class="text-7xl font-bold text-center lg:text-left text-current my-6 lg:my-4  "
        >
          Discover <br />
          your style.
        </h1>
        <h6
          class="text-xl text-center font-semibold  lg:text-left text-gray-600 my-8 lg:my-4"
        >
          Save Hours of searching and love your look
          <br class="hidden lg:block" />
          with your own personal stylist
        </h6>
        <div class="flex px-3 justify-between lg:justify-start my-16 lg:my-8 ">
          <input
            type="text"
            class="px-4 py-4 w-4/5 mr-4 shadow-lg lg:-ml-4 bg-gray-300 rounded-xl focus:bg-gray-200 focus:rounded-xl focus:shadow-2xl text-xl"
          />
          <button
            class=" w-1/5 bg-current py-4 px-8 rounded-xl shadow-lg transform hover:scale-110"
          >
            <svg
              class="w-8 h-8 fill-current text-white  mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- <div class="hidden lg:block  relative  bg-yellow-700 w-1/2">
      <img
        src="../assets/undraw_add_to_cart_vkjp.svg"
        class=" absolute object-cover w-full h-full p-12 "
      />
    </div> -->
      <!-- <div
        class="w-72 h72 transform rotate-50 bg-gradient-to-r from-current-to-current "
      ></div> -->
      <!-- <div
        class="w-2/3 h-full  absolute  bg-current-dark rounded-3xl transform z-0 right-4"
        style="transform: rotate(45deg)"
      ></div> -->
      <div class="relative w-1/2 hidden lg:block">
        <div
          class=" w-2/3 h-2/3 m-auto mt-24 bg-current  transform rounded-tr-3xl rounded-bl-3xl shadow-3xl z-0 scale-125 relative "
        >
          <!-- <div
          class=" w-2/3 h-2/3 m-auto mt-20 bg-gradient-to-l from-current to-current-light  transform rounded-tr-3xl rounded-bl-3xl shadow-3xl z-0 scale-125 relative"
        > -->
          <img
            src="../assets/pexels-luca.png"
            class="absolute z-10  object-cover h-full w-full   "
            alt="Fashion Model"
            draggable="false"
          />
        </div>
        <!-- <img
          src="../assets/pexels-luca.png"
          class="absolute z-10 top-0  -mt-56"
          alt="Fashion Model"
          draggable="false"
        /> -->
        <!-- <div
          class=" w-full h-full object-cover bg-current-dark rounded-2xl -right-3 -top-3 transform rotate-45 scale-150  z-0"
          style="z-index:0;"
        ></div>  -->
        <!-- <img
          src="../assets/undraw_add_to_cart_vkjp.svg"
          class="w-full h-full p-12 "
        /> -->
        <!-- <img
          src="../assets/landing.png"
          draggable="false"
          class="w-full h-full absolute object-cover -mr-52"
        /> -->
      </div>
    </div>
  </div>
  <Trend></Trend>
  <TopRated></TopRated>
  <BestDeals></BestDeals>

  <div class="bg-gray-100 flex">
    <div class="m-auto py-16">
      <h1 class="text-5xl mb-4 text-current text-center font-bold">
        Get Discount Info
      </h1>
      <div class="w-full my-6 px-6 text-center">
        <span class="text-lg  text-gray-600 text-center"
          >Subscribe Our newsletter for get notification about new updates.
          informations discount , etc</span
        >
      </div>
      <form class="px-4">
        <input
          type="email"
          placeholder="Type Your Email "
          class="px-4 py-4 mb-4 w-full mr-4 shadow-lg bg-gray-300 rounded-xl focus:bg-gray-200 focus:rounded-xl focus:shadow-2xl text-xl"
        />
        <button
          type="submit"
          class=" w-full bg-current py-4 px-8 rounded-xl shadow-lg my-4 "
        >
          <span class="text-white font-bold">Subscribe</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Trend from "../components/Trend.vue";
import TopRated from "../components/TopRated.vue";
import BestDeals from "../components/BestDeals.vue";
export default {
  components: { TopRated, BestDeals, Trend },
};
</script>

<style></style>
